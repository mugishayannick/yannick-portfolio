"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Gradient bar pinned to the very top that tracks read progress.
 * Spring-smoothed so it glides rather than snapping to every scroll tick.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-accent"
    />
  );
}
