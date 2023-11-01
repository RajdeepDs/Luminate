import Link from "next/link";
import Image from "next/image";

import { Icons } from "@/components/icon";
import MainNav from "@/components/main-nav";
import { mainConfig } from "@/config/main-navigations";
import CommandMenu from "@/components/command-menu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="flex items-center justify-between px-5 py-2">
        <Link href={"/"}>
          <Image src={"/logo.svg"} alt="logo" width={50} height={50} />
        </Link>
        <div className="">
          <MainNav items={mainConfig.mainNav} />
        </div>
        <div className="flex items-center space-x-2">
          <CommandMenu />
          <Icons.bell className="h-6 w-6" />
          <div className="h-8 w-8 rounded-full bg-gray" />
        </div>
      </nav>
      <main className="container mx-auto flex w-full bg-gray">{children}</main>
    </div>
  );
}
