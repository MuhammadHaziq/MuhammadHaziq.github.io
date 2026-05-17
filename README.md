# Project Section Redesign — Single Column Premium Cards

Complete redesign of your portfolio's project section, matching the preview you approved.

---

## 📂 Files to Replace

Copy each file to the exact path in your portfolio:

| File | Replace at this path |
|------|---------------------|
| `project.tsx` | `components/project.tsx` |
| `projects.tsx` | `components/projects.tsx` |
| `data.ts` | `lib/data.ts` |
| `tailwind.config.js` | `tailwind.config.js` (root) |

---

## ✨ What's New

### Visual Design
- **Hero gradient banner** per project (180px), color-coded by project type
  - InsuranceMarket → Blue (fintech/trust)
  - FinanceThat → Teal (financial growth)
  - LaptopZone → Amber (commerce/energy)
  - Kyrio POS → Pink (retail)
- **Decorative industry icon** (shield, car, laptop, POS register)
- **Live status badge** with pulsing green dot — "LIVE · UAE/USA/UK/CA & US"
- **Domain visible** under each project name

### Information Architecture
- **Role + period** clearly displayed: "Senior Backend Engineer · 2023 – Present"
- **3 metric cards** per project (gateways, market rank, integrations, etc.)
- **Color-coded tech tags** grouped by category:
  - 🟣 Purple = Backend (Node.js, NestJS, Express)
  - 🔵 Blue = Languages/Frontend (TypeScript, React, Redux)
  - 🟡 Amber = SQL/Data (MySQL, PostgreSQL, Sequelize, Python, Django)
  - 🟢 Teal = NoSQL/AI (MongoDB, Mongoose, Cursor AI)
  - 🟠 Orange = Payments (Stripe, Apple Pay, Checkout.com, TAP, Flinks)
  - 🔴 Red = Critical/Legacy (Oracle)

### Interactions
- **Hover lift** — card translates up 4px on hover
- **Shadow on hover** — adds depth without being heavy
- **Framer Motion scroll animations** preserved (scale 0.85→1, opacity 0.5→1)
- **CTA button** — "Visit Live Site" with proper border + hover state instead of just an underlined link

### Dark Mode
Fully supports dark mode throughout — all gradients, text colors, tag backgrounds, and borders have dark variants.

### Mobile Responsive
- Cards stack vertically on all screen sizes
- Header height reduces from 180px → 160px on mobile
- Padding adjusts (px-8 → px-5)
- Font sizes scale down appropriately
- Metric grid stays 3 columns even on mobile (just smaller)

---

## 🔍 Data Structure Changes

The new `projectsData` structure adds these fields per project:

```typescript
{
  title: "InsuranceMarket",           // Brand name (shown in gradient banner)
  subtitle: "UAE's Leading Insurance Platform",  // Project description
  role: "Senior Backend Engineer",    // NEW: your role
  period: "2023 – Present",           // NEW: time period
  location: "UAE",                    // NEW: shown in live badge
  domain: "insurancemarket.ae",       // NEW: shown under title
  link: "https://insurancemarket.ae/",
  description: "...",
  metrics: [                          // NEW: 3 metric cards
    { label: "PAYMENT GATEWAYS", value: "3+" },
    { label: "MARKET RANK", value: "#1 UAE" },
    { label: "FOCUS AREA", value: "Fintech" },
  ],
  tags: [...],
  icon: MdShield,                     // NEW: react-icons component
  theme: {                            // NEW: color theme
    gradient: "from-blue-100 to-blue-300 dark:...",
    titleColor: "text-blue-900 dark:text-blue-100",
    domainColor: "text-blue-700 dark:text-blue-300",
    statusText: "text-green-800 dark:text-green-300",
    iconColor: "text-blue-700 dark:text-blue-300",
  },
}
```

---

## ✏️ How to Customize

### Change a Metric
Open `lib/data.ts`, find the project, edit the `metrics` array. Each metric needs:
```typescript
{ label: "ALL CAPS LABEL", value: "Display Text" }
```

### Change a Card's Color Theme
In `lib/data.ts`, update the `theme` object. Available colors:
- `blue`, `teal`, `amber`, `pink`, `purple`, `red`, `green`, `orange`

Example to make a card purple:
```typescript
theme: {
  gradient: "from-purple-100 to-purple-300 dark:from-purple-900/40 dark:to-purple-700/30",
  titleColor: "text-purple-900 dark:text-purple-100",
  domainColor: "text-purple-700 dark:text-purple-300",
  statusText: "text-green-800 dark:text-green-300",
  iconColor: "text-purple-700 dark:text-purple-300",
}
```

**Note:** If you use a new color not in the safelist, add it to `tailwind.config.js` safelist array, or Tailwind will purge it.

### Change a Card's Icon
In `lib/data.ts`, import the icon at top:
```typescript
import { MdRocket } from "react-icons/md";
```
Then update `icon: MdRocket` in the project. Browse all icons at:
https://react-icons.github.io/react-icons

### Add a Tag with a New Color
Open `components/project.tsx`, find the `getTagStyle` function, add:
```typescript
"GraphQL": "bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-200",
```

---

## 🚀 Deploy

```bash
npm install
npm run build
git add .
git commit -m "Redesign project section with premium single-column cards"
git push
```

GitHub Pages will rebuild automatically.

---

## 🧪 Test Checklist After Deploy

1. ☐ All 4 project cards render in single column
2. ☐ Gradient headers display correctly
3. ☐ Live status badges show with pulsing dots
4. ☐ Hover effect lifts cards smoothly
5. ☐ "Visit Live Site" buttons open correct URLs in new tab
6. ☐ Metric cards display 3 across
7. ☐ Tags are color-coded by category
8. ☐ Dark mode toggle works (if enabled on your site)
9. ☐ Mobile view stacks cards properly
10. ☐ Framer Motion scroll animation triggers on each card

---

## ❓ Need More?

Want me to:
- Add **real project screenshots** as backgrounds instead of gradient banners?
- Add a **"Featured" badge** to specific projects?
- Create a **"View all projects" link** that loads more projects from GitHub?
- Build a **filter system** (filter by tech: "Show only fintech projects")?
- Add **case study modal** that opens detailed view on click?

Just ask.