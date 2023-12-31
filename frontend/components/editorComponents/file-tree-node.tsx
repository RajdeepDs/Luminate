"use client";
import React from "react";
import { Icons } from "../icon";
import { useDispatch, useSelector } from "react-redux";
import { openTab } from "@/redux/actions/tabActions";
import { RootState } from "@/redux/store";

interface TabProps {
  id: string;
  title: string;
  content?: string;
}

interface FileTreeNodeProps {
  path: string;
  name: string;
  content?: string;
  isFolder: boolean | undefined;
  isCollapsed: boolean | undefined;
  onClick: () => void;
  children: React.ReactNode;
}

const FileTreeNode = ({
  path,
  name,
  content,
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
  const dispatch = useDispatch();
  const { openTabs, activeTab } = useSelector(
    (state: RootState) => state.root.tabs,
  );
  const handleFileClick = () => {
    if (!isFolder) {
      console.log(path);
      const isFileOpen = openTabs.some((tab) => tab.id === path);
      if (!isFileOpen) {
        const newTab: TabProps = {
          id: path,
          title: name,
          content: content,
        };
        dispatch(openTab(newTab));
      }
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
