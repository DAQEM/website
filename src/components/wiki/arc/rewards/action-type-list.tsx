import useRewardCompatibleActions from "@site/src/hooks/use-reward-compatible-actions";
import DocCard from "@site/src/theme/DocCard";

export default function CompatibleActionTypes() {
    const compatibleActions = useRewardCompatibleActions();

    return (
        <section className="row">
            {compatibleActions
                .sort((a, b) => a.title.localeCompare(b.title))
                .map((action) => (
                    <article className="mb-8 col col--6">
                        <DocCard
                            item={{
                                docId: `wiki/action_types/${action.category}/${action.id}`,
                                type: "link",
                                href: `/projects/arc/wiki/action_types/${action.category}/${action.id}`,
                                label: action.title,
                                customProps: { emoji: action.emoji },
                            }}
                        />
                    </article>
                ))}
        </section>
    );
}
