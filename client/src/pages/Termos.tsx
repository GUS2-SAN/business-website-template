/**
 * Termos Page — Termos de Uso
 */

import { company } from "@/lib/siteData";

export default function Termos() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16" style={{ backgroundColor: "oklch(0.20 0.09 250)" }}>
        <div className="container">
          <h1 className="text-4xl font-extrabold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Termos de Uso
          </h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">
              Ao acessar e utilizar este site, você concorda com os termos e condições descritos abaixo.
            </p>
            <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.18 0.02 250)" }}>
              1. Uso do site
            </h2>
            <p className="text-gray-600 mb-6">
              Este site é disponibilizado pela {company.name} para fins informativos. O conteúdo não deve ser reproduzido sem autorização prévia.
            </p>
            <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.18 0.02 250)" }}>
              2. Propriedade intelectual
            </h2>
            <p className="text-gray-600 mb-6">
              Todo o conteúdo deste site, incluindo textos, imagens e design, é propriedade da {company.name} e está protegido por leis de direitos autorais.
            </p>
            <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.18 0.02 250)" }}>
              3. Limitação de responsabilidade
            </h2>
            <p className="text-gray-600 mb-6">
              A {company.name} não se responsabiliza por danos decorrentes do uso das informações contidas neste site.
            </p>
            <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.18 0.02 250)" }}>
              4. Alterações
            </h2>
            <p className="text-gray-600">
              Estes termos podem ser alterados a qualquer momento. Recomendamos verificar periodicamente esta página.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
