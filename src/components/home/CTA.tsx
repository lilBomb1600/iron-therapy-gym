import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function CTA() {
  return (
    <section className="border-t border-line py-20 sm:py-28">
      <Container className="text-center">
        <p className="font-condensed text-sm uppercase tracking-[0.3em] text-ember-light">100% In. 200% Out.</p>
        <h2 className="font-display mx-auto mt-4 max-w-2xl text-balance text-5xl leading-[0.9] tracking-wide text-paper sm:text-6xl">
          THE GYM DOESN&apos;T CLOSE. NEITHER SHOULD YOUR EXCUSES.
        </h2>
        <Link
          href="/contact"
          className="ember-glow mt-9 inline-block bg-ember px-10 py-4 font-condensed text-sm font-semibold uppercase tracking-[0.2em] text-paper transition-transform hover:-translate-y-0.5"
        >
          Get Started
        </Link>
      </Container>
    </section>
  );
}
