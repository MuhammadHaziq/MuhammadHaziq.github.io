import { Metadata } from "next";
import LandingShell from "@/components/landing-shell";
import CaseStudyList from "@/components/case-study-list";
import {
  CardGrid,
  ProcessSteps,
  RegionLinks,
  TechStack,
} from "@/components/landing-sections";
import { breadcrumbLd, faqLd, jsonLd, pageMetadata } from "@/lib/seo";

const PATH = "/web-application-developer-saudi-arabia";

export const metadata: Metadata = pageMetadata({
  path: PATH,
  title: "Web Application Developer for Saudi Arabia | Muhammad Haziq",
  description:
    "Senior full-stack developer for businesses in Riyadh, Jeddah and across KSA. Web apps, portals, dashboards and payment integrations, one hour from Saudi time.",
  keywords: [
    "web application developer saudi arabia",
    "web developer riyadh",
    "web developer jeddah",
    "hire web developer ksa",
    "freelance web developer saudi arabia",
    "node.js developer saudi arabia",
    "react developer saudi arabia",
    "software developer riyadh",
    "portal development saudi arabia",
    "fintech developer saudi arabia",
  ],
});

const faqs = [
  {
    q: "Do you work with companies in Saudi Arabia?",
    a: "Yes. I'm based in Dubai and work remotely with businesses across Saudi Arabia, including Riyadh, Jeddah and Dammam, as well as the wider GCC. Dubai is only one hour ahead of Saudi time, so we share almost the entire working day.",
  },
  {
    q: "What kind of web applications can you build for a Saudi business?",
    a: "Customer and member portals, admin dashboards, booking and operations systems, SaaS products, e-commerce back offices and the Node.js/NestJS APIs behind them. I build the React/Next.js frontend and the backend, so you work with one senior engineer.",
  },
  {
    q: "Do you have experience with GCC payment gateways?",
    a: "Yes. At InsuranceMarket.ae I integrated Checkout.com, TAP and Apple Pay for policy payments, and I've worked with Stripe on other projects. I design payment flows to be safe against duplicate charges and race conditions.",
  },
  {
    q: "Have you built platforms for government or regulated organizations?",
    a: "Yes. I was the sole frontend developer for ISMO, Pakistan's Independent System and Market Operator, building its public site, Market Participant portal and admin views. I also work in insurance and fintech, where security and auditability matter.",
  },
  {
    q: "How do we start?",
    a: "Book a free 30-minute call or send a message with a short description of your project. I reply within 24 hours and follow up with a written proposal covering scope, timeline and price.",
  },
];

export default function WebApplicationDeveloperSaudiArabiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd([
          faqLd(faqs),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Web Application Developer Saudi Arabia", path: PATH },
          ]),
        ])}
      />
      <LandingShell
        breadcrumb="Web Application Developer Saudi Arabia"
        badgeText="Available for KSA projects"
        badgeClass="bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-800/30 text-green-700 dark:text-green-300"
        h1={
          <>
            Web Application Developer
            <br className="hidden sm:block" /> for Businesses in Saudi Arabia
          </>
        }
        description="I'm Muhammad Haziq, a Senior Full-Stack Engineer in Dubai. I build web applications, portals, dashboards and payment integrations for companies in Riyadh, Jeddah and across the Kingdom, one hour from Saudi time."
        regions={["🇸🇦 Riyadh", "🇸🇦 Jeddah", "🇸🇦 Dammam", "🇦🇪 Dubai-based", "⏰ GMT+3 overlap"]}
        differentiators={[
          {
            icon: "🕐",
            title: "Gulf Time Zone",
            body: "Dubai is one hour ahead of Riyadh, so calls, reviews and releases happen during your working day, not overnight.",
          },
          {
            icon: "💳",
            title: "GCC Payment Experience",
            body: "Checkout.com, TAP and Apple Pay integrations in production at InsuranceMarket.ae, one of the UAE's largest insurance platforms.",
          },
          {
            icon: "🏛️",
            title: "Government-Grade Platforms",
            body: "Built the full frontend of ISMO's electricity market platform: registration, e-signed declarations, participant dashboards and admin views.",
          },
        ]}
        faqs={faqs}
        cta={{
          headline: "Planning a web application in Saudi Arabia?",
          subtext:
            "Book a free 30-minute call to talk through your project. I'll reply within 24 hours with next steps.",
        }}
      >
        <CardGrid
          heading="What I Build for Saudi Businesses"
          items={[
            { title: "Customer & Member Portals", body: "Secure sign-up, multi-step registration, document uploads, approvals and account dashboards." },
            { title: "Admin Dashboards", body: "Back-office tools for your team: data tables, filters, charts, exports and role-based access." },
            { title: "SaaS & MVPs", body: "Launch a new digital product quickly on a codebase that can scale with your users." },
            { title: "Payment Integration", body: "Checkout flows, subscriptions and webhooks with GCC-ready gateways such as Checkout.com and TAP." },
            { title: "APIs & Integrations", body: "Node.js/NestJS APIs connecting your app to ERPs, CRMs, SMS, email and third-party services." },
            { title: "Modernization", body: "Refactor slow or legacy systems into fast, maintainable web applications." },
          ]}
        />
        <CaseStudyList
          heading="Relevant Projects"
          titles={["InsuranceMarket", "ISMO"]}
        />
        <ProcessSteps />
        <TechStack
          items={[
            "React", "Next.js", "TypeScript", "Node.js", "NestJS",
            "PostgreSQL", "MySQL", "MongoDB", "Redis",
            "Checkout.com", "TAP", "Apple Pay", "Docker", "AWS",
          ]}
        />
        <RegionLinks heading="Also Working With" exclude="/web-application-developer-saudi-arabia/" />
      </LandingShell>
    </>
  );
}
