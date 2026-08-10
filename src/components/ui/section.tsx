"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
};

/**
 * Section shell. The whole block rises into place as one unit when it scrolls
 * into view; nested Reveals then stagger the cards inside.
 */
export function Section({ id, title, children, className }: SectionProps) {
  const reduce = useReducedMotion();

  return (
    <section
      id={id}
      className={`scroll-mt-24 py-20 sm:py-24 ${className ?? ""}`}
    >
      <motion.div
        className="mx-auto w-full max-w-5xl px-5 sm:px-8"
        initial={reduce ? undefined : { opacity: 0, y: 56 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h2
          className="mb-10 text-2xl font-semibold tracking-tight sm:text-3xl"
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h2>
        {children}
      </motion.div>
    </section>
  );
}
