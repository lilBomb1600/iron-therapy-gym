"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

// Animates the leading number in a stat string ("1,000+", "5.0★", "2010") from 0 up to
// its real value once it scrolls into view — everything after the number (suffix) stays static.
export function CountUp({ value, duration = 1.4 }: { value: string; duration?: number }) {
  const match = value.match(/^([\d,]+\.?\d*)/);
  const numeric = match ? parseFloat(match[1].replace(/,/g, "")) : null;
  const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;
  const useGrouping = Boolean(match && match[1].includes(","));
  const suffix = match ? value.slice(match[1].length) : value;

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(numeric === null ? value : (0).toFixed(decimals));

  useEffect(() => {
    if (!inView || numeric === null) return;
    const controls = animate(0, numeric, {
      duration,
      ease: "easeOut",
      onUpdate: (v) =>
        setDisplay(v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals, useGrouping })),
    });
    return () => controls.stop();
  }, [inView, numeric, decimals, useGrouping, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
