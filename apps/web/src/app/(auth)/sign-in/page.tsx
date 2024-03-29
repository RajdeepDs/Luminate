"use client";
import Link from "next/link";
import Image from "next/image";
import { SignInModal } from "@/components/authentication/sign-in-modal";

export default function SignInPage(): JSX.Element {
  return (
    <div className="h-screen bg-background">
      <Link className="absolute left-5 top-5" href="/">
        <Image alt="logo" height={200} src="/word-logo.svg" width={200} />
      </Link>
      <div className="bg2 flex h-full w-full items-center justify-center">
        <SignInModal />
      </div>
    </div>
  );
}
