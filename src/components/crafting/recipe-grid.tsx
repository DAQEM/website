import clsx from "clsx";
import React, { useState } from "react";

// Helper to format item ID into a readable name for tooltips
const formatItemName = (itemId: string): string => {
    if (!itemId) return "";
    const path = itemId.split(":")[1] || itemId;
    return path
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

// Helper to get the correct image path
const getImagePath = (itemId: string): string => {
    if (!itemId) return "";
    const [namespace, path] = itemId.includes(":")
        ? itemId.split(":")
        : ["minecraft", itemId];
    return `/img/${namespace}/items/${path}.png`;
};

// Represents a single item in the grid
interface GridItem {
    id: string;
    count?: number;
}

// Props for the component
interface RecipeGridProps {
    recipe: {
        type: "minecraft:crafting_shaped" | "minecraft:crafting_shapeless";
        pattern?: string[];
        key?: {
            [key: string]: { item: string } | { tag: string };
        };
        ingredients?: ({ item: string } | { tag: string } | string)[];
        result: {
            id: string;
            count?: number;
        };
    };
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
                        "z-10 pointer-events-none"
                    )}
                >
                    {text}
                </div>
            )}
        </div>
    );
};

const RecipeGrid: React.FC<RecipeGridProps> = ({ recipe }) => {
    const gridItems: (GridItem | null)[] = Array(9).fill(null);
    const { type, result } = recipe;

    if (type === "minecraft:crafting_shaped" && recipe.pattern && recipe.key) {
        const { pattern, key } = recipe;
        pattern.forEach((row, rowIndex) => {
            for (let colIndex = 0; colIndex < row.length; colIndex++) {
                const char = row[colIndex];
                if (char !== " " && key[char]) {
                    const gridIndex = rowIndex * 3 + colIndex;
                    const keyEntry = key[char];
                    const itemId = "item" in keyEntry ? keyEntry.item : null;
                    if (itemId) {
                        gridItems[gridIndex] = { id: itemId };
                    }
                }
            }
        });
    } else if (type === "minecraft:crafting_shapeless" && recipe.ingredients) {
        const { ingredients } = recipe;
        ingredients.forEach((ingredient, index) => {
            if (index < 9) {
                gridItems[index] = { id: ingredient as string };
            }
        });
    }

    const renderSlot = (
        item: GridItem | null,
        className?: string,
        itemClassName?: string
    ) => (
        <Tooltip text={item ? formatItemName(item.id) : ""}>
            <div
                className={clsx(
                    "size-10 mc-card-reversed p-0 m-1 flex items-center justify-center relative",
                    className
                )}
            >
                {item && (
                    <>
                        <img
                            src={getImagePath(item.id)}
                            alt={formatItemName(item.id)}
                            className={clsx("size-8", itemClassName)}
                            style={{ imageRendering: "pixelated" }}
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display =
                                    "none";
                            }}
                        />
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
        <div className="flex items-center justify-center gap-6 my-4 mc-card">
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
            {renderSlot(result, "size-14", "size-10")}
        </div>
    );
};

export default RecipeGrid;
