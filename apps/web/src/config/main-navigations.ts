import type { DashboardConfig } from "@/types";

export const sidebarConfig: DashboardConfig = {
  sidebarNav: [
    {
      id: 1,
      title: "Home",
      href: "/",
      icon: "Home",
    },
    {
      id: 2,
      title: "Workspace",
      href: "/workspace",
      icon: "Box",
    },
    {
      id: 3,
      title: "GitHub",
      href: "/github",
      icon: "Github",
    },
  ],
};
