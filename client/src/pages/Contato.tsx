/**
 * Contato Page — Bold Conversion Machine Design
 * Formulário de contato + informações + WhatsApp
 */

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle2, Send } from "lucide-react";
import { company } from "@/lib/siteData";
import SectionReveal from "@/components/SectionReveal";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function Contato() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Nome é obrigatório";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "E-mail inválido";
    if (!form.phone.trim()) newErrors.phone = "Telefone é obrigatório";
    if (!form.message.trim()) newErrors.message = "Mensagem é obrigatória";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

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
                Fale conosco
              </span>
              <h1
                className="text-4xl lg:text-5xl font-extrabold text-white mb-5"
                style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
              >
                Entre em Contato
              </h1>
              <p className="text-lg" style={{ color: "oklch(0.75 0.03 250)" }}>
                Responderemos em até 24 horas úteis. Ou fale agora pelo WhatsApp!
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <SectionReveal>
              <div>
                <h2
                  className="text-2xl font-extrabold mb-6"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.18 0.02 250)" }}
                >
                  Informações de contato
                </h2>

                <div className="space-y-5 mb-8">
                  {[
                    { icon: Phone, label: "Telefone", value: company.phone, href: `tel:${company.phone}` },
                    { icon: Mail, label: "E-mail", value: company.email, href: `mailto:${company.email}` },
                    { icon: MapPin, label: "Endereço", value: company.address, href: null },
                    { icon: Clock, label: "Horário", value: company.workingHours, href: null },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "oklch(0.28 0.09 250 / 0.08)" }}
                      >
                        <item.icon size={18} style={{ color: "oklch(0.28 0.09 250)" }} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-400 mb-0.5">{item.label}</div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-medium hover:opacity-80 transition-opacity"
                            style={{ color: "oklch(0.18 0.02 250)" }}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-sm text-gray-700">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <a
                  href={`https://wa.me/${company.whatsapp}?text=Olá! Gostaria de falar com um especialista.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <MessageCircle size={22} />
                  <div>
                    <div className="font-semibold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      Falar pelo WhatsApp
                    </div>
                    <div className="text-xs opacity-80">Resposta imediata</div>
                  </div>
                </a>
              </div>
            </SectionReveal>

            {/* Form */}
            <SectionReveal delay={150} className="lg:col-span-2">
              {submitted ? (
                <div
                  className="rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center"
                  style={{ backgroundColor: "oklch(0.965 0.005 250)", border: "1px solid oklch(0.90 0.01 250)" }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: "oklch(0.28 0.09 250 / 0.1)" }}
                  >
                    <CheckCircle2 size={32} style={{ color: "oklch(0.28 0.09 250)" }} />
                  </div>
                  <h3
                    className="text-2xl font-extrabold mb-3"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.18 0.02 250)" }}
                  >
                    Mensagem enviada!
                  </h3>
                  <p className="text-gray-500 text-sm max-w-sm">
                    Recebemos sua mensagem e entraremos em contato em até 24 horas úteis. Obrigado!
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl p-8"
                  style={{ backgroundColor: "oklch(0.965 0.005 250)", border: "1px solid oklch(0.90 0.01 250)" }}
                  noValidate
                >
                  <h2
                    className="text-xl font-extrabold mb-6"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.18 0.02 250)" }}
                  >
                    Envie uma mensagem
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5" htmlFor="name">
                        Nome completo *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white outline-none transition-all"
                        style={{
                          border: errors.name ? "1px solid oklch(0.577 0.245 27)" : "1px solid oklch(0.90 0.01 250)",
                          color: "oklch(0.18 0.02 250)",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "oklch(0.28 0.09 250)")}
                        onBlur={(e) => (e.target.style.borderColor = errors.name ? "oklch(0.577 0.245 27)" : "oklch(0.90 0.01 250)")}
                      />
                      {errors.name && <p className="text-xs mt-1" style={{ color: "oklch(0.577 0.245 27)" }}>{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5" htmlFor="email">
                        E-mail *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white outline-none transition-all"
                        style={{
                          border: errors.email ? "1px solid oklch(0.577 0.245 27)" : "1px solid oklch(0.90 0.01 250)",
                          color: "oklch(0.18 0.02 250)",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "oklch(0.28 0.09 250)")}
                        onBlur={(e) => (e.target.style.borderColor = errors.email ? "oklch(0.577 0.245 27)" : "oklch(0.90 0.01 250)")}
                      />
                      {errors.email && <p className="text-xs mt-1" style={{ color: "oklch(0.577 0.245 27)" }}>{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5" htmlFor="phone">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(11) 9 9999-9999"
                        className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white outline-none transition-all"
                        style={{
                          border: errors.phone ? "1px solid oklch(0.577 0.245 27)" : "1px solid oklch(0.90 0.01 250)",
                          color: "oklch(0.18 0.02 250)",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "oklch(0.28 0.09 250)")}
                        onBlur={(e) => (e.target.style.borderColor = errors.phone ? "oklch(0.577 0.245 27)" : "oklch(0.90 0.01 250)")}
                      />
                      {errors.phone && <p className="text-xs mt-1" style={{ color: "oklch(0.577 0.245 27)" }}>{errors.phone}</p>}
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5" htmlFor="service">
                        Serviço de interesse
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white outline-none transition-all"
                        style={{
                          border: "1px solid oklch(0.90 0.01 250)",
                          color: form.service ? "oklch(0.18 0.02 250)" : "oklch(0.60 0.02 250)",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "oklch(0.28 0.09 250)")}
                        onBlur={(e) => (e.target.style.borderColor = "oklch(0.90 0.01 250)")}
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="consultoria">Consultoria Estratégica</option>
                        <option value="projetos">Gestão de Projetos</option>
                        <option value="digital">Transformação Digital</option>
                        <option value="marketing">Marketing Digital</option>
                        <option value="web">Desenvolvimento Web</option>
                        <option value="treinamento">Treinamento</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-5">
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5" htmlFor="message">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Conte um pouco sobre seu projeto ou dúvida..."
                      rows={4}
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white outline-none transition-all resize-none"
                      style={{
                        border: errors.message ? "1px solid oklch(0.577 0.245 27)" : "1px solid oklch(0.90 0.01 250)",
                        color: "oklch(0.18 0.02 250)",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "oklch(0.28 0.09 250)")}
                      onBlur={(e) => (e.target.style.borderColor = errors.message ? "oklch(0.577 0.245 27)" : "oklch(0.90 0.01 250)")}
                    />
                    {errors.message && <p className="text-xs mt-1" style={{ color: "oklch(0.577 0.245 27)" }}>{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90 disabled:opacity-60"
                    style={{ backgroundColor: "oklch(0.68 0.19 45)", fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensagem <Send size={16} />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center mt-3">
                    Seus dados estão seguros. Não compartilhamos informações com terceiros.
                  </p>
                </form>
              )}
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
