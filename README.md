# Nexus Soluções — Website Institucional

Um website institucional moderno e responsivo desenvolvido com **React + TypeScript + Tailwind CSS**, seguindo a filosofia de design **Bold Conversion Machine**. O site foi criado como portfólio profissional de **Augusto Santana**, desenvolvedor web.

## 🎯 Visão Geral

Este projeto é um template completo de website institucional para empresas de consultoria, serviços e tecnologia. Inclui múltiplas páginas otimizadas para conversão, formulário de contato funcional, integração com WhatsApp e design responsivo.

**Link ao vivo:** [businesstmp-3fnzknkt.manus.space](https://businesstmp-3fnzknkt.manus.space)

## ✨ Características Principais

- ✅ **9 páginas completas**: Home, Sobre, Serviços, Cases, Depoimentos, FAQ, Contato, Privacidade, Termos
- ✅ **Design responsivo** e otimizado para mobile
- ✅ **Animações suaves** com Framer Motion
- ✅ **Formulário de contato** com validação
- ✅ **Integração WhatsApp** em todos os CTAs
- ✅ **SEO básico** com meta tags e estrutura semântica
- ✅ **Performance otimizada** com Vite
- ✅ **TypeScript** para segurança de tipos
- ✅ **Tailwind CSS 4** com cores OKLCH
- ✅ **Componentes reutilizáveis** e modulares

## 🎨 Design System

### Paleta de Cores
- **Azul Índigo Profundo**: `oklch(0.28 0.09 250)` — Confiança e corporatividade
- **Laranja Vibrante**: `oklch(0.68 0.19 45)` — CTAs e destaque
- **Branco/Cinza**: Fundos e textos secundários

### Tipografia
- **Headlines**: Space Grotesk (moderno, confiável)
- **Body**: Inter (legibilidade máxima)

### Componentes
- Animações de entrada suave (SectionReveal)
- Contadores animados (AnimatedCounter)
- Botão WhatsApp flutuante com pulse ring
- Accordion interativo para FAQ
- Cards com borda lateral colorida

## 📁 Estrutura do Projeto

```
business-website-template/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx          # Navbar com créditos do desenvolvedor
│   │   │   ├── Footer.tsx          # Footer com assinatura
│   │   │   ├── WhatsAppButton.tsx  # Botão flutuante
│   │   │   ├── AnimatedCounter.tsx # Contadores animados
│   │   │   ├── SectionReveal.tsx   # Animações de entrada
│   │   │   └── ...
│   │   ├── pages/
│   │   │   ├── Home.tsx            # Página inicial
│   │   │   ├── Sobre.tsx           # Sobre a empresa
│   │   │   ├── Servicos.tsx        # Lista de serviços
│   │   │   ├── Cases.tsx           # Portfólio de cases
│   │   │   ├── Depoimentos.tsx     # Avaliações de clientes
│   │   │   ├── FAQ.tsx             # Perguntas frequentes
│   │   │   ├── Contato.tsx         # Formulário de contato
│   │   │   ├── Privacidade.tsx     # Política de privacidade
│   │   │   └── Termos.tsx          # Termos de uso
│   │   ├── lib/
│   │   │   └── siteData.ts         # Dados centralizados (conteúdo modular)
│   │   ├── App.tsx                 # Roteamento principal
│   │   └── index.css               # Estilos globais
│   ├── index.html
│   └── package.json
├── server/
│   └── index.ts                    # Backend Express (para futuras APIs)
├── db/
│   └── schema.ts                   # Schema do banco de dados
├── README.md
└── package.json
```

## 🚀 Como Começar

### Pré-requisitos
- Node.js 18+ 
- npm ou pnpm

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/business-website-template.git
cd business-website-template

# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev
```

O site estará disponível em `http://localhost:5173`

## 📝 Personalização

### Editar Conteúdo
Todo o conteúdo do site está centralizado em um único arquivo. Edite apenas:

```typescript
// client/src/lib/siteData.ts
export const company = {
  name: "Sua Empresa",
  whatsapp: "55XXXXXXXXXXX",
  email: "seu@email.com",
  phone: "(XX) 9 XXXX-XXXX",
  // ... mais dados
};
```

### Adicionar Novo Serviço
```typescript
// Adicione um novo objeto ao array 'services' em siteData.ts
{
  id: "novo-servico",
  name: "Novo Serviço",
  description: "Descrição completa...",
  benefits: ["Benefício 1", "Benefício 2"],
  // ...
}
```

### Modificar Cores
Edite as cores OKLCH em `client/src/index.css` e nos componentes:

```css
/* Cores primárias */
--color-primary: oklch(0.28 0.09 250);    /* Azul */
--color-accent: oklch(0.68 0.19 45);      /* Laranja */
```

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Uso |
|---|---|---|
| React | 18+ | Framework UI |
| TypeScript | 5+ | Tipagem estática |
| Vite | 5+ | Build tool |
| Tailwind CSS | 4+ | Estilização |
| Wouter | - | Roteamento leve |
| Lucide React | - | Ícones |
| Framer Motion | - | Animações |

## 📱 Páginas e Funcionalidades

### Home
- Hero com imagem de fundo
- Estatísticas animadas
- Grid de 6 serviços
- Seção "Por que nos escolher"
- Sobre a empresa
- Processo em 4 passos
- Depoimentos destacados
- FAQ com accordion
- CTA final

### Sobre
- História da empresa
- Missão, Visão e Valores
- Equipe com avatares
- Diferenciais competitivos
- CTA para contato

### Serviços
- Lista completa de 6 serviços
- Descrição detalhada de cada um
- Benefícios inclusos
- Público-alvo
- CTA individual por serviço
- Processo de trabalho

### Cases
- 3 cases de sucesso
- Desafio → Solução → Resultado
- Imagens ilustrativas
- Tags de categoria
- CTA para cada case

### Depoimentos
- 6 avaliações com 5 estrelas
- Nome, cargo e empresa
- Citação completa
- Estatísticas de satisfação

### FAQ
- 8 perguntas frequentes
- Accordion interativo
- Botões para WhatsApp e contato

### Contato
- Formulário com validação
- Campos: nome, email, telefone, serviço, mensagem
- Informações de contato
- Botão WhatsApp destacado
- Tela de sucesso após envio

## 🔗 Integração com WhatsApp

Todos os botões "Solicitar Orçamento" e "Falar com especialista" abrem o WhatsApp com mensagem pré-preenchida:

```
https://wa.me/5579988228105?text=Olá! Tenho interesse em...
```

**Número configurado:** (79) 9 8822-8105 (Augusto Santana)

## 📊 SEO e Performance

- ✅ Meta tags semânticas (title, description, og:*)
- ✅ Estrutura HTML semântica
- ✅ Imagens otimizadas (WebP, lazy loading)
- ✅ CSS crítico inline
- ✅ Minificação automática com Vite
- ✅ Suporte a PWA (manifesto básico)

## 🧪 Testes

```bash
# Executar testes
pnpm test

# Testes com coverage
pnpm test:coverage
```

## 🚢 Deploy

### Opção 1: Manus (Recomendado)
O projeto está hospedado na plataforma Manus com domínio automático:
- **URL:** businesstmp-3fnzknkt.manus.space
- **Deploy automático** ao fazer push para main

### Opção 2: Vercel
```bash
vercel
```

### Opção 3: Netlify
```bash
npm run build
# Fazer upload da pasta 'dist' no Netlify
```

## 📄 Licença

Este projeto é fornecido como portfólio profissional. Sinta-se livre para usar como base para seus próprios projetos.

## 👤 Desenvolvedor

**Augusto Santana** — Desenvolvedor Web  
📧 Email: contato@nexussolucoes.com.br  
📱 WhatsApp: (79) 9 8822-8105  
🔗 LinkedIn: [Seu LinkedIn]  
🌐 Portfolio: [businesstmp-3fnzknkt.manus.space](https://businesstmp-3fnzknkt.manus.space)

## 🤝 Contribuindo

Sugestões e melhorias são bem-vindas! Abra uma issue ou faça um pull request.

## 📞 Suporte

Para dúvidas ou sugestões sobre o projeto, entre em contato via:
- WhatsApp: (79) 9 8822-8105
- Email: contato@nexussolucoes.com.br

---

**Desenvolvido com ❤️ por Augusto Santana**
