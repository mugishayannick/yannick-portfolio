"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Calm, matte background — no glow. A fine dotted grid, two very soft
 * neutral shapes that drift slowly (Framer Motion), and a faint grain
 * overlay for an editorial, premium finish. Fully static when the user
 * prefers reduced motion.
 */
export function AnimatedBackground() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Fine dotted grid, fading toward the bottom */}
      <div
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.28]"
        style={{
          backgroundImage:
            "radial-gradient(color-mix(in srgb, var(--foreground) 11%, transparent) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "linear-gradient(to bottom, #000 0%, #000 55%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, #000 0%, #000 55%, transparent 100%)",
        }}
      />

      {/* Soft neutral drifting shapes (matte, low-contrast) */}
      <motion.div
        className="absolute -left-[10%] top-[-8%] h-[46vw] w-[46vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--foreground) 6%, transparent), transparent 70%)",
        }}
        animate={reduce ? undefined : { x: [0, 40, -10, 0], y: [0, 25, -15, 0] }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-12%] top-[30%] h-[42vw] w-[42vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--accent) 7%, transparent), transparent 72%)",
        }}
        animate={reduce ? undefined : { x: [0, -35, 15, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Faint grain for a matte, non-shiny texture */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05] mix-blend-normal"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
