import useActionCompatibleRewards from "@site/src/hooks/use-action-compatible-rewards";
import DocCard from "@theme/DocCard";

const CompatibleRewardTypes = () => {
    const compatibleRewards = useActionCompatibleRewards();

    return (
        <section className="row">
            {compatibleRewards
                .sort((a, b) => a.title.localeCompare(b.title))
                .map((reward) => (
                    <article className="mb-8 col col--6">
                        <DocCard
                            item={{
                                docId: `wiki/reward_types/${
                                    reward.category === "none"
                                        ? ""
                                        : `${reward.category}/`
                                }${reward.id}`,
                                type: "link",
                                href: `/projects/arc/wiki/reward_types/${
                                    reward.category === "none"
                                        ? ""
                                        : `${reward.category}/`
                                }${reward.id}`,
                                label: reward.title,
                                customProps: { emoji: reward.emoji },
                            }}
                        />
                    </article>
                ))}
        </section>
    );
};

export default CompatibleRewardTypes;
