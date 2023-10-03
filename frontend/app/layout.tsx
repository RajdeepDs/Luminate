import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { ApolloProviders } from "@/components/apollo-provider";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Luminate",
  description: "Online IDE for developers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body>
        <ApolloProviders>{children}</ApolloProviders>
        <Toaster />
      </body>
    </html>
  );
}
