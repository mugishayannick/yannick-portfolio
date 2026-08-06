import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "./ui/reveal";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        {/* Matches the rise used by the shared <Section> shell */}
        <Reveal y={56}>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-14 text-center sm:px-12 sm:py-20">
            {/* Subtle dotted texture instead of a glow */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.5] dark:opacity-[0.3]"
              style={{
                backgroundImage:
                  "radial-gradient(color-mix(in srgb, var(--foreground) 12%, transparent) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
                maskImage: "radial-gradient(ellipse 70% 80% at 50% 0%, #000, transparent 75%)",
                WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 50% 0%, #000, transparent 75%)",
              }}
              aria-hidden
            />
            <h2 className="relative text-3xl font-semibold tracking-tight sm:text-5xl">
              Let&apos;s build something <span className="text-gradient">meaningful</span>.
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-base text-muted">
              Have a project, a role, or an idea? I&apos;d love to hear about it.
            </p>

            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="group/mail relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                {/* Light sweeps across the button on hover */}
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover/mail:translate-x-full"
                />
                <Mail className="relative h-4 w-4 transition-transform duration-300 group-hover/mail:-rotate-12" />
                <span className="relative">{profile.email}</span>
              </a>
              {profile.socials.linkedin && (
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group/soc inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  <LinkedinIcon className="h-4 w-4" /> LinkedIn{" "}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/soc:translate-x-0.5 group-hover/soc:-translate-y-0.5" />
                </a>
              )}
              {profile.socials.github && (
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group/soc inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  <GithubIcon className="h-4 w-4" /> GitHub{" "}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/soc:translate-x-0.5 group-hover/soc:-translate-y-0.5" />
                </a>
              )}
            </div>

            {profile.phone && (
              <p className="relative mt-6 text-sm text-muted">
                Prefer a call?{" "}
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="font-medium text-foreground transition-colors hover:text-accent">
                  {profile.phone}
                </a>
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
