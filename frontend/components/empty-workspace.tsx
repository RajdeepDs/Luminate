import { Icons } from "./icon";
import { Button } from "./ui/button";
import WorkspaceSkeletonIllustration from "./workspace-skeleton";

export default function EmptyWorkspace() {
  return (
    <div className="mt-60 flex flex-col items-center justify-center space-y-5">
      <WorkspaceSkeletonIllustration />
      <div className="text-center">
        <h1 className="text-3xl">No workspace yet!</h1>
        <p className="text-lg font-light text-gray">
          Workspaces are where your projects live. <br />
          Start by creating your first one!
        </p>
      </div>
      <Button variant={"outline"} className="text-base font-light">
        <Icons.add className="mr-2 h-5 w-5" />
        Create a Workspace
      </Button>
    </div>
  );
}
