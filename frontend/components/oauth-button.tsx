"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "./ui/button";

export default function OauthButton() {
  const route = useRouter();

  function handleGithubAuth() {
    route.push("http://localhost:4000/auth/github");
  }

  return (
    <div className="flex gap-4">
      <Button
        variant={"outline"}
        className="w-full gap-4"
        onClick={handleGithubAuth}
      >
        <Image
          src={"/github-icon.svg"}
          alt="google-icon"
          width={20}
          height={20}
        />
        GitHub
      </Button>
    </div>
  );
}
