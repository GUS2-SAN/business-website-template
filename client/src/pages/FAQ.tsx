/**
 * FAQ Page — Bold Conversion Machine Design
 * Accordion de perguntas frequentes com CTA
 */

import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronDown } from "lucide-react";
import { company, faqItems } from "@/lib/siteData";
import SectionReveal from "@/components/SectionReveal";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-20">
      {/* Page Hero */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "oklch(0.20 0.09 250)" }}>
        <div className="container">
          <SectionReveal>
            <div className="max-w-2xl">
              <span
                className="text-xs font-bold uppercase tracking-widest mb-3 block"
                style={{ color: "oklch(0.68 0.19 45)", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Dúvidas frequentes
              </span>
              <h1
                className="text-4xl lg:text-5xl font-extrabold text-white mb-5"
                style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
              >
                Perguntas Frequentes
              </h1>
              <p className="text-lg" style={{ color: "oklch(0.75 0.03 250)" }}>
                Respondemos as principais dúvidas para facilitar sua decisão de contratar.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-3">
              {faqItems.map((faq, i) => (
                <SectionReveal key={faq.id} delay={i * 60}>
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{ border: "1px solid oklch(0.90 0.01 250)" }}
                  >
                    <button
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                      onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    >
                      <span
                        className="font-semibold pr-4"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.18 0.02 250)" }}
                      >
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className="shrink-0 transition-transform duration-200"
                        style={{
                          color: "oklch(0.28 0.09 250)",
                          transform: openFaq === faq.id ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      />
                    </button>
                    {openFaq === faq.id && (
                      <div
                        className="px-5 pb-5"
                        style={{ borderTop: "1px solid oklch(0.90 0.01 250)" }}
                      >
                        <p className="text-sm text-gray-600 leading-relaxed pt-4">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                </SectionReveal>
              ))}
            </div>

            {/* Still have questions */}
            <SectionReveal delay={200}>
              <div
                className="mt-12 rounded-2xl p-8 text-center"
                style={{ backgroundColor: "oklch(0.965 0.005 250)", border: "1px solid oklch(0.90 0.01 250)" }}
              >
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.18 0.02 250)" }}
                >
                  Ainda tem dúvidas?
                </h3>
                <p className="text-gray-500 text-sm mb-5">
                  Nossa equipe está pronta para responder qualquer pergunta específica sobre seu projeto.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`https://wa.me/${company.whatsapp}?text=Olá! Tenho uma dúvida sobre os serviços.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white transition-all hover:opacity-90"
                    style={{ backgroundColor: "#25D366", fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Perguntar pelo WhatsApp <ArrowRight size={16} />
                  </a>
                  <Link
                    href="/contato"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-all hover:bg-gray-100"
                    style={{
                      border: "1px solid oklch(0.90 0.01 250)",
                      color: "oklch(0.28 0.09 250)",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    Enviar mensagem
                  </Link>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
