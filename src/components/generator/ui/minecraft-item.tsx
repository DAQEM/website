import { Box, Package } from "lucide-react";
import React, { useEffect, useState } from "react";
import { ItemRendererService } from "../core/services/item-renderer-service";

interface MinecraftItemProps {
    id: string; // e.g. "minecraft:diamond_sword"
    className?: string;
    size?: number;
    fallback?: React.ReactNode;
}

export const MinecraftItem: React.FC<MinecraftItemProps> = ({
    id,
    className,
    size = 64,
    fallback,
}) => {
    const [src, setSrc] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        setSrc(null);
        setIsLoading(true);

        const load = async () => {
            try {
                // If it doesn't contain a namespace, assume minecraft:
                const fullId = id.includes(":") ? id : `minecraft:${id}`;

                const url = await ItemRendererService.getInstance().renderItem(
                    fullId,
                    size
                );

                console.log("Rendered item:", fullId, url);

                if (isMounted) {
                    setSrc(url);
                    setIsLoading(false);
                }
            } catch (e) {
                if (isMounted) setIsLoading(false);
            }
        };

        // Small optimization: If it's "air", don't render
        if (id === "minecraft:air" || id === "air") {
            setIsLoading(false);
            return;
        }

        load();

        return () => {
            isMounted = false;
        };
    }, [id, size]);

    // Render Logic
    if (isLoading) {
        // Skeleton loader or simple placeholder
        return (
            <div
                className={`flex items-center justify-center bg-muted/20 animate-pulse rounded ${className}`}
                style={{ width: size, height: size }}
            >
                <Box size={size * 0.5} className="opacity-20" />
            </div>
        );
    }

    if (src) {
        return (
            <img
                src={src}
                alt={id}
                className={`rendering-pixelated select-none ${className}`}
                style={{ width: size, height: size }}
                draggable={false}
            />
        );
    }

    // Fallback if rendering failed or id was invalid
    return (
        <div
            className={`flex items-center justify-center text-muted-foreground ${className}`}
            style={{ width: size, height: size }}
        >
            {fallback || <Package size={size * 0.6} />}
        </div>
    );
};
