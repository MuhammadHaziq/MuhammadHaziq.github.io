import Link from "next/link";
import { CALENDLY_URL } from "@/components/calendly-embed";

export type LandingFaq = { q: string; a: string };
export type Differentiator = { icon: string; title: string; body: string };

type Props = {
  breadcrumb: string;
  badgeText: string;
  badgeClass: string;
  h1: React.ReactNode;
  description: string;
  regions: string[];
  differentiators: Differentiator[];
  children: React.ReactNode; // case study + tech stack
  faqs: LandingFaq[];
  cta: { headline: string; subtext: string };
};

export default function LandingShell({
  breadcrumb,
  badgeText,
  badgeClass,
  h1,
  description,
  regions,
  differentiators,
  children,
  faqs,
  cta,
}: Props) {
  return (
    <main className="flex flex-col items-center px-4 pb-24">
      {/* Breadcrumb */}
      <nav className="w-full max-w-[55rem] mt-6 mb-8 text-xs text-gray-400 dark:text-white/30">
        <Link href="/" className="hover:text-gray-600 dark:hover:text-white/50 transition">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600 dark:text-white/60">{breadcrumb}</span>
      </nav>

      {/* Hero */}
      <section className="w-full max-w-[55rem] text-center mb-16">
        <div className={`inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-6 ${badgeClass}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-semibold tracking-wide uppercase">{badgeText}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
          {h1}
        </h1>
        <p className="text-lg text-gray-600 dark:text-white/60 max-w-[42rem] mx-auto mb-8 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {regions.map((r) => (
            <span key={r} className="text-sm px-4 py-2 bg-white dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-full text-gray-700 dark:text-white/80 shadow-sm">
              {r}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-7 py-3.5 rounded-full font-semibold hover:scale-105 active:scale-100 transition-transform">
            Book a Free Call
          </a>
          <Link href="/#projects"
            className="inline-flex items-center justify-center gap-2 bg-white dark:bg-white/10 border border-black/10 dark:border-white/10 px-7 py-3.5 rounded-full font-semibold text-gray-900 dark:text-white hover:scale-105 active:scale-100 transition-transform">
            View Projects
          </Link>
        </div>
      </section>

      {/* Why me */}
      <section className="w-full max-w-[55rem] mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
          Why Hire Me
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

      {/* Slot: case study + tech stack */}
      {children}

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
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">{cta.headline}</h2>
        <p className="text-gray-600 dark:text-white/60 mb-8 max-w-[36rem] mx-auto">{cta.subtext}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-7 py-3.5 rounded-full font-semibold hover:scale-105 active:scale-100 transition-transform">
            Book a Free 30-min Call
          </a>
          <Link href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white dark:bg-white/10 border border-black/10 dark:border-white/10 px-7 py-3.5 rounded-full font-semibold text-gray-900 dark:text-white hover:scale-105 active:scale-100 transition-transform">
            Send a Message
          </Link>
        </div>
      </section>
    </main>
  );
}
