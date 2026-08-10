"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import { Section } from "./ui/section";
import { Reveal } from "./ui/reveal";

export function Skills() {
  const reduce = useReducedMotion();

  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/40">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted">
                <span className="h-1 w-1 rounded-full bg-accent" />
                {group.title}
              </h3>

              {/* Chips pop in one after another as the card scrolls into view */}
              <motion.div
                className="mt-4 flex flex-wrap gap-2"
                initial={reduce ? undefined : "hidden"}
                whileInView={reduce ? undefined : "show"}
                viewport={{ once: false, margin: "-40px" }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.035 } },
                }}
              >
                {group.items.map((s) => (
                  <motion.span
                    key={s}
                    variants={{
                      hidden: { opacity: 0, y: 8, scale: 0.94 },
                      show: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                    className="cursor-default rounded-lg border border-border bg-background px-3 py-1.5 text-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-sm"
                  >
                    {s}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
