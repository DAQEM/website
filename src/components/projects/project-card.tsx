import Link from "@docusaurus/Link";

type ProjectCardProps = {
    name: string;
    description: string;
    slug: string;
};

const ProjectCard = ({ name, description, slug }: ProjectCardProps) => {
    return (
        <Link
            href={`/projects/${slug}`}
            className="grid grid-cols-[64px_1fr] md:grid-cols-[96px_1fr] grid-rows-[max-content_max-content] mc-button gap-4 no-underline"
        >
            <div className="size-16 md:size-24">
                <img src={`/img/projects/${slug}.webp`} alt={name} />
            </div>
            <div>
                <h3 className="m-0 text-3xl leading-8 text-white">{name}</h3>
            </div>
            <p className="m-0 col-span-2 text-lg text-gray-200">
                {description}
            </p>
        </Link>
    );
};

export default ProjectCard;
