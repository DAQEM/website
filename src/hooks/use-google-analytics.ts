import { useLocation } from '@docusaurus/router';
import { useEffect } from 'react';

const GA_TRACKING_ID = 'G-W16X3LX653';

export const useGoogleAnalytics = () => {
    const location = useLocation();

    useEffect(() => {
        // Check if consent has been given
        const consent = localStorage.getItem('cookie_consent');

        if (consent !== 'true') {
            return; // Do nothing if consent is not granted
        }

        // Check if gtag script already exists
        if (document.getElementById('ga-script')) {
            return;
        }

        // Inject the Google Analytics script
        const script = document.createElement('script');
        script.id = 'ga-script';
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
        document.head.appendChild(script);

        // Inject the inline script
        const inlineScript = document.createElement('script');
        inlineScript.id = 'ga-inline-script';
        inlineScript.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', { 'anonymize_ip': true });
        `;
        document.head.appendChild(inlineScript);

    }, []); // Run only once on component mount

    useEffect(() => {
        // This effect handles page views on route changes
        const consent = localStorage.getItem('cookie_consent');

        if (consent === 'true' && typeof window.gtag === 'function') {
            // Defer execution to ensure document.title is updated
            setTimeout(() => {
                window.gtag('event', 'page_view', {
                    page_path: location.pathname + location.search + location.hash,
                });
            }, 100);
        }
    }, [location.pathname, location.search, location.hash]); // Rerun on route change
};