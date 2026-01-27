export type ActionDataTypes =
    | "arc:block_state"
    | "arc:block_position"
    | "arc:exp_drop"
    | "arc:exp_level"
    | "arc:world"
    | "arc:damage_source"
    | "arc:entity"
    | "arc:damage_amount"
    | "arc:distance_in_cm"
    | "arc:item_stack"
    | "arc:item"
    | "arc:advancement"
    | "arc:mob_effect_instance"
    | "arc:recipe"
    | "arc:hand"
    | "arc:fall_distance"
    | "arc:from_dimension"
    | "arc:to_dimension"
    | "arc:trade_offer"
    | "arc:is_critical_hit";

export const actionDataTypes: {
    [key in ActionDataTypes]: { description: string };
} = {
    "arc:block_state": {
        description:
            "Represents the state of a block, including its type and properties.",
    },
    "arc:block_position": {
        description:
            "Specifies the coordinates (x, y, z) of a block in the world.",
    },
    "arc:exp_drop": {
        description:
            "Defines the amount of experience points dropped by an action or entity.",
    },
    "arc:exp_level": {
        description:
            "Indicates the amount of experience levels used by an action.",
    },
    "arc:world": {
        description: "Refers to the world/dimension where the action occurs.",
    },
    "arc:damage_source": {
        description:
            "Identifies the source of damage, such as an entity, environment, or effect.",
    },
    "arc:entity": {
        description:
            "Represents an entity in the game, such as a player, mob, or item.",
    },
    "arc:damage_amount": {
        description:
            "Quantifies the amount of damage dealt or received in an action.",
    },
    "arc:distance_in_cm": {
        description:
            "Measures a distance in centimeters, often used for proximity-based actions.",
    },
    "arc:item_stack": {
        description:
            "Represents a stack of items, including item type and quantity.",
    },
    "arc:item": {
        description: "Refers to a single item type without stack information.",
    },
    "arc:advancement": {
        description: "Represents an in-game advancement that was earned.",
    },
    "arc:mob_effect_instance": {
        description:
            "Describes a specific instance of a mob effect, including type, duration, and amplifier.",
    },
    "arc:recipe": {
        description: "Defines a crafting or smelting recipe used in an action.",
    },
    "arc:hand": {
        description: "The hand used to perform the action (MAIN_HAND or OFF_HAND).",
    },
    "arc:fall_distance": {
        description: "The distance the player fell.",
    },
    "arc:from_dimension": {
        description: "The dimension the player is moving from.",
    },
    "arc:to_dimension": {
        description: "The dimension the player is moving to.",
    },
    "arc:trade_offer": {
        description: "The merchant trade offer involved in the transaction.",
    },
    "arc:is_critical_hit": {
        description: "Whether the attack was a critical hit.",
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
        | "players";
    producesData: readonly ActionDataTypes[];
} & SidebarItem;

const actionTypesDefinition = {
    "arc:on_advancement": {
        id: "arc:on_advancement",
        title: "On Advancement",
        emoji: "🏆",
        category: "advancements",
        producesData: ["arc:advancement"],
    },
    "arc:on_break_block": {
        id: "arc:on_break_block",
        title: "On Break Block",
        emoji: "⛏️",
        category: "blocks",
        producesData: [
            "arc:block_state",
            "arc:block_position",
            "arc:exp_drop",
            "arc:world",
        ],
    },
    "arc:on_get_destroy_speed": {
        id: "arc:on_get_destroy_speed",
        title: "On Get Destroy Speed",
        emoji: "⚡",
        category: "blocks",
        producesData: [
            "arc:item_stack",
            "arc:item",
            "arc:block_state",
            "arc:block_position",
            "arc:world",
        ],
    },
    "arc:on_harvest_crop": {
        id: "arc:on_harvest_crop",
        title: "On Harvest Crop",
        emoji: "🌾",
        category: "blocks",
        producesData: ["arc:block_state", "arc:block_position", "arc:exp_drop", "arc:world"],
    },
    "arc:on_interact_block": {
        id: "arc:on_interact_block",
        title: "On Interact Block",
        emoji: "🖱️",
        category: "blocks",
        producesData: ["arc:block_state", "arc:block_position", "arc:world", "arc:item_stack", "arc:hand"],
    },
    "arc:on_place_block": {
        id: "arc:on_place_block",
        title: "On Place Block",
        emoji: "🧱",
        category: "blocks",
        producesData: ["arc:block_state", "arc:block_position", "arc:world"],
    },
    "arc:on_plant_crop": {
        id: "arc:on_plant_crop",
        title: "On Plant Crop",
        emoji: "🌱",
        category: "blocks",
        producesData: ["arc:block_state", "arc:block_position", "arc:world"],
    },
    "arc:on_till_soil": {
        id: "arc:on_till_soil",
        title: "On Till Soil",
        emoji: "🌿",
        category: "blocks",
        producesData: ["arc:block_state", "arc:block_position", "arc:world", "arc:item_stack"],
    },
    "arc:on_breed_animal": {
        id: "arc:on_breed_animal",
        title: "On Breed Animal",
        emoji: "🐑",
        category: "entities",
        producesData: ["arc:entity"],
    },
    "arc:on_death": {
        id: "arc:on_death",
        title: "On Death",
        emoji: "💀",
        category: "players",
        producesData: ["arc:entity", "arc:damage_source", "arc:block_position", "arc:world", "arc:exp_drop"],
    },
    "arc:on_get_hurt": {
        id: "arc:on_get_hurt",
        title: "On Get Hurt",
        emoji: "🤕",
        category: "players",
        producesData: ["arc:entity", "arc:damage_source", "arc:damage_amount"],
    },
    "arc:on_hurt_entity": {
        id: "arc:on_hurt_entity",
        title: "On Hurt Entity",
        emoji: "🗡️",
        category: "entities",
        producesData: ["arc:entity", "arc:damage_source", "arc:damage_amount"],
    },
    "arc:on_hurt_player": {
        id: "arc:on_hurt_player",
        title: "On Hurt Player",
        emoji: "🩸",
        category: "players",
        producesData: ["arc:entity", "arc:damage_source", "arc:damage_amount"],
    },
    "arc:on_interact_entity": {
        id: "arc:on_interact_entity",
        title: "On Interact Entity",
        emoji: "🖱️",
        category: "entities",
        producesData: ["arc:item_stack", "arc:item", "arc:hand", "arc:entity", "arc:world"],
    },
    "arc:on_kill_entity": {
        id: "arc:on_kill_entity",
        title: "On Kill Entity",
        emoji: "💀",
        category: "entities",
        producesData: [
            "arc:entity",
            "arc:damage_source",
            "arc:block_position",
            "arc:world",
            "arc:exp_drop",
        ],
    },
    "arc:on_tame_animal": {
        id: "arc:on_tame_animal",
        title: "On Tame Animal",
        emoji: "🐾",
        category: "entities",
        producesData: ["arc:entity", "arc:block_position", "arc:world"],
    },
    "arc:on_trade_with_villager": {
        id: "arc:on_trade_with_villager",
        title: "On Trade With Villager",
        emoji: "🤝",
        category: "entities",
        producesData: ["arc:entity", "arc:item_stack", "arc:trade_offer", "arc:world"],
    },
    "arc:on_craft_item": {
        id: "arc:on_craft_item",
        title: "On Craft Item",
        emoji: "🛠️",
        category: "items",
        producesData: ["arc:recipe", "arc:item", "arc:item_stack", "arc:world"],
    },
    "arc:on_drop_item": {
        id: "arc:on_drop_item",
        title: "On Drop Item",
        emoji: "🪣",
        category: "items",
        producesData: ["arc:entity", "arc:item", "arc:item_stack", "arc:world", "arc:block_position"],
    },
    "arc:on_enchant_item": {
        id: "arc:on_enchant_item",
        title: "On Enchant Item",
        emoji: "✨",
        category: "items",
        producesData: ["arc:item_stack", "arc:exp_level"],
    },
    "arc:on_fished_up_item": {
        id: "arc:on_fished_up_item",
        title: "On Fished Up Item",
        emoji: "🎣",
        category: "items",
        producesData: ["arc:item_stack", "arc:item"],
    },
    "arc:on_grind_item": {
        id: "arc:on_grind_item",
        title: "On Grind Item",
        emoji: "⚙️",
        category: "items",
        producesData: ["arc:item_stack", "arc:item", "arc:world", "arc:block_position", "arc:exp_drop"],
    },
    "arc:on_hurt_item": {
        id: "arc:on_hurt_item",
        title: "On Hurt Item",
        emoji: "🗡️",
        category: "items",
        producesData: ["arc:item_stack", "arc:item", "arc:world", "arc:damage_amount"],
    },
    "arc:on_item_break": {
        id: "arc:on_item_break",
        title: "On Item Break",
        emoji: "💔",
        category: "items",
        producesData: ["arc:item_stack", "arc:item", "arc:block_position", "arc:world"],
    },
    "arc:on_pickup_item": {
        id: "arc:on_pickup_item",
        title: "On Pickup Item",
        emoji: "🤲",
        category: "items",
        producesData: ["arc:entity", "arc:item_stack", "arc:item", "arc:block_position", "arc:world"],
    },
    "arc:on_smelt_item": {
        id: "arc:on_smelt_item",
        title: "On Smelt Item",
        emoji: "🔥",
        category: "items",
        producesData: [
            "arc:item_stack",
            "arc:block_position",
            "arc:block_state",
            "arc:world",
            "arc:recipe",
        ],
    },
    "arc:on_throw_item": {
        id: "arc:on_throw_item",
        title: "On Throw Item",
        emoji: "🏹",
        category: "items",
        producesData: ["arc:item_stack", "arc:entity", "arc:item", "arc:world"],
    },
    "arc:on_use_item": {
        id: "arc:on_use_item",
        title: "On Use Item",
        emoji: "🖱️",
        category: "items",
        producesData: ["arc:item_stack", "arc:item", "arc:world", "arc:hand"],
    },
    "arc:on_fill_bucket": {
        id: "arc:on_fill_bucket",
        title: "On Fill Bucket",
        emoji: "💧",
        category: "items",
        producesData: ["arc:item_stack", "arc:item", "arc:block_position", "arc:block_state", "arc:world"],
    },
    "arc:on_empty_bucket": {
        id: "arc:on_empty_bucket",
        title: "On Empty Bucket",
        emoji: "🪣",
        category: "items",
        producesData: ["arc:item_stack", "arc:item", "arc:block_position", "arc:block_state", "arc:world"],
    },
    "arc:on_crouch": {
        id: "arc:on_crouch",
        title: "On Crouch",
        emoji: "🦶",
        category: "movement",
        producesData: ["arc:distance_in_cm", "arc:world", "arc:block_position"],
    },
    "arc:on_crouch_start": {
        id: "arc:on_crouch_start",
        title: "On Start Crouching",
        emoji: "🦶",
        category: "movement",
        producesData: ["arc:world", "arc:block_position"],
    },
    "arc:on_crouch_stop": {
        id: "arc:on_crouch_stop",
        title: "On Stop Crouching",
        emoji: "🦶",
        category: "movement",
        producesData: ["arc:world", "arc:block_position"],
    },
    "arc:on_elytra_fly": {
        id: "arc:on_elytra_fly",
        title: "On Elytra Fly",
        emoji: "🪂",
        category: "movement",
        producesData: ["arc:distance_in_cm", "arc:world", "arc:block_position"],
    },
    "arc:on_elytra_fly_start": {
        id: "arc:on_elytra_fly_start",
        title: "On Start Elytra Flying",
        emoji: "🪂",
        category: "movement",
        producesData: ["arc:world", "arc:block_position"],
    },
    "arc:on_elytra_fly_stop": {
        id: "arc:on_elytra_fly_stop",
        title: "On Stop Elytra Flying",
        emoji: "🪂",
        category: "movement",
        producesData: ["arc:world", "arc:block_position"],
    },
    "arc:on_horse_ride": {
        id: "arc:on_horse_ride",
        title: "On Horse Ride",
        emoji: "🐎",
        category: "movement",
        producesData: ["arc:distance_in_cm", "arc:world", "arc:block_position"],
    },
    "arc:on_horse_ride_start": {
        id: "arc:on_horse_ride_start",
        title: "On Start Horse Riding",
        emoji: "🐎",
        category: "movement",
        producesData: ["arc:world", "arc:block_position"],
    },
    "arc:on_horse_ride_stop": {
        id: "arc:on_horse_ride_stop",
        title: "On Stop Horse Riding",
        emoji: "🐎",
        category: "movement",
        producesData: ["arc:world", "arc:block_position"],
    },
    "arc:on_sprint": {
        id: "arc:on_sprint",
        title: "On Sprint",
        emoji: "🏃‍♂️",
        category: "movement",
        producesData: ["arc:distance_in_cm", "arc:world", "arc:block_position"],
    },
    "arc:on_sprint_start": {
        id: "arc:on_sprint_start",
        title: "On Start Sprinting",
        emoji: "🏃‍♂️",
        category: "movement",
        producesData: ["arc:world", "arc:block_position"],
    },
    "arc:on_sprint_stop": {
        id: "arc:on_sprint_stop",
        title: "On Stop Sprinting",
        emoji: "🏃‍♂️",
        category: "movement",
        producesData: ["arc:world", "arc:block_position"],
    },
    "arc:on_swim": {
        id: "arc:on_swim",
        title: "On Swim",
        emoji: "🏊‍♂️",
        category: "movement",
        producesData: ["arc:distance_in_cm", "arc:world", "arc:block_position"],
    },
    "arc:on_swim_start": {
        id: "arc:on_swim_start",
        title: "On Start Swimming",
        emoji: "🏊‍♂️",
        category: "movement",
        producesData: ["arc:world", "arc:block_position"],
    },
    "arc:on_swim_stop": {
        id: "arc:on_swim_stop",
        title: "On Stop Swimming",
        emoji: "🏊‍♂️",
        category: "movement",
        producesData: ["arc:world", "arc:block_position"],
    },
    "arc:on_walk": {
        id: "arc:on_walk",
        title: "On Walk",
        emoji: "🚶‍♂️",
        category: "movement",
        producesData: ["arc:distance_in_cm", "arc:world", "arc:block_position"],
    },
    "arc:on_walk_start": {
        id: "arc:on_walk_start",
        title: "On Start Walking",
        emoji: "🚶‍♂️",
        category: "movement",
        producesData: ["arc:world", "arc:block_position"],
    },
    "arc:on_walk_stop": {
        id: "arc:on_walk_stop",
        title: "On Stop Walking",
        emoji: "🚶‍♂️",
        category: "movement",
        producesData: ["arc:world", "arc:block_position"],
    },
    "arc:on_jump": {
        id: "arc:on_jump",
        title: "On Jump",
        emoji: "🦘",
        category: "movement",
        producesData: ["arc:block_position", "arc:world"],
    },
    "arc:on_land": {
        id: "arc:on_land",
        title: "On Land",
        emoji: "⬇️",
        category: "movement",
        producesData: ["arc:fall_distance", "arc:block_position", "arc:world"],
    },
    "arc:on_brew_potion": {
        id: "arc:on_brew_potion",
        title: "On Brew Potion",
        emoji: "🧪",
        category: "players",
        producesData: [
            "arc:item_stack",
            "arc:block_position",
            "arc:block_state",
            "arc:world",
        ],
    },
    "arc:on_drink": {
        id: "arc:on_drink",
        title: "On Drink",
        emoji: "🥤",
        category: "players",
        producesData: ["arc:item_stack", "arc:item", "arc:world", "arc:block_position"],
    },
    "arc:on_eat": {
        id: "arc:on_eat",
        title: "On Eat",
        emoji: "🍽️",
        category: "players",
        producesData: ["arc:item_stack", "arc:item", "arc:world", "arc:block_position"],
    },
    "arc:on_add_effect": {
        id: "arc:on_add_effect",
        title: "On Effect Added",
        emoji: "💉",
        category: "players",
        producesData: ["arc:mob_effect_instance", "arc:entity", "arc:world", "arc:block_position"],
    },
    "arc:on_get_attack_speed": {
        id: "arc:on_get_attack_speed",
        title: "On Get Attack Speed",
        emoji: "⚔️",
        category: "players",
        producesData: ["arc:item_stack", "arc:item", "arc:world", "arc:block_position"],
    },
    "arc:on_rod_reel_in": {
        id: "arc:on_rod_reel_in",
        title: "On Rod Reel In",
        emoji: "🎣",
        category: "players",
        producesData: ["arc:entity", "arc:block_position", "arc:block_state", "arc:world"],
    },
    "arc:on_shoot_projectile": {
        id: "arc:on_shoot_projectile",
        title: "On Shoot Projectile",
        emoji: "🏹",
        category: "players",
        producesData: ["arc:item_stack", "arc:entity", "arc:world", "arc:block_position"],
    },
    "arc:on_strip_log": {
        id: "arc:on_strip_log",
        title: "On Strip Log",
        emoji: "🪵",
        category: "players",
        producesData: ["arc:block_state", "arc:block_position", "arc:world", "arc:item_stack", "arc:item", "arc:hand"],
    },
    "arc:on_use_anvil": {
        id: "arc:on_use_anvil",
        title: "On Use Anvil",
        emoji: "⚒️",
        category: "players",
        producesData: ["arc:item_stack", "arc:item", "arc:world", "arc:block_position", "arc:exp_level"],
    },
    "arc:on_block_with_shield": {
        id: "arc:on_block_with_shield",
        title: "On Block With Shield",
        emoji: "🛡️",
        category: "players",
        producesData: ["arc:damage_source", "arc:damage_amount", "arc:entity", "arc:block_position", "arc:world"],
    },
    "arc:on_change_dimension": {
        id: "arc:on_change_dimension",
        title: "On Change Dimension",
        emoji: "🌌",
        category: "players",
        producesData: ["arc:from_dimension", "arc:to_dimension", "arc:world"],
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
        | "world"
        | "misc";
    isActionCompatible: (action: ActionType) => boolean;
    readonly parameters: readonly {
        readonly name: string;
        readonly types: readonly {
            readonly type: string;
            readonly typeURL?: string;
        }[];
        readonly required: boolean;
        readonly default?: string | number | boolean;
        readonly description: string;
    }[];
} & SidebarItem;

export const conditionTypesDefinition = {
    "arc:block": {
        id: "arc:block",
        title: "Block",
        emoji: "🧱",
        category: "blocks",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:block_state"),
        parameters: [
            {
                name: "block",
                types: [
                    {
                        type: "ArcBlockState",
                        typeURL: "  ",
                    },
                ],
                required: true,
                description: "The block to check.",
            },
        ],
    },
    "arc:block_hardness": {
        id: "arc:block_hardness",
        title: "Block Hardness",
        emoji: "🪨",
        category: "blocks",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:block_state") &&
            action.producesData.includes("arc:block_position"),
        parameters: [
            {
                name: "min",
                types: [{ type: "float" }],
                required: false,
                default: "1.4e-45",
                description: "The minimum hardness value.",
            },
            {
                name: "max",
                types: [{ type: "float" }],
                required: false,
                default: "3.4028235e+38",
                description: "The maximum hardness value.",
            },
        ],
    },
    "arc:blocks": {
        id: "arc:blocks",
        title: "Blocks",
        emoji: "🧱🧱",
        category: "blocks",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:block_state"),
        parameters: [
            {
                name: "blocks",
                types: [{ type: "string[]" }],
                required: true,
                description: "The blocks/block tags to check.",
            },
        ],
    },
    "arc:crop_age": {
        id: "arc:crop_age",
        title: "Crop Age",
        emoji: "🌱",
        category: "blocks",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:block_state"),
        parameters: [
            {
                name: "age",
                types: [{ type: "int" }],
                required: true,
                description: "The age of the crop.",
            },
        ],
    },
    "arc:crop_fully_grown": {
        id: "arc:crop_fully_grown",
        title: "Crop Fully Grown",
        emoji: "🌾",
        category: "blocks",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:block_state"),
        parameters: [],
    },
    "arc:is_ore": {
        id: "arc:is_ore",
        title: "Is Ore",
        emoji: "💎",
        category: "blocks",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:block_state"),
        parameters: [],
    },
    "arc:not_in_block_pos_cache": {
        id: "arc:not_in_block_pos_cache",
        title: "Not In Block Pos Cache",
        emoji: "❌🧱",
        category: "blocks",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:block_position"),
        parameters: [],
    },
    "arc:effect": {
        id: "arc:effect",
        title: "Effect",
        emoji: "💉",
        category: "effects",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:mob_effect_instance"),
        parameters: [
            {
                name: "effect",
                types: [
                    {
                        type: "MobEffectInstance",
                        typeURL: "/projects/arc/wiki/json_formats/#effect",
                    },
                ],
                required: true,
                description: "The effect to check.",
            },
            {
                name: "check_amplifier",
                types: [{ type: "boolean" }],
                required: false,
                default: false,
                description: "Whether to check the amplifier.",
            },
            {
                name: "amplifier_comparison",
                types: [{ type: "ComparisonType" }],
                required: false,
                default: "==",
                description: "How to compare the amplifier.",
            },
            {
                name: "check_duration",
                types: [{ type: "boolean" }],
                required: false,
                default: false,
                description: "Whether to check the duration.",
            },
            {
                name: "duration_comparison",
                types: [{ type: "ComparisonType" }],
                required: false,
                default: "==",
                description: "How to compare the duration.",
            },
        ],
    },
    "arc:effect_category": {
        id: "arc:effect_category",
        title: "Effect Category",
        emoji: "💉",
        category: "effects",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:mob_effect_instance"),
        parameters: [
            {
                name: "category",
                types: [
                    {
                        type: "EffectCategory",
                        typeURL: "/projects/arc/wiki/json_formats/#effect-category",
                    },
                ],
                required: true,
                description: "The category of the effect.",
            },
        ],
    },
    "arc:damage_source": {
        id: "arc:damage_source",
        title: "Damage Source",
        emoji: "💥",
        category: "entities",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:damage_source"),
        parameters: [
            {
                name: "source",
                types: [{ type: "string" }],
                required: false,
                default: "any",
                description: "The damage source msg id.",
            },
            {
                name: "direct_entity_type",
                types: [{ type: "EntityType" }],
                required: false,
                description: "The entity type of the direct source.",
            },
            {
                name: "causing_entity_type",
                types: [{ type: "EntityType" }],
                required: false,
                description: "The entity type of the causing entity.",
            },
        ],
    },
    "arc:entity_in_block": {
        id: "arc:entity_in_block",
        title: "Entity In Block",
        emoji: "👤🧱",
        category: "entities",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:entity"),
        parameters: [
            {
                name: "block",
                types: [
                    {
                        type: "Block",
                        typeURL: "https://minecraft.wiki/w/List_of_blocks_by_version",
                    },
                ],
                required: true,
                description: "The block to check.",
            },
        ],
    },
    "arc:entity_type": {
        id: "arc:entity_type",
        title: "Entity Type",
        emoji: "👤",
        category: "entities",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:entity"),
        parameters: [
            {
                name: "entity_type",
                types: [
                    {
                        type: "EntityType",
                        typeURL: "/projects/arc/wiki/json_formats/#entity-type",
                    },
                ],
                required: true,
                description: "The entity type to check.",
            },
        ],
    },
    "arc:entity_types": {
        id: "arc:entity_types",
        title: "Entity Types",
        emoji: "👥",
        category: "entities",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:entity"),
        parameters: [
            {
                name: "entity_types",
                types: [
                    {
                        type: "EntityType[]",
                        typeURL: "/projects/arc/wiki/json_formats/#entity-type",
                    },
                ],
                required: true,
                description: "A list of entity types to check.",
            },
        ],
    },
    "arc:ready_for_shearing": {
        id: "arc:ready_for_shearing",
        title: "Ready For Shearing",
        emoji: "✂️🐑",
        category: "entities",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:entity"),
        parameters: [],
    },
    "arc:entity_data": {
        id: "arc:entity_data",
        title: "Entity Data",
        emoji: "📊",
        category: "entities",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "properties",
                types: [{ type: "EntityDataProperty[]" }],
                required: true,
                description: "List of properties to check.",
            },
            {
                name: "target",
                types: [{ type: "string" }],
                required: false,
                default: "player",
                description: "'player' or 'entity'.",
            },
        ],
    },
    "arc:critical_hit": {
        id: "arc:critical_hit",
        title: "Critical Hit",
        emoji: "💥",
        category: "entities",
        isActionCompatible: (action: ActionType) => action.producesData.includes("arc:is_critical_hit"),
        parameters: [],
    },
    "arc:target_health": {
        id: "arc:target_health",
        title: "Target Health",
        emoji: "❤️",
        category: "entities",
        isActionCompatible: (action: ActionType) => action.producesData.includes("arc:entity"),
        parameters: [
            {
                name: "health",
                types: [{ type: "double" }],
                required: true,
                description: "The health value.",
            },
            {
                name: "comparison",
                types: [{ type: "ComparisonType" }],
                required: false,
                default: "==",
                description: "Comparison type.",
            },
            {
                name: "is_percentage",
                types: [{ type: "boolean" }],
                required: false,
                default: false,
                description: "Is the value a percentage.",
            },
        ],
    },
    "arc:exp_drop": {
        id: "arc:exp_drop",
        title: "Experience Drop",
        emoji: "💰",
        category: "experience",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:exp_drop"),
        parameters: [
            {
                name: "min",
                types: [{ type: "int" }],
                required: true,
                description: "The minimum amount of experience dropped.",
            },
            {
                name: "max",
                types: [{ type: "int" }],
                required: true,
                description: "The maximum amount of experience dropped.",
            },
        ],
    },
    "arc:exp_level": {
        id: "arc:exp_level",
        title: "Experience Level",
        emoji: "📈",
        category: "experience",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:exp_level"),
        parameters: [
            {
                name: "level",
                types: [{ type: "int" }],
                required: true,
                description: "The experience level to check.",
            },
        ],
    },
    "arc:item": {
        id: "arc:item",
        title: "Item",
        emoji: "🪙",
        category: "items",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:item") ||
            action.producesData.includes("arc:item_stack"),
        parameters: [
            {
                name: "item",
                types: [
                    {
                        type: "ItemStack",
                        typeURL: "/projects/arc/wiki/json_formats/#item",
                    },
                ],
                required: true,
                description: "The item to check.",
            },
            {
                name: "check_components",
                types: [{ type: "boolean" }],
                required: false,
                default: true,
                description: "Whether to check item components.",
            },
        ],
    },
    "arc:item_equipped": {
        id: "arc:item_equipped",
        title: "Item Equipped",
        emoji: "🪙✅",
        category: "items",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "item",
                types: [
                    {
                        type: "ItemStack",
                        typeURL: "/projects/arc/wiki/json_formats/#item",
                    },
                ],
                required: true,
                description: "The item to check.",
            },
        ],
    },
    "arc:item_in_hand": {
        id: "arc:item_in_hand",
        title: "Item In Hand",
        emoji: "🪙✋",
        category: "items",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "item",
                types: [
                    {
                        type: "ItemStack",
                        typeURL: "/projects/arc/wiki/json_formats/#item",
                    },
                ],
                required: true,
                description: "The item to check.",
            },
            {
                name: "hand",
                types: [
                    {
                        type: "InteractionHand",
                        typeURL: "/projects/arc/wiki/json_formats/#hand",
                    },
                ],
                required: false,
                default: "null",
                description: "The hand to check. Checks both hands if not set.",
            },
        ],
    },
    "arc:item_in_inventory": {
        id: "arc:item_in_inventory",
        title: "Item In Inventory",
        emoji: "🪙📦",
        category: "items",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "item",
                types: [
                    {
                        type: "ItemStack",
                        typeURL: "/projects/arc/wiki/json_formats/#item",
                    },
                ],
                required: true,
                description: "The item to check.",
            },
        ],
    },
    "arc:items": {
        id: "arc:items",
        title: "Items",
        emoji: "🪙🪙",
        category: "items",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:item") ||
            action.producesData.includes("arc:item_stack"),
        parameters: [
            {
                name: "items",
                types: [{ type: "string[]" }],
                required: true,
                description: "The items/item tags to check.",
            },
        ],
    },
    "arc:item_durability": {
        id: "arc:item_durability",
        title: "Item Durability",
        emoji: "📉",
        category: "items",
        isActionCompatible: (action: ActionType) => action.producesData.includes("arc:item_stack"),
        parameters: [
            {
                name: "durability",
                types: [{ type: "double" }],
                required: true,
                description: "The durability value.",
            },
            {
                name: "comparison",
                types: [{ type: "ComparisonType" }],
                required: false,
                default: "==",
                description: "Comparison type.",
            },
            {
                name: "is_percentage",
                types: [{ type: "boolean" }],
                required: false,
                default: false,
                description: "Is the value a percentage.",
            },
        ],
    },
    "arc:has_enchantment": {
        id: "arc:has_enchantment",
        title: "Has Enchantment",
        emoji: "✨",
        category: "items",
        isActionCompatible: (action: ActionType) => action.producesData.includes("arc:item_stack"),
        parameters: [
            {
                name: "enchantment",
                types: [{ type: "ArcEnchantment" }],
                required: true,
                description: "The enchantment to check.",
            },
            {
                name: "comparison",
                types: [{ type: "ComparisonType" }],
                required: false,
                default: "==",
                description: "Level comparison type.",
            },
        ],
    },
    "arc:full_armor_set": {
        id: "arc:full_armor_set",
        title: "Full Armor Set",
        emoji: "🛡️",
        category: "items",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "items",
                types: [{ type: "ArcItemStack[]" }],
                required: true,
                description: "List of armor items.",
            },
            {
                name: "check_components",
                types: [{ type: "boolean" }],
                required: false,
                default: true,
                description: "Whether to check components.",
            },
        ],
    },
    "arc:inventory_full": {
        id: "arc:inventory_full",
        title: "Inventory Full",
        emoji: "🈵",
        category: "items",
        isActionCompatible: (action: ActionType) => true,
        parameters: [],
    },
    "arc:inventory_empty": {
        id: "arc:inventory_empty",
        title: "Inventory Empty",
        emoji: "🈳",
        category: "items",
        isActionCompatible: (action: ActionType) => true,
        parameters: [],
    },
    "arc:distance": {
        id: "arc:distance",
        title: "Distance",
        emoji: "📏",
        category: "movement",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:distance_in_cm"),
        parameters: [
            {
                name: "distance_in_blocks",
                types: [{ type: "int" }],
                required: true,
                description: "The distance in blocks.",
            },
        ],
    },
    "arc:is_riding": {
        id: "arc:is_riding",
        title: "Is Riding",
        emoji: "🏇",
        category: "movement",
        isActionCompatible: (action: ActionType) => true,
        parameters: [],
    },
    "arc:riding_entity_type": {
        id: "arc:riding_entity_type",
        title: "Riding Entity Type",
        emoji: "🏇",
        category: "movement",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "entity_type",
                types: [{ type: "EntityType" }],
                required: true,
                description: "The entity type being ridden.",
            },
        ],
    },
    "arc:is_sneaking": {
        id: "arc:is_sneaking",
        title: "Is Sneaking",
        emoji: "🦶",
        category: "movement",
        isActionCompatible: (action: ActionType) => true,
        parameters: [],
    },
    "arc:is_wet": {
        id: "arc:is_wet",
        title: "Is Wet",
        emoji: "💧",
        category: "movement",
        isActionCompatible: (action: ActionType) => true,
        parameters: [],
    },
    "arc:is_underwater": {
        id: "arc:is_underwater",
        title: "Is Underwater",
        emoji: "🌊",
        category: "movement",
        isActionCompatible: (action: ActionType) => true,
        parameters: [],
    },
    "arc:or": {
        id: "arc:or",
        title: "Or",
        emoji: "🔀",
        category: "none",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "conditions",
                types: [
                    {
                        type: "Condition[]",
                        typeURL: "/projects/arc/wiki/conditions",
                    },
                ],
                required: true,
                description: "A list of conditions to check.",
            },
        ],
    },
    "arc:chance": {
        id: "arc:chance",
        title: "Chance",
        emoji: "🎲",
        category: "misc",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "chance",
                types: [{ type: "double" }],
                required: true,
                description: "Percentage chance (0-100).",
            },
        ],
    },
    "arc:is_blasting_recipe": {
        id: "arc:is_blasting_recipe",
        title: "Is Blasting Recipe",
        emoji: "🔥💎",
        category: "recipes",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:recipe"),
        parameters: [],
    },
    "arc:is_smoking_recipe": {
        id: "arc:is_smoking_recipe",
        title: "Is Smoking Recipe",
        emoji: "🔥🍖",
        category: "recipes",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:recipe"),
        parameters: [],
    },
    "arc:scoreboard": {
        id: "arc:scoreboard",
        title: "Scoreboard",
        emoji: "📋",
        category: "scoreboard",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "objective",
                types: [{ type: "string" }],
                required: true,
                description: "The scoreboard objective to check.",
            },
            {
                name: "min",
                types: [{ type: "int" }],
                required: true,
                description: "The minimum score.",
            },
            {
                name: "max",
                types: [{ type: "int" }],
                required: true,
                description: "The maximum score.",
            },
        ],
    },
    "arc:team": {
        id: "arc:team",
        title: "Team",
        emoji: "👥",
        category: "teams",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "team",
                types: [{ type: "string" }],
                required: true,
                description: "The team name to check.",
            },
        ],
    },
    "arc:dimension": {
        id: "arc:dimension",
        title: "Dimension",
        emoji: "🌍",
        category: "world",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "dimension",
                types: [{ type: "ResourceKey<Level>" }],
                required: true,
                description: "The dimension to check.",
            },
        ],
    },
    "arc:y_level": {
        id: "arc:y_level",
        title: "Y Level",
        emoji: "↕️",
        category: "world",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "min_y",
                types: [{ type: "int" }],
                required: false,
                default: "-2147483648",
                description: "Minimum Y level.",
            },
            {
                name: "max_y",
                types: [{ type: "int" }],
                required: false,
                default: "2147483647",
                description: "Maximum Y level.",
            },
        ],
    },
    "arc:time_of_day": {
        id: "arc:time_of_day",
        title: "Time of Day",
        emoji: "⏰",
        category: "world",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "min_time",
                types: [{ type: "int" }],
                required: true,
                description: "Minimum time (0-24000).",
            },
            {
                name: "max_time",
                types: [{ type: "int" }],
                required: true,
                description: "Maximum time (0-24000).",
            },
        ],
    },
    "arc:weather": {
        id: "arc:weather",
        title: "Weather",
        emoji: "🌦️",
        category: "world",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "weather",
                types: [{ type: "ArcWeatherType" }],
                required: true,
                description: "CLEAR, RAIN, or THUNDER.",
            },
        ],
    },
    "arc:light_level": {
        id: "arc:light_level",
        title: "Light Level",
        emoji: "💡",
        category: "world",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "light_level",
                types: [{ type: "int" }],
                required: true,
                description: "The light level.",
            },
            {
                name: "comparison",
                types: [{ type: "ComparisonType" }],
                required: false,
                default: "==",
                description: "Comparison type.",
            },
        ],
    },
    "arc:biome": {
        id: "arc:biome",
        title: "Biome",
        emoji: "🌲",
        category: "world",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "biomes",
                types: [{ type: "Identifier[]" }],
                required: true,
                description: "List of biomes to check.",
            },
        ],
    },
    "arc:structure": {
        id: "arc:structure",
        title: "Structure",
        emoji: "🏰",
        category: "world",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "structure",
                types: [{ type: "TagKey<Structure>" }],
                required: true,
                description: "Structure tag to check.",
            },
        ],
    },
    "arc:advancement": {
        id: "arc:advancement",
        title: "Advancement",
        emoji: "🏆",
        category: "misc",
        isActionCompatible: (action: ActionType) => action.producesData.includes("arc:advancement"),
        parameters: [
            {
                name: "id",
                types: [{ type: "Identifier" }],
                required: false,
                description: "Advancement ID.",
            },
            {
                name: "parent_id",
                types: [{ type: "Identifier" }],
                required: false,
                description: "Parent Advancement ID.",
            },
            {
                name: "type",
                types: [{ type: "AdvancementType" }],
                required: false,
                description: "TASK, GOAL, or CHALLENGE.",
            },
        ],
    },
    "arc:hand": {
        id: "arc:hand",
        title: "Hand",
        emoji: "✋",
        category: "misc",
        isActionCompatible: (action: ActionType) => action.producesData.includes("arc:hand"),
        parameters: [
            {
                name: "hand",
                types: [{ type: "InteractionHand" }],
                required: true,
                description: "MAIN_HAND or OFF_HAND.",
            },
        ],
    },
    "arc:on_fire": {
        id: "arc:on_fire",
        title: "On Fire",
        emoji: "🔥",
        category: "misc",
        isActionCompatible: (action: ActionType) => true,
        parameters: [],
    },
    "arc:health": {
        id: "arc:health",
        title: "Health",
        emoji: "❤️",
        category: "misc",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "health",
                types: [{ type: "double" }],
                required: true,
                description: "Health value.",
            },
            {
                name: "comparison",
                types: [{ type: "ComparisonType" }],
                required: false,
                default: "==",
                description: "Comparison type.",
            },
            {
                name: "is_percentage",
                types: [{ type: "boolean" }],
                required: false,
                default: false,
                description: "Is the value a percentage.",
            },
        ],
    },
    "arc:food_level": {
        id: "arc:food_level",
        title: "Food Level",
        emoji: "🍖",
        category: "misc",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "food_level",
                types: [{ type: "int" }],
                required: true,
                description: "Food level value.",
            },
            {
                name: "comparison",
                types: [{ type: "ComparisonType" }],
                required: false,
                default: "==",
                description: "Comparison type.",
            },
        ],
    },
    "arc:saturation_level": {
        id: "arc:saturation_level",
        title: "Saturation Level",
        emoji: "🥩",
        category: "misc",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "saturation_level",
                types: [{ type: "float" }],
                required: true,
                description: "Saturation level value.",
            },
            {
                name: "comparison",
                types: [{ type: "ComparisonType" }],
                required: false,
                default: "==",
                description: "Comparison type.",
            },
        ],
    },
    "arc:is_sleeping": {
        id: "arc:is_sleeping",
        title: "Is Sleeping",
        emoji: "🛏️",
        category: "misc",
        isActionCompatible: (action: ActionType) => true,
        parameters: [],
    },
    "arc:is_blocking": {
        id: "arc:is_blocking",
        title: "Is Blocking",
        emoji: "🛡️",
        category: "misc",
        isActionCompatible: (action: ActionType) => true,
        parameters: [],
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
        | "server"
        | "world";
    isActionCompatible: (action: ActionType) => boolean;
    readonly parameters: readonly {
        readonly name: string;
        readonly types: readonly {
            readonly type: string;
            readonly typeURL?: string;
        }[];
        readonly required: boolean;
        readonly default?: string | number | boolean;
        readonly description: string;
    }[];
} & SidebarItem;

export const rewardTypesDefinition = {
    "arc:block_drop_multiplier": {
        id: "arc:block_drop_multiplier",
        title: "Block Drop Multiplier",
        emoji: "🧱",
        category: "blocks",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:block_state") &&
            action.producesData.includes("arc:block_position"),
        parameters: [
            {
                name: "multiplier",
                types: [{ type: "int" }],
                required: true,
                description: "The multiplier for block drops.",
            },
        ],
    },
    "arc:destroy_speed_multiplier": {
        id: "arc:destroy_speed_multiplier",
        title: "Destroy Speed Multiplier",
        emoji: "⚡",
        category: "blocks",
        isActionCompatible: (action: ActionType) =>
            action.id === "arc:on_get_destroy_speed",
        parameters: [
            {
                name: "multiplier",
                types: [{ type: "float" }],
                required: true,
                description: "The multiplier for destroy speed.",
            },
        ],
    },
    "arc:set_block": {
        id: "arc:set_block",
        title: "Set Block",
        emoji: "🏗️",
        category: "blocks",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "block",
                types: [{ type: "ArcBlockState" }],
                required: true,
                description: "The block state to place.",
            },
            {
                name: "target",
                types: [{ type: "ArcPositionTarget" }],
                required: false,
                default: "BLOCK",
                description: "The target position (PLAYER, BLOCK, ENTITY).",
            },
            {
                name: "place_as_player",
                types: [{ type: "boolean" }],
                required: false,
                default: true,
                description: "Whether to simulate player placement.",
            },
        ],
    },
    "arc:cancel_action": {
        id: "arc:cancel_action",
        title: "Cancel Action",
        emoji: "❌",
        category: "none",
        isActionCompatible: (action: ActionType) => {
            const allowedActions: ActionTypesKeys[] = [
                "arc:on_place_block",
                "arc:on_break_block",
                "arc:on_interact_block",
                "arc:on_harvest_crop",
                "arc:on_plant_crop",
                "arc:on_tame_animal",
                "arc:on_breed_animal",
                "arc:on_interact_entity",
                "arc:on_hurt_entity",
                "arc:on_hurt_item",
                "arc:on_hurt_player",
                "arc:on_add_effect",
                "arc:on_get_hurt",
                "arc:on_use_item",
                "arc:on_eat",
                "arc:on_drink",
                "arc:on_get_destroy_speed",
                "arc:on_get_attack_speed",
                "arc:on_land",
                "arc:on_empty_bucket",
                "arc:on_strip_log"
            ];
            return allowedActions.includes(action.id);
        },
        parameters: [],
    },
    "arc:effect": {
        id: "arc:effect",
        title: "Potion Effect",
        emoji: "💉",
        category: "effects",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "effect",
                types: [
                    {
                        type: "MobEffectInstance",
                        typeURL: "/projects/arc/wiki/json_formats/#effect",
                    },
                ],
                required: true,
                description: "The effect to apply.",
            },
        ],
    },
    "arc:effect_amplifier_addition": {
        id: "arc:effect_amplifier_addition",
        title: "Effect Amplifier Addition",
        emoji: "➕💉",
        category: "effects",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:mob_effect_instance"),
        parameters: [
            {
                name: "addition",
                types: [{ type: "int" }],
                required: true,
                description: "The amount to add to the effect's amplifier.",
            },
        ],
    },
    "arc:effect_duration_multiplier": {
        id: "arc:effect_duration_multiplier",
        title: "Effect Duration Multiplier",
        emoji: "⏳💉",
        category: "effects",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:mob_effect_instance"),
        parameters: [
            {
                name: "multiplier",
                types: [{ type: "double" }],
                required: true,
                description: "The multiplier for the effect's duration.",
            },
        ],
    },
    "arc:remove_effect": {
        id: "arc:remove_effect",
        title: "Remove Effect",
        emoji: "❌💉",
        category: "effects",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:mob_effect_instance"),
        parameters: [],
    },
    "arc:cleanse_effects": {
        id: "arc:cleanse_effects",
        title: "Cleanse Effects",
        emoji: "🚿",
        category: "effects",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "remove_positive",
                types: [{ type: "boolean" }],
                required: false,
                default: false,
                description: "Remove beneficial effects.",
            },
            {
                name: "remove_negative",
                types: [{ type: "boolean" }],
                required: false,
                default: true,
                description: "Remove harmful effects.",
            },
            {
                name: "remove_neutral",
                types: [{ type: "boolean" }],
                required: false,
                default: false,
                description: "Remove neutral effects.",
            },
        ],
    },
    "arc:damage_multiplier": {
        id: "arc:damage_multiplier",
        title: "Damage Multiplier",
        emoji: "⚔️",
        category: "entities",
        isActionCompatible: (action: ActionType) =>
            action.id === "arc:on_get_hurt" || action.id === "arc:on_hurt_player" || action.id === "arc:on_hurt_entity" || action.id === "arc:on_hurt_item",
        parameters: [
            {
                name: "multiplier",
                types: [{ type: "double" }],
                required: true,
                description: "The multiplier for the damage.",
            },
        ],
    },
    "arc:entity_on_fire": {
        id: "arc:entity_on_fire",
        title: "Entity On Fire",
        emoji: "🔥👤",
        category: "entities",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:entity"),
        parameters: [
            {
                name: "ticks",
                types: [{ type: "int" }],
                required: true,
                description: "The duration of the fire in ticks.",
            },
        ],
    },
    "arc:multiple_arrows": {
        id: "arc:multiple_arrows",
        title: "Multiple Arrows",
        emoji: "➡️➡️",
        category: "entities",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:entity"),
        parameters: [
            {
                name: "amount",
                types: [{ type: "int" }],
                required: true,
                description: "The number of arrows to shoot.",
            },
        ],
    },
    "arc:spawn_entity": {
        id: "arc:spawn_entity",
        title: "Spawn Entity",
        emoji: "🧟",
        category: "entities",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "entity_type",
                types: [{ type: "EntityType" }],
                required: true,
                description: "Type of entity to spawn.",
            },
            {
                name: "count",
                types: [{ type: "int" }],
                required: false,
                default: 1,
                description: "Number of entities.",
            },
        ],
    },
    "arc:disarm_entity": {
        id: "arc:disarm_entity",
        title: "Disarm Entity",
        emoji: "🫳",
        category: "entities",
        isActionCompatible: (action: ActionType) => action.producesData.includes("arc:entity"),
        parameters: [
            {
                name: "item_target",
                types: [{ type: "ArcItemTarget" }],
                required: false,
                default: "MAIN_HAND",
                description: "Which slot to disarm.",
            },
            {
                name: "position_target",
                types: [{ type: "ArcPositionTarget" }],
                required: false,
                default: "ENTITY",
                description: "Where to drop the item.",
            },
        ],
    },
    "arc:freeze_entity": {
        id: "arc:freeze_entity",
        title: "Freeze Entity",
        emoji: "🧊",
        category: "entities",
        isActionCompatible: (action: ActionType) => action.producesData.includes("arc:entity"),
        parameters: [
            {
                name: "duration",
                types: [{ type: "int" }],
                required: false,
                default: 100,
                description: "Ticks to apply slowness.",
            },
        ],
    },
    "arc:pull_entity": {
        id: "arc:pull_entity",
        title: "Pull Entity",
        emoji: "🧲",
        category: "entities",
        isActionCompatible: (action: ActionType) => action.producesData.includes("arc:entity"),
        parameters: [
            {
                name: "force",
                types: [{ type: "double" }],
                required: false,
                default: 1.0,
                description: "Force of pull.",
            },
        ],
    },
    "arc:push_entity": {
        id: "arc:push_entity",
        title: "Push Entity",
        emoji: "💨",
        category: "entities",
        isActionCompatible: (action: ActionType) => action.producesData.includes("arc:entity"),
        parameters: [
            {
                name: "force",
                types: [{ type: "double" }],
                required: false,
                default: 1.0,
                description: "Force of push.",
            },
        ],
    },
    "arc:exp": {
        id: "arc:exp",
        title: "Experience",
        emoji: "✨",
        category: "experience",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "min",
                types: [{ type: "int" }],
                required: true,
                description: "The minimum amount of experience to give.",
            },
            {
                name: "max",
                types: [{ type: "int" }],
                required: true,
                description: "The maximum amount of experience to give.",
            },
        ],
    },
    "arc:exp_multiplier": {
        id: "arc:exp_multiplier",
        title: "Experience Multiplier",
        emoji: "✨➕",
        category: "experience",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:exp_drop") &&
            action.producesData.includes("arc:block_position"),
        parameters: [
            {
                name: "multiplier",
                types: [{ type: "int" }],
                required: true,
                description: "The multiplier for the experience.",
            },
        ],
    },
    "arc:drop_item": {
        id: "arc:drop_item",
        title: "Drop Item",
        emoji: "🪙",
        category: "items",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:block_position"),
        parameters: [
            {
                name: "item",
                types: [
                    {
                        type: "ItemStack",
                        typeURL: "/projects/arc/wiki/json_formats/#item",
                    },
                ],
                required: true,
                description: "The item to drop.",
            },
        ],
    },
    "arc:item": {
        id: "arc:item",
        title: "Item",
        emoji: "🪙",
        category: "items",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "item",
                types: [
                    {
                        type: "ItemStack",
                        typeURL: "/projects/arc/wiki/json_formats/#item",
                    },
                ],
                required: true,
                description: "The item to give.",
            },
        ],
    },
    "arc:enchant_item": {
        id: "arc:enchant_item",
        title: "Enchant Item",
        emoji: "✨",
        category: "items",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "enchantments",
                types: [{ type: "ArcEnchantment[]" }],
                required: true,
                description: "List of enchantments to apply.",
            },
            {
                name: "target",
                types: [{ type: "ArcItemTarget" }],
                required: true,
                description: "Target item slot.",
            },
        ],
    },
    "arc:repair_held_item": {
        id: "arc:repair_held_item",
        title: "Repair Held Item",
        emoji: "🔧",
        category: "items",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "amount",
                types: [{ type: "int" }],
                required: true,
                description: "Amount to repair.",
            },
            {
                name: "is_percentage",
                types: [{ type: "boolean" }],
                required: false,
                default: false,
                description: "Is amount a percentage.",
            },
            {
                name: "hand",
                types: [{ type: "InteractionHand" }],
                required: false,
                default: "MAIN_HAND",
                description: "Hand to repair.",
            },
        ],
    },
    "arc:repair_all_armor": {
        id: "arc:repair_all_armor",
        title: "Repair All Armor",
        emoji: "🛡️🔧",
        category: "items",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "amount",
                types: [{ type: "int" }],
                required: true,
                description: "Amount to repair.",
            },
            {
                name: "is_percentage",
                types: [{ type: "boolean" }],
                required: false,
                default: false,
                description: "Is amount a percentage.",
            },
        ],
    },
    "arc:smelt_inventory": {
        id: "arc:smelt_inventory",
        title: "Smelt Inventory",
        emoji: "🔥🎒",
        category: "items",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "recipes",
                types: [{ type: "Identifier[]" }],
                required: false,
                description: "Specific recipes to allow.",
            },
        ],
    },
    "arc:attack_speed_multiplier": {
        id: "arc:attack_speed_multiplier",
        title: "Attack Speed Multiplier",
        emoji: "⚡",
        category: "players",
        isActionCompatible: (action: ActionType) =>
            action.id === "arc:on_get_attack_speed",
        parameters: [
            {
                name: "multiplier",
                types: [{ type: "float" }],
                required: true,
                description: "The multiplier for the attack speed.",
            },
        ],
    },
    "arc:move_to_entity": {
        id: "arc:move_to_entity",
        title: "Move To Entity",
        emoji: "👤➡️",
        category: "players",
        isActionCompatible: (action: ActionType) =>
            action.producesData.includes("arc:entity"),
        parameters: [
            {
                name: "force",
                types: [{ type: "float" }],
                required: true,
                description: "The force to move the player with.",
            },
        ],
    },
    "arc:heal": {
        id: "arc:heal",
        title: "Heal",
        emoji: "💖",
        category: "players",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "amount",
                types: [{ type: "float" }],
                required: true,
                description: "Amount to heal.",
            },
            {
                name: "is_percentage",
                types: [{ type: "boolean" }],
                required: false,
                default: false,
                description: "Is amount a percentage.",
            },
        ],
    },
    "arc:feed": {
        id: "arc:feed",
        title: "Feed",
        emoji: "🍗",
        category: "players",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "food_level",
                types: [{ type: "int" }],
                required: false,
                default: 0,
                description: "Food to add.",
            },
            {
                name: "saturation",
                types: [{ type: "float" }],
                required: false,
                default: 0.0,
                description: "Saturation to add.",
            },
        ],
    },
    "arc:launch_player": {
        id: "arc:launch_player",
        title: "Launch Player",
        emoji: "🚀",
        category: "players",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "x",
                types: [{ type: "float" }],
                required: false,
                default: 0.0,
                description: "Force X.",
            },
            {
                name: "y",
                types: [{ type: "float" }],
                required: false,
                default: 0.0,
                description: "Force Y.",
            },
            {
                name: "z",
                types: [{ type: "float" }],
                required: false,
                default: 0.0,
                description: "Force Z.",
            },
        ],
    },
    "arc:teleport_player": {
        id: "arc:teleport_player",
        title: "Teleport Player",
        emoji: "🔮",
        category: "players",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "radius",
                types: [{ type: "int" }],
                required: true,
                description: "Radius to teleport within.",
            },
        ],
    },
    "arc:give_recipes": {
        id: "arc:give_recipes",
        title: "Give Recipes",
        emoji: "📖",
        category: "players",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "recipes",
                types: [{ type: "Identifier[]" }],
                required: true,
                description: "Recipes to unlock.",
            },
        ],
    },
    "arc:command": {
        id: "arc:command",
        title: "Command",
        emoji: "💻",
        category: "server",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "command",
                types: [{ type: "string" }],
                required: true,
                description: "The command to execute.",
            },
        ],
    },
    "arc:create_explosion": {
        id: "arc:create_explosion",
        title: "Create Explosion",
        emoji: "💥",
        category: "world",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "radius",
                types: [{ type: "float" }],
                required: true,
                description: "Explosion radius.",
            },
            {
                name: "causes_fire",
                types: [{ type: "boolean" }],
                required: false,
                default: false,
                description: "Does it start fires.",
            },
            {
                name: "block_interaction",
                types: [{ type: "string" }],
                required: false,
                default: "NONE",
                description: "Explosion interaction (NONE, BLOCK, TNT, MOB).",
            },
        ],
    },
    "arc:strike_lightning": {
        id: "arc:strike_lightning",
        title: "Strike Lightning",
        emoji: "⚡",
        category: "world",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "position",
                types: [{ type: "ArcPositionTarget" }],
                required: true,
                description: "Target position.",
            },
            {
                name: "visual_only",
                types: [{ type: "boolean" }],
                required: false,
                default: false,
                description: "Visual only (no damage).",
            },
        ],
    },
    "arc:change_weather": {
        id: "arc:change_weather",
        title: "Change Weather",
        emoji: "☀️",
        category: "world",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "weather",
                types: [{ type: "ArcWeatherType" }],
                required: true,
                description: "CLEAR, RAIN, or THUNDER.",
            },
            {
                name: "duration",
                types: [{ type: "int" }],
                required: false,
                default: 6000,
                description: "Duration in ticks.",
            },
        ],
    },
    "arc:change_time": {
        id: "arc:change_time",
        title: "Change Time",
        emoji: "🕒",
        category: "world",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "time",
                types: [{ type: "int" }],
                required: true,
                description: "Time to set or add.",
            },
            {
                name: "add",
                types: [{ type: "boolean" }],
                required: false,
                default: false,
                description: "Add time instead of setting.",
            },
        ],
    },
    "arc:play_sound": {
        id: "arc:play_sound",
        title: "Play Sound",
        emoji: "🔊",
        category: "world",
        isActionCompatible: (action: ActionType) => true,
        parameters: [
            {
                name: "sound",
                types: [{ type: "SoundEvent" }],
                required: true,
                description: "The sound event to play.",
            },
            {
                name: "volume",
                types: [{ type: "float" }],
                required: false,
                default: 1.0,
                description: "Volume.",
            },
            {
                name: "pitch",
                types: [{ type: "float" }],
                required: false,
                default: 1.0,
                description: "Pitch.",
            },
            {
                name: "position",
                types: [{ type: "ArcPositionTarget" }],
                required: false,
                default: "PLAYER",
                description: "Position to play sound.",
            },
            {
                name: "sound_source",
                types: [{ type: "SoundSource" }],
                required: false,
                default: "PLAYERS",
                description: "Source category.",
            },
        ],
    },
} as const;

export type RewardTypesKeys = keyof typeof rewardTypesDefinition;

export type RewardTypes = {
    [key in RewardTypesKeys]: RewardType;
};

export const rewardTypes: RewardTypes = rewardTypesDefinition;