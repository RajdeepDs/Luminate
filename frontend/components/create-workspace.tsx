import { Icons } from "./icon";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

export default function CreateWorkspace() {
  return (
    <Dialog>
      <DialogTrigger className="flex w-[350px] items-center justify-center gap-2 rounded-md bg-indigo transition-colors ease-linear hover:bg-purple">
        <Icons.plusCircle className="h-4 w-4" />
        <h1 className="text-sm">Create a Workspace</h1>
        <Icons.chevronDown className="h-4 w-4" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new Workspace</DialogTitle>
          <DialogDescription>
            A workspace contains all of your project files.
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <div className="">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-y-1">
              <h1 className="font-extralight">Name</h1>
              <div className="flex h-7 items-center gap-2 rounded border border-blueGray bg-blueGray/50 px-2">
                <div className="h-4 w-4 rounded-full bg-gray" />
                <Separator orientation="vertical" className="h-4 bg-blueGray" />
                <Input
                  placeholder="Workspace name"
                  className="h-6 border-0 bg-transparent p-0 ring-0 focus:outline-none focus:ring-0 focus:ring-transparent focus:ring-offset-0"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-1 ">
              <h1 className="font-extralight">Description</h1>
              <Textarea
                placeholder="Workspace description"
                className="border border-blueGray bg-blueGray/50 ring-0 focus:outline-none focus:ring-0 focus:ring-transparent focus:ring-offset-0"
              />
            </div>
            <div className="mt-2 flex gap-x-2">
              <Button className="w-full" variant={"outline"}>
                Cancel
              </Button>
              <Button className="w-full" variant={"secondary"}>
                Create Workspace
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
