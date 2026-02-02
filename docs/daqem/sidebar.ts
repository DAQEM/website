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
            label: "Wiki",
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
                {
                    type: "doc",
                    id: "wiki/maven",
                    label: "Maven Repository",
                },
                {
                    type: "category",
                    label: "JSON Formats",
                    customProps: { emoji: "" },
                    collapsed: true,
                    items: [
                        {
                            type: "doc",
                            id: "wiki/json_formats/block",
                            label: "Block",
                        },
                    ],
                    link: { type: "doc", id: "wiki/json_formats/index" },
                },
            ],
        },
    ],
};

export default sidebar;
