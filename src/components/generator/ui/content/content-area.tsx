import { useGenerator } from "../../application/generator-context";
import { globalObjectRegistry } from "../../core/registry/registry";

export const GeneratorContentArea = () => {
    const { currentProject, selectedObjectId, updateObject } = useGenerator();

    if (!currentProject || !selectedObjectId) {
        return (
            <div className="bg-card-background-light h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                    <h3 className="text-lg font-medium mb-1">No Selection</h3>
                    <p className="text-sm opacity-70">Select an object from the sidebar to edit properties.</p>
                </div>
            </div>
        );
    }

    const selectedObject = currentProject.objects.find(o => o.id === selectedObjectId);

    if (!selectedObject) {
         return (
            <div className="bg-card-background-light h-full flex items-center justify-center text-red-400">
                Object not found (it may have been deleted).
            </div>
        );
    }

    const definition = globalObjectRegistry.get(selectedObject.type);

    if (!definition) {
         return (
            <div className="bg-card-background-light h-full flex items-center justify-center text-muted-foreground">
                No editor definition found for type "{selectedObject.type}".
            </div>
        );
    }

    return (
        <div className="bg-card-background-light h-full p-6 overflow-y-auto">
            {definition.renderEditor({
                object: selectedObject,
                onUpdate: (updates) => updateObject(selectedObject.id, updates)
            })}
        </div>
    );
};