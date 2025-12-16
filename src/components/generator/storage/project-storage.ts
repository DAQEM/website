import { GeneratorProject } from "../types";

const STORAGE_KEY = "generator_projects";
const CURRENT_PROJECT_KEY = "generator_current_project_id";

// Helper to check if we are in a browser environment (Docusaurus SSR safety)
const isBrowser = typeof window !== "undefined";

export const getProjects = (): GeneratorProject[] => {
    if (!isBrowser) return [];
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};

export const saveProject = (project: GeneratorProject): void => {
    if (!isBrowser) return;
    const projects = getProjects();
    const index = projects.findIndex((p) => p.name === project.name);

    if (index >= 0) {
        projects[index] = project;
    } else {
        projects.push(project);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
};

export const deleteProject = (projectName: string): void => {
    if (!isBrowser) return;
    const projects = getProjects().filter((p) => p.name !== projectName);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));

    // If we deleted the active project, clear the current project key
    const currentName = localStorage.getItem(CURRENT_PROJECT_KEY);
    if (currentName === projectName) {
        localStorage.removeItem(CURRENT_PROJECT_KEY);
    }
};

export const getLastActiveProjectName = (): string | null => {
    if (!isBrowser) return null;
    return localStorage.getItem(CURRENT_PROJECT_KEY);
};

export const setLastActiveProjectName = (name: string): void => {
    if (!isBrowser) return;
    localStorage.setItem(CURRENT_PROJECT_KEY, name);
};

// File I/O
export const exportProjectToJSON = (project: GeneratorProject) => {
    const dataStr =
        "data:text/json;charset=utf-8," +
        encodeURIComponent(JSON.stringify(project, null, 2));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute(
        "download",
        `${project.name.toLowerCase().replace(/\s+/g, "-")}.json`
    );
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
};

export const parseImportedProject = (text: string): GeneratorProject => {
    try {
        const project = JSON.parse(text);
        // Basic validation
        if (
            !project.name ||
            !project.version ||
            !Array.isArray(project.objects)
        ) {
            throw new Error("Invalid project structure");
        }
        return project;
    } catch (e) {
        throw new Error("Failed to parse project file");
    }
};
