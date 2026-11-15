import { Hero } from "@/components/home/Hero";
import { ScoreboardStats } from "@/components/home/ScoreboardStats";
import { Services } from "@/components/home/Services";
import { CoachPreview } from "@/components/home/CoachPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { HoursLocation } from "@/components/home/HoursLocation";
import { CTA } from "@/components/home/CTA";
import { pageMetadata } from "@/lib/seo/metadata";
import { pageCopy } from "@/lib/seo/copy";

export const metadata = pageMetadata(pageCopy.home);

export default function Home() {
  return (
    <>
      <Hero />
      <ScoreboardStats />
      <Services />
      <CoachPreview />
      <Testimonials />
      <HoursLocation />
      <CTA />
    </>
  );
}
