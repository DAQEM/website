import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
    sidebar: [
        {
            type: "doc",
            id: "index",
            label: "UI Lib",
        },
        {
            type: "category",
            label: "Wiki",
            collapsed: false,
            items: [
                {
                    type: "doc",
                    id: "wiki/getting-started",
                    label: "Getting Started",
                    customProps: { emoji: "🚀" },
                },
                {
                    type: "doc",
                    id: "wiki/what-is-not",
                    label: "What UI Lib Is Not",
                    customProps: { emoji: "🛑" },
                },
                {
                    type: "category",
                    label: "Design Patterns",
                    collapsed: false,
                    items: [
                        { type: "doc", id: "wiki/patterns/screen-state", label: "Screen State Pattern" },
                    ],
                },
                {
                    type: "category",
                    label: "Screens",
                    collapsed: false,
                    items: [
                        {
                            type: "doc",
                            id: "wiki/screens/abstract-screen",
                            label: "Abstract Screen",
                        },
                        {
                            type: "doc",
                            id: "wiki/screens/container-screen",
                            label: "Container Screen",
                        },
                    ],
                },
                {
                    type: "category",
                    label: "Components",
                    collapsed: false,
                    items: [
                        {
                            type: "doc",
                            id: "wiki/components/text",
                            label: "Text Components",
                        },
                        {
                            type: "doc",
                            id: "wiki/components/visual",
                            label: "Visual Components",
                        },
                    ],
                    link: {
                        type: "doc",
                        id: "wiki/components/index",
                    },
                },
                {
                    type: "category",
                    label: "Widgets",
                    collapsed: false,
                    items: [
                        {
                            type: "doc",
                            id: "wiki/widgets/input",
                            label: "Input & Buttons",
                        },
                        {
                            type: "doc",
                            id: "wiki/widgets/scrolling",
                            label: "Scroll Containers",
                        },
                    ],
                    link: {
                        type: "doc",
                        id: "wiki/widgets/index",
                    },
                },
                {
                    type: "doc",
                    id: "wiki/backgrounds",
                    label: "Backgrounds",
                    customProps: { emoji: "🎨" },
                },
                {
                    type: "doc",
                    id: "wiki/skill-tree",
                    label: "Skill Trees",
                    customProps: { emoji: "🌳" },
                },
            ],
        },
    ],
};

export default sidebar;
