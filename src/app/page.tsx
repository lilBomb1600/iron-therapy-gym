import { Hero } from "@/components/home/Hero";
import { ScoreboardStats } from "@/components/home/ScoreboardStats";
import { Services } from "@/components/home/Services";
import { CoachPreview } from "@/components/home/CoachPreview";
import { HoursLocation } from "@/components/home/HoursLocation";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ScoreboardStats />
      <Services />
      <CoachPreview />
      <HoursLocation />
      <CTA />
    </>
  );
}
