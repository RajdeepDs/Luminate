import CodeEditor from "./code-editor";
import FileTabs from "./file-tabs";

export default function CodePanel() {
  return (
    <div className="h-full">
      <FileTabs />
      <CodeEditor />
    </div>
  );
}
