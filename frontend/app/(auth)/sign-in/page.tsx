import Link from "next/link";
import Image from "next/image";

import SignInModal from "@/components/sign-in-modal";

export default function SignInPage() {
  return (
    <div className="relative flex h-screen items-center justify-center">
      <Link href={"/"}>
        <Image
          src={"/word-logo.svg"}
          alt="logo"
          width={150}
          height={150}
          className="absolute left-10 top-10 z-30"
        />
      </Link>
      <div className="grid-radial-bg absolute z-10 hidden h-1/2 w-3/5 rounded-full md:block" />
      <div className="h-60 w-1/2 rounded-full bg-purple-3/50 blur-3xl filter" />
      <div className="absolute z-20 flex h-screen items-center justify-center">
        <SignInModal />
      </div>
    </div>
  );
}
