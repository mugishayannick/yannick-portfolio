"use client";

import { Award, BadgeCheck, CalendarDays, ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { certifications, type Certification } from "@/data/certifications";
import { Section } from "./ui/section";
import { Reveal } from "./ui/reveal";
import { SpotlightCard } from "./spotlight-card";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Credentials"
      title="Certifications"
      description="Formal training that backs up the day-to-day work — issued by IBM, with the skills each one covers."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal key={c.slug} delay={i * 0.1}>
            <CertificationCard cert={c} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function CertificationCard({ cert: c }: { cert: Certification }) {
  const reduce = useReducedMotion();
  const [from, to] = c.gradient;

  return (
    <SpotlightCard className="h-full rounded-3xl">
      <motion.article
        whileHover={reduce ? undefined : { y: -6 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/50 sm:p-7"
      >
        {/* Colour wash that blooms from the top-right on hover */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
          style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
        />

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="relative flex items-start gap-4">
          {/* Seal — ring sweeps around it on hover */}
          <div className="relative shrink-0">
            <span
              aria-hidden
              className="absolute -inset-1 rounded-2xl opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-70"
              style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
            />
            <span
              className="relative grid h-12 w-12 place-items-center rounded-2xl text-white shadow-sm transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105"
              style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
            >
              <Award className="h-5 w-5" />
            </span>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
              <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
                <BadgeCheck className="h-4 w-4 text-accent" />
                {c.issuer}
              </span>
              {c.issued && (
                <>
                  <span aria-hidden>·</span>
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {c.issued}
                  </span>
                </>
              )}
            </div>

            <h3 className="mt-1 text-lg font-semibold leading-snug tracking-tight sm:text-xl">
              {c.title}
            </h3>
          </div>
        </div>

        <p className="relative mt-4 text-sm leading-relaxed text-muted">{c.summary}</p>

        {/* ── Skills ─────────────────────────────────────────── */}
        <div className="relative mt-5">
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            Skills covered
          </p>
          <motion.div
            className="mt-3 flex flex-wrap gap-2"
            initial={reduce ? undefined : "hidden"}
            whileInView={reduce ? undefined : "show"}
            viewport={{ once: false, margin: "-40px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
          >
            {c.skills.map((s) => (
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
                className="cursor-default rounded-lg border border-border bg-background px-2.5 py-1 text-xs text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-sm"
              >
                {s}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {c.credential && (
          <div className="relative mt-auto pt-6">
            <a
              href={c.credential}
              target="_blank"
              rel="noreferrer"
              className="group/cred inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-sm font-medium text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
            >
              Verify credential
              <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cred:translate-x-0.5 group-hover/cred:-translate-y-0.5" />
            </a>
          </div>
        )}
      </motion.article>
    </SpotlightCard>
  );
}
