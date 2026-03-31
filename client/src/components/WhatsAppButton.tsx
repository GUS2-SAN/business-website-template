/**
 * WhatsApp Floating Button — Bold Conversion Machine Design
 * Botão flutuante com pulse ring animation
 */

import { MessageCircle } from "lucide-react";
import { company } from "@/lib/siteData";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${company.whatsapp}?text=Olá! Vim pelo site e gostaria de mais informações.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full text-white shadow-lg transition-transform hover:scale-110"
      style={{ backgroundColor: "#25D366" }}
      aria-label="Fale pelo WhatsApp"
    >
      {/* Pulse rings */}
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-30"
        style={{ backgroundColor: "#25D366" }}
      />
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-20"
        style={{ backgroundColor: "#25D366", animationDelay: "0.5s" }}
      />
      <MessageCircle size={26} fill="white" strokeWidth={0} />
    </a>
  );
}
