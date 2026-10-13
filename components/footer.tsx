import React from "react";
import Link from "next/link";
import { CONTACT_EMAIL_PUBLIC, WHATSAPP_NUMBER, whatsappLink } from "@/lib/seo";

// Internal links to every landing page so crawlers (and clients) can reach them
const columns: { title: string; links: { label: string; href: string; external?: boolean }[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Web Application Development", href: "/web-application-development/" },
      { label: "Web Developer in Saudi Arabia", href: "/web-application-developer-saudi-arabia/" },
      { label: "Hire a Node.js Developer (USA)", href: "/hire-nodejs-developer-usa/" },
      { label: "Hire a Node.js Developer (UK)", href: "/hire-nodejs-developer-uk/" },
      { label: "Fintech Developer (UAE)", href: "/fintech-developer-uae/" },
    ],
  },
  {
    title: "Expertise",
    links: [
      { label: "Backend Architect, Dubai", href: "/backend-architect-dubai/" },
      { label: "NestJS Developer", href: "/nestjs-developer-remote/" },
      { label: "TypeScript Developer", href: "/remote-typescript-developer/" },
      { label: "MERN Stack Developer", href: "/remote-mern-stack-developer/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Projects", href: "/#projects" },
      { label: "Blog", href: "/blog/" },
      { label: "Book a Call", href: "/contact/" },
      { label: "Download CV", href: "/Muhammad-Haziq-Senior-Software-Engineer.pdf" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-haziq/", external: true },
      { label: "GitHub", href: "https://github.com/MuhammadHaziq", external: true },
      { label: "Email", href: `mailto:${CONTACT_EMAIL_PUBLIC}`, external: true },
      ...(WHATSAPP_NUMBER
        ? [{ label: "WhatsApp", href: whatsappLink(), external: true }]
        : []),
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-10 mb-10 px-4 text-gray-500 dark:text-white/50">
      <nav
        aria-label="Footer"
        className="mx-auto max-w-[55rem] grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-black/10 dark:border-white/10 pt-10 mb-10 text-left"
      >
        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-white/80 mb-3">
              {col.title}
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              {col.links.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                      className="hover:text-gray-900 dark:hover:text-white transition"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="hover:text-gray-900 dark:hover:text-white transition"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
      <small className="block text-center text-xs">
        &copy; {currentYear} Muhammad Haziq · Senior Full-Stack Web Application
        Developer · Dubai, UAE · Serving clients in the USA, UK, UAE, Saudi
        Arabia &amp; worldwide
      </small>
    </footer>
  );
}
