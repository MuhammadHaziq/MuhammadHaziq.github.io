"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 w-full max-w-[44rem]">
      <SectionHeading>My Projects</SectionHeading>
      <p className="text-center text-sm text-gray-600 mb-10 -mt-6 dark:text-white/60">
        Production work across fintech, e-commerce, and retail
      </p>
      <div className="flex flex-col items-center">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}