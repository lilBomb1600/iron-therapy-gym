"use client";

import { motion } from "framer-motion";

// Deterministic pseudo-random values so server and client render identically (no Math.random).
const sparks = Array.from({ length: 16 }, (_, i) => {
  const seed = i * 137.5;
  return {
    left: ((seed * 7) % 100).toFixed(1),
    size: 2 + ((seed * 3) % 4),
    duration: 4 + ((seed * 1.7) % 5),
    delay: (seed % 6),
    drift: ((seed * 11) % 40) - 20,
  };
});

export function EmberParticles({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {sparks.map((s, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-ember-light"
          style={{ left: `${s.left}%`, bottom: "-5%", width: s.size, height: s.size, boxShadow: "0 0 6px 1px rgba(242,137,74,0.8)" }}
          animate={{ y: ["0%", "-130%"], x: [0, s.drift], opacity: [0, 1, 1, 0] }}
          transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}
