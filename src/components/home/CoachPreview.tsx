import Link from "next/link";
import { User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";

export function CoachPreview() {
  return (
    <section className="border-t border-line py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="mx-auto flex aspect-square w-full max-w-xs items-center justify-center rounded-full border-2 border-ember bg-steel">
          <User className="h-20 w-20 text-paper-dim" strokeWidth={1} />
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
