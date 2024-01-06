import Link from "next/link";
import Image from "next/image";

import SignInForm from "./sign-in-form";
import OauthButton from "./oauth-button";

export default function SignInModal() {
  return (
    <div className="my-auto flex w-96 flex-col items-center justify-center space-y-6 rounded-xl border-2 border-purple-light bg-background p-8">
      <div className="flex justify-center">
        <Image src="/logo.svg" alt="logo" width={50} height={50} />
      </div>
      <div className="text-center">
        <h1 className="text-xl font-semibold">Welcome Back</h1>
        <p className="text-sm text-gray">Enter your details to sign in.</p>
      </div>
      <div className="mt-6 w-full">
        <OauthButton />
      </div>
      <div className="my-4 flex w-full items-center">
        <div className="h-[1px] w-full bg-gray" />
        <p className="px-2 text-sm text-white">or</p>
        <div className="h-[1px] w-full bg-gray" />
      </div>
      <div className="w-full">
        <SignInForm />
      </div>
      <p className="mt-4 text-sm text-gray">
        Don&apos;t have an account yet?{" "}
        <Link href={"/sign-up"} className="font-semibold text-white">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
