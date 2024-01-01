"use client";

import { RootState } from "@/redux/store";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import dummyData from "@/lib/data";

const Editor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export default function CodeEditor() {
  const editorRef = useRef();

  function handleEditorWillMount(monaco: any) {
    monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
  }

  function handleEditorDidMount(editor: any, monaco: any) {
    // Store the Monaco instance in the ref for further usage
    editorRef.current = editor;
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
  }

  const { openFiles, activeFile } = useSelector(
    (state: RootState) => state.root.files,
  );
  const active = openFiles.find((file) => file.id === activeFile);

  if (active) {
    console.log("Active file:", active.path);

    const file = dummyData.children?.find((f) => f.name === active.path);
    console.log("File:", file);
  }

  return (
    <>
      <Editor
        // height="90vh"
        defaultLanguage="typescript"
        defaultValue="// some comment"
        beforeMount={handleEditorWillMount}
        onMount={handleEditorDidMount}
      />
    </>
  );
}
