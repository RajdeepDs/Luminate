"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";

import { Icons } from "./icon";
import { GET_USER_AVATAR } from "@/graphql/Queries";
import { LOGOUT_MUTATION } from "@/graphql/Mutations";

export default function AvatarMenu() {
  const { data } = useQuery(GET_USER_AVATAR);
  const { user } = data || {};
  const { avatar, username, email } = user || {};
  const route = useRouter();

  React.useEffect(() => {
    const handleKeyboardShortcut = (e: KeyboardEvent) => {
      if (e.key === "u" && (e.metaKey || e.ctrlKey) && e.shiftKey) {
        e.preventDefault();
        route.push("/settings/profile");
      }
      if (e.key === "p" && (e.metaKey || e.ctrlKey) && e.shiftKey) {
        e.preventDefault();
        route.push("/workspace");
      }
      if (e.key === "h" && (e.metaKey || e.ctrlKey) && e.shiftKey) {
        e.preventDefault();
        route.push("/");
      }
    };
    document.removeEventListener("keydown", handleKeyboardShortcut);
    document.addEventListener("keydown", handleKeyboardShortcut);
    return () =>
      document.removeEventListener("keydown", handleKeyboardShortcut);
  });

  const [logout] = useMutation(LOGOUT_MUTATION);

  function handleSignOut() {
    logout();
    localStorage.removeItem("token");
    route.push("/sign-in");
  }
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          {avatar && (
            <Image
              src={avatar}
              alt="avatar"
              width={32}
              height={32}
              className="rounded-full"
              priority={true}
            />
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="flex items-center gap-2">
            <Image
              src={avatar}
              alt="avatar"
              width={32}
              height={32}
              className="rounded-full"
              // priority={true}
            />
            <div className="flex-col">
              <p>{username}</p>
              <p>{email}</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link href={"/"}>
              <DropdownMenuItem>
                {/* <Icons.home className="mr-2 h-5 w-5" /> */}
                Home
                <DropdownMenuShortcut>⇧⌘H</DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
            <Link href={"/workspace"}>
              <DropdownMenuItem>
                {/* <Icons.workspace className="mr-2 h-5 w-5" /> */}
                Workspace
                <DropdownMenuShortcut>⇧⌘W</DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem disabled>
              {/* <Icons.github className="mr-2 h-5 w-5" /> */}
              GitHub Space
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link href={"/settings/profile"}>
              <DropdownMenuItem>
                {/* <Icons.profile className="mr-2 h-5 w-5" /> */}
                Profile
                <DropdownMenuShortcut>⇧⌘U</DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem disabled>
              {/* <Icons.integration className="mr-2 h-5 w-5" /> */}
              Integration
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem disabled>
              {/* <Icons.settings className="mr-2 h-5 w-5" /> */}
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              {/* <Icons.billing className="mr-2 h-5 w-5" /> */}
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              {/* <Icons.blogs className="mr-2 h-5 w-5" /> */}
              Blogs
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleSignOut}>
            <Icons.logout className="mr-2 h-5 w-5" />
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
