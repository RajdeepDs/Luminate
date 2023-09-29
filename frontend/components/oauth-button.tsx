import Image from "next/image";

import { Button } from "./ui/button";

export default function OauthButton() {
  return (
    <div className="flex gap-4">
      <Button variant={"outline"} className="w-24">
        <Image
          src={"/google-icon.svg"}
          alt="google-icon"
          width={20}
          height={20}
        />
      </Button>
      <Button variant={"outline"} className="w-24">
        <Image
          src={"/github-icon.svg"}
          alt="google-icon"
          width={20}
          height={20}
        />
      </Button>
    </div>
  );
}
