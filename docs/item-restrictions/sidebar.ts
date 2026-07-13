import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
    sidebar: [
        {
            type: "doc",
            id: "index",
            label: "Item Restrictions",
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
                    id: "wiki/getting-started/configuration",
                    label: "Global Configuration",
                },
            ],
        },
        {
            type: "category",
            label: "📄 JSON Formats",
            collapsed: false,
            items: [
                {
                    type: "category",
                    label: "Creating Restrictions",
                    collapsed: true,
                    items: [
                        {
                            type: "doc",
                            id: "wiki/creating-restrictions/file-structure",
                            label: "File Structure",
                        },
                        {
                            type: "doc",
                            id: "wiki/creating-restrictions/restriction-types",
                            label: "Restriction Types",
                        },
                    ],
                },
                { type: "doc", id: "wiki/examples", label: "Examples" },
                {
                    type: "link",
                    label: "Conditions (Arc)",
                    href: "/projects/arc/wiki/condition_types",
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
