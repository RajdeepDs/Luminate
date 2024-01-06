import React from "react";
import FileTreeNode from "@/components/editor/sidebar/file-tree-node";
import { FileTreeDataProp } from "@/types";

interface FileTreeProps {
  data: FileTreeDataProp;
}

const FileTree: React.FC<FileTreeProps> = ({ data }) => {
  return (
    <div className="flex w-full flex-col">
      <FileTreeNode key={data.id} node={data} />
    </div>
  );
};

export default FileTree;
