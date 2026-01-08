import EmptyButton from "@/components/ui/empty-button";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@components/ui/alert-dialog";
import { Button } from "@components/ui/button";
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuSeparator,
    ContextMenuTrigger,
} from "@components/ui/context-menu";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@components/ui/dialog";
import { Input } from "@components/ui/input";
import { Pen, Trash } from "lucide-react";
import React, { useState } from "react";
import { IJobObjectDTO } from "../../../core/domain/types";
// Import the new component
import { MinecraftItem } from "../../../ui/minecraft-item";

interface Props {
    object: IJobObjectDTO;
    isSelected: boolean;
    onSelect: () => void;
    onRename: (name: string) => void;
    onDelete: () => void;
}

export const JobSidebarCard: React.FC<Props> = ({
    object,
    isSelected,
    onSelect,
    onRename,
    onDelete,
}) => {
    const [isRenameOpen, setIsRenameOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [tempName, setTempName] = useState(object.name);

    const handleRenameSubmit = () => {
        if (tempName.trim()) {
            onRename(tempName);
            setIsRenameOpen(false);
        }
    };

    const iconId = object.icon?.id || "minecraft:paper";

    return (
        <>
            <ContextMenu>
                <ContextMenuTrigger>
                    <EmptyButton
                        onClick={onSelect}
                        className={`h-12 px-4 flex items-center justify-between w-full cursor-pointer select-none group transition-colors border-l-2 ${
                            isSelected
                                ? "!bg-card-background-light border-primary"
                                : "hover:bg-card-background-light bg-card-background border-transparent"
                        }`}
                    >
                        <div className="flex items-center gap-3 overflow-hidden">
                            {/* Replaced generic icon with Rendered Item */}
                            <div className="shrink-0">
                                <MinecraftItem
                                    id={iconId}
                                    size={32}
                                    className="drop-shadow-sm"
                                />
                            </div>

                            <div className="flex flex-col items-start overflow-hidden">
                                <p className="m-0 font-medium truncate w-full text-left">
                                    {object.name}
                                </p>
                                <p className="text-[10px] text-muted-foreground truncate w-full text-left opacity-70">
                                    {object.type}
                                </p>
                            </div>
                        </div>
                    </EmptyButton>
                </ContextMenuTrigger>

                {/* Context Menu Content ... (Same as before) */}
                <ContextMenuContent className="w-48">
                    <ContextMenuItem
                        onClick={() => {
                            setTempName(object.name);
                            setIsRenameOpen(true);
                        }}
                    >
                        <Pen className="mr-2 h-3.5 w-3.5" /> Rename
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem
                        className="text-red-500 focus:text-red-500"
                        onClick={() => setIsDeleteOpen(true)}
                    >
                        <Trash className="mr-2 h-3.5 w-3.5" /> Delete
                    </ContextMenuItem>
                </ContextMenuContent>
            </ContextMenu>

            {/* Dialogs ... (Same as before) */}
            <Dialog open={isRenameOpen} onOpenChange={setIsRenameOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Rename Job</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <Input
                            value={tempName}
                            onChange={(e) => setTempName(e.target.value)}
                            onKeyDown={(e) =>
                                e.key === "Enter" && handleRenameSubmit()
                            }
                        />
                    </div>
                    <DialogFooter>
                        <Button onClick={handleRenameSubmit}>Save</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <AlertDialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete Job?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            className="bg-red-600"
                            onClick={onDelete}
                        >
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};
