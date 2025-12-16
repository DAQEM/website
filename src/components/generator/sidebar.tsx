import AddObjectButton from "./buttons/add-object-button";
import { GeneratorJobObject, GeneratorProject } from "./types";
import { saveProject } from "./storage/project-storage";
import JobSidebarItem from "./cards/job-sidebar-item";

const GeneratorSidebar = ({
    currentProject,
    onUpdate,
}: {
    currentProject: GeneratorProject;
    onUpdate: (project: GeneratorProject) => void;
}) => {
    const handleAddObject = (type: string) => {
        if (type === "job") {
            const newJob: GeneratorJobObject = {
                type: "job",
                id: crypto.randomUUID(),
                name: "Unnamed Job",
                description: "Description of the job",
                price: 0,
                color: "#FFFFFF",
                icon: {
                    id: "minecraft:paper",
                },
                actions: [],
            };

            updateProjectObjects([...currentProject.objects, newJob]);
        }
    };

    const handleRenameObject = (id: string, newName: string) => {
        const updatedObjects = currentProject.objects.map((obj) => {
            if ((obj as GeneratorJobObject).id === id) {
                return { ...obj, name: newName };
            }
            return obj;
        });
        updateProjectObjects(updatedObjects);
    };

    const handleDeleteObject = (id: string) => {
        const updatedObjects = currentProject.objects.filter(
            (obj) => (obj as GeneratorJobObject).id !== id
        );
        updateProjectObjects(updatedObjects);
    };

    const updateProjectObjects = (newObjects: any[]) => {
        const updatedProject: GeneratorProject = {
            ...currentProject,
            objects: newObjects,
        };
        saveProject(updatedProject);
        onUpdate(updatedProject);
    };

    return (
        <div
            id="generator-sidebar"
            className="bg-card-background-dark h-full flex flex-col"
        >
            <div className="bg-card-background-light h-12 px-4 flex items-center justify-between border-b border-border">
                <p
                    className="m-0 font-medium truncate w-32"
                    title={currentProject.name}
                >
                    {currentProject.name}
                </p>
                <AddObjectButton onAdd={handleAddObject} />
            </div>

            <div className="overflow-y-auto flex-1">
                {currentProject.objects.length === 0 && (
                    <div className="flex flex-col items-center justify-center text-muted-foreground mt-8 text-sm">
                        <p className="m-0">No objects yet.</p>
                        <p className="text-xs m-0 mt-1">Click + to add one.</p>
                    </div>
                )}

                {currentProject.objects.map((object) => {
                    if (object.type === "job") {
                        return (
                            <JobSidebarItem
                                key={(object as GeneratorJobObject).id}
                                object={object as GeneratorJobObject}
                                onRename={handleRenameObject}
                                onDelete={handleDeleteObject}
                            />
                        );
                    }

                    return (
                        <div key={Math.random()} className="p-2 border mb-2">
                            Unknown Object: {object.type}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default GeneratorSidebar;
