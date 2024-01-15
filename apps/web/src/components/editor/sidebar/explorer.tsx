import type { FileTreeDataProp } from "@/types";
import * as Icons from "@repo/ui/icons";
import FileTree from "@/components/editor/sidebar/file-tree";

import data from "@/lib/data";

export default function Explorer() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-sm uppercase">Explorer</h1>
        <Icons.MoreHorizontal className="h-5 w-5 cursor-pointer rounded-sm hover:bg-blueGray" />
      </div>
      <FileTree data={data as FileTreeDataProp} />
    </div>
  );
}
