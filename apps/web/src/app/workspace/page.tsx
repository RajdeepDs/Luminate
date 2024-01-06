import { Metadata } from "next";

import WorkspaceList from "@/components/workspace/workspace-list";
import WelcomeMessage from "@/components/dashboard/welcome-message";
import CreateWorkspace from "@/components/workspace/create-workspace";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui";
import { Input } from "@repo/ui";
import { Separator } from "@repo/ui";
import LayoutHeader from "@/components/dashboard/header/layout-header";

export const metadata: Metadata = {
  title: "Workspace | Luminate",
  description: "Workspace page for Luminate",
};

export default function WorkspacePage() {
  const welcomeMessages = [
    "Luminate is here to empower your coding adventures.",
    "Your favourite workspaces are waiting for you.",
  ];
  return (
    <div>
      <LayoutHeader />
      <WelcomeMessage messages={welcomeMessages} />
      <div className="container">
        <div className="my-5 flex gap-4">
          <Input placeholder="Search for a workspace" />
          <Select>
            <SelectTrigger className="flex w-[180px] justify-center">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="flex w-[180px] justify-center">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="typescript">TypeScript</SelectItem>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="html">HTML</SelectItem>
              <SelectItem value="css">CSS</SelectItem>
              <SelectItem value="c">C</SelectItem>
            </SelectContent>
          </Select>
          <CreateWorkspace />
        </div>
        <Separator />
        <WorkspaceList />
      </div>
    </div>
  );
}
