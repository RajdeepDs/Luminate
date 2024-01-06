"use client";
import React from "react";
import { useState } from "react";

import { Icons } from "./icon";
import { Button } from "./ui/button";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export default function CommandMenu() {
  const [open, setOpen] = useState(false);
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "K" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);
  return (
    <>
      <Button
        variant={"outline"}
        className="items-center text-gray"
        onClick={() => setOpen(true)}
      >
        <Icons.search className="mr-2 h-5 w-5" />{" "}
        <Icons.command className="mr-1 h-4 w-4" /> K
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type command or search" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <CommandItem>
              <Icons.add className="mr-2 h-5 w-5" /> New Workspace
              <CommandShortcut>⌘ N</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Recent Workspaces">
            <CommandItem>Next js</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
