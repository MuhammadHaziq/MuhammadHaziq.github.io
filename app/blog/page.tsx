import Link from "next/link";
import { Metadata } from "next";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Muhammad Haziq | Node.js, NestJS & Fintech",
  description:
    "Technical writing on Node.js, NestJS, fintech backend development, payment systems, and AI-assisted engineering by Muhammad Haziq.",
  alternates: {
    canonical: "https://muhammadhaziq.github.io/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="flex flex-col items-center px-4 pb-24">
      {/* Header */}
      <section className="w-full max-w-[55rem] mt-8 mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Technical Blog
        </h1>
        <p className="text-lg text-gray-600 dark:text-white/60 max-w-[38rem] mx-auto">
          Writing about Node.js, NestJS, fintech backend architecture, payment
          systems, and AI-assisted engineering.
        </p>
      </section>

      {/* Post list */}
      <div className="w-full max-w-[55rem] flex flex-col gap-5">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white dark:bg-white/5 border border-black/[0.07] dark:border-white/10 rounded-2xl px-7 py-6 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all"
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {post.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white/50 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-white/80 transition-colors">
              {post.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-white/60 leading-relaxed mb-4">
              {post.description}
            </p>

            <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-white/30">
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{post.readTime}</span>
              <span className="ml-auto text-gray-600 dark:text-white/50 font-medium group-hover:translate-x-0.5 transition-transform">
                Read →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
