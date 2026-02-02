import Head from "@docusaurus/Head";
import {
  useActivePlugin,
  useDoc,
} from "@docusaurus/plugin-content-docs/client";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"; // Import this
import { projectsBySlug } from "@site/src/lib/projects";
import Metadata from "@theme-original/DocItem/Metadata";

export default function MetadataWrapper(props) {
    const { metadata } = useDoc();
    const activePlugin = useActivePlugin();
    const { siteConfig } = useDocusaurusContext();

    const pluginId = activePlugin?.pluginId;
    const project = pluginId ? projectsBySlug[pluginId] : null;

    const projectName = project
        ? project.name
        : "";

    const improvedTitle =
        projectName && metadata.title !== projectName
            ? `${metadata.title} - ${projectName}`
            : metadata.title;
            
    const finalTitle = `${improvedTitle} | ${siteConfig.title}`;

    return (
        <>
            <Metadata {...props} />
            <Head>
                <title>{finalTitle}</title>
                <meta property="og:title" content={finalTitle} />
                <meta name="twitter:title" content={finalTitle} />
            </Head>
        </>
    );
}
