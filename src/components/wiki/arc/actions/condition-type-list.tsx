import useActionCompatibleConditions from "@site/src/hooks/use-action-compatible-conditions";
import DocCard from "@theme/DocCard";

const CompatibleConditionTypes = () => {
    const compatibleConditions = useActionCompatibleConditions();

    return (
        <section className="row">
            {compatibleConditions
                .sort((a, b) => a.title.localeCompare(b.title))
                .map((condition) => (
                    <article className="mb-8 col col--6">
                        <DocCard
                            item={{
                                docId: `wiki/condition_types/${
                                    condition.category === "none"
                                        ? ""
                                        : `${condition.category}/`
                                }${condition.id}`,
                                type: "link",
                                href: `/projects/arc/wiki/condition_types/${
                                    condition.category === "none"
                                        ? ""
                                        : `${condition.category}/`
                                }${condition.id}`,
                                label: condition.title,
                                customProps: { emoji: condition.emoji },
                            }}
                        />
                    </article>
                ))}
        </section>
    );
};

export default CompatibleConditionTypes;
