"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { Avatar } from "./avatar";
import { HeroBackground } from "./hero-background";
import { GithubIcon, LinkedinIcon } from "./icons";
import { CountUp } from "./count-up";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <HeroBackground />

      <div className="relative mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-10 px-5 sm:px-8 md:grid-cols-[1.4fr_1fr]">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-80px" }}
        >
          <motion.h1 variants={item} className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            {profile.name}
          </motion.h1>

          <motion.p variants={item} className="mt-3 text-lg font-medium text-gradient sm:text-xl">
            {profile.role}
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:opacity-90 hover:shadow-md"
            >
              View my work{" "}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
            {profile.resume && (
              <a
                href={profile.resume}
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                <Download className="h-4 w-4" /> Resume
              </a>
            )}
          </motion.div>

          <motion.div variants={item} className="mt-7 flex items-center gap-3 text-muted">
            {profile.socials.github && (
              <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-all hover:-translate-y-0.5 hover:text-foreground">

                <GithubIcon className="h-5 w-5" />
              </a>
            )}
            {profile.socials.linkedin && (
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-all hover:-translate-y-0.5 hover:text-foreground">

                <LinkedinIcon className="h-5 w-5" />
              </a>
            )}
            {profile.email && (
              <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-all hover:-translate-y-0.5 hover:text-foreground">

                <Mail className="h-5 w-5" />
              </a>
            )}
          </motion.div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[260px] md:max-w-none"
        >
          {/* Clean offset frame instead of a glow */}
          <div className="absolute -bottom-3 -right-3 h-full w-full rounded-[1.75rem] border border-accent/40" aria-hidden />
          <Avatar className="relative aspect-square w-full rounded-[1.75rem] border border-border shadow-sm" />
        </motion.div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto mt-16 w-full max-w-5xl px-5 sm:px-8"
      >
        <div className="grid grid-cols-3 divide-x divide-border overflow-hidden rounded-2xl border border-border bg-surface">
          {profile.stats.map((s) => (
            <div
              key={s.label}
              className="group relative px-4 py-5 text-center transition-colors duration-300 hover:bg-background sm:py-6"
            >
              {/* Accent underline grows from the centre on hover */}
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 mx-auto h-0.5 w-0 bg-gradient-to-r from-accent to-accent-2 transition-all duration-500 group-hover:w-full"
              />
              <CountUp
                value={s.value}
                className="text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent sm:text-3xl"
              />
              <div className="mt-1 text-xs text-muted sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
