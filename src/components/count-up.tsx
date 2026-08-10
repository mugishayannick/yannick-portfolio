"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/**
 * Counts a numeric value up once it scrolls into view. Preserves any
 * non-numeric prefix/suffix (e.g. "90%", "4+", "5+"). The final value is
 * rendered server-side, then the number animates on the client, so it
 * degrades gracefully with no JS and respects reduced motion.
 */
export function CountUp({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  // once: false → the numbers re-count every time the strip scrolls back in
  const inView = useInView(ref, { once: false, margin: "-40px" });
  const reduce = useReducedMotion();

  const prefix = match?.[1] ?? "";
  const target = match ? parseFloat(match[2]) : 0;
  const suffix = match?.[3] ?? "";
  const decimals = match?.[2].includes(".") ? 1 : 0;

  useEffect(() => {
    if (!match || reduce || !inView) return;
    const node = ref.current;
    if (!node) return;
    const controls = animate(0, target, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        node.textContent = `${prefix}${v.toFixed(decimals)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, target, decimals, prefix, suffix, match]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
