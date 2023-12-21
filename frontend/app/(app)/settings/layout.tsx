import SettingsSidebar from "@/components/settings-sidebar";
import { settingsConfig } from "@/config/settings-navigations";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container flex flex-col">
      <nav className="my-5 flex items-center gap-x-4 px-4">
        {/* Avatar */}
        <div className="h-12 w-12 rounded-full bg-gray" />
        <div className="flex flex-col">
          <h1 className="text-lg">Rajdeep Das (RajdeepDs)</h1>
          <p className="text-sm font-light text-white/50">
            Your personal account
          </p>
        </div>
      </nav>
      <div className="flex">
        <aside className="w-1/4 px-4 py-2">
          <SettingsSidebar items={settingsConfig.settingsNav} />
        </aside>
        <main className="px-4 py-3">{children}</main>
      </div>
    </div>
  );
}
