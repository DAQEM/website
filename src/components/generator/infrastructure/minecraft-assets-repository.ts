import { Identifier } from "deepslate/core";
import { TextureAtlas, upperPowerOfTwo, UV } from "deepslate/render";

const MCMETA_BASE = "https://raw.githubusercontent.com/misode/mcmeta";
const SUMMARY_BASE = "https://raw.githubusercontent.com/misode/mcmeta/summary";

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
        console.log("Fetching Minecraft Assets...");

        // Fetch all definitions in parallel
        // Added item_components fetch
        const [blockDefs, models, uvMapping, atlasImage, itemDefs, itemComps] =
            await Promise.all([
                this.fetchJsonMap(
                    `${SUMMARY_BASE}/assets/block_definition/data.min.json`
                ),
                this.fetchJsonMap(`${SUMMARY_BASE}/assets/model/data.min.json`),
                fetch(`${MCMETA_BASE}/atlas/all/data.min.json`).then((r) =>
                    r.json()
                ),
                this.loadImage(`${MCMETA_BASE}/atlas/all/atlas.png`),
                this.fetchJsonMap(
                    `${SUMMARY_BASE}/assets/item_definition/data.min.json`
                ),
                this.fetchJsonMap(
                    `${SUMMARY_BASE}/item_components/data.min.json`
                ),
            ]);

        return {
            blockDefinitions: blockDefs,
            models: models,
            atlas: this.createTextureAtlas(atlasImage, uvMapping),
            itemDefinitions: itemDefs,
            itemComponents: itemComps,
        };
    }

    private async fetchJsonMap(url: string): Promise<Map<string, any>> {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to fetch ${url}`);
        const data = await res.json();
        return new Map(Object.entries(data));
    }

    private loadImage(src: string): Promise<HTMLImageElement> {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = "Anonymous";
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = src;
        });
    }

    private createTextureAtlas(
        image: HTMLImageElement,
        textures: any
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
            idMap[Identifier.create(id).toString()] = [
                u / w,
                v / h,
                (u + du) / w,
                (v + dv2) / h,
            ];
        });

        return new TextureAtlas(imageData, idMap);
    }
}
