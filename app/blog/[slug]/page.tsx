import Link from "next/link";
import { Metadata } from "next";
import { getAllPosts, getPost, formatDate } from "@/lib/blog";
import { CALENDLY_URL } from "@/components/calendly-embed";
import {
  OG_IMAGE,
  PERSON_ID,
  SITE_URL,
  absoluteUrl,
  breadcrumbLd,
  jsonLd,
  pageMetadata,
} from "@/lib/seo";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost(params.slug);
  return {
    ...pageMetadata({
      path: `/blog/${params.slug}`,
      // Keep titles short enough for search results; long post titles skip the name suffix
      title: post.title.length > 45 ? post.title : `${post.title} | Muhammad Haziq`,
      description: post.description,
      ogTitle: post.title,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    }),
    authors: [{ name: "Muhammad Haziq", url: SITE_URL }],
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPost(params.slug);
  const allPosts = getAllPosts();
  const related = allPosts.filter((p) => p.slug !== params.slug).slice(0, 2);
  const url = absoluteUrl(`/blog/${params.slug}`);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${OG_IMAGE.url}`,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en",
    mainEntityOfPage: url,
    author: { "@id": PERSON_ID, name: "Muhammad Haziq", url: absoluteUrl("/") },
    publisher: { "@id": PERSON_ID },
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd([
          articleLd,
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${params.slug}` },
          ]),
        ])}
      />

      <main className="flex flex-col items-center px-4 pb-24">
        {/* Breadcrumb */}
        <nav className="w-full max-w-[55rem] mt-6 mb-8 text-xs text-gray-400 dark:text-white/30">
          <Link href="/" className="hover:text-gray-600 dark:hover:text-white/50 transition">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog/" className="hover:text-gray-600 dark:hover:text-white/50 transition">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600 dark:text-white/60 truncate">{post.title}</span>
        </nav>

        <article className="w-full max-w-[55rem]">
          {/* Article header */}
          <header className="mb-10">
            <div className="flex flex-wrap gap-1.5 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white/50 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-white/60 mb-5 leading-relaxed">
              {post.description}
            </p>

            <div className="flex items-center gap-4 py-4 border-y border-black/[0.07] dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/profile-photo.webp" alt="Muhammad Haziq" width={36} height={36} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Muhammad Haziq</p>
                  <p className="text-xs text-gray-500 dark:text-white/40">Senior Full-Stack &amp; Node.js Engineer</p>
                </div>
              </div>
              <div className="ml-auto flex items-center gap-3 text-xs text-gray-400 dark:text-white/30">
                <span>{formatDate(post.date)}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Article content */}
          <div
            className="prose-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-16 bg-white dark:bg-white/5 border border-black/[0.07] dark:border-white/10 rounded-2xl px-7 py-8 text-center shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Building a web application or Node.js backend?
            </h2>
            <p className="text-sm text-gray-600 dark:text-white/60 mb-6 max-w-[32rem] mx-auto">
              I build web applications, SaaS products and fintech backends for
              clients in the USA, UK, UAE and Saudi Arabia. Book a free
              30-minute call to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 transition-transform"
              >
                Book a Free Call
              </a>
              <Link
                href="/blog/"
                className="inline-flex items-center justify-center bg-white dark:bg-white/10 border border-black/10 dark:border-white/10 px-6 py-3 rounded-full text-sm font-semibold text-gray-900 dark:text-white hover:scale-105 transition-transform"
              >
                More Articles
              </Link>
            </div>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-5">
                More from the blog
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}/`}
                    className="group bg-white dark:bg-white/5 border border-black/[0.07] dark:border-white/10 rounded-xl p-5 hover:-translate-y-0.5 hover:shadow-md transition-all"
                  >
                    <div className="flex flex-wrap gap-1 mb-2">
                      {p.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-white/40 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-white/80 transition-colors leading-snug">
                      {p.title}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-white/30 mt-2">{p.readTime}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
    </>
  );
}
