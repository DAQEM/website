export type Project = {
    name: string;
    description: string;
    slug: string;
    curseForgeSlug?: string;
    modrinthSlug?: string;
    githubSlug?: string;
};
export const projectsBySlug: Record<string, Project> = {
    "item-restrictions": {
        name: "Item Restrictions",
        description: "Data driven item restriction library based on Arc Lib.",
        slug: "item-restrictions",
        curseForgeSlug: "mc-mods/item-restrictions",
        modrinthSlug: "mod/item-restrictions",
        githubSlug: "DAQEM/ItemRestrictions",
    },
    grieflogger: {
        name: "Grief Logger",
        description:
            "A fast mod that uses SQLite or MySQL to log player interactions.",
        slug: "grieflogger",
        curseForgeSlug: "mod-mods/grieflogger",
        modrinthSlug: "mod/grieflogger",
        githubSlug: "DAQEM/GriefLogger",
    },
    // challenges: {
    //     name: "Challenges",
    //     description: "A library mod that adds challenges to Minecraft.",
    //     slug: "challenges",
    //     curseForgeSlug: "mc-mods/challenges",
    //     modrinthSlug: "mod/challenges",
    //     githubSlug: "DAQEM/Challenges",
    // },
    arc: {
        name: "Arc Lib",
        description: "Data driven action, reward, condition library.",
        slug: "arc",
        curseForgeSlug: "mc-mods/arc",
        modrinthSlug: "mod/arc",
        githubSlug: "DAQEM/ArcLib",
    },
    // questlines: {
    //     name: "Questlines",
    //     description: "Adds data-driven quest lines to the game.",
    //     slug: "questlines",
    //     curseForgeSlug: "mc-mods/questlines",
    //     modrinthSlug: "mod/questlines",
    //     githubSlug: "DAQEM/Questlines",
    // },
    jobsplus: {
        name: "Jobs+",
        description:
            "Adds 10 jobs to Minecraft. You can now add your own jobs!",
        slug: "jobsplus",
        curseForgeSlug: "mc-mods/jobs-remastered",
        modrinthSlug: "mod/jobs-remastered",
        githubSlug: "DAQEM/JobsPlusRemastered",
    },
    knot: {
        name: "Knot",
        description:
            "A lightweight unified API tying Fabric and NeoForge together.",
        slug: "knot",
        curseForgeSlug: "mc-mods/knot",
        modrinthSlug: "mod/knot",
        githubSlug: "DAQEM/Knot",
    },
    "tiny-mob-farm-remastered": {
        name: "Tiny Mob Farm Remastered",
        description:
            "Single-block size mob farms that makes mob farming neater and easier.",
        slug: "tiny-mob-farm-remastered",
        curseForgeSlug: "mc-mods/tiny-mob-farm-remastered",
        modrinthSlug: "mod/tiny-mob-farm-remastered",
        githubSlug: "DAQEM/TinyMobFarmRemastered",
    },
    necessities: {
        name: "Necessities",
        description:
            "Essentials like teleportation, time, weather, nicknames, and more.",
        slug: "necessities",
        curseForgeSlug: "mc-mods/necessities",
        modrinthSlug: "mod/necessities",
        githubSlug: "DAQEM/Necessities",
    },
    "yaml-config": {
        name: "YAML Config",
        description: "Config library with GUI based on the YAML format.",
        slug: "yaml-config",
        curseForgeSlug: "mc-mods/yaml-config",
        modrinthSlug: "mod/yaml-config",
        githubSlug: "DAQEM/YAMLConfig",
    },
    "ui-lib": {
        name: "UI Lib",
        description: "A user interface library for Minecraft modding.",
        slug: "ui-lib",
        curseForgeSlug: "mc-mods/ui",
        modrinthSlug: "mod/ui-lib",
        githubSlug: "DAQEM/UILib",
    },
    "x-life": {
        name: "X-Life",
        description: "Health mod for the X Life SMP series.",
        slug: "x-life",
        curseForgeSlug: "mc-mods/x-life-health-mod",
        modrinthSlug: "mod/x-life-health-mod",
        githubSlug: "DAQEM/X-LifeMod",
    },
};
export const projects: Project[] = Object.values(projectsBySlug);
