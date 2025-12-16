import { useDoc } from "@docusaurus/plugin-content-docs/client";
import { actionTypes, ActionTypesKeys } from "@site/docs/arc/data";

const useAction = () => {
    const action =
        actionTypes[useDoc().metadata.id.split("/").pop() as ActionTypesKeys];
    return action;
};

export default useAction;
