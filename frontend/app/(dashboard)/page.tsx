import { Icons } from "@/components/icon";

export default function Home() {
  return (
    <div className="flex flex-col space-y-5">
      <div className="flex">
        <Icons.flame className="mr-2 h-6 w-6" />
        <h1 className="text-lg">Currently active workspace</h1>
      </div>
      {/* Workspace component prototype */}
      <div className="flex h-[70px] w-[530px] space-x-2 overflow-hidden rounded-md border border-purple-light">
        <div className="h-full w-20 bg-gray" />
        <div className="">
          <h1 className="text-lg">Workspace Name</h1>
          <p className="text-sm text-gray">Created on 10th Oct</p>
        </div>
      </div>
      <div className="flex">
        <Icons.activity className="mr-2 h-6 w-6" />
        <h1 className="text-lg">Recent Activity</h1>
      </div>
      {/* Activity component prototype */}
      <div className="flex flex-col items-start">
        <div className="flex gap-2">
          <Icons.circle className="h-6 w-6 stroke-[4px] text-purple" />
          <h1>Today</h1>
        </div>
        <div className="my-2 ml-[11px] flex gap-5 border-l-2 border-purple-light p-4">
          <div className="h-10 w-10 rounded-full bg-blue-light" />
          <div className="">
            <h1 className="">
              Created <span className="text-purple-light">Next.js</span>{" "}
              workspace
            </h1>
            <p className="text-xs text-gray">10:10 am | Thrus 19 Oct</p>
          </div>
        </div>
        <div className="ml-[6px] h-3 w-3 rounded-full bg-purple-light" />
      </div>
    </div>
  );
}
