import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

export default {
    wikiSidebar: [
        {
            type: "doc",
            id: "index",
            label: "YAML Config",
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
                            customProps: {
                                emoji: "📥",
                            },
                        },
                        {
                            type: "doc",
                            id: "wiki/getting-started/keybindings",
                            label: "Accessing the Menu",
                            customProps: {
                                emoji: "⌨️",
                            },
                        },
                        {
                            type: "doc",
                            id: "wiki/getting-started/using-the-gui",
                            label: "Using the Interface",
                            customProps: {
                                emoji: "🖥️",
                            },
                        },
                        {
                            type: "doc",
                            id: "wiki/getting-started/file-management",
                            label: "File Management",
                            customProps: {
                                emoji: "📂",
                            },
                        },
                    ],
                    link: {
                        type: "doc",
                        id: "wiki/getting-started/index",
                    },
                },
                {
                    type: "category",
                    label: "Developer Guide",
                    collapsed: false,
                    customProps: {
                        emoji: "🛠️",
                    },
                    items: [
                        {
                            type: "doc",
                            id: "wiki/developer/setup",
                            label: "Dependency Setup",
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
                    link: { type: "doc", id: "wiki/developer/index" },
                },
                {
                    type: "category",
                    label: "File Formats",
                    collapsed: false,
                    customProps: {
                        emoji: "📄",
                    },
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
            ],
        },
    ],
} as SidebarsConfig;
