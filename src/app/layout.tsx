import { Bebas_Neue, Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import { BottomNav } from "@/components/layout/BottomNav";
import { TopBar } from "@/components/layout/TopBar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { DuotoneFilter } from "@/components/ui/DuotoneFilter";
import { JsonLd } from "@/components/JsonLd";
import { siteJsonLd } from "@/lib/seo/jsonld";
import { rootMetadata } from "@/lib/seo/metadata";
import { pageCopy } from "@/lib/seo/copy";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas" });
const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-barlow" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata = rootMetadata({ title: pageCopy.home.title, description: pageCopy.home.description });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${barlow.variable} ${inter.variable} h-full`}>
      <body className="brushed-steel relative flex min-h-full flex-col bg-ink pb-20 text-paper antialiased sm:pb-24">
        <JsonLd data={siteJsonLd()} />
        <DuotoneFilter />
        <ScrollProgress />
        <TopBar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
