"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { MotionSection } from "./Motion/MotionSectionWrapper";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Get email from environment variable
  const contactEmail = process.env.CONTACT_EMAIL || 'muhammadhaziq341@gmail.com';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const senderEmail = formData.get("senderEmail") as string;
    const message = formData.get("message") as string;

    // Basic validation
    if (!senderEmail || !message) {
      toast.error("Please fill in all fields");
      setIsSubmitting(false);
      return;
    }

    try {
      // For now, we'll create a mailto link as a fallback
      // You can replace this with EmailJS, Formspree, or another service
      const subject = "Contact Form Message";
      const body = `From: ${senderEmail}\n\nMessage:\n${message}`;
      const mailtoLink = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      window.open(mailtoLink);
      toast.success("Email client opened! Please send the email.");
      
      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MotionSection
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleSubmit}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          disabled={isSubmitting}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          disabled={isSubmitting}
        />
        <SubmitBtn pending={isSubmitting} />
      </form>
    </MotionSection>
  );
}
