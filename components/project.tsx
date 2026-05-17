"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import { useScroll, useTransform } from "framer-motion";
import { MotionDiv } from "./Motion/MotionWrapper";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  subtitle,
  role,
  period,
  link,
  domain,
  location,
  description,
  tags,
  metrics,
  theme,
  icon: Icon,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLElement>,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <MotionDiv
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-6 sm:mb-8 last:mb-0 w-full max-w-[55rem]"
    >
      <article
        className="bg-white border border-black/5 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-black/10 dark:bg-white/10 dark:border-white/10 dark:hover:bg-white/[0.13] dark:hover:border-white/20"
      >
        {/* Visual Header */}
        <div
          className={`relative h-[160px] sm:h-[200px] flex items-center justify-between px-6 sm:px-10 overflow-hidden bg-gradient-to-br ${theme.gradient}`}
        >
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-2.5 py-1 rounded-md mb-3 dark:bg-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span>
              <span
                className={`text-[10px] sm:text-[11px] font-semibold tracking-wider ${theme.statusText}`}
              >
                LIVE · {location.toUpperCase()}
              </span>
            </div>
            <div
              className={`text-2xl sm:text-[2.75rem] font-semibold tracking-tight leading-tight ${theme.titleColor}`}
            >
              {title}
            </div>
            <div
              className={`text-xs sm:text-sm mt-1 ${theme.domainColor}`}
            >
              {domain}
            </div>
          </div>

          {/* Decorative Icon */}
          <div
            className={`text-[60px] sm:text-[110px] ${theme.iconColor}`}
            style={{ opacity: 0.18 }}
            aria-hidden="true"
          >
            <Icon />
          </div>
        </div>

        {/* Content */}
        <div className="px-5 sm:px-10 py-5 sm:py-7">
          <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 dark:text-white">
                {subtitle}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-white/60">
                {role} · {period}
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed mb-5 dark:text-white/70">
            {description}
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gray-50 px-3 py-2.5 rounded-lg dark:bg-white/5"
              >
                <div className="text-[9px] sm:text-[10px] font-semibold tracking-wider text-gray-500 mb-1 uppercase dark:text-white/50">
                  {metric.label}
                </div>
                <div className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`text-[10px] sm:text-[11px] px-2.5 py-1 rounded-md font-medium ${getTagStyle(
                  tag
                )}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-900 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all dark:text-white dark:border-white/20 dark:hover:bg-white dark:hover:text-gray-900"
          >
            Visit Live Site <FiExternalLink className="text-sm" />
          </Link>
        </div>
      </article>
    </MotionDiv>
  );
}

// Tag color mapping by tech category
function getTagStyle(tag: string): string {
  const tagMap: Record<string, string> = {
    // Backend - Purple
    "Node.js": "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200",
    NestJS: "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200",
    Express: "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200",
    // Languages/Frontend - Blue
    TypeScript: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200",
    React: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200",
    Redux: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200",
    // SQL Databases - Amber
    MySQL: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200",
    Sequelize: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200",
    PostgreSQL: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200",
    Python: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200",
    Django: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200",
    // NoSQL - Teal
    MongoDB: "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-200",
    Mongoose: "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-200",
    "Cursor AI": "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-200",
    // Payments/Critical - Coral/Red
    "Apple Pay": "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-200",
    "Checkout.com": "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-200",
    TAP: "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-200",
    Stripe: "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-200",
    Flinks: "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-200",
    Oracle: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200",
    // Default - Gray
  };

  return (
    tagMap[tag] ||
    "bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white/70"
  );
}