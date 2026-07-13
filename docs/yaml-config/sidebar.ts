import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
    sidebar: [
        {
            type: "doc",
            id: "index",
            label: "YAML Config",
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
                    id: "wiki/getting-started/keybindings",
                    label: "Accessing the Menu",
                },
                {
                    type: "doc",
                    id: "wiki/getting-started/using-the-gui",
                    label: "Using the Interface",
                },
                {
                    type: "doc",
                    id: "wiki/getting-started/file-management",
                    label: "File Management",
                },
            ],
        },
        {
            type: "category",
            label: "📄 Formats",
            collapsed: false,
            items: [
                { type: "doc", id: "wiki/formats/yaml", label: "YAML" },
                {
                    type: "doc",
                    id: "wiki/formats/json5",
                    label: "JSON5",
                },
                { type: "doc", id: "wiki/formats/toml", label: "TOML" },
                {
                    type: "doc",
                    id: "wiki/formats/hocon",
                    label: "HOCON",
                },
            ],
        },
        {
            type: "category",
            label: "🛠️ Development / API",
            collapsed: false,
            link: { type: "doc", id: "wiki/developer/index" },
            items: [
                {
                    type: "doc",
                    id: "wiki/gradle-setup",
                    label: "Gradle Setup",
                },
                {
                    type: "doc",
                    id: "wiki/developer/config-builder",
                    label: "The Config Builder",
                },
                {
                    type: "doc",
                    id: "wiki/developer/config-types",
                    label: "Config Types & Sides",
                },
                {
                    type: "category",
                    label: "Config Entries",
                    collapsed: true,
                    items: [
                        {
                            type: "doc",
                            id: "wiki/developer/entries/primitives",
                            label: "Primitives",
                        },
                        {
                            type: "doc",
                            id: "wiki/developer/entries/strings",
                            label: "Strings",
                        },
                        {
                            type: "doc",
                            id: "wiki/developer/entries/lists-maps",
                            label: "Lists & Maps",
                        },
                        {
                            type: "doc",
                            id: "wiki/developer/entries/minecraft",
                            label: "Minecraft Types",
                        },
                        {
                            type: "doc",
                            id: "wiki/developer/entries/special",
                            label: "Special Types",
                        },
                    ],
                },
                {
                    type: "doc",
                    id: "wiki/developer/validation",
                    label: "Validation & Comments",
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
