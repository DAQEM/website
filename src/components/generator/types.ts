export interface GeneratorProject {
    name: string;
    namespace: string;
    version: MinecraftVersion;
    objects: GeneratorObject[];
}

export interface GeneratorObject {
    type: string;
}

export interface GeneratorJobObject extends GeneratorObject {
    id: string;
    name: string;
    description: string;
    price: number;
    color: HexColor;
    icon: GeneratorItemStack;
    actions: GeneratorArcAction[];
}

export interface GeneratorItemStack {
    id: string;
    count?: number;
    components?: Record<string, any>;
}

export interface GeneratorArcAction {
    id: string;
    type: string;
    rewards: GeneratorArcReward[];
    conditions: GeneratorArcCondition[];
}

export interface GeneratorArcReward {
    id: string;
    type: string;
    // Dynamic fields based on type
    [key: string]: any;
}

export interface GeneratorArcCondition {
    id: string;
    type: string;
    inverted: boolean;
    // Dynamic fields based on type
    [key: string]: any;
}

export type MinecraftVersion = "1.21.9";
export type HexColor = `#${string}`;
