import { Popover, PopoverContent, PopoverTrigger } from "@repo/ui";
import { Icons } from "@repo/ui/icons";
import { Separator } from "@repo/ui";
import { Tooltip, TooltipContent, TooltipTrigger } from "@repo/ui";

export default function NotificationModal() {
  return (
    <Popover>
      <PopoverTrigger className="rounded-md border border-blueGray p-2 transition-colors duration-300 ease-in-out hover:bg-blueGray/50">
        <Tooltip>
          <TooltipTrigger asChild>
            <Icons.inbox className="h-4 w-4" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Notifications</p>
          </TooltipContent>
        </Tooltip>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col space-y-3">
          <div className="flex items-center gap-x-2">
            <div className="w-fit rounded-full border border-blueGray p-1">
              <Icons.bell className="h-4 w-4" />
            </div>
            <h1>Your Notifications</h1>
          </div>
          <Separator />
          {/* Notifications messages */}
        </div>
      </PopoverContent>
    </Popover>
  );
}
