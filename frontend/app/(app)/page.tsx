import CodeTiles from "@/components/code-tiles";
import PinnedWorkspaces from "@/components/pinned-workspaces";

export default function DashboardPage() {
  return (
    <div>
      <div className="bannergradient py-3">
        <h1 className="text-center">
          Welcome Rajdeep!{" "}
          <span className="font-thin">
            Luminate is here to empower your coding adventures.
          </span>
        </h1>
      </div>
      <div className="container">
        <div className="mt-9">
          <PinnedWorkspaces />
        </div>
        <div className="mt-12">
          <CodeTiles />
        </div>
        <div className="mt-12">
          <h1 className="text-lg font-semibold">Activity Feed</h1>
          <div className="mx-2 flex items-center">
            <h1>December</h1>
            <span className="bg-blueGray mx-2 h-[1px] w-full"></span>
          </div>
          <div className="mt-6 text-center font-thin">
            <p>You have no activity yet for this period.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
