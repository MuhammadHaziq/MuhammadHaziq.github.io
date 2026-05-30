import Link from "next/link";
import { Metadata } from "next";
import { CALENDLY_URL } from "@/components/calendly-embed";

export const metadata: Metadata = {
  title: "Hire Senior Node.js Developer USA | Remote Contract | Muhammad Haziq",
  description:
    "Senior Node.js developer available for US remote contract work. 7+ years building fintech APIs, payment systems (Stripe, Flinks), and scalable NestJS backends. EST timezone overlap. USD billing available.",
  keywords: [
    "hire node.js developer usa",
    "senior node.js developer usa",
    "remote backend developer usa",
    "node.js contractor usa",
    "nestjs developer usa",
    "fintech developer usa",
    "mern stack developer usa",
    "remote node.js engineer",
    "node.js developer for hire",
    "typescript developer usa",
    "contract backend engineer usa",
    "senior software engineer remote usa",
  ],
  alternates: {
    canonical: "https://muhammadhaziq.github.io/hire-nodejs-developer-usa",
  },
  openGraph: {
    title: "Hire Senior Node.js Developer USA | Remote Contract | Muhammad Haziq",
    description:
      "Senior Node.js developer available for US remote contracts. EST overlap, USD billing, Stripe & Flinks experience. 7+ years fintech.",
    url: "https://muhammadhaziq.github.io/hire-nodejs-developer-usa",
  },
};

const faqs = [
  {
    q: "Are you available for EST timezone overlap?",
    a: "Yes. I'm based in Dubai (GMT+4) and available for EST/CST overlap from approximately 9am–2pm Eastern Time daily. For clients on PST, I can accommodate morning overlap hours.",
  },
  {
    q: "Do you accept USD contracts?",
    a: "Yes. I invoice in USD and work with US-based companies through standard contractor agreements. I am familiar with W-8BEN forms and US contractor documentation.",
  },
  {
    q: "Have you worked with US clients before?",
    a: "Yes. I was Lead Developer on FinanceThat — a vehicle financing platform serving Canadian and US markets — integrating Stripe for payments and Flinks for KYC and credit verification. I also built LaptopZone USA, an e-commerce platform for the US market.",
  },
  {
    q: "What Node.js engagement types do you offer for US companies?",
    a: "Full-time remote contract (40 hrs/week), part-time backend engagement (20–25 hrs/week), or technical consulting/code reviews. Typical contract length is 3–6 months with renewal option.",
  },
  {
    q: "What makes you a strong fit for US fintech or SaaS companies?",
    a: "I have production experience with Stripe, Flinks, and complex financial API architectures. I have led distributed remote teams, write clean TypeScript, and use AI-assisted development (Cursor, Claude Code) to deliver faster without cutting corners.",
  },
];

const differentiators = [
  {
    icon: "🇺🇸",
    title: "US Market Experience",
    body: "Lead developer on FinanceThat — a CA/US vehicle financing platform with Stripe and Flinks integrations. Also built LaptopZone USA, a high-conversion e-commerce platform for the US market.",
  },
  {
    icon: "⏰",
    title: "EST/PST Timezone Overlap",
    body: "Available 9am–2pm EST daily from Dubai (GMT+4). Async-first workflow with same-day responses during US business hours. No communication delays.",
  },
  {
    icon: "💵",
    title: "USD Billing, US-Ready Contracts",
    body: "Invoicing in USD. Familiar with US contractor agreements and W-8BEN documentation. Clean, professional contract onboarding.",
  },
];

const techStack = [
  "Node.js", "NestJS", "Express.js", "TypeScript", "React", "Next.js",
  "MongoDB", "PostgreSQL", "Redis", "Stripe", "Flinks", "AWS",
  "Docker", "Jest", "REST APIs", "GraphQL",
];

export default function HireNodeJsDeveloperUSAPage() {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Haziq",
    jobTitle: "Senior Node.js Developer",
    url: "https://muhammadhaziq.github.io",
    description:
      "Senior Node.js developer available for remote contract work with US companies. EST timezone overlap, USD billing.",
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
      { "@type": "ListItem", position: 2, name: "Hire Node.js Developer USA", item: "https://muhammadhaziq.github.io/hire-nodejs-developer-usa" },
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
          <span className="text-gray-600 dark:text-white/60">Hire Node.js Developer USA</span>
        </nav>

        {/* Hero */}
        <section className="w-full max-w-[55rem] text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold text-green-700 dark:text-green-300 tracking-wide uppercase">
              Available for US Remote Work
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
            Senior Node.js Developer<br className="hidden sm:block" /> Available for US Remote Work
          </h1>
          <p className="text-lg text-gray-600 dark:text-white/60 max-w-[42rem] mx-auto mb-8 leading-relaxed">
            Muhammad Haziq is a Senior Node.js and NestJS Engineer with 7+ years building fintech
            backends, Stripe-integrated platforms, and scalable APIs for US and Canadian companies.
            EST overlap available. USD billing. No agency middleman.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["🇺🇸 United States", "🇨🇦 Canada", "⏰ EST Overlap", "💵 USD Billing", "Remote-First"].map((r) => (
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
            Why US Companies Hire Me
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
            Featured US Market Project
          </h2>
          <div className="bg-white dark:bg-white/5 border border-black/[0.07] dark:border-white/10 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-gradient-to-br from-teal-100 to-teal-300 dark:from-teal-900/40 dark:to-teal-700/30 px-8 py-6">
              <div className="inline-flex items-center gap-1.5 bg-white/70 dark:bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-md mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
                <span className="text-[11px] font-semibold tracking-wider text-green-800 dark:text-green-300 uppercase">Live · CA + US</span>
              </div>
              <h3 className="text-3xl font-bold text-teal-900 dark:text-teal-100">FinanceThat</h3>
              <p className="text-teal-700 dark:text-teal-300 text-sm mt-1">financethat.ca · Vehicle Financing Platform</p>
            </div>
            <div className="px-8 py-6">
              <p className="text-sm text-gray-500 dark:text-white/40 mb-4">Lead Developer · 2021 – 2023</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-xl px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-red-500 dark:text-red-400 mb-1">The Problem</p>
                  <p className="text-sm text-gray-700 dark:text-white/70">Needed a multi-market financing platform with KYC, credit reporting, and Stripe payments — built from scratch across CA & US.</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/20 rounded-xl px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-green-600 dark:text-green-400 mb-1">The Outcome</p>
                  <p className="text-sm text-gray-700 dark:text-white/70">Shipped a production vehicle financing platform serving CA & US with Stripe + Flinks integration.</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 dark:text-white/70 leading-relaxed mb-5">
                Architected a scalable vehicle financing platform serving Canadian and US markets.
                Integrated Stripe for subscription payments and Flinks for KYC, identity verification,
                and credit reports. Led a distributed remote team and managed complex application state with Redux.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["React", "Redux", "Node.js", "PostgreSQL", "Stripe", "Flinks", "TypeScript"].map((tag) => (
                  <span key={tag} className="text-[11px] px-2.5 py-1 rounded-md font-medium bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-200">
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
              { step: "02", title: "Scoping", desc: "I send a clear proposal: deliverables, timeline, and rate." },
              { step: "03", title: "Async Delivery", desc: "Daily updates, PR reviews, and documentation. No hand-holding needed." },
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
            Ready to work together?
          </h2>
          <p className="text-gray-600 dark:text-white/60 mb-8 max-w-[36rem] mx-auto">
            Book a free 30-minute call during US business hours. I&apos;ll respond the same day.
            USD contracts, EST overlap, no agency fee.
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
