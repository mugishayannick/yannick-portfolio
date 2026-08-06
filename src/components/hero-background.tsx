"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Hero-only atmosphere layer: a panning grid, four drifting aurora blobs,
 * a rotating conic light sweep, a breathing ring and floating particles.
 *
 * Particle positions are hard-coded rather than random so server and client
 * render identically (no hydration mismatch). Everything goes static under
 * `prefers-reduced-motion`.
 */

const particles = [
  { left: "8%", top: "20%", size: 6, delay: 0, duration: 8 },
  { left: "18%", top: "62%", size: 4, delay: 1.1, duration: 9.5 },
  { left: "27%", top: "34%", size: 5, delay: 2.3, duration: 7.5 },
  { left: "36%", top: "78%", size: 7, delay: 0.6, duration: 10 },
  { left: "45%", top: "16%", size: 4, delay: 3.1, duration: 8.5 },
  { left: "56%", top: "56%", size: 6, delay: 1.7, duration: 9 },
  { left: "64%", top: "26%", size: 5, delay: 2.8, duration: 7 },
  { left: "73%", top: "70%", size: 7, delay: 0.3, duration: 11 },
  { left: "82%", top: "38%", size: 4, delay: 1.9, duration: 8 },
  { left: "90%", top: "62%", size: 6, delay: 3.4, duration: 9.5 },
  { left: "96%", top: "24%", size: 5, delay: 0.9, duration: 10.5 },
  { left: "12%", top: "86%", size: 4, delay: 2.5, duration: 8.8 },
];

export function HeroBackground() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Grid that slowly pans — gives the whole hero a sense of motion */}
      <motion.div
        className="absolute -inset-x-20 -inset-y-20 opacity-90 dark:opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in srgb, var(--accent) 14%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--accent) 14%, transparent) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 75% 65% at 50% 30%, #000 15%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 30%, #000 15%, transparent 80%)",
        }}
        animate={reduce ? undefined : { backgroundPosition: ["0px 0px", "56px 56px"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      {/* Aurora blobs — mismatched periods so the loop never feels repetitive */}
      <motion.div
        className="absolute -left-[15%] -top-[25%] h-[65vw] w-[65vw] rounded-full blur-[70px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--accent) 55%, transparent), transparent 65%)",
        }}
        animate={
          reduce
            ? undefined
            : { x: [0, 160, -60, 0], y: [0, 90, 40, 0], scale: [1, 1.25, 0.88, 1] }
        }
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[12%] top-0 h-[58vw] w-[58vw] rounded-full blur-[70px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--accent-2) 55%, transparent), transparent 65%)",
        }}
        animate={
          reduce
            ? undefined
            : { x: [0, -130, 60, 0], y: [0, 80, -50, 0], scale: [1, 0.85, 1.2, 1] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />
      <motion.div
        className="absolute left-[30%] top-[40%] h-[45vw] w-[45vw] rounded-full blur-[70px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--accent) 42%, transparent), transparent 68%)",
        }}
        animate={
          reduce
            ? undefined
            : { x: [0, 110, -100, 0], y: [0, -90, 40, 0], scale: [1, 1.18, 0.85, 1] }
        }
        transition={{ duration: 21, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
      />
      <motion.div
        className="absolute left-[55%] -top-[10%] h-[38vw] w-[38vw] rounded-full blur-[70px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--accent-2) 40%, transparent), transparent 68%)",
        }}
        animate={
          reduce
            ? undefined
            : { x: [0, -90, 70, 0], y: [0, 110, -30, 0], scale: [1, 0.9, 1.15, 1] }
        }
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 2.4 }}
      />

      {/* Rotating conic sweep — a light source moving overhead */}
      {!reduce && (
        <motion.div
          className="absolute left-1/2 top-0 h-[95vw] w-[95vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-2xl dark:opacity-30"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0%, color-mix(in srgb, var(--accent) 70%, transparent) 15%, transparent 32%, color-mix(in srgb, var(--accent-2) 65%, transparent) 58%, transparent 78%)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        />
      )}

      {/* Breathing ring, centred behind the content */}
      {!reduce && (
        <motion.div
          className="absolute left-1/2 top-1/2 h-[34vw] w-[34vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/25"
          animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0.1, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* Floating particles */}
      {!reduce &&
        particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-accent to-accent-2 shadow-[0_0_12px_currentColor] text-accent"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
            animate={{ y: [0, -60, 0], x: [0, 18, 0], opacity: [0.25, 0.95, 0.25] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}

      {/* Fade the layer into the page background at the bottom edge */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
