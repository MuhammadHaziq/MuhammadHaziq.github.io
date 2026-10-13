import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import WhatsAppButton from "@/components/whatsapp-button";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import {
  SITE_URL,
  jsonLd,
  pageMetadata,
  personLd,
  websiteLd,
} from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;
const bingVerification = process.env.BING_SITE_VERIFICATION;

// Defaults for every page. Each page overrides title, description, canonical
// and social tags through pageMetadata() so nothing points back to the homepage.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata({
    path: "/",
    title: "Muhammad Haziq | Senior Full-Stack Web Application Developer",
    description:
      "Senior Full-Stack Engineer building web apps, fintech platforms, payments & agentic AI with Node.js and React. Hire Muhammad Haziq: USA, UK, UAE, Saudi Arabia.",
  }),
  applicationName: "Muhammad Haziq",
  authors: [{ name: "Muhammad Haziq", url: SITE_URL }],
  creator: "Muhammad Haziq",
  publisher: "Muhammad Haziq",
  category: "technology",
  formatDetection: { telephone: false },
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
  ...(googleVerification || bingVerification
    ? {
        verification: {
          ...(googleVerification ? { google: googleVerification } : {}),
          ...(bingVerification
            ? { other: { "msvalidate.01": bingVerification } }
            : {}),
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <meta name="theme-color" content="#fbe2e3" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd([personLd, websiteLd])}
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
            <WhatsAppButton />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
