import { Icons } from "@/components/icon";
import SettingsNav from "@/components/settings-nav";
import { settingsConfig } from "@/config/settings-navigations";
import Link from "next/link";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <aside className="h-screen w-[265px] border-r border-gray/25 p-4">
        <Link href={"/"} className="flex items-center gap-5">
          <Icons.chevronLeft className="h-6 w-6 " />
          <h1 className="text-xl">Settings</h1>
        </Link>
        <SettingsNav items={settingsConfig.settingsNav} />
      </aside>
      <main className="w-full">{children}</main>
    </div>
  );
}
