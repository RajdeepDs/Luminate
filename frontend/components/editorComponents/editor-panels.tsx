"use client";

import dynamic from "next/dynamic";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import EditorSidebar from "./editor-sidebar";
import CodeEditor from "./code-editor";

const Terminal = dynamic(() => import("./terminal"), { ssr: false });

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
            <CodeEditor />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={30}>
            <Terminal />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
