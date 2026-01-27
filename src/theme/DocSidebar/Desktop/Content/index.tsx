import { ThemeClassNames } from "@docusaurus/theme-common";
import {
    useAnnouncementBar,
    useScrollPosition,
} from "@docusaurus/theme-common/internal";
import { translate } from "@docusaurus/Translate";
import type { Props } from "@theme/DocSidebar/Desktop/Content";
import DocSidebarItems from "@theme/DocSidebarItems";
import clsx from "clsx";
import { type ReactNode, useState } from "react";

import Link from "@docusaurus/Link";
import CurseForge from "@site/src/components/icons/curseforge";
import GitHub from "@site/src/components/icons/github";
import Modrinth from "@site/src/components/icons/modrinth";
import { projectsBySlug } from "@site/src/lib/projects";
import styles from "./styles.module.css";

function useShowAnnouncementBar() {
    const { isActive } = useAnnouncementBar();
    const [showAnnouncementBar, setShowAnnouncementBar] = useState(isActive);

    useScrollPosition(
        ({ scrollY }) => {
            if (isActive) {
                setShowAnnouncementBar(scrollY === 0);
            }
        },
        [isActive],
    );
    return isActive && showAnnouncementBar;
}

export default function DocSidebarDesktopContent({
    path,
    sidebar,
    className,
}: Props): ReactNode {
    const showAnnouncementBar = useShowAnnouncementBar();

    const sidebarItem = sidebar[0] as { href?: string };
    const project = sidebarItem.href
        ? projectsBySlug[
              sidebarItem.href.replace("/projects/", "").replace("/", "") ?? ""
          ]
        : undefined;

    return (
        <div
            className={clsx("flex flex-col", className)}
            style={{
                // 1. Constrain the total height to the viewport minus the header
                height: "calc(100vh - var(--ifm-navbar-height))",
                // 2. Ensure the sidebar stays sticky on the screen
                position: "sticky",
                top: "var(--ifm-navbar-height)",
            }}
        >
            {/* Project Info Header (Static) */}
            {project && (
                <div className="p-4 bg-card-background grid grid-cols-[64px_1fr] gap-4 shrink-0">
                    <Link
                        href={`/projects/${project.slug}`}
                        className="size-16"
                    >
                        <img
                            src={`/img/projects/${project.slug}.webp`}
                            alt={project.name}
                            className="size-16"
                        />
                    </Link>
                    <div className="flex flex-col justify-between gap-2">
                        <Link
                            href={`/projects/${project.slug}`}
                            className="no-underline"
                        >
                            <h3 className="m-0">{project.name}</h3>
                        </Link>
                        <div className="flex flex-wrap gap-2">
                            {project.curseForgeSlug && (
                                <Link
                                    href={`https://www.curseforge.com/minecraft/${project.curseForgeSlug}`}
                                    className="size-4 flex items-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <CurseForge />
                                </Link>
                            )}
                            {project.modrinthSlug && (
                                <Link
                                    href={`https://modrinth.com/${project.modrinthSlug}`}
                                    className="size-4 flex items-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Modrinth />
                                </Link>
                            )}
                            {project.githubSlug && (
                                <Link
                                    href={`https://github.com/${project.githubSlug}`}
                                    className="size-4 flex items-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <GitHub />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Scrollable Navigation Menu */}
            <nav
                aria-label={translate({
                    id: "theme.docs.sidebar.navAriaLabel",
                    message: "Docs sidebar",
                    description: "The ARIA label for the sidebar navigation",
                })}
                className={clsx(
                    "menu thin-scrollbar",
                    styles.menu,
                    showAnnouncementBar && styles.menuWithAnnouncementBar,
                )}
                style={{
                    // 3. FORCE the nav to take only available space and scroll
                    flex: "1 1 0px",
                    overflowY: "auto",
                    overflowX: "hidden",
                }}
            >
                <ul
                    className={clsx(
                        ThemeClassNames.docs.docSidebarMenu,
                        "menu__list",
                    )}
                >
                    <DocSidebarItems
                        items={sidebar}
                        activePath={path}
                        level={1}
                    />
                </ul>
            </nav>
        </div>
    );
}
