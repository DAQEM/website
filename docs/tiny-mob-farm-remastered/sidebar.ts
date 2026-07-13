import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
    sidebar: [
        {
            type: "doc",
            id: "index",
            label: "Tiny Mob Farm",
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
                    id: "wiki/getting-started/quick-start",
                    label: "Quick Start Guide",
                },
                {
                    type: "doc",
                    id: "wiki/configuration/index",
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
                    label: "Items & Tools",
                    collapsed: true,
                    items: [
                        {
                            type: "doc",
                            id: "wiki/items/lasso",
                            label: "The Lasso",
                        },
                    ],
                },
                {
                    type: "category",
                    label: "Farms & Mechanics",
                    collapsed: true,
                    items: [
                        {
                            type: "doc",
                            id: "wiki/blocks/farm-tiers",
                            label: "Farm Tiers",
                        },
                        {
                            type: "doc",
                            id: "wiki/blocks/automation",
                            label: "Automation & Redstone",
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
