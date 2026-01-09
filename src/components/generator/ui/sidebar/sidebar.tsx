import { useGenerator } from "../../application/generator-context";
import { globalObjectRegistry } from "../../core/registry/registry";
import { AddObjectButton } from "./add-object-button";

export const GeneratorSidebar = () => {
    const {
        currentProject,
        selectedObjectId,
        selectObject,
        updateObject,
        deleteObject,
    } = useGenerator();

    if (!currentProject) return null;

    return (
        <div
            id="generator-sidebar"
            className="bg-card-background-dark h-full flex flex-col"
            onClick={(e) => {
                // Click background to deselect
                if (e.target === e.currentTarget) selectObject(null);
            }}
        >
            <div className="bg-card-background-light h-12 px-4 flex items-center justify-between z-10">
                <p
                    className="m-0 font-medium truncate w-32"
                    title={currentProject.name}
                >
                    {currentProject.name}
                </p>
                <AddObjectButton />
            </div>

            <div className="overflow-y-auto flex-1">
                {currentProject.objects.length === 0 && (
                    <div className="flex flex-col items-center justify-center text-muted-foreground mt-8 text-sm opacity-60">
                        <p className="m-0">No objects found</p>
                        <p className="text-xs m-0 mt-1">
                            Add one to get started
                        </p>
                    </div>
                )}

                {currentProject.objects.map((obj) => {
                    const definition = globalObjectRegistry.get(obj.type);

                    if (!definition) {
                        return (
                            <div
                                key={obj.id}
                                className="p-2 border border-red-500 text-red-500 text-xs rounded"
                            >
                                Unknown Type: {obj.type}
                            </div>
                        );
                    }

                    // Delegate rendering to the strategy
                    return (
                        <div key={obj.id}>
                            {definition.renderSidebarItem({
                                object: obj,
                                isSelected: selectedObjectId === obj.id,
                                onSelect: () => selectObject(obj.id),
                                onRename: (name) =>
                                    updateObject(obj.id, { name }),
                                onDelete: () => deleteObject(obj.id),
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
