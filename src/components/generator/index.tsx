import { useRef } from "react";
import {
    ImperativePanelGroupHandle,
    Panel,
    PanelGroup,
    PanelResizeHandle,
} from "react-resizable-panels";
import { GeneratorProvider, useGenerator } from "./application/generator-context";
import { GeneratorContentArea } from "./ui/content/content-area";
import { GeneratorMenuBar } from "./ui/menu/menu-bar";
import { GeneratorSidebar } from "./ui/sidebar/sidebar";

const GeneratorLayout = () => {
    const { currentProject } = useGenerator();
    const panelRef = useRef<ImperativePanelGroupHandle>(null);

    const handleResetLayout = () => {
        panelRef.current?.setLayout([25, 75]);
    };

    return (
        <div id="generator-root" className="flex flex-col !h-[calc(100vh-80px)] bg-background">
            <GeneratorMenuBar onResetLayout={handleResetLayout} />

            {currentProject ? (
                <div className="flex-1 overflow-hidden">
                    <PanelGroup
                        ref={panelRef}
                        direction="horizontal"
                        autoSaveId="generator-layout"
                        className="h-full w-full"
                    >
                        <Panel defaultSize={25} minSize={15}>
                            <GeneratorSidebar />
                        </Panel>

                        <PanelResizeHandle className="w-1 bg-border hover:bg-primary transition-colors" />

                        <Panel minSize={50}>
                            <GeneratorContentArea />
                        </Panel>
                    </PanelGroup>
                </div>
            ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground gap-2">
                    <h1 className="text-2xl font-bold">Welcome to Generator</h1>
                    <p>Create a new project or open an existing one from the "File" menu.</p>
                </div>
            )}
        </div>
    );
};

export default function Generator() {
    return (
        <GeneratorProvider>
            <GeneratorLayout />
        </GeneratorProvider>
    );
}