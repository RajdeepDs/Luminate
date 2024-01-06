import { Icons } from "@repo/ui/icons";
import LayoutNav from "./layout-nav";
import AvatarMenu from "./avatar-menu";
import { Separator } from "@repo/ui";
import NotificationModal from "./notification-modal";
import { Tooltip, TooltipContent, TooltipTrigger } from "@repo/ui";

export default function LayoutHeader() {
  return (
    <div className="border-b-[0.5px] border-blueGray">
      <nav className="mx-3 flex items-center justify-between py-3">
        <LayoutNav />
        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-md border border-blueGray">
            <Icons.search className="mx-2 h-4 w-4" />
            <input
              className="bg-transparent text-sm text-gray outline-none"
              placeholder="Type here to search"
            />
            <Separator orientation="vertical" className="h-8" />
            <Tooltip>
              <TooltipTrigger className="m-1 rounded-sm p-1 transition-colors duration-300 ease-in-out hover:bg-blueGray/50">
                <Icons.command className="h-4 w-4" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Command Palette</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <Separator orientation="vertical" className="h-7" />
          <Tooltip>
            <TooltipTrigger className="flex gap-1 rounded-md border border-blueGray p-2 transition-colors duration-300 ease-in-out hover:bg-blueGray/50">
              <Icons.plus className="h-4 w-4" />
              <Icons.chevronDown className="h-4 w-4" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Create a new...</p>
            </TooltipContent>
          </Tooltip>
          <NotificationModal />
          <AvatarMenu />
        </div>
      </nav>
    </div>
  );
}
