import Link from "next/link";
import { Metadata } from "next";
import { CALENDLY_URL } from "@/components/calendly-embed";

export const metadata: Metadata = {
  title: "Senior Fintech Developer in Dubai, UAE | Muhammad Haziq",
  description:
    "Senior fintech engineer based in Dubai, UAE. Expert in Node.js, NestJS, Apple Pay, Checkout.com, and TAP payment integrations. Currently at InsuranceMarket.ae — UAE's #1 insurance platform. Available for UAE, GCC, and remote contracts.",
  keywords: [
    "fintech developer UAE",
    "Node.js developer Dubai",
    "backend engineer Dubai",
    "payment gateway developer UAE",
    "NestJS developer UAE",
    "TAP payments developer",
    "Checkout.com developer UAE",
    "Apple Pay integration Dubai",
    "software engineer Dubai",
    "fintech software engineer UAE",
    "backend architect Dubai",
    "remote developer UAE",
    "senior developer Dubai",
  ],
  alternates: {
    canonical: "https://muhammadhaziq.github.io/fintech-developer-uae",
  },
  openGraph: {
    title: "Senior Fintech Developer in Dubai, UAE | Muhammad Haziq",
    description:
      "Senior fintech engineer based in Dubai, UAE. Expert in Apple Pay, Checkout.com, TAP, and NestJS. Currently at InsuranceMarket.ae.",
    url: "https://muhammadhaziq.github.io/fintech-developer-uae",
  },
};

const faqs = [
  {
    q: "Are you based in Dubai, UAE?",
    a: "Yes. I am based in Dubai and available for both on-site meetings and remote engagements across the UAE, GCC, and internationally.",
  },
  {
    q: "Do you have experience with UAE-specific payment gateways?",
    a: "Yes. I have production experience integrating TAP Payments, Checkout.com (MENA region), and Apple Pay within UAE fintech products — including within the regulated insurance and financial services sector.",
  },
  {
    q: "Have you worked with UAE companies directly?",
    a: "Yes. I currently lead backend engineering at InsuranceMarket.ae, UAE's largest digital insurance platform. I architect their payment infrastructure and fintech modules using NestJS, TypeScript, and MySQL.",
  },
  {
    q: "Can you work with companies in KSA, Qatar, or other GCC markets?",
    a: "Yes. Based in Dubai (GMT+4), I have a strong understanding of GCC business culture and am available for remote engagements across Saudi Arabia, Qatar, Bahrain, and Kuwait.",
  },
  {
    q: "What fintech domains have you worked in?",
    a: "Insurance fintech, vehicle financing (with KYC and credit integrations), e-commerce payment systems, and retail point-of-sale. I have deep experience with payment flow architecture, race condition resolution, and multi-gateway orchestration.",
  },
];

const differentiators = [
  {
    icon: "🏢",
    title: "Currently at UAE's #1 Insurance Platform",
    body: "I'm the lead backend engineer at InsuranceMarket.ae — the UAE's largest digital insurance marketplace — architecting payment systems that handle thousands of daily policy transactions.",
  },
  {
    icon: "💳",
    title: "UAE Payment Gateway Expertise",
    body: "Production experience with TAP Payments, Checkout.com MENA, and Apple Pay in the UAE regulatory context. I understand the local payment landscape, not just the generic APIs.",
  },
  {
    icon: "📍",
    title: "Dubai-Based, Globally Available",
    body: "On-site meetings in Dubai are possible. For GCC and international clients, I work async-first across GMT+4, BST, and EST overlaps.",
  },
];

const techStack = [
  "Node.js", "NestJS", "TypeScript", "MySQL", "Sequelize ORM",
  "Apple Pay", "Checkout.com", "TAP Payments", "Docker", "AWS",
  "Redis", "REST APIs", "CI/CD", "Postman", "New Relic",
];

export default function FintechDeveloperUAEPage() {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Haziq",
    jobTitle: "Senior Fintech Developer",
    address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
    url: "https://muhammadhaziq.github.io",
    description: "Senior fintech developer in Dubai, UAE. Expert in NestJS, Apple Pay, Checkout.com, and TAP payment integrations.",
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
      { "@type": "ListItem", position: 2, name: "Fintech Developer UAE", item: "https://muhammadhaziq.github.io/fintech-developer-uae" },
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
          <span className="text-gray-600 dark:text-white/60">Fintech Developer UAE</span>
        </nav>

        {/* Hero */}
        <section className="w-full max-w-[55rem] text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold text-blue-700 dark:text-blue-300 tracking-wide uppercase">
              Based in Dubai · Available Now
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
            Senior Fintech Developer<br className="hidden sm:block" /> in Dubai, UAE
          </h1>
          <p className="text-lg text-gray-600 dark:text-white/60 max-w-[42rem] mx-auto mb-8 leading-relaxed">
            Muhammad Haziq is a Senior Node.js and NestJS Engineer based in Dubai, specializing in
            fintech backends, multi-gateway payment integrations, and scalable APIs for insurance
            and financial services platforms.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["🇦🇪 UAE", "🇸🇦 KSA", "🇶🇦 Qatar", "🇬🇧 UK", "🇺🇸 US", "Remote-First"].map((r) => (
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
            Why UAE Companies Hire Me
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {differentiators.map(({ icon, title, body }) => (
              <div
                key={title}
                className="bg-white dark:bg-white/5 border border-black/[0.07] dark:border-white/10 rounded-2xl p-6 shadow-sm"
              >
                <div className="text-2xl mb-3">{icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-white/60 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="w-full max-w-[55rem] mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Featured UAE Project
          </h2>
          <div className="bg-white dark:bg-white/5 border border-black/[0.07] dark:border-white/10 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-900/40 dark:to-blue-700/30 px-8 py-6">
              <div className="inline-flex items-center gap-1.5 bg-white/70 dark:bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-md mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
                <span className="text-[11px] font-semibold tracking-wider text-green-800 dark:text-green-300 uppercase">Live · UAE</span>
              </div>
              <h3 className="text-3xl font-bold text-blue-900 dark:text-blue-100">InsuranceMarket.ae</h3>
              <p className="text-blue-700 dark:text-blue-300 text-sm mt-1">insurancemarket.ae · UAE&apos;s #1 Insurance Platform</p>
            </div>
            <div className="px-8 py-6">
              <p className="text-sm text-gray-500 dark:text-white/40 mb-1">Senior Backend Engineer · 2023 – Present</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-xl px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-red-500 dark:text-red-400 mb-1">The Problem</p>
                  <p className="text-sm text-gray-700 dark:text-white/70">Race conditions in async payment flows causing failed transactions across 3 concurrent gateways.</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/20 rounded-xl px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-green-600 dark:text-green-400 mb-1">The Outcome</p>
                  <p className="text-sm text-gray-700 dark:text-white/70">Resolved concurrency bugs, unified multi-gateway flows, reduced API response times significantly.</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 dark:text-white/70 leading-relaxed mb-5">
                Integrated Apple Pay, Checkout.com, and TAP payment gateways handling secure policy transactions.
                Refactored legacy modules, resolved critical race conditions in async payment flows, and optimized
                database queries. Built cron jobs for third-party API integrations across UAE insurance providers.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Node.js", "NestJS", "TypeScript", "MySQL", "Sequelize", "Apple Pay", "Checkout.com", "TAP"].map((tag) => (
                  <span key={tag} className="text-[11px] px-2.5 py-1 rounded-md font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="w-full max-w-[55rem] mb-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Technology Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((t) => (
              <span key={t} className="text-sm px-4 py-2 bg-white dark:bg-white/10 border border-black/[0.07] dark:border-white/10 rounded-xl text-gray-700 dark:text-white/70 shadow-sm">
                {t}
              </span>
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
            Ready to discuss your fintech project?
          </h2>
          <p className="text-gray-600 dark:text-white/60 mb-8 max-w-[36rem] mx-auto">
            Book a free 30-minute call. I&apos;ll respond within 24 hours — on-site meetings in
            Dubai are possible, and remote engagements across the GCC and internationally.
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
