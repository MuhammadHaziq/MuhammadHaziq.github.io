# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build (outputs static files to /out)
npm run start    # Serve the production build
npm run lint     # Run ESLint
```

There are no automated tests. The contact form and overall layout are verified manually in the browser.

## Architecture

This is a **Next.js 13 static-export portfolio site** (no server-side rendering). `next.config.js` sets `output: "export"`, meaning `npm run build` generates a fully static `/out` directory that is deployed to GitHub Pages via `.github/workflows/main.yml`.

### Data flow

All portfolio content (nav links, experience timeline, projects, skills) lives in a single source-of-truth file: `lib/data.ts`. To update any content on the site, edit only that file.

### Section detection pattern

Each page section (`About`, `Skills`, `Experience`, etc.) uses the `useSectionInView` hook from `lib/hooks.ts`, which wraps `react-intersection-observer`. When a section scrolls into view it calls `setActiveSection` from `ActiveSectionContext` (`context/active-section-context.tsx`). The `Header` reads `activeSection` to highlight the current nav link. `timeOfLastClick` prevents the observer from overriding a manual nav click for 1 second.

### Framer Motion wrappers

Because Next.js 13 requires `"use client"` for any component using Framer Motion, motion primitives are wrapped in thin client components under `components/Motion/` (`MotionWrapper.tsx`, `MotionSectionWrapper.tsx`, etc.). Use these wrappers instead of importing `motion.*` directly in server components.

### Contact form

The form (`components/contact.tsx`) opens a `mailto:` link in the user's default email client — there is no backend API. The recipient address comes from the `CONTACT_EMAIL` env var, falling back to a hardcoded Gmail address. In CI, this is set via the GitHub repository variable `vars.CONTACT_EMAIL` (see `.github/workflows/main.yml`).

### Theming

Dark/light mode is managed by `ThemeContext` (`context/theme-context.tsx`). The toggle is `components/theme-switch.tsx`. Tailwind's `dark:` variant is used throughout; the root `<html>` receives a `dark` class based on context state.

### Environment variable

`CONTACT_EMAIL` is the only env var used. Set it in `.env.local` for local development, and as a GitHub repository variable (`vars.CONTACT_EMAIL`) for CI/CD deployments.
