import Layout from "@theme/Layout";
import type { ReactNode } from "react";
import ProjectCard from "../components/projects/project-card";
import Anchor from "../components/ui/Anchor";
import { projects } from "../lib/projects";

export default function Home(): ReactNode {
    return (
        <Layout>
            <div>
                <div className="bg-gradient-to-t from-blue-400 dark:from-blue-800 via-75% via-header-background to-header-background">
                    <div className="grid lg:grid-cols-2 gap-8 pt-16 pb-32 md:py-32 container">
                        <div className="flex flex-col justify-between gap-16 md:gap-6">
                            <div>
                                <h1 className="m-0 text-5xl md:text-7xl max-w-lg">
                                    Dive into a world of wonder!
                                </h1>
                                <div className="lg:hidden relative">
                                    <div className="absolute -top-12 right-0 opacity-10">
                                        <img
                                            src="img/hero.webp"
                                            alt="Hero Image"
                                            className="w-64 h-auto"
                                        />
                                    </div>
                                </div>
                            </div>

                            <ul className="flex flex-col gap-1 md:gap-2 list-none p-0 text-xl md:text-2xl font-heading text-heading">
                                <li className="flex gap-2 items-center">
                                    <Star />
                                    <span>10+ Unique Mods.</span>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <Star />
                                    <span>4.5M+ Downloads.</span>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <Star />
                                    <span>4+ Years of Experience.</span>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <Star />
                                    <span>Amazing Discord Support.</span>
                                </li>
                            </ul>
                            <Anchor href="/#projects" className="w-max">
                                View Projects
                            </Anchor>
                        </div>
                        <div className="hidden lg:block">
                            <img
                                src="img/hero.webp"
                                alt="Hero Image"
                                className="w-xl h-auto"
                            />
                        </div>
                    </div>
                </div>
                <div
                    id="projects"
                    className="bg-gradient-to-t from-pink-400 dark:from-pink-800 via-75% via-header-background to-header-background"
                >
                    <div className="container py-32">
                        <div className="text-center mb-16">
                            <h2 className="text-7xl">Our Mods</h2>
                        </div>
                        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                            {projects.map((project) => (
                                <ProjectCard key={project.slug} {...project} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

function Star(): ReactNode {
    return (
        <div className="size-8 flex justify-center items-center">
            <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-6"
            >
                <path
                    d="M11.1243 2.06901C11.7686 0.327772 14.2314 0.327775 14.8757 2.06901L17.0023 7.81607C17.2049 8.3635 17.6365 8.79513 18.1839 8.99769L23.931 11.1243C25.6722 11.7686 25.6722 14.2314 23.931 14.8757L18.1839 17.0023C17.6365 17.2049 17.2049 17.6365 17.0023 18.1839L14.8757 23.931C14.2314 25.6722 11.7686 25.6722 11.1243 23.931L8.99769 18.1839C8.79512 17.6365 8.3635 17.2049 7.81606 17.0023L2.06901 14.8757C0.327772 14.2314 0.327774 11.7686 2.06901 11.1243L7.81607 8.99769C8.3635 8.79512 8.79513 8.3635 8.99769 7.81606L11.1243 2.06901Z"
                    className="fill-primary"
                />
            </svg>
        </div>
    );
}
