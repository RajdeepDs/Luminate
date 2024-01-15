import * as Icons from "@repo/ui/icons";

export default function TerminalTabs() {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex w-fit cursor-pointer items-center gap-1 rounded-sm bg-[#0C0C26] px-2 py-1">
        <Icons.Terminal className="h-4 w-4" />
        Terminal
        <Icons.X className="ml-2 h-3 w-3 cursor-pointer rounded-sm hover:bg-blueGray" />
      </div>
      <Icons.TerminalSquare className="h-5 w-5" />
    </div>
  );
}
