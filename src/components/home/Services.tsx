"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";
import { DumbbellIcon } from "@/components/ui/GymIcons";

// Real weight-plate denominations, used purely as a decorative index — not literal load values.
const plates = [45, 35, 25, 10, 5, 45, 35, 25];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-20 sm:py-28">
      <DumbbellIcon className="pointer-events-none absolute -right-10 top-2 w-52 rotate-12 text-paper/[0.04] sm:w-72" />
      <Container className="relative">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="font-display text-4xl tracking-wide text-paper sm:text-5xl">Programs</h2>
          <span className="hidden font-condensed text-sm uppercase tracking-[0.2em] text-paper-dim sm:block">
            Pick your lane
          </span>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {business.services.map((service, i) => (
            <div key={service} className="group relative flex min-h-[160px] flex-col justify-between bg-ink p-6 transition-colors hover:bg-steel">
              <motion.span
                initial={{ y: -36, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ type: "spring", stiffness: 300, damping: 12, delay: (i % 4) * 0.08 }}
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ember font-condensed text-xs font-bold text-ember-light"
              >
                {plates[i % plates.length]}
              </motion.span>
              <h3 className="font-display text-2xl tracking-wide text-paper">{service}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
