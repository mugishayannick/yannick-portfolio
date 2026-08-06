# Yannick Mugisha — Portfolio

A modern, animated portfolio built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**,
**Framer Motion** (subtle animations) and **next-themes** (dark / light toggle).

## Run it

```bash
npm run dev      # start dev server → http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Where to edit your content

All content lives in `src/data/` — no need to touch the components:

| File | What it holds |
|------|---------------|
| `src/data/profile.ts` | Name, role, tagline, bio, stats, email, socials, avatar & resume paths |
| `src/data/experience.ts` | **Your professional work** (the main section) — one block per project |
| `src/data/skills.ts` | Skill groups + tags |

## ✅ Things I need from you

Search the data files for `TODO` — each marks a placeholder to confirm. In particular:

1. **Profile photo** → drop a square image at `public/profile.jpg`
   (until then it shows your initials on a gradient — no broken image).
2. **Resume/CV** (optional) → drop `public/resume.pdf`, or set `resume: null` in `profile.ts` to hide the button.
3. **LinkedIn URL** → confirm in `profile.ts`.
4. **Professional projects** in `experience.ts` — I seeded best-effort placeholders for
   **Amaly Legacy (Spark Fundraising)**, **Health Connect** and a **Sinc** project.
   Please correct for each: the real **title**, **org**, **role**, **dates (`period`)**,
   **summary**, **contributions** (make them specific & measurable), **stack**, and a
   public **`live`** link if there is one. Add or remove blocks freely.

## Theming

Colors are CSS variables in `src/app/globals.css` (`:root` for light, `.dark` for dark).
Change `--accent` / `--accent-2` to re-skin the whole site.

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com) — zero config.
