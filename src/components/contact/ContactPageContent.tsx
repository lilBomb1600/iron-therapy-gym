"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";
import { PlateIcon } from "@/components/ui/GymIcons";

export function ContactPageContent() {
  return (
    <div className="relative overflow-hidden py-16 sm:py-24">
      <PlateIcon className="pointer-events-none absolute -right-16 -top-10 w-60 text-paper/[0.04] sm:w-72" />
      <Container className="relative">
        <span className="font-condensed text-sm uppercase tracking-[0.3em] text-ember-light">Get In</span>
        <h1 className="font-display mt-3 text-5xl tracking-wide text-paper sm:text-6xl">Join The Gym</h1>
        <p className="mt-4 max-w-lg text-balance text-paper-dim">{business.description}</p>

        <motion.a
          href={business.phoneHref}
          whileHover={{ y: -6 }}
          whileTap={{ scaleY: 0.82, y: 3 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="ember-glow mt-7 inline-flex items-center gap-2.5 bg-ember px-7 py-3.5 font-condensed text-sm font-semibold uppercase tracking-[0.15em] text-paper"
        >
          <Phone className="h-4 w-4" />
          Call {business.phone}
        </motion.a>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <div className="overflow-hidden border border-line">
              <iframe
                title="Iron Therapy Gym location"
                src={business.mapsEmbedSrc}
                width="100%"
                height="320"
                style={{ border: 0, filter: "grayscale(1) invert(0.92) contrast(0.9)" }}
                loading="lazy"
              />
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <MapPin className="h-6 w-6 text-ember-light" />
                <a href={business.mapsHref} target="_blank" rel="noreferrer" className="font-condensed text-lg text-paper-dim hover:text-paper">
                  {business.address.line1}
                  <br />
                  {business.address.line2}
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <Clock className="h-6 w-6 text-ember-light" />
                <p className="font-condensed text-lg uppercase tracking-wide text-ember-light">{business.hours}</p>
              </div>
            </div>

            <h2 className="font-display mt-12 text-2xl tracking-wide text-paper">Amenities</h2>
            <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
              {business.amenities.map((a) => (
                <li key={a} className="font-condensed text-sm text-paper-dim">
                  · {a}
                </li>
              ))}
            </ul>
          </div>

          <form className="border border-line p-7 sm:p-9">
            <h2 className="font-display text-2xl tracking-wide text-paper">Send A Message</h2>
            <p className="mt-1 font-condensed text-sm text-paper-dim">Tell us your goal — we&apos;ll reach out.</p>
            <div className="mt-6 space-y-5">
              <div>
                <label className="font-condensed text-xs uppercase tracking-wide text-paper-dim">Name</label>
                <input type="text" className="mt-1.5 w-full border border-line bg-transparent px-3 py-2.5 text-paper outline-none focus:border-ember" />
              </div>
              <div>
                <label className="font-condensed text-xs uppercase tracking-wide text-paper-dim">Email</label>
                <input type="email" className="mt-1.5 w-full border border-line bg-transparent px-3 py-2.5 text-paper outline-none focus:border-ember" />
              </div>
              <div>
                <label className="font-condensed text-xs uppercase tracking-wide text-paper-dim">Goal</label>
                <textarea rows={4} className="mt-1.5 w-full border border-line bg-transparent px-3 py-2.5 text-paper outline-none focus:border-ember" />
              </div>
              <motion.button
                type="submit"
                whileHover={{ y: -4 }}
                whileTap={{ scaleY: 0.85, y: 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="ember-glow w-full bg-ember px-6 py-3 font-condensed text-sm font-semibold uppercase tracking-[0.2em] text-paper"
              >
                Send
              </motion.button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
