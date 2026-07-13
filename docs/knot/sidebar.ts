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
                    id: "wiki/getting-started/setup",
                    label: "Project Setup",
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
                {
                    type: "category",
                    label: "Core Concepts",
                    collapsed: true,
                    link: {
                        type: "doc",
                        id: "wiki/core-concepts/index",
                    },
                    items: [
                        {
                            type: "doc",
                            id: "wiki/core-concepts/registration",
                            label: "Registration",
                        },
                        {
                            type: "doc",
                            id: "wiki/core-concepts/networking",
                            label: "Networking",
                        },
                        {
                            type: "doc",
                            id: "wiki/core-concepts/events",
                            label: "Events",
                        },
                        {
                            type: "doc",
                            id: "wiki/core-concepts/creative-tabs",
                            label: "Creative Tabs",
                        },
                        {
                            type: "doc",
                            id: "wiki/core-concepts/platform-client",
                            label: "Platform & Client",
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
