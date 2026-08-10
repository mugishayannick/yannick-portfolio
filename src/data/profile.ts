/**
 * PROFILE. Everything about "you" lives here.
 */

export const profile = {
  name: "Yannick Mugisha",
  // Canonical production URL. Drives OG tags, sitemap and robots.
  // Set NEXT_PUBLIC_SITE_URL in your host's env to override.
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://yannick-portfolio-nu.vercel.app/",
  // Short handle used in the logo / footer
  shortName: "Yannick",
  role: "Front-End & Full-Stack Developer",
  location: "Kigali, Rwanda",

  // One line for the hero
  tagline:
    "I build web and mobile products with React, Next.js and TypeScript.",

  // A couple of sentences for the About section
  bio: "I'm a frontend developer based in Kigali. For the past four years I've worked mostly in React, Next.js and TypeScript, building products for fundraising, healthcare and events. I care about interfaces that stay fast and readable as they grow.",

  // Availability badge in the hero ("open" shows a green dot)
  availability: "open", // "open" | "busy"
  availabilityText: "Open to new opportunities",

  // Headline stats shown in the hero / about (edit freely)
  stats: [
    { value: "4+", label: "Years experience" },
    { value: "5+", label: "Companies" },
    { value: "90%", label: "Traffic lift shipped" },
  ],

  // Assets. Drop your files in /public and keep these paths.
  avatar: "/yannick_passport.JPEG",
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
