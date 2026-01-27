import { useDoc } from "@docusaurus/plugin-content-docs/client";
import { conditionTypes, ConditionTypesKeys } from "@site/docs/arc/data";

const useCondition = () => {
    const [_, __, category, id] = useDoc().metadata.id.split("/");
    
        var newId = id;
        if (category === "jobsplus") {
            newId = `jobsplus:${id}`;
        } else {
            newId = `arc:${id}`;
        }
        
        const condition = conditionTypes[newId as ConditionTypesKeys];
        return condition;
};

export default useCondition;
