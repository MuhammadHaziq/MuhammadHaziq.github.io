import { Metadata } from "next";
import LandingShell from "@/components/landing-shell";

export const metadata: Metadata = {
  title: "Backend Software Architect in Dubai | Muhammad Haziq",
  description:
    "Senior Backend Architect based in Dubai, UAE. Available for architecture consulting, technical advisory, fractional CTO, and senior remote contracts. Node.js, NestJS, fintech, microservices.",
  keywords: [
    "backend architect dubai",
    "software architect uae",
    "backend architect uae",
    "technical architect dubai",
    "node.js architect dubai",
    "fractional cto dubai",
    "software architecture consulting uae",
    "senior backend engineer dubai",
  ],
  alternates: { canonical: "https://muhammadhaziq.github.io/backend-architect-dubai" },
};

const faqs = [
  { q: "What does a backend architect do differently from a senior developer?", a: "A backend architect is responsible for system design decisions — data model design, service boundaries, scalability patterns, technology selection, and trade-off analysis. I design the system, not just implement it." },
  { q: "Do you offer fractional CTO or technical advisory services?", a: "Yes. For early-stage startups, I offer fractional technical advisory: architecture review, technology selection, engineering team structure, and development roadmap planning. This is typically a part-time engagement, not a full contract." },
  { q: "Can you review our existing architecture?", a: "Yes. I offer paid architecture review engagements: I review your current system, identify risks and bottlenecks, and provide a written assessment with prioritized recommendations. This is a good entry point before committing to a longer engagement." },
  { q: "What kinds of architecture decisions do you specialise in?", a: "Payment system design, fintech API architecture, microservices vs monolith trade-offs for specific business contexts, database schema design for high-traffic systems, and async job queue architectures." },
  { q: "Are you available for on-site in Dubai?", a: "Yes. For UAE and GCC clients, on-site meetings and working sessions in Dubai are possible. Remote-first for international clients." },
];

export default function BackendArchitectDubaiPage() {
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://muhammadhaziq.github.io" }, { "@type": "ListItem", position: 2, name: "Backend Architect Dubai", item: "https://muhammadhaziq.github.io/backend-architect-dubai" }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <LandingShell
        breadcrumb="Backend Architect Dubai"
        badgeText="Based in Dubai · Available for Architecture Work"
        badgeClass="bg-slate-50 dark:bg-slate-900/20 border-slate-100 dark:border-slate-800/30 text-slate-700 dark:text-slate-300"
        h1={<>Backend Software Architect<br className="hidden sm:block" /> Based in Dubai, UAE</>}
        description="Muhammad Haziq is a Senior Backend Architect in Dubai specializing in payment system design, fintech API architecture, and scalable Node.js backends. Available for architecture consulting, technical advisory, and senior remote contracts."
        regions={["📍 Dubai, UAE", "🇸🇦 KSA", "🇶🇦 Qatar", "🇬🇧 UK", "🇺🇸 US", "Remote"]}
        differentiators={[
          { icon: "🏛️", title: "System Design, Not Just Code", body: "I design payment flows, define service boundaries, model data schemas, and make technology trade-off decisions. Architecture work, not just implementation." },
          { icon: "🔬", title: "Paid Architecture Reviews", body: "A focused review of your existing system: bottlenecks, risks, and a prioritized set of recommendations. A low-commitment way to validate technical decisions before building." },
          { icon: "🤝", title: "Fractional CTO for Startups", body: "Technical co-founder advisory for early-stage startups: technology selection, team structure, engineering roadmap, and hands-on architecture guidance." },
        ]}
        faqs={faqs}
        cta={{ headline: "Need architecture guidance for your backend?", subtext: "Book a discovery call. On-site meetings possible in Dubai. Remote for GCC and international clients." }}
      >
        <section className="w-full max-w-[55rem] mb-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Architecture & Technology Stack</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {["System Design", "Microservices", "Domain-Driven Design", "Node.js", "NestJS", "TypeScript", "Payment Architecture", "MySQL", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "CI/CD", "API Design", "Observability"].map((t) => (
              <span key={t} className="text-sm px-4 py-2 bg-white dark:bg-white/10 border border-black/[0.07] dark:border-white/10 rounded-xl text-gray-700 dark:text-white/70 shadow-sm">{t}</span>
            ))}
          </div>
        </section>
      </LandingShell>
    </>
  );
}
