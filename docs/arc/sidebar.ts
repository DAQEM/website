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
            label: "Wiki",
            items: [
                {
                    type: "doc",
                    id: "wiki/actions/index",
                    label: "Actions",
                    customProps: { emoji: "⚡" },
                },
                {
                    type: "category",
                    label: "Action Types",
                    customProps: { emoji: "🎬" },
                    collapsed: true,
                    items: [
                        {
                            type: "category",
                            label: "Advancements",
                            customProps: { emoji: "🏆" },
                            collapsed: true,
                            items: Object.values(actionTypes)
                                .filter(
                                    (action) =>
                                        action.category === "advancements"
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((action) => ({
                                    type: "doc" as const,
                                    id: `wiki/action_types/advancements/${action.id}`,
                                    label: action.title,
                                    customProps: {
                                        emoji: action.emoji,
                                    },
                                })),
                            link: {
                                type: "doc",
                                id: "wiki/action_types/advancements/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Blocks",
                            customProps: { emoji: "🧊" },
                            collapsed: true,
                            items: Object.values(actionTypes)
                                .filter(
                                    (action) => action.category === "blocks"
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((action) => ({
                                    type: "doc" as const,
                                    id: `wiki/action_types/blocks/${action.id}`,
                                    label: action.title,
                                    customProps: {
                                        emoji: action.emoji,
                                    },
                                })),
                            link: {
                                type: "doc",
                                id: "wiki/action_types/blocks/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Entities",
                            customProps: { emoji: "👤" },
                            collapsed: true,
                            items: Object.values(actionTypes)
                                .filter(
                                    (action) => action.category === "entities"
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((action) => ({
                                    type: "doc" as const,
                                    id: `wiki/action_types/entities/${action.id}`,
                                    label: action.title,
                                    customProps: {
                                        emoji: action.emoji,
                                    },
                                })),
                            link: {
                                type: "doc",
                                id: "wiki/action_types/entities/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Items",
                            customProps: { emoji: "🎒" },
                            collapsed: true,
                            items: Object.values(actionTypes)
                                .filter((action) => action.category === "items")
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((action) => ({
                                    type: "doc" as const,
                                    id: `wiki/action_types/items/${action.id}`,
                                    label: action.title,
                                    customProps: {
                                        emoji: action.emoji,
                                    },
                                })),
                            link: {
                                type: "doc",
                                id: "wiki/action_types/items/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Movement",
                            customProps: { emoji: "👟" },
                            collapsed: true,
                            items: Object.values(actionTypes)
                                .filter(
                                    (action) => action.category === "movement"
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((action) => ({
                                    type: "doc" as const,
                                    id: `wiki/action_types/movement/${action.id}`,
                                    label: action.title,
                                    customProps: {
                                        emoji: action.emoji,
                                    },
                                })),
                            link: {
                                type: "doc",
                                id: "wiki/action_types/movement/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Players",
                            customProps: { emoji: "🧑" },
                            collapsed: true,
                            items: Object.values(actionTypes)
                                .filter(
                                    (action) => action.category === "player"
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((action) => ({
                                    type: "doc" as const,
                                    id: `wiki/action_types/players/${action.id}`,
                                    label: action.title,
                                    customProps: {
                                        emoji: action.emoji,
                                    },
                                })),
                            link: {
                                type: "doc",
                                id: "wiki/action_types/players/index",
                            },
                        },
                    ],
                    link: { type: "doc", id: "wiki/action_types/index" },
                },
                {
                    type: "category",
                    label: "Reward Types",
                    customProps: { emoji: "🎁" },
                    collapsed: true,
                    items: [
                        ...Object.values(rewardTypes)
                            .filter((reward) => reward.category === "none")
                            .sort((a, b) => a.title.localeCompare(b.title))
                            .map((reward) => ({
                                type: "doc" as const,
                                id: `wiki/reward_types/${reward.id}`,
                                label: reward.title,
                                customProps: {
                                    emoji: reward.emoji,
                                },
                            })),
                        {
                            type: "category",
                            label: "Blocks",
                            customProps: { emoji: "🧊" },
                            collapsed: true,
                            items: Object.values(rewardTypes)
                                .filter(
                                    (reward) => reward.category === "blocks"
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((reward) => ({
                                    type: "doc" as const,
                                    id: `wiki/reward_types/blocks/${reward.id}`,
                                    label: reward.title,
                                    customProps: {
                                        emoji: reward.emoji,
                                    },
                                })),
                            link: {
                                type: "doc",
                                id: "wiki/reward_types/blocks/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Effects",
                            customProps: { emoji: "💊" },
                            collapsed: true,
                            items: Object.values(rewardTypes)
                                .filter(
                                    (reward) => reward.category === "effects"
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((reward) => ({
                                    type: "doc" as const,
                                    id: `wiki/reward_types/effects/${reward.id}`,
                                    label: reward.title,
                                    customProps: {
                                        emoji: reward.emoji,
                                    },
                                })),
                            link: {
                                type: "doc",
                                id: "wiki/reward_types/effects/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Entities",
                            customProps: { emoji: "👤" },
                            collapsed: true,
                            items: Object.values(rewardTypes)
                                .filter(
                                    (reward) => reward.category === "entities"
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((reward) => ({
                                    type: "doc" as const,
                                    id: `wiki/reward_types/entities/${reward.id}`,
                                    label: reward.title,
                                    customProps: {
                                        emoji: reward.emoji,
                                    },
                                })),
                            link: {
                                type: "doc",
                                id: "wiki/reward_types/entities/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Experience",
                            customProps: { emoji: "✨" },
                            collapsed: true,
                            items: Object.values(rewardTypes)
                                .filter(
                                    (reward) => reward.category === "experience"
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((reward) => ({
                                    type: "doc" as const,
                                    id: `wiki/reward_types/experience/${reward.id}`,
                                    label: reward.title,
                                    customProps: {
                                        emoji: reward.emoji,
                                    },
                                })),
                            link: {
                                type: "doc",
                                id: "wiki/reward_types/experience/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Items",
                            customProps: { emoji: "🎒" },
                            collapsed: true,
                            items: Object.values(rewardTypes)
                                .filter((reward) => reward.category === "items")
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((reward) => ({
                                    type: "doc" as const,
                                    id: `wiki/reward_types/items/${reward.id}`,
                                    label: reward.title,
                                    customProps: {
                                        emoji: reward.emoji,
                                    },
                                })),
                            link: {
                                type: "doc",
                                id: "wiki/reward_types/items/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Players",
                            customProps: { emoji: "🧑" },
                            collapsed: true,
                            items: Object.values(rewardTypes)
                                .filter(
                                    (reward) => reward.category === "players"
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((reward) => ({
                                    type: "doc" as const,
                                    id: `wiki/reward_types/players/${reward.id}`,
                                    label: reward.title,
                                    customProps: {
                                        emoji: reward.emoji,
                                    },
                                })),
                            link: {
                                type: "doc",
                                id: "wiki/reward_types/players/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Server",
                            customProps: { emoji: "🌐" },
                            collapsed: true,
                            items: Object.values(rewardTypes)
                                .filter(
                                    (reward) => reward.category === "server"
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((reward) => ({
                                    type: "doc" as const,
                                    id: `wiki/reward_types/server/${reward.id}`,
                                    label: reward.title,
                                    customProps: {
                                        emoji: reward.emoji,
                                    },
                                })),
                            link: {
                                type: "doc",
                                id: "wiki/reward_types/server/index",
                            },
                        },
                    ],
                    link: { type: "doc", id: "wiki/reward_types/index" },
                },
                {
                    type: "category",
                    label: "Condition Types",
                    customProps: { emoji: "📑" },
                    collapsed: true,
                    items: [
                        ...Object.values(conditionTypes)
                            .filter(
                                (condition) => condition.category === "none"
                            )
                            .sort((a, b) => a.title.localeCompare(b.title))
                            .map((condition) => ({
                                type: "doc" as const,
                                id: `wiki/condition_types/${condition.id}`,
                                label: condition.title,
                                customProps: {
                                    emoji: condition.emoji,
                                },
                            })),
                        {
                            type: "category",
                            label: "Blocks",
                            customProps: { emoji: "🧊" },
                            collapsed: true,
                            items: Object.values(conditionTypes)
                                .filter(
                                    (condition) =>
                                        condition.category === "blocks"
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((condition) => ({
                                    type: "doc" as const,
                                    id: `wiki/condition_types/blocks/${condition.id}`,
                                    label: condition.title,
                                    customProps: {
                                        emoji: condition.emoji,
                                    },
                                })),
                            link: {
                                type: "doc",
                                id: "wiki/condition_types/blocks/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Effects",
                            customProps: { emoji: "💊" },
                            collapsed: true,
                            items: Object.values(conditionTypes)
                                .filter(
                                    (condition) =>
                                        condition.category === "effects"
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((condition) => ({
                                    type: "doc" as const,
                                    id: `wiki/condition_types/effects/${condition.id}`,
                                    label: condition.title,
                                    customProps: {
                                        emoji: condition.emoji,
                                    },
                                })),
                            link: {
                                type: "doc",
                                id: "wiki/condition_types/effects/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Entities",
                            customProps: { emoji: "👤" },
                            collapsed: true,
                            items: Object.values(conditionTypes)
                                .filter(
                                    (condition) =>
                                        condition.category === "entities"
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((condition) => ({
                                    type: "doc" as const,
                                    id: `wiki/condition_types/entities/${condition.id}`,
                                    label: condition.title,
                                    customProps: {
                                        emoji: condition.emoji,
                                    },
                                })),
                            link: {
                                type: "doc",
                                id: "wiki/condition_types/entities/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Experience",
                            customProps: { emoji: "✨" },
                            collapsed: true,
                            items: Object.values(conditionTypes)
                                .filter(
                                    (condition) =>
                                        condition.category === "experience"
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((condition) => ({
                                    type: "doc" as const,
                                    id: `wiki/condition_types/experience/${condition.id}`,
                                    label: condition.title,
                                    customProps: {
                                        emoji: condition.emoji,
                                    },
                                })),
                            link: {
                                type: "doc",
                                id: "wiki/condition_types/experience/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Items",
                            customProps: { emoji: "🎒" },
                            collapsed: true,
                            items: Object.values(conditionTypes)
                                .filter(
                                    (condition) =>
                                        condition.category === "items"
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((condition) => ({
                                    type: "doc" as const,
                                    id: `wiki/condition_types/items/${condition.id}`,
                                    label: condition.title,
                                    customProps: {
                                        emoji: condition.emoji,
                                    },
                                })),
                            link: {
                                type: "doc",
                                id: "wiki/condition_types/items/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Movement",
                            customProps: { emoji: "👟" },
                            collapsed: true,
                            items: Object.values(conditionTypes)
                                .filter(
                                    (condition) =>
                                        condition.category === "movement"
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((condition) => ({
                                    type: "doc" as const,
                                    id: `wiki/condition_types/movement/${condition.id}`,
                                    label: condition.title,
                                    customProps: {
                                        emoji: condition.emoji,
                                    },
                                })),
                            link: {
                                type: "doc",
                                id: "wiki/condition_types/movement/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Recipes",
                            customProps: { emoji: "🍲" },
                            collapsed: true,
                            items: Object.values(conditionTypes)
                                .filter(
                                    (condition) =>
                                        condition.category === "recipes"
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((condition) => ({
                                    type: "doc" as const,
                                    id: `wiki/condition_types/recipes/${condition.id}`,
                                    label: condition.title,
                                    customProps: {
                                        emoji: condition.emoji,
                                    },
                                })),
                            link: {
                                type: "doc",
                                id: "wiki/condition_types/recipes/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Scoreboard",
                            customProps: { emoji: "📊" },
                            collapsed: true,
                            items: Object.values(conditionTypes)
                                .filter(
                                    (condition) =>
                                        condition.category === "scoreboard"
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((condition) => ({
                                    type: "doc" as const,
                                    id: `wiki/condition_types/scoreboard/${condition.id}`,
                                    label: condition.title,
                                    customProps: {
                                        emoji: condition.emoji,
                                    },
                                })),
                            link: {
                                type: "doc",
                                id: "wiki/condition_types/scoreboard/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Team",
                            customProps: { emoji: "👥" },
                            collapsed: true,
                            items: Object.values(conditionTypes)
                                .filter(
                                    (condition) =>
                                        condition.category === "teams"
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((condition) => ({
                                    type: "doc" as const,
                                    id: `wiki/condition_types/teams/${condition.id}`,
                                    label: condition.title,
                                    customProps: {
                                        emoji: condition.emoji,
                                    },
                                })),
                            link: {
                                type: "doc",
                                id: "wiki/condition_types/teams/index",
                            },
                        },
                        {
                            type: "category",
                            label: "World",
                            customProps: { emoji: "🌍" },
                            collapsed: true,
                            items: Object.values(conditionTypes)
                                .filter(
                                    (condition) =>
                                        condition.category === "world"
                                )
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((condition) => ({
                                    type: "doc" as const,
                                    id: `wiki/condition_types/world/${condition.id}`,
                                    label: condition.title,
                                    customProps: {
                                        emoji: condition.emoji,
                                    },
                                })),
                            link: {
                                type: "doc",
                                id: "wiki/condition_types/world/index",
                            },
                        },
                    ],
                    link: { type: "doc", id: "wiki/condition_types/index" },
                },
                {
                    type: "doc",
                    id: "wiki/action_holders/index",
                    label: "Action Holders",
                    customProps: { emoji: "👤" },
                },
                {
                    type: "category",
                    label: "Action Data",
                    customProps: { emoji: "📊" },
                    collapsed: true,
                    items: [],
                    link: { type: "doc", id: "wiki/action_data/index" },
                },
            ],
            link: { type: "doc", id: "wiki/index" },
        },
    ],
};

export default sidebar;
