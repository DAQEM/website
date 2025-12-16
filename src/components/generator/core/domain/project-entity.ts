import { IProjectDTO, ProjectObjectDTO } from "./types";

/**
 * Domain Entity for the Project.
 * Encapsulates logic related to the project as a whole.
 */
export class ProjectEntity {
    constructor(private data: IProjectDTO) {}

    public get name(): string {
        return this.data.name;
    }

    public get objects(): ProjectObjectDTO[] {
        return this.data.objects;
    }

    public get namespace(): string {
        return this.data.namespace;
    }

    public updateObject(id: string, updates: Partial<ProjectObjectDTO>): ProjectEntity {
        const newObjects = this.data.objects.map((obj) => {
            if (obj.id === id) {
                return { ...obj, ...updates } as ProjectObjectDTO;
            }
            return obj;
        });
        
        return new ProjectEntity({
            ...this.data,
            objects: newObjects,
            lastModified: Date.now(),
        });
    }

    public addObject(obj: ProjectObjectDTO): ProjectEntity {
        return new ProjectEntity({
            ...this.data,
            objects: [...this.data.objects, obj],
            lastModified: Date.now(),
        });
    }

    public removeObject(id: string): ProjectEntity {
        return new ProjectEntity({
            ...this.data,
            objects: this.data.objects.filter((o) => o.id !== id),
            lastModified: Date.now(),
        });
    }

    public toDTO(): IProjectDTO {
        return { ...this.data };
    }

    public static createDefault(name: string, namespace: string): ProjectEntity {
        return new ProjectEntity({
            name,
            namespace,
            version: "1.21.9",
            objects: [],
            lastModified: Date.now()
        });
    }
}