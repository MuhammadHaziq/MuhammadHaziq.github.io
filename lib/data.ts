import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import financeThat from "@/public/financeThat.jpeg";
import laptopzone from "@/public/laptopzone.jpeg";
import kyrioPos from "@/public/kyriopos.jpeg";
import insuanceMarket from "@/public/insurancemarket.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Software Engineer (Full-Stack / Node.js)",
    location: "Dubai, UAE — InsuranceMarket.ae",
    description:
      "Leading backend engineering for the UAE's largest digital insurance platform. Architecting fintech modules with TypeScript, NestJS, and Sequelize ORM on MySQL. Integrated multi-gateway payment systems including Apple Pay, Checkout.com, and TAP for secure policy transactions. Built cron jobs for third-party API integrations, wrote comprehensive Postman test suites, and led code refactoring initiatives to optimize application performance and resolve complex race conditions in async payment flows.",
    icon: React.createElement(FaNodeJs),
    date: "2023 - Present",
  },
  {
    title: "Senior Software Engineer",
    location: "Lahore, Pakistan — Nextbridge (Remote: Canada & US Clients)",
    description:
      "Lead Developer for FinanceThat (Canada & US) — a vehicle financing platform integrated with Stripe and Flinks. Architected scalable e-commerce and financial platforms with full-stack expertise in Node.js, Express.js, NestJS, React.js, and Angular CLI. Managed complex application state with Redux.js, implemented robust testing strategies using Jest, Chai, and Mocha. Strong proficiency in TypeScript, MongoDB, and MariaDB while delivering maintainable, scalable solutions for distributed remote teams.",
    icon: React.createElement(FaNodeJs),
    date: "2021 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Lahore, Pakistan — Ecologix",
    description:
      "Built production applications using Node.js, Express.js, Vue.js, and React.js with strong skills in Redux, Git, Sass, and Tailwind CSS. Led project deliveries, managed MongoDB and Oracle databases, and built scalable web applications including LaptopZone USA (e-commerce) and Kyrio POS (UK retail point-of-sale system). Drove technical decisions, code reviews, and continuous exploration of new technologies for impactful, cutting-edge web development.",
    icon: React.createElement(FaReact),
    date: "2018 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "InsuranceMarket.ae — UAE's Leading Insurance Platform",
    link: "https://insurancemarket.ae/",
    description:
      "Senior Backend Engineer on UAE's #1 digital insurance platform. Integrated Apple Pay, Checkout.com, and TAP payment gateways handling secure policy transactions. Refactored legacy modules, resolved critical race conditions in async payment flows, and optimized database queries to reduce API response times. Built cron jobs for third-party API integrations and led code quality initiatives.",
    tags: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "MySQL",
      "Sequelize",
      "Apple Pay",
      "Checkout.com",
      "TAP",
      "Cursor AI",
      "SonarQube",
    ],
    imageUrl: insuanceMarket,
  },
  {
    title: "FinanceThat.ca — Vehicle Financing Platform (Canada & US)",
    link: "https://financethat.ca",
    description:
      "Lead Developer architecting a vehicle financing and listing platform serving Canadian and US markets. Integrated Stripe for ad boosting and subscription payments, plus Flinks for KYC, identity verification, and credit report fetching. Built reusable UI components, managed complex state with Redux, and led a distributed remote team across multiple timezones.",
    tags: [
      "React",
      "Redux",
      "Node.js",
      "Python",
      "Django",
      "PostgreSQL",
      "Stripe",
      "Flinks",
      "Scss",
    ],
    imageUrl: financeThat,
  },
  {
    title: "LaptopZone USA — E-Commerce Platform",
    link: "https://laptopzoneusa.com",
    description:
      "High-conversion e-commerce platform built for the US market specializing in laptop sales and repairs. Implemented optimized checkout flows, inventory management, order tracking, and customer service modules. Designed scalable backend architecture with Oracle database and built responsive React frontend for seamless shopping experiences.",
    tags: ["Node.js", "Express", "Oracle", "React", "Redux", "CSS"],
    imageUrl: laptopzone,
  },
  {
    title: "Kyrio POS — UK Retail Point-of-Sale System",
    link: "https://dashboard.kyriopos.com/#/summary",
    description:
      "Full-Stack Developer on a Loyverse POS-inspired system for UK retail clients. Built role-based access control for managers, cashiers, and admins. Implemented real-time sales reports, inventory tracking, customer dashboards, and graph-based analytics. Managed complex MongoDB relationships with Mongoose for filtered reporting and offline-first capabilities.",
    tags: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "React",
      "Redux",
      "Scss",
      "Analytics",
    ],
    imageUrl: kyrioPos,
  },
] as const;

export const skillsData = [
  // Core Backend
  "Node.js",
  "NestJS",
  "Express.js",
  "TypeScript",
  "JavaScript",

  // APIs & Architecture
  "REST APIs",
  "GraphQL",
  "Microservices",
  "JWT",
  "OAuth2",
  "WebSockets",

  // Frontend
  "React.js",
  "Next.js",
  "Redux",
  "Vue.js",
  "Angular",
  "HTML5",
  "CSS3",
  "Sass",
  "Tailwind CSS",

  // Databases
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Oracle",
  "Redis",
  "Sequelize ORM",
  "Mongoose",

  // Payments / Fintech
  "Stripe",
  "Apple Pay",
  "Checkout.com",
  "TAP Payments",
  "Flinks",

  // DevOps & Cloud
  "Docker",
  "CI/CD",
  "GitHub Actions",
  "AWS",
  "Nginx",
  "Linux",

  // Testing
  "Jest",
  "Mocha",
  "Chai",
  "TDD",

  // Monitoring & Observability
  "New Relic",
  "Sentry",
  "Axiom",
  "Papertrail",
  "Doppler",
  "SonarQube",

  // AI-Assisted Development
  "Cursor AI",
  "Claude",
  "GitHub Copilot",
  "ChatGPT",
  "Gemini",
  "Prompt Engineering",

  // Tools
  "Git",
  "GitHub",
  "Swagger",
  "Postman",
  "Jira",
  "Agile",
  "Scrum",
] as const;