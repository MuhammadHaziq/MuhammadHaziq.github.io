import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
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
    title: "Senior Full Stack Developer",
    location: "UAE, Dubai",
    description:
      "Working with TypeScript and Sequelize ORM with MySQL, currently I am working on fintech modules. I write Postman test cases and integrate payment gateways, including Apple Pay, checkout, TAP in an insurance project. I also develop cron jobs to fetch data from third-party APIs. As a senior developer, I focus on code refactoring and optimization to enhance application performance.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - present",
  },
  {
    title: "Senior Full Stack Developer",
    location: "Pakistan, Lahore",
    description:
      "I’m a Senior Software Engineer at Nextbridge with full-stack expertise in Node.js, Express.js, Nest.js, React.js, and Angular CLI. I’m proficient in TypeScript, Redux.js, MongoDB, and MariaDB, with a strong command of Git, Sass, and Tailwind CSS. I focus on building scalable, maintainable solutions and stay updated with modern web development trends to deliver impactful projects.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Pakistan, Lahore",
    description:
      "As a Senior Software Engineer at Ecologix, I specialize in Node.js, Express.js, Vue.js, and React.js with strong skills in Redux, Git, Sass, and Tailwind CSS. I’ve led projects, managed MongoDB and Oracle databases, and delivered scalable solutions. With a passion for innovation, I continuously explore new technologies to drive impactful, cutting-edge web application development.",
    icon: React.createElement(FaReact),
    date: "20218 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "InsuranceMarket",
    link: "https://insurancemarket.ae/",
    description:
      "Worked as Senior Backend Developer on InsuranceMarket.ae, integrating checkout and Tappay payment gateways, optimizing code, refactoring logic, and resolving complex promises and race conditions.",
    tags: ["Node", "Express", "Typescript", "MySQL", "Payment Gateway"],
    imageUrl: insuanceMarket,
  },
  {
    title: "FinanceThat",
    link: "https://financethat.ca",
    description:
      "Lead front-end for a vehicle listing platform, built UI components, integrated Stripe for ad boosting, and used Flinks for identity verification and credit reports. Currently running in Canda and US market.",
    tags: ["React", "Redux", "Postgres", "Scss", "Phython", "Django"],
    imageUrl: financeThat,
  },
  {
    title: "Laptopzone",
    link: "https://laptopzoneusa.com",
    description:
      "This is Selling and Repairing Website for Laptops and Mobile Phones. Currently running in US market.",
    tags: ["React", "Redux", "Node.js", "Css", "Orcale", "Express"],
    imageUrl: laptopzone,
  },
  {
    title: "Kyrio POS",
    link: "https://dashboard.kyriopos.com/#/summary",
    description:
      "Developed a Loyverse POS clone as Full-Stack Developer using React, Redux, and Express. Managed user roles, sales reports, and filtered data using Mongoose relationships. Currently running in UK market.",
    tags: ["React", "scss", "Graphs", "Node.js", "Express", "MongoDB"],
    imageUrl: kyrioPos,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "Tailwind",
  "Node.js",
  "Express",
  "Nest.js",
  "Git",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "CICD",
] as const;
