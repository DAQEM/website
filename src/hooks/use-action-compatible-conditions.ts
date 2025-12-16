import { conditionTypes } from "@site/docs/arc/data";
import useAction from "./use-action";

const useActionCompatibleConditions = () => {
    const action = useAction();
    const compatibleConditions = Object.values(conditionTypes).filter((condition) =>
        condition.isActionCompatible(action)
    );
    return compatibleConditions;
};

export default useActionCompatibleConditions;
