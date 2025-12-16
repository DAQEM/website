import { useState } from "react";
import { GeneratorJobObject } from "../types";
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
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { Label } from "@components/ui/label";
import { FaPen, FaTrash } from "react-icons/fa6";
import EmptyButton from "@/components/ui/empty-button";

interface JobSidebarItemProps {
    object: GeneratorJobObject;
    isSelected: boolean;
    onSelect: () => void;
    onRename: (id: string, newName: string) => void;
    onDelete: (id: string) => void;
}

const JobSidebarItem = ({
    object,
    isSelected,
    onSelect,
    onRename,
    onDelete,
}: JobSidebarItemProps) => {
    // State for dialogs
    const [isRenameOpen, setIsRenameOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [tempName, setTempName] = useState(object.name);

    const handleRenameSubmit = () => {
        if (tempName.trim()) {
            onRename(object.id, tempName);
            setIsRenameOpen(false);
        }
    };

    return (
        <>
            <ContextMenu>
                <ContextMenuTrigger>
                    <EmptyButton
                        onClick={onSelect}
                        className={`h-12 px-4 flex items-center justify-between w-full cursor-pointer select-none group transition-colors ${
                            isSelected
                                ? "!bg-card-background-light"
                                : "hover:bg-card-background-light bg-card-background"
                        }`}
                    >
                        <p className="m-0 font-medium truncate pr-2">
                            {object.name}
                        </p>
                        <span className="text-xs bg-muted px-1.5 py-0.5 rounded text-muted-foreground capitalize">
                            {object.type}
                        </span>
                    </EmptyButton>
                </ContextMenuTrigger>
                <ContextMenuContent className="w-48">
                    <ContextMenuItem
                        onClick={() => {
                            setTempName(object.name);
                            setIsRenameOpen(true);
                        }}
                    >
                        <FaPen className="mr-2 h-3.5 w-3.5" />
                        Rename
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem
                        className="text-red-500 focus:text-red-500 focus:bg-red-100 dark:focus:bg-red-900/20"
                        onClick={() => setIsDeleteOpen(true)}
                    >
                        <FaTrash className="mr-2 h-3.5 w-3.5" />
                        Delete
                    </ContextMenuItem>
                </ContextMenuContent>
            </ContextMenu>

            {/* Rename Dialog */}
            <Dialog open={isRenameOpen} onOpenChange={setIsRenameOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Rename Object</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input
                                id="name"
                                value={tempName}
                                onChange={(e) => setTempName(e.target.value)}
                                className="col-span-3"
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") handleRenameSubmit();
                                }}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            variant="secondary"
                            onClick={() => setIsRenameOpen(false)}
                        >
                            Cancel
                        </Button>
                        <Button onClick={handleRenameSubmit}>Save</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Delete Confirmation Alert */}
            <AlertDialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete{" "}
                            <span className="font-bold">{object.name}</span>{" "}
                            from your project.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            className="bg-red-600 hover:bg-red-700 text-white"
                            onClick={() => onDelete(object.id)}
                        >
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export default JobSidebarItem;
