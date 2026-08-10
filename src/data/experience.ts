/**
 * PROFESSIONAL EXPERIENCE. Set `featured: true` on the ones to highlight.
 */

export type Project = {
  slug: string;
  title: string;
  org: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  contributions: string[];
  stack: string[];
  category: "Full-Stack" | "Frontend" | "Backend" | "Mobile";
  live?: string | null;
  featured?: boolean;
};

export const experience: Project[] = [
  {
    slug: "amaly-legacy",
    title: "Amaly Legacy",
    org: "Amaly Legacy",
    role: "Frontend Engineer",
    period: "Jan 2024 - Present",
    location: "Remote (Sheridan, WY · UAE)",
    summary:
      "Fundraising platform for charitable organizations. I lead front-end development of the product interfaces.",
    contributions: [
      "Led development of responsive, component-based UIs with React.js, Next.js and styled components.",
      "Integrated GraphQL APIs and managed application state with modern libraries to improve performance.",
      "Implemented internationalization and accessibility improvements following secure-coding best practices.",
      "Maintained code quality through rigorous Git version control and regular code reviews.",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GraphQL",
      "styled components",
      "nestjs",
      "prisma",
    ],
    category: "Frontend",
    live: "https://amalylegacy.com",
    featured: true,
  },
  {
    slug: "sinc",
    title: "Sinc",
    org: "Sinc",
    role: "Frontend Engineer",
    period: "Jan 2023 - Mar 2024",
    location: "Remote",
    summary:
      "Event management platform. I worked only on the frontend: the organizer dashboard and the public discovery site.",
    contributions: [
      "Developed key frontend features for an event management platform, including the organizer dashboard and event discovery website, using Next.js, TypeScript, and TailwindCSS.",
      "Collaborated closely with the backend team on API contracts and integrated REST endpoints for events, ticketing and organizer data.",
      "Translated Figma designs into reusable, responsive components and improved accessibility and cross-device consistency across the platform.",
      "Participated in agile cycles with thorough code reviews and debugging via Git.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs"],
    category: "Frontend",
    live: null,
    featured: true,
  },
  {
    slug: "zetalight-sevenx",
    title: "Zetalight (SevenX)",
    org: "Zetalight (SevenX)",
    role: "Frontend Developer",
    period: "Sep 2022 - Jan 2024",
    location: "Kigali",
    summary:
      "Frontend developer across several client projects, building interfaces from Figma and wiring them to GraphQL APIs.",
    contributions: [
      "Built pixel-accurate interfaces from Figma designs across multiple projects, ensuring every page stayed fully responsive on all screen sizes.",
      "Managed application state with React hooks, Context and Zustand, keeping data flow predictable as features grew.",
      "Collaborated with the backend team to shape and consume GraphQL APIs, ensuring queries and mutations matched frontend needs.",
      "Redesigned key website sections, boosting daily traffic by 90%, and improved accessibility throughout.",
    ],
    stack: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "GraphQL",
      "Zustand",
      "Figma",
    ],
    category: "Frontend",
    live: null,
    featured: true,
  },
  {
    slug: "solvit-africa",
    title: "Solvit Africa",
    org: "Solvit Africa",
    role: "Frontend Developer Trainee",
    period: "Jul 2022 - Sep 2022",
    location: "Kigali",
    summary:
      "Frontend training in HTML, CSS and JavaScript, ending with a team-built chat app.",
    contributions: [
      "Completed hands-on training in HTML, CSS and JavaScript, building responsive interfaces from scratch.",
      "Collaborated with a team to build a WhatsApp-style chat application with real-time messaging and conversation views.",
      "Ensured cross-browser and multi-device compatibility across the interfaces we shipped.",
    ],
    stack: ["HTML & CSS", "JavaScript", "Responsive Design"],
    category: "Frontend",
    live: null,
    featured: false,
  },
  {
    slug: "andela",
    title: "Andela",
    org: "Andela",
    role: "Full-Stack Apprentice",
    period: "Dec 2021 - Apr 2022",
    location: "Kigali",
    summary:
      "Full-stack apprenticeship: structured training plus real team projects.",
    contributions: [
      "Built full-stack applications using React, Express, and PostgreSQL as part of structured training and team projects.",
      "Developed an e-commerce platform in a team environment, participating in code reviews, rotating leadership roles, and implementing basic testing practices.",
      "Presented weekly demos and participated in Agile ceremonies, strengthening collaboration and communication skills.",
    ],
    stack: ["React", "Express", "PostgreSQL", "Node.js", "JavaScript"],
    category: "Full-Stack",
    live: null,
    featured: false,
  },
];
