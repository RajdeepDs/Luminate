import { Icons } from "@/components/icon";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/page-header";
import SettingHeader from "@/components/setting-header";
import { PasswordChangeForm } from "@/components/password-change-form";

export default function SecurityPage() {
  return (
    <div className="mx-auto mt-14 w-1/2">
      <PageHeader title={"Profile"} desc={"Manage your Luminate Profile."} />
      <div className="space-y-10">
        <SettingHeader
          title={"Registration Data"}
          desc={"October 20, 2023 | 10:10 am"}
        />
        <div className="space-y-6">
          <SettingHeader
            title={"Sessions"}
            desc={"Devices logged into your account."}
          />
          <div className="flex w-[450px] items-center gap-4 rounded-md border border-purple-light px-3 py-2">
            <div className="w-fit rounded-md bg-gray/25 p-2">
              <Icons.globe className="h-4 w-4" />
            </div>
            <div className="flex flex-col -space-y-1">
              <h1>Microsoft Edge on Windows</h1>
              <div className="flex items-center">
                <Icons.dot className="h-4 w-4 text-green" />
                <p className="text-sm text-green">Current Session</p>
                <Icons.dot className="h-7 w-7 text-gray" />
                <p className="text-sm text-gray">Kolkata, IN</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <SettingHeader
            title={"Password Change"}
            desc={"Change your Luminate account password."}
          />
          <PasswordChangeForm />
        </div>
        <div className="space-y-4">
          <SettingHeader
            title={"Delete Account"}
            desc={"Delete your Luminate account."}
          />
          <div className="space-y-2">
            <Button variant="destructive">Delete Account</Button>
            <p className="text-sm">
              Once you delete your account, there is no going back. Please be
              certain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
