"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { WHATSAPP_NUMBER } from "@/lib/seo";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      // Sits above the WhatsApp button when that is shown (both bottom-right)
      className={`fixed ${WHATSAPP_NUMBER ? "bottom-[5.25rem]" : "bottom-5"} right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950`}
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
