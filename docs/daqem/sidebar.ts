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
                {
                    type: "doc",
                    id: "wiki/development/contributing",
                    label: "Contributing",
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
            type: "category",
            label: "🆘 Support",
            collapsed: false,
            link: { type: "doc", id: "wiki/support/index" },
            items: [
                {
                    type: "doc",
                    id: "wiki/support/discord",
                    label: "Discord",
                },
                {
                    type: "doc",
                    id: "wiki/support/reporting-issues",
                    label: "Reporting Issues",
                },
            ],
        },
    ],
};

export default sidebar;