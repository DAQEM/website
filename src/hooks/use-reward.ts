import { useDoc } from "@docusaurus/plugin-content-docs/client";
import { rewardTypes, RewardTypesKeys } from "@site/docs/arc/data";

const useReward = () => {
    const reward =
        rewardTypes[useDoc().metadata.id.split("/").pop() as RewardTypesKeys];
    return reward;
};

export default useReward;
