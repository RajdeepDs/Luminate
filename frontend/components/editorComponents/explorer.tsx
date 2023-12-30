import { Icons } from "../icon";
import FileTree from "./file-tree";

export default function Explorer() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-sm uppercase">Explorer</h1>
        <Icons.more className="h-5 w-5 rounded-sm hover:bg-blueGray" />
      </div>
      <FileTree />
    </div>
  );
}
