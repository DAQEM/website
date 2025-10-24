import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

export default {
    wikiSidebar: [
        {
            type: "doc",
            id: "index",
            label: "iRobot",
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
                        },
                        {
                            type: "doc",
                            id: "wiki/getting-started/configuration",
                            label: "Configuration",
                        },
                    ],
                    link: {
                        type: "doc",
                        id: "wiki/getting-started/index",
                    },
                },
                {
                    type: "category",
                    label: "Tutorials",
                    collapsed: true,
                    customProps: {
                        emoji: "🎓",
                    },
                    items: [
                        {
                            type: "doc",
                            id: "wiki/tutorials/crafting-your-first-robot",
                            label: "Crafting Your First Robot",
                        },
                        {
                            type: "doc",
                            id: "wiki/tutorials/charging-a-battery",
                            label: "Charging a Battery",
                        },
                        {
                            type: "doc",
                            id: "wiki/tutorials/automated-mining",
                            label: "Automated Mining",
                        },
                        {
                            type: "doc",
                            id: "wiki/tutorials/automated-farming",
                            label: "Automated Farming",
                        },
                        {
                            type: "doc",
                            id: "wiki/tutorials/upgrading-your-robot",
                            label: "Upgrading Your Robot",
                        },
                    ],
                    link: {
                        type: "doc",
                        id: "wiki/tutorials/index",
                    },
                },
                {
                    type: "category",
                    label: "Robots",
                    collapsed: true,
                    customProps: {
                        emoji: "🤖",
                    },
                    items: [
                        {
                            type: "doc",
                            id: "wiki/robots/mini-robot",
                            label: "Mini Robot",
                        },
                        {
                            type: "doc",
                            id: "wiki/robots/gyro-robot",
                            label: "Gyro Robot",
                        },
                    ],
                    link: {
                        type: "doc",
                        id: "wiki/robots/index",
                    },
                },
                {
                    type: "category",
                    label: "Tasks",
                    collapsed: true,
                    customProps: {
                        emoji: "📋",
                    },
                    items: [
                        {
                            type: "doc",
                            id: "wiki/tasks/task-system",
                            label: "Task System",
                        },
                    ],
                    link: {
                        type: "doc",
                        id: "wiki/tasks/index",
                    },
                },
                {
                    type: "category",
                    label: "Blocks",
                    collapsed: true,
                    customProps: {
                        emoji: "🧱",
                    },
                    items: [
                        {
                            type: "doc",
                            id: "wiki/blocks/robot-station",
                            label: "Robot Station",
                        },
                        {
                            type: "doc",
                            id: "wiki/blocks/task-table",
                            label: "Task Table",
                        },
                        {
                            type: "doc",
                            id: "wiki/blocks/dropoff-chest",
                            label: "Dropoff Chest",
                        },
                    ],
                    link: {
                        type: "doc",
                        id: "wiki/blocks/index",
                    },
                },
                {
                    type: "category",
                    label: "Items",
                    collapsed: true,
                    customProps: {
                        emoji: "🔩",
                    },
                    items: [
                        {
                            type: "doc",
                            id: "wiki/items/batteries",
                            label: "Batteries",
                        },
                        {
                            type: "doc",
                            id: "wiki/items/modules",
                            label: "Modules",
                        },
                        {
                            type: "doc",
                            id: "wiki/items/components",
                            label: "Components",
                        },
                    ],
                    link: {
                        type: "doc",
                        id: "wiki/items/index",
                    },
                },
            ],
            link: { type: "doc", id: "wiki/index" },
        },
    ],
} as SidebarsConfig;
