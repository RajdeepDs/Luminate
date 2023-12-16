import Image from "next/image";

import { Icons } from "@/components/icon";
import AvatarMenu from "@/components/avatar-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="border-blueGray border-b-[0.5px]">
        <nav className="mx-3 flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <button className="border-blueGray hover:bg-blueGray/50 rounded-md border p-2 transition-colors duration-300 ease-in-out">
              <Icons.menu className="h-4 w-4" />
            </button>
            <Image src={"/logo.svg"} width={32} height={32} alt="logo" />
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="border-blueGray flex items-center rounded-md border">
              <Icons.search className="mx-2 h-4 w-4" />
              <input
                className="bg-transparent text-sm text-gray outline-none"
                placeholder="Type here to search"
              />
              <span className="bg-blueGray h-8 w-[0.2px]" />
              <Tooltip>
                <TooltipTrigger>
                  <button className="hover:bg-blueGray/50 p-2 transition-colors duration-300 ease-in-out">
                    <Icons.command className="h-4 w-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Command Palette</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <span className="bg-blueGray h-8 w-[0.2px]" />
            <Tooltip>
              <TooltipTrigger>
                <button className="border-blueGray hover:bg-blueGray/50 flex gap-1 rounded-md border p-2 transition-colors duration-300 ease-in-out">
                  <Icons.plus className="h-4 w-4" />
                  <Icons.chevronDown className="h-4 w-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Create a new...</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <button className="border-blueGray hover:bg-blueGray/50 rounded-md border p-2 transition-colors duration-300 ease-in-out">
                  <Icons.inbox className="h-4 w-4" />
                </button>
                <TooltipContent>
                  <p>Notification</p>
                </TooltipContent>
              </TooltipTrigger>
            </Tooltip>
            <AvatarMenu />
          </div>
        </nav>
      </div>
      <main className="">{children}</main>
    </div>
  );
}
