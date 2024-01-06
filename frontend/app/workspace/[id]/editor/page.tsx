import EditorHeader from "@/components/editorComponents/editor-header";
import EditorPanels from "@/components/editorComponents/editor-panels";

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
