import { actionTypes } from "@site/docs/arc/data";
import useCondition from "./use-condition";

const useConditionCompatibleActions = () => {
    const condition = useCondition();
    const compatibleActions = Object.values(actionTypes).filter((action) =>
        condition.isActionCompatible(action)
    );
    return compatibleActions;
};

export default useConditionCompatibleActions;
