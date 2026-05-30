import About from "@/components/about";
import Availability from "@/components/availability";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import FAQ from "@/components/faq";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import TrustBar from "@/components/trust-bar";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <TrustBar />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Availability />
      <FAQ />
      <Contact />
    </main>
  );
}
