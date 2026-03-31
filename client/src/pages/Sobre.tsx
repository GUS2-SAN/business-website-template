/**
 * Sobre Page — Bold Conversion Machine Design
 * História → Missão/Valores → Equipe → Diferenciais → CTA
 */

import { Link } from "wouter";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";
import { company, differentials, teamMembers } from "@/lib/siteData";
import SectionReveal from "@/components/SectionReveal";
import { Shield, Users, Clock, HeartHandshake, LineChart, Headphones } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Shield, Users, Clock, HeartHandshake, LineChart, Headphones,
};

export default function Sobre() {
  return (
    <div className="min-h-screen pt-20">
      {/* Page Hero */}
      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: "oklch(0.20 0.09 250)" }}
      >
        <div className="container">
          <SectionReveal>
            <div className="max-w-2xl">
              <span
                className="text-xs font-bold uppercase tracking-widest mb-3 block"
                style={{ color: "oklch(0.68 0.19 45)", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Sobre nós
              </span>
              <h1
                className="text-4xl lg:text-5xl font-extrabold text-white mb-5"
                style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
              >
                Conheça a {company.name}
              </h1>
              <p className="text-lg" style={{ color: "oklch(0.75 0.03 250)" }}>
                {company.shortDescription}
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* História */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SectionReveal>
              <div>
                <span
                  className="text-xs font-bold uppercase tracking-widest mb-3 block"
                  style={{ color: "oklch(0.68 0.19 45)", fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Nossa história
                </span>
                <h2
                  className="text-3xl font-extrabold mb-5"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.18 0.02 250)" }}
                >
                  Uma trajetória construída com propósito
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {company.longDescription}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Hoje, com uma equipe multidisciplinar e metodologias comprovadas, continuamos crescendo e ajudando empresas de diferentes segmentos a alcançar seus objetivos com mais eficiência e confiança.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={150}>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663497204380/3fnZkNKtG63ijH8f9Nqm4Z/hero-business-Pzesjy6w8MdWz7CccwPaop.webp"
                alt="Equipe Nexus"
                className="w-full rounded-2xl shadow-xl object-cover"
                style={{ maxHeight: "400px" }}
                loading="lazy"
              />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.965 0.005 250)" }}>
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-12">
              <h2
                className="text-3xl font-extrabold mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.18 0.02 250)" }}
              >
                Missão, Visão e Valores
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Missão",
                text: company.mission,
                color: "oklch(0.68 0.19 45)",
              },
              {
                icon: Eye,
                title: "Visão",
                text: company.vision,
                color: "oklch(0.28 0.09 250)",
              },
              {
                icon: Heart,
                title: "Valores",
                text: company.values.join(" · "),
                color: "oklch(0.50 0.15 200)",
              },
            ].map((item, i) => (
              <SectionReveal key={item.title} delay={i * 100}>
                <div className="bg-white rounded-xl p-7 h-full" style={{ border: "1px solid oklch(0.90 0.01 250)" }}>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon size={24} style={{ color: item.color }} />
                  </div>
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.18 0.02 250)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-12">
              <span
                className="text-xs font-bold uppercase tracking-widest mb-3 block"
                style={{ color: "oklch(0.68 0.19 45)", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Quem faz acontecer
              </span>
              <h2
                className="text-3xl font-extrabold mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.18 0.02 250)" }}
              >
                Nossa equipe
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <SectionReveal key={member.id} delay={i * 80}>
                <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-4"
                    style={{ backgroundColor: "oklch(0.28 0.09 250)", fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {member.avatar}
                  </div>
                  <h3
                    className="font-bold mb-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.18 0.02 250)" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold mb-2" style={{ color: "oklch(0.68 0.19 45)" }}>
                    {member.role}
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed">{member.bio}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.965 0.005 250)" }}>
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-12">
              <h2
                className="text-3xl font-extrabold mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.18 0.02 250)" }}
              >
                Por que escolher a {company.name}
              </h2>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {differentials.map((diff, i) => {
              const Icon = iconMap[diff.icon] || Shield;
              return (
                <SectionReveal key={diff.title} delay={i * 80}>
                  <div className="bg-white rounded-xl p-5 flex gap-4" style={{ border: "1px solid oklch(0.90 0.01 250)" }}>
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "oklch(0.28 0.09 250)" }}
                    >
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <h3
                        className="font-bold text-sm mb-1"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.18 0.02 250)" }}
                      >
                        {diff.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed">{diff.description}</p>
                    </div>
                  </div>
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
              Vamos trabalhar juntos?
            </h2>
            <p className="mb-8" style={{ color: "oklch(0.75 0.03 250)" }}>
              Entre em contato e descubra como podemos ajudar seu negócio.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "oklch(0.68 0.19 45)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Falar com nossa equipe <ArrowRight size={18} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
