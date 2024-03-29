import React from "react";
import * as Icons from "@repo/ui/icons";
import type { FileTreeDataProp } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { openFile } from "@/redux/actions/fileActions";

interface FileTreeNodeProps {
  node: FileTreeDataProp;
}

interface File {
  id: string;
  name: string;
  path: string;
  type: "file";
  language?: string;
  content?: string;
}

const FileTreeNode = ({ node }: FileTreeNodeProps) => {
  const dispatch = useDispatch();
  const { openFiles, activeFile } = useSelector(
    (state: RootState) => state.root.files
  );
  const [collapsed, setCollapsed] = React.useState<boolean>(
    node.isCollapsed || false
  );

  const folderIcon = collapsed ? (
    <div className="flex items-center gap-x-2">
      <Icons.ChevronRight className="h-4 w-4 text-white/85" />
      <Icons.Folder className="h-4 w-4 fill-white text-white" />
    </div>
  ) : (
    <div className="flex items-center gap-x-2">
      <Icons.ChevronDown className="h-4 w-4 text-white/85" />
      <Icons.Folder className="h-4 w-4 fill-white text-white" />
    </div>
  );

  const handleClick = () => {
    if (node.type === "folder") {
      setCollapsed(!collapsed);
    }
    if (node.type === "file") {
      const file: File = {
        id: node.id,
        name: node.name,
        path: node.path,
        type: "file",
        language: node.language,
        content: node.content,
      };
      if (
        openFiles.find((openFile: FileTreeDataProp) => openFile.id === file.id)
      ) {
        console.log("File already open!");
      } else {
        dispatch(openFile(file));
      }
    }
  };

  const renderTree = (node: FileTreeDataProp) => {
    return (
      <div className={`tree-node${node.type === "folder" ? "folder" : "file"}`}>
        <div
          className="flex w-full cursor-pointer items-center gap-x-1 text-white/50 hover:text-white"
          onClick={() => {
            handleClick();
          }}
        >
          {node.type === "folder" && <span className="">{folderIcon}</span>}
          {node.type !== "folder" && <span className="pl-5 text-gray">◎</span>}
          <span className="select-none font-light">{node.name}</span>
        </div>
        {node.type === "folder" && !collapsed && (
          <div className="pl-3">
            {node.children
              ?.filter((child) => child.type === "folder")
              .map((child) => <FileTreeNode key={child.id} node={child} />)}
          </div>
        )}
        {node.type === "folder" && !collapsed && (
          <div className="pl-[18px]">
            {node.children
              ?.filter((child) => child.type === "file")
              .map((child) => <FileTreeNode key={child.id} node={child} />)}
          </div>
        )}
      </div>
    );
  };

  return renderTree(node);
};
export default FileTreeNode;
