import useConditionCompatibleActions from "@site/src/hooks/use-condition-compatible-actions";
import DocCard from "@site/src/theme/DocCard";

export default function CompatibleActionTypes() {
    const compatibleActions = useConditionCompatibleActions();

    return (
        <section className="row">
            {compatibleActions
                .sort((a, b) => a.title.localeCompare(b.title))
                .map((action) => (
                    <article className="mb-8 col col--6" key={action.id.replace(/\w+:/, "")}>
                        <DocCard
                            item={{
                                docId: `wiki/action_types/${action.category}/${action.id.replace(/\w+:/, "")}`,
                                type: "link",
                                href: `/projects/arc/wiki/action_types/${action.category}/${action.id.replace(/\w+:/, "")}`,
                                label: action.title,
                                customProps: { emoji: action.emoji },
                            }}
                        />
                    </article>
                ))}
        </section>
    );
}
