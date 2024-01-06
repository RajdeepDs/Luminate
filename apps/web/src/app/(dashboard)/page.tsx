import { Metadata } from "next";

import WelcomeMessage from "@/components/dashboard/welcome-message";
import PinnedWorkspaces from "@/components/dashboard/pinned-workspaces";

export const metadata: Metadata = {
  title: "Dashboard | Luminate",
  description: "Dashboard page for Luminate",
};

export default function DashboardPage() {
  const welcomeMessages = [
    "Luminate is here to empower your coding adventures.",
    "Your favourite workspaces are waiting for you.",
  ];

  return (
    <div>
      <WelcomeMessage messages={welcomeMessages} />
      <div className="container">
        <div className="mt-9">
          <PinnedWorkspaces />
        </div>
        <div className="mt-12">
          <h1 className="text-lg font-semibold">Activity Feed</h1>
          <div className="mx-2 flex items-center">
            <h1>December</h1>
            <span className="mx-2 h-[1px] w-full bg-blueGray"></span>
          </div>
          <div className="mt-6 text-center font-thin">
            <p>You have no activity yet for this period.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
