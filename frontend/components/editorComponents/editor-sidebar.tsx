"use client";
import { useState } from "react";

import { Icons } from "../icon";
import { cn } from "@/lib/utils";

import Explorer from "./explorer";
import Debugger from "./debugger";
import VersionControl from "./version-control";

export default function EditorSidebar() {
  const [activeTab, setActiveTab] = useState("explorer");
  const renderSection = () => {
    switch (activeTab) {
      case "explorer":
        return <Explorer />;
      case "version-control":
        return <VersionControl />;
      case "debugger":
        return <Debugger />;
      default:
        return null;
    }
  };
  return (
    <div className="flex flex-col gap-y-2">
      <nav className="flex items-center gap-4 px-3">
        <button
          className={cn(
            "rounded-md border border-background p-1 hover:border hover:border-blueGray",
            activeTab === "explorer" && "border-blueGray",
          )}
          onClick={() => setActiveTab("explorer")}
        >
          <Icons.file className="h-5 w-5" />
        </button>
        <button
          className={cn(
            "rounded-md border border-background p-1 hover:border hover:border-blueGray",
            activeTab === "version-control" && "border-blueGray",
          )}
          onClick={() => setActiveTab("version-control")}
        >
          <Icons.git className="h-5 w-5" />
        </button>
        <button
          className={cn(
            "rounded-md border border-background p-1 hover:border hover:border-blueGray",
            activeTab === "debugger" && "border-blueGray",
          )}
          onClick={() => setActiveTab("debugger")}
        >
          <Icons.bug className="h-5 w-5" />
        </button>
      </nav>
      <main className="px-4">{renderSection()}</main>
    </div>
  );
}
