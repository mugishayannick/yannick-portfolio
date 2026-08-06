/**
 * ─────────────────────────────────────────────────────────────
 *  PROJECTS  —  the products showcased in the "Work" section.
 *
 *  📸 Images: drop the files into `public/projects/` and set
 *     `image: "/projects/<file>.png"` below. Until then the card
 *     renders a styled placeholder — nothing breaks.
 *
 *  🔗 GitHub: paste each repo URL into `github`. Leave it null and
 *     the button simply doesn't render.
 *
 *  ✍️  Health Connect and Open Languages use draft copy — replace
 *     `summary` with your own descriptions.
 * ─────────────────────────────────────────────────────────────
 */

export type ShowcaseProject = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  stack: string[];
  /** Path under /public, e.g. "/projects/sinc.png". null → placeholder. */
  image: string | null;
  /** Repo URL, e.g. "https://github.com/you/repo". null → hidden. */
  github: string | null;
  /** Optional accent pair used for the placeholder + glow. */
  gradient: [string, string];
  live?: string | null;
  year?: string;
  featured?: boolean;
};

export const projects: ShowcaseProject[] = [
  {
    slug: "amaly-smart-donation",
    title: "Amaly Smart Donation",
    tagline: "Fundraising technology",
    summary:
      "Fundraising technology that helps charitable organizations unlock funds — smart donation flows, campaign management and donor-facing experiences built for enterprise scale.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "GraphQL",
      "styled components",
      "nestjs",
      "prisma",
    ],
    image: "/projects/amaly-smart-donation.png",
    github: "https://github.com/amaly-legacy", // 👈 paste repo URL
    gradient: ["#4f46e5", "#0ea5e9"],
    live: "https://amalylegacy.com",
    year: "2024 — Present",
    featured: true,
  },
  {
    slug: "health-connect",
    title: "Health Connect",
    tagline: "Healthcare platform",
    // TODO: replace with your own description
    summary:
      "A healthcare platform connecting patients with providers. Description coming soon — send me the details and I'll drop them in.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image:
      "https://cdn.sanity.io/images/zhkekbh0/production/3c235115c6e3416750c55197e9a1f76d3359416e-1600x785.png?rect=6,0,939,785",
    github: "https://github.com/sevenxhq/healthconnect", // 👈 paste repo URL
    gradient: ["#0ea5e9", "#22d3ee"],
    live: "https://healthconnect.vercel.app/",
    year: "2025",
    featured: true,
  },
  {
    slug: "open-languages",
    title: "Open Languages",
    tagline: "Language learning",
    // TODO: replace with your own description
    summary:
      "A language learning platform. Description coming soon — send me the details and I'll drop them in.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image:
      "https://cdn.sanity.io/images/zhkekbh0/production/91c965dee5409f4d48b8bc7042c70d4b8005c5c4-1920x897.png",
    github: "https://github.com/sevenxhq/openlanguages", // 👈 paste repo URL
    gradient: ["#8b5cf6", "#ec4899"],
    live: "https://openlanguages.vercel.app/",
    year: "2025",
    featured: true,
  },
  {
    slug: "sinc",
    title: "Sinc",
    tagline: "Event management platform",
    summary:
      "An event management platform for creating, promoting and running events — with an organizer dashboard for managing events and ticketing, and a public site for discovering them.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image:
      "https://res.cloudinary.com/dagurahkl/image/upload/v1778152288/344b8e95-6f99-48a6-923a-7cadf32f930e.png",
    github: "https://github.com/sinc-today", // 👈 paste repo URL
    gradient: ["#f59e0b", "#ef4444"],
    live: "https://www.sinc.today",
    year: "2023 — 2024",
    featured: true,
  },
];
