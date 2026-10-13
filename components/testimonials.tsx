import React from "react";
import SectionHeading from "./section-heading";
import { testimonialsData } from "@/lib/data";

// Only approved testimonials are published. In `npm run dev` drafts are shown
// with a "Draft" badge so they can be previewed before approval.
const isDev = process.env.NODE_ENV === "development";

export default function Testimonials({
  heading = "What Clients Say",
  compact = false,
}: {
  heading?: string;
  compact?: boolean; // tighter spacing inside landing pages
}) {
  const items = testimonialsData.filter((t) => t.approved || isDev);
  if (items.length === 0) return null;

  return (
    <section
      id="testimonials"
      className={`scroll-mt-28 w-full max-w-[55rem] ${compact ? "mb-16" : "mb-28 sm:mb-40"}`}
    >
      <SectionHeading>{heading}</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {items.map((t) => (
          <figure
            key={t.name}
            className="relative flex flex-col bg-white dark:bg-white/5 border border-black/[0.07] dark:border-white/10 rounded-2xl p-6 shadow-sm"
          >
            {!t.approved && (
              <span className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                Draft, awaiting approval
              </span>
            )}
            <span aria-hidden="true" className="text-4xl leading-none text-gray-300 dark:text-white/20 mb-2">
              &ldquo;
            </span>
            <blockquote className="text-sm leading-relaxed text-gray-700 dark:text-white/70 mb-5 flex-1">
              {t.quote}
            </blockquote>
            <figcaption className="text-sm">
              <span className="block font-semibold text-gray-900 dark:text-white">{t.name}</span>
              <span className="block text-xs text-gray-500 dark:text-white/50">
                {t.role ? `${t.role}, ` : ""}
                {t.company} · {t.location}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
