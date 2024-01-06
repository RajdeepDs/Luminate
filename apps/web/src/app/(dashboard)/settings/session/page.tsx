import { Metadata } from "next";

import { Separator } from "@repo/ui";
import SessionDevices from "@/components/settings/session-devices";

export const metadata: Metadata = {
  title: "Sessions | Luminate",
  description: "Sessions page for Luminate",
};

export default function SessionPage() {
  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="text-xl">Sessions</h1>
      <Separator />
      <div className="flex flex-col gap-2">
        <p className="text-sm font-normal text-gray">
          Devices logged into your account. Revoke any sessions that you do not
          recognize.
        </p>
        <SessionDevices />
      </div>
    </div>
  );
}
