import type * as DocsPlugin from "@docusaurus/plugin-content-docs";
import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";
import { projects } from "./src/lib/projects";

const config: Config = {
    title: "DAQEM Studios",
    tagline: "Dive into a world of wonder.",
    favicon: "img/favicon.ico",
    future: {
        v4: true,
    },
    url: "https://daqem.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenAnchors: "ignore",
    trailingSlash: false,
    markdown: {
        hooks: {
            onBrokenMarkdownLinks: "throw",
            onBrokenMarkdownImages: "throw",
        },
    },
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },
    presets: [
        [
            "classic",
            {
                docs: false,
                blog: {
                    showReadingTime: true,
                    blogTitle: "DAQEM Studios News",
                    blogDescription:
                        "The latest news and updates from DAQEM Studios about our Minecraft mods and projects.",
                    blogSidebarTitle: "Recent News",
                    routeBasePath: "news",
                    path: "blog",
                    feedOptions: {
                        type: ["rss", "atom"],
                        xslt: true,
                        title: "DAQEM Studios News Feed",
                        description:
                            "The latest news and updates from DAQEM Studios about our Minecraft mods and projects.",
                        copyright: `Copyright © ${new Date().getFullYear()} DAQEM Studios.`,
                    },
                    onInlineTags: "warn",
                    onInlineAuthors: "warn",
                    onUntruncatedBlogPosts: "warn",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
                sitemap: {
                    changefreq: "weekly",
                    priority: 0.5,
                    ignorePatterns: ["/tags/**"],
                    filename: "sitemap.xml",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        metadata: [
            {
                name: "keywords",
                content:
                    "minecraft, mods, daqem, irobot, grief logger, grieflogger, jobsplus, jobs+, fabric, forge, neoforge",
            },
            {
                name: "description",
                content:
                    "DAQEM Studios creates high-quality Minecraft mods like Jobs+, GriefLogger and iRobot to enhance your gameplay experience.",
            },
        ],
        image: "img/social-card.jpg",
        colorMode: {
            defaultMode: "dark",
            disableSwitch: true,
        },
        navbar: {
            logo: {
                alt: "DAQEM Studios Logo",
                src: "img/logo.svg",
                srcDark: "img/logo-dark.svg",
                width: 1040 / 8,
                height: 448 / 8,
                href: "/",
            },
            items: [
                { to: "/#projects", label: "Projects", position: "right" },
                { to: "/news", label: "News", position: "right" },
            ],
        },
        footer: {
            links: [
                {
                    title: "Projects",
                    items: [
                        ...projects
                            .map((project) => ({
                                label: project.name,
                                to: `/projects/${project.slug}`,
                            }))
                            .slice(0, 5),
                        {
                            label: "All Projects",
                            to: "/#projects",
                        },
                    ],
                },
                {
                    title: "Community",
                    items: [
                        {
                            label: "Discord",
                            href: "https://daqem.com/discord",
                        },
                        {
                            label: "GitHub",
                            href: "https://github.com/DAQEM",
                        },
                        {
                            label: "CurseForge",
                            href: "https://www.curseforge.com/members/daqem",
                        },
                        {
                            label: "Modrinth",
                            href: "https://modrinth.com/organization/daqem-studios",
                        },
                        {
                            label: "Ko-fi",
                            href: "https://ko-fi.com/daqem",
                        },
                    ],
                },
                {
                    title: "Legal",
                    items: [
                        {
                            label: "Privacy Policy",
                            to: "/privacy-policy",
                        },
                        {
                            label: "Terms of Service",
                            to: "/terms-of-service",
                        },
                    ],
                },
            ],
            copyright:
                "NOT AN OFFICIAL MINECRAFT SERVICE. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.",
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
            additionalLanguages: ["java", "yaml"],
        },
        tableOfContents: {
            maxHeadingLevel: 5,
        },
    } satisfies Preset.ThemeConfig,
    plugins: [
        "./src/plugins/tailwind-plugin.ts",
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "default",
                path: "docs/daqem",
                routeBasePath: "/docs/daqem",
                sidebarPath: "docs/daqem/sidebar.ts",
                sidebarCollapsed: false,
                editUrl: "https://github.com/DAQEM/website/tree/main/",
            } satisfies Partial<DocsPlugin.PluginOptions>,
        ],
        ...projects.map((project) => [
            "@docusaurus/plugin-content-docs",
            {
                id: project.slug,
                path: `docs/${project.slug}`,
                routeBasePath: `/projects/${project.slug}`,
                sidebarPath: `docs/${project.slug}/sidebar.ts`,
                sidebarCollapsed: false,
                editUrl: "https://github.com/DAQEM/website/tree/main/",
            } satisfies Partial<DocsPlugin.PluginOptions>,
        ]),
        [
            "@docusaurus/plugin-pwa",
            {
                debug: process.env.NODE_ENV !== "production",
                offlineModeActivationStrategies: [
                    "appInstalled",
                    "standalone",
                    "queryString",
                ],
                pwaHead: [
                    {
                        tagName: "link",
                        rel: "icon",
                        href: "/img/icon.png",
                    },
                    {
                        tagName: "link",
                        rel: "manifest",
                        href: "/manifest.json",
                    },
                    {
                        tagName: "meta",
                        name: "theme-color",
                        content: "rgb(0, 115, 255)",
                    },
                    {
                        tagName: "meta",
                        name: "apple-mobile-web-app-capable",
                        content: "yes",
                    },
                    {
                        tagName: "meta",
                        name: "apple-mobile-web-app-status-bar-style",
                        content: "#000",
                    },
                    {
                        tagName: "link",
                        rel: "apple-touch-icon",
                        href: "/img/icon.png",
                    },
                    {
                        tagName: "link",
                        rel: "mask-icon",
                        href: "/img/icon.svg",
                        color: "rgb(0, 115, 255)",
                    },
                    {
                        tagName: "meta",
                        name: "msapplication-TileImage",
                        content: "/img/icon.png",
                    },
                    {
                        tagName: "meta",
                        name: "msapplication-TileColor",
                        content: "#000",
                    },
                ],
            },
        ],
    ],
    themes: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
            {
                hashed: true,
                indexBlog: false,
                language: ["en"],
                searchBarShortcutKeymap: "/",
                docsRouteBasePath: [
                    "/docs/daqem",
                    ...projects.map((project) => `/projects/${project.slug}`),
                ],
            },
        ],
    ],
};

export default config;
