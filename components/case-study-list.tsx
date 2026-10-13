import { projectsData } from "@/lib/data";

type ProjectTitle = (typeof projectsData)[number]["title"];

// Compact case-study cards for landing pages, sourced from lib/data.ts
export default function CaseStudyList({
  heading,
  titles,
}: {
  heading: string;
  titles?: ProjectTitle[];
}) {
  const projects = titles
    ? titles
        .map((t) => projectsData.find((p) => p.title === t))
        .filter((p): p is (typeof projectsData)[number] => Boolean(p))
    : projectsData;

  return (
    <section className="w-full max-w-[55rem] mb-16">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
        {heading}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((p) => (
          <article
            key={p.title}
            className="bg-white dark:bg-white/5 border border-black/[0.07] dark:border-white/10 rounded-2xl overflow-hidden shadow-sm flex flex-col"
          >
            <div className={`bg-gradient-to-br ${p.theme.gradient} px-6 py-5`}>
              <h3 className={`text-2xl font-bold ${p.theme.titleColor}`}>{p.title}</h3>
              <p className={`text-sm mt-1 ${p.theme.domainColor}`}>
                {p.subtitle} · {p.location}
              </p>
            </div>
            <div className="px-6 py-5 flex flex-col flex-1">
              <p className="text-xs text-gray-500 dark:text-white/40 mb-3">
                {p.role} · {p.period}
              </p>
              <p className="text-sm text-gray-700 dark:text-white/70 leading-relaxed mb-4">
                {p.outcome}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.slice(0, 6).map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-1 rounded-md font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-sm font-medium text-gray-900 dark:text-white underline underline-offset-4"
              >
                Visit {p.domain}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
