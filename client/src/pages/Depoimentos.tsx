/**
 * Depoimentos Page — Bold Conversion Machine Design
 * Grid de depoimentos com avaliações e CTA
 */

import { Link } from "wouter";
import { ArrowRight, Star, Quote } from "lucide-react";
import { company, testimonials } from "@/lib/siteData";
import SectionReveal from "@/components/SectionReveal";

export default function Depoimentos() {
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
                Validação social
              </span>
              <h1
                className="text-4xl lg:text-5xl font-extrabold text-white mb-5"
                style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
              >
                O que nossos clientes dizem
              </h1>
              <p className="text-lg" style={{ color: "oklch(0.75 0.03 250)" }}>
                Histórias reais de empresas que transformaram seus resultados com a {company.name}.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-10">
            {[
              { value: "98%", label: "Clientes satisfeitos" },
              { value: "5/5", label: "Avaliação média" },
              { value: "120+", label: "Empresas atendidas" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-3xl font-extrabold mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.28 0.09 250)" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.965 0.005 250)" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <SectionReveal key={t.id} delay={i * 80}>
                <div
                  className="bg-white rounded-xl p-7 h-full flex flex-col relative"
                  style={{ border: "1px solid oklch(0.90 0.01 250)" }}
                >
                  {/* Quote icon */}
                  <Quote
                    size={32}
                    className="absolute top-5 right-5 opacity-10"
                    style={{ color: "oklch(0.28 0.09 250)" }}
                  />

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} fill="oklch(0.68 0.19 45)" style={{ color: "oklch(0.68 0.19 45)" }} />
                    ))}
                  </div>

                  {/* Testimonial */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6 italic">
                    "{t.testimonial}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid oklch(0.90 0.01 250)" }}>
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                      style={{ backgroundColor: "oklch(0.28 0.09 250)", fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <div
                        className="font-semibold text-sm"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.18 0.02 250)" }}
                      >
                        {t.name}
                      </div>
                      <div className="text-xs text-gray-400">
                        {t.role} · {t.company}
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.20 0.09 250)" }}>
        <div className="container text-center">
          <SectionReveal>
            <h2
              className="text-3xl font-extrabold text-white mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Faça parte das nossas histórias de sucesso
            </h2>
            <p className="mb-8" style={{ color: "oklch(0.75 0.03 250)" }}>
              Entre em contato e dê o primeiro passo para transformar seu negócio.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "oklch(0.68 0.19 45)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Solicitar Orçamento <ArrowRight size={18} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
