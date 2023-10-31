import Image from "next/image";
import Link from "next/link";
import OauthButton from "./oauth-button";
import SignUpForm from "./sign-up-form";
export default function SignUpModal() {
  return (
    <div className="bg-background border-purple-light my-auto flex w-96 flex-col items-center justify-center space-y-6 rounded-xl border-2 p-8">
      <div className="flex justify-center">
        <Image src="/logo.svg" alt="logo" width={50} height={50} />
      </div>
      <div className="text-center">
        <h1 className="text-xl font-semibold">Create your account</h1>
        <p className="text-gray text-sm">Enter below to create an account.</p>
      </div>
      <div className="mt-6 w-full">
        <OauthButton />
      </div>
      <div className="my-4 flex w-full items-center">
        <div className="bg-gray h-[1px] w-full" />
        <p className="px-2 text-sm text-white">or</p>
        <div className="bg-gray h-[1px] w-full" />
      </div>
      <div className="w-full">
        <SignUpForm />
      </div>
      <p className="text-gray mt-4 text-center text-sm">
        By clicking Create account, you agree to our{" "}
        <Link href={"/"} className="font-semibold text-white">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href={"/"} className="font-semibold text-white">
          Privacy Policy
        </Link>
      </p>
      <p className="text-gray mt-4 text-sm">
        Already have an account?{" "}
        <Link href={"/sign-in"} className="font-semibold text-white">
          Sign In
        </Link>
      </p>
    </div>
  );
}
