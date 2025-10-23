import { useDoc } from "@docusaurus/plugin-content-docs/client";
import { conditionTypes, ConditionTypesKeys } from "@site/docs/arc/data";

const useCondition = () => {
    const condition =
        conditionTypes[
            useDoc().metadata.id.split("/").pop() as ConditionTypesKeys
        ];
    return condition;
};

export default useCondition;
