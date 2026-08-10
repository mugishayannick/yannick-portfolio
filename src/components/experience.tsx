"use client";

import { useId, useState } from "react";
import { ArrowUpRight, Building2, ChevronDown, MapPin } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { experience, type Project } from "@/data/experience";
import { Section } from "./ui/section";
import { Reveal } from "./ui/reveal";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="grid grid-cols-1 gap-5">
        {experience.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.05}>
            {/* First role starts open so the section never reads as empty */}
            <ExperienceCard project={p} defaultOpen={i === 0} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ExperienceCard({
  project: p,
  defaultOpen = false,
}: {
  project: Project;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const reduce = useReducedMotion();
  const panelId = useId();

  return (
    <article className="rounded-xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/50 sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
              <Building2 className="h-4 w-4 text-accent" />
              {p.org}
            </span>
            <span aria-hidden>·</span>
            <span>{p.role}</span>
            <span aria-hidden>·</span>
            <span>{p.period}</span>
            {p.location && (
              <span className="inline-flex items-center gap-1">
                <span aria-hidden>·</span>
                <MapPin className="h-3.5 w-3.5" />
                {p.location}
              </span>
            )}
          </div>

          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
            {p.title}
            {p.featured && (
              <span className="ml-2 align-middle rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent">
                Featured
              </span>
            )}
          </h3>
        </div>

        <span className="shrink-0 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
          {p.category}
        </span>
      </div>

      {/* Collapsible body: summary onwards */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            id={panelId}
            initial={reduce ? undefined : { height: 0, opacity: 0 }}
            animate={reduce ? undefined : { height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.25, ease: "easeOut" },
            }}
            className="overflow-hidden"
          >
            {/* Inner wrapper keeps padding out of the animated height */}
            <div className="pt-4">
              <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                {p.summary}
              </p>

              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {p.contributions.map((c, i) => (
                  <motion.li
                    key={c}
                    initial={reduce ? undefined : { opacity: 0, y: 6 }}
                    animate={reduce ? undefined : { opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 + i * 0.05, duration: 0.3 }}
                    className="flex gap-2 text-sm text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{c}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-background px-2.5 py-1 text-xs text-muted ring-1 ring-border"
                  >
                    {s}
                  </span>
                ))}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link ml-auto inline-flex items-center gap-1 text-sm font-medium text-accent transition-opacity hover:opacity-80"
                  >
                    Visit{" "}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-5 flex items-center gap-4">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 text-sm font-medium text-muted transition-all duration-300 hover:border-accent/50 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
        >
          {open ? "Show less" : "Read more"}
          <motion.span
            animate={reduce ? undefined : { rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="grid place-items-center"
          >
            <ChevronDown className="h-4 w-4" />
          </motion.span>
        </button>

        <span
          aria-hidden
          className={`h-px flex-1 origin-left bg-border transition-transform duration-500 ${
            open ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </div>
    </article>
  );
}
