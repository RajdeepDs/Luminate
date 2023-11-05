"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { SettingsNavigation } from "@/types";

interface SettingsNavProps {
  items: SettingsNavigation[];
}

export default function SettingsNav({ items }: SettingsNavProps) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="mt-6 grid items-start gap-2 ">
      {items.map((item, index) => {
        return (
          item.href && (
            <Link key={index} href={item.disabled ? "/" : item.href}>
              <span
                className={cn(
                  "hover:bg-muted group flex items-center rounded-md px-3 py-2 text-base font-medium text-gray focus-within:text-white",
                  path === item.href
                    ? " bg-gray/20 text-white"
                    : "text-gray/50",
                  item.disabled && "cursor-not-allowed opacity-80",
                )}
              >
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}
