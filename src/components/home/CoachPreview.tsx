import Link from "next/link";
import { User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";
import { KettlebellIcon } from "@/components/ui/GymIcons";

export function CoachPreview() {
  return (
    <section className="relative overflow-hidden border-t border-line py-20 sm:py-28">
      <KettlebellIcon className="pointer-events-none absolute -bottom-6 left-4 w-24 text-paper/[0.05] sm:w-32" />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative mx-auto flex aspect-square w-full max-w-xs items-center justify-center overflow-hidden rounded-full border-2 border-ember bg-steel">
          <KettlebellIcon className="pointer-events-none absolute h-40 w-40 text-paper/[0.06]" />
          <User className="relative h-20 w-20 text-paper-dim" strokeWidth={1} />
        </div>
        <div>
          <span className="font-condensed text-sm uppercase tracking-[0.3em] text-ember-light">Meet Your Coach</span>
          <h2 className="font-display mt-3 text-4xl tracking-wide text-paper sm:text-5xl">{business.owner.name}</h2>
          <p className="mt-6 max-w-2xl text-balance leading-relaxed text-paper-dim">
            {business.owner.bio.slice(0, 260)}…
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block font-condensed text-sm font-semibold uppercase tracking-[0.15em] text-ember-light underline decoration-2 underline-offset-4 transition-colors hover:text-paper"
          >
            Read the Full Story →
          </Link>
        </div>
      </Container>
    </section>
  );
}
