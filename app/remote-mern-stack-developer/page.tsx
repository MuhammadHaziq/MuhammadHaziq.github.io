import { Metadata } from "next";
import LandingShell from "@/components/landing-shell";

export const metadata: Metadata = {
  title: "Remote MERN Stack Developer for Hire | Muhammad Haziq",
  description:
    "Senior MERN Stack developer available for remote work. 7+ years building MongoDB, Express, React, and Node.js applications for fintech, SaaS, and e-commerce. Global remote, async-first.",
  keywords: [
    "remote mern stack developer",
    "hire mern stack developer",
    "mern stack developer for hire",
    "mongodb express react nodejs developer",
    "full stack javascript developer remote",
    "mern stack contractor",
    "react node.js developer",
    "senior mern developer",
  ],
  alternates: { canonical: "https://muhammadhaziq.github.io/remote-mern-stack-developer" },
};

const faqs = [
  { q: "What does MERN stack mean?", a: "MERN stands for MongoDB, Express.js, React, and Node.js — a full-stack JavaScript ecosystem. I have 7+ years building production applications across all four layers, plus TypeScript throughout." },
  { q: "Do you work on both frontend and backend?", a: "Yes. I'm a full-stack engineer comfortable across the entire stack — NestJS/Express backends, React/Next.js frontends, and MongoDB/PostgreSQL databases. My depth is stronger on the backend, but I deliver end-to-end features independently." },
  { q: "What timezone do you work in?", a: "I'm based in Dubai (GMT+4) and am available for EST, BST, and Gulf timezone overlaps. I work async-first with daily updates, which means timezone difference rarely affects delivery speed." },
  { q: "What kinds of MERN applications do you build?", a: "Fintech platforms, SaaS products, e-commerce systems, and internal tools. I've built vehicle financing platforms, insurance APIs, retail POS systems, and e-commerce storefronts — all using MERN-family technologies." },
  { q: "How do I get started?", a: "Book a free 30-minute discovery call via Calendly or send a message through the contact form. I respond within 24 hours and we'll scope the project from there." },
];

export default function RemoteMernStackDeveloperPage() {
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://muhammadhaziq.github.io" }, { "@type": "ListItem", position: 2, name: "Remote MERN Stack Developer", item: "https://muhammadhaziq.github.io/remote-mern-stack-developer" }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <LandingShell
        breadcrumb="Remote MERN Stack Developer"
        badgeText="Available for Remote MERN Work"
        badgeClass="bg-teal-50 dark:bg-teal-900/20 border-teal-100 dark:border-teal-800/30 text-teal-700 dark:text-teal-300"
        h1={<>Senior MERN Stack Developer<br className="hidden sm:block" /> Available for Remote Work</>}
        description="Muhammad Haziq is a Senior Full-Stack engineer with 7+ years building MongoDB, Express, React, and Node.js applications for fintech, SaaS, and e-commerce. Async-first. Global availability."
        regions={["🌍 Global Remote", "🇺🇸 US", "🇬🇧 UK", "🇪🇺 EU", "🇦🇪 UAE", "⏰ Async-First"]}
        differentiators={[
          { icon: "⚡", title: "Full-Stack in One Engineer", body: "Backend APIs, React frontends, database design, and deployment — delivered by one senior engineer. No handoff delays between frontend and backend." },
          { icon: "🏦", title: "Production Fintech Experience", body: "MERN-family tech used in real payment systems and fintech platforms. I understand the performance, security, and reliability requirements of financial applications." },
          { icon: "🌐", title: "7 Years, Multiple Domains", body: "Fintech, insurance, vehicle financing, e-commerce, and retail POS. Each domain had different scaling and business logic challenges — all solved with MERN-family tools." },
        ]}
        faqs={faqs}
        cta={{ headline: "Looking for a senior MERN developer?", subtext: "Book a free 30-minute call. I'll respond within 24 hours. Async-first, global availability, no agency fees." }}
      >
        {/* Tech Stack */}
        <section className="w-full max-w-[55rem] mb-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">MERN + Extended Stack</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {["MongoDB", "Express.js", "React.js", "Node.js", "Next.js", "Redux", "TypeScript", "NestJS", "PostgreSQL", "MySQL", "Redis", "Docker", "AWS", "Tailwind CSS", "GraphQL", "REST APIs"].map((t) => (
              <span key={t} className="text-sm px-4 py-2 bg-white dark:bg-white/10 border border-black/[0.07] dark:border-white/10 rounded-xl text-gray-700 dark:text-white/70 shadow-sm">{t}</span>
            ))}
          </div>
        </section>
      </LandingShell>
    </>
  );
}
