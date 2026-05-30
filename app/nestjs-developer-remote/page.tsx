import { Metadata } from "next";
import LandingShell from "@/components/landing-shell";

export const metadata: Metadata = {
  title: "Senior NestJS Developer for Remote Contract | Muhammad Haziq",
  description:
    "Senior NestJS developer available for remote contracts. Deep expertise in NestJS modules, guards, interceptors, Sequelize/TypeORM, and microservices. 5+ years production NestJS experience.",
  keywords: [
    "nestjs developer remote",
    "senior nestjs developer",
    "nestjs developer for hire",
    "nestjs contractor",
    "nestjs typescript developer",
    "nestjs microservices developer",
    "node.js nestjs engineer",
    "hire nestjs developer",
  ],
  alternates: { canonical: "https://muhammadhaziq.github.io/nestjs-developer-remote" },
};

const faqs = [
  { q: "How many years of NestJS experience do you have?", a: "I've been building production NestJS applications since 2021 — 5+ years. My current role at InsuranceMarket.ae uses NestJS as the primary backend framework for a large-scale fintech platform." },
  { q: "Do you work with NestJS and TypeORM or Sequelize?", a: "Both. I have deep production experience with Sequelize ORM (MySQL/PostgreSQL) and have worked with TypeORM and Mongoose. At InsuranceMarket.ae I use Sequelize with MySQL at scale." },
  { q: "Can you migrate an Express.js app to NestJS?", a: "Yes. I've done this type of migration. The process involves identifying module boundaries, converting middleware to guards/interceptors/pipes, and implementing dependency injection. I can assess your codebase and provide a migration plan." },
  { q: "Do you build NestJS microservices?", a: "Yes. I'm experienced with NestJS microservices using TCP, RabbitMQ, and Redis transports. I've also built BullMQ-based background job systems within NestJS applications." },
  { q: "What NestJS testing patterns do you follow?", a: "Unit tests with Jest for services and guards (mocking dependencies). Integration tests against a real test database for repository and service layers. I avoid mocking the database in integration tests — that's where mock/prod divergence causes incidents." },
];

export default function NestjsDeveloperRemotePage() {
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://muhammadhaziq.github.io" }, { "@type": "ListItem", position: 2, name: "NestJS Developer Remote", item: "https://muhammadhaziq.github.io/nestjs-developer-remote" }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <LandingShell
        breadcrumb="NestJS Developer Remote"
        badgeText="Senior NestJS Engineer · Available Now"
        badgeClass="bg-purple-50 dark:bg-purple-900/20 border-purple-100 dark:border-purple-800/30 text-purple-700 dark:text-purple-300"
        h1={<>Senior NestJS Developer<br className="hidden sm:block" /> Available for Remote Contract</>}
        description="Muhammad Haziq is a Senior NestJS Engineer with 5+ years building production fintech platforms. Deep expertise in modules, guards, interceptors, Sequelize, TypeORM, and microservices."
        regions={["🌍 Global Remote", "🇺🇸 US", "🇬🇧 UK", "🇪🇺 EU", "🇦🇪 UAE"]}
        differentiators={[
          { icon: "🏗️", title: "5+ Years Production NestJS", body: "Currently architecting NestJS backends at InsuranceMarket.ae — UAE's largest insurance platform — handling thousands of daily payment transactions." },
          { icon: "⚙️", title: "Deep Framework Knowledge", body: "Modules, DI, guards, interceptors, pipes, exception filters, microservices, BullMQ job queues, and both Sequelize and TypeORM integrations." },
          { icon: "🧪", title: "Test-Driven, Production-Ready", body: "Unit tests with Jest, integration tests against real databases, E2E tests with Supertest. Code that survives production." },
        ]}
        faqs={faqs}
        cta={{ headline: "Need a senior NestJS engineer?", subtext: "Book a free 30-minute technical call. I'll respond within 24 hours." }}
      >
        <section className="w-full max-w-[55rem] mb-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">NestJS & Backend Stack</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {["NestJS", "TypeScript", "Node.js", "Sequelize ORM", "TypeORM", "Mongoose", "MySQL", "PostgreSQL", "MongoDB", "Redis", "BullMQ", "Swagger/OpenAPI", "Jest", "Docker", "AWS", "CI/CD"].map((t) => (
              <span key={t} className="text-sm px-4 py-2 bg-white dark:bg-white/10 border border-black/[0.07] dark:border-white/10 rounded-xl text-gray-700 dark:text-white/70 shadow-sm">{t}</span>
            ))}
          </div>
        </section>
      </LandingShell>
    </>
  );
}
