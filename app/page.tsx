import About from "@/components/about";
import Availability from "@/components/availability";
import BlogPreview from "@/components/blog-preview";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import FAQ from "@/components/faq";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Testimonials from "@/components/testimonials";
import TrustBar from "@/components/trust-bar";
import {
  PERSON_ID,
  WEBSITE_ID,
  absoluteUrl,
  jsonLd,
  professionalServiceLd,
} from "@/lib/seo";

// Tells Google this page is Muhammad Haziq's profile page (helps name searches)
const profilePageLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${absoluteUrl("/")}#profilepage`,
  url: absoluteUrl("/"),
  name: "Muhammad Haziq | Senior Full-Stack Web Application Developer",
  inLanguage: "en",
  isPartOf: { "@id": WEBSITE_ID },
  mainEntity: { "@id": PERSON_ID },
  dateModified: new Date().toISOString().slice(0, 10),
};

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd([profilePageLd, professionalServiceLd])}
      />
      <Intro />
      <SectionDivider />
      <TrustBar />
      <About />
      <Projects />
      <Testimonials />
      <Skills />
      <Experience />
      <Availability />
      <BlogPreview />
      <FAQ />
      <Contact />
    </main>
  );
}
