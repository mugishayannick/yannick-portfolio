/**
 * ─────────────────────────────────────────────────────────────
 *  PROFILE  —  edit everything about "you" here.
 *  Anything marked TODO is a placeholder you should confirm.
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Yannick Mugisha",
  // Canonical production URL — drives OG tags, sitemap and robots.
  // Set NEXT_PUBLIC_SITE_URL in your host's env to override.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://yannickmugisha.vercel.app",
  // Short handle used in the logo / footer
  shortName: "Yannick",
  role: "Front-End & Full-Stack Developer",
  location: "Kigali, Rwanda",

  // One punchy line for the hero
  tagline:
    "I turn design mockups into responsive, enterprise-grade web & mobile products — with React, Next.js and TypeScript.",

  // 2–3 sentences for the About section
  bio: "I'm a Front-End & Full-Stack Developer experienced in building responsive, enterprise-grade applications with React.js, TypeScript, Node.js and React Native. I have a proven track record of transforming design mockups into engaging web and mobile experiences while collaborating with cross-functional teams. I bring expertise in GraphQL integrations, code-quality practices and agile development — consistently shipping measurable improvements.",

  // Availability badge in the hero ("open" shows a green dot)
  availability: "open", // "open" | "busy"
  availabilityText: "Open to new opportunities",

  // Headline stats shown in the hero / about (edit freely)
  stats: [
    { value: "4+", label: "Years experience" },
    { value: "5+", label: "Companies" },
    { value: "90%", label: "Traffic lift shipped" },
  ],

  // Assets — drop your files in /public and keep these paths.
  // TODO: add your photo at public/profile.jpg (a square image works best)
  avatar: "/yannick_passport.JPEG",
  // TODO (optional): add your CV at public/resume.pdf, or set to null to hide the button
  resume: "/resume.pdf",

  // Contact + socials. Set any value to null to hide it.
  email: "yannickmugisha23@gmail.com",
  phone: "+250 787 935 762",
  socials: {
    github: "https://github.com/mugishayannick",
    // TODO: confirm your LinkedIn URL
    linkedin: "https://www.linkedin.com/in/mugisha-yannick-1265361a1/",
    // TODO (optional): add X/Twitter, or set to null
    twitter: null as string | null,
  },
} as const;
