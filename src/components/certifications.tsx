"use client";

import { ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { certifications, type Certification } from "@/data/certifications";
import { Section } from "./ui/section";
import { Reveal } from "./ui/reveal";

export function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal key={c.slug} delay={i * 0.08}>
            <CertificationCard cert={c} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function CertificationCard({ cert: c }: { cert: Certification }) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/50"
    >
      <div className="flex items-center gap-2 text-sm text-muted">
        <span className="font-medium text-foreground">{c.issuer}</span>
        {c.issued && (
          <>
            <span aria-hidden>·</span>
            <span>{c.issued}</span>
          </>
        )}
      </div>

      <h3 className="mt-1 text-lg font-semibold tracking-tight">{c.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{c.summary}</p>

      <motion.div
        className="mt-5 flex flex-wrap gap-2"
        initial={reduce ? undefined : "hidden"}
        whileInView={reduce ? undefined : "show"}
        viewport={{ once: false, margin: "-40px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.03 } },
        }}
      >
        {c.skills.map((s) => (
          <motion.span
            key={s}
            variants={{
              hidden: { opacity: 0, y: 6 },
              show: { opacity: 1, y: 0, transition: { duration: 0.28 } },
            }}
            className="rounded-md bg-background px-2.5 py-1 text-xs text-muted ring-1 ring-border"
          >
            {s}
          </motion.span>
        ))}
      </motion.div>

      {c.credential && (
        <div className="mt-auto pt-6">
          <a
            href={c.credential}
            target="_blank"
            rel="noreferrer"
            className="group/cred inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-opacity hover:opacity-80"
          >
            Verify
            <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cred:translate-x-0.5 group-hover/cred:-translate-y-0.5" />
          </a>
        </div>
      )}
    </motion.article>
  );
}
