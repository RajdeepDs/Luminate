"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "./ui/button";

export default function OauthButton() {
  const route = useRouter();

  async function handleGithubAuth() {
    try {
      route.push(`http://localhost:4000/auth/github`);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="flex gap-4">
      <Button
        variant={"outline"}
        className="w-full items-center gap-4 text-sm"
        onClick={handleGithubAuth}
      >
        <Image
          src={"/github-icon.svg"}
          alt="github-icon"
          width={20}
          height={20}
        />
        Sign in with GitHub
      </Button>
    </div>
  );
}
