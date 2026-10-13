import type { Metadata } from "next";

export const SITE_URL = "https://muhammadhaziq.github.io";
export const SITE_NAME = "Muhammad Haziq";
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const SERVICE_ID = `${SITE_URL}/#service`;
export const CONTACT_EMAIL_PUBLIC = "muhammadhaziq341@gmail.com";

// WhatsApp number from the CONTACT_WHATSAPP env var, in international format
// (e.g. "971501234567"). Non-digits such as "+" or spaces are stripped.
// Leave it unset to hide every WhatsApp button.
export const WHATSAPP_NUMBER: string = (process.env.CONTACT_WHATSAPP || "").replace(/\D/g, "");

export function whatsappLink(
  message = "Hi Muhammad, I found your portfolio and would like to discuss a project."
) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const SOCIAL_PROFILES = [
  "https://www.linkedin.com/in/muhammad-haziq/",
  "https://github.com/MuhammadHaziq",
];

export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Muhammad Haziq, Senior Full-Stack & Node.js Engineer for web applications",
};

// Countries served, used in structured data (ISO-style names Google understands)
export const AREAS_SERVED = [
  "United States",
  "United Kingdom",
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "Oman",
  "Canada",
  "Australia",
  "Germany",
  "Netherlands",
  "Ireland",
  "Pakistan",
];

/** Absolute URL with a trailing slash, matching next.config.js `trailingSlash: true`. */
export function absoluteUrl(path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  const withSlash = clean.endsWith("/") ? clean : `${clean}/`;
  return `${SITE_URL}${withSlash === "//" ? "/" : withSlash}`;
}

type PageMetaInput = {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
};

/**
 * Per-page metadata with a self-referencing canonical and page-specific
 * Open Graph / Twitter tags (otherwise child pages inherit the homepage's).
 */
export function pageMetadata({
  path,
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  type = "website",
  publishedTime,
  modifiedTime,
  tags,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const socialTitle = ogTitle ?? title;
  const socialDescription = ogDescription ?? description;

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      type,
      locale: "en_US",
      url,
      siteName: SITE_NAME,
      title: socialTitle,
      description: socialDescription,
      images: [OG_IMAGE],
      ...(type === "article"
        ? { publishedTime, modifiedTime, authors: [SITE_URL], tags }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: socialDescription,
      images: [OG_IMAGE.url],
    },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

/** Site-wide Person entity. Every other schema references it by @id. */
export const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Muhammad Haziq",
  givenName: "Muhammad",
  familyName: "Haziq",
  url: absoluteUrl("/"),
  image: {
    "@type": "ImageObject",
    url: `${SITE_URL}/profile_image.jpeg`,
    width: 1089,
    height: 1090,
  },
  sameAs: SOCIAL_PROFILES,
  jobTitle: "Senior Full-Stack Software Engineer",
  description:
    "Muhammad Haziq is a Senior Full-Stack Software Engineer with 7+ years building web applications, fintech platforms, payment integrations and agentic AI (with Claude AI) using Node.js, NestJS, TypeScript and React. Based in Dubai and working remotely with clients in the USA, UK, UAE, Saudi Arabia and Europe.",
  worksFor: {
    "@type": "Organization",
    name: "InsuranceMarket.ae",
    url: "https://insurancemarket.ae/",
  },
  knowsAbout: [
    "Web Application Development",
    "Full-Stack Development",
    "Node.js",
    "NestJS",
    "Express.js",
    "TypeScript",
    "React",
    "Next.js",
    "Redux",
    "REST APIs",
    "GraphQL",
    "Microservices",
    "Fintech",
    "Payment Gateway Integration",
    "Stripe",
    "Apple Pay",
    "Checkout.com",
    "TAP Payments",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Docker",
    "AWS",
    "CI/CD",
    "Agentic AI",
    "Claude AI",
    "AI Agents",
    "AI-Assisted Development",
    "Insurance Technology",
  ],
  knowsLanguage: ["English"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  email: `mailto:${CONTACT_EMAIL_PUBLIC}`,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: CONTACT_EMAIL_PUBLIC,
    ...(WHATSAPP_NUMBER ? { telephone: `+${WHATSAPP_NUMBER}` } : {}),
    url: absoluteUrl("/contact"),
    availableLanguage: ["English"],
    areaServed: AREAS_SERVED,
  },
};

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "Muhammad Haziq",
  alternateName: "Muhammad Haziq Portfolio",
  url: absoluteUrl("/"),
  inLanguage: "en",
  publisher: { "@id": PERSON_ID },
  author: { "@id": PERSON_ID },
};

/** Freelance web development service offered by the Person (used on home + services pages). */
export const professionalServiceLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": SERVICE_ID,
  name: "Muhammad Haziq | Web Application Development",
  url: absoluteUrl("/web-application-development"),
  image: `${SITE_URL}${OG_IMAGE.url}`,
  description:
    "Custom web application development, SaaS platforms, agentic AI, admin dashboards and portals, Node.js/NestJS backends and payment gateway integrations for businesses in the USA, UK, UAE, Saudi Arabia and worldwide.",
  founder: { "@id": PERSON_ID },
  employee: { "@id": PERSON_ID },
  email: CONTACT_EMAIL_PUBLIC,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  areaServed: AREAS_SERVED.map((name) => ({ "@type": "Country", name })),
  knowsLanguage: ["English"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web development services",
    itemListElement: [
      "Custom web application development",
      "SaaS product and MVP development",
      "Agentic AI development with Claude AI",
      "Admin dashboards and customer portals",
      "Node.js / NestJS backend and API development",
      "Payment gateway integration",
      "Performance optimization and code review",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name, provider: { "@id": PERSON_ID } },
    })),
  },
};

/** Render one or more JSON-LD objects as a server-rendered script tag payload. */
export function jsonLd(data: object | object[]) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
