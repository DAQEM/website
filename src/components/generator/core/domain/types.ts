export type MinecraftVersion = "1.21.9";
export type HexColor = `#${string}`;

export interface IGeneratorItemStack {
    id: string;
    count?: number;
    components?: Record<string, any>;
}

export interface IBaseObjectDTO {
    id: string;
    type: string;
    name: string;
}

export interface IJobObjectDTO extends IBaseObjectDTO {
    type: "job";
    description: string;
    price: number;
    color: HexColor;
    icon: IGeneratorItemStack;
    actions: any[];
}

export type ProjectObjectDTO = IJobObjectDTO;

export interface IProjectDTO {
    name: string;
    namespace: string;
    version: MinecraftVersion;
    objects: ProjectObjectDTO[];
    lastModified: number;
}