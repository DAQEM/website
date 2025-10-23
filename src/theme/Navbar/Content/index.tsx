import {
    ErrorCauseBoundary,
    ThemeClassNames,
    useThemeConfig,
} from "@docusaurus/theme-common";
import {
    splitNavbarItems,
    useNavbarMobileSidebar,
} from "@docusaurus/theme-common/internal";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import NavbarLogo from "@theme/Navbar/Logo";
import NavbarMobileSidebarToggle from "@theme/Navbar/MobileSidebar/Toggle";
import NavbarSearch from "@theme/Navbar/Search";
import NavbarItem, { type Props as NavbarItemConfig } from "@theme/NavbarItem";
import SearchBar from "@theme/SearchBar";
import clsx from "clsx";
import { type ReactNode } from "react";

import Anchor from "@site/src/components/ui/anchor";
import styles from "./styles.module.css";

function useNavbarItems() {
    // TODO temporary casting until ThemeConfig type is improved
    return useThemeConfig().navbar.items as NavbarItemConfig[];
}

function NavbarItems({ items }: { items: NavbarItemConfig[] }): ReactNode {
    return (
        <>
            {items.map((item, i) => (
                <ErrorCauseBoundary
                    key={i}
                    onError={(error) =>
                        new Error(
                            `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
                            { cause: error }
                        )
                    }
                >
                    <NavbarItem {...item} />
                </ErrorCauseBoundary>
            ))}
        </>
    );
}

function NavbarContentLayout({
    left,
    center,
    right,
}: {
    left: ReactNode;
    center: ReactNode;
    right: ReactNode;
}) {
    return (
        <div className="navbar__inner">
            <div
                className={clsx(
                    ThemeClassNames.layout.navbar.containerLeft,
                    "navbar__items"
                )}
            >
                {left}
            </div>
            <div
                className={clsx("theme-layout-navbar-center", "navbar__items")}
            >
                {center}
            </div>
            <div
                className={clsx(
                    ThemeClassNames.layout.navbar.containerRight,
                    "navbar__items navbar__items--right"
                )}
            >
                {right}
            </div>
        </div>
    );
}

export default function NavbarContent(): ReactNode {
    const mobileSidebar = useNavbarMobileSidebar();

    const items = useNavbarItems();
    const [leftItems, rightItems] = splitNavbarItems(items);

    const searchBarItem = items.find((item) => item.type === "search");

    return (
        <NavbarContentLayout
            left={
                // TODO stop hardcoding items?
                <>
                    {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
                    <NavbarLogo />
                    <NavbarItems items={leftItems} />
                </>
            }
            center={
                <>
                    {!searchBarItem && (
                        <NavbarSearch className="!p-0">
                            <SearchBar />
                        </NavbarSearch>
                    )}
                </>
            }
            right={
                // TODO stop hardcoding items?
                // Ask the user to add the respective navbar items => more flexible
                <>
                    <NavbarItems items={rightItems} />
                    <NavbarColorModeToggle className={styles.colorModeToggle} />
                    <Anchor
                        href="https://daqem.com/discord"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Join our Discord"
                        className="navbar__item !py-1 !px-4"
                    >
                        Join Our Discord
                    </Anchor>
                </>
            }
        />
    );
}
