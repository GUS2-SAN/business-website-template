/**
 * Serviços Page — Bold Conversion Machine Design
 * Lista de serviços com benefícios, processo e CTA por serviço
 */

import { Link } from "wouter";
import { ArrowRight, CheckCircle2, TrendingUp, ClipboardList, Zap, BarChart2, Globe, BookOpen } from "lucide-react";
import { company, services, process } from "@/lib/siteData";
import SectionReveal from "@/components/SectionReveal";

const iconMap: Record<string, React.ElementType> = {
  TrendingUp, ClipboardList, Zap, BarChart2, Globe, BookOpen,
};

export default function Servicos() {
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
                O que oferecemos
              </span>
              <h1
                className="text-4xl lg:text-5xl font-extrabold text-white mb-5"
                style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
              >
                Nossos Serviços
              </h1>
              <p className="text-lg" style={{ color: "oklch(0.75 0.03 250)" }}>
                Soluções completas e personalizadas para cada etapa do crescimento da sua empresa.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Globe;
              const isEven = i % 2 === 0;
              return (
                <SectionReveal key={service.id} delay={100}>
                  <div
                    id={service.slug}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}
                  >
                    {/* Content */}
                    <div className={isEven ? "" : "lg:order-2"}>
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                        style={{ backgroundColor: "oklch(0.28 0.09 250)" }}
                      >
                        <Icon size={28} className="text-white" />
                      </div>
                      <h2
                        className="text-2xl lg:text-3xl font-extrabold mb-3"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.18 0.02 250)" }}
                      >
                        {service.name}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-5">{service.description}</p>

                      {/* Ideal for */}
                      <div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
                        style={{
                          backgroundColor: "oklch(0.28 0.09 250 / 0.08)",
                          color: "oklch(0.28 0.09 250)",
                          fontFamily: "'Space Grotesk', sans-serif",
                        }}
                      >
                        Ideal para: {service.idealFor}
                      </div>

                      <a
                        href={`https://wa.me/${company.whatsapp}?text=Olá! Tenho interesse no serviço de ${service.name}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white transition-all hover:opacity-90"
                        style={{ backgroundColor: "oklch(0.68 0.19 45)", fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {service.cta} <ArrowRight size={16} />
                      </a>
                    </div>

                    {/* Benefits */}
                    <div className={isEven ? "" : "lg:order-1"}>
                      <div
                        className="rounded-2xl p-7"
                        style={{ backgroundColor: "oklch(0.965 0.005 250)", border: "1px solid oklch(0.90 0.01 250)" }}
                      >
                        <h3
                          className="font-bold mb-4 text-sm uppercase tracking-wider"
                          style={{ color: "oklch(0.68 0.19 45)", fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          O que está incluído
                        </h3>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-3">
                              <CheckCircle2
                                size={18}
                                className="mt-0.5 shrink-0"
                                style={{ color: "oklch(0.28 0.09 250)" }}
                              />
                              <span className="text-sm text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {i < services.length - 1 && (
                    <hr className="mt-16 border-gray-100" />
                  )}
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.20 0.09 250)" }}>
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-12">
              <h2
                className="text-3xl font-extrabold text-white mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Como trabalhamos
              </h2>
              <p style={{ color: "oklch(0.75 0.03 250)" }}>
                Um processo claro e transparente do início ao fim.
              </p>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <SectionReveal key={step.step} delay={i * 100}>
                <div className="rounded-xl p-6" style={{ backgroundColor: "oklch(0.28 0.09 250)" }}>
                  <div
                    className="text-4xl font-extrabold mb-3"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.68 0.19 45)" }}
                  >
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "oklch(0.75 0.03 250)" }}>
                    {step.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container text-center">
          <SectionReveal>
            <h2
              className="text-3xl font-extrabold mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.18 0.02 250)" }}
            >
              Não encontrou o que procura?
            </h2>
            <p className="text-gray-500 mb-8">
              Entre em contato e vamos entender como podemos ajudar seu negócio.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "oklch(0.28 0.09 250)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Falar com especialista <ArrowRight size={18} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
