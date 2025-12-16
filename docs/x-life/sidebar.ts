import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

export default {
    wikiSidebar: [
        {
            type: "doc",
            id: "index",
            label: "X-Life",
        },
        {
            type: "category",
            label: "Wiki",
            items: [
                {
                    type: "category",
                    label: "Getting Started",
                    collapsed: false,
                    customProps: {
                        emoji: "🚀",
                    },
                    items: [
                        {
                            type: "doc",
                            id: "wiki/getting-started/installation",
                            label: "Installation",
                            customProps: {
                                emoji: "🚀",
                            },
                        },
                        {
                            type: "doc",
                            id: "wiki/getting-started/configuration",
                            label: "Configuration",
                            customProps: {
                                emoji: "⚙️",
                            },
                        },
                    ],
                    link: {
                        type: "doc",
                        id: "wiki/getting-started/index",
                    },
                },
                {
                    type: "doc",
                    id: "wiki/lives-system",
                    label: "Lives System",
                    customProps: {
                        emoji: "❤️",
                    },
                },
                {
                    type: "doc",
                    id: "wiki/items/extra-life",
                    label: "Items",
                    customProps: {
                        emoji: "✨",
                    },
                },
                {
                    type: "doc",
                    id: "wiki/commands",
                    label: "Commands",
                    customProps: {
                        emoji: "💬",
                    },
                },
                {
                    type: "category",
                    label: "Support",
                    collapsed: true,
                    customProps: {
                        emoji: "🆘",
                    },
                    items: [
                        {
                            type: "doc",
                            id: "wiki/support/reporting-issues",
                            label: "Reporting Issues",
                            customProps: {
                                emoji: "🐞",
                            },
                        },
                        {
                            type: "doc",
                            id: "wiki/support/discord",
                            label: "Discord",
                            customProps: {
                                emoji: "💬",
                            },
                        },
                    ],
                },
            ],
        },
    ],
} as SidebarsConfig;
