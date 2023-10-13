import { Metadata } from "next";

import SectionHeader from "@/components/section-header";
import DashboardHeader from "@/components/dashboard-header";
import WorkspaceCardLg from "@/components/workspace-card-lg";

export const metadata: Metadata = {
  title: "Home",
  description: "Dashboard",
};
export default function Home() {
  return (
    <>
      <DashboardHeader
        title={"Welcome Back!"}
        desc={"Collaborate with your team, and organize your workspaces."}
      />
      <SectionHeader
        icon={{ name: "layout-dashboard" }}
        title="Quick Actions"
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
    </>
  );
}
