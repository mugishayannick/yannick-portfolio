"use client";

import { Check, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import { Section } from "./ui/section";
import { Reveal } from "./ui/reveal";
import { SpotlightCard } from "./spotlight-card";

const strengths = [
  "End-to-end delivery across frontend & backend",
  "Clean, maintainable, well-tested code",
  "Thoughtful, accessible user experiences",
  "Reliable collaboration inside a team",
];

export function About() {
  const reduce = useReducedMotion();

  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.6fr_1fr]">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted">{profile.bio}</p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm text-muted">
            <MapPin className="h-4 w-4 text-accent" />
            {profile.location}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SpotlightCard className="h-full rounded-2xl">
            <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/40">
              <p className="text-sm font-medium">What I bring</p>
              <motion.ul
                className="mt-4 space-y-3 text-sm text-muted"
                initial={reduce ? undefined : "hidden"}
                whileInView={reduce ? undefined : "show"}
                viewport={{ once: false, margin: "-40px" }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
              >
                {strengths.map((t) => (
                  <motion.li
                    key={t}
                    variants={{
                      hidden: { opacity: 0, x: -8 },
                      show: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                    className="group/item flex gap-2.5"
                  >
                    <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-white transition-transform duration-300 group-hover/item:scale-110">
                      <Check className="h-2.5 w-2.5" strokeWidth={3} />
                    </span>
                    <span className="transition-colors duration-300 group-hover/item:text-foreground">
                      {t}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </SpotlightCard>
        </Reveal>
      </div>
    </Section>
  );
}
