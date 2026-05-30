"use client";

import Script from "next/script";

// Update this URL to your Calendly scheduling link
export const CALENDLY_URL = "https://calendly.com/muhammadhaziq/30min";

export default function CalendlyEmbed({ url = CALENDLY_URL }: { url?: string }) {
  return (
    <>
      <div
        className="calendly-inline-widget w-full rounded-2xl overflow-hidden border border-black/5 dark:border-white/10"
        data-url={`${url}?hide_gdpr_banner=1&background_color=ffffff&text_color=111827&primary_color=111827`}
        style={{ minWidth: "320px", height: "660px" }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
