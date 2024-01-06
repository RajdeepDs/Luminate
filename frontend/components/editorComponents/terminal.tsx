"use client";
import { useEffect, useRef } from "react";
import { Terminal } from "@xterm/xterm";
import "xterm/css/xterm.css";

export default function TerminalComponent() {
  const terminalRef = useRef(null);

  useEffect(() => {
    // Create terminal
    const terminal = new Terminal({
      theme: {
        background: "#0C0C26",
      },
    });

    // Attach terminal to DOM and then call fit
    terminal.open(terminalRef.current!);

    terminal.resize(80, 24);

    terminal.onKey((e) => {
      terminal.write(e.key);
      console.log(e);
    });

    // Clean up
    return () => {
      terminal.dispose();
    };
  }, []);
  return <div ref={terminalRef} className="custom-terminal" />;
}
