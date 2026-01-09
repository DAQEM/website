import React from "react";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Generator from "@/components/generator";

export default function Page() {
    return (
        <Layout
            title="DAQEM Studios Generator"
            description="Create custom content for DAQEM Studios mods with ease."
            noFooter
            wrapperClassName="no-scrollbar-gutter"
        >
            <BrowserOnly fallback={<div>Loading...</div>}>
                {() => <Generator />}
            </BrowserOnly>
        </Layout>
    );
}
