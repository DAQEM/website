export interface StitchedAtlas {
    image: HTMLImageElement;
    uvs: Record<string, [number, number, number, number]>; // x, y, w, h (un-normalized)
}

export class TextureStitcher {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private currentX = 0;
    private currentY = 0;
    private rowHeight = 0;
    private nextMap: Record<string, [number, number, number, number]> = {};

    constructor(
        private vanillaAtlas: HTMLImageElement,
        private vanillaMap: any,
    ) {
        this.canvas = document.createElement("canvas");
        // Start with the size of the vanilla atlas
        this.canvas.width = vanillaAtlas.width;
        this.canvas.height = vanillaAtlas.height;
        this.ctx = this.canvas.getContext("2d", { willReadFrequently: true })!;

        // Draw vanilla atlas first
        this.ctx.drawImage(vanillaAtlas, 0, 0);

        // Copy vanilla UVs (Deepslate uses normalized 0-1 UVs, we need to keep pixel data for now if we expand)
        // Note: For simplicity, we will append mod textures at the bottom or right.
        // A simple approach is expanding height.
        this.currentY = vanillaAtlas.height;
    }

    public async addModTexture(id: string, url: string) {
        return new Promise<void>((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = "Anonymous";
            img.onload = () => {
                const w = img.width;
                const h = img.height;

                // Simple packer: If it fits in the row, add it. If not, new row.
                if (this.currentX + w > this.canvas.width) {
                    this.currentX = 0;
                    this.currentY += this.rowHeight;
                    this.rowHeight = 0;
                }

                // Expand canvas if needed
                if (this.currentY + h > this.canvas.height) {
                    const newHeight = Math.max(
                        this.canvas.height * 2,
                        this.currentY + h + 64,
                    ); // Grow by chunks
                    const newData = this.ctx.getImageData(
                        0,
                        0,
                        this.canvas.width,
                        this.canvas.height,
                    );
                    this.canvas.height = newHeight;
                    this.ctx.putImageData(newData, 0, 0);
                }

                this.ctx.drawImage(img, this.currentX, this.currentY);

                // Store UVs as [x, y, w, h] in PIXELS
                // Note: 'minecraft:' is usually omitted in the atlas map for vanilla,
                // but deepslate expects full IDs for lookup usually.
                // We'll store it normalized later or let Deepslate normalize it.
                this.nextMap[id] = [this.currentX, this.currentY, w, h];

                this.currentX += w;
                this.rowHeight = Math.max(this.rowHeight, h);
                resolve();
            };
            img.onerror = reject;
            img.src = url;
        });
    }

    public getStitchedOutput(): Promise<{ image: HTMLImageElement; map: any }> {
        return new Promise((resolve) => {
            const finalImg = new Image();
            finalImg.src = this.canvas.toDataURL();
            finalImg.onload = () => {
                // Merge maps
                // Vanilla map format in Deepslate source usually: [u, v, du, dv] (pixel sizes or coords)
                // We need to match exactly what your repository expects.
                // Assuming your existing code expects [x, y, width, height] in pixels based on `createTextureAtlas` logic

                const combinedMap = { ...this.vanillaMap };

                // Add modded items
                Object.entries(this.nextMap).forEach(([key, [x, y, w, h]]) => {
                    // Deepslate atlas parser in your code expects: [u, v, du, dv]
                    combinedMap[key] = [x, y, w, h];
                });

                resolve({ image: finalImg, map: combinedMap });
            };
        });
    }
}
