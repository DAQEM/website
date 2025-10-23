import { actionTypes } from "@site/docs/arc/data";
import useReward from "./use-reward";

const useRewardCompatibleActions = () => {
    const reward = useReward();
    const compatibleActions = Object.values(actionTypes).filter((action) =>
        reward.isActionCompatible(action)
    );
    return compatibleActions;
};

export default useRewardCompatibleActions;
