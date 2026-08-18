"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";
import { BarbellIcon, PlateIcon } from "@/components/ui/GymIcons";

export function Hero() {
  return (
    <section className="relative flex min-h-[640px] flex-col overflow-hidden sm:min-h-[680px] sm:flex-row">
      {/* Night panel */}
      <div className="relative flex flex-1 items-center bg-gradient-to-br from-ink to-steel sm:absolute sm:inset-0">
        <BarbellIcon className="pointer-events-none absolute -left-6 bottom-4 w-56 rotate-[-8deg] text-paper/[0.06] sm:w-72" />
        <PlateIcon className="pointer-events-none absolute -top-10 left-1/3 w-28 text-paper/[0.05] sm:w-36" />
        <Container className="w-full sm:max-w-none sm:pr-[52%]">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-condensed text-sm uppercase tracking-[0.3em] text-paper-dim"
          >
            {business.hours}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display mt-3 text-[16vw] leading-[0.85] tracking-wide text-paper sm:text-6xl lg:text-7xl"
          >
            TRAIN AT
            <br />3AM.
          </motion.h1>
        </Container>
      </div>

      {/* Ember panel */}
      <div className="torn-seam relative flex flex-1 items-center justify-end bg-gradient-to-bl from-ember to-ink py-10 sm:absolute sm:inset-0">
        <PlateIcon className="pointer-events-none absolute -right-8 -top-8 w-40 text-paper/10 sm:w-52" />
        <Container className="w-full sm:ml-auto sm:max-w-none sm:pl-[8%] sm:text-right">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display text-[16vw] leading-[0.85] tracking-wide text-paper sm:text-6xl lg:text-7xl"
          >
            OR NOON.
            <br />
            YOUR CALL.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-sm text-balance font-condensed text-lg text-paper/85 sm:ml-auto"
          >
            24/7 keycard access strength & conditioning in Concord. Coaches who train like it's personal — because it is.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8"
          >
            <Link
              href="/contact"
              className="ember-glow inline-block bg-paper px-8 py-3.5 font-condensed text-sm font-semibold uppercase tracking-[0.15em] text-ink transition-transform hover:-translate-y-0.5"
            >
              Start Training
            </Link>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
