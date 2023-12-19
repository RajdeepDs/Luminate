"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Icons } from "./icon";
import { cn } from "@/lib/utils";
import { SidebarNavItem } from "@/types";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "./ui/separator";

interface SidebarMenuProps {
  items: SidebarNavItem[] | undefined;
}

export default function SidebarMenu({ items }: SidebarMenuProps) {
  const path = usePathname();
  if (!items?.length) {
    return null;
  }
  return (
    <Sheet>
      <SheetTrigger className="rounded-md border border-blueGray p-2 transition-colors duration-300 ease-in-out hover:bg-blueGray/50">
        <Icons.menu className="h-4 w-4" />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader className="space-y-5">
          <SheetTitle>
            <Image src={"/logo.svg"} width={32} height={32} alt="logo" />
          </SheetTitle>
          <div className="grid items-start gap-2">
            {items.map((item) => {
              const Icon = Icons[item.icon || "plus"];
              return (
                item.href && (
                  <SheetClose asChild key={item.id}>
                    <Link href={item.disabled ? "/" : item.href}>
                      <span
                        className={cn(
                          "flex items-center rounded px-2 py-1 transition-colors duration-300 ease-in-out",
                          path === item.href
                            ? "bg-blueGray"
                            : "text-gray hover:text-white",
                          item.disabled && "cursor-not-allowed opacity-80",
                        )}
                      >
                        <Icon className="mr-5 h-5 w-5" />
                        <span>{item.title}</span>
                      </span>
                    </Link>
                  </SheetClose>
                )
              );
            })}
          </div>
          <Separator />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
