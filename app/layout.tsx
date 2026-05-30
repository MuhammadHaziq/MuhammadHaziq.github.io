import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://muhammadhaziq.github.io"),
  title:
    "Muhammad Haziq | Senior Node.js & Fintech Engineer | Available for Remote Contract",
  description:
    "Senior Node.js Engineer with 7+ years building fintech backends and payment systems (Stripe, Apple Pay, Checkout.com, TAP, Flinks). Available for remote contract roles across UK, EU, US, and Canada. Book a free 30-min call.",
  keywords: [
    "Senior Node.js Developer",
    "Remote Node.js Developer",
    "Node.js Backend Engineer",
    "Senior Software Engineer Remote",
    "Fintech Developer",
    "Payment Gateway Integration",
    "Stripe Developer",
    "NestJS Developer",
    "TypeScript Developer",
    "React Developer",
    "Next.js Developer",
    "MERN Stack Developer",
    "Full Stack Developer Dubai",
    "Remote Senior Engineer UK",
    "Remote Developer EST",
    "Contract Node.js Engineer",
    "Part Time Backend Developer",
    "Freelance Full Stack Developer",
    "AI Assisted Development",
    "Cursor AI Developer",
    "Muhammad Haziq",
    "Muhammad Haziq Developer",
    "Muhammad Haziq Portfolio",
  ],
  authors: [{ name: "Muhammad Haziq", url: "https://muhammadhaziq.github.io" }],
  creator: "Muhammad Haziq",
  publisher: "Muhammad Haziq",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://muhammadhaziq.github.io",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammadhaziq.github.io",
    title:
      "Muhammad Haziq | Senior Node.js Developer | Fintech & Payments Specialist",
    description:
      "Senior Software Engineer with 7+ years in fintech, payment integrations (Stripe, Apple Pay), and Node.js/NestJS. Available for remote contract work across UK, EU, US, Canada.",
    siteName: "Muhammad Haziq Portfolio",
    images: [
      {
        url: "/profile_image.jpeg",
        width: 1200,
        height: 630,
        alt: "Muhammad Haziq - Senior Node.js Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Muhammad Haziq | Senior Node.js Developer | Fintech & Payments Specialist",
    description:
      "Senior Software Engineer with 7+ years in fintech & payment integrations. Available for remote contract work (UK/EU/US/Canada).",
    images: ["/profile_image.jpeg"],
    creator: "@MuhammadHaziq",
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Haziq",
  url: "https://muhammadhaziq.github.io",
  image: "https://muhammadhaziq.github.io/profile_image.jpeg",
  sameAs: [
    "https://www.linkedin.com/in/muhammad-haziq/",
    "https://github.com/MuhammadHaziq",
  ],
  jobTitle: "Senior Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "InsuranceMarket.ae",
  },
  description:
    "Senior Software Engineer with 7+ years building scalable fintech applications, Node.js APIs, and payment integrations. Available for remote contract & part-time roles.",
  knowsAbout: [
    "Node.js",
    "NestJS",
    "TypeScript",
    "React.js",
    "Next.js",
    "Fintech Development",
    "Payment Gateway Integration",
    "Stripe",
    "Apple Pay",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Docker",
    "CI/CD",
    "AI-Assisted Development",
    "Microservices Architecture",
    "REST APIs",
    "GraphQL",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  email: "muhammadhaziq341@gmail.com",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Professional",
    email: "muhammadhaziq341@gmail.com",
    availableLanguage: ["English"],
    areaServed: ["UK", "EU", "US", "Canada", "UAE"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="canonical" href="https://muhammadhaziq.github.io" />
        <meta name="theme-color" content="#fbe2e3" />
        <meta name="format-detection" content="telephone=no" />
        <Script
          id="json-ld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}