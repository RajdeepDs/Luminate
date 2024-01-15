import Link from "next/link";
import Image from "next/image";
import SignInForm from "./sign-in-form";
import { OauthButton } from "./oauth-button";

export function SignInModal(): JSX.Element {
  return (
    <div className="my-auto flex w-96 flex-col items-center justify-center space-y-6 rounded-xl border-2 border-purple bg-background p-8">
      <div className="flex justify-center">
        <Image alt="logo" height={50} src="/logo.svg" width={50} />
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
        <Link className="font-semibold text-white" href="/sign-up">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
