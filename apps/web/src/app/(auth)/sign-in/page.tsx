import Link from "next/link";
import Image from "next/image";

import SignInModal from "@/components/authentication/sign-in-modal";

export default function SignInPage() {
  return (
    <div className="h-screen bg-background">
      <Link href={"/"} className="absolute left-5 top-5">
        <Image src={"/word-logo.svg"} width={200} height={200} alt="logo" />
      </Link>
      <div className="bg2 flex h-full w-full items-center justify-center">
        <SignInModal />
      </div>
    </div>
  );
}
