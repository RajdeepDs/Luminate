import type { Metadata } from "next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Input,
  Separator,
} from "@repo/ui";
import { WorkspaceList } from "@/components/workspace/workspace-list";
import WelcomeMessage from "@/components/dashboard/welcome-message";
import { CreateWorkspace } from "@/components/workspace/create-workspace";
import LayoutHeader from "@/components/dashboard/header/layout-header";

export const metadata: Metadata = {
  title: "Workspace | Luminate",
  description: "Workspace page for Luminate",
};

export default function WorkspacePage(): JSX.Element {
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
