"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { ExternalLink, ImageIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { projects, type ShowcaseProject } from "@/data/projects";
import { Section } from "./ui/section";
import { Reveal } from "./ui/reveal";
import { GithubIcon } from "./icons";

export function Projects() {
  return (
    <Section id="work" title="Selected work">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project: p }: { project: ShowcaseProject }) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors duration-300 hover:border-accent/50"
    >
      {/* Image area. The flat background doubles as the loading skeleton. */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-background">
        {p.image ? (
          <Image
            src={p.image}
            alt={`${p.title} interface`}
            fill
            /* Cards cap out at ~468px, so the browser stops pulling 1920w. */
            sizes="(min-width: 1024px) 468px, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <ImagePlaceholder title={p.title} />
        )}

        {p.year && (
          <span className="absolute right-3 top-3 rounded-md bg-black/60 px-2 py-0.5 text-[11px] font-medium text-white">
            {p.year}
          </span>
        )}

        {/* Hover overlay: action icons fade in over the image */}
        {(p.github || p.live) && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center gap-3 bg-black/45 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100 focus-within:pointer-events-auto focus-within:opacity-100">
            {p.live && (
              <OverlayAction
                href={p.live}
                label={`Visit ${p.title} live site`}
                tooltip="Live site"
                delay="delay-[60ms]"
              >
                <ExternalLink className="h-5 w-5" />
              </OverlayAction>
            )}
            {p.github && (
              <OverlayAction
                href={p.github}
                label={`${p.title} source on GitHub`}
                tooltip="Source code"
                delay="delay-[120ms]"
              >
                <GithubIcon className="h-5 w-5" />
              </OverlayAction>
            )}
          </div>
        )}
      </div>

      <div className="relative flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>

        <p className="mt-3 text-sm leading-relaxed text-muted">{p.summary}</p>

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {p.stack.map((s) => (
            <span
              key={s}
              className="rounded-md bg-background px-2.5 py-1 text-xs text-muted ring-1 ring-border transition-colors group-hover:ring-accent/25"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

/** Circular icon button revealed on card hover, with a label tooltip. */
function OverlayAction({
  href,
  label,
  tooltip,
  delay,
  children,
}: {
  href: string;
  label: string;
  tooltip: string;
  delay: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`group/act relative grid h-12 w-12 translate-y-2 scale-90 place-items-center rounded-full border border-white/30 bg-white/15 text-white opacity-0 backdrop-blur-md transition-all duration-300 ${delay} hover:scale-105 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 focus-within:translate-y-0 focus-within:scale-100 focus-within:opacity-100`}
    >
      {children}
      <span className="pointer-events-none absolute -bottom-8 whitespace-nowrap rounded-md bg-black/75 px-2 py-1 text-[11px] font-medium text-white opacity-0 transition-opacity duration-200 group-hover/act:opacity-100">
        {tooltip}
      </span>
    </a>
  );
}

/** Stand-in shown until a real screenshot is dropped in. */
function ImagePlaceholder({ title }: { title: string }) {
  return (
    <div className="grid h-full w-full place-items-center">
      <div className="flex flex-col items-center gap-2 text-center text-muted">
        <ImageIcon className="h-5 w-5" />
        <span className="text-xs">{title}</span>
      </div>
    </div>
  );
}
