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
      className="mb-28 max-w-[55rem] text-center leading-8 sm:mb-40 scroll-mt-28"
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
          web applications, fintech platforms, payment systems and agentic AI
        </span>
        . Currently leading backend engineering in{" "}
        <span className="font-medium">Dubai&apos;s insurance sector</span>,
        where I built insurance plan creation with providers such as GIG and
        Liva and now develop agentic AI capabilities with Claude AI, I help
        startups,
        businesses and government teams deliver secure,
        production-grade software across{" "}
        <span className="italic">
          the USA, UK, UAE, Saudi Arabia, Canada and Pakistan
        </span>
        . Recent work includes the{" "}
        <span className="font-medium">ISMO</span> electricity market platform
        for Pakistan, which I built as the sole frontend developer.
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
        I build{" "}
        <span className="font-medium">agentic AI</span> into products with{" "}
        <span className="font-medium">Claude AI</span>: AI agents and
        LLM-powered features that work with an application&apos;s own data and
        APIs. I also use{" "}
        <span className="font-medium">
          AI tools (Claude Code, Cursor AI, GitHub Copilot, ChatGPT, Gemini)
        </span>{" "}
        day to day to ship production features faster without compromising
        engineering standards.
      </p>
      <p>
        <span className="italic">I&apos;m currently open to</span>{" "}
        <span className="font-medium">
          new projects and remote contract engagements
        </span>
        : end-to-end web application development, SaaS and MVP builds,
        agentic AI development, admin dashboards and portals, Node.js
        backends, payment integrations and technical consulting. I work async-first and have a strong track
        record collaborating with distributed teams across{" "}
        <span className="font-medium">US, UK, EU and Gulf</span> timezones.
      </p>
    </MotionSection>
  );
}