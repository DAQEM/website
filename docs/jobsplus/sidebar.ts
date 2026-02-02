import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

export default {
    sidebar: [
        {
            type: "doc",
            id: "index",
            label: "Jobs+",
        },
        {
            type: "category",
            label: "Wiki",
            items: [
                {
                    type: "category",
                    label: "Getting Started",
                    items: [
                        {
                            type: "doc",
                            id: "wiki/getting-started/how_to_start",
                            label: "How to Start",
                            customProps: {
                                emoji: "🚀",
                            },
                        },
                        {
                            type: "doc",
                            id: "wiki/getting-started/how_to_get_exp",
                            label: "How to Get Experience",
                            customProps: {
                                emoji: "🎯",
                            },
                        },
                        {
                            type: "doc",
                            id: "wiki/getting-started/coins",
                            label: "Coins",
                            customProps: {
                                emoji: "💰",
                            },
                        },
                        {
                            type: "doc",
                            id: "wiki/getting-started/commands",
                            label: "Commands",
                            customProps: {
                                emoji: "📝",
                            },
                        },
                    ],
                    link: { type: "doc", id: "wiki/getting-started/index" },
                },
                {
                    type: "category",
                    label: "Jobs",
                    items: [
                        {
                            type: "doc",
                            id: "wiki/jobs/alchemist",
                            label: "Alchemist",
                            customProps: {
                                emoji: "⚗️",
                            },
                        },
                        {
                            type: "doc",
                            id: "wiki/jobs/builder",
                            label: "Builder",
                            customProps: {
                                emoji: "🏗️",
                            },
                        },
                        {
                            type: "doc",
                            id: "wiki/jobs/digger",
                            label: "Digger",
                            customProps: {
                                emoji: "⌛",
                            },
                        },
                        {
                            type: "doc",
                            id: "wiki/jobs/enchanter",
                            label: "Enchanter",
                            customProps: {
                                emoji: "🪄",
                            },
                        },
                        {
                            type: "doc",
                            id: "wiki/jobs/farmer",
                            label: "Farmer",
                            customProps: {
                                emoji: "🌾",
                            },
                        },
                        {
                            type: "doc",
                            id: "wiki/jobs/fisherman",
                            label: "Fisherman",
                            customProps: {
                                emoji: "🎣",
                            },
                        },
                        {
                            type: "doc",
                            id: "wiki/jobs/hunter",
                            label: "Hunter",
                            customProps: {
                                emoji: "🏹",
                            },
                        },
                        {
                            type: "doc",
                            id: "wiki/jobs/lumberjack",
                            label: "Lumberjack",
                            customProps: {
                                emoji: "🪓",
                            },
                        },
                        {
                            type: "doc",
                            id: "wiki/jobs/miner",
                            label: "Miner",
                            customProps: {
                                emoji: "⛏️",
                            },
                        },
                        {
                            type: "doc",
                            id: "wiki/jobs/smith",
                            label: "Smith",
                            customProps: {
                                emoji: "⚒️",
                            },
                        },
                    ],
                    link: { type: "doc", id: "wiki/jobs/index" },
                },
            ],
            link: { type: "doc", id: "wiki/index" },
        },
    ],
} as SidebarsConfig;
