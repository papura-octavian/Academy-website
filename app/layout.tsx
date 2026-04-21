import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { HelpWidget } from "@/components/HelpWidget";
import { ScrollToTop } from "@/components/ScrollToTop";
import { withBasePath } from "@/lib/sitePaths";

export const metadata: Metadata = {
  title: "Academia de Fotbal [Nume]",
  description: "Înscrieri rapide pentru copii. Antrenori dedicați și program clar.",
  icons: {
    icon: withBasePath("/logo.png")
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ro">
      <body className="font-sans">
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <HelpWidget />
        <ScrollToTop />
      </body>
    </html>
  );
}
