/**
 * Cases Page — Bold Conversion Machine Design
 * Portfólio de cases com resultados e provas sociais
 */

import { Link } from "wouter";
import { ArrowRight, Tag } from "lucide-react";
import { company, cases } from "@/lib/siteData";
import SectionReveal from "@/components/SectionReveal";

export default function Cases() {
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
                Resultados reais
              </span>
              <h1
                className="text-4xl lg:text-5xl font-extrabold text-white mb-5"
                style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
              >
                Cases de Sucesso
              </h1>
              <p className="text-lg" style={{ color: "oklch(0.75 0.03 250)" }}>
                Conheça projetos que transformaram negócios e geraram resultados concretos para nossos clientes.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="space-y-16">
            {cases.map((c, i) => {
              const isEven = i % 2 === 0;
              return (
                <SectionReveal key={c.id} delay={100}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}>
                    {/* Image */}
                    <div className={isEven ? "" : "lg:order-2"}>
                      <div className="relative rounded-2xl overflow-hidden shadow-xl">
                        <img
                          src={c.image}
                          alt={c.title}
                          className="w-full object-cover"
                          style={{ height: "320px" }}
                          loading="lazy"
                        />
                        {/* Tags overlay */}
                        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                          {c.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-full text-xs font-semibold text-white"
                              style={{ backgroundColor: "oklch(0.28 0.09 250 / 0.85)" }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={isEven ? "" : "lg:order-1"}>
                      <div
                        className="text-xs font-bold uppercase tracking-wider mb-2"
                        style={{ color: "oklch(0.68 0.19 45)", fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {c.client}
                      </div>
                      <h2
                        className="text-2xl lg:text-3xl font-extrabold mb-5"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.18 0.02 250)" }}
                      >
                        {c.title}
                      </h2>

                      <div className="space-y-4 mb-6">
                        {[
                          { label: "Desafio", text: c.challenge },
                          { label: "Solução", text: c.solution },
                          { label: "Resultado", text: c.result, highlight: true },
                        ].map((item) => (
                          <div key={item.label}>
                            <span
                              className="text-xs font-bold uppercase tracking-wider block mb-1"
                              style={{
                                color: item.highlight ? "oklch(0.68 0.19 45)" : "oklch(0.50 0.02 250)",
                                fontFamily: "'Space Grotesk', sans-serif",
                              }}
                            >
                              {item.label}
                            </span>
                            <p
                              className={`text-sm leading-relaxed ${item.highlight ? "font-semibold" : "text-gray-600"}`}
                              style={item.highlight ? { color: "oklch(0.18 0.02 250)" } : {}}
                            >
                              {item.text}
                            </p>
                          </div>
                        ))}
                      </div>

                      <a
                        href={`https://wa.me/${company.whatsapp}?text=Olá! Vi o case da ${c.client} e gostaria de saber mais.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                        style={{ color: "oklch(0.28 0.09 250)", fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        Quero resultados assim <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>

                  {i < cases.length - 1 && <hr className="mt-16 border-gray-100" />}
                </SectionReveal>
              );
            })}
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
              Seu negócio pode ser o próximo case de sucesso
            </h2>
            <p className="mb-8" style={{ color: "oklch(0.75 0.03 250)" }}>
              Entre em contato e vamos construir resultados juntos.
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
