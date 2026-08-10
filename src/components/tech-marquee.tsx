import { technologies } from "@/data/skills";

export function TechMarquee() {
  return (
    <div className="group relative overflow-hidden border-y border-border bg-surface/50 py-4">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

      {/* Pauses on hover so the strip is readable */}
      <div className="flex w-max animate-marquee gap-10 pr-10 group-hover:[animation-play-state:paused]">
        {/* Duplicated once for a seamless -50% loop */}
        {[...technologies, ...technologies].map((t, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-3 text-sm text-muted"
          >
            <span className="h-1 w-1 rounded-full bg-muted" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
