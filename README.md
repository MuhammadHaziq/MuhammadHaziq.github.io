# Muhammad Haziq — Portfolio

**Senior Node.js & Fintech Engineer** · 7+ years building payment systems, scalable APIs and fintech backends.

🌐 **Live site:** [muhammadhaziq.github.io](https://muhammadhaziq.github.io)
📅 **Book a call:** [calendly.com/muhammadhaziq/30min](https://calendly.com/muhammadhaziq/30min)
💼 [LinkedIn](https://www.linkedin.com/in/muhammad-haziq/) · 🐙 [GitHub](https://github.com/MuhammadHaziq) · ✉️ muhammadhaziq341@gmail.com

I'm a Senior Software Engineer based in Dubai (GMT+4). I'm available for remote contract, part-time and consulting work in the UK, EU, US, Canada and UAE.

---

## About this site

This is my personal portfolio, built with **Next.js 13 (App Router)** and exported as a fully static site to **GitHub Pages**. It includes:

- **Home page:** intro, trust bar, about, featured projects, skills, experience timeline, availability, latest blog posts, FAQ and a contact form
- **Technical blog:** Markdown posts on Node.js, NestJS, fintech and AI-assisted development
- **Contact page:** an embedded Calendly booking widget alongside a message form
- **SEO landing pages:** pages targeted at specific roles and regions
- **Dark / light mode**, smooth Framer Motion animations and a scroll-aware navigation bar
- **SEO metadata:** Open Graph and Twitter cards, plus JSON-LD structured data (Person, WebSite, FAQPage, BreadcrumbList and TechArticle)

### Featured work

| Project | Role | Market | Highlights |
|---|---|---|---|
| [InsuranceMarket.ae](https://insurancemarket.ae/) | Senior Backend Engineer (2023 – present) | UAE | NestJS, TypeScript, MySQL/Sequelize; Apple Pay, Checkout.com and TAP gateways; fixed race conditions in async payment flows |
| [ISMO](https://www.ismo.gov.pk/) | Frontend Developer, solo (2024 – 2025) | Pakistan | Electricity market operator platform in React 18 + Redux; Market Participant portal with registration, e-signed declarations, balance and compliance dashboards; admin views; Pusher notifications |
| [FinanceThat](https://financethat.ca) | Lead Developer (2021 – 2023) | Canada & US | Vehicle financing platform; Stripe subscriptions, Flinks KYC and credit reports; React/Redux |
| [LaptopZone](https://laptopzoneusa.com) | Full-Stack Developer (2018 – 2021) | USA | E-commerce with checkout, inventory and order tracking; Node.js, Express, Oracle |
| [Kyrio POS](https://dashboard.kyriopos.com/#/summary) | Full-Stack Developer (2018 – 2021) | UK | Offline-first retail POS with role-based access and real-time analytics; MERN stack |

### Blog posts

- Why Sequelize `findOne` with multiple includes is slow (and how to fix it)
- Resolving race conditions in NestJS payment flows
- How I use AI tools to ship Node.js features faster without cutting corners
- NestJS architecture patterns for fintech applications

Read them at [/blog](https://muhammadhaziq.github.io/blog/).

---

## Tech stack

| Area | Tools |
|---|---|
| Framework | Next.js 13.4 (App Router, `output: "export"`), React 18, TypeScript |
| Styling | Tailwind CSS (`dark:` variant), Inter via `next/font` |
| Animation | Framer Motion, `react-intersection-observer` |
| UI | `react-icons`, `react-vertical-timeline-component`, `react-hot-toast` |
| Blog | Markdown files with `gray-matter` front matter, rendered by `marked` at build time |
| Scheduling | Calendly inline embed |
| Hosting | GitHub Pages, deployed by GitHub Actions |

---

## Getting started

**Prerequisites:** Node.js 18+ (CI uses Node 22) and npm.

```bash
git clone git@github.com:MuhammadHaziq/MuhammadHaziq.github.io.git
cd MuhammadHaziq.github.io
npm install
npm run dev        # http://localhost:3000
```

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Starts the dev server at `localhost:3000` |
| `npm run build` | Builds the production site and writes static HTML to `/out` |
| `npm run lint` | Runs ESLint |

To preview the production build locally, run `npx serve out` after `npm run build`. (`next start` doesn't work with a static export.)

There are no automated tests. Check layout, theme switching and the contact form by hand in the browser.

### Running with Docker

```bash
docker compose up --build                            # production build behind Nginx → http://localhost:8080
docker compose --profile dev up --build portfolio-dev  # dev server with hot reload → http://localhost:3000
```

To bake in the contact email, run `CONTACT_EMAIL=you@example.com docker compose up --build`. The production image builds the static export and serves `/out` with Nginx, using `nginx.conf`.

### Environment variables

| Variable | Purpose | Default |
|---|---|---|
| `CONTACT_EMAIL` | Recipient address for the contact forms | `muhammadhaziq341@gmail.com` |

For local development, put it in `.env.local`:

```bash
CONTACT_EMAIL=you@example.com
```

---

## Project structure

```
app/
  layout.tsx                    # Root layout: metadata, JSON-LD, theme + section providers, header/footer
  page.tsx                      # Home page (composes all sections)
  icon.png                      # Favicon / browser-tab icon
  blog/page.tsx                 # Blog index
  blog/[slug]/page.tsx          # Blog post (statically generated from /posts)
  contact/page.tsx              # Calendly + contact form
  hire-nodejs-developer-uk/     # ┐
  hire-nodejs-developer-usa/    # │
  fintech-developer-uae/        # │ SEO landing pages
  backend-architect-dubai/      # │ (most use components/landing-shell.tsx)
  nestjs-developer-remote/      # │
  remote-mern-stack-developer/  # │
  remote-typescript-developer/  # ┘
components/
  intro, about, projects, project, skills, experience, availability,
  trust-bar, blog-preview, faq, contact, contact-form, calendly-embed,
  header, footer, theme-switch, landing-shell, ...
  Motion/                       # "use client" wrappers around framer-motion primitives
context/
  active-section-context.tsx    # Tracks which section is in view, for nav highlighting
  theme-context.tsx             # Dark / light mode
lib/
  data.ts                       # ⭐ Single source of truth: nav links, experience, projects, skills
  blog.ts                       # Reads and parses Markdown posts from /posts
  hooks.ts                      # useSectionInView
  types.ts, utils.ts
posts/                          # Blog posts (.md with front matter)
public/                         # Images, profile photo, résumé PDF, sitemap.xml, robots.txt
.github/workflows/main.yml      # Build and deploy to GitHub Pages
Dockerfile, Dockerfile.dev, docker-compose.yml, nginx.conf   # Optional container setup
```

---

## Updating content

### Projects, experience, skills and nav links

Edit **`lib/data.ts`**. It is the only place this content lives. Project screenshots and logos go in `public/`.

### Résumé

Replace `public/Muhammad-Haziq-Senior-Software-Engineer.pdf`. If you rename the file, update the link in `components/intro.tsx` to match.

### Adding a blog post

Create `posts/<slug>.md`. The file name becomes the URL (`/blog/<slug>/`).

```markdown
---
title: "Post title"
date: "2026-06-01"
description: "One-sentence summary used for the card and meta description."
tags: ["Node.js", "NestJS"]
readTime: "6 min read"
---

Post body in Markdown…
```

Posts are sorted newest first. Also add the new URL to `public/sitemap.xml`.

### Calendly link

Change `CALENDLY_URL` in `components/calendly-embed.tsx`. Every "Book a call" button uses it.

---

## How it works

- **Static export.** `next.config.js` sets `output: "export"` and `trailingSlash: true`, so the site has no server at runtime. Blog pages are generated at build time through `generateStaticParams`.
- **Active-section highlighting.** Each home-page section calls `useSectionInView("Name")` (`lib/hooks.ts`). When the section scrolls into view, the hook updates `ActiveSectionContext` and the header highlights the matching link. After a nav click, `timeOfLastClick` stops the observer from overriding the selection for 1 second.
- **Framer Motion in the App Router.** Motion components must be client components, so the code imports the thin wrappers in `components/Motion/` rather than `motion.*` directly.
- **Contact form.** There is no backend. Submitting the form opens the visitor's email client through a pre-filled `mailto:` link addressed to `CONTACT_EMAIL`.
- **Theming.** `ThemeContext` adds or removes the `dark` class on `<html>`, and `components/theme-switch.tsx` toggles it.

---

## Deployment

Every push to `main` triggers `.github/workflows/main.yml`, which:

1. Installs dependencies with `npm ci` on Node 22
2. Runs `next build` with `CONTACT_EMAIL` taken from the repository variable `vars.CONTACT_EMAIL`
3. Adds `.nojekyll` and uploads `./out` as the Pages artifact
4. Deploys it to GitHub Pages

To set the email used in production, go to **Settings → Secrets and variables → Actions → Variables** and add `CONTACT_EMAIL`. The **Test Email Variable** workflow (`test-email.yml`, run manually) checks that the variable is set.

You can also trigger a deploy manually from the **Actions** tab using `workflow_dispatch`.

---

## License

© Muhammad Haziq. All rights reserved. The code structure is free to learn from, but please don't republish the personal content (bio, projects, blog posts, images and résumé) as your own.
