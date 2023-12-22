"use client";
import Image from "next/image";

import { useQuery } from "@apollo/client";
import { GET_USER_AVATAR } from "@/graphql/Queries";

import SettingsSidebar from "@/components/settings-sidebar";
import { settingsConfig } from "@/config/settings-navigations";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, loading } = useQuery(GET_USER_AVATAR);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container flex flex-col">
      <nav className="my-5 flex items-center gap-x-4 px-4">
        {data?.user?.avatar && (
          <Image
            src={data?.user?.avatar}
            alt="avatar"
            width={50}
            height={50}
            priority
            className="rounded-full"
          />
        )}
        <div className="flex flex-col">
          <h1 className="flex gap-x-1 text-lg">
            {data?.user?.name}
            <p className="text-gray">({data?.user?.username})</p>
          </h1>
          <p className="text-sm font-light text-white/50">
            Your personal account
          </p>
        </div>
      </nav>
      <div className="flex">
        <aside className="w-1/4 px-4 py-2">
          <SettingsSidebar items={settingsConfig.settingsNav} />
        </aside>
        <main className="w-full px-4 py-3">{children}</main>
      </div>
    </div>
  );
}
