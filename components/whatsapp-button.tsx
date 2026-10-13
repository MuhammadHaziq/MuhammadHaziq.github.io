import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER, whatsappLink } from "@/lib/seo";

// Floating WhatsApp chat button, bottom-right on every page (the theme switch
// moves above it). Renders nothing until WHATSAPP_NUMBER is set in lib/seo.ts.
export default function WhatsAppButton() {
  if (!WHATSAPP_NUMBER) return null;

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Muhammad Haziq on WhatsApp"
      className="fixed bottom-5 right-5 z-[998] flex items-center gap-2 bg-[#25D366] text-white h-[3rem] px-4 rounded-full shadow-2xl hover:scale-[1.08] active:scale-105 transition-all"
    >
      <FaWhatsapp className="text-2xl" />
      <span className="hidden sm:inline text-sm font-semibold">Chat on WhatsApp</span>
    </a>
  );
}
