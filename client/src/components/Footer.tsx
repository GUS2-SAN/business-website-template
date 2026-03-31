/**
 * Footer — Bold Conversion Machine Design
 * Fundo azul escuro, links organizados, CTA final, redes sociais
 */

import { Link } from "wouter";
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook, MessageCircle } from "lucide-react";
import { company } from "@/lib/siteData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "oklch(0.15 0.08 250)" }} className="text-white">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: "oklch(0.68 0.19 45)" }}>
                <span className="text-white font-bold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>N</span>
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {company.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "oklch(0.75 0.03 250)" }}>
              {company.shortDescription}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href={company.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:opacity-80"
                style={{ backgroundColor: "oklch(0.28 0.09 250)" }}
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={company.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:opacity-80"
                style={{ backgroundColor: "oklch(0.28 0.09 250)" }}
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={company.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:opacity-80"
                style={{ backgroundColor: "oklch(0.28 0.09 250)" }}
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: "oklch(0.68 0.19 45)", fontFamily: "'Space Grotesk', sans-serif" }}>
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/sobre", label: "Sobre Nós" },
                { href: "/servicos", label: "Serviços" },
                { href: "/cases", label: "Cases" },
                { href: "/depoimentos", label: "Depoimentos" },
                { href: "/faq", label: "FAQ" },
                { href: "/contato", label: "Contato" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "oklch(0.75 0.03 250)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: "oklch(0.68 0.19 45)", fontFamily: "'Space Grotesk', sans-serif" }}>
              Serviços
            </h4>
            <ul className="space-y-2.5">
              {[
                "Consultoria Estratégica",
                "Gestão de Projetos",
                "Transformação Digital",
                "Marketing Digital",
                "Desenvolvimento Web",
                "Treinamento",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/servicos"
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "oklch(0.75 0.03 250)" }}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: "oklch(0.68 0.19 45)", fontFamily: "'Space Grotesk', sans-serif" }}>
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="mt-0.5 shrink-0" style={{ color: "oklch(0.68 0.19 45)" }} />
                <a href={`tel:${company.phone}`} className="text-sm hover:text-white transition-colors" style={{ color: "oklch(0.75 0.03 250)" }}>
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="mt-0.5 shrink-0" style={{ color: "oklch(0.68 0.19 45)" }} />
                <a href={`mailto:${company.email}`} className="text-sm hover:text-white transition-colors" style={{ color: "oklch(0.75 0.03 250)" }}>
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: "oklch(0.68 0.19 45)" }} />
                <span className="text-sm" style={{ color: "oklch(0.75 0.03 250)" }}>
                  {company.address}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle size={15} className="mt-0.5 shrink-0" style={{ color: "oklch(0.68 0.19 45)" }} />
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                  style={{ color: "oklch(0.75 0.03 250)" }}
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid oklch(0.28 0.09 250)" }}>
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <p className="text-xs" style={{ color: "oklch(0.60 0.03 250)" }}>
              © {currentYear} {company.name}. Todos os direitos reservados.
            </p>
            {company.developer?.portfolio && (
              <p className="text-xs mt-1" style={{ color: "oklch(0.68 0.19 45)" }}>
                Desenvolvido por <span className="font-semibold">{company.developer.name}</span> — Desenvolvedor Web
              </p>
            )}
          </div>
          <div className="flex gap-4">
            <Link href="/privacidade" className="text-xs hover:text-white transition-colors" style={{ color: "oklch(0.60 0.03 250)" }}>
              Política de Privacidade
            </Link>
            <Link href="/termos" className="text-xs hover:text-white transition-colors" style={{ color: "oklch(0.60 0.03 250)" }}>
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
