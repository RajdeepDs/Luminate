import CodeEditor from "@/components/editor/code/code-editor";
import FileTabs from "@/components/editor/code/file-tabs";

export default function CodePanel() {
  return (
    <div className="h-full">
      <FileTabs />
      <CodeEditor />
    </div>
  );
}
