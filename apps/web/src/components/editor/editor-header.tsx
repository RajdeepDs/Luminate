import Image from "next/image";
import * as Icons from "@repo/ui/icons";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@repo/ui";

export default function EditorHeader() {
  return (
    <div className="mx-4 flex items-center justify-between py-2">
      <div className="flex cursor-pointer items-center gap-x-1">
        <Image src="/logo.svg" width={25} height={25} alt="logo" />
        <Icons.ChevronDown className="h-4 w-4 transition-all ease-in hover:mt-1 " />
      </div>
      <div className="flex items-center justify-center gap-x-1">
        <HoverCard>
          <HoverCardTrigger className="group flex cursor-pointer items-center gap-x-1">
            <>
              <p>RajdeepDs</p>/<p className="cursor-pointer">Next.js</p>
              <Icons.ChevronDown className="h-4 w-4 transition-all delay-300 duration-200 ease-in group-hover:mt-1" />
            </>
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="flex flex-col gap-y-2">
              <div className="flex items-center justify-between gap-x-1">
                <>
                  <Icons.Box className="h-4 w-4" />
                  <h1>Next.js</h1>
                </>
                <Icons.Pen className="h-4 w-4 cursor-pointer" />
              </div>
              <div className="flex items-center justify-center gap-3">
                <Image
                  src="/logo.svg"
                  width={25}
                  height={25}
                  alt="logo"
                  className="rounded-full"
                />
                <p>RajdeepDs</p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
      <div className="flex items-center gap-x-4">
        <Image
          src="/logo.svg"
          width={25}
          height={25}
          alt="logo"
          className="rounded-full"
        />
        <h1>Share</h1>
      </div>
    </div>
  );
}
