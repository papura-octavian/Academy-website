import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { HelpWidget } from "@/components/HelpWidget";
import { ScrollToTop } from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Academia de Fotbal [Nume]",
  description: "Înscrieri rapide pentru copii. Antrenori dedicați și program clar.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ro" className={inter.variable}>
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
