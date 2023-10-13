import { Metadata } from "next";

import AllWorkspaces from "@/components/all-workspaces";
import SectionHeader from "@/components/section-header";
import DashboardHeader from "@/components/dashboard-header";
import PinnedWorkspace from "@/components/pinned-workspace";
import WorkspaceCardLg from "@/components/workspace-card-lg";

export const metadata: Metadata = {
  title: "Workspace",
  description: "Workspace",
};

export default function WorkspacePage() {
  return (
    <>
      <DashboardHeader
        title={"My Workspace"}
        desc={"Collaborate with your team, and organize your workspaces."}
      />
      <SectionHeader
        title={"Quick Actions"}
        icon={{ name: "layout-dashboard" }}
      />
      <div className="mt-5 flex flex-col gap-4 md:flex-row">
        <WorkspaceCardLg
          title="New Workspace"
          description={
            "Start a fresh coding environment tailored to your project needs. Organize files, folders, and set your preferred configurations."
          }
          icon={{ name: "plus" }}
        />
        <WorkspaceCardLg
          title="Instant Code"
          description={
            "Dive straight into coding without any setup. Ideal for quick tests, experiments, or drafts. Save later if you want to."
          }
          icon={{ name: "zap" }}
        />
      </div>
      <SectionHeader title={"Pinned Workspaces"} icon={{ name: "bookmark" }} />
      <div className="mt-5">
        <PinnedWorkspace />
      </div>
      <SectionHeader title={"All Workspaces"} icon={{ name: "codesandbox" }} />
      <div className="mt-5">
        <AllWorkspaces />
      </div>
    </>
  );
}
