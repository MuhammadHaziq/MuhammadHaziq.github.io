import { Metadata } from "next";
import LandingShell from "@/components/landing-shell";

export const metadata: Metadata = {
  title: "Senior TypeScript Developer for Remote Contract | Muhammad Haziq",
  description:
    "Senior TypeScript developer available for remote contracts. 7+ years TypeScript across Node.js, NestJS, React, and Next.js. Strict mode, advanced generics, type-safe API design.",
  keywords: [
    "remote typescript developer",
    "senior typescript developer",
    "typescript developer for hire",
    "typescript contractor remote",
    "typescript node.js developer",
    "typescript react developer",
    "hire typescript developer",
    "senior typescript engineer remote",
  ],
  alternates: { canonical: "https://muhammadhaziq.github.io/remote-typescript-developer" },
};

const faqs = [
  { q: "Do you use TypeScript in strict mode?", a: "Yes. All my projects use TypeScript in strict mode: strictNullChecks, noImplicitAny, strictFunctionTypes. Strict mode catches a large class of runtime errors at compile time — it's not optional for production code." },
  { q: "Do you work with TypeScript on both frontend and backend?", a: "Yes. My backend work uses TypeScript with NestJS and Node.js. My frontend work uses TypeScript with React, Next.js, and Redux. I design type-safe API contracts that are shared between client and server." },
  { q: "What advanced TypeScript features do you use in production?", a: "Conditional types, mapped types, template literal types, discriminated unions, utility types (Pick, Omit, Partial, Required), and function overloads. These are used where they add real safety value — not as demonstrations of type gymnastics." },
  { q: "Have you worked on TypeScript migration projects?", a: "Yes. I've migrated JavaScript codebases to TypeScript incrementally — starting with strict type definitions for external API responses and working inward. The incremental approach lets you ship value while migrating." },
  { q: "What type-safe API patterns do you follow?", a: "I design API contracts as TypeScript types first (request/response shapes, error types), then implement against those contracts. For NestJS backends, Zod validation schemas are derived from the TypeScript types. This ensures the runtime matches the compile-time contract." },
];

export default function RemoteTypeScriptDeveloperPage() {
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://muhammadhaziq.github.io" }, { "@type": "ListItem", position: 2, name: "Remote TypeScript Developer", item: "https://muhammadhaziq.github.io/remote-typescript-developer" }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <LandingShell
        breadcrumb="Remote TypeScript Developer"
        badgeText="Senior TypeScript Engineer · Available Now"
        badgeClass="bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800/30 text-blue-700 dark:text-blue-300"
        h1={<>Senior TypeScript Developer<br className="hidden sm:block" /> Available for Remote Work</>}
        description="Muhammad Haziq is a Senior TypeScript engineer with 7+ years writing production TypeScript across Node.js, NestJS, React, and Next.js. Strict mode. Type-safe API contracts. Real production depth."
        regions={["🌍 Global Remote", "🇺🇸 US", "🇬🇧 UK", "🇪🇺 EU", "🇦🇪 UAE"]}
        differentiators={[
          { icon: "🔒", title: "Strict Mode, Always", body: "All projects use TypeScript strict mode. Catches null reference errors, implicit any types, and unsafe function signatures at compile time — not in production at 3am." },
          { icon: "🔗", title: "Full-Stack TypeScript", body: "TypeScript across the entire stack: NestJS backends, React/Next.js frontends, shared type contracts, and typed database queries. One language, end-to-end type safety." },
          { icon: "📐", title: "Type-Safe by Design", body: "API contracts designed as TypeScript types first. Runtime validation (Zod) derived from compile-time types. The contract is the source of truth for both client and server." },
        ]}
        faqs={faqs}
        cta={{ headline: "Looking for a senior TypeScript engineer?", subtext: "Book a free 30-minute call. I'll respond within 24 hours. Remote, async-first, global availability." }}
      >
        <section className="w-full max-w-[55rem] mb-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">TypeScript Stack</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {["TypeScript (Strict)", "Node.js", "NestJS", "Express.js", "React.js", "Next.js", "Redux", "Zod", "Prisma", "Sequelize ORM", "TypeORM", "Jest", "PostgreSQL", "MongoDB", "Docker", "AWS"].map((t) => (
              <span key={t} className="text-sm px-4 py-2 bg-white dark:bg-white/10 border border-black/[0.07] dark:border-white/10 rounded-xl text-gray-700 dark:text-white/70 shadow-sm">{t}</span>
            ))}
          </div>
        </section>
      </LandingShell>
    </>
  );
}
