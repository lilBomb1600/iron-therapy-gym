"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { StarRating } from "@/components/ui/StarRating";
import { reviews, averageRating, reviewCount } from "@/data/reviews";
import { PlateIcon } from "@/components/ui/GymIcons";

export function Testimonials() {
  const shown = [...reviews].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)).slice(0, 6);

  return (
    <section className="relative overflow-hidden border-t border-line py-20 sm:py-28">
      <PlateIcon className="pointer-events-none absolute -left-14 bottom-0 w-48 text-paper/[0.04] sm:w-64" />
      <Container className="relative">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-4xl tracking-wide text-paper sm:text-5xl">The Gym Fam</h2>
            <div className="mt-3 flex items-center gap-2">
              <StarRating rating={averageRating} size={16} />
              <span className="font-condensed text-sm text-paper-dim">
                {averageRating.toFixed(1)} · {reviewCount} Yelp reviews
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6, scale: 1.02, backgroundColor: "var(--color-steel)" }}
              className="relative flex flex-col gap-3 bg-ink p-6"
            >
              <StarRating rating={r.rating} />
              <p className="text-sm leading-relaxed text-paper-dim">&ldquo;{r.text}&rdquo;</p>
              <p className="font-condensed mt-auto text-xs uppercase tracking-wide text-paper/50">
                {r.name} · {r.location}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
