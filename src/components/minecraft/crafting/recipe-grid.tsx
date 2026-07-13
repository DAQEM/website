import { MinecraftAssetsRepository } from "@/lib/renderer/minecraft-repository";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { MinecraftItem } from "../minecraft-item";

// Helper to format item ID into a readable name for tooltips
const formatItemName = (itemId: string): string => {
    if (!itemId) return "";
    const path = itemId.split(":")[1] || itemId;
    return path
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

// Represents a single item in the grid
interface GridItem {
    id: string;
    count?: number;
}

// Props for the component
interface RecipeGridProps {
    id?: string;
}

const Tooltip: React.FC<{ text: string; children: React.ReactNode }> = ({
    text,
    children,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    if (!text) {
        return <>{children}</>;
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            onMouseMove={handleMouseMove}
        >
            {children}
            {isVisible && (
                <div
                    style={{
                        position: "fixed",
                        top: position.y + 15,
                        left: position.x + 15,
                    }}
                    className={clsx(
                        "whitespace-nowrap bg-[#100010]/94 font-bold",
                        "py-1 px-2 border-4 border-[#3300A1]/31",
                        "z-10 pointer-events-none",
                    )}
                >
                    {text}
                </div>
            )}
        </div>
    );
};

const RecipeGrid: React.FC<RecipeGridProps> = ({ id }) => {
    const [recipe, setRecipe] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(!!id);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            setIsLoading(true);
            MinecraftAssetsRepository.getInstance()
                .getRecipe(id)
                .then((data) => {
                    setRecipe(data);
                    setIsLoading(false);
                })
                .catch((err) => {
                    console.error(err);
                    setError(err.message);
                    setIsLoading(false);
                });
        }
    }, [id]);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center gap-6 my-4 mc-card w-fit h-[144px]">
                <div className="animate-pulse text-muted-foreground">
                    Loading recipe...
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center gap-6 my-4 mc-card w-fit h-[144px]">
                <div className="text-destructive">
                    Error loading recipe: {error}
                </div>
            </div>
        );
    }

    if (!recipe) {
        return null;
    }

    const gridItems: (GridItem | null)[] = Array(9).fill(null);
    const { type, result } = recipe;

    if (
        type === "minecraft:crafting_shaped" &&
        recipe.pattern &&
        recipe.key
    ) {
        const { pattern, key } = recipe;
        pattern.forEach((row: string, rowIndex: number) => {
            for (let colIndex = 0; colIndex < row.length; colIndex++) {
                const char = row[colIndex];
                if (char !== " " && key[char]) {
                    const gridIndex = rowIndex * 3 + colIndex;
                    let keyEntry = key[char];
                    if (Array.isArray(keyEntry)) {
                        keyEntry = keyEntry[0];
                    }
                    const itemId =
                        typeof keyEntry === "string"
                            ? keyEntry
                            : "item" in keyEntry
                              ? keyEntry.item
                              : "tag" in keyEntry
                                ? keyEntry.tag
                                : "id" in keyEntry
                                  ? keyEntry.id
                                  : null;
                    if (itemId) {
                        gridItems[gridIndex] = { id: itemId };
                    }
                }
            }
        });
    } else if (
        type === "minecraft:crafting_shapeless" &&
        recipe.ingredients
    ) {
        const { ingredients } = recipe;
        ingredients.forEach((ingredient: any, index: number) => {
            if (index < 9) {
                let ing = ingredient;
                if (Array.isArray(ing)) {
                    ing = ing[0];
                }
                const itemId =
                    typeof ing === "string"
                        ? ing
                        : "item" in ing
                          ? ing.item
                          : "tag" in ing
                            ? ing.tag
                            : "id" in ing
                              ? ing.id
                              : null;
                if (itemId) {
                    gridItems[index] = { id: itemId };
                }
            }
        });
    }

    let resultItem: GridItem | null = null;
    if (result) {
        if (typeof result === "string") {
            resultItem = { id: result };
        } else if (typeof result === "object") {
            resultItem = { id: result.id || result.item, count: result.count };
        }
    }

    const renderSlot = (
        item: GridItem | null,
        className?: string,
        itemClassName?: string,
    ) => (
        <Tooltip text={item ? formatItemName(item.id) : ""}>
            <div
                className={clsx(
                    "size-10 mc-card-reversed p-0 m-1 flex items-center justify-center relative",
                    className,
                )}
            >
                {item && (
                    <>
                        <MinecraftItem id={item.id} size={32} />
                        {item.count && item.count > 1 && (
                            <span
                                className="absolute right-0.5 bottom-0 text-sm font-bold text-white z-10"
                                style={{ textShadow: "1px 1px 2px black" }}
                            >
                                {item.count}
                            </span>
                        )}
                    </>
                )}
            </div>
        </Tooltip>
    );

    return (
        <div className="flex items-center justify-center gap-6 my-4 mc-card w-fit">
            <div className="grid grid-cols-3 grid-rows-3">
                {gridItems.map((item, index) => (
                    <React.Fragment key={index}>
                        {renderSlot(item)}
                    </React.Fragment>
                ))}
            </div>
            <div className="size-12">
                <img
                    src="/img/crafting/arrow.png"
                    alt="Crafting Arrow"
                    className="size-12"
                />
            </div>
            {renderSlot(resultItem, "size-14", "size-10")}
        </div>
    );
};

export default RecipeGrid;
