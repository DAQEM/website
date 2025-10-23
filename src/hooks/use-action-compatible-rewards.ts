import { rewardTypes } from "@site/docs/arc/data";
import useAction from "./use-action";

const useActionCompatibleRewards = () => {
    const action = useAction();
    const compatibleRewards = Object.values(rewardTypes).filter((reward) =>
        reward.isActionCompatible(action)
    );
    return compatibleRewards;
};

export default useActionCompatibleRewards;
