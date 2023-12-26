"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";

const Editor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export default function CodeEditor() {
  const monacoRef = useRef(null);

  function handleEditorWillMount(monaco: any) {
    monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
  }

  function handleEditorDidMount(editor: any, monaco: any) {
    // Store the Monaco instance in the ref for further usage
    monacoRef.current = monaco;
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

  return (
    <Editor
      // height="90vh"
      defaultLanguage="typescript"
      defaultValue="// Write your code here"
      beforeMount={handleEditorWillMount}
      onMount={handleEditorDidMount}
    />
  );
}
