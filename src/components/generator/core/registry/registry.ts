import { ProjectObjectDTO } from "../domain/types";
import { ObjectDefinition } from "./object-definition";

class ObjectRegistry {
    private definitions = new Map<string, ObjectDefinition<any>>();

    public register<T extends ProjectObjectDTO>(def: ObjectDefinition<T>) {
        this.definitions.set(def.type, def);
    }

    public get(type: string): ObjectDefinition<any> | undefined {
        return this.definitions.get(type);
    }

    public getAllDefinitions(): ObjectDefinition<any>[] {
        return Array.from(this.definitions.values());
    }
}

export const globalObjectRegistry = new ObjectRegistry();
