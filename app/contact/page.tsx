import CalendlyEmbed, { CALENDLY_URL } from "@/components/calendly-embed";
import ContactForm from "@/components/contact-form";
import { Metadata } from "next";
import { FaWhatsapp } from "react-icons/fa";
import {
  PERSON_ID,
  WHATSAPP_NUMBER,
  absoluteUrl,
  breadcrumbLd,
  jsonLd,
  pageMetadata,
  whatsappLink,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/contact",
  title: "Contact Muhammad Haziq | Hire a Web Application Developer",
  description:
    "Book a free 30-minute call with Muhammad Haziq to discuss your web application, SaaS or fintech project. Serving clients in the USA, UK, UAE and Saudi Arabia.",
});

const contactPageLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Muhammad Haziq",
  url: absoluteUrl("/contact"),
  about: { "@id": PERSON_ID },
};

const availabilityBadges = [
  "🟢 Available Now",
  "⏰ GMT+4 (Dubai)",
  "🇺🇸 US · 🇬🇧 UK · 🇦🇪 UAE · 🇸🇦 KSA · 🇪🇺 EU",
  "📅 Responds within 24h",
];

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center px-4 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd([
          contactPageLd,
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ])}
      />
      {/* Header */}
      <section className="w-full max-w-[55rem] text-center mt-8 mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Let&apos;s Work Together
        </h1>
        <p className="text-gray-600 dark:text-white/60 text-lg max-w-[38rem] mx-auto mb-8">
          Need a web application, SaaS platform, portal or Node.js backend
          built? Book a call or send a message and I&apos;ll get back within 24
          hours.
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {availabilityBadges.map((badge) => (
            <span
              key={badge}
              className="text-sm px-4 py-2 bg-white dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-full text-gray-700 dark:text-white/80 shadow-sm"
            >
              {badge}
            </span>
          ))}
        </div>
      </section>

      {/* Two-column layout */}
      <div className="w-full max-w-[55rem] grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Calendly */}
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            Book a 30-min Call
          </h2>
          <p className="text-sm text-gray-500 dark:text-white/50 mb-5">
            Pick a time that works for you. No commitment, just a conversation
            about your project.
          </p>
          <CalendlyEmbed url={CALENDLY_URL} />
        </div>

        {/* Contact form */}
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            Send a Message
          </h2>
          <p className="text-sm text-gray-500 dark:text-white/50 mb-5">
            Prefer email? Describe your project and I&apos;ll reply within 24
            hours.
          </p>
          <ContactForm />

          {WHATSAPP_NUMBER && (
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 w-full h-12 rounded-full bg-[#25D366] text-white font-semibold hover:scale-[1.02] active:scale-100 transition-transform"
            >
              <FaWhatsapp className="text-xl" />
              Message me on WhatsApp
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
