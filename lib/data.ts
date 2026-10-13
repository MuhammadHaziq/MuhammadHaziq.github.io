import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  MdShield,
  MdDirectionsCar,
  MdLaptop,
  MdPointOfSale,
  MdElectricBolt,
} from "react-icons/md";

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
  {
    name: "Blog",
    hash: "/blog/",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Software Engineer (Full-Stack / Node.js)",
    location: "Dubai, UAE — InsuranceMarket.ae",
    description:
      "Leading backend engineering for the UAE's largest digital insurance platform. Architecting fintech modules with TypeScript, NestJS, and Sequelize ORM on MySQL. Built insurance plan creation with providers including GIG, Liva and other insurers. Integrated multi-gateway payment systems including Apple Pay, Checkout.com, and TAP for secure policy transactions. Currently developing agentic AI capabilities for the platform with Claude AI. Built cron jobs for third-party API integrations, wrote comprehensive Postman test suites, and led code refactoring initiatives to optimize application performance and resolve complex race conditions in async payment flows.",
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
    title: "InsuranceMarket",
    subtitle: "UAE's Leading Insurance Platform",
    role: "Senior Backend Engineer",
    period: "2023 – Present",
    location: "UAE",
    domain: "insurancemarket.ae",
    link: "https://insurancemarket.ae/",
    problem:
      "Race conditions in async payment flows were causing failed transactions across 3 concurrent gateways — Apple Pay, Checkout.com, and TAP.",
    description:
      "Built insurance plan creation with providers including GIG, Liva and other insurers, so their plans can be offered and purchased on the platform. Integrated Apple Pay, Checkout.com, and TAP payment gateways handling secure policy transactions. Refactored legacy modules, resolved critical race conditions in async payment flows, and optimized database queries to reduce API response times. Built cron jobs for third-party API integrations, and now developing agentic AI capabilities for the platform with Claude AI.",
    outcome:
      "Brought insurer plans from GIG, Liva and others onto the platform, resolved concurrency bugs, unified multi-gateway payment flows, reduced API response times on critical policy purchase paths, and started bringing agentic AI built on Claude AI into the product.",
    metrics: [
      { label: "PAYMENT GATEWAYS", value: "3+" },
      { label: "MARKET RANK", value: "#1 UAE" },
      { label: "FOCUS AREA", value: "Fintech + AI" },
    ],
    tags: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "MySQL",
      "Sequelize",
      "Apple Pay",
      "Checkout.com",
      "TAP",
      "Agentic AI",
      "Claude AI",
      "Cursor AI",
    ],
    icon: MdShield,
    theme: {
      gradient: "from-blue-100 to-blue-300 dark:from-blue-900/40 dark:to-blue-700/30",
      titleColor: "text-blue-900 dark:text-blue-100",
      domainColor: "text-blue-700 dark:text-blue-300",
      statusText: "text-green-800 dark:text-green-300",
      iconColor: "text-blue-700 dark:text-blue-300",
    },
  },
  {
    title: "ISMO",
    subtitle: "Independent System & Market Operator of Pakistan",
    role: "Frontend Developer (Solo)",
    period: "2024 – 2025",
    location: "Pakistan",
    domain: "ismo.gov.pk",
    link: "https://www.ismo.gov.pk/",
    problem:
      "Pakistan's electricity market operator needed a public platform plus a secure portal where Market Participants could register, track their balances and compliance, and take part in Wheeling Auctions, with admins able to review every participant's details.",
    description:
      "Sole frontend developer for ISMO's web platform, built with React 18 and Redux. Delivered the public site (market data dashboards, auction hub, library, jobs and trainings) and the MP Login portal: multi-step market registration with document uploads and an e-signed Declaration of Conformity, and a participant dashboard showing security cover, energy and capacity balances, contracts and compliance status. Added complaints, forums and real-time notifications via Pusher. Admins can view all details of every Market Participant.",
    outcome:
      "Shipped the complete frontend single-handedly, covering the public site, the Market Participant portal and the admin views behind Pakistan's first Wheeling Auctions.",
    metrics: [
      { label: "ROLE", value: "Solo Frontend" },
      { label: "SECTOR", value: "Energy" },
      { label: "PORTALS", value: "Public + MP + Admin" },
    ],
    tags: [
      "React 18",
      "Redux",
      "React Router",
      "Formik",
      "Yup",
      "Bootstrap",
      "ApexCharts",
      "Pusher",
    ],
    icon: MdElectricBolt,
    theme: {
      gradient: "from-emerald-100 to-emerald-300 dark:from-emerald-900/40 dark:to-emerald-700/30",
      titleColor: "text-emerald-900 dark:text-emerald-100",
      domainColor: "text-emerald-700 dark:text-emerald-300",
      statusText: "text-green-800 dark:text-green-300",
      iconColor: "text-emerald-700 dark:text-emerald-300",
    },
  },
  {
    title: "FinanceThat",
    subtitle: "Vehicle Financing Platform",
    role: "Lead Developer",
    period: "2021 – 2023",
    location: "Canada & US",
    domain: "financethat.ca",
    link: "https://financethat.ca",
    problem:
      "Needed a multi-market financing platform with KYC identity verification, credit reporting, and Stripe subscription payments — built from scratch across CA & US.",
    description:
      "Architected scalable vehicle financing and listing platform serving Canadian and US markets. Integrated Stripe for ad boosting and subscription payments, plus Flinks for KYC, identity verification, and credit reports. Led a distributed remote team and managed complex state with Redux.",
    outcome:
      "Shipped a production vehicle financing platform serving CA & US markets with full Stripe + Flinks integration and complex Redux state management.",
    metrics: [
      { label: "MARKETS", value: "CA + US" },
      { label: "ROLE", value: "Lead Dev" },
      { label: "INTEGRATIONS", value: "Stripe + Flinks" },
    ],
    tags: [
      "React",
      "Redux",
      "Node.js",
      "Python",
      "Django",
      "PostgreSQL",
      "Stripe",
      "Flinks",
    ],
    icon: MdDirectionsCar,
    theme: {
      gradient: "from-teal-100 to-teal-300 dark:from-teal-900/40 dark:to-teal-700/30",
      titleColor: "text-teal-900 dark:text-teal-100",
      domainColor: "text-teal-700 dark:text-teal-300",
      statusText: "text-green-800 dark:text-green-300",
      iconColor: "text-teal-700 dark:text-teal-300",
    },
  },
  {
    title: "LaptopZone",
    subtitle: "E-Commerce Platform",
    role: "Full-Stack Developer",
    period: "2018 – 2021",
    location: "USA",
    domain: "laptopzoneusa.com",
    link: "https://laptopzoneusa.com",
    problem:
      "Client needed a high-conversion US e-commerce platform with real-time inventory management, order tracking, and a scalable Oracle-backed architecture.",
    description:
      "High-conversion e-commerce platform built for the US market specializing in laptop sales and repairs. Implemented optimized checkout flows, inventory management, order tracking, and customer service modules. Designed scalable backend architecture with Oracle database.",
    outcome:
      "Delivered a full-stack e-commerce system with optimized checkout flows, order tracking, and a scalable Oracle-backed architecture for the US market.",
    metrics: [
      { label: "MARKET", value: "USA" },
      { label: "DOMAIN", value: "E-Commerce" },
      { label: "DATABASE", value: "Oracle" },
    ],
    tags: ["Node.js", "Express", "Oracle", "React", "Redux"],
    icon: MdLaptop,
    theme: {
      gradient: "from-amber-100 to-amber-300 dark:from-amber-900/40 dark:to-amber-700/30",
      titleColor: "text-amber-900 dark:text-amber-100",
      domainColor: "text-amber-700 dark:text-amber-300",
      statusText: "text-green-800 dark:text-green-300",
      iconColor: "text-amber-700 dark:text-amber-300",
    },
  },
  {
    title: "Kyrio POS",
    subtitle: "UK Retail Point-of-Sale",
    role: "Full-Stack Developer",
    period: "2018 – 2021",
    location: "UK",
    domain: "dashboard.kyriopos.com",
    link: "https://dashboard.kyriopos.com/#/summary",
    problem:
      "UK retail client needed an offline-first POS system with role-based access for managers, cashiers, and admins — plus real-time analytics and multi-device sync.",
    description:
      "Loyverse POS-inspired system for UK retail clients. Built role-based access control for managers, cashiers, and admins. Implemented real-time sales reports, inventory tracking, customer dashboards, and graph-based analytics with offline-first capabilities.",
    outcome:
      "Shipped a complete POS platform with 3 access tiers, real-time sales graphs, inventory tracking, and offline-first capability for UK retail clients.",
    metrics: [
      { label: "MARKET", value: "UK" },
      { label: "USER ROLES", value: "3+ Tiers" },
      { label: "FEATURES", value: "Real-time" },
    ],
    tags: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "React",
      "Redux",
    ],
    icon: MdPointOfSale,
    theme: {
      gradient: "from-pink-100 to-pink-300 dark:from-pink-900/40 dark:to-pink-700/30",
      titleColor: "text-pink-900 dark:text-pink-100",
      domainColor: "text-pink-700 dark:text-pink-300",
      statusText: "text-green-800 dark:text-green-300",
      iconColor: "text-pink-700 dark:text-pink-300",
    },
  },
] as const;

export type Testimonial = {
  name: string;
  role: string; // e.g. "Engineering Manager". Leave "" to show only the company
  company: string;
  project: string;
  location: string;
  quote: string;
  // Set to true only after the person has read and approved the exact quote.
  // Unapproved testimonials are hidden in production and shown as drafts in `npm run dev`.
  approved: boolean;
};

export const testimonialsData: Testimonial[] = [
  {
    name: "Usama",
    role: "",
    company: "InsuranceMarket.ae",
    project: "InsuranceMarket",
    location: "Dubai, UAE",
    quote:
      "Haziq built our insurance plan creation with providers like GIG and Liva, and took ownership of our payment flows across Apple Pay, Checkout.com and TAP. He tracked down the race conditions behind failed and duplicate policy transactions and fixed them properly. He's now building agentic AI features for our platform with Claude AI. He communicates clearly and is the person we go to for tricky backend problems.",
    approved: false,
  },
  {
    name: "Sajid Khan",
    role: "",
    company: "LaptopZone",
    project: "LaptopZone",
    location: "USA",
    quote:
      "Haziq built our e-commerce platform end to end, from checkout and inventory to order tracking and customer service tools. He understood what our US customers needed, delivered on schedule and was always quick to respond when we needed changes.",
    approved: false,
  },
  {
    name: "Tahir",
    role: "",
    company: "Kyrio POS",
    project: "Kyrio POS",
    location: "UK",
    quote:
      "Haziq delivered our point-of-sale system with separate access for managers, cashiers and admins, real-time sales reports and offline support for our stores. He asked the right questions and turned our requirements into a product our retail clients rely on every day.",
    approved: false,
  },
];

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

  // AI Development & AI-Assisted Development
  "Agentic AI",
  "AI Agents",
  "Cursor AI",
  "Claude AI",
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