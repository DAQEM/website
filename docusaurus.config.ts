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
    markdown: {
        hooks: {
            onBrokenMarkdownLinks: "warn",
            onBrokenMarkdownImages: "warn",
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
                    feedOptions: {
                        type: ["rss", "atom"],
                        xslt: true,
                    },
                    onInlineTags: "warn",
                    onInlineAuthors: "warn",
                    onUntruncatedBlogPosts: "warn",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: "img/docusaurus-social-card.jpg",
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
                { to: "/blog", label: "News", position: "right" },
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
            darkTheme: prismThemes.oneDark,
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
                sidebarPath: "sidebars.ts",
                sidebarCollapsed: false,
                editUrl: "https://github.com/DAQEM/website/tree/main/",
            } satisfies Partial<DocsPlugin.PluginOptions>,
        ],
        ...projects.map(
            (project) => [
                "@docusaurus/plugin-content-docs",
                {
                    id: project.slug,
                    path: `docs/${project.slug}`,
                    routeBasePath: `/projects/${project.slug}`,
                    sidebarPath: `docs/${project.slug}/sidebar.ts`,
                    sidebarCollapsed: false,
                    editUrl: "https://github.com/DAQEM/website/tree/main/",
                } satisfies Partial<DocsPlugin.PluginOptions>,
            ],
            [
                "@docusaurus/plugin-google-gtag",
                {
                    trackingID: "G-W16X3LX653",
                    anonymizeIP: true,
                },
            ]
        ),
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
