import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
    sidebar: [
        {
            type: "doc",
            id: "index",
            label: "DAQEM Studios",
        },
        {
            type: "category",
            label: "🚀 Getting Started",
            collapsed: false,
            items: [
                {
                    type: "doc",
                    id: "wiki/platforms",
                    label: "Platforms",
                },
                {
                    type: "doc",
                    id: "wiki/versioning",
                    label: "Version Strategy",
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
            label: "📄 JSON Formats",
            collapsed: false,
            link: { type: "doc", id: "wiki/json_formats/index" },
            items: [
                {
                    type: "doc",
                    id: "wiki/json_formats/block",
                    label: "Block",
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
