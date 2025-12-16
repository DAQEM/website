import { GeneratorJobObject, GeneratorProject } from "./types";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";

import { saveProject } from "./storage/project-storage";
import { Textarea } from "../ui/textarea";

const GeneratorContent = ({
    currentProject,
    selectedObjectId,
    onUpdateProject,
}: {
    currentProject: GeneratorProject;
    selectedObjectId: string | null;
    onUpdateProject: (project: GeneratorProject) => void;
}) => {
    const selectedObject = currentProject.objects.find(
        (obj) => (obj as GeneratorJobObject).id === selectedObjectId
    ) as GeneratorJobObject | undefined;

    const handleUpdateObject = (updates: Partial<GeneratorJobObject>) => {
        if (!selectedObject) return;

        const updatedObjects = currentProject.objects.map((obj) => {
            if ((obj as GeneratorJobObject).id === selectedObjectId) {
                return { ...obj, ...updates };
            }
            return obj;
        });

        const updatedProject = { ...currentProject, objects: updatedObjects };
        saveProject(updatedProject);
        onUpdateProject(updatedProject);
    };

    if (!selectedObject) {
        return (
            <div
                id="generator-content"
                className="bg-card-background-light h-full flex items-center justify-center text-muted-foreground"
            >
                Select an object to edit
            </div>
        );
    }

    return (
        <div id="generator-content" className="bg-card-background-light h-full p-6 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-6">Edit Job</h2>
            
            <div className="grid gap-6 max-w-2xl">
                <div className="grid gap-2">
                    <Label htmlFor="job-name">Name</Label>
                    <Input
                        id="job-name"
                        value={selectedObject.name}
                        onChange={(e) =>
                            handleUpdateObject({ name: e.target.value })
                        }
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="job-description">Description</Label>
                    <Textarea
                        id="job-description"
                        value={selectedObject.description}
                        onChange={(e) =>
                            handleUpdateObject({ description: e.target.value })
                        }
                        rows={4}
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="job-price">Price</Label>
                    <Input
                        id="job-price"
                        type="number"
                        min="0"
                        step="0.01"
                        value={selectedObject.price}
                        onChange={(e) =>
                            handleUpdateObject({
                                price: parseFloat(e.target.value) || 0,
                            })
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default GeneratorContent;
