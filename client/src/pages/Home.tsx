/**
 * Home Page — Bold Conversion Machine Design
 * Seções: Hero → Stats → Serviços → Diferenciais → Sobre → Processo → Depoimentos → FAQ → CTA Final
 * Colors: Brand Azul Índigo (#1E3A5F) + CTA Laranja (#F97316)
 * Typography: Space Grotesk (headlines) + Inter (body)
 */

import { useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  ChevronDown,
  Star,
  TrendingUp,
  ClipboardList,
  Zap,
  BarChart2,
  Globe,
  BookOpen,
  Shield,
  Users,
  Clock,
  HeartHandshake,
  LineChart,
  Headphones,
  ChevronRight,
} from "lucide-react";
import {
  company,
  stats,
  services,
  differentials,
  process,
  testimonials,
  faqItems,
} from "@/lib/siteData";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionReveal from "@/components/SectionReveal";

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  ClipboardList,
  Zap,
  BarChart2,
  Globe,
  BookOpen,
  Shield,
  Users,
  Clock,
  HeartHandshake,
  LineChart,
  Headphones,
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663497204380/3fnZkNKtG63ijH8f9Nqm4Z/hero-business-Pzesjy6w8MdWz7CccwPaop.webp"
            alt="Equipe profissional"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(105deg, oklch(0.15 0.09 250 / 0.92) 0%, oklch(0.20 0.09 250 / 0.80) 50%, oklch(0.15 0.09 250 / 0.60) 100%)",
            }}
          />
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            {company.developer?.portfolio && (
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-3"
                style={{
                  backgroundColor: "oklch(0.28 0.09 250 / 0.2)",
                  border: "1px solid oklch(0.28 0.09 250 / 0.5)",
                  color: "oklch(0.75 0.03 250)",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "oklch(0.28 0.09 250)" }} />
                Portfólio de {company.developer.name} — Desenvolvedor Web
              </div>
            )}

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{
                backgroundColor: "oklch(0.68 0.19 45 / 0.15)",
                border: "1px solid oklch(0.68 0.19 45 / 0.4)",
                color: "oklch(0.85 0.12 45)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "oklch(0.68 0.19 45)" }} />
              Mais de 350 projetos entregues
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
            >
              {company.heroHeadline}
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg sm:text-xl mb-8 leading-relaxed"
              style={{ color: "oklch(0.85 0.03 250)" }}
            >
              {company.heroSubheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${company.whatsapp}?text=Olá! Gostaria de solicitar um orçamento.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
                style={{
                  backgroundColor: "oklch(0.68 0.19 45)",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {company.primaryCTA}
                <ArrowRight size={18} />
              </a>
              <Link
                href="/servicos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold transition-all duration-200 hover:bg-white/10"
                style={{
                  border: "2px solid rgba(255,255,255,0.4)",
                  color: "white",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {company.secondaryCTA}
                <ChevronRight size={18} />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4 mt-10">
              {["98% de satisfação", "10 anos de mercado", "Atendimento ágil"].map((badge) => (
                <div key={badge} className="flex items-center gap-1.5">
                  <Star size={14} fill="oklch(0.68 0.19 45)" style={{ color: "oklch(0.68 0.19 45)" }} />
                  <span className="text-sm font-medium" style={{ color: "oklch(0.85 0.03 250)" }}>
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown size={24} className="text-white/60" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          STATS / PROVA RÁPIDA
      ═══════════════════════════════════════════ */}
      <section className="py-12 border-b border-gray-100">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <SectionReveal key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <div
                    className="text-4xl lg:text-5xl font-extrabold mb-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.28 0.09 250)" }}
                  >
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVIÇOS PRINCIPAIS
      ═══════════════════════════════════════════ */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.965 0.005 250)" }}>
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-12">
              <span
                className="text-xs font-bold uppercase tracking-widest mb-3 block"
                style={{ color: "oklch(0.68 0.19 45)", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                O que fazemos
              </span>
              <h2
                className="text-3xl lg:text-4xl font-extrabold mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.18 0.02 250)" }}
              >
                Serviços que impulsionam seu negócio
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Soluções completas e personalizadas para cada etapa do crescimento da sua empresa.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Globe;
              return (
                <SectionReveal key={service.id} delay={i * 80}>
                  <div
                    className="bg-white rounded-xl p-6 h-full flex flex-col card-service"
                    style={{ borderLeft: "4px solid oklch(0.68 0.19 45)" }}
                  >
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: "oklch(0.28 0.09 250 / 0.08)" }}
                    >
                      <Icon size={22} style={{ color: "oklch(0.28 0.09 250)" }} />
                    </div>
                    <h3
                      className="text-lg font-bold mb-2"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.18 0.02 250)" }}
                    >
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">
                      {service.summary}
                    </p>
                    <Link
                      href={`/servicos#${service.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold transition-colors hover:opacity-80"
                      style={{ color: "oklch(0.28 0.09 250)", fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Saiba mais <ArrowRight size={14} />
                    </Link>
                  </div>
                </SectionReveal>
              );
            })}
          </div>

          <SectionReveal delay={200}>
            <div className="text-center mt-10">
              <Link
                href="/servicos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "oklch(0.28 0.09 250)", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Ver todos os serviços <ArrowRight size={16} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          DIFERENCIAIS
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-12">
              <span
                className="text-xs font-bold uppercase tracking-widest mb-3 block"
                style={{ color: "oklch(0.68 0.19 45)", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Por que nos escolher
              </span>
              <h2
                className="text-3xl lg:text-4xl font-extrabold mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.18 0.02 250)" }}
              >
                Nossos diferenciais
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                O que nos torna a escolha certa para empresas que buscam resultados reais.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map((diff, i) => {
              const Icon = iconMap[diff.icon] || Shield;
              return (
                <SectionReveal key={diff.title} delay={i * 80}>
                  <div className="flex gap-4 p-5 rounded-xl hover:bg-gray-50 transition-colors">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "oklch(0.28 0.09 250)" }}
                    >
                      <Icon size={22} className="text-white" />
                    </div>
                    <div>
                      <h3
                        className="font-bold mb-1.5"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.18 0.02 250)" }}
                      >
                        {diff.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{diff.description}</p>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SOBRE A EMPRESA
      ═══════════════════════════════════════════ */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.965 0.005 250)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SectionReveal>
              <div>
                <span
                  className="text-xs font-bold uppercase tracking-widest mb-3 block"
                  style={{ color: "oklch(0.68 0.19 45)", fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Quem somos
                </span>
                <h2
                  className="text-3xl lg:text-4xl font-extrabold mb-5"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.18 0.02 250)" }}
                >
                  Uma empresa comprometida com o seu crescimento
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {company.longDescription}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {company.values.map((value) => (
                    <div key={value} className="flex items-center gap-2">
                      <div
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: "oklch(0.68 0.19 45)" }}
                      />
                      <span className="text-sm font-medium text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/sobre"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: "oklch(0.28 0.09 250)", fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Conheça nossa história <ArrowRight size={16} />
                </Link>
              </div>
            </SectionReveal>

            <SectionReveal delay={150}>
              <div className="relative">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663497204380/3fnZkNKtG63ijH8f9Nqm4Z/about-team-4WNcEv9VKcjWFKSYoynUZJ.webp"
                  alt="Liderança da empresa"
                  className="w-full rounded-2xl shadow-xl object-cover"
                  style={{ maxHeight: "480px" }}
                  loading="lazy"
                />
                {/* Floating badge */}
                <div
                  className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg"
                  style={{ border: "1px solid oklch(0.90 0.01 250)" }}
                >
                  <div
                    className="text-2xl font-extrabold"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.28 0.09 250)" }}
                  >
                    10 anos
                  </div>
                  <div className="text-xs text-gray-500">de experiência</div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          COMO FUNCIONA
      ═══════════════════════════════════════════ */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.20 0.09 250)" }}>
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-12">
              <span
                className="text-xs font-bold uppercase tracking-widest mb-3 block"
                style={{ color: "oklch(0.68 0.19 45)", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Nosso processo
              </span>
              <h2
                className="text-3xl lg:text-4xl font-extrabold mb-4 text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Como trabalhamos
              </h2>
              <p style={{ color: "oklch(0.75 0.03 250)" }} className="max-w-xl mx-auto">
                Um processo claro e transparente do início ao fim.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <SectionReveal key={step.step} delay={i * 100}>
                <div className="relative">
                  {/* Connector line */}
                  {i < process.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-8 left-full w-full h-px z-0"
                      style={{ backgroundColor: "oklch(0.35 0.09 250)" }}
                    />
                  )}
                  <div
                    className="relative z-10 rounded-xl p-6"
                    style={{ backgroundColor: "oklch(0.28 0.09 250)" }}
                  >
                    <div
                      className="text-4xl font-extrabold mb-3"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.68 0.19 45)" }}
                    >
                      {step.step}
                    </div>
                    <h3
                      className="text-lg font-bold text-white mb-2"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "oklch(0.75 0.03 250)" }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          DEPOIMENTOS
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-12">
              <span
                className="text-xs font-bold uppercase tracking-widest mb-3 block"
                style={{ color: "oklch(0.68 0.19 45)", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                O que dizem nossos clientes
              </span>
              <h2
                className="text-3xl lg:text-4xl font-extrabold mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.18 0.02 250)" }}
              >
                Histórias de sucesso reais
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <SectionReveal key={t.id} delay={i * 100}>
                <div
                  className="rounded-xl p-6 h-full flex flex-col"
                  style={{ backgroundColor: "oklch(0.965 0.005 250)", border: "1px solid oklch(0.90 0.01 250)" }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} fill="oklch(0.68 0.19 45)" style={{ color: "oklch(0.68 0.19 45)" }} />
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5 italic">
                    "{t.testimonial}"
                  </p>
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
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

          <SectionReveal delay={200}>
            <div className="text-center mt-8">
              <Link
                href="/depoimentos"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: "oklch(0.28 0.09 250)", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Ver todos os depoimentos <ArrowRight size={14} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════ */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.965 0.005 250)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <SectionReveal>
              <div className="text-center mb-12">
                <span
                  className="text-xs font-bold uppercase tracking-widest mb-3 block"
                  style={{ color: "oklch(0.68 0.19 45)", fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Dúvidas frequentes
                </span>
                <h2
                  className="text-3xl lg:text-4xl font-extrabold mb-4"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.18 0.02 250)" }}
                >
                  Perguntas frequentes
                </h2>
                <p className="text-gray-500">
                  Respondemos as principais dúvidas antes do seu primeiro contato.
                </p>
              </div>
            </SectionReveal>

            <div className="space-y-3">
              {faqItems.slice(0, 5).map((faq, i) => (
                <SectionReveal key={faq.id} delay={i * 60}>
                  <div
                    className="bg-white rounded-xl overflow-hidden"
                    style={{ border: "1px solid oklch(0.90 0.01 250)" }}
                  >
                    <button
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                      onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    >
                      <span
                        className="font-semibold text-sm pr-4"
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
                      <div className="px-5 pb-5">
                        <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                </SectionReveal>
              ))}
            </div>

            <SectionReveal delay={200}>
              <div className="text-center mt-6">
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                  style={{ color: "oklch(0.28 0.09 250)", fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Ver todas as perguntas <ArrowRight size={14} />
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA FINAL
      ═══════════════════════════════════════════ */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: "oklch(0.20 0.09 250)" }}
      >
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <SectionReveal>
              <h2
                className="text-3xl lg:text-4xl font-extrabold text-white mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Pronto para transformar seu negócio?
              </h2>
              <p className="mb-8" style={{ color: "oklch(0.75 0.03 250)" }}>
                Fale com nossa equipe hoje mesmo e descubra como podemos ajudar sua empresa a crescer com consistência e resultados reais.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/${company.whatsapp}?text=Olá! Gostaria de solicitar um orçamento.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
                  style={{
                    backgroundColor: "oklch(0.68 0.19 45)",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  Solicitar Orçamento <ArrowRight size={18} />
                </a>
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold transition-all hover:bg-white/10"
                  style={{
                    border: "2px solid rgba(255,255,255,0.3)",
                    color: "white",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  Falar com especialista
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
