import EditorHeader from "@/components/editorComponents/editor-header";
import EditorSidebar from "@/components/editorComponents/editor-sidebar";

export default function EditorPage() {
  return (
    <div className="">
      <EditorHeader />
      <div className="flex">
        <aside className="w-1/6">
          <EditorSidebar />
        </aside>
        <main>Main Editor</main>
      </div>
    </div>
  );
}
