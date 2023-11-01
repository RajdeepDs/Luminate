"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { MainNavigation } from "@/types";

interface MainNavProps {
  items: MainNavigation[];
}

export default function MainNav({ items }: MainNavProps) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="flex space-x-6">
      {items.map((item, index) => {
        return (
          item.href && (
            <Link key={index} href={item.disabled ? "/" : item.href}>
              <span
                className={cn(
                  "px-1 py-2 text-xl font-semibold text-gray hover:text-white",
                  path === item.href
                    ? "border-b-2 border-purple-light text-white"
                    : "",
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
