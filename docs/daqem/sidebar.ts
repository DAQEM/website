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
                    type: "category",
                    label: "JSON Formats",
                    customProps: { emoji: "" },
                    collapsed: true,
                    items: [
                        {
                            type: "doc",
                            id: "wiki/json_formats/block",
                            label: "Block",
                        }
                    ],
                    link: { type: "doc", id: "wiki/json_formats/index" },
                },
            ],
            link: { type: "doc", id: "wiki/index" },
        },
    ],
};

export default sidebar;
