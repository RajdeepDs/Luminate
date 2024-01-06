import { Metadata } from "next";

import { Button } from "@repo/ui";
import { Separator } from "@repo/ui";
import PasswordChangeForm from "@/components/settings/password-change-form";

export const metadata: Metadata = {
  title: "Account | Luminate",
  description: "Account page for Luminate",
};

export default function AccountPage() {
  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="text-lg">Change password</h1>
      <Separator />
      <div className="flex flex-col gap-2">
        <PasswordChangeForm />
      </div>
      <h1 className="text-lg">Delete account</h1>
      <Separator />
      <div>
        <p className="text-sm text-gray">
          Once you deleted your account, there is no going back. Please be
          certain.
        </p>
        <Button variant={"destructive"} className="mt-2 w-fit">
          Delete your account
        </Button>
      </div>
    </div>
  );
}
