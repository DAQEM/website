import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
    sidebar: [
        {
            type: "doc",
            id: "index",
            label: "GriefLogger",
        },
        {
            type: "category",
            label: "🚀 Getting Started",
            collapsed: false,
            link: { type: "doc", id: "wiki/getting-started/index" },
            items: [
                {
                    type: "doc",
                    id: "wiki/getting-started/installation",
                    label: "Installation",
                },
                {
                    type: "doc",
                    id: "wiki/getting-started/configuration",
                    label: "Configuration",
                },
            ],
        },
        {
            type: "category",
            label: "🧩 Core Mechanics / Features",
            collapsed: false,
            items: [
                {
                    type: "category",
                    label: "Player Actions",
                    collapsed: true,
                    link: {
                        type: "doc",
                        id: "wiki/player-actions/index",
                    },
                    items: [
                        {
                            type: "doc",
                            id: "wiki/player-actions/block-interactions",
                            label: "Block Interactions",
                        },
                        {
                            type: "doc",
                            id: "wiki/player-actions/item-usage",
                            label: "Item Usage",
                        },
                        {
                            type: "doc",
                            id: "wiki/player-actions/player-sessions",
                            label: "Player Sessions",
                        },
                        {
                            type: "doc",
                            id: "wiki/player-actions/chat-commands",
                            label: "Chat & Commands",
                        },
                    ],
                },
                {
                    type: "category",
                    label: "Inspecting & Lookup",
                    collapsed: true,
                    link: {
                        type: "doc",
                        id: "wiki/inspecting-lookup/index",
                    },
                    items: [
                        {
                            type: "doc",
                            id: "wiki/inspecting-lookup/inspect-command",
                            label: "Inspect Command",
                        },
                        {
                            type: "doc",
                            id: "wiki/inspecting-lookup/lookup-command",
                            label: "Lookup Command",
                        },
                        {
                            type: "category",
                            label: "Filters",
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "wiki/inspecting-lookup/filters/index",
                            },
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
                        },
                        {
                            type: "doc",
                            id: "wiki/inspecting-lookup/pages",
                            label: "Pages",
                        },
                    ],
                },
                {
                    type: "category",
                    label: "Database",
                    collapsed: true,
                    link: { type: "doc", id: "wiki/database/index" },
                    items: [
                        {
                            type: "doc",
                            id: "wiki/database/sqlite",
                            label: "SQLite",
                        },
                        {
                            type: "doc",
                            id: "wiki/database/mysql",
                            label: "MySQL / MariaDB",
                        },
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "🛠️ Development / API",
            collapsed: false,
            link: { type: "doc", id: "wiki/development/index" },
            items: [
                {
                    type: "doc",
                    id: "wiki/gradle-setup",
                    label: "Gradle Setup",
                },
                {
                    type: "link",
                    href: "/docs/daqem/wiki/development/contributing",
                    label: "Contributing",
                },
                {
                    type: "doc",
                    id: "wiki/development/api",
                    label: "API",
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
