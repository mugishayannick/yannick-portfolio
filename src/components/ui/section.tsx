"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Section shell. The whole block (header + content) rises into place as one
 * unit when it scrolls into view; nested Reveals then stagger the individual
 * cards inside, which layers into a "section arrives, then fills in" feel.
 */
export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  const reduce = useReducedMotion();

  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className ?? ""}`}>
      <motion.div
        className="mx-auto w-full max-w-5xl px-5 sm:px-8"
        initial={reduce ? undefined : { opacity: 0, y: 56 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="mb-12 max-w-2xl"
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow && (
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              {eyebrow}
            </span>
          )}
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
          )}
        </motion.div>
        {children}
      </motion.div>
    </section>
  );
}
