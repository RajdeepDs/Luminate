import "./globals.css";
import "@repo/ui/styles.css";

import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { Toaster, TooltipProvider } from "@repo/ui";
import { ReduxProvider } from "@/components/redux-provider";
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
}): JSX.Element {
  return (
    <ReduxProvider>
      <html lang="en" className={`${nunito_sans.variable}`}>
        <body className="bg-background text-white">
          <ApolloProviders>
            <TooltipProvider>{children}</TooltipProvider>
          </ApolloProviders>
          <Toaster />
        </body>
      </html>
    </ReduxProvider>
  );
}
