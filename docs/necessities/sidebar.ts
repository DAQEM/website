import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
    sidebar: [
        {
            type: "doc",
            id: "index",
            label: "Necessities",
        },
        {
            type: "category",
            label: "🚀 Getting Started",
            collapsed: false,
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
                    label: "Features",
                    collapsed: true,
                    items: [
                        {
                            type: "doc",
                            id: "wiki/features/kits",
                            label: "Kits",
                        },
                        {
                            type: "doc",
                            id: "wiki/features/homes",
                            label: "Homes System",
                        },
                        {
                            type: "doc",
                            id: "wiki/features/warps",
                            label: "Warps System",
                        },
                    ],
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
            label: "💻 Commands & Permissions",
            collapsed: false,
            items: [
                {
                    type: "doc",
                    id: "wiki/commands/teleportation",
                    label: "Teleportation",
                },
                {
                    type: "doc",
                    id: "wiki/commands/player-management",
                    label: "Player Management",
                },
                {
                    type: "doc",
                    id: "wiki/commands/world-management",
                    label: "World Management",
                },
                {
                    type: "doc",
                    id: "wiki/commands/inventory-utility",
                    label: "Inventory & Utility",
                },
                {
                    type: "doc",
                    id: "wiki/commands/chat",
                    label: "Chat",
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
