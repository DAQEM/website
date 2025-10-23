import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

export default {
    wikiSidebar: [
        {
            type: "doc",
            id: "index",
            label: "GriefLogger",
        },
        {
            type: "category",
            label: "Getting Started",
            collapsed: false,
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
                type: "generated-index",
                title: "Getting Started",
                description:
                    "Learn how to install and configure GriefLogger on your server.",
                slug: "wiki/getting-started",
            },
        },
        {
            type: "category",
            label: "Player Actions",
            collapsed: true,
            items: [
                {
                    type: "doc",
                    id: "wiki/player-actions/block-interactions",
                    label: "Block Interactions",
                    customProps: {
                        emoji: "🧱",
                    },
                },
                {
                    type: "doc",
                    id: "wiki/player-actions/item-usage",
                    label: "Item Usage",
                    customProps: {
                        emoji: "💎",
                    },
                },
                {
                    type: "doc",
                    id: "wiki/player-actions/player-sessions",
                    label: "Player Sessions",
                    customProps: {
                        emoji: "➡️",
                    },
                },
                {
                    type: "doc",
                    id: "wiki/player-actions/chat-commands",
                    label: "Chat & Commands",
                    customProps: {
                        emoji: "💬",
                    },
                },
            ],
            link: {
                type: "doc",
                id: "wiki/player-actions/index",
            },
        },
        {
            type: "category",
            label: "Inspecting & Lookup",
            collapsed: true,
            items: [
                {
                    type: "doc",
                    id: "wiki/inspecting-lookup/inspect-command",
                    label: "Inspect Command",
                    customProps: {
                        emoji: "👆",
                    },
                },
                {
                    type: "doc",
                    id: "wiki/inspecting-lookup/lookup-command",
                    label: "Lookup Command",
                    customProps: {
                        emoji: "🔎",
                    },
                },
                {
                    type: "category",
                    label: "Filters",
                    items: [
                        {
                            type: "doc",
                            id: "wiki/inspecting-lookup/filters/action-filter",
                            label: "Action Filter",
                        },
                        {
                            type: "doc",
                            id: "wiki/inspecting-lookup/filters/exclude-filter",
                            label: "Exclude Filter",
                        },
                        {
                            type: "doc",
                            id: "wiki/inspecting-lookup/filters/include-filter",
                            label: "Include Filter",
                        },
                        {
                            type: "doc",
                            id: "wiki/inspecting-lookup/filters/radius-filter",
                            label: "Radius Filter",
                        },
                        {
                            type: "doc",
                            id: "wiki/inspecting-lookup/filters/time-filter",
                            label: "Time Filter",
                        },
                        {
                            type: "doc",
                            id: "wiki/inspecting-lookup/filters/user-filter",
                            label: "User Filter",
                        },
                    ],
                    link: {
                        type: "doc",
                        id: "wiki/inspecting-lookup/filters/index",
                    },
                },
                {
                    type: "doc",
                    id: "wiki/inspecting-lookup/pages",
                    label: "Pages",
                    customProps: {
                        emoji: "📖",
                    },
                },
            ],
            link: {
                type: "doc",
                id: "wiki/inspecting-lookup/index",
            },
        },
        {
            type: "category",
            label: "Database",
            collapsed: true,
            items: [
                {
                    type: "doc",
                    id: "wiki/database/sqlite",
                    label: "SQLite",
                    customProps: {
                        emoji: "📄",
                    },
                },
                {
                    type: "doc",
                    id: "wiki/database/mysql",
                    label: "MySQL / MariaDB",
                    customProps: {
                        emoji: "🐬",
                    },
                },
            ],
            link: {
                type: "doc",
                id: "wiki/database/index",
            },
        },
        {
            type: "category",
            label: "Development",
            collapsed: true,
            items: [
                {
                    type: "doc",
                    id: "wiki/development/contributing",
                    label: "Contributing",
                    customProps: {
                        emoji: "🧑‍💻",
                    },
                },
                {
                    type: "doc",
                    id: "wiki/development/api",
                    label: "API",
                    customProps: {
                        emoji: "🔌",
                    },
                },
            ],
            link: {
                type: "doc",
                id: "wiki/development/index",
            },
        },
        {
            type: "category",
            label: "Support",
            collapsed: true,
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
            link: {
                type: "doc",
                id: "wiki/support/index",
            },
        },
    ],
} as SidebarsConfig;
