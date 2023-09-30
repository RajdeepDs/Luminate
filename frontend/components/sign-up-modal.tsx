import Link from "next/link";
import Image from "next/image";

import SignUpForm from "./sign-up-form";
import OauthButton from "./oauth-button";

export default function SignUpModal() {
  return (
    <div className="relative mx-auto flex w-96 flex-col items-center justify-center overflow-hidden rounded-xl bg-white p-8">
      <div className="grid-radial-bg absolute top-0 z-10 h-44 w-80 rounded-full" />
      <div className="absolute top-0 h-14 w-40 rounded-full bg-purple-3/70 blur-2xl filter" />
      <div className="z-20 flex justify-center">
        <Image src="/logo-icon.svg" alt="logo" width={50} height={50} />
      </div>
      <div className="z-20 mt-16 text-center">
        <h1 className="text-xl font-medium">Create an account</h1>
        <p className="text-xs text-slate-500">
          Enter below to create an account.
        </p>
      </div>
      <div className="mt-6">
        <OauthButton />
      </div>
      <div className="my-4 flex w-full items-center">
        <div className="h-[1px] w-full bg-slate-200" />
        <p className="text-md px-2 text-slate-500">or</p>
        <div className="h-[1px] w-full bg-slate-200" />
      </div>
      <div className="w-full">
        <SignUpForm />
      </div>
      <p className="mt-4 text-center text-sm text-slate-500">
        By clicking Create account, you agree to our{" "}
        <Link href={"/"} className="font-semibold text-purple-8">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href={"/"} className="font-semibold text-purple-8">
          Privacy Policy
        </Link>
      </p>
      <p className="mt-4 text-sm text-slate-500">
        Already have an account?{" "}
        <Link href={"/sign-in"} className="font-semibold text-purple-8">
          Sign In
        </Link>
      </p>
    </div>
  );
}
