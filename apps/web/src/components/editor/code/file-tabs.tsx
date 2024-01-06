"use client";
import { useDispatch, useSelector } from "react-redux";
import { openFile, activateFile, closeFile } from "@/redux/actions/fileActions";
import { RootState } from "@/redux/store";
import { Icons } from "@repo/ui/icons";

interface FileProps {
  id: string;
  name: string;
  type: "file";
  path: string;
}

export default function FileTabs() {
  const dispatch = useDispatch();
  const { openFiles, activeFile } = useSelector(
    (state: RootState) => (state as any).root.files
  );
  const handleFileClick = (fileId: string) => {
    dispatch(activateFile(fileId));
  };

  const handleFileClose = (fileId: string) => {
    dispatch(closeFile(fileId));
  };

  const handleNewFile = () => {
    const newFile: FileProps = {
      id: `file_${Math.random().toString(36).substring(7)}`,
      name: `Untitled File`,
      path: "",
      type: "file",
    };
    dispatch(openFile(newFile));
  };
  return (
    <div className="flex">
      {openFiles.map((file: FileProps) => (
        <div
          key={file.id}
          className={`${
            file.id === activeFile ? "bg-blueGray/80" : "hover:bg-blueGray/30"
          } flex cursor-pointer items-center gap-1 rounded-sm bg-[#0C0C26] px-2 py-1 `}
          onClick={() => handleFileClick(file.id)}
        >
          {file.name}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleFileClose(file.id);
            }}
          >
            <Icons.close className="h-3 w-3 cursor-pointer rounded-sm hover:bg-blueGray" />
          </button>
        </div>
      ))}
      <button onClick={handleNewFile}>
        <Icons.plus className="h-5 w-5 cursor-pointer rounded-sm p-1 hover:bg-blueGray" />
      </button>
    </div>
  );
}
