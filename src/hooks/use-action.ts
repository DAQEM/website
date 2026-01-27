import { useDoc } from "@docusaurus/plugin-content-docs/client";
import { actionTypes, ActionTypesKeys } from "@site/docs/arc/data";

const useAction = () => {
    const [_, __, category, id] = useDoc().metadata.id.split("/");

    var newId = id;
    if (category === "jobsplus") {
        newId = `jobsplus:${id}`;
    } else {
        newId = `arc:${id}`;
    }
    
    const action = actionTypes[newId as ActionTypesKeys];
    return action;
};

export default useAction;
