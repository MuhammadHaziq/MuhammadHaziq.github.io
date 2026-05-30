import Link from "next/link";
import { Metadata } from "next";
import { CALENDLY_URL } from "@/components/calendly-embed";

export const metadata: Metadata = {
  title: "Hire Senior Node.js Developer UK | Remote Contract | Muhammad Haziq",
  description:
    "Senior Node.js developer available for UK remote contract work. 7+ years experience including a UK retail client (Kyrio POS). BST timezone overlap. Outside IR35. NestJS, TypeScript, React.",
  keywords: [
    "hire node.js developer uk",
    "senior node.js developer uk",
    "react consultant london",
    "senior full stack developer uk",
    "nestjs developer uk",
    "remote backend developer uk",
    "contract node.js engineer uk",
    "ir35 outside developer",
    "typescript developer uk",
    "node.js contractor london",
    "senior software engineer uk remote",
    "backend architect uk",
  ],
  alternates: {
    canonical: "https://muhammadhaziq.github.io/hire-nodejs-developer-uk",
  },
  openGraph: {
    title: "Hire Senior Node.js Developer UK | Remote Contract | Muhammad Haziq",
    description:
      "Senior Node.js developer for UK remote contracts. BST overlap, outside IR35, UK client experience (Kyrio POS). NestJS, TypeScript, React.",
    url: "https://muhammadhaziq.github.io/hire-nodejs-developer-uk",
  },
};

const faqs = [
  {
    q: "Are you IR35 compliant for UK contracts?",
    a: "Yes. I operate as an outside-IR35 contractor. I am not subject to IR35 as I am based outside the UK and provide services through a business-to-business arrangement. UK clients can engage me directly without IR35 liability concerns.",
  },
  {
    q: "What is your timezone overlap with UK business hours?",
    a: "I am based in Dubai (GMT+4), which provides 3–4 hours of overlap with UK BST (British Summer Time) and 4–5 hours with GMT. I am available from early morning UK time and can also accommodate afternoon meetings.",
  },
  {
    q: "Have you worked with UK clients before?",
    a: "Yes. I built Kyrio POS — a retail point-of-sale system for a UK client — as a full-stack developer. The system included role-based access control, real-time analytics, inventory tracking, and offline-first capabilities.",
  },
  {
    q: "What engagement types do you offer UK companies?",
    a: "I offer outside-IR35 remote contracts (typically 3–6 months), part-time senior backend roles (20–25 hrs/week), architecture consulting, and code reviews. GBP invoicing is available.",
  },
  {
    q: "Are you experienced with the UK tech stack preferences?",
    a: "Yes. Node.js and TypeScript are dominant in UK fintech and SaaS, which aligns precisely with my core expertise. I am also experienced with NestJS, which has strong adoption in UK enterprise Node.js projects.",
  },
];

const differentiators = [
  {
    icon: "🇬🇧",
    title: "Proven UK Client Experience",
    body: "Built Kyrio POS — a complete retail point-of-sale system for a UK client including role-based access, real-time analytics, inventory management, and offline-first architecture.",
  },
  {
    icon: "⚖️",
    title: "Outside IR35",
    body: "Engage me as an outside-IR35 contractor directly, with no IR35 liability concerns. I operate as an independent business providing services under a B2B arrangement.",
  },
  {
    icon: "⏰",
    title: "BST / GMT Overlap",
    body: "Based in Dubai (GMT+4), I have 3–5 hours of daily overlap with UK business hours. Async-first approach with same-day responses throughout the UK working day.",
  },
];

const techStack = [
  "Node.js", "NestJS", "Express.js", "TypeScript", "React", "Next.js",
  "MongoDB", "PostgreSQL", "MySQL", "Redis", "Docker", "AWS",
  "Jest", "REST APIs", "GraphQL", "CI/CD",
];

export default function HireNodeJsDeveloperUKPage() {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Haziq",
    jobTitle: "Senior Node.js Developer",
    url: "https://muhammadhaziq.github.io",
    description:
      "Senior Node.js developer available for UK remote contract work. BST overlap. Outside IR35. UK client experience with Kyrio POS.",
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://muhammadhaziq.github.io" },
      { "@type": "ListItem", position: 2, name: "Hire Node.js Developer UK", item: "https://muhammadhaziq.github.io/hire-nodejs-developer-uk" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <main className="flex flex-col items-center px-4 pb-24">

        {/* Breadcrumb */}
        <nav className="w-full max-w-[55rem] mt-6 mb-8 text-xs text-gray-400 dark:text-white/30">
          <Link href="/" className="hover:text-gray-600 dark:hover:text-white/50 transition">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600 dark:text-white/60">Hire Node.js Developer UK</span>
        </nav>

        {/* Hero */}
        <section className="w-full max-w-[55rem] text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 tracking-wide uppercase">
              Available for UK Remote Contracts
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
            Senior Node.js Developer<br className="hidden sm:block" /> for UK Remote Contracts
          </h1>
          <p className="text-lg text-gray-600 dark:text-white/60 max-w-[42rem] mx-auto mb-8 leading-relaxed">
            Muhammad Haziq is a Senior Node.js and NestJS Engineer with 7+ years of experience,
            including a UK retail client project. Outside IR35. BST overlap. GBP invoicing available.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["🇬🇧 United Kingdom", "⚖️ Outside IR35", "⏰ BST Overlap", "💷 GBP Billing", "Remote-First"].map((r) => (
              <span key={r} className="text-sm px-4 py-2 bg-white dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-full text-gray-700 dark:text-white/80 shadow-sm">
                {r}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-7 py-3.5 rounded-full font-semibold hover:scale-105 active:scale-100 transition-transform"
            >
              Book a Free Call
            </a>
            <Link
              href="/#projects"
              className="inline-flex items-center justify-center gap-2 bg-white dark:bg-white/10 border border-black/10 dark:border-white/10 px-7 py-3.5 rounded-full font-semibold text-gray-900 dark:text-white hover:scale-105 active:scale-100 transition-transform"
            >
              View Projects
            </Link>
          </div>
        </section>

        {/* Why me */}
        <section className="w-full max-w-[55rem] mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Why UK Companies Hire Me
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {differentiators.map(({ icon, title, body }) => (
              <div key={title} className="bg-white dark:bg-white/5 border border-black/[0.07] dark:border-white/10 rounded-2xl p-6 shadow-sm">
                <div className="text-2xl mb-3">{icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-white/60 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Case Study */}
        <section className="w-full max-w-[55rem] mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Featured UK Project
          </h2>
          <div className="bg-white dark:bg-white/5 border border-black/[0.07] dark:border-white/10 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-gradient-to-br from-pink-100 to-pink-300 dark:from-pink-900/40 dark:to-pink-700/30 px-8 py-6">
              <div className="inline-flex items-center gap-1.5 bg-white/70 dark:bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-md mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
                <span className="text-[11px] font-semibold tracking-wider text-green-800 dark:text-green-300 uppercase">Live · UK</span>
              </div>
              <h3 className="text-3xl font-bold text-pink-900 dark:text-pink-100">Kyrio POS</h3>
              <p className="text-pink-700 dark:text-pink-300 text-sm mt-1">dashboard.kyriopos.com · UK Retail Point-of-Sale</p>
            </div>
            <div className="px-8 py-6">
              <p className="text-sm text-gray-500 dark:text-white/40 mb-4">Full-Stack Developer · 2018 – 2021</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-xl px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-red-500 dark:text-red-400 mb-1">The Problem</p>
                  <p className="text-sm text-gray-700 dark:text-white/70">UK retail client needed an offline-first POS with role-based access and real-time analytics for managers, cashiers, and admins.</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/20 rounded-xl px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-green-600 dark:text-green-400 mb-1">The Outcome</p>
                  <p className="text-sm text-gray-700 dark:text-white/70">Shipped a complete POS with 3 access tiers, real-time sales graphs, inventory tracking, and offline-first capability.</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 dark:text-white/70 leading-relaxed mb-5">
                Built a Loyverse POS-inspired system for UK retail clients. Implemented role-based access control
                for managers, cashiers, and admins. Delivered real-time sales reports, inventory tracking,
                customer dashboards, and graph-based analytics with offline-first capabilities.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Node.js", "Express", "MongoDB", "Mongoose", "React", "Redux"].map((tag) => (
                  <span key={tag} className="text-[11px] px-2.5 py-1 rounded-md font-medium bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="w-full max-w-[55rem] mb-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Technology Stack</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((t) => (
              <span key={t} className="text-sm px-4 py-2 bg-white dark:bg-white/10 border border-black/[0.07] dark:border-white/10 rounded-xl text-gray-700 dark:text-white/70 shadow-sm">
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Engagement structure */}
        <section className="w-full max-w-[55rem] mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            How Working Together Looks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Discovery Call", desc: "30 min to understand your project, stack, and timeline." },
              { step: "02", title: "Scoping", desc: "Clear proposal with deliverables, timeline, and day rate." },
              { step: "03", title: "Async Delivery", desc: "Daily updates, PR reviews, documentation. BST overlap guaranteed." },
              { step: "04", title: "Handoff", desc: "Clean code, full documentation, and knowledge transfer." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-white dark:bg-white/5 border border-black/[0.07] dark:border-white/10 rounded-2xl p-5 shadow-sm">
                <div className="text-xs font-bold tracking-widest text-gray-400 dark:text-white/30 mb-2">{step}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>
                <p className="text-xs text-gray-600 dark:text-white/50 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full max-w-[55rem] mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y divide-black/10 dark:divide-white/10 bg-white dark:bg-white/5 border border-black/[0.07] dark:border-white/10 rounded-2xl px-6 sm:px-8 shadow-sm">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-white/80 transition-colors">
                  <span>{q}</span>
                  <span className="flex-shrink-0 text-gray-400 dark:text-white/40 transition-transform duration-200 group-open:rotate-180">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-white/60">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full max-w-[55rem] text-center bg-white dark:bg-white/5 border border-black/[0.07] dark:border-white/10 rounded-2xl px-8 py-10 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
            Ready to discuss your project?
          </h2>
          <p className="text-gray-600 dark:text-white/60 mb-8 max-w-[36rem] mx-auto">
            Book a free 30-minute call. Outside IR35, BST overlap, GBP or USD invoicing.
            I respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-7 py-3.5 rounded-full font-semibold hover:scale-105 active:scale-100 transition-transform"
            >
              Book a Free 30-min Call
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white dark:bg-white/10 border border-black/10 dark:border-white/10 px-7 py-3.5 rounded-full font-semibold text-gray-900 dark:text-white hover:scale-105 active:scale-100 transition-transform"
            >
              Send a Message
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
