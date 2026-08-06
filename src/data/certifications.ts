/**
 * ─────────────────────────────────────────────────────────────
 *  CERTIFICATIONS
 *
 *  Skill lists are the credential's own listed skills.
 *
 *  ✍️  `issued` is still blank on both — add the month/year you earned each
 *      one (e.g. "Apr 2025") and the date chip appears automatically.
 * ─────────────────────────────────────────────────────────────
 */

export type Certification = {
  slug: string;
  title: string;
  issuer: string;
  /** e.g. "Mar 2025" — rendered as-is. null hides the date. */
  issued: string | null;
  summary: string;
  skills: string[];
  /** Verification URL. null → the button is hidden. */
  credential: string | null;
  gradient: [string, string];
};

export const certifications: Certification[] = [
  {
    slug: "ibm-intro-software-engineering",
    title: "Introduction to Software Engineering",
    issuer: "IBM",
    issued: null, // 👈 e.g. "Apr 2025"
    summary:
      "The software development lifecycle end to end — architecture and design patterns, front-end and back-end development, and the process discipline that holds a codebase together.",
    skills: [
      "Software Development",
      "Application Development",
      "Software Architecture",
      "Software Design",
      "Software Design Patterns",
      "Software Development Life Cycle (SDLC)",
      "Front-End Development",
      "Back-End Web Development",
      "Web Applications",
      "Python (Programming Language)",
      "Software Versioning",
    ],
    credential:
      "https://www.coursera.org/account/accomplishments/verify/QAYSX3Y6L2GI",
    gradient: ["#4f46e5", "#8b5cf6"],
  },
  {
    slug: "ibm-intro-cloud-computing",
    title: "Introduction to Cloud Computing",
    issuer: "IBM",
    issued: null, // 👈 e.g. "Mar 2025"
    summary:
      "Cloud models and infrastructure in practice — from virtual machines and IaaS through to serverless, microservices and hybrid cloud architecture.",
    skills: [
      "Cloud Computing",
      "Cloud Services",
      "Infrastructure as a Service (IaaS)",
      "Hybrid Cloud Computing",
      "Serverless Computing",
      "Microservices",
      "Virtual Machines",
      "Cloud Storage",
      "Cloud Security",
      "IBM Cloud",
    ],
    credential:
      "https://www.coursera.org/account/accomplishments/verify/KKQ0AYI51J8W",
    gradient: ["#0ea5e9", "#22d3ee"],
  },
];
