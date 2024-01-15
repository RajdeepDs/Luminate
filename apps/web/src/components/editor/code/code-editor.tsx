"use client";

import Image from "next/image";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

import type { RootState } from "@/redux/store";

import { useMonaco } from "@monaco-editor/react";
import type { FileTreeDataProp } from "@/types";

const Editor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export default function CodeEditor() {
  const monaco = useMonaco();
  const { openFiles, activeFile } = useSelector(
    (state: RootState) => state.root.files
  );
  const active = openFiles.find(
    (file: FileTreeDataProp) => file.id === activeFile
  );
  const value = active?.content;

  useEffect(() => {
    monaco?.languages.typescript.javascriptDefaults.setEagerModelSync(true);

    if (monaco) {
      monaco.editor.defineTheme("Luminate", {
        base: "vs-dark",
        inherit: true,
        rules: [
          {
            token: "identifier",
            foreground: "9CDCFE",
          },
          {
            token: "identifier.function",
            foreground: "DCDCAA",
          },
          {
            token: "type",
            foreground: "1AAFB0",
          },
        ],
        colors: {
          "editor.background": "#0C0C26",
        },
      });
      monaco.editor.setTheme("Luminate");
    } else {
      console.log("No Monaco");
    }
  }, [monaco]);

  if (!active)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex-1" />
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/word-logo.svg"
              width={200}
              height={200}
              alt="logo"
              className="opacity-50 grayscale"
            />
            <p className="mt-2 text-lg font-medium text-blueGray">
              Open a file to start coding!
            </p>
          </div>
        </div>
        <div className="flex-1" />{" "}
      </div>
    );
  return (
    <>
      <Editor
        theme="Luminate"
        path={active?.path || "untitled"}
        defaultLanguage={active?.language || "javascript"}
        defaultValue={value || "// Start coding here..."}
      />
    </>
  );
}
