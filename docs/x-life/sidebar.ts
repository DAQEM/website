import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
    sidebar: [
        {
            type: "doc",
            id: "index",
            label: "X-Life",
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
                    type: "doc",
                    id: "wiki/lives-system",
                    label: "Lives System",
                },
                {
                    type: "doc",
                    id: "wiki/items/extra-life",
                    label: "Items",
                },
            ],
        },
        {
            type: "category",
            label: "💻 Commands & Permissions",
            collapsed: false,
            items: [{ type: "doc", id: "wiki/commands", label: "Commands" }],
        },
        {
            type: "link",
            label: "🆘 Support",
            href: "/docs/daqem/wiki/support/",
        },
    ],
};

export default sidebar;
