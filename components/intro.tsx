"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { BsCalendar2Check } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import profileImg from "@/public/profile_image.jpeg";
import { MotionDiv } from "./Motion/MotionWrapper";
import { MotionSpan } from "./Motion/MotionSpanWrapper";
import { MotionH1 } from "./Motion/MotionH1Wrapper";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[70rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <MotionDiv
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profileImg}
              alt="Muhammad Haziq - Senior Node.js Developer and Fintech Specialist"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </MotionDiv>

          <MotionSpan
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </MotionSpan>
        </div>
      </div>

      <MotionH1
        className="mb-6 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi, I'm Muhammad Haziq.</span> A{" "}
        <span className="font-bold">Senior Software Engineer</span> with{" "}
        <span className="font-bold">7+ years</span> building scalable{" "}
        <span className="font-bold">fintech applications</span> and{" "}
        <span className="font-bold">payment integrations</span>. My stack:{" "}
        <span className="underline">Node.js, NestJS, TypeScript, React</span>.
      </MotionH1>

      <MotionDiv
        className="mb-8 px-4 max-w-[50rem] mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
      >
        <div className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 px-5 py-3 bg-white/60 dark:bg-white/10 rounded-2xl border border-black/5 dark:border-white/10 shadow-sm">
          <span className="flex items-center gap-2 text-sm sm:text-base font-medium">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            Available for Remote Contract
          </span>
          <span className="text-gray-400">|</span>
          <span className="text-sm sm:text-base">🇬🇧 UK</span>
          <span className="text-sm sm:text-base">🇪🇺 EU</span>
          <span className="text-sm sm:text-base">🇺🇸 US</span>
          <span className="text-sm sm:text-base">🇨🇦 Canada</span>
          <span className="text-sm sm:text-base">🇦🇪 UAE</span>
        </div>
      </MotionDiv>

      <MotionDiv
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="/contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Book a Call{" "}
          <BsCalendar2Check className="opacity-70 group-hover:scale-110 transition" />
        </Link>

        <Link
          href="#projects"
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          onClick={() => {
            setActiveSection("Projects");
            setTimeOfLastClick(Date.now());
          }}
        >
          View My Work{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/Muhammad-Haziq-Senior-Software-Engnieer.pdf"
          download
          aria-label="Download Muhammad Haziq CV"
        >
          CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/muhammad-haziq/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Muhammad Haziq LinkedIn profile"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/MuhammadHaziq"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Muhammad Haziq GitHub profile"
        >
          <FaGithubSquare />
        </a>
      </MotionDiv>

      <MotionDiv
        className="mt-6 px-4 text-sm sm:text-base text-gray-600 dark:text-white/60 max-w-[50rem] mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <p>
          🟢 <span className="font-semibold">Currently accepting:</span>{" "}
          Contract Node.js engagements · Part-time Senior Backend roles ·
          Payment gateway integrations · Technical consulting · 20–25 hrs/week
        </p>
      </MotionDiv>
    </section>
  );
}