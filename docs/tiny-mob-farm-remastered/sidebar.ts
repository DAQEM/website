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
            label: "Wiki",
            collapsed: false,
            items: [
                {
                    type: "category",
                    label: "Getting Started",
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
                    ],
                },
                {
                    type: "category",
                    label: "Items & Tools",
                    collapsed: false,
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
                    collapsed: false,
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
                {
                    type: "doc",
                    id: "wiki/configuration/index",
                    label: "Configuration",
                },
            ],
        },
    ],
};

export default sidebar;
