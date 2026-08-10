/**
 * CERTIFICATIONS. Skill lists come from the credential itself.
 * `issued` is optional: fill it in and the date appears.
 */

export type Certification = {
  slug: string;
  title: string;
  issuer: string;
  /** e.g. "Mar 2025". null hides the date. */
  issued: string | null;
  summary: string;
  skills: string[];
  /** Verification URL. null hides the button. */
  credential: string | null;
};

export const certifications: Certification[] = [
  {
    slug: "ibm-intro-software-engineering",
    title: "Introduction to Software Engineering",
    issuer: "IBM",
    issued: null,
    summary:
      "Software development lifecycle, architecture and design patterns, front-end and back-end fundamentals.",
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
  },
  {
    slug: "ibm-intro-cloud-computing",
    title: "Introduction to Cloud Computing",
    issuer: "IBM",
    issued: null,
    summary:
      "Cloud service models, virtual machines and IaaS, serverless, microservices and hybrid cloud.",
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
  },
];
