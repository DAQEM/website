import { useEffect, useRef, useState } from "react";
import {
    Panel,
    PanelGroup,
    PanelResizeHandle,
    ImperativePanelGroupHandle,
} from "react-resizable-panels";
import GeneratorContent from "./content";
import GeneratorSidebar from "./sidebar";
import { GeneratorMenuBar } from "./menu-bar";
import { GeneratorProject } from "./types";
import {
    getProjects,
    getLastActiveProjectName,
    setLastActiveProjectName,
    getLastSelectedObjectId,
    setLastSelectedObjectId,
} from "./storage/project-storage";

export default function Generator() {
    const [currentProject, setCurrentProject] =
        useState<GeneratorProject | null>(null);
    const [selectedObjectId, setSelectedObjectId] = useState<string | null>(
        null
    );
    const panelRef = useRef<ImperativePanelGroupHandle>(null);

    useEffect(() => {
        const lastActive = getLastActiveProjectName();
        if (lastActive) {
            const projects = getProjects();
            const found = projects.find((p) => p.name === lastActive);
            if (found) {
                setCurrentProject(found);
                const lastSelected = getLastSelectedObjectId(found.name);
                if (lastSelected) setSelectedObjectId(lastSelected);
            }
        }
    }, []);

    const handleProjectLoaded = (project: GeneratorProject | null) => {
        setCurrentProject(project);
        if (project) {
            setLastActiveProjectName(project.name);
            const lastSelected = getLastSelectedObjectId(project.name);
            if (lastSelected) setSelectedObjectId(lastSelected);
        }
    };

    const handleSelectObject = (objectId: string | null) => {
        setSelectedObjectId(objectId);
        if (currentProject && objectId) {
            setLastSelectedObjectId(currentProject.name, objectId);
        }
    };

    const handleResetLayout = () => {
        const panelGroup = panelRef.current;
        if (panelGroup) {
            panelGroup.setLayout([25, 75]);
        }
    };

    return (
        <div
            id="generator-root"
            className="flex flex-col !h-[calc(100vh-80px)] bg-background"
        >
            <GeneratorMenuBar
                currentProject={currentProject}
                onProjectLoaded={handleProjectLoaded}
                onResetLayout={handleResetLayout}
            />

            {currentProject ? (
                <div className="flex-1 overflow-hidden">
                    <PanelGroup
                        ref={panelRef}
                        direction="horizontal"
                        autoSaveId="generator-layout"
                        className="h-full w-full"
                    >
                        <Panel defaultSize={25} minSize={15}>
                            <GeneratorSidebar
                                currentProject={currentProject}
                                selectedObjectId={selectedObjectId}
                                onUpdate={handleProjectLoaded}
                                onSelectObject={handleSelectObject}
                            />
                        </Panel>

                        <PanelResizeHandle className="w-1 bg-border hover:bg-primary transition-colors" />

                        <Panel minSize={50}>
                            <GeneratorContent
                                currentProject={currentProject}
                                selectedObjectId={selectedObjectId}
                                onUpdateProject={handleProjectLoaded}
                            />
                        </Panel>
                    </PanelGroup>
                </div>
            ) : (
                <div className="flex-1 flex items-center justify-center text-muted-foreground">
                    No project loaded. Use the "File" menu to create or open a
                    project.
                </div>
            )}
        </div>
    );
}
