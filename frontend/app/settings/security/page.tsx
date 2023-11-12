"use client";

import { useQuery } from "@apollo/client";

import { formatDate, formatTime } from "@/lib/utils";
import { GET_USER_REGISTRATION } from "@/graphql/Queries";

import { Button } from "@/components/ui/button";
import PageHeader from "@/components/page-header";
import SettingHeader from "@/components/setting-header";
import SessionDevices from "@/components/session-devices";
import { PasswordChangeForm } from "@/components/password-change-form";

export default function SecurityPage() {
  const { data, loading } = useQuery(GET_USER_REGISTRATION);
  if (loading) return <div>Loading...</div>;

  const date = formatDate(data?.user?.createdAt);
  const time = formatTime(data?.user?.createdAt);

  return (
    <div className="mx-auto mt-14 w-1/2">
      <PageHeader title={"Security"} desc={"Keep your account secure."} />
      <div className="space-y-10">
        <SettingHeader title={"Registration Date"} desc={date + " | " + time} />
        <div className="space-y-6">
          <SettingHeader
            title={"Sessions"}
            desc={"Devices logged into your account."}
          />
          <SessionDevices />
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
