import Link from "next/link";
import Image from "next/image";

import SignUpModal from "@/components/sign-up-modal";

export default function SignUpPage() {
  return (
    <div className="grid h-screen grid-cols-2 bg-background">
      <div className="bg flex h-full flex-col items-center justify-center">
        <Link href={"/"} className="absolute left-5 top-5">
          <Image src={"/word-logo.svg"} width={200} height={200} alt="logo" />
        </Link>
        <SignUpModal />
      </div>
      <div className="">{/*Image*/}</div>
    </div>
  );
}
