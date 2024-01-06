import { ApolloProviders } from "@/components/apollo-provider";
import "./globals.css";
import "@repo/ui/styles.css";

import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { TooltipProvider } from "@repo/ui";

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
}): JSX.Element {
  return (
    <html lang="en" className={`${nunito_sans.variable}`}>
      <body className="bg-background text-white">
        <ApolloProviders>
          <TooltipProvider>{children}</TooltipProvider>
        </ApolloProviders>
      </body>
    </html>
  );
}
