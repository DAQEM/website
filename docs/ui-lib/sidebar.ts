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
            label: "🚀 Getting Started",
            collapsed: false,
            items: [
                {
                    type: "doc",
                    id: "wiki/getting-started",
                    label: "Getting Started",
                },
                {
                    type: "doc",
                    id: "wiki/what-is-not",
                    label: "What UI Lib Is Not",
                },
            ],
        },
        {
            type: "category",
            label: "🛠️ Development / API",
            collapsed: false,
            items: [
                {
                    type: "category",
                    label: "Design Patterns",
                    collapsed: true,
                    items: [
                        {
                            type: "doc",
                            id: "wiki/patterns/screen-state",
                            label: "Screen State Pattern",
                        },
                    ],
                },
                {
                    type: "category",
                    label: "Screens",
                    collapsed: true,
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
                    collapsed: true,
                    link: { type: "doc", id: "wiki/components/index" },
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
                },
                {
                    type: "category",
                    label: "Widgets",
                    collapsed: true,
                    link: { type: "doc", id: "wiki/widgets/index" },
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
                },
                {
                    type: "doc",
                    id: "wiki/backgrounds",
                    label: "Backgrounds",
                },
                {
                    type: "doc",
                    id: "wiki/skill-tree",
                    label: "Skill Trees",
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
