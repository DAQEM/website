import CookieConsentBanner from "../components/legal/cookie-consent-banner";

export default function Root({ children }) {
    return (
        <>
            {children}
            <CookieConsentBanner />
        </>
    );
}
