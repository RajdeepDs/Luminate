"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

import { RootState } from "@/redux/store";

import { useMonaco } from "@monaco-editor/react";

const Editor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export default function CodeEditor() {
  const monaco = useMonaco();
  const { openFiles, activeFile } = useSelector(
    (state: RootState) => state.root.files,
  );
  const active = openFiles.find((file) => file.id === activeFile);
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

  return (
    <>
      <Editor
        theme={"Luminate"}
        path={active?.path || "untitled"}
        defaultLanguage={active?.language || "javascript"}
        defaultValue={value || "// Start coding here..."}
      />
    </>
  );
}
