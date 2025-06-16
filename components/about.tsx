"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { MotionSection } from "./Motion/MotionSectionWrapper";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <MotionSection
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Information Technology</span>, I have been
        passionate about programming for over{" "}
        <span className="font-medium">7 years</span>. Throughout my career, I've
        developed numerous applications using{" "}
        <span className="font-medium">JavaScript</span> as my core language.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect and building scalable solutions that make a real
        impact.
      </p>
      <p className="mb-3">
        My expertise spans across the full stack with{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and Nest.js
        </span>
        . I have extensive experience working with various databases including{" "}
        <span className="font-medium">
          MongoDB, MySQL, Oracle, and Sequelize ORM
        </span>
        . For the past{" "}
        <span className="font-medium">3 years</span>, I've been working
        extensively with{" "}
        <span className="font-medium">TypeScript</span>, which has significantly
        improved my development workflow and code quality.
      </p>
      <p className="mb-3">
        I have hands-on experience with modern development practices including{" "}
        <span className="font-medium">Docker containerization</span> and{" "}
        <span className="font-medium">CI/CD pipelines</span>. I stay current
        with the latest technologies and have been leveraging{" "}
        <span className="font-medium">AI tools like Cursor and Claude 4</span>{" "}
        to enhance my development productivity and code quality.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy exploring
        new technologies. I believe in
        continuous learning and am always excited to take on new challenges that
        push the boundaries of what's possible with modern web development.
      </p>
    </MotionSection>
  );
}
