import React, { useRef, useState } from "react";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@components/ui/menubar";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@components/ui/dialog";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { GeneratorProject, MinecraftVersion } from "./types";
import {
    deleteProject,
    exportProjectToJSON,
    getProjects,
    parseImportedProject,
    saveProject,
} from "./storage/project-storage";
import { FaTrash } from "react-icons/fa6";
import { Button } from "../ui/button";

interface GeneratorMenuBarProps {
    currentProject: GeneratorProject | null;
    onProjectLoaded: (project: GeneratorProject | null) => void;
    onResetLayout: () => void;
}

export const GeneratorMenuBar: React.FC<GeneratorMenuBarProps> = ({
    currentProject,
    onProjectLoaded,
    onResetLayout,
}) => {
    // Dialog States
    const [isNewOpen, setIsNewOpen] = useState(false);
    const [isOpenOpen, setIsOpenOpen] = useState(false);

    // New Project Form State
    const [newProjectName, setNewProjectName] = useState("");
    const [newProjectNamespace, setNewProjectNamespace] = useState("");

    // File Input Ref
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleCreateNew = () => {
        if (!newProjectName) return;

        const newProject: GeneratorProject = {
            name: newProjectName,
            namespace: newProjectNamespace || "my_namespace",
            version: "1.21.9" as MinecraftVersion,
            objects: [],
        };

        saveProject(newProject);
        onProjectLoaded(newProject);
        setIsNewOpen(false);
        setNewProjectName("");
        setNewProjectNamespace("");
    };

    const handleImportClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const text = event.target?.result as string;
                const project = parseImportedProject(text);
                saveProject(project);
                onProjectLoaded(project);
            } catch (err) {
                alert("Failed to import project: Invalid JSON");
            }
        };
        reader.readAsText(file);
        // Reset input
        e.target.value = "";
    };

    const handleDelete = (name: string, e: React.MouseEvent) => {
        e.stopPropagation();
        if (confirm(`Are you sure you want to delete "${name}"?`)) {
            deleteProject(name);
            // Force re-render of the list effectively by checking if we deleted current
            if (currentProject?.name === name) {
                onProjectLoaded(null);
            } else {
                // Just to refresh the list if we were fancy, but simple state toggle works for now
                // In a real app, use a query hook or lift the project list state up.
                setIsOpenOpen(false);
                setTimeout(() => setIsOpenOpen(true), 0);
            }
        }
    };

    const storedProjects = getProjects();

    return (
        <>
            <div className="border-b border-border bg-card-background px-2 py-1 flex items-center justify-between">
                <Menubar className="border-none shadow-none bg-transparent h-auto p-0">
                    <MenubarMenu>
                        <MenubarTrigger className="cursor-pointer">
                            File
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem onClick={() => setIsNewOpen(true)}>
                                Create New Project{" "}
                            </MenubarItem>
                            <MenubarItem onClick={() => setIsOpenOpen(true)}>
                                Open Project...{" "}
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem
                                disabled={!currentProject}
                                onClick={() =>
                                    currentProject &&
                                    exportProjectToJSON(currentProject)
                                }
                            >
                                Export Project{" "}
                            </MenubarItem>
                            <MenubarItem onClick={handleImportClick}>
                                Import Project...{" "}
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem
                                disabled={!currentProject}
                                className="text-red-500 focus:text-red-500"
                                onClick={() => {
                                    if (currentProject)
                                        handleDelete(currentProject.name, {
                                            stopPropagation: () => {},
                                        } as any);
                                }}
                            >
                                Delete Current Project
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>

                    <MenubarMenu>
                        <MenubarTrigger className="cursor-pointer">
                            Window
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem onClick={onResetLayout}>
                                Reset Layout
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>

            {/* Hidden File Input for Import */}
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept=".json"
                onChange={handleFileChange}
            />

            {/* Create New Project Dialog */}
            <Dialog open={isNewOpen} onOpenChange={setIsNewOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Project</DialogTitle>
                        <DialogDescription>
                            Configure your new generator project.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input
                                id="name"
                                value={newProjectName}
                                onChange={(e) =>
                                    setNewProjectName(e.target.value)
                                }
                                className="col-span-3"
                                placeholder="My Awesome Addon"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="namespace" className="text-right">
                                Namespace
                            </Label>
                            <Input
                                id="namespace"
                                value={newProjectNamespace}
                                onChange={(e) =>
                                    setNewProjectNamespace(e.target.value)
                                }
                                className="col-span-3"
                                placeholder="my_namespace"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            onClick={handleCreateNew}
                            disabled={!newProjectName}
                        >
                            Create
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Open Project Dialog */}
            <Dialog open={isOpenOpen} onOpenChange={setIsOpenOpen}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle>Open Project</DialogTitle>
                    </DialogHeader>
                    <div className="py-2 flex flex-col gap-2 max-h-[300px] overflow-y-auto">
                        {storedProjects.length === 0 ? (
                            <p className="text-center text-muted-foreground py-4">
                                No projects found.
                            </p>
                        ) : (
                            storedProjects.map((proj) => (
                                <div
                                    key={proj.name}
                                    className="flex items-center justify-between p-3 rounded-md hover:bg-popover cursor-pointer group"
                                    onClick={() => {
                                        onProjectLoaded(proj);
                                        setIsOpenOpen(false);
                                    }}
                                >
                                    <div>
                                        <p className="font-medium">
                                            {proj.name}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {proj.namespace} • {proj.version}
                                        </p>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="opacity-0 group-hover:opacity-100 h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                                        onClick={(e) =>
                                            handleDelete(proj.name, e)
                                        }
                                    >
                                        <FaTrash size={14} />
                                    </Button>
                                </div>
                            ))
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};
