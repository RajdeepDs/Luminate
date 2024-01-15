import Link from "next/link";
import Image from "next/image";
import SignUpModal from "@/components/authentication/sign-up-modal";

export default function SignUpPage(): JSX.Element {
  return (
    <div className="grid h-screen grid-cols-2 bg-background">
      <div className="bg flex h-full flex-col items-center justify-center">
        <Link className="absolute left-5 top-5" href="/">
          <Image alt="logo" height={200} src="/word-logo.svg" width={200} />
        </Link>
        <SignUpModal />
      </div>
      <div className="">{/*Image*/}</div>
    </div>
  );
}
