"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

import SidebarMenu from "./sidebar-menu";
import { routeTitles } from "@/config/page-titles";
import { sidebarConfig } from "@/config/main-navigations";

export default function LayoutNav() {
  const pathname = usePathname();
  const currentPage =
    routeTitles.find((route) => route.path === pathname)?.title || "Luminate";

  const isSettingsPage = pathname?.startsWith("/settings");

  const pageTitle = isSettingsPage ? "Settings" : currentPage;
  return (
    <div className="flex items-center gap-3">
      <SidebarMenu items={sidebarConfig.sidebarNav} />
      <Image src={"/logo.svg"} width={32} height={32} alt="logo" />
      <h1 className="text-xl font-semibold">{pageTitle}</h1>
    </div>
  );
}
