import { ItemStack } from "deepslate/core";
import {
    NbtByte,
    NbtCompound,
    NbtDouble,
    NbtInt,
    NbtList,
    NbtString,
    NbtTag,
} from "deepslate/nbt";
import {
    BlockDefinition,
    BlockDefinitionProvider,
    BlockFlagsProvider,
    BlockModel,
    BlockModelProvider,
    BlockPropertiesProvider,
    Identifier,
    ItemComponentsProvider,
    ItemModel,
    ItemModelProvider,
    ItemRenderer,
    TextureAtlas,
    TextureAtlasProvider,
} from "deepslate/render";
import { cacheManager } from "../cache-manager";
import {
    AssetResources,
    MinecraftAssetsRepository,
} from "./minecraft-repository";

// Helper to convert JSON to Deepslate NBT
function jsonToNbt(value: any): NbtTag {
    if (typeof value === "string") {
        return new NbtString(value);
    }
    if (typeof value === "number") {
        return Number.isInteger(value)
            ? new NbtInt(value)
            : new NbtDouble(value);
    }
    if (typeof value === "boolean") {
        return new NbtByte(value ? 1 : 0);
    }
    if (Array.isArray(value)) {
        return new NbtList(value.map(jsonToNbt));
    }
    if (typeof value === "object" && value !== null) {
        const map = new Map<string, NbtTag>();
        for (const [k, v] of Object.entries(value)) {
            map.set(k, jsonToNbt(v));
        }
        return new NbtCompound(map);
    }
    return new NbtByte(0);
}

class DeepslateResourceManager
    implements
        BlockDefinitionProvider,
        BlockModelProvider,
        TextureAtlasProvider,
        ItemModelProvider,
        BlockFlagsProvider,
        BlockPropertiesProvider,
        ItemComponentsProvider
{
    private blockDefinitions: Record<string, BlockDefinition> = {};
    private blockModels: Record<string, BlockModel> = {};
    private itemModels: Record<string, ItemModel> = {};
    private itemComponents: Map<string, any>;
    private textureAtlas: TextureAtlas;

    constructor(data: AssetResources) {
        this.textureAtlas = data.atlas;
        this.itemComponents = data.itemComponents;

        // Parse Block Definitions
        data.blockDefinitions.forEach((val, key) => {
            this.blockDefinitions[Identifier.parse(key).toString()] =
                BlockDefinition.fromJson(val);
        });

        // Parse Models
        data.models.forEach((val, key) => {
            this.blockModels[Identifier.parse(key).toString()] =
                BlockModel.fromJson(val);
        });

        // Parse Item Models
        data.itemDefinitions.forEach((val, key) => {
            if (val.model) {
                this.itemModels[Identifier.parse(key).toString()] =
                    ItemModel.fromJson(val.model);
            }
        });

        Object.values(this.blockModels).forEach((m) => m.flatten(this));
    }

    // Required by ItemComponentsProvider
    public getItemComponents(id: Identifier): Map<string, NbtTag> {
        const strId = id.toString();
        const componentsData = this.itemComponents.get(strId) ?? {};

        // Convert JSON object to Map<string, NbtTag>
        const result = new Map<string, NbtTag>();

        // 1. Load fetched components
        for (const [key, value] of Object.entries(componentsData)) {
            result.set(key, jsonToNbt(value));
        }

        // 2. Fallback/Default for 1.21+ rendering:
        if (!result.has("minecraft:item_model")) {
            result.set("minecraft:item_model", new NbtString(strId));
        }

        return result;
    }

    getBlockDefinition(id: Identifier) {
        return this.blockDefinitions[id.toString()];
    }
    getBlockModel(id: Identifier) {
        return this.blockModels[id.toString()];
    }
    getItemModel(id: Identifier) {
        return this.itemModels[id.toString()];
    }
    getTextureUV(id: Identifier) {
        return this.textureAtlas.getTextureUV(id);
    }
    getTextureAtlas() {
        return this.textureAtlas.getTextureAtlas();
    }
    getBlockFlags() {
        return { opaque: false };
    }
    getBlockProperties() {
        return null;
    }
    getDefaultBlockProperties() {
        return null;
    }
}

export class ItemRendererService {
    private static instance: ItemRendererService;
    private repo = MinecraftAssetsRepository.getInstance();

    private renderCache = new Map<string, string>();
    private pendingRenders = new Map<string, Promise<string>>();

    private glContext: WebGL2RenderingContext | null = null;
    private resourceManager: DeepslateResourceManager | null = null;

    private constructor() {}

    public static getInstance(): ItemRendererService {
        if (!this.instance) {
            this.instance = new ItemRendererService();
        }
        return this.instance;
    }

    public async renderItem(
        itemId: string,
        size: number = 64,
    ): Promise<string> {
        const cacheKey = `${itemId}:${size}`;

        // 1. In-Memory Check (Fastest)
        if (this.renderCache.has(cacheKey)) {
            return this.renderCache.get(cacheKey)!;
        }

        // 2. IndexedDB Check (Persistent)
        const persistentCache = await cacheManager.get<string>(
            "render-cache",
            cacheKey,
        );
        if (persistentCache) {
            this.renderCache.set(cacheKey, persistentCache);
            return persistentCache;
        }

        // 3. Queue logic to prevent double-rendering the same item at the same time
        if (this.pendingRenders.has(cacheKey)) {
            return this.pendingRenders.get(cacheKey)!;
        }

        const promise = this.performRender(itemId, size);
        this.pendingRenders.set(cacheKey, promise);

        try {
            const url = await promise;
            if (url) {
                this.renderCache.set(cacheKey, url);
                // Save to IndexedDB for next session
                await cacheManager.set("render-cache", cacheKey, url);
            }
            return url;
        } finally {
            this.pendingRenders.delete(cacheKey);
        }
    }

    private async performRender(itemId: string, size: number): Promise<string> {
        if (!this.resourceManager) {
            const rawResources = await this.repo.loadVersion("latest");
            this.resourceManager = new DeepslateResourceManager(rawResources);
        }

        if (!this.glContext) {
            const canvas = document.createElement("canvas");
            canvas.width = 128;
            canvas.height = 128;
            const gl = canvas.getContext("webgl2", {
                preserveDrawingBuffer: true,
                premultipliedAlpha: false,
            });
            if (!gl) throw new Error("WebGL2 not supported");
            this.glContext = gl;
        }

        try {
            const gl = this.glContext!;
            const resources = this.resourceManager!;
            const id = Identifier.parse(itemId);

            if (!resources.getItemModel(id)) {
                return "";
            }

            const itemStack = new ItemStack(id, 1, new Map());
            gl.clearColor(0, 0, 0, 0);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

            const renderer = new ItemRenderer(gl, itemStack, resources, {
                display_context: "gui",
            });
            
            gl.disable(gl.CULL_FACE);
            renderer.drawItem();

            return (gl.canvas as HTMLCanvasElement).toDataURL();
        } catch (e) {
            console.error(`Failed to render item ${itemId}`, e);
            return "";
        }
    }
}
