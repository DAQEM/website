import BisectHostingBanner from "@/components/bisect/BisectHostingBanner";
import type { WrapperProps } from "@docusaurus/types";
import type AnnouncementBarType from "@theme/AnnouncementBar";
import { type ReactNode } from "react";

type Props = WrapperProps<typeof AnnouncementBarType>;

export default function AnnouncementBarWrapper(props: Props): ReactNode {
    return (
        <div className="my-custom-announcement-bar-container">
            <BisectHostingBanner />
        </div>
    );
}
