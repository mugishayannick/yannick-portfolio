/**
 * PROJECTS shown in the Work section.
 *
 * Images: local files go in `public/projects/`, remote hosts must be
 * allowlisted in next.config.ts.
 */

export type ShowcaseProject = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  /** Path under /public, e.g. "/projects/sinc.png". null hides it. */
  image: string | null;
  /** Repo URL, e.g. "https://github.com/you/repo". null hides it. */
  github: string | null;
  live?: string | null;
  year?: string;
  featured?: boolean;
};

export const projects: ShowcaseProject[] = [
  {
    slug: "amaly-smart-donation",
    title: "Amaly Smart Donation",
    summary:
      "Fundraising platform for charitable organizations. Donation flows, campaign management and the donor-facing site.",
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
    github: "https://github.com/amaly-legacy",
    live: "https://amalylegacy.com",
    year: "Since 2024",
    featured: true,
  },
  {
    slug: "health-connect",
    title: "Health Connect",
    summary: "Healthcare platform connecting patients with providers.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image:
      "https://cdn.sanity.io/images/zhkekbh0/production/3c235115c6e3416750c55197e9a1f76d3359416e-1600x785.png?rect=6,0,939,785",
    github: "https://github.com/sevenxhq/healthconnect",
    live: "https://healthconnect.vercel.app/",
    year: "2025",
    featured: true,
  },
  {
    slug: "open-languages",
    title: "Open Languages",
    summary: "Language learning platform.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image:
      "https://cdn.sanity.io/images/zhkekbh0/production/91c965dee5409f4d48b8bc7042c70d4b8005c5c4-1920x897.png",
    github: "https://github.com/sevenxhq/openlanguages",
    live: "https://openlanguages.vercel.app/",
    year: "2025",
    featured: true,
  },
  {
    slug: "sinc",
    title: "Sinc",
    summary:
      "Event management platform. Organizer dashboard for events and ticketing, plus the public discovery site.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image:
      "https://res.cloudinary.com/dagurahkl/image/upload/v1778152288/344b8e95-6f99-48a6-923a-7cadf32f930e.png",
    github: "https://github.com/sinc-today",
    live: "https://www.sinc.today",
    year: "2023-2024",
    featured: true,
  },
];
