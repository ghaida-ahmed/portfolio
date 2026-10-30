# Portfolio

A single-page software-engineer portfolio built with **React + Vite + Tailwind CSS**.

This repository currently contains the **structure, design system, and reusable
components only**. Every section renders an intentional placeholder / empty
state — no personal content has been added yet. Content is filled in
incrementally by editing the data files described below.

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Where content goes

All content lives in plain data files so you never have to touch component code:

| File | Fills |
| --- | --- |
| `src/data/profile.js` | Name, title, intro, about, avatar, CV link, email, location, social links, nav order |
| `src/data/projects.json` | Featured & other project cards (image, tags, description, demo video, GitHub / live links) |
| `src/data/skills.json` | Skill categories and icon cards (`icon` = a key from `src/lib/skillIcons.js`) |
| `src/data/experiences.json` | Experience, leadership & award timeline entries |
| `src/data/certifications.json` | Certification cards |

Each JSON file includes a `$schema` / `$example` key documenting its shape.

### Assets

Static files are served from `public/assets/`:

- `public/assets/avatar.<ext>` — profile image → set `profile.avatar`
- `public/assets/cv.pdf` — résumé → set `profile.cvUrl`
- `public/assets/projects/` — project covers & demo videos
- `public/assets/certifications/` — credential badges

## Architecture

```
src/
├── App.jsx                     # assembles the sections in order
├── main.jsx                    # entry + ThemeProvider
├── index.css                   # Tailwind layers + design tokens
├── context/ThemeContext.jsx    # light/dark theme (persisted, no-flash)
├── hooks/useActiveSection.js    # highlights the active sidebar nav item
├── lib/cn.js                   # className helper
├── data/                       # ← all content lives here
└── components/
    ├── layout/                 # Sidebar, Layout (fixed rail + mobile drawer)
    ├── ui/                     # Badge, Pill, Button, Card, Section, Modal,
    │                           #   EmptyState, ThemeToggle, SocialIcon
    ├── projects/               # ProjectCard, ProjectGrid, ProjectModal
    ├── skills/                 # SkillCard, SkillCategory
    ├── experience/             # TimelineItem
    ├── certifications/         # CertificationCard
    └── sections/               # About, FeaturedProjects, OtherProjects,
                                #   Skills, Experience, Certifications, Contact
```

## Design system

- **Type:** Cabinet Grotesk (display / headings) + Switzer (body) via Fontshare, JetBrains Mono for small technical labels.
- **Theme:** class-based dark mode with a pre-paint script (no flash), toggle in the sidebar. Dark surface is a deep near-black (`#0a0a12`).
- **Accent color:** defined once as the `accent` scale in `tailwind.config.js` — change it there to rebrand.
- **Primitives:** `Badge`, `Pill`, `Button`, `Card`, `Section`, `Modal`, `EmptyState`, `Reveal`.
- **Shadows:** layered, low-opacity `soft` / `soft-lg` / `lift` / `glow` scale in the Tailwind config.
- **Motion:** subtle only — staggered scroll reveals (`Reveal`) on grids, soft hover lifts on an ease-out-expo curve; fully respects `prefers-reduced-motion`.
- **Icons:** [lucide-react](https://lucide.dev), with a tree-shaken skill-icon registry in `src/lib/skillIcons.js`.
- **Animation:** [framer-motion](https://www.framer.com/motion/) for the modal, mobile drawer, and reveals.

## Sections

About · Featured Projects · Other Projects · Skills · Experience & Leadership ·
Certifications · Contact
