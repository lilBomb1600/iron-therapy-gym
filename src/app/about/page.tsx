import type { Metadata } from "next";
import { User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";

export const metadata: Metadata = { title: "The Coach | Iron Therapy Gym" };

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <span className="font-condensed text-sm uppercase tracking-[0.3em] text-ember-light">The Coach</span>
        <h1 className="font-display mt-3 text-5xl tracking-wide text-paper sm:text-6xl">{business.owner.name}</h1>
        <p className="font-condensed mt-1 text-lg uppercase tracking-wide text-paper-dim">{business.owner.title}</p>

        <div className="mt-14 grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div className="mx-auto flex aspect-square w-full max-w-xs items-center justify-center rounded-full border-2 border-ember bg-steel lg:mx-0">
            <User className="h-24 w-24 text-paper-dim" strokeWidth={1} />
          </div>

          <div>
            <div className="grid grid-cols-3 divide-x divide-line border border-line">
              {business.owner.stats.map((s) => (
                <div key={s.label} className="px-3 py-6 text-center">
                  <p className="font-display text-3xl text-ember-light sm:text-4xl">{s.value}</p>
                  <p className="font-condensed mt-1 text-[11px] uppercase tracking-wide text-paper-dim sm:text-xs">{s.label}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-balance text-lg leading-relaxed text-paper-dim">{business.owner.bio}</p>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {business.highlights.map((h) => (
                <span key={h} className="border border-line px-3 py-1.5 font-condensed text-xs uppercase tracking-wide text-paper-dim">
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-line pt-14">
          <div className="flex items-start gap-6">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-ember bg-steel">
              <User className="h-9 w-9 text-paper-dim" strokeWidth={1} />
            </div>
            <div>
              <span className="font-condensed text-sm uppercase tracking-[0.3em] text-ember-light">Co-Coach</span>
              <h2 className="font-display mt-1 text-3xl tracking-wide text-paper sm:text-4xl">{business.coCoach.name}</h2>
              <p className="mt-4 max-w-2xl text-balance leading-relaxed text-paper-dim">{business.coCoach.blurb}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
