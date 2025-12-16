import { ReactNode } from "react";
import { ProjectObjectDTO } from "../domain/types";

/**
 * Strategy Interface for handling specific object types (Job, Quest, etc.)
 */
export interface ObjectDefinition<T extends ProjectObjectDTO> {
    /** The unique type identifier (e.g., 'job') */
    type: string;

    /** Human readable label */
    label: string;

    /** Factory method to create a new instance with defaults */
    createDefault(): T;

    /** Component to render in the sidebar */
    renderSidebarItem(props: {
        object: T;
        isSelected: boolean;
        onSelect: () => void;
        onRename: (newName: string) => void;
        onDelete: () => void;
    }): ReactNode;

    /** Component to render in the main editor area */
    renderEditor(props: {
        object: T;
        onUpdate: (updates: Partial<T>) => void;
    }): ReactNode;
}
