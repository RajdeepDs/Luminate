import Image from "next/image";
import { Icons } from "../icon";

export default function EditorHeader() {
  return (
    <div className="mx-4 flex items-center justify-between py-2">
      <div className="flex items-center gap-x-1">
        <Image src={"/logo.svg"} width={25} height={25} alt="logo" />
        <Icons.chevronDown className="h-4 w-4 hover:mt-1" />
      </div>
      <div className="flex items-center justify-center gap-x-1">
        <h1>RajdeepDs/Next.js</h1>
        <Icons.chevronDown className="h-4 w-4 hover:mt-1" />
      </div>
      <div className="flex items-center gap-x-4">
        <Image
          src={"/logo.svg"}
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
