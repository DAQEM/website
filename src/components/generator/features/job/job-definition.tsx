import { IJobObjectDTO } from "../../core/domain/types";
import { ObjectDefinition } from "../../core/registry/object-definition";
import { globalObjectRegistry } from "../../core/registry/registry";
import { JobEditor } from "./components/job-editor";
import { JobSidebarCard } from "./components/job-sidebar-card";

const JobDefinition: ObjectDefinition<IJobObjectDTO> = {
    type: "job",
    label: "Job",

    createDefault: () => ({
        type: "job",
        id: crypto.randomUUID(),
        name: "New Job",
        description: "",
        price: 0,
        color: "#FFFFFF",
        icon: { id: "minecraft:paper" },
        actions: [],
    }),

    renderSidebarItem: (props) => <JobSidebarCard {...props} />,

    renderEditor: (props) => <JobEditor {...props} />,
};

// Auto-register
globalObjectRegistry.register(JobDefinition);
