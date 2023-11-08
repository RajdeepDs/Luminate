"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "./ui/button";

export default function OauthButton() {
  const route = useRouter();

  async function handleGithubAuth() {
    try {
      // Fetch the user's location from ip-api.com
      const response = await fetch("http://ip-api.com/json");
      const data = await response.json();
      const location = `${data.city}, ${data.countryCode}`;
      // Fetch the userAgent from the browser
      const userAgent = navigator.userAgent;
      route.push(
        `http://localhost:4000/auth/github?location=${location}&userAgent=${userAgent}`,
      );
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
