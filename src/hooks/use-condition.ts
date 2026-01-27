import { useDoc } from "@docusaurus/plugin-content-docs/client";
import { conditionTypes, ConditionTypesKeys } from "@site/docs/arc/data";

const useCondition = () => {
    const [_, __, category, id] = useDoc().metadata.id.split("/");

    var newId = id !== undefined ? id : category;
    if (category === "jobsplus") {
        newId = `jobsplus:${newId}`;
    } else {
        newId = `arc:${newId}`;
    }

    const condition = conditionTypes[newId as ConditionTypesKeys];
    return condition;
};

export default useCondition;
