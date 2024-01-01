import React from "react";
import { Icons } from "../icon";
import { FileTreeDataProp } from "@/types";

interface FileTreeNodeProps {
  node: FileTreeDataProp;
}

const FileTreeNode = ({ node }: FileTreeNodeProps) => {
  const [collapsed, setCollapsed] = React.useState<boolean>(
    node.isCollapsed || false,
  );

  const folderIcon = collapsed ? (
    <div className="flex items-center gap-x-2">
      <Icons.chevronRight className="h-4 w-4 text-white/85" />
      <Icons.folder className="h-4 w-4 fill-white text-white" />
    </div>
  ) : (
    <div className="flex items-center gap-x-2">
      <Icons.chevronDown className="h-4 w-4 text-white/85" />
      <Icons.folder className="h-4 w-4 fill-white text-white" />
    </div>
  );

  const handleClick = () => {
    if (node.type === "folder") {
      setCollapsed(!collapsed);
    }
  };

  const renderTree = (node: FileTreeDataProp) => {
    return (
      <div className={`tree-node${node.type === "folder" ? "folder" : "file"}`}>
        <div
          className="flex w-full cursor-pointer items-center gap-x-1 text-gray hover:text-white/50"
          onClick={() => handleClick()}
        >
          {node.type === "folder" && <span className="">{folderIcon}</span>}
          {node.type !== "folder" && <span className="pl-5 text-gray">◎</span>}
          <span className="select-none font-light">{node.name}</span>
        </div>
        {node.type === "folder" && !collapsed && (
          <div className="pl-3">
            {node.children?.map((child) => (
              <FileTreeNode key={child.id} node={child} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return renderTree(node);
};
export default FileTreeNode;
