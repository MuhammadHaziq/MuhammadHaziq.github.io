import Link from "next/link";

// Small shared sections for service / region landing pages

export function CardGrid({
  heading,
  items,
}: {
  heading: string;
  items: { title: string; body: string }[];
}) {
  return (
    <section className="w-full max-w-[55rem] mb-16">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
        {heading}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map(({ title, body }) => (
          <div
            key={title}
            className="bg-white dark:bg-white/5 border border-black/[0.07] dark:border-white/10 rounded-2xl p-6 shadow-sm"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-white/60 leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ProcessSteps() {
  const steps = [
    { step: "01", title: "Discovery Call", desc: "A free 30-minute call to understand your goals, users, timeline and budget." },
    { step: "02", title: "Proposal", desc: "A written scope with deliverables, milestones, timeline and price." },
    { step: "03", title: "Build & Demo", desc: "Regular demos and async progress updates, so you always know where the project stands." },
    { step: "04", title: "Launch & Support", desc: "Deployment, documentation, handover and optional ongoing maintenance." },
  ];
  return (
    <section className="w-full max-w-[55rem] mb-16">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
        How a Project Works
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {steps.map(({ step, title, desc }) => (
          <div
            key={step}
            className="bg-white dark:bg-white/5 border border-black/[0.07] dark:border-white/10 rounded-2xl p-5 shadow-sm"
          >
            <div className="text-xs font-bold tracking-widest text-gray-400 dark:text-white/30 mb-2">{step}</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>
            <p className="text-xs text-gray-600 dark:text-white/50 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function TechStack({ heading = "Technology Stack", items }: { heading?: string; items: string[] }) {
  return (
    <section className="w-full max-w-[55rem] mb-16 text-center">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">{heading}</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {items.map((t) => (
          <span
            key={t}
            className="text-sm px-4 py-2 bg-white dark:bg-white/10 border border-black/[0.07] dark:border-white/10 rounded-xl text-gray-700 dark:text-white/70 shadow-sm"
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}

export function RegionLinks({ heading, exclude }: { heading: string; exclude?: string }) {
  const regions = [
    { label: "🇺🇸 USA", note: "EST/PST overlap, USD billing", href: "/hire-nodejs-developer-usa/" },
    { label: "🇬🇧 UK", note: "BST/GMT overlap, UK client experience", href: "/hire-nodejs-developer-uk/" },
    { label: "🇦🇪 UAE", note: "Dubai-based, GCC payment gateways", href: "/fintech-developer-uae/" },
    { label: "🇸🇦 Saudi Arabia", note: "1-hour time difference, GCC experience", href: "/web-application-developer-saudi-arabia/" },
    { label: "🌍 Worldwide", note: "Async-first remote delivery", href: "/web-application-development/" },
  ].filter((r) => r.href !== exclude);

  return (
    <section className="w-full max-w-[55rem] mb-16">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {regions.map((r) => (
          <Link
            key={r.href}
            href={r.href}
            className="flex items-center justify-between gap-4 bg-white dark:bg-white/5 border border-black/[0.07] dark:border-white/10 rounded-xl px-5 py-4 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all"
          >
            <span>
              <span className="block font-semibold text-gray-900 dark:text-white">{r.label}</span>
              <span className="block text-xs text-gray-500 dark:text-white/50">{r.note}</span>
            </span>
            <span aria-hidden="true" className="text-gray-400">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
