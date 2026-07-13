import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useHistory, useLocation } from "@docusaurus/router";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import CodeBlock from "../impl/code-block";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const PROJECT_MAP: Record<
    string,
    { name: string; modrinth: string; group: string; artifact: string }
> = {
    arc: {
        name: "Arc Lib",
        modrinth: "arc",
        group: "com.daqem.arc",
        artifact: "arc",
    },
    "item-restrictions": {
        name: "Item Restrictions",
        modrinth: "item-restrictions",
        group: "com.daqem.itemrestrictions",
        artifact: "itemrestrictions",
    },
    jobsplus: {
        name: "Jobs+",
        modrinth: "jobsplus",
        group: "com.daqem.jobsplus",
        artifact: "jobsplus",
    },
    knot: {
        name: "Knot",
        modrinth: "knot",
        group: "com.daqem.knot",
        artifact: "knot",
    },
    necessities: {
        name: "Necessities",
        modrinth: "necessities-mod",
        group: "com.daqem.necessities",
        artifact: "necessities",
    },
    "tiny-mob-farm-remastered": {
        name: "Tiny Mob Farm Remastered",
        modrinth: "tiny-mob-farm-remastered",
        group: "com.daqem.tinymobfarm",
        artifact: "tinymobfarm",
    },
    "ui-lib": {
        name: "UI Lib",
        modrinth: "ui-lib",
        group: "com.daqem.uilib",
        artifact: "uilib",
    },
    "yaml-config": {
        name: "YAML Config",
        modrinth: "yaml-config",
        group: "com.daqem.yamlconfig",
        artifact: "yamlconfig",
    },
};

interface ResolvedDependency {
    artifact: string;
    group: string;
    version: string;
    isArchitectury: boolean;
}

// Helper to safely get URL params on initial load (SSR safe)
const getQueryParam = (search: string, key: string, fallback: string) => {
    const params = new URLSearchParams(search);
    return params.get(key) || fallback;
};

type DependencySetupProps = {
    defaultProject?: string;
};

export default function DependencySetup({
    defaultProject,
}: DependencySetupProps) {
    const location = useLocation();
    const history = useHistory();

    // Initialize state from URL Search Params
    const [selectedProject, setSelectedProject] = useState<string>(() =>
        getQueryParam(location.search, "project", defaultProject || "arc"),
    );

    const [mcVersions, setMcVersions] = useState<string[]>([]);
    const [selectedMcVersion, setSelectedMcVersion] = useState<string>(() =>
        getQueryParam(location.search, "mc_version", ""),
    );

    const [modVersions, setModVersions] = useState<any[]>([]);
    const [selectedModVersion, setSelectedModVersion] = useState<string>(() =>
        getQueryParam(location.search, "mod_version", ""),
    );

    const [resolvedDeps, setResolvedDeps] = useState<ResolvedDependency[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const projectInfo = PROJECT_MAP[selectedProject];

    // Sync State to URL
    useEffect(() => {
        const params = new URLSearchParams();
        if (selectedProject) params.set("project", selectedProject);
        if (selectedMcVersion) params.set("mc_version", selectedMcVersion);
        if (selectedModVersion) params.set("mod_version", selectedModVersion);

        const newSearch = `?${params.toString()}`;
        if (newSearch !== location.search && newSearch !== "?") {
            history.replace({ search: params.toString() });
        }
    }, [
        selectedProject,
        selectedMcVersion,
        selectedModVersion,
        history,
        location.search,
    ]);

    // 1. Fetch MC Versions when Project changes
    useEffect(() => {
        setIsLoading(true);
        fetch(`https://api.modrinth.com/v2/project/${projectInfo.modrinth}`)
            .then((res) => res.json())
            .then((data) => {
                const versions = data.game_versions.reverse();
                setMcVersions(versions);
                if (versions.length > 0) {
                    // Only update if the current selected version isn't in the newly fetched list
                    setSelectedMcVersion((prev) =>
                        versions.includes(prev) ? prev : versions[0],
                    );
                } else {
                    setSelectedMcVersion("");
                }
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    }, [selectedProject, projectInfo.modrinth]);

    // 2. Fetch Mod Versions & Intersect with Reposilite when MC Version changes
    useEffect(() => {
        if (!selectedMcVersion) return;

        const fetchVersions = async () => {
            setIsLoading(true);
            try {
                // Fetch Modrinth versions
                const modrinthRes = await fetch(
                    `https://api.modrinth.com/v2/project/${projectInfo.modrinth}/version?game_versions=["${selectedMcVersion}"]`,
                );
                const modrinthData = await modrinthRes.json();

                // Fetch Reposilite versions
                const repoRes = await fetch(
                    `https://maven.daqem.com/api/maven/versions/releases/${projectInfo.group.replace(/\./g, "/")}/${projectInfo.artifact}-common`,
                );
                const repoData = await repoRes.json();
                const mavenVersions: string[] = repoData.versions || [];

                // Filter Modrinth versions to only those that exist on the Maven
                const availableVersions = modrinthData
                    .filter((v: any) =>
                        mavenVersions.includes(v.version_number),
                    )
                    .filter(
                        (v: any, index: number, self: any[]) =>
                            index ===
                            self.findIndex(
                                (t: any) =>
                                    t.version_number === v.version_number,
                            ),
                    );

                setModVersions(availableVersions);
                if (availableVersions.length > 0) {
                    // Only update if the current selected version isn't in the newly fetched list
                    setSelectedModVersion((prev) =>
                        availableVersions.some(
                            (v: any) => v.version_number === prev,
                        )
                            ? prev
                            : availableVersions[0].version_number,
                    );
                } else {
                    setSelectedModVersion("");
                    setResolvedDeps([]);
                }
            } catch (e) {
                console.error("Failed to fetch versions", e);
                setModVersions([]);
                setSelectedModVersion("");
            }
            setIsLoading(false);
        };

        fetchVersions();
    }, [selectedMcVersion, selectedProject, projectInfo]);

    // 3. Resolve Dependencies when Mod Version changes
    useEffect(() => {
        if (!selectedModVersion) return;

        const resolveDependencies = async () => {
            setIsLoading(true);
            const versionObj = modVersions.find(
                (v) => v.version_number === selectedModVersion,
            );
            if (!versionObj) return;

            const deps = versionObj.dependencies.filter(
                (d: any) => d.dependency_type === "required",
            );
            const resolved: ResolvedDependency[] = [];

            for (const dep of deps) {
                let group = "";
                let artifact = "";
                let isArchitectury = false;

                // Identify Dependency
                if (dep.project_id === "lhGA9TYQ") {
                    group = "dev.architectury";
                    artifact = "architectury";
                    isArchitectury = true;
                } else {
                    // Fetch Modrinth project to match with our DAQEM map
                    const pRes = await fetch(
                        `https://api.modrinth.com/v2/project/${dep.project_id}`,
                    );
                    const pData = await pRes.json();
                    const found = Object.values(PROJECT_MAP).find(
                        (p) => p.modrinth === pData.slug,
                    );

                    if (found) {
                        group = found.group;
                        artifact = found.artifact;
                    } else {
                        continue; // Unknown dependency, skip
                    }
                }

                // Get Version
                let depVersion = "LATEST";
                if (dep.version_id) {
                    const vRes = await fetch(
                        `https://api.modrinth.com/v2/version/${dep.version_id}`,
                    );
                    const vData = await vRes.json();
                    depVersion = vData.version_number;
                } else {
                    const pRes = await fetch(
                        `https://api.modrinth.com/v2/project/${dep.project_id}/version?game_versions=["${selectedMcVersion}"]`,
                    );
                    const pData = await pRes.json();
                    if (pData.length > 0) depVersion = pData[0].version_number;
                }

                // Strip anything after the '+' sign (e.g. 13.0.0+fabric -> 13.0.0)
                depVersion = depVersion.split("+")[0];

                resolved.push({
                    group,
                    artifact,
                    version: depVersion,
                    isArchitectury,
                });
            }

            setResolvedDeps(resolved);
            setIsLoading(false);
        };

        resolveDependencies();
    }, [selectedModVersion, modVersions, selectedMcVersion]);

    // Generators
    const generateGradleProperties = () => {
        const cleanModVersion = selectedModVersion.split("+")[0];
        let props = `${projectInfo.artifact}_version=${cleanModVersion}\n`;
        resolvedDeps.forEach((dep) => {
            props += `${dep.artifact}_version=${dep.version}\n`;
        });
        return props.trim();
    };

    const generateGradleRepositories = () => {
        const isArchitectury = resolvedDeps.some((dep) => dep.isArchitectury);
        return `repositories {\n    maven {\n        name = "DAQEM Studios Maven"\n        url = 'https://maven.daqem.com/releases'\n    }\n${isArchitectury ? `    maven {\n        name = "Architectury Maven"\n        url = 'https://maven.architectury.dev'\n    }\n` : ""}}`;
    };

    const getArtifactSuffix = (isArch: boolean, plat: string) => {
        if (isArch && plat === "common") return ""; // Architectury common has no suffix
        return `-${plat}`; // DAQEM common is -common, fabric is -fabric, etc.
    };

    const generateBuildGradle = (plat: string) => {
        let gradle = `dependencies {\n    modImplementation "${projectInfo.group}:${projectInfo.artifact}${getArtifactSuffix(false, plat)}:\${${projectInfo.artifact}_version}"\n`;

        resolvedDeps.forEach((dep) => {
            gradle += `    modImplementation "${dep.group}:${dep.artifact}${getArtifactSuffix(dep.isArchitectury, plat)}:\${${dep.artifact}_version}"\n`;
        });
        gradle += `}`;
        return gradle;
    };

    if (isLoading) {
        return (
            <div className="absolute inset-0 z-50 bg-background/50 backdrop-blur-sm flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                <div className="flex flex-col gap-2">
                    <Label>Project</Label>
                    <Select
                        value={selectedProject}
                        onValueChange={setSelectedProject}
                    >
                        <SelectTrigger className="mc-button-primary">
                            <SelectValue placeholder="Select a project" />
                        </SelectTrigger>
                        <SelectContent>
                            {Object.entries(PROJECT_MAP).map(([key, val]) => (
                                <SelectItem key={key} value={key}>
                                    {val.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex flex-col gap-2">
                    <Label>Minecraft Version</Label>
                    <Select
                        value={selectedMcVersion}
                        onValueChange={setSelectedMcVersion}
                        disabled={mcVersions.length === 0}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select MC version" />
                        </SelectTrigger>
                        <SelectContent>
                            {mcVersions.map((v) => (
                                <SelectItem key={v} value={v}>
                                    {v}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex flex-col gap-2">
                    <Label>Mod Version</Label>
                    <Select
                        value={selectedModVersion}
                        onValueChange={setSelectedModVersion}
                        disabled={modVersions.length === 0}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select mod version" />
                        </SelectTrigger>
                        <SelectContent>
                            {modVersions.map((v) => (
                                <SelectItem
                                    key={v.version_number}
                                    value={v.version_number}
                                >
                                    {v.version_number}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {selectedModVersion ? (
                <div className="flex flex-col gap-8">
                    {/* Gradle Properties */}
                    <div className="flex flex-col gap-2">
                        <div>
                            <h3 className="mb-0">Gradle Properties</h3>
                            <p className="mb-0 text-sm text-muted-foreground">
                                Add the following version variables to your root{" "}
                                <code>gradle.properties</code> file.
                            </p>
                        </div>
                        <CodeBlock
                            language="groovy"
                            filename="gradle.properties"
                            code={generateGradleProperties()}
                        />
                    </div>

                    {/* Repositories */}
                    <div className="flex flex-col gap-2">
                        <div>
                            <h3 className="mb-0">Repositories</h3>
                            <p className="mb-0 text-sm text-muted-foreground">
                                Add the required Maven repositories to your root{" "}
                                <code>build.gradle</code> file so Gradle knows
                                where to get the dependencies from.
                            </p>
                        </div>
                        <CodeBlock
                            language="groovy"
                            filename="build.gradle"
                            code={generateGradleRepositories()}
                        />
                    </div>

                    {/* Common */}
                    <div className="flex flex-col gap-2">
                        <div>
                            <h3 className="mb-0">Common Dependencies</h3>
                            <p className="mb-0 text-sm text-muted-foreground">
                                Add these shared dependencies to your{" "}
                                <code>common/build.gradle</code> file. If you
                                are developing a mod that only targets Fabric or
                                NeoForge, you don't need these.
                            </p>
                        </div>
                        <CodeBlock
                            language="groovy"
                            filename="common/build.gradle"
                            code={generateBuildGradle("common")}
                        />
                    </div>

                    {/* Fabric */}
                    <div className="flex flex-col gap-2">
                        <div>
                            <h3 className="mb-0">Fabric Dependencies</h3>
                            <p className="mb-0 text-sm text-muted-foreground">
                                Add these Fabric-specific dependencies to your{" "}
                                <code>fabric/build.gradle</code> file. If you
                                are developing a mod that only targets NeoForge,
                                you don't need these.
                            </p>
                        </div>
                        <CodeBlock
                            language="groovy"
                            filename="fabric/build.gradle"
                            code={generateBuildGradle("fabric")}
                        />
                    </div>

                    {/* NeoForge */}
                    <div className="flex flex-col gap-2">
                        <div>
                            <h3 className="mb-0">NeoForge Dependencies</h3>
                            <p className="mb-0 text-sm text-muted-foreground">
                                Add these NeoForge-specific dependencies to your{" "}
                                <code>neoforge/build.gradle</code> file. If you
                                are developing a mod that only targets Fabric,
                                you don't need these.
                            </p>
                        </div>
                        <CodeBlock
                            language="groovy"
                            filename="neoforge/build.gradle"
                            code={generateBuildGradle("neoforge")}
                        />
                    </div>
                </div>
            ) : (
                <Card>
                    <CardHeader className="text-center">
                        <CardTitle>
                            No Maven releases found for Minecraft{" "}
                            {selectedMcVersion}.
                        </CardTitle>
                        <CardDescription>
                            This version might only be available as a snapshot
                            or hasn't been published to the DAQEM Studios Maven.
                        </CardDescription>
                    </CardHeader>
                </Card>
            )}
        </div>
    );
}
