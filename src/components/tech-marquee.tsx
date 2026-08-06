const items = [
  "React.js",
  "Next.js",
  "TypeScript",
  "React Native",
  "Tailwind CSS",
  "GraphQL",
  "Node.js",
  "Angular",
  "PostgreSQL",
  "JavaScript",
  "Flutter",
  "Git",
];

export function TechMarquee() {
  return (
    <div className="group relative overflow-hidden border-y border-border bg-surface/50 py-4">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

      {/* Pauses on hover so the strip is readable */}
      <div className="flex w-max animate-marquee gap-10 pr-10 group-hover:[animation-play-state:paused]">
        {/* Duplicated once for a seamless -50% loop */}
        {[...items, ...items].map((t, i) => (
          <span
            key={i}
            className="group/tech flex shrink-0 cursor-default items-center gap-3 text-lg font-medium text-muted transition-colors duration-300 hover:text-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-accent to-accent-2 transition-transform duration-300 group-hover/tech:scale-150" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
