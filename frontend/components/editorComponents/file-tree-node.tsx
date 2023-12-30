import React from "react";
import { Icons } from "../icon";

interface FileTreeNodeProps {
  path: string;
  name: string;
  isFolder: boolean | undefined;
  isCollapsed: boolean | undefined;
  onClick: () => void;
  children: React.ReactNode;
}

const FileTreeNode = ({
  path,
  name,
  isFolder,
  isCollapsed,
  onClick,
  children,
}: FileTreeNodeProps) => {
  const folderIcon = isCollapsed ? (
    <Icons.chevronRight className="h-4 w-4" />
  ) : (
    <Icons.chevronDown className="h-4 w-4" />
  );

  const handleFileClick = () => {
    if (!isFolder) {
      console.log(path);
    }
  };

  return (
    <div className={`tree-node ${isFolder ? "folder" : "file"}`}>
      <div
        className="flex cursor-pointer items-center gap-x-1"
        onClick={onClick}
      >
        {isFolder && <span className="">{folderIcon}</span>}
        {!isFolder && <span className="ml-5">◎</span>}
        <span onClick={handleFileClick}>{name}</span>
      </div>
      {children}
    </div>
  );
};

export default FileTreeNode;
