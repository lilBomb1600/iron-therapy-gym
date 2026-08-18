"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { business } from "@/data/business";

export function TopBar() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })
      );
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="font-display text-2xl tracking-wide text-paper">
          IRON<span className="text-ember">THERAPY</span>
        </Link>

        <div className="flex items-center gap-3 font-condensed text-sm uppercase tracking-wide text-paper-dim">
          <span className="scoreboard-flicker inline-flex items-center gap-1.5 rounded-sm bg-steel px-2.5 py-1 text-xs font-semibold text-ember-light">
            <span className="ember-pulse h-1.5 w-1.5 rounded-full bg-ember-light" />
            Open 24/7
          </span>
          {time && <span className="hidden tabular-nums sm:inline">{time}</span>}
          <a
            href={business.phoneHref}
            className="flex items-center gap-1.5 rounded-sm bg-ember px-2.5 py-1 text-xs font-semibold text-paper transition-opacity hover:opacity-90"
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{business.phone}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
