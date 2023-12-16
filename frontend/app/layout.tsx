import "./globals.css";

import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ApolloProviders } from "@/components/apollo-provider";

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Luminate",
  description: "A cloud based IDE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito_sans.variable}`}>
      <body className="bg-background text-white">
        <ApolloProviders>
          <TooltipProvider>{children}</TooltipProvider>
        </ApolloProviders>
        <Toaster />
      </body>
    </html>
  );
}
