import React from "react";
import Link from "next/link";

const openTo = [
  { label: "Remote Contract", detail: "full-time / part-time engagements", available: true },
  { label: "Part-Time Senior Backend", detail: "20–25 hrs/week", available: true },
  { label: "Technical Consulting", detail: "Architecture & code review", available: true },
  { label: "Fractional CTO", detail: "Early-stage startup advisory", available: true },
  // { label: "Full-Time Employment", detail: "Not actively seeking", available: false },
];

const regions = ["🇺🇸 US", "🇬🇧 UK", "🇪🇺 EU", "🇨🇦 CA", "🇦🇪 UAE"];

export default function Availability() {
  return (
    <section
      id="availability"
      className="scroll-mt-28 mb-28 sm:mb-40 w-full max-w-[55rem]"
    >
      <div className="bg-white dark:bg-white/5 border border-black/[0.07] dark:border-white/10 rounded-2xl px-6 sm:px-10 py-8 sm:py-10 shadow-sm">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase text-green-600 dark:text-green-400">
                Available Now
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
              Open to New Engagements
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {regions.map((r) => (
              <span
                key={r}
                className="text-xs px-3 py-1.5 bg-gray-100 dark:bg-white/10 rounded-full text-gray-600 dark:text-white/60 font-medium"
              >
                {r}
              </span>
            ))}
          </div>
        </div>

        {/* Engagement types */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {openTo.map(({ label, detail, available }) => (
            <div
              key={label}
              className={`flex items-start gap-3 px-4 py-3 rounded-xl border transition-colors ${
                available
                  ? "border-green-100 dark:border-green-900/30 bg-green-50/50 dark:bg-green-900/10"
                  : "border-black/5 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02] opacity-50"
              }`}
            >
              <span className="mt-0.5 text-base flex-shrink-0">
                {available ? "✓" : "○"}
              </span>
              <div>
                <p
                  className={`text-sm font-medium ${
                    available
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-500 dark:text-white/40"
                  }`}
                >
                  {label}
                </p>
                <p className="text-xs text-gray-500 dark:text-white/40 mt-0.5">
                  {detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-black/[0.06] dark:border-white/10">
          <div className="text-sm text-gray-500 dark:text-white/50 space-y-0.5">
            <p>
              <span className="font-medium text-gray-700 dark:text-white/70">Timezone:</span>{" "}
              GMT+4 (Dubai) · EST/BST overlap available
            </p>
            <p>
              <span className="font-medium text-gray-700 dark:text-white/70">Notice period:</span>{" "}
              2 weeks · Rate on request
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 active:scale-100 transition-transform"
          >
            Discuss a Project
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
