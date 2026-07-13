import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import { actionTypes, conditionTypes, rewardTypes } from "./data";

const sidebar: SidebarsConfig = {
    sidebar: [
        {
            type: "doc",
            id: "index",
            label: "Arc Lib",
        },

        {
            type: "category",
            label: "🧩 Core Mechanics / Features",
            collapsed: false,
            items: [
                {
                    type: "doc",
                    id: "wiki/actions/index",
                    label: "Actions",
                },
                {
                    type: "doc",
                    id: "wiki/action_holders/index",
                    label: "Action Holders",
                },
                {
                    type: "category",
                    label: "Action Data",
                    collapsed: true,
                    link: { type: "doc", id: "wiki/action_data/index" },
                    items: [],
                },
            ],
        },
        {
            type: "category",
            label: "🛠️ Development / API",
            collapsed: false,
            items: [
                {
                    type: "doc",
                    id: "wiki/gradle-setup",
                    label: "Gradle Setup",
                },
            ],
        },
        {
            type: "category",
            label: "📄 JSON Formats",
            collapsed: false,
            link: { type: "doc", id: "wiki/json_formats/index" },
            items: [
                {
                    type: "category",
                    label: "Action Types",
                    collapsed: true,
                    link: {
                        type: "doc",
                        id: "wiki/action_types/index",
                    },
                    items: [
                        {
                            type: "category",
                            label: "Advancements",
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "wiki/action_types/advancements/index",
                            },
                            items: Object.values(actionTypes)
                                .filter(
                                    (action) =>
                                        action.category === "advancements",
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((action) => ({
                                    type: "doc" as const,
                                    id: `wiki/action_types/advancements/${action.id.replace(/\w+:/, "")}`,
                                    label: action.title,
                                })),
                        },
                        {
                            type: "category",
                            label: "Blocks",
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "wiki/action_types/blocks/index",
                            },
                            items: Object.values(actionTypes)
                                .filter(
                                    (action) => action.category === "blocks",
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((action) => ({
                                    type: "doc" as const,
                                    id: `wiki/action_types/blocks/${action.id.replace(/\w+:/, "")}`,
                                    label: action.title,
                                })),
                        },
                        {
                            type: "category",
                            label: "Entities",
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "wiki/action_types/entities/index",
                            },
                            items: Object.values(actionTypes)
                                .filter(
                                    (action) => action.category === "entities",
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((action) => ({
                                    type: "doc" as const,
                                    id: `wiki/action_types/entities/${action.id.replace(/\w+:/, "")}`,
                                    label: action.title,
                                })),
                        },
                        {
                            type: "category",
                            label: "Items",
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "wiki/action_types/items/index",
                            },
                            items: Object.values(actionTypes)
                                .filter((action) => action.category === "items")
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((action) => ({
                                    type: "doc" as const,
                                    id: `wiki/action_types/items/${action.id.replace(/\w+:/, "")}`,
                                    label: action.title,
                                })),
                        },
                        {
                            type: "category",
                            label: "Movement",
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "wiki/action_types/movement/index",
                            },
                            items: Object.values(actionTypes)
                                .filter(
                                    (action) => action.category === "movement",
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((action) => ({
                                    type: "doc" as const,
                                    id: `wiki/action_types/movement/${action.id.replace(/\w+:/, "")}`,
                                    label: action.title,
                                })),
                        },
                        {
                            type: "category",
                            label: "Players",
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "wiki/action_types/players/index",
                            },
                            items: Object.values(actionTypes)
                                .filter(
                                    (action) => action.category === "players",
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((action) => ({
                                    type: "doc" as const,
                                    id: `wiki/action_types/players/${action.id.replace(/\w+:/, "")}`,
                                    label: action.title,
                                })),
                        },
                    ],
                },
                {
                    type: "category",
                    label: "Reward Types",
                    collapsed: true,
                    link: {
                        type: "doc",
                        id: "wiki/reward_types/index",
                    },
                    items: [
                        ...Object.values(rewardTypes)
                            .filter((reward) => reward.category === "none")
                            .sort((a, b) => a.title.localeCompare(b.title))
                            .map((reward) => ({
                                type: "doc" as const,
                                id: `wiki/reward_types/${reward.id.replace(/\w+:/, "")}`,
                                label: reward.title,
                            })),
                        {
                            type: "category",
                            label: "Blocks",
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "wiki/reward_types/blocks/index",
                            },
                            items: Object.values(rewardTypes)
                                .filter(
                                    (reward) => reward.category === "blocks",
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((reward) => ({
                                    type: "doc" as const,
                                    id: `wiki/reward_types/blocks/${reward.id.replace(/\w+:/, "")}`,
                                    label: reward.title,
                                })),
                        },
                        {
                            type: "category",
                            label: "Effects",
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "wiki/reward_types/effects/index",
                            },
                            items: Object.values(rewardTypes)
                                .filter(
                                    (reward) => reward.category === "effects",
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((reward) => ({
                                    type: "doc" as const,
                                    id: `wiki/reward_types/effects/${reward.id.replace(/\w+:/, "")}`,
                                    label: reward.title,
                                })),
                        },
                        {
                            type: "category",
                            label: "Entities",
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "wiki/reward_types/entities/index",
                            },
                            items: Object.values(rewardTypes)
                                .filter(
                                    (reward) => reward.category === "entities",
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((reward) => ({
                                    type: "doc" as const,
                                    id: `wiki/reward_types/entities/${reward.id.replace(/\w+:/, "")}`,
                                    label: reward.title,
                                })),
                        },
                        {
                            type: "category",
                            label: "Experience",
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "wiki/reward_types/experience/index",
                            },
                            items: Object.values(rewardTypes)
                                .filter(
                                    (reward) =>
                                        reward.category === "experience",
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((reward) => ({
                                    type: "doc" as const,
                                    id: `wiki/reward_types/experience/${reward.id.replace(/\w+:/, "")}`,
                                    label: reward.title,
                                })),
                        },
                        {
                            type: "category",
                            label: "Items",
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "wiki/reward_types/items/index",
                            },
                            items: Object.values(rewardTypes)
                                .filter((reward) => reward.category === "items")
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((reward) => ({
                                    type: "doc" as const,
                                    id: `wiki/reward_types/items/${reward.id.replace(/\w+:/, "")}`,
                                    label: reward.title,
                                })),
                        },
                        {
                            type: "category",
                            label: "Players",
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "wiki/reward_types/players/index",
                            },
                            items: Object.values(rewardTypes)
                                .filter(
                                    (reward) => reward.category === "players",
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((reward) => ({
                                    type: "doc" as const,
                                    id: `wiki/reward_types/players/${reward.id.replace(/\w+:/, "")}`,
                                    label: reward.title,
                                })),
                        },
                        {
                            type: "category",
                            label: "Server",
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "wiki/reward_types/server/index",
                            },
                            items: Object.values(rewardTypes)
                                .filter(
                                    (reward) => reward.category === "server",
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((reward) => ({
                                    type: "doc" as const,
                                    id: `wiki/reward_types/server/${reward.id.replace(/\w+:/, "")}`,
                                    label: reward.title,
                                })),
                        },
                        {
                            type: "category",
                            label: "World",
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "wiki/reward_types/world/index",
                            },
                            items: Object.values(rewardTypes)
                                .filter((reward) => reward.category === "world")
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((reward) => ({
                                    type: "doc" as const,
                                    id: `wiki/reward_types/world/${reward.id.replace(/\w+:/, "")}`,
                                    label: reward.title,
                                })),
                        },
                    ],
                },
                {
                    type: "category",
                    label: "Condition Types",
                    collapsed: true,
                    link: {
                        type: "doc",
                        id: "wiki/condition_types/index",
                    },
                    items: [
                        ...Object.values(conditionTypes)
                            .filter(
                                (condition) => condition.category === "none",
                            )
                            .sort((a, b) => a.title.localeCompare(b.title))
                            .map((condition) => ({
                                type: "doc" as const,
                                id: `wiki/condition_types/${condition.id.replace(/\w+:/, "")}`,
                                label: condition.title,
                            })),
                        {
                            type: "category",
                            label: "Advancements",
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "wiki/condition_types/advancements/index",
                            },
                            items: Object.values(conditionTypes)
                                .filter(
                                    (condition) =>
                                        condition.category === "advancements",
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((condition) => ({
                                    type: "doc" as const,
                                    id: `wiki/condition_types/advancements/${condition.id.replace(/\w+:/, "")}`,
                                    label: condition.title,
                                })),
                        },
                        {
                            type: "category",
                            label: "Blocks",
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "wiki/condition_types/blocks/index",
                            },
                            items: Object.values(conditionTypes)
                                .filter(
                                    (condition) =>
                                        condition.category === "blocks",
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((condition) => ({
                                    type: "doc" as const,
                                    id: `wiki/condition_types/blocks/${condition.id.replace(/\w+:/, "")}`,
                                    label: condition.title,
                                })),
                        },
                        {
                            type: "category",
                            label: "Effects",
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "wiki/condition_types/effects/index",
                            },
                            items: Object.values(conditionTypes)
                                .filter(
                                    (condition) =>
                                        condition.category === "effects",
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((condition) => ({
                                    type: "doc" as const,
                                    id: `wiki/condition_types/effects/${condition.id.replace(/\w+:/, "")}`,
                                    label: condition.title,
                                })),
                        },
                        {
                            type: "category",
                            label: "Entities",
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "wiki/condition_types/entities/index",
                            },
                            items: Object.values(conditionTypes)
                                .filter(
                                    (condition) =>
                                        condition.category === "entities",
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((condition) => ({
                                    type: "doc" as const,
                                    id: `wiki/condition_types/entities/${condition.id.replace(/\w+:/, "")}`,
                                    label: condition.title,
                                })),
                        },
                        {
                            type: "category",
                            label: "Experience",
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "wiki/condition_types/experience/index",
                            },
                            items: Object.values(conditionTypes)
                                .filter(
                                    (condition) =>
                                        condition.category === "experience",
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((condition) => ({
                                    type: "doc" as const,
                                    id: `wiki/condition_types/experience/${condition.id.replace(/\w+:/, "")}`,
                                    label: condition.title,
                                })),
                        },
                        {
                            type: "category",
                            label: "Items",
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "wiki/condition_types/items/index",
                            },
                            items: Object.values(conditionTypes)
                                .filter(
                                    (condition) =>
                                        condition.category === "items",
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((condition) => ({
                                    type: "doc" as const,
                                    id: `wiki/condition_types/items/${condition.id.replace(/\w+:/, "")}`,
                                    label: condition.title,
                                })),
                        },
                        {
                            type: "category",
                            label: "Movement",
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "wiki/condition_types/movement/index",
                            },
                            items: Object.values(conditionTypes)
                                .filter(
                                    (condition) =>
                                        condition.category === "movement",
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((condition) => ({
                                    type: "doc" as const,
                                    id: `wiki/condition_types/movement/${condition.id.replace(/\w+:/, "")}`,
                                    label: condition.title,
                                })),
                        },
                        {
                            type: "category",
                            label: "Players",
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "wiki/condition_types/players/index",
                            },
                            items: Object.values(conditionTypes)
                                .filter(
                                    (condition) =>
                                        condition.category === "players",
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((condition) => ({
                                    type: "doc" as const,
                                    id: `wiki/condition_types/players/${condition.id.replace(/\w+:/, "")}`,
                                    label: condition.title,
                                })),
                        },
                        {
                            type: "category",
                            label: "Recipes",
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "wiki/condition_types/recipes/index",
                            },
                            items: Object.values(conditionTypes)
                                .filter(
                                    (condition) =>
                                        condition.category === "recipes",
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((condition) => ({
                                    type: "doc" as const,
                                    id: `wiki/condition_types/recipes/${condition.id.replace(/\w+:/, "")}`,
                                    label: condition.title,
                                })),
                        },
                        {
                            type: "category",
                            label: "Scoreboard",
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "wiki/condition_types/scoreboard/index",
                            },
                            items: Object.values(conditionTypes)
                                .filter(
                                    (condition) =>
                                        condition.category === "scoreboard",
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((condition) => ({
                                    type: "doc" as const,
                                    id: `wiki/condition_types/scoreboard/${condition.id.replace(/\w+:/, "")}`,
                                    label: condition.title,
                                })),
                        },
                        {
                            type: "category",
                            label: "Team",
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "wiki/condition_types/teams/index",
                            },
                            items: Object.values(conditionTypes)
                                .filter(
                                    (condition) =>
                                        condition.category === "teams",
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((condition) => ({
                                    type: "doc" as const,
                                    id: `wiki/condition_types/teams/${condition.id.replace(/\w+:/, "")}`,
                                    label: condition.title,
                                })),
                        },
                        {
                            type: "category",
                            label: "World",
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "wiki/condition_types/world/index",
                            },
                            items: Object.values(conditionTypes)
                                .filter(
                                    (condition) =>
                                        condition.category === "world",
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((condition) => ({
                                    type: "doc" as const,
                                    id: `wiki/condition_types/world/${condition.id.replace(/\w+:/, "")}`,
                                    label: condition.title,
                                })),
                        },
                    ],
                },
            ],
        },
        {
            type: "link",
            label: "🆘 Support",
            href: "/docs/daqem/wiki/support/",
        },
    ],
};

export default sidebar;
