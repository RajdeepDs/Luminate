import EditorHeader from "@/components/editor/editor-header";
import EditorPanels from "@/components/editor/editor-panels";

export default function EditorPage() {
  return (
    <div className="flex h-screen flex-col">
      <EditorHeader />
      <div className="flex-1">
        <EditorPanels />
      </div>
    </div>
  );
}
