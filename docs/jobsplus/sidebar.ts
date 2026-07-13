import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
    sidebar: [
        {
            type: "doc",
            id: "index",
            label: "Jobs+",
        },
        {
            type: "category",
            label: "🚀 Getting Started",
            collapsed: false,
            link: { type: "doc", id: "wiki/getting-started/index" },
            items: [
                {
                    type: "doc",
                    id: "wiki/getting-started/how_to_start",
                    label: "How to Start",
                },
                {
                    type: "doc",
                    id: "wiki/getting-started/how_to_get_exp",
                    label: "How to Get Experience",
                },
                {
                    type: "doc",
                    id: "wiki/getting-started/coins",
                    label: "Coins",
                },
            ],
        },
        {
            type: "category",
            label: "🧩 Core Mechanics / Features",
            collapsed: false,
            items: [
                {
                    type: "category",
                    label: "Jobs",
                    collapsed: true,
                    link: { type: "doc", id: "wiki/jobs/index" },
                    items: [
                        {
                            type: "doc",
                            id: "wiki/jobs/alchemist",
                            label: "Alchemist",
                        },
                        {
                            type: "doc",
                            id: "wiki/jobs/builder",
                            label: "Builder",
                        },
                        {
                            type: "doc",
                            id: "wiki/jobs/digger",
                            label: "Digger",
                        },
                        {
                            type: "doc",
                            id: "wiki/jobs/enchanter",
                            label: "Enchanter",
                        },
                        {
                            type: "doc",
                            id: "wiki/jobs/farmer",
                            label: "Farmer",
                        },
                        {
                            type: "doc",
                            id: "wiki/jobs/fisherman",
                            label: "Fisherman",
                        },
                        {
                            type: "doc",
                            id: "wiki/jobs/hunter",
                            label: "Hunter",
                        },
                        {
                            type: "doc",
                            id: "wiki/jobs/lumberjack",
                            label: "Lumberjack",
                        },
                        {
                            type: "doc",
                            id: "wiki/jobs/miner",
                            label: "Miner",
                        },
                        {
                            type: "doc",
                            id: "wiki/jobs/smith",
                            label: "Smith",
                        },
                    ],
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
            label: "💻 Commands & Permissions",
            collapsed: false,
            items: [
                {
                    type: "doc",
                    id: "wiki/getting-started/commands",
                    label: "Commands",
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
