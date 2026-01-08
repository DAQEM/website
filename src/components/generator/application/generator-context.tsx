import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import { ProjectEntity } from "../core/domain/project-entity";
import { ProjectObjectDTO } from "../core/domain/types";
import { globalObjectRegistry } from "../core/registry/registry";
import "../features/job/job-definition"; // Import to register definitions
import { LocalStorageProjectRepository } from "../infrastructure/project-repository";

interface GeneratorContextState {
    currentProject: ProjectEntity | null;
    selectedObjectId: string | null;
    isLoading: boolean;
    availableTypes: { type: string; label: string }[];
}

interface GeneratorContextActions {
    createProject: (name: string, namespace: string) => Promise<void>;
    loadProject: (name: string) => Promise<void>;
    updateProject: (project: ProjectEntity) => Promise<void>;
    deleteProject: (name: string) => Promise<void>;
    selectObject: (id: string | null) => void;
    addObject: (type: string) => void;
    updateObject: (id: string, updates: Partial<ProjectObjectDTO>) => void;
    deleteObject: (id: string) => void;
    importProjectJSON: (jsonString: string) => Promise<void>;
    exportProjectJSON: () => void;
    getAllProjects: () => Promise<any[]>;
}

const GeneratorContext = createContext<
    (GeneratorContextState & GeneratorContextActions) | null
>(null);

export const GeneratorProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [repo] = useState(() => new LocalStorageProjectRepository());
    const [currentProject, setCurrentProject] = useState<ProjectEntity | null>(
        null
    );
    const [selectedObjectId, setSelectedObjectId] = useState<string | null>(
        null
    );
    const [isLoading, setIsLoading] = useState(true);

    // Initial Load
    useEffect(() => {
        const init = async () => {
            const lastName = repo.getLastActiveName();
            if (lastName) {
                const all = await repo.getAll();
                const found = all.find((p) => p.name === lastName);
                if (found) {
                    const entity = new ProjectEntity(found);
                    setCurrentProject(entity);
                    const lastId = repo.getLastSelectedId(entity.name);
                    if (lastId) setSelectedObjectId(lastId);
                }
            }
            setIsLoading(false);
        };
        init();
    }, [repo]);

    // Actions
    const saveAndSync = useCallback(
        async (entity: ProjectEntity) => {
            setCurrentProject(entity);
            await repo.save(entity.toDTO());
        },
        [repo]
    );

    const createProject = async (name: string, namespace: string) => {
        const entity = ProjectEntity.createDefault(name, namespace);
        await saveAndSync(entity);
        repo.setLastActiveName(name);
    };

    const loadProject = async (name: string) => {
        const all = await repo.getAll();
        const found = all.find((p) => p.name === name);
        if (found) {
            const entity = new ProjectEntity(found);
            setCurrentProject(entity);
            repo.setLastActiveName(name);
            setSelectedObjectId(repo.getLastSelectedId(name));
        }
    };

    const updateProject = async (entity: ProjectEntity) => {
        await saveAndSync(entity);
    };

    const deleteProject = async (name: string) => {
        await repo.delete(name);
        if (currentProject?.name === name) {
            setCurrentProject(null);
            repo.setLastActiveName("");
        }
    };

    const addObject = (type: string) => {
        if (!currentProject) return;
        const def = globalObjectRegistry.get(type);
        if (def) {
            const newObj = def.createDefault();
            const updated = currentProject.addObject(newObj);
            saveAndSync(updated);
            selectObject(newObj.id);
        }
    };

    const updateObject = (id: string, updates: Partial<ProjectObjectDTO>) => {
        if (!currentProject) return;
        const updated = currentProject.updateObject(id, updates);
        saveAndSync(updated);
    };

    const deleteObject = (id: string) => {
        if (!currentProject) return;
        const updated = currentProject.removeObject(id);
        saveAndSync(updated);
        if (selectedObjectId === id) selectObject(null);
    };

    const selectObject = (id: string | null) => {
        setSelectedObjectId(id);
        if (currentProject && id) {
            repo.setLastSelectedId(currentProject.name, id);
        }
    };

    const importProjectJSON = async (jsonString: string) => {
        try {
            const parsed = JSON.parse(jsonString);
            // Basic validation could go here
            const entity = new ProjectEntity(parsed);
            await saveAndSync(entity);
            repo.setLastActiveName(entity.name);
        } catch (e) {
            console.error(e);
            alert("Invalid Project JSON");
        }
    };

    const exportProjectJSON = () => {
        if (!currentProject) return;
        const dataStr =
            "data:text/json;charset=utf-8," +
            encodeURIComponent(JSON.stringify(currentProject.toDTO(), null, 2));
        const downloadAnchorNode = document.createElement("a");
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute(
            "download",
            `${currentProject.name}.json`
        );
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    };

    const getAllProjects = () => repo.getAll();

    return (
        <GeneratorContext.Provider
            value={{
                currentProject,
                selectedObjectId,
                isLoading,
                availableTypes: globalObjectRegistry
                    .getAllDefinitions()
                    .map((d) => ({ type: d.type, label: d.label })),
                createProject,
                loadProject,
                updateProject,
                deleteProject,
                selectObject,
                addObject,
                updateObject,
                deleteObject,
                importProjectJSON,
                exportProjectJSON,
                getAllProjects,
            }}
        >
            {children}
        </GeneratorContext.Provider>
    );
};

export const useGenerator = () => {
    const context = useContext(GeneratorContext);
    if (!context)
        throw new Error("useGenerator must be used within GeneratorProvider");
    return context;
};
