import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog";
import SectionHeading from "./section-heading";

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="scroll-mt-28 mb-28 sm:mb-40 w-full max-w-[55rem]">
      <SectionHeading>From the Blog</SectionHeading>
      <p className="text-center text-sm text-gray-600 dark:text-white/60 -mt-4 mb-10">
        Writing about Node.js, fintech, and AI-assisted engineering
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col bg-white dark:bg-white/5 border border-black/[0.07] dark:border-white/10 rounded-2xl p-5 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all"
          >
            <div className="flex flex-wrap gap-1 mb-3">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-white/40 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white leading-snug mb-2 group-hover:text-gray-700 dark:group-hover:text-white/80 transition-colors flex-1">
              {post.title}
            </p>
            <p className="text-xs text-gray-400 dark:text-white/30 mt-auto pt-3 border-t border-black/[0.05] dark:border-white/5">
              {formatDate(post.date)} · {post.readTime}
            </p>
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          View all articles
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </section>
  );
}
