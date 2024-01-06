import { Icons } from "@repo/ui/icons";
import { Separator } from "@repo/ui";

export default function WorkspaceList() {
  return (
    <div className="mt-5">
      <div className="">
        <h1>Workspaces</h1>
      </div>
      <div className="my-3">
        <div className="w-full rounded-lg border border-blueGray bg-gradient-to-br from-gray/30 from-20% to-blueGray/30 to-80% p-5">
          <div className="flex items-center justify-between">
            <div className=" flex items-center gap-2">
              <Icons.box className="h-5 w-5" />
              <h1 className="cursor-pointer text-lg hover:underline">NoteUp</h1>
            </div>
            <div className="flex items-center gap-2 rounded bg-blueGray/50 px-2 py-1">
              <Icons.star className="h-5 w-5" />
              <p className="text-sm">Starred</p>
              <Separator orientation="vertical" className="h-5" />
              <Icons.chevronDown className="h-5 w-5" />
            </div>
          </div>
          <p className="mt-1 font-extralight">A note taking web app.</p>
          <div className="mt-5 flex items-center space-x-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-blue-600" />
              <p className="text-sm font-extralight opacity-70">TypeScript</p>
            </div>
            <div className="flex items-center gap-1">
              <Icons.star className="h-4 w-4" />
              <span className="text-sm font-extralight opacity-70">2</span>
            </div>
            <p className="text-sm font-extralight opacity-70">
              Updated 2 weeks ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
