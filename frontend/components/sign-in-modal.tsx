import Link from "next/link";
import Image from "next/image";

import SignInForm from "./sign-in-form";
import OauthButton from "./oauth-button";

export default function SignInModal() {
  return (
    <div className="relative mx-auto flex w-96 flex-col items-center justify-center overflow-hidden rounded-xl bg-white p-8">
      <div className="grid-radial-bg absolute top-0 z-10 h-44 w-80 rounded-full" />
      <div className="absolute top-0 h-14 w-40 rounded-full bg-purple-3/70 blur-2xl filter" />
      <div className="z-20 flex justify-center">
        <Image src="/logo-icon.svg" alt="logo" width={50} height={50} />
      </div>
      <div className="z-20 mt-16 text-center">
        <h1 className="text-xl font-medium">Welcome back</h1>
        <p className="text-xs text-slate-500">
          Please enter your details to sign in.
        </p>
      </div>
      <div className="mt-6 w-full">
        <OauthButton />
      </div>
      <div className="my-4 flex w-full items-center">
        <div className="h-[1px] w-full bg-slate-200" />
        <p className="text-md px-2 text-slate-500">or</p>
        <div className="h-[1px] w-full bg-slate-200" />
      </div>
      <div className="w-full">
        <SignInForm />
      </div>
      <p className="mt-4 text-sm text-slate-500">
        Don't have an account yet?{" "}
        <Link href={"/sign-up"} className="font-semibold text-purple-8">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
