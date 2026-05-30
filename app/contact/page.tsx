import CalendlyEmbed, { CALENDLY_URL } from "@/components/calendly-embed";
import ContactForm from "@/components/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Call — Muhammad Haziq | Senior Node.js Engineer",
  description:
    "Schedule a free 30-minute discovery call with Muhammad Haziq, Senior Node.js Engineer and Fintech Specialist. Available for remote contract roles across UK, EU, US, and Canada.",
};

const availabilityBadges = [
  "🟢 Available Now",
  "⏰ GMT+4 (Dubai)",
  "🇬🇧 UK · 🇪🇺 EU · 🇺🇸 US · 🇨🇦 CA",
  "📅 Responds within 24h",
];

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center px-4 pb-24">
      {/* Header */}
      <section className="w-full max-w-[55rem] text-center mt-8 mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Let&apos;s Work Together
        </h1>
        <p className="text-gray-600 dark:text-white/60 text-lg max-w-[38rem] mx-auto mb-8">
          Available for remote Node.js &amp; fintech contracts. Book a call or
          send a message — I&apos;ll get back within 24 hours.
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
        </div>
      </div>
    </main>
  );
}
