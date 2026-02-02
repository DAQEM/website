export class CacheManager {
    private dbName = "DeepslateCache";
    private dbVersion = 1;
    private db: IDBDatabase | null = null;

    private async getDB(): Promise<IDBDatabase> {
        if (this.db) return this.db;
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.dbVersion);
            request.onupgradeneeded = () => {
                const db = request.result;
                // Store for raw network responses (JSON or Blobs)
                if (!db.objectStoreNames.contains("network-cache")) {
                    db.createObjectStore("network-cache");
                }
                // Store for rendered Base64 item icons
                if (!db.objectStoreNames.contains("render-cache")) {
                    db.createObjectStore("render-cache");
                }
            };
            request.onsuccess = () => {
                this.db = request.result;
                resolve(this.db);
            };
            request.onerror = () => reject(request.error);
        });
    }

    public async get<T>(
        storeName: "network-cache" | "render-cache",
        key: string,
    ): Promise<T | null> {
        const db = await this.getDB();
        return new Promise((resolve) => {
            const transaction = db.transaction(storeName, "readonly");
            const request = transaction.objectStore(storeName).get(key);
            request.onsuccess = () => resolve(request.result || null);
            request.onerror = () => resolve(null);
        });
    }

    public async set(
        storeName: "network-cache" | "render-cache",
        key: string,
        value: any,
    ): Promise<void> {
        const db = await this.getDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(storeName, "readwrite");
            const request = transaction.objectStore(storeName).put(value, key);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    }
}

export const cacheManager = new CacheManager();
