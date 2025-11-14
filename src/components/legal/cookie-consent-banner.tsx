import Link from "@docusaurus/Link";
import { useEffect, useState } from "react";
import Button from "../ui/button";

export default function CookieConsentBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if a choice has been made
        if (localStorage.getItem("cookie_consent") === null) {
            setIsVisible(true);
        }
    }, []);

    const handleConsent = (consent: boolean) => {
        localStorage.setItem("cookie_consent", consent ? "true" : "false");
        setIsVisible(false);

        // If consent is given, reload the page to trigger the analytics hook
        if (consent) {
            window.location.reload();
        }
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed left-0 right-0 bottom-0 z-1000 p-8">
            <div className="mx-auto flex justify-between items-center mc-card gap-8 max-w-5xl">
                <p>
                    We use cookies for analytics and advertising to improve our site. By
                    clicking "Accept," you agree to our use of cookies. For more
                    details, see our{" "}
                    <Link to="/privacy-policy">Privacy Policy</Link>.
                </p>
                <div className="flex gap-4">
                    <Button onClick={() => handleConsent(true)}>Accept</Button>
                    <Button onClick={() => handleConsent(false)}>
                        Decline
                    </Button>
                </div>
            </div>
        </div>
    );
}
