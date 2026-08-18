"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { PlateIcon, DumbbellIcon } from "@/components/ui/GymIcons";
import { EmberParticles } from "@/components/ui/EmberParticles";

const MotionLink = motion.create(Link);

export function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-line py-20 sm:py-28">
      <EmberParticles className="opacity-70" />
      <PlateIcon className="pointer-events-none absolute -left-10 top-1/2 w-40 -translate-y-1/2 text-ember/[0.08] sm:w-56" />
      <DumbbellIcon className="pointer-events-none absolute -right-6 bottom-0 w-48 -rotate-12 text-paper/[0.05] sm:w-64" />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember/25 blur-3xl"
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.15, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <Container className="relative text-center">
        <p className="font-condensed text-sm uppercase tracking-[0.3em] text-ember-light">100% In. 200% Out.</p>
        <h2 className="font-display mx-auto mt-4 max-w-2xl text-balance text-5xl leading-[0.9] tracking-wide text-paper sm:text-6xl">
          THE GYM DOESN&apos;T CLOSE. NEITHER SHOULD YOUR EXCUSES.
        </h2>
        <MotionLink
          href="/contact"
          whileHover={{ y: -6 }}
          whileTap={{ scaleY: 0.82, y: 3 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="ember-glow relative mt-9 inline-block bg-ember px-10 py-4 font-condensed text-sm font-semibold uppercase tracking-[0.2em] text-paper"
        >
          Get Started
        </MotionLink>
      </Container>
    </section>
  );
}
