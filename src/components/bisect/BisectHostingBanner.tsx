"use client";

import { useAnnouncementBar } from "@docusaurus/theme-common/internal";
import AnnouncementBarCloseButton from "@theme/AnnouncementBar/CloseButton";
import { Button } from "../ui/button";
import BisectHostingDialog from "./BisectHostingModal";

const BisectHostingBanner = () => {
    const { isActive, close } = useAnnouncementBar();

    if (!isActive) {
        return null;
    }

    return (
        <div className="p-4 flex md:flex-row flex-col justify-center items-center gap-4 bg-card-background relative">
            <p className="m-0 text-center">
                <strong>Get 25% OFF</strong> on your first order with{" "}
                <strong>BisectHosting</strong> using code{" "}
                <span className="font-bold">"DAQEM"</span>!
            </p>
            <div className="flex flex-row gap-4">
                <Button size="sm">Get Discount</Button>
                <BisectHostingDialog />
                <AnnouncementBarCloseButton
                    className="text-foreground opacity-10 absolute right-4 top-6"
                    onClick={close}
                />
            </div>
        </div>
    );
};

export default BisectHostingBanner;
