import type { Metadata } from "next";
import { Bebas_Neue, Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import { BottomNav } from "@/components/layout/BottomNav";
import { TopBar } from "@/components/layout/TopBar";
import { Footer } from "@/components/layout/Footer";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas" });
const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-barlow" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Iron Therapy Gym | 24/7 Strength & Conditioning in Concord, CA",
  description:
    "Iron Therapy Gym — a 24/7 keycard-access strength and conditioning facility in Concord, CA. Personal training, small group training, boot camp, and nutrition coaching since 2010.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${barlow.variable} ${inter.variable} h-full`}>
      <body className="brushed-steel relative flex min-h-full flex-col bg-ink pb-20 text-paper antialiased sm:pb-24">
        <TopBar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
