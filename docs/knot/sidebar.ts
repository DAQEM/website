import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
    sidebar: [
        {
            type: "doc",
            id: "index",
            label: "Knot",
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
                            customProps: { emoji: "📥" },
                        },
                        {
                            type: "doc",
                            id: "wiki/getting-started/setup",
                            label: "Project Setup",
                            customProps: { emoji: "⚙️" },
                        },
                    ],
                    link: { type: "doc", id: "wiki/getting-started/index" },
                },
                {
                    type: "category",
                    label: "Core Concepts",
                    collapsed: false,
                    items: [
                        {
                            type: "doc",
                            id: "wiki/core-concepts/registration",
                            label: "Registration",
                            customProps: { emoji: "📝" },
                        },
                        {
                            type: "doc",
                            id: "wiki/core-concepts/networking",
                            label: "Networking",
                            customProps: { emoji: "📡" },
                        },
                        {
                            type: "doc",
                            id: "wiki/core-concepts/events",
                            label: "Events",
                            customProps: { emoji: "🔔" },
                        },
                        {
                            type: "doc",
                            id: "wiki/core-concepts/creative-tabs",
                            label: "Creative Tabs",
                            customProps: { emoji: "🎨" },
                        },
                        {
                            type: "doc",
                            id: "wiki/core-concepts/platform-client",
                            label: "Platform & Client",
                            customProps: { emoji: "💻" },
                        },
                    ],
                    link: { type: "doc", id: "wiki/core-concepts/index" },
                },
            ],
        },
    ],
};

export default sidebar;