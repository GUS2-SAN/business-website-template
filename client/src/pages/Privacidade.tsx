/**
 * Privacidade Page — Política de Privacidade
 */

import { company } from "@/lib/siteData";

export default function Privacidade() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16" style={{ backgroundColor: "oklch(0.20 0.09 250)" }}>
        <div className="container">
          <h1 className="text-4xl font-extrabold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Política de Privacidade
          </h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">
              A {company.name} está comprometida com a proteção dos seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
            </p>
            <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.18 0.02 250)" }}>
              1. Dados coletados
            </h2>
            <p className="text-gray-600 mb-6">
              Coletamos apenas os dados necessários para prestar nossos serviços: nome, e-mail, telefone e informações sobre seu projeto ou necessidade.
            </p>
            <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.18 0.02 250)" }}>
              2. Uso dos dados
            </h2>
            <p className="text-gray-600 mb-6">
              Seus dados são utilizados exclusivamente para responder suas solicitações, enviar propostas e manter comunicação sobre nossos serviços.
            </p>
            <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.18 0.02 250)" }}>
              3. Compartilhamento
            </h2>
            <p className="text-gray-600 mb-6">
              Não compartilhamos seus dados com terceiros sem seu consentimento explícito, exceto quando exigido por lei.
            </p>
            <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.18 0.02 250)" }}>
              4. Seus direitos
            </h2>
            <p className="text-gray-600 mb-6">
              Você tem direito a acessar, corrigir, excluir ou portar seus dados. Entre em contato pelo e-mail {company.email} para exercer esses direitos.
            </p>
            <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.18 0.02 250)" }}>
              5. Contato
            </h2>
            <p className="text-gray-600">
              Para dúvidas sobre esta política, entre em contato: {company.email}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
