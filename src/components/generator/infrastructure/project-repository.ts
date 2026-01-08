import { IProjectDTO } from "../core/domain/types";

export interface IProjectRepository {
    getAll(): Promise<IProjectDTO[]>;
    save(project: IProjectDTO): Promise<void>;
    delete(projectName: string): Promise<void>;
    getLastActiveName(): string | null;
    setLastActiveName(name: string): void;
    getLastSelectedId(projectName: string): string | null;
    setLastSelectedId(projectName: string, objectId: string): void;
}

const STORAGE_KEY = "generator_projects";
const ACTIVE_KEY = "generator_active_project";

export class LocalStorageProjectRepository implements IProjectRepository {
    private isBrowser = typeof window !== "undefined";

    async getAll(): Promise<IProjectDTO[]> {
        if (!this.isBrowser) return [];
        try {
            const data = localStorage.getItem(STORAGE_KEY);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error("Failed to load projects", e);
            return [];
        }
    }

    async save(project: IProjectDTO): Promise<void> {
        if (!this.isBrowser) return;
        const projects = await this.getAll();
        const index = projects.findIndex((p) => p.name === project.name);

        if (index >= 0) {
            projects[index] = project;
        } else {
            projects.push(project);
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    }

    async delete(projectName: string): Promise<void> {
        if (!this.isBrowser) return;
        const projects = await this.getAll();
        const filtered = projects.filter((p) => p.name !== projectName);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    }

    getLastActiveName(): string | null {
        if (!this.isBrowser) return null;
        return localStorage.getItem(ACTIVE_KEY);
    }

    setLastActiveName(name: string): void {
        if (!this.isBrowser) return;
        localStorage.setItem(ACTIVE_KEY, name);
    }

    getLastSelectedId(projectName: string): string | null {
        if (!this.isBrowser) return null;
        return localStorage.getItem(`gen_last_sel_${projectName}`);
    }

    setLastSelectedId(projectName: string, objectId: string): void {
        if (!this.isBrowser) return;
        localStorage.setItem(`gen_last_sel_${projectName}`, objectId);
    }
}
