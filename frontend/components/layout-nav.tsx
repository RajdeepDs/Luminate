"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

import SidebarMenu from "./sidebar-menu";
import { routeTitles } from "@/config/page-titles";

export default function LayoutNav() {
  const pathname = usePathname(); // Current Path of the page
  const pageTitle =
    routeTitles.find((route) => route.path === pathname)?.title || "Luminate"; // If the current path is not found in the routeTitles array, then the title will be "Luminate"
  return (
    <div className="flex items-center gap-3">
      <SidebarMenu />
      <Image src={"/logo.svg"} width={32} height={32} alt="logo" />
      <h1 className="text-xl font-semibold">{pageTitle}</h1>
    </div>
  );
}
