"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import * as Icons from "@repo/ui/icons";
import { cn } from "@repo/ui/utils";
import type { SidebarNavItem } from "@/types";

interface SidebarMenuProps {
  items: SidebarNavItem[] | undefined;
}
export default function SettingsSidebar({ items }: SidebarMenuProps) {
  const path = usePathname();
  if (!items?.length) {
    return null;
  }
  return (
    <div className="grid items-start gap-y-2">
      {items.map((item) => {
        const Icon = Icons[item.icon || "Plus"];
        return (
          item.href && (
            <Link href={item.disabled ? "/" : item.href} key={item.id}>
              <span
                className={cn(
                  "flex items-center rounded px-2 py-1 transition-colors duration-300 ease-in-out",
                  path === item.href
                    ? "bg-blueGray/50"
                    : "text-gray hover:text-white",
                  item.disabled &&
                    "cursor-not-allowed opacity-80 hover:text-gray"
                )}
              >
                <Icon className="mr-5 h-5 w-5" />
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </div>
  );
}
