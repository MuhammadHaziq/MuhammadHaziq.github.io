"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import SubmitBtn from "./submit-btn";

const CONTACT_EMAIL =
  process.env.CONTACT_EMAIL || "muhammadhaziq341@gmail.com";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const senderEmail = formData.get("senderEmail") as string;
    const message = formData.get("message") as string;

    if (!senderEmail || !message) {
      toast.error("Please fill in all fields");
      setIsSubmitting(false);
      return;
    }

    try {
      const subject = "Contract Inquiry — Muhammad Haziq Portfolio";
      const body = `From: ${senderEmail}\n\nMessage:\n${message}`;
      const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink);
      toast.success("Email client opened! Please send the email.");
      (e.target as HTMLFormElement).reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="flex flex-col gap-3 dark:text-black"
      onSubmit={handleSubmit}
    >
      <input
        className="h-14 px-4 rounded-xl borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none text-sm"
        name="senderEmail"
        type="email"
        required
        maxLength={500}
        placeholder="Your email"
        disabled={isSubmitting}
      />
      <textarea
        className="h-52 rounded-xl borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none text-sm"
        name="message"
        placeholder="Tell me about your project — stack, timeline, and what you need built."
        required
        maxLength={5000}
        disabled={isSubmitting}
      />
      <SubmitBtn pending={isSubmitting} />

      <p className="text-center text-xs text-gray-400 dark:text-white/30 mt-1">
        Or email directly:{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="underline hover:text-gray-600 dark:hover:text-white/60 transition"
        >
          {CONTACT_EMAIL}
        </a>
      </p>
    </form>
  );
}
