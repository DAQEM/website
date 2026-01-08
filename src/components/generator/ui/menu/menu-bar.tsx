import { Button } from "@/components/ui/button";
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
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@components/ui/menubar";
import { Trash } from "lucide-react";
import React, { useRef, useState } from "react";
import { useGenerator } from "../../application/generator-context";

interface Props {
    onResetLayout: () => void;
}

export const GeneratorMenuBar: React.FC<Props> = ({ onResetLayout }) => {
    const {
        currentProject,
        createProject,
        loadProject,
        deleteProject,
        importProjectJSON,
        exportProjectJSON,
        getAllProjects,
    } = useGenerator();

    const [isNewOpen, setIsNewOpen] = useState(false);
    const [isOpenOpen, setIsOpenOpen] = useState(false);
    const [availableProjects, setAvailableProjects] = useState<any[]>([]);

    const [newProjectName, setNewProjectName] = useState("");
    const [newProjectNamespace, setNewProjectNamespace] = useState("");

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleCreateNew = async () => {
        if (!newProjectName) return;
        await createProject(
            newProjectName,
            newProjectNamespace || "my_namespace"
        );
        setIsNewOpen(false);
        setNewProjectName("");
        setNewProjectNamespace("");
    };

    const handleOpenProjectList = async () => {
        const projects = await getAllProjects();
        setAvailableProjects(projects);
        setIsOpenOpen(true);
    };

    const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
            const text = ev.target?.result as string;
            if (text) importProjectJSON(text);
        };
        reader.readAsText(file);
        e.target.value = "";
    };

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
                                New Project...
                            </MenubarItem>
                            <MenubarItem onClick={handleOpenProjectList}>
                                Open Project...
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem
                                disabled={!currentProject}
                                onClick={exportProjectJSON}
                            >
                                Export JSON
                            </MenubarItem>
                            <MenubarItem
                                onClick={() => fileInputRef.current?.click()}
                            >
                                Import JSON...
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="cursor-pointer">
                            View
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem onClick={onResetLayout}>
                                Reset Layout
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>

            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept=".json"
                onChange={handleImportFile}
            />

            {/* Dialogs */}
            <Dialog open={isNewOpen} onOpenChange={setIsNewOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>New Project</DialogTitle>
                        <DialogDescription>
                            Enter project details.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label className="text-right">Name</Label>
                            <Input
                                value={newProjectName}
                                onChange={(e) =>
                                    setNewProjectName(e.target.value)
                                }
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label className="text-right">Namespace</Label>
                            <Input
                                value={newProjectNamespace}
                                onChange={(e) =>
                                    setNewProjectNamespace(e.target.value)
                                }
                                className="col-span-3"
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

            <Dialog open={isOpenOpen} onOpenChange={setIsOpenOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Open Project</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col gap-2 max-h-[300px] overflow-y-auto">
                        {availableProjects.length === 0 ? (
                            <p className="text-muted-foreground text-center p-4">
                                No projects.
                            </p>
                        ) : (
                            availableProjects.map((p) => (
                                <div
                                    key={p.name}
                                    className="flex justify-between items-center p-2 hover:bg-muted rounded cursor-pointer group"
                                    onClick={() => {
                                        loadProject(p.name);
                                        setIsOpenOpen(false);
                                    }}
                                >
                                    <span>{p.name}</span>
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className="h-6 w-6 opacity-0 group-hover:opacity-100 text-destructive"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (confirm("Delete?")) {
                                                deleteProject(p.name);
                                                setAvailableProjects((prev) =>
                                                    prev.filter(
                                                        (x) => x.name !== p.name
                                                    )
                                                );
                                            }
                                        }}
                                    >
                                        <Trash size={12} />
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
