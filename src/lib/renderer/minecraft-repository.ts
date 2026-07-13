import { Identifier } from "deepslate/core";
import { TextureAtlas, upperPowerOfTwo, UV } from "deepslate/render";
import { cacheManager } from "../cache-manager";
import { TextureStitcher } from "./texture-stitcher";

const MCMETA_BASE = "https://cdn.jsdelivr.net/gh/misode/mcmeta@";
const MOD_BASE =
    "https://cdn.jsdelivr.net/gh/DAQEM/TinyMobFarmRemastered@1.21.11/common/src/main/resources/assets/tinymobfarm";

const MOD_FILES = {
    blockstates: [
        "iron_farm",
        "wood_farm",
        "stone_farm",
        "gold_farm",
        "diamond_farm",
        "emerald_farm",
        "inferno_farm",
        "ultimate_farm",
    ],
    blockModels: [
        "farm_preset",
        "iron_farm",
        "wood_farm",
        "stone_farm",
        "gold_farm",
        "diamond_farm",
        "emerald_farm",
        "inferno_farm",
        "ultimate_farm",
    ],
    itemModels: [
        "lasso",
        "item_farm_preset",
        "iron_farm",
        "wood_farm",
        "stone_farm",
        "gold_farm",
        "diamond_farm",
        "emerald_farm",
        "inferno_farm",
        "ultimate_farm",
    ],
    textures: ["item/lasso", "block/grass"],
};

export interface AssetResources {
    blockDefinitions: Map<string, any>;
    models: Map<string, any>;
    atlas: TextureAtlas;
    itemDefinitions: Map<string, any>;
    itemComponents: Map<string, any>;
}

export class MinecraftAssetsRepository {
    private static instance: MinecraftAssetsRepository;
    private cache: Map<string, AssetResources> = new Map();
    private loadingPromises: Map<string, Promise<AssetResources>> = new Map();

    private constructor() {}

    public static getInstance(): MinecraftAssetsRepository {
        if (!this.instance) {
            this.instance = new MinecraftAssetsRepository();
        }
        return this.instance;
    }

    public async getRecipe(id: string): Promise<any> {
        const [namespace, path] = id.split(":");
        let url = "";

        if (namespace === "minecraft") {
            url = `https://cdn.jsdelivr.net/gh/misode/mcmeta@data/data/minecraft/recipe/${path}.json`;
        } else if (namespace === "tinymobfarm") {
            url = `https://cdn.jsdelivr.net/gh/DAQEM/TinyMobFarmRemastered@1.21.11/common/src/main/resources/data/tinymobfarm/recipe/${path}.json`;
        } else {
            throw new Error(`Unsupported namespace for recipe: ${namespace}`);
        }

        const cached = await cacheManager.get<any>("network-cache", url);
        if (cached) return cached;

        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to fetch recipe ${id} from ${url}`);
        const data = await res.json();

        await cacheManager.set("network-cache", url, data);
        return data;
    }

    public async loadVersion(version: string): Promise<AssetResources> {
        const versionKey = "summary";

        if (this.cache.has(versionKey)) {
            return this.cache.get(versionKey)!;
        }

        if (this.loadingPromises.has(versionKey)) {
            return this.loadingPromises.get(versionKey)!;
        }

        const promise = this.fetchAssets(versionKey);
        this.loadingPromises.set(versionKey, promise);

        try {
            const result = await promise;
            this.cache.set(versionKey, result);
            return result;
        } finally {
            this.loadingPromises.delete(versionKey);
        }
    }

    private async fetchAssets(versionRef: string): Promise<AssetResources> {
        const [blockDefs, models, uvMapping, atlasImage, itemDefs, itemComps] =
            await Promise.all([
                this.fetchJsonMap(
                    `${MCMETA_BASE}summary/assets/block_definition/data.min.json`,
                ),
                this.fetchJsonMap(
                    `${MCMETA_BASE}summary/assets/model/data.min.json`,
                ),
                fetch(`${MCMETA_BASE}atlas/all/data.min.json`).then((r) =>
                    r.json(),
                ),
                this.loadImage(`${MCMETA_BASE}atlas/all/atlas.png`),
                this.fetchJsonMap(
                    `${MCMETA_BASE}summary/assets/item_definition/data.min.json`,
                ),
                this.fetchJsonMap(
                    `${MCMETA_BASE}summary/item_components/data.min.json`,
                ),
            ]);

        const modId = "tinymobfarm";

        const fetchWithCache = async (url: string) => {
            const cached = await cacheManager.get<any>("network-cache", url);
            if (cached) return cached;
            const data = await fetch(url).then((r) => r.json());
            await cacheManager.set("network-cache", url, data);
            return data;
        };

        await Promise.all(
            MOD_FILES.blockstates.map(async (file) => {
                const url = `${MOD_BASE}/blockstates/${file}.json`;
                const data = await fetchWithCache(url);
                blockDefs.set(`${modId}:${file}`, data);
            }),
        );

        await Promise.all(
            MOD_FILES.blockModels.map(async (file) => {
                const url = `${MOD_BASE}/models/block/${file}.json`;
                const data = await fetchWithCache(url);
                models.set(`${modId}:block/${file}`, data);
            }),
        );

        await Promise.all(
            MOD_FILES.itemModels.map(async (file) => {
                const url = `${MOD_BASE}/models/item/${file}.json`;
                const data = await fetchWithCache(url);
                const modelId = `${modId}:item/${file}`;
                models.set(modelId, data);
                itemDefs.set(`${modId}:${file}`, {
                    model: { type: "minecraft:model", model: modelId },
                });
            }),
        );

        const stitcher = new TextureStitcher(atlasImage, uvMapping);

        await Promise.all(
            MOD_FILES.textures.map(async (path) => {
                try {
                    const url = `${MOD_BASE}/textures/${path}.png`;
                    await stitcher.addModTexture(`${modId}:${path}`, url);
                } catch (e) {
                    console.error(e);
                }
            }),
        );

        const { image: combinedAtlasImg, map: combinedMap } =
            await stitcher.getStitchedOutput();

        for (const model of models.values()) {
            if (model && typeof model === "object") {
                if (model.textures && typeof model.textures === "object") {
                    const safeTextures = Object.create(null);
                    for (const key of Object.keys(model.textures)) {
                        let val = model.textures[key];
                        if (Array.isArray(val)) val = val[0];
                        if (val && typeof val === "object") {
                            val =
                                val.id ||
                                val.texture ||
                                val.value ||
                                val.name ||
                                val.path ||
                                Object.values(val).find(
                                    (v) => typeof v === "string",
                                ) ||
                                String(val);
                        }
                        if (typeof val !== "string") {
                            safeTextures[key] = String(val ?? "");
                        } else {
                            safeTextures[key] = val;
                        }
                    }
                    model.textures = safeTextures;
                }
                if (Array.isArray(model.elements)) {
                    for (const el of model.elements) {
                        if (
                            el &&
                            typeof el === "object" &&
                            el.faces &&
                            typeof el.faces === "object"
                        ) {
                            for (const fKey of Object.keys(el.faces)) {
                                const face = el.faces[fKey];
                                if (
                                    face &&
                                    typeof face === "object" &&
                                    face.texture
                                ) {
                                    let val = face.texture;
                                    if (Array.isArray(val)) val = val[0];
                                    if (val && typeof val === "object") {
                                        val =
                                            val.id ||
                                            val.texture ||
                                            val.value ||
                                            val.name ||
                                            val.path ||
                                            Object.values(val).find(
                                                (v) => typeof v === "string",
                                            ) ||
                                            String(val);
                                    }
                                    if (typeof val !== "string") {
                                        face.texture = String(val ?? "");
                                    } else {
                                        face.texture = val;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        return {
            blockDefinitions: blockDefs,
            models: models,
            atlas: this.createTextureAtlas(combinedAtlasImg, combinedMap),
            itemDefinitions: itemDefs,
            itemComponents: itemComps,
        };
    }

    private async fetchJsonMap(url: string): Promise<Map<string, any>> {
        const cached = await cacheManager.get<any>("network-cache", url);
        if (cached) return new Map(Object.entries(cached));

        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to fetch ${url}`);
        const data = await res.json();

        await cacheManager.set("network-cache", url, data);
        return new Map(Object.entries(data));
    }

    private async loadImage(src: string): Promise<HTMLImageElement> {
        const cachedBlob = await cacheManager.get<Blob>("network-cache", src);
        let blob: Blob;

        if (cachedBlob) {
            blob = cachedBlob;
        } else {
            const res = await fetch(src);
            blob = await res.blob();
            await cacheManager.set("network-cache", src, blob);
        }

        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = "Anonymous";
            img.src = URL.createObjectURL(blob);
            img.onload = () => {
                URL.revokeObjectURL(img.src);
                resolve(img);
            };
            img.onerror = reject;
        });
    }

    private createTextureAtlas(
        image: HTMLImageElement,
        textures: any,
    ): TextureAtlas {
        const canvas = document.createElement("canvas");
        const w = upperPowerOfTwo(image.width);
        const h = upperPowerOfTwo(image.height);
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d")!;
        ctx.drawImage(image, 0, 0);
        const imageData = ctx.getImageData(0, 0, w, h);

        const idMap: Record<string, UV> = {};
        Object.keys(textures).forEach((id) => {
            const [u, v, du, dv] = textures[id];
            const dv2 = du !== dv && id.startsWith("block/") ? du : dv;
            idMap[Identifier.parse(id).toString()] = [
                u / w,
                v / h,
                (u + du) / w,
                (v + dv2) / h,
            ];
        });

        return new TextureAtlas(imageData, idMap);
    }
}
