import CookieConsentBanner from "../components/legal/cookie-consent-banner";
import { useGoogleAnalytics } from "../hooks/use-google-analytics";

export default function Root({ children }) {
    useGoogleAnalytics();
    return (
        <>
            {children}
            <CookieConsentBanner />
        </>
    );
}
