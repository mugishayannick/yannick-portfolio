"use client";

/**
 * Page background: a fine dotted grid that fades toward the bottom, plus a
 * faint grain overlay. Static and neutral, so it stays out of the way.
 */
export function AnimatedBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.25]"
        style={{
          backgroundImage:
            "radial-gradient(color-mix(in srgb, var(--foreground) 11%, transparent) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "linear-gradient(to bottom, #000 0%, #000 55%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, #000 0%, #000 55%, transparent 100%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
