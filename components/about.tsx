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
        I'm a <span className="font-medium">Senior Software Engineer</span>{" "}
        with <span className="font-medium">7+ years</span> of hands-on
        experience designing and shipping{" "}
        <span className="font-medium">
          scalable fintech applications and payment systems
        </span>
        . Currently leading backend engineering in{" "}
        <span className="font-medium">Dubai's insurance sector</span>, I help
        startups and product teams deliver secure, production-grade software
        across <span className="italic">UAE, USA, Canada, and UK</span>{" "}
        markets.
      </p>
      <p className="mb-3">
        My core stack is{" "}
        <span className="font-medium">
          Node.js, NestJS, Express.js, and TypeScript
        </span>{" "}
        on the backend, paired with{" "}
        <span className="font-medium">React.js, Next.js, and Redux</span> on
        the frontend. I specialize in{" "}
        <span className="font-medium">payment gateway integrations</span> —
        Stripe, Apple Pay, Checkout.com, TAP, and Flinks — along with complex
        financial modules, KYC workflows, and secure transaction processing.
      </p>
      <p className="mb-3">
        I have deep expertise across{" "}
        <span className="font-medium">
          MongoDB, PostgreSQL, MySQL, Oracle, and Sequelize ORM
        </span>
        , with strong skills in database design, indexing strategies, and
        query optimization for high-traffic systems. I'm hands-on with{" "}
        <span className="font-medium">Docker, CI/CD pipelines</span>, and
        production observability tools like New Relic, Sentry, Axiom, and
        Papertrail.
      </p>
      <p className="mb-3">
        I leverage{" "}
        <span className="font-medium">
          AI tools (Cursor AI, Claude, GitHub Copilot, ChatGPT, Gemini)
        </span>{" "}
        to accelerate development cycles and improve code quality — shipping
        production features faster without compromising engineering
        standards.
      </p>
      <p>
        <span className="italic">I'm currently open to</span>{" "}
        <span className="font-medium">
          remote contract and part-time engagements
        </span>{" "}
        — Node.js backend work, fintech projects, payment integrations, and
        technical consulting. I work async-first and have a strong track
        record collaborating with distributed teams across{" "}
        <span className="font-medium">UK, EU, US, and Canadian</span>{" "}
        timezones.
      </p>
    </MotionSection>
  );
}