import React from "react";
import SectionHeading from "./section-heading";

export const homepageFaqs = [
  {
    q: "What kind of projects does Muhammad Haziq work on?",
    a: "I specialize in fintech backends, payment gateway integrations (Stripe, Apple Pay, Checkout.com, TAP, Flinks), and scalable Node.js/NestJS APIs for SaaS and enterprise applications. I've shipped production systems across insurance, vehicle financing, e-commerce, and retail POS domains.",
  },
  {
    q: "Is Muhammad Haziq available for remote work?",
    a: "Yes. I'm available for remote contract work across the US, UK, EU, UAE, and Canada. I work async-first and have a strong track record collaborating with distributed teams across EST, BST, and Gulf timezones.",
  },
  {
    q: "What technologies does Muhammad Haziq specialize in?",
    a: "My core backend stack is Node.js, NestJS, Express.js, and TypeScript. On the frontend I work with React.js, Next.js, and Redux. For databases I have deep production experience with MongoDB, PostgreSQL, MySQL, Oracle, and Redis. I'm also hands-on with Docker, AWS, and CI/CD pipelines.",
  },
  {
    q: "How do I hire Muhammad Haziq for a project?",
    a: "Book a free 30-minute discovery call via the contact page or send a message directly. I typically respond within 24 hours. Most engagements start with a brief scoping conversation before agreeing on scope and rate.",
  },
  {
    q: "Has Muhammad Haziq worked on fintech projects?",
    a: "Yes. I'm currently leading backend engineering at InsuranceMarket.ae — UAE's largest insurance platform — handling multi-gateway payment integrations (Apple Pay, Checkout.com, TAP) and secure policy transaction processing. Previously I was Lead Developer on FinanceThat, a vehicle financing platform serving Canada and the US with Stripe and Flinks integrations.",
  },
  {
    q: "What engagement types does Muhammad Haziq offer?",
    a: "I am available for full-time and part-time positions, remote contract engagements, technical consulting, and fractional CTO / architecture advisory roles. I work with startups and established companies on scalable web applications, backend systems, AI integrations, and cloud architecture."
  },
  {
    q: "Is Muhammad Haziq an expert in NestJS?",
    a: "Yes. I've been building production NestJS applications since 2021, including large-scale fintech platforms. I have deep expertise in NestJS modules, guards, interceptors, pipes, microservices, and both TypeORM and Sequelize integrations.",
  },
];

export default function FAQ() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homepageFaqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <section
      id="faq"
      className="scroll-mt-28 mb-28 sm:mb-40 w-full max-w-[55rem]"
    >
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <SectionHeading>Frequently Asked Questions</SectionHeading>

      <div className="flex flex-col divide-y divide-black/10 dark:divide-white/10">
        {homepageFaqs.map(({ q, a }) => (
          <details key={q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-white/80 transition-colors">
              <span>{q}</span>
              <span className="flex-shrink-0 ml-2 text-gray-400 dark:text-white/40 transition-transform duration-200 group-open:rotate-180">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-white/60">
              {a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
