import { useState } from "react";
import FileTreeNode from "./file-tree-node";

interface FileTreeData {
  name: string;
  path: string;
  content?: string;
  children?: FileTreeData[] | undefined;
}

const data: FileTreeData = {
  name: "src",
  path: "src",
  children: [
    {
      name: "components",
      path: "src/components",
      children: [
        {
          name: "App.js",
          path: "src/components/App.js",
          content: "const x = 10;",
        },
        {
          name: "FileTree.js",
          path: "src/components/FileTree.js",
          content: "const x = 20;",
        },
        {
          name: "CodeEditor.js",
          path: "src/components/CodeEditor.js",
          content: "const x = 30;",
        },
      ],
    },
    {
      name: "utils",
      path: "src/utils",
      children: [{ name: "utils.js", path: "src/utils/utils.js" }],
    },
    { name: "index.js", path: "src/index.js" },
  ],
};

export default function FileTree() {
  const [collapsedFolders, setCollapsedFolders] = useState<{
    [key: string]: boolean;
  }>({});

  const handleFolderClick = (folderPath: string) => {
    setCollapsedFolders({
      ...collapsedFolders,
      [folderPath]: !collapsedFolders[folderPath],
    });
  };

  const renderTreeNode = (node: FileTreeData) => {
    const { children, path } = node;
    const isFolder = children && children.length > 0;
    const isCollapsed = collapsedFolders[path];

    return (
      <FileTreeNode
        key={node.path}
        path={node.path}
        name={node.name}
        content={node.content}
        isFolder={isFolder}
        isCollapsed={isCollapsed}
        onClick={() => isFolder && handleFolderClick(node.path)}
      >
        {isFolder && !isCollapsed && children?.map(renderTreeNode)}
      </FileTreeNode>
    );
  };
  return <div className="file-tree">{data.children?.map(renderTreeNode)}</div>;
}
