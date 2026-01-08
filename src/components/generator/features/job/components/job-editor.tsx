import { Textarea } from "@/components/ui/textarea";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import React, { useState } from "react";
import { IJobObjectDTO } from "../../../core/domain/types";
import { MinecraftItem } from "../../../ui/minecraft-item";

interface Props {
    object: IJobObjectDTO;
    onUpdate: (updates: Partial<IJobObjectDTO>) => void;
}

export const JobEditor: React.FC<Props> = ({ object, onUpdate }) => {
    // Local state for the icon input to prevent render stuttering while typing
    const [iconInput, setIconInput] = useState(object.icon.id);

    const handleIconBlur = () => {
        if (iconInput !== object.icon.id) {
            onUpdate({ icon: { ...object.icon, id: iconInput } });
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-start gap-4 border-b pb-6">
                <div className="p-3 bg-card border rounded-lg">
                    <MinecraftItem id={object.icon.id} size={64} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold">{object.name}</h2>
                </div>
            </div>

            <div className="grid gap-6 max-w-2xl bg-card p-6 rounded-lg border shadow-sm">
                <div className="grid gap-2">
                    <Label>Job Name</Label>
                    <Input
                        value={object.name}
                        onChange={(e) => onUpdate({ name: e.target.value })}
                    />
                </div>

                <div className="grid gap-2">
                    <Label>Icon Item ID</Label>
                    <div className="flex gap-2">
                        <Input
                            value={iconInput}
                            onChange={(e) => setIconInput(e.target.value)}
                            onBlur={handleIconBlur}
                            placeholder="minecraft:diamond_sword"
                            className="font-mono"
                        />
                        {/* Little preview in the input row */}
                        <div className="shrink-0 w-10 h-10 border rounded flex items-center justify-center bg-background">
                            <MinecraftItem id={iconInput} size={24} />
                        </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                        Uses vanilla resource IDs (e.g., minecraft:golden_apple)
                    </p>
                </div>

                <div className="grid gap-2">
                    <Label>Description</Label>
                    <Textarea
                        value={object.description}
                        onChange={(e) =>
                            onUpdate({ description: e.target.value })
                        }
                        rows={4}
                    />
                </div>

                <div className="grid gap-2">
                    <Label>Price</Label>
                    <Input
                        type="number"
                        min="0"
                        step="0.01"
                        value={object.price}
                        onChange={(e) =>
                            onUpdate({ price: parseFloat(e.target.value) || 0 })
                        }
                    />
                </div>
            </div>
        </div>
    );
};
