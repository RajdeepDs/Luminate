import type { Metadata } from "next";
import LayoutHeader from "@/components/dashboard/header/layout-header";

export const metadata: Metadata = {
  title: "Luminate",
  description: "A cloud based IDE",
};

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div>
      <LayoutHeader />
      <main>{children}</main>
    </div>
  );
}
