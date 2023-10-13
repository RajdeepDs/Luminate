import Link from "next/link";
import Image from "next/image";

import { dashboardConfig } from "@/config/dashboard";
import { DashboardNav } from "@/components/dashboard-nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="container mx-auto flex h-screen gap-8 py-5">
        <aside className="fixed space-y-16 md:static md:w-[250px]">
          <Link href={"/"}>
            <Image
              src={"./word-logo.svg"}
              width={150}
              height={0}
              alt="Luminate logo"
              className="hidden pt-2 md:block"
            />
            <Image
              src={"./logo-icon.svg"}
              width={50}
              height={0}
              alt="Luminate logo"
              className="md:hidden"
            />
          </Link>
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className="w-full pl-20 md:pl-0">{children}</main>
      </div>
    </>
  );
}
