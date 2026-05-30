"use client";

import React from "react";
import { MotionDiv } from "./Motion/MotionWrapper";

const trustItems = [
  { label: "InsuranceMarket.ae", note: "UAE #1 Insurance Platform" },
  { label: "FinanceThat", note: "CA & US Fintech" },
  { label: "Stripe", note: "Payment Integration" },
  { label: "Apple Pay", note: "Payment Integration" },
  { label: "Checkout.com", note: "Payment Gateway" },
  { label: "AWS", note: "Cloud Infrastructure" },
];

export default function TrustBar() {
  return (
    <MotionDiv
      className="w-full max-w-[70rem] mb-16 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <p className="text-center text-xs font-semibold tracking-widest uppercase text-gray-400 dark:text-white/30 mb-5">
        Trusted by teams using
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {trustItems.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center px-5 py-2.5 bg-white dark:bg-white/5 border border-black/[0.07] dark:border-white/10 rounded-xl shadow-sm"
          >
            <span className="text-sm font-semibold text-gray-800 dark:text-white/80">
              {item.label}
            </span>
            <span className="text-[10px] text-gray-400 dark:text-white/30 mt-0.5">
              {item.note}
            </span>
          </div>
        ))}
      </div>
    </MotionDiv>
  );
}
