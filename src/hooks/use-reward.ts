import { useDoc } from "@docusaurus/plugin-content-docs/client";
import { rewardTypes, RewardTypesKeys } from "@site/docs/arc/data";

const useReward = () => {
    const [_, __, category, id] = useDoc().metadata.id.split("/");

    var newId = id !== undefined ? id : category;
    if (category === "jobsplus") {
        newId = `jobsplus:${newId}`;
    } else {
        newId = `arc:${newId}`;
    }

    const reward = rewardTypes[newId as RewardTypesKeys];
    return reward;
};

export default useReward;
