"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { SidebarNavItem } from "@/types";
import { Icons } from "@/components/icons";

interface DashboardNavProps {
  items: SidebarNavItem[];
}

export function DashboardNav({ items }: DashboardNavProps) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        const Icon = Icons[item.icon || "arrowRight"];
        return (
          item.href && (
            <Link key={index} href={item.disabled ? "/" : item.href}>
              <span
                className={cn(
                  "text-md group flex items-center rounded-md bg-gray-100/50 px-3 py-2 font-medium text-black focus-within:text-black hover:bg-gray-200",
                  path === item.href
                    ? "bg-gray-300 text-black"
                    : "text-accent-3",
                  item.disabled && "cursor-not-allowed opacity-80",
                )}
              >
                <Icon className="h-5 w-5 md:mr-5" />
                <span className="hidden md:block">{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}
