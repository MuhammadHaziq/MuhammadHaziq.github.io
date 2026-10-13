import { Metadata } from "next";
import LandingShell from "@/components/landing-shell";
import CaseStudyList from "@/components/case-study-list";
import Testimonials from "@/components/testimonials";
import {
  CardGrid,
  ProcessSteps,
  RegionLinks,
  TechStack,
} from "@/components/landing-sections";
import {
  breadcrumbLd,
  faqLd,
  jsonLd,
  pageMetadata,
  professionalServiceLd,
} from "@/lib/seo";

const PATH = "/web-application-development";

export const metadata: Metadata = pageMetadata({
  path: PATH,
  title: "Web Application Development Services | Muhammad Haziq",
  description:
    "Custom web application development by Muhammad Haziq: SaaS, portals, dashboards and Node.js/React builds for businesses in the USA, UK, UAE and Saudi Arabia.",
  keywords: [
    "web application development",
    "custom web application development",
    "hire web application developer",
    "freelance web application developer",
    "saas development",
    "mvp development",
    "admin dashboard development",
    "customer portal development",
    "node.js react developer",
    "web app developer usa",
    "web app developer uk",
    "web app developer uae",
    "web app developer saudi arabia",
  ],
});

const services = [
  {
    title: "Custom Web Applications",
    body: "Business software built around your workflow: internal tools, booking and ordering systems, CRMs and operations platforms, with secure logins and role-based access.",
  },
  {
    title: "SaaS Products & MVPs",
    body: "Take a product idea to a launched MVP: multi-tenant architecture, subscriptions and billing, onboarding and an admin back office you can grow on.",
  },
  {
    title: "Agentic AI with Claude AI",
    body: "AI agents and LLM-powered features built on Claude AI and integrated into your product, working with your own data and APIs to automate workflows and assist your users.",
  },
  {
    title: "Portals & Admin Dashboards",
    body: "Customer, partner and member portals with registration, document uploads, approvals, analytics charts, exports and real-time notifications.",
  },
  {
    title: "Node.js / NestJS Backends & APIs",
    body: "Scalable REST and GraphQL APIs, background jobs, third-party integrations and database design on PostgreSQL, MySQL or MongoDB.",
  },
  {
    title: "Payment Gateway Integration",
    body: "Production experience with Stripe, Apple Pay, Checkout.com, TAP and Flinks: checkout flows, subscriptions, webhooks, and race-condition-safe payment processing.",
  },
  {
    title: "Performance & Code Rescue",
    body: "Slow pages, slow queries or a codebase nobody wants to touch. I profile, fix bottlenecks, refactor safely and leave the system easier to maintain.",
  },
];

const engagementModels = [
  {
    title: "Fixed-Scope Project",
    body: "A clear scope, milestones and a fixed price agreed after the discovery call. Best for MVPs, new portals and well-defined features.",
  },
  {
    title: "Monthly Retainer",
    body: "A set number of hours each month (part-time, 20–25 hrs/week available) for ongoing development, maintenance and new features.",
  },
  {
    title: "Consulting & Code Review",
    body: "Architecture reviews, performance audits and technical advice for teams that want a senior engineer's second opinion.",
  },
];

const faqs = [
  {
    q: "What kind of web applications do you build?",
    a: "Custom business applications, SaaS products, customer and admin portals, dashboards and the APIs behind them. My work spans insurance, fintech, energy markets, vehicle financing, e-commerce and retail POS.",
  },
  {
    q: "How much does a custom web application cost?",
    a: "It depends on scope: the number of user roles, screens, integrations and how much is already built. After a free 30-minute discovery call I send a written proposal with a fixed price or a monthly rate, so you know the cost before any work starts.",
  },
  {
    q: "Do you handle both frontend and backend?",
    a: "Yes. I build React and Next.js frontends and Node.js/NestJS backends, design the database, integrate payments and third-party APIs, and deploy the application. You work with one senior engineer instead of coordinating several freelancers.",
  },
  {
    q: "Which countries do you work with?",
    a: "I'm based in Dubai and work remotely with clients in the USA, UK, UAE, Saudi Arabia, the wider GCC, Europe, Canada and Pakistan. I overlap with EST, BST and Gulf business hours.",
  },
  {
    q: "Can you take over or improve an existing application?",
    a: "Yes. I regularly refactor legacy code, fix performance problems and resolve production issues such as race conditions in payment flows. I start with a short review so you get a clear picture before committing to larger work.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. After handover I can stay on through a monthly retainer for bug fixes, monitoring, small improvements and new features.",
  },
];

export default function WebApplicationDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd([
          professionalServiceLd,
          faqLd(faqs),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Web Application Development", path: PATH },
          ]),
        ])}
      />
      <LandingShell
        breadcrumb="Web Application Development"
        badgeText="Taking on new web app projects"
        badgeClass="bg-indigo-50 dark:bg-indigo-900/20 border-indigo-100 dark:border-indigo-800/30 text-indigo-700 dark:text-indigo-300"
        h1={
          <>
            Custom Web Application Development
            <br className="hidden sm:block" /> by a Senior Full-Stack Engineer
          </>
        }
        description="I'm Muhammad Haziq. I design and build web applications, SaaS products, portals and dashboards end to end with Node.js, NestJS, React and Next.js, for businesses in the USA, UK, UAE, Saudi Arabia and worldwide."
        regions={["🇺🇸 USA", "🇬🇧 UK", "🇦🇪 UAE", "🇸🇦 Saudi Arabia", "🇪🇺 Europe", "🌍 Worldwide"]}
        differentiators={[
          {
            icon: "🧭",
            title: "One Senior Engineer, End to End",
            body: "Scoping, architecture, frontend, backend, payments and deployment from one person with 7+ years of production experience. No hand-offs and nothing lost between freelancers.",
          },
          {
            icon: "🏦",
            title: "Built for Regulated Industries",
            body: "Production systems for insurance (InsuranceMarket.ae), fintech (FinanceThat) and a national electricity market operator (ISMO). Security and reliability come as standard.",
          },
          {
            icon: "🌐",
            title: "Works Across Time Zones",
            body: "Dubai-based (GMT+4) with overlap for US, UK, EU and Gulf business hours. Async-first, with clear written updates and a reply within 24 hours.",
          },
        ]}
        faqs={faqs}
        cta={{
          headline: "Have a web application to build?",
          subtext:
            "Book a free 30-minute discovery call. You'll get a clear proposal with scope, timeline and price, with no obligation.",
        }}
      >
        <CardGrid heading="What I Build" items={services} />
        <CaseStudyList
          heading="Recent Web Application Projects"
          titles={["InsuranceMarket", "ISMO", "FinanceThat", "LaptopZone", "Kyrio POS"]}
        />
        <Testimonials compact />
        <ProcessSteps />
        <CardGrid heading="Ways to Work Together" items={engagementModels} />
        <TechStack
          items={[
            "React", "Next.js", "TypeScript", "Redux", "Tailwind CSS",
            "Node.js", "NestJS", "Express.js", "REST APIs", "GraphQL",
            "PostgreSQL", "MySQL", "MongoDB", "Redis",
            "Stripe", "Apple Pay", "Checkout.com", "TAP",
            "Docker", "AWS", "CI/CD",
          ]}
        />
        <RegionLinks heading="Where I Work" exclude="/web-application-development/" />
      </LandingShell>
    </>
  );
}
