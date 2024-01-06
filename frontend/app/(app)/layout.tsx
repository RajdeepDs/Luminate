import { Metadata } from "next";

import LayoutHeader from "@/components/layout-header";

export const metadata: Metadata = {
  title: "Luminate",
  description: "A cloud based IDE",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <LayoutHeader />
      <main>{children}</main>
    </div>
  );
}
