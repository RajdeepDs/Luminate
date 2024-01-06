"use client";

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@repo/ui";
import CodePanel from "@/components/editor/code/code-panel";
import EditorSidebar from "@/components/editor/sidebar/editor-sidebar";
import TerminalPanel from "@/components/editor/terminal/terminal-panel";

export default function EditorPanels() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={15}>
        <EditorSidebar />
      </ResizablePanel>
      <ResizableHandle className="" />
      <ResizablePanel defaultSize={85}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={70}>
            <CodePanel />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={30}>
            <TerminalPanel />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
