export type ActionDataTypes =
    | "arc:blockState"
    | "arc:blockPosition"
    | "arc:expDrop"
    | "arc:expLevel"
    | "arc:world"
    | "arc:damageSource"
    | "arc:entity"
    | "arc:damageAmount"
    | "arc:distanceInCm"
    | "arc:itemStack"
    | "arc:item"
    | "arc:advancement"
    | "arc:mobEffectInstance"
    | "arc:recipe";

export const actionDataTypes: {
    [key in ActionDataTypes]: { description: string };
} = {
    "arc:blockState": {
        description:
            "Represents the state of a block, including its type and properties.",
    },
    "arc:blockPosition": {
        description:
            "Specifies the coordinates (x, y, z) of a block in the world.",
    },
    "arc:expDrop": {
        description:
            "Defines the amount of experience points dropped by an action or entity.",
    },
    "arc:expLevel": {
        description:
            "Indicates the amount of experience levels used by an action.",
    },
    "arc:world": {
        description: "Refers to the world/dimension where the action occurs.",
    },
    "arc:damageSource": {
        description:
            "Identifies the source of damage, such as an entity, environment, or effect.",
    },
    "arc:entity": {
        description:
            "Represents an entity in the game, such as a player, mob, or item.",
    },
    "arc:damageAmount": {
        description:
            "Quantifies the amount of damage dealt or received in an action.",
    },
    "arc:distanceInCm": {
        description:
            "Measures a distance in centimeters, often used for proximity-based actions.",
    },
    "arc:itemStack": {
        description:
            "Represents a stack of items, including item type and quantity.",
    },
    "arc:item": {
        description: "Refers to a single item type without stack information.",
    },
    "arc:advancement": {
        description: "Represents an in-game advancement that was earned.",
    },
    "arc:mobEffectInstance": {
        description:
            "Describes a specific instance of a mob effect, including type, duration, and amplifier.",
    },
    "arc:recipe": {
        description: "Defines a crafting or smelting recipe used in an action.",
    },
};

type SidebarItem = {
    title: string;
    emoji: string;
};

export type ActionType = {
    id: ActionTypesKeys;
    category:
        | "advancements"
        | "blocks"
        | "entities"
        | "items"
        | "movement"
        | "player";
    producesData: readonly ActionDataTypes[];
} & SidebarItem;

const actionTypesDefinition = {
    receive_advancement: {
        id: "receive_advancement",
        title: "Receive Advancement",
        emoji: "🏆",
        category: "advancements",
        producesData: ["arc:advancement"],
    },
    break_block: {
        id: "break_block",
        title: "Break Block",
        emoji: "⛏️",
        category: "blocks",
        producesData: [
            "arc:blockState",
            "arc:blockPosition",
            "arc:expDrop",
            "arc:world",
        ],
    },
    get_destroy_speed: {
        id: "get_destroy_speed",
        title: "Get Destroy Speed",
        emoji: "⚡",
        category: "blocks",
        producesData: [
            "arc:blockState",
            "arc:blockPosition",
            "arc:item",
            "arc:itemStack",
        ],
    },
    harvest_crop: {
        id: "harvest_crop",
        title: "Harvest Crop",
        emoji: "🌾",
        category: "blocks",
        producesData: ["arc:blockState", "arc:blockPosition", "arc:world"],
    },
    interact_with_block: {
        id: "interact_with_block",
        title: "Interact With Block",
        emoji: "🖱️",
        category: "blocks",
        producesData: ["arc:blockState", "arc:blockPosition", "arc:world"],
    },
    place_block: {
        id: "place_block",
        title: "Place Block",
        emoji: "🧱",
        category: "blocks",
        producesData: ["arc:blockState", "arc:blockPosition", "arc:world"],
    },
    plant_crop: {
        id: "plant_crop",
        title: "Plant Crop",
        emoji: "🌱",
        category: "blocks",
        producesData: ["arc:blockState", "arc:blockPosition", "arc:world"],
    },
    breed_animal: {
        id: "breed_animal",
        title: "Breed Animal",
        emoji: "🐑",
        category: "entities",
        producesData: ["arc:entity"],
    },
    death: {
        id: "death",
        title: "Death",
        emoji: "💀",
        category: "player",
        producesData: ["arc:damageSource"],
    },
    get_hurt: {
        id: "get_hurt",
        title: "Get Hurt",
        emoji: "🤕",
        category: "player",
        producesData: ["arc:damageSource", "arc:damageAmount"],
    },
    hurt_entity: {
        id: "hurt_entity",
        title: "Hurt Entity",
        emoji: "🗡️",
        category: "entities",
        producesData: ["arc:entity", "arc:damageSource", "arc:damageAmount"],
    },
    hurt_player: {
        id: "hurt_player",
        title: "Hurt Player",
        emoji: "🩸",
        category: "player",
        producesData: ["arc:entity", "arc:damageAmount"],
    },
    interact_with_entity: {
        id: "interact_with_entity",
        title: "Interact With Entity",
        emoji: "🖱️",
        category: "entities",
        producesData: ["arc:entity", "arc:item", "arc:itemStack"],
    },
    kill_entity: {
        id: "kill_entity",
        title: "Kill Entity",
        emoji: "💀",
        category: "entities",
        producesData: [
            "arc:entity",
            "arc:blockPosition",
            "arc:world",
            "arc:expDrop",
        ],
    },
    tame_animal: {
        id: "tame_animal",
        title: "Tame Animal",
        emoji: "🐾",
        category: "entities",
        producesData: ["arc:entity"],
    },
    craft_item: {
        id: "craft_item",
        title: "Craft Item",
        emoji: "🛠️",
        category: "items",
        producesData: ["arc:itemStack", "arc:world", "arc:recipe"],
    },
    drop_item: {
        id: "drop_item",
        title: "Drop Item",
        emoji: "🪣",
        category: "items",
        producesData: ["arc:itemStack", "arc:item"],
    },
    enchant_item: {
        id: "enchant_item",
        title: "Enchant Item",
        emoji: "✨",
        category: "items",
        producesData: ["arc:itemStack", "arc:expLevel"],
    },
    fish_up_item: {
        id: "fish_up_item",
        title: "Fish Up Item",
        emoji: "🎣",
        category: "items",
        producesData: ["arc:itemStack", "arc:item"],
    },
    grind_item: {
        id: "grind_item",
        title: "Grind Item",
        emoji: "⚙️",
        category: "items",
        producesData: [],
    },
    hurt_item: {
        id: "hurt_item",
        title: "Hurt Item",
        emoji: "🗡️",
        category: "items",
        producesData: ["arc:itemStack", "arc:item"],
    },
    smelt_item: {
        id: "smelt_item",
        title: "Smelt Item",
        emoji: "🔥",
        category: "items",
        producesData: [
            "arc:itemStack",
            "arc:blockPosition",
            "arc:blockState",
            "arc:world",
            "arc:recipe",
        ],
    },
    throw_item: {
        id: "throw_item",
        title: "Throw Item",
        emoji: "🏹",
        category: "items",
        producesData: ["arc:itemStack", "arc:entity"],
    },
    use_item: {
        id: "use_item",
        title: "Use Item",
        emoji: "🖱️",
        category: "items",
        producesData: ["arc:item"],
    },
    crouch: {
        id: "crouch",
        title: "Crouch",
        emoji: "🦶",
        category: "movement",
        producesData: ["arc:distanceInCm"],
    },
    crouch_start: {
        id: "crouch_start",
        title: "Crouch Start",
        emoji: "🦶",
        category: "movement",
        producesData: [],
    },
    crouch_stop: {
        id: "crouch_stop",
        title: "Crouch Stop",
        emoji: "🦶",
        category: "movement",
        producesData: [],
    },
    elytra_fly: {
        id: "elytra_fly",
        title: "Elytra Fly",
        emoji: "🪂",
        category: "movement",
        producesData: ["arc:distanceInCm"],
    },
    elytra_fly_start: {
        id: "elytra_fly_start",
        title: "Elytra Fly Start",
        emoji: "🪂",
        category: "movement",
        producesData: [],
    },
    elytra_fly_stop: {
        id: "elytra_fly_stop",
        title: "Elytra Fly Stop",
        emoji: "🪂",
        category: "movement",
        producesData: [],
    },
    horse_ride: {
        id: "horse_ride",
        title: "Horse Ride",
        emoji: "🐎",
        category: "movement",
        producesData: ["arc:distanceInCm"],
    },
    horse_ride_start: {
        id: "horse_ride_start",
        title: "Horse Ride Start",
        emoji: "🐎",
        category: "movement",
        producesData: [],
    },
    horse_ride_stop: {
        id: "horse_ride_stop",
        title: "Horse Ride Stop",
        emoji: "🐎",
        category: "movement",
        producesData: [],
    },
    sprint: {
        id: "sprint",
        title: "Sprint",
        emoji: "🏃‍♂️",
        category: "movement",
        producesData: ["arc:distanceInCm"],
    },
    sprint_start: {
        id: "sprint_start",
        title: "Sprint Start",
        emoji: "🏃‍♂️",
        category: "movement",
        producesData: [],
    },
    sprint_stop: {
        id: "sprint_stop",
        title: "Sprint Stop",
        emoji: "🏃‍♂️",
        category: "movement",
        producesData: [],
    },
    swim: {
        id: "swim",
        title: "Swim",
        emoji: "🏊‍♂️",
        category: "movement",
        producesData: ["arc:distanceInCm"],
    },
    swim_start: {
        id: "swim_start",
        title: "Swim Start",
        emoji: "🏊‍♂️",
        category: "movement",
        producesData: [],
    },
    swim_stop: {
        id: "swim_stop",
        title: "Swim Stop",
        emoji: "🏊‍♂️",
        category: "movement",
        producesData: [],
    },
    walk: {
        id: "walk",
        title: "Walk",
        emoji: "🚶‍♂️",
        category: "movement",
        producesData: ["arc:distanceInCm"],
    },
    walk_start: {
        id: "walk_start",
        title: "Walk Start",
        emoji: "🚶‍♂️",
        category: "movement",
        producesData: [],
    },
    walk_stop: {
        id: "walk_stop",
        title: "Walk Stop",
        emoji: "🚶‍♂️",
        category: "movement",
        producesData: [],
    },
    brew_potion: {
        id: "brew_potion",
        title: "Brew Potion",
        emoji: "🧪",
        category: "player",
        producesData: [
            "arc:itemStack",
            "arc:blockPosition",
            "arc:blockState",
            "arc:world",
        ],
    },
    drink: {
        id: "drink",
        title: "Drink",
        emoji: "🥤",
        category: "player",
        producesData: ["arc:itemStack"],
    },
    eat: {
        id: "eat",
        title: "Eat",
        emoji: "🍽️",
        category: "player",
        producesData: ["arc:itemStack"],
    },
    effect_added: {
        id: "effect_added",
        title: "Effect Added",
        emoji: "💉",
        category: "player",
        producesData: ["arc:mobEffectInstance", "arc:entity"],
    },
    get_attack_speed: {
        id: "get_attack_speed",
        title: "Get Attack Speed",
        emoji: "⚔️",
        category: "player",
        producesData: ["arc:itemStack", "arc:item"],
    },
    rod_reel_in: {
        id: "rod_reel_in",
        title: "Rod Reel In",
        emoji: "🎣",
        category: "player",
        producesData: ["arc:entity", "arc:blockPosition", "arc:world"],
    },
    shoot_projectile: {
        id: "shoot_projectile",
        title: "Shoot Projectile",
        emoji: "🏹",
        category: "player",
        producesData: ["arc:entity", "arc:itemStack"],
    },
    strip_log: {
        id: "strip_log",
        title: "Strip Log",
        emoji: "🪵",
        category: "player",
        producesData: ["arc:blockState", "arc:blockPosition", "arc:world"],
    },
    use_anvil: {
        id: "use_anvil",
        title: "Use Anvil",
        emoji: "⚒️",
        category: "player",
        producesData: ["arc:itemStack", "arc:item"],
    },
} as const;

export type ActionTypesKeys = keyof typeof actionTypesDefinition;

export type ActionTypes = {
    [key in ActionTypesKeys]: ActionType;
};

export const actionTypes: ActionTypes = actionTypesDefinition;

export type ConditionType = {
    id: ConditionTypesKeys;
    category:
        | "none"
        | "blocks"
        | "effects"
        | "entities"
        | "experience"
        | "items"
        | "movement"
        | "recipes"
        | "scoreboard"
        | "teams"
        | "world";
    isActionCompatible: (action: ActionType) => boolean;
    parameters: {
        name: string;
        types: {
            type: string;
            typeURL?: string;
        }[];
        required: boolean;
        default?: string | number | boolean;
        description: string;
    }[];
} & SidebarItem;

export const conditionTypesDefinition = {
    block: {
        id: "block",
        title: "Block",
        emoji: "🧱",
        category: "blocks",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:blockState"),
        parameters: [
            {
                name: "block",
                types: [
                    {
                        type: "Block",
                        typeURL: "/docs/daqem/wiki/json_formats/block",
                    },
                ],
                required: true,
                description: "The block to check.",
            },
        ],
    },
    block_hardness: {
        id: "block_hardness",
        title: "Block Hardness",
        emoji: "🪨",
        category: "blocks",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:blockState") &&
            action.producesData.includes("arc:blockPosition"),
        parameters: [
            {
                name: "min",
                type: "float",
                required: false,
                default: "1.4e-45",
                description: "The minimum hardness value.",
            },
            {
                name: "max",
                type: "float",
                required: false,
                default: "3.4028235e+38",
                description: "The maximum hardness value.",
            },
        ],
    },
    blocks: {
        id: "blocks",
        title: "Blocks",
        emoji: "🧱🧱",
        category: "blocks",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:blockState"),
        parameters: [
            {
                name: "blocks",
                type: "string[]",
                required: true,
                description: "The blocks/block tags to check.",
            },
        ],
    },
    crop_age: {
        id: "crop_age",
        title: "Crop Age",
        emoji: "🌱",
        category: "blocks",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:blockState"),
        parameters: [
            {
                name: "age",
                type: "int",
                required: true,
                description: "The age of the crop.",
            },
        ],
    },
    crop_fully_grown: {
        id: "crop_fully_grown",
        title: "Crop Fully Grown",
        emoji: "🌾",
        category: "blocks",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:blockState"),
        parameters: [],
    },
    is_ore: {
        id: "is_ore",
        title: "Is Ore",
        emoji: "💎",
        category: "blocks",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:blockState"),
        parameters: [],
    },
    not_in_block_position_cache: {
        id: "not_in_block_position_cache",
        title: "Not In Block Position Cache",
        emoji: "❌🧱",
        category: "blocks",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:blockPosition"),
        parameters: [],
    },
    effect: {
        id: "effect",
        title: "Effect",
        emoji: "💉",
        category: "effects",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:mobEffectInstance"),
        parameters: [
            {
                name: "effect",
                type: "Effect",
                typeURL: "/projects/arc/wiki/json_formats/#effect",
                required: true,
                description: "The effect to check.",
            },
            {
                name: "checkAmplifier",
                type: "boolean",
                required: false,
                default: false,
                description: "Whether to check the effect's amplifier.",
            },
            {
                name: "checkDuration",
                type: "boolean",
                required: false,
                default: false,
                description: "Whether to check the effect's duration.",
            },
            {
                name: "amplifierComparisonType",
                type: "ComparisonType",
                typeURL: "/projects/arc/wiki/json_formats/#comparison-type",
                required: false,
                default: "==",
                description: "The comparison type for the effect's amplifier.",
            },
            {
                name: "durationComparisonType",
                type: "ComparisonType",
                required: false,
                default: "==",
                description: "The comparison type for the effect's duration.",
            },
        ],
    },
    effect_category: {
        id: "effect_category",
        title: "Effect Category",
        emoji: "💉",
        category: "effects",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:mobEffectInstance"),
        parameters: [
            {
                name: "category",
                type: "EffectCategory",
                typeURL: "/projects/arc/wiki/json_formats/#effect-category",
                required: true,
                description: "The category of the effect.",
            },
        ],
    },
    damage_source: {
        id: "damage_source",
        title: "Damage Source",
        emoji: "💥",
        category: "entities",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:damageSource"),
        parameters: [
            {
                name: "source",
                type: "string",
                required: false,
                default: "any",
                description: "The damage source to check.",
            },
            {
                name: "direct_entity_type",
                type: "EntityType",
                typeURL: "/projects/arc/wiki/json_formats/#entity-type",
                required: false,
                default: "null",
                description: "The direct entity type to check.",
            },
            {
                name: "causing_entity_type",
                type: "EntityType",
                typeURL: "/projects/arc/wiki/json_formats/#entity-type",
                required: false,
                default: "null",
                description: "The causing entity type to check.",
            },
        ],
    },
    entity_in_block: {
        id: "entity_in_block",
        title: "Entity In Block",
        emoji: "👤🧱",
        category: "entities",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:entity"),
        parameters: [
            {
                name: "block",
                type: "Block",
                typeURL: "https://minecraft.wiki/w/List_of_blocks_by_version",
                required: true,
                description: "The block to check.",
            },
        ],
    },
    entity_type: {
        id: "entity_type",
        title: "Entity Type",
        emoji: "👤",
        category: "entities",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:entity"),
        parameters: [
            {
                name: "entity_type",
                type: "EntityType",
                typeURL: "/projects/arc/wiki/json_formats/#entity-type",
                required: true,
                description: "The entity type to check.",
            },
        ],
    },
    entity_types: {
        id: "entity_types",
        title: "Entity Types",
        emoji: "👥",
        category: "entities",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:entity"),
        parameters: [
            {
                name: "entity_types",
                type: "EntityType[]",
                typeURL: "/projects/arc/wiki/json_formats/#entity-type",
                required: true,
                description: "A list of entity types to check.",
            },
        ],
    },
    ready_for_shearing: {
        id: "ready_for_shearing",
        title: "Ready For Shearing",
        emoji: "✂️🐑",
        category: "entities",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:entity"),
        parameters: [],
    },
    dropped_experience: {
        id: "dropped_experience",
        title: "Dropped Experience",
        emoji: "💰",
        category: "experience",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:expDrop"),
        parameters: [
            {
                name: "min",
                type: "int",
                required: true,
                description: "The minimum amount of experience dropped.",
            },
            {
                name: "max",
                type: "int",
                required: true,
                description: "The maximum amount of experience dropped.",
            },
        ],
    },
    experience_level: {
        id: "experience_level",
        title: "Experience Level",
        emoji: "📈",
        category: "experience",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:expLevel"),
        parameters: [
            {
                name: "level",
                type: "int",
                required: true,
                description: "The experience level to check.",
            },
        ],
    },
    item: {
        id: "item",
        title: "Item",
        emoji: "🪙",
        category: "items",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:item") ||
            action.producesData.includes("arc:itemStack"),
        parameters: [
            {
                name: "item",
                type: "Item",
                typeURL: "/projects/arc/wiki/json_formats/#item",
                required: true,
                description: "The item to check.",
            },
            {
                name: "check_components",
                type: "boolean",
                required: false,
                default: true,
                description: "Whether to check item components.",
            },
        ],
    },
    item_equipped: {
        id: "item_equipped",
        title: "Item Equipped",
        emoji: "🪙✅",
        category: "items",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "item",
                type: "Item",
                typeURL: "/projects/arc/wiki/json_formats/#item",
                required: true,
                description: "The item to check.",
            },
        ],
    },
    item_in_hand: {
        id: "item_in_hand",
        title: "Item In Hand",
        emoji: "🪙✋",
        category: "items",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "item",
                type: "Item",
                typeURL: "/projects/arc/wiki/json_formats/#item",
                required: true,
                description: "The item to check.",
            },
            {
                name: "hand",
                type: "Hand",
                typeURL: "/projects/arc/wiki/json_formats/#hand",
                required: false,
                default: "null",
                description: "The hand to check. Checks both hands if not set.",
            },
        ],
    },
    item_in_inventory: {
        id: "item_in_inventory",
        title: "Item In Inventory",
        emoji: "🪙📦",
        category: "items",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "item",
                type: "Item",
                typeURL: "/projects/arc/wiki/json_formats/#item",
                required: true,
                description: "The item to check.",
            },
        ],
    },
    items: {
        id: "items",
        title: "Items",
        emoji: "🪙🪙",
        category: "items",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:item") ||
            action.producesData.includes("arc:itemStack"),
    },
    distance: {
        id: "distance",
        title: "Distance",
        emoji: "📏",
        category: "movement",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:distanceInCm"),
    },
    not: {
        id: "not",
        title: "NOT",
        emoji: "🚫",
        category: "none",
        isActionCompatible: (action: ActionType) => true,
    },
    or: {
        id: "or",
        title: "OR",
        emoji: "🔀",
        category: "none",
        isActionCompatible: (action: ActionType) => true,
    },
    is_blasting_recipe: {
        id: "is_blasting_recipe",
        title: "Is Blasting Recipe",
        emoji: "🔥💎",
        category: "recipes",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:recipe"),
    },
    is_smoking_recipe: {
        id: "is_smoking_recipe",
        title: "Is Smoking Recipe",
        emoji: "🔥🍖",
        category: "recipes",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:recipe"),
    },
    scoreboard: {
        id: "scoreboard",
        title: "Scoreboard",
        emoji: "📋",
        category: "scoreboard",
        isActionCompatible: (action: ActionType) => true,
    },
    team: {
        id: "team",
        title: "Team",
        emoji: "👥",
        category: "teams",
        isActionCompatible: (action: ActionType) => true,
    },
    dimension: {
        id: "dimension",
        title: "Dimension",
        emoji: "🌍",
        category: "world",
        isActionCompatible: (action: ActionType) => true,
    },
} as const;

export type ConditionTypesKeys = keyof typeof conditionTypesDefinition;

export type ConditionTypes = {
    [key in ConditionTypesKeys]: ConditionType;
};

export const conditionTypes: ConditionTypes = conditionTypesDefinition;

export type RewardType = {
    id: RewardTypesKeys;
    category:
        | "none"
        | "blocks"
        | "effects"
        | "entities"
        | "experience"
        | "items"
        | "players"
        | "server";
    isActionCompatible: (action: ActionType) => boolean;
} & SidebarItem;

export const rewardTypesDefinition = {
    block_drop_multiplier: {
        id: "block_drop_multiplier",
        title: "Block Drop Multiplier",
        emoji: "🧱",
        category: "blocks",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:blockState") &&
            action.producesData.includes("arc:blockPosition"),
    },
    destroy_speed_multiplier: {
        id: "destroy_speed_multiplier",
        title: "Destroy Speed Multiplier",
        emoji: "⚡",
        category: "blocks",
        isActionCompatible: (action: ActionType) =>
            action.id === "get_destroy_speed",
    },
    cancel_action: {
        id: "cancel_action",
        title: "Cancel Action",
        emoji: "❌",
        category: "none",
        isActionCompatible: (action: ActionType) => {
            const allowedActions: ActionTypesKeys[] = [
                "place_block",
                "break_block",
                "interact_with_block",
                "harvest_crop",
                "plant_crop",
                "tame_animal",
                "breed_animal",
                "interact_with_entity",
                "hurt_entity",
                "hurt_item",
                "hurt_player",
                "effect_added",
                "get_hurt",
            ];
            return allowedActions.includes(action.id);
        },
    },
    effect: {
        id: "effect",
        title: "Effect",
        emoji: "💉",
        category: "effects",
        isActionCompatible: (action: ActionType) => true,
    },
    effect_amplifier_addition: {
        id: "effect_amplifier_addition",
        title: "Effect Amplifier Addition",
        emoji: "➕💉",
        category: "effects",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:mobEffectInstance"),
    },
    effect_duration_multiplier: {
        id: "effect_duration_multiplier",
        title: "Effect Duration Multiplier",
        emoji: "⏳💉",
        category: "effects",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:mobEffectInstance"),
    },
    remove_effect: {
        id: "remove_effect",
        title: "Remove Effect",
        emoji: "❌💉",
        category: "effects",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:mobEffectInstance"),
    },
    damage_multiplier: {
        id: "damage_multiplier",
        title: "Damage Multiplier",
        emoji: "⚔️",
        category: "entities",
        isActionCompatible: (action: ActionType) =>
            action.id === "get_hurt" || action.id === "hurt_player",
    },
    entity_on_fire: {
        id: "entity_on_fire",
        title: "Entity On Fire",
        emoji: "🔥👤",
        category: "entities",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:entity"),
    },
    multiple_arrows: {
        id: "multiple_arrows",
        title: "Multiple Arrows",
        emoji: "➡️➡️",
        category: "entities",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:entity"),
    },
    experience: {
        id: "experience",
        title: "Experience",
        emoji: "✨",
        category: "experience",
        isActionCompatible: (action: ActionType) => true,
    },
    experience_multiplier: {
        id: "experience_multiplier",
        title: "Experience Multiplier",
        emoji: "✨➕",
        category: "experience",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:expDrop") &&
            action.producesData.includes("arc:blockPosition"),
    },
    drop_item: {
        id: "drop_item",
        title: "Drop Item",
        emoji: "🪙",
        category: "items",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:blockPosition"),
    },
    item: {
        id: "item",
        title: "Item",
        emoji: "🪙",
        category: "items",
        isActionCompatible: (action: ActionType) => true,
    },
    attack_speed_multiplier: {
        id: "attack_speed_multiplier",
        title: "Attack Speed Multiplier",
        emoji: "⚡",
        category: "players",
        isActionCompatible: (action: ActionType) =>
            action.id === "get_attack_speed",
    },
    move_to_entity: {
        id: "move_to_entity",
        title: "Move To Entity",
        emoji: "👤➡️",
        category: "players",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:entity"),
    },
    command: {
        id: "command",
        title: "Command",
        emoji: "💻",
        category: "server",
        isActionCompatible: (action: ActionType) => true,
    },
} as const;

export type RewardTypesKeys = keyof typeof rewardTypesDefinition;

export type RewardTypes = {
    [key in RewardTypesKeys]: RewardType;
};

export const rewardTypes: RewardTypes = rewardTypesDefinition;
