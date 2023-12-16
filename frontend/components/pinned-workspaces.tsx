import { Icons } from "./icon";

export default function PinnedWorkspaces() {
  return (
    <div className="">
      <h1 className="text-lg font-semibold">Pinned Workspaces</h1>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="border-blueGray to-blueGray/30 w-full rounded-lg border bg-gradient-to-br from-gray/30 from-20% to-80% p-5">
          <div className="flex items-center justify-between">
            <div className=" flex items-center gap-2">
              <Icons.box className="h-4 w-4" />
              <h1 className="cursor-pointer text-base hover:underline">
                NoteUp
              </h1>
            </div>
            <Icons.gripVertical className="h-4 w-4 cursor-grab" />
          </div>
          <p className="mt-1 font-extralight">A note taking web app.</p>
          <div className="mt-5 flex items-center space-x-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-blue-600" />
              <p className="text-sm font-extralight">TypeScript</p>
            </div>
            <div className="flex items-center gap-1">
              <Icons.star className="h-4 w-4" />
              <span className="text-sm font-extralight">2</span>
            </div>
          </div>
        </div>
        <div className="border-blueGray to-blueGray/30 w-full rounded-lg border bg-gradient-to-br from-gray/30 from-20% to-80% p-5">
          <div className="flex items-center justify-between">
            <div className=" flex items-center gap-2">
              <Icons.box className="h-4 w-4" />
              <h1 className="cursor-pointer text-base hover:underline">
                NoteUp
              </h1>
            </div>
            <Icons.gripVertical className="h-4 w-4 cursor-grab" />
          </div>
          <p className="mt-1 font-extralight">A note taking web app.</p>
          <div className="mt-5 flex items-center space-x-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-blue-600" />
              <p className="text-sm font-extralight">TypeScript</p>
            </div>
            <div className="flex items-center gap-1">
              <Icons.star className="h-4 w-4" />
              <span className="text-sm font-extralight">2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
