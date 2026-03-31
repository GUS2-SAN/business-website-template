/**
 * SITE DATA — Conteúdo centralizado e modular
 * Para personalizar o site, edite apenas este arquivo.
 * Todos os textos, serviços, depoimentos, FAQ e contatos estão aqui.
 */

export const company = {
  name: "Nexus Soluções",
  tagline: "Transformando desafios em resultados",
  shortDescription:
    "Somos especialistas em soluções empresariais que impulsionam o crescimento do seu negócio com estratégia, tecnologia e execução de alto nível.",
  longDescription:
    "Fundada em 2015, a Nexus Soluções nasceu com o propósito de democratizar o acesso a serviços empresariais de qualidade para pequenas e médias empresas. Ao longo de quase uma década, construímos uma trajetória sólida baseada em resultados concretos, parcerias duradouras e inovação constante. Nossa equipe multidisciplinar combina expertise técnica com visão estratégica para entregar projetos que realmente fazem diferença.",
  heroHeadline: "Seu negócio com presença profissional para atrair mais clientes",
  heroSubheadline:
    "Oferecemos soluções completas para empresas que querem crescer com consistência, credibilidade e resultados mensuráveis.",
  primaryCTA: "Solicitar Orçamento",
  secondaryCTA: "Conhecer Serviços",
  whatsapp: "5511999999999",
  email: "contato@nexussolucoes.com.br",
  phone: "(11) 9 9999-9999",
  address: "Av. Paulista, 1000 — Sala 1010, São Paulo — SP",
  workingHours: "Segunda a Sexta, das 8h às 18h",
  socialLinks: {
    instagram: "https://instagram.com/nexussolucoes",
    linkedin: "https://linkedin.com/company/nexussolucoes",
    facebook: "https://facebook.com/nexussolucoes",
  },
  mission: "Entregar soluções que geram impacto real e crescimento sustentável para nossos clientes.",
  vision: "Ser referência em excelência e inovação no mercado de soluções empresariais.",
  values: ["Compromisso com resultados", "Transparência total", "Inovação contínua", "Parceria genuína"],
};

export const stats = [
  { value: 350, suffix: "+", label: "Projetos entregues" },
  { value: 98, suffix: "%", label: "Clientes satisfeitos" },
  { value: 10, suffix: " anos", label: "De experiência" },
  { value: 120, suffix: "+", label: "Empresas atendidas" },
];

export const services = [
  {
    id: "consultoria-estrategica",
    slug: "consultoria-estrategica",
    name: "Consultoria Estratégica",
    summary: "Diagnóstico completo e plano de ação personalizado para acelerar o crescimento do seu negócio.",
    description:
      "Nossa consultoria estratégica oferece uma visão 360° do seu negócio, identificando oportunidades e eliminando gargalos que impedem o crescimento. Trabalhamos lado a lado com sua equipe para desenvolver e implementar estratégias que geram resultados reais.",
    benefits: [
      "Diagnóstico completo do negócio",
      "Plano de ação com metas claras",
      "Acompanhamento mensal de resultados",
      "Acesso a metodologias comprovadas",
    ],
    idealFor: "Empresas que querem crescer de forma estruturada e sustentável",
    cta: "Agendar Diagnóstico Gratuito",
    icon: "TrendingUp",
  },
  {
    id: "gestao-projetos",
    slug: "gestao-projetos",
    name: "Gestão de Projetos",
    summary: "Metodologias ágeis e gestão eficiente para entregar seus projetos no prazo e dentro do orçamento.",
    description:
      "Aplicamos as melhores metodologias de gestão de projetos para garantir que suas iniciativas sejam entregues com qualidade, no prazo e dentro do orçamento. Nossa equipe certificada cuida de cada detalhe do planejamento à execução.",
    benefits: [
      "Metodologias ágeis e tradicionais",
      "Relatórios de progresso em tempo real",
      "Gestão de riscos proativa",
      "Equipe certificada PMP e Scrum",
    ],
    idealFor: "Empresas com projetos complexos que precisam de gestão especializada",
    cta: "Solicitar Proposta",
    icon: "ClipboardList",
  },
  {
    id: "transformacao-digital",
    slug: "transformacao-digital",
    name: "Transformação Digital",
    summary: "Modernize processos, adote tecnologia e ganhe eficiência operacional com nossa expertise digital.",
    description:
      "Ajudamos empresas a navegar pela transformação digital de forma estruturada e eficiente. Desde a automação de processos até a implementação de sistemas integrados, nossa equipe garante que a tecnologia trabalhe a favor do seu negócio.",
    benefits: [
      "Automação de processos operacionais",
      "Implementação de sistemas integrados",
      "Treinamento e capacitação da equipe",
      "Suporte pós-implementação",
    ],
    idealFor: "Empresas que querem modernizar operações e ganhar eficiência",
    cta: "Iniciar Transformação",
    icon: "Zap",
  },
  {
    id: "marketing-digital",
    slug: "marketing-digital",
    name: "Marketing Digital",
    summary: "Estratégias de marketing que geram leads qualificados e aumentam a visibilidade da sua marca.",
    description:
      "Desenvolvemos e executamos estratégias de marketing digital completas, desde SEO e conteúdo até gestão de tráfego pago. Nosso foco é gerar leads qualificados e converter visitantes em clientes reais.",
    benefits: [
      "SEO e otimização orgânica",
      "Gestão de tráfego pago (Google e Meta)",
      "Produção de conteúdo estratégico",
      "Relatórios detalhados de performance",
    ],
    idealFor: "Empresas que precisam aumentar visibilidade e gerar mais leads",
    cta: "Aumentar Minha Visibilidade",
    icon: "BarChart2",
  },
  {
    id: "desenvolvimento-web",
    slug: "desenvolvimento-web",
    name: "Desenvolvimento Web",
    summary: "Sites e aplicações web profissionais, rápidos e focados em conversão para o seu negócio.",
    description:
      "Criamos sites institucionais, landing pages e aplicações web que combinam design profissional com performance técnica. Cada projeto é desenvolvido com foco em conversão, SEO e experiência do usuário.",
    benefits: [
      "Design moderno e responsivo",
      "Otimização para mecanismos de busca",
      "Alta performance e velocidade",
      "Foco em conversão e geração de leads",
    ],
    idealFor: "Empresas que precisam de presença digital profissional",
    cta: "Ver Portfólio",
    icon: "Globe",
  },
  {
    id: "treinamento-capacitacao",
    slug: "treinamento-capacitacao",
    name: "Treinamento e Capacitação",
    summary: "Programas de desenvolvimento profissional para elevar o nível da sua equipe e aumentar resultados.",
    description:
      "Oferecemos programas de treinamento personalizados para desenvolver as competências da sua equipe. Nossos conteúdos são práticos, baseados em casos reais e adaptados à realidade do seu negócio.",
    benefits: [
      "Programas customizados por empresa",
      "Instrutores com experiência de mercado",
      "Materiais didáticos exclusivos",
      "Acompanhamento pós-treinamento",
    ],
    idealFor: "Empresas que investem no desenvolvimento contínuo da equipe",
    cta: "Conhecer Programas",
    icon: "BookOpen",
  },
];

export const differentials = [
  {
    icon: "Shield",
    title: "Resultados Comprovados",
    description: "Mais de 350 projetos entregues com sucesso e clientes que recomendam nosso trabalho.",
  },
  {
    icon: "Users",
    title: "Equipe Especializada",
    description: "Profissionais certificados e com vasta experiência em diferentes setores do mercado.",
  },
  {
    icon: "Clock",
    title: "Compromisso com Prazos",
    description: "Entregamos no prazo combinado. Nosso processo garante previsibilidade e transparência.",
  },
  {
    icon: "HeartHandshake",
    title: "Parceria de Longo Prazo",
    description: "Não somos apenas fornecedores. Somos parceiros comprometidos com o seu crescimento.",
  },
  {
    icon: "LineChart",
    title: "Foco em ROI",
    description: "Cada ação é orientada por dados e métricas para maximizar o retorno do seu investimento.",
  },
  {
    icon: "Headphones",
    title: "Suporte Dedicado",
    description: "Atendimento ágil e personalizado. Sua empresa nunca fica sem resposta.",
  },
];

export const process = [
  {
    step: "01",
    title: "Diagnóstico",
    description: "Entendemos profundamente o seu negócio, desafios e objetivos antes de propor qualquer solução.",
  },
  {
    step: "02",
    title: "Proposta",
    description: "Desenvolvemos uma proposta personalizada com escopo claro, prazos definidos e investimento transparente.",
  },
  {
    step: "03",
    title: "Execução",
    description: "Nossa equipe trabalha de forma estruturada, com atualizações regulares e total transparência.",
  },
  {
    step: "04",
    title: "Entrega",
    description: "Entregamos os resultados acordados e acompanhamos a implementação para garantir o sucesso.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Mariana Costa",
    role: "CEO",
    company: "TechStart Brasil",
    testimonial:
      "A Nexus transformou completamente a forma como gerenciamos nossos projetos. Em 6 meses, nossa produtividade aumentou 40% e conseguimos escalar o negócio sem perder qualidade.",
    rating: 5,
    avatar: "MC",
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "Diretor Operacional",
    company: "Grupo Meridian",
    testimonial:
      "Contratamos a consultoria estratégica e o resultado superou nossas expectativas. O plano de ação foi preciso e a equipe acompanhou cada etapa com profissionalismo.",
    rating: 5,
    avatar: "CM",
  },
  {
    id: 3,
    name: "Ana Paula Ferreira",
    role: "Fundadora",
    company: "Clínica Bem Estar",
    testimonial:
      "O site desenvolvido pela Nexus triplicou nosso número de agendamentos online. Design lindo, carregamento rápido e muito fácil de usar. Recomendo sem hesitar!",
    rating: 5,
    avatar: "AF",
  },
  {
    id: 4,
    name: "Roberto Alves",
    role: "Gerente de Marketing",
    company: "Construtora Alves",
    testimonial:
      "A estratégia de marketing digital entregou resultados em menos de 3 meses. Hoje geramos o dobro de leads qualificados com o mesmo investimento.",
    rating: 5,
    avatar: "RA",
  },
  {
    id: 5,
    name: "Fernanda Lima",
    role: "Diretora Comercial",
    company: "Advocacia Lima & Associados",
    testimonial:
      "Profissionalismo exemplar do início ao fim. A transformação digital que implementaram nos economizou horas de trabalho manual toda semana.",
    rating: 5,
    avatar: "FL",
  },
];

export const cases = [
  {
    id: 1,
    title: "Crescimento de 300% em leads qualificados",
    client: "TechStart Brasil",
    challenge: "A empresa tinha dificuldade em gerar leads qualificados e converter visitantes em clientes.",
    solution: "Implementamos uma estratégia completa de marketing digital com SEO, tráfego pago e otimização de conversão.",
    result: "300% de aumento em leads qualificados em 6 meses, com redução de 40% no custo por aquisição.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497204380/3fnZkNKtG63ijH8f9Nqm4Z/case-study-EGwEcsoBPywQa4yL57RqQS.webp",
    tags: ["Marketing Digital", "SEO", "Conversão"],
  },
  {
    id: 2,
    title: "Transformação digital que economizou 20h/semana",
    client: "Advocacia Lima & Associados",
    challenge: "Processos manuais consumiam tempo precioso da equipe e geravam erros frequentes.",
    solution: "Automatizamos os principais processos operacionais e implementamos um sistema de gestão integrado.",
    result: "Redução de 20 horas semanais em tarefas manuais e eliminação de 95% dos erros operacionais.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497204380/3fnZkNKtG63ijH8f9Nqm4Z/hero-business-Pzesjy6w8MdWz7CccwPaop.webp",
    tags: ["Transformação Digital", "Automação", "Eficiência"],
  },
  {
    id: 3,
    title: "Site que triplicou agendamentos online",
    client: "Clínica Bem Estar",
    challenge: "Site desatualizado e lento que não convertia visitantes em pacientes.",
    solution: "Desenvolvemos um novo site responsivo, rápido e focado em conversão com sistema de agendamento integrado.",
    result: "Triplicou o número de agendamentos online em 90 dias após o lançamento do novo site.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497204380/3fnZkNKtG63ijH8f9Nqm4Z/contact-bg-6JdvwYztGX8UbZDL4JbQtN.webp",
    tags: ["Desenvolvimento Web", "UX/UI", "Conversão"],
  },
];

export const faqItems = [
  {
    id: 1,
    question: "Como funciona o processo de contratação?",
    answer:
      "O processo começa com uma conversa inicial gratuita para entender suas necessidades. Em seguida, elaboramos uma proposta personalizada com escopo, prazo e investimento. Após aprovação, iniciamos o projeto com reunião de kickoff e cronograma detalhado.",
  },
  {
    id: 2,
    question: "Qual é o prazo médio para ver resultados?",
    answer:
      "Depende do serviço contratado. Em projetos de desenvolvimento web, o resultado é visível em 30 a 60 dias. Em marketing digital, os primeiros resultados aparecem em 60 a 90 dias. Em consultoria, o plano de ação é entregue em até 30 dias.",
  },
  {
    id: 3,
    question: "Vocês atendem empresas de qual porte?",
    answer:
      "Atendemos principalmente pequenas e médias empresas, mas também temos experiência com grandes corporações. Nossos serviços são adaptados ao porte e necessidade de cada cliente.",
  },
  {
    id: 4,
    question: "Como é feito o acompanhamento dos projetos?",
    answer:
      "Cada projeto tem um gerente dedicado que mantém comunicação constante com o cliente. Realizamos reuniões semanais ou quinzenais de acompanhamento e enviamos relatórios de progresso regulares.",
  },
  {
    id: 5,
    question: "Quais são as formas de pagamento?",
    answer:
      "Aceitamos pagamento via PIX, transferência bancária, boleto e cartão de crédito. Para projetos maiores, trabalhamos com parcelamento conforme o escopo e prazo do projeto.",
  },
  {
    id: 6,
    question: "Vocês oferecem suporte após a entrega do projeto?",
    answer:
      "Sim! Todos os nossos projetos incluem um período de suporte pós-entrega. Além disso, oferecemos planos de manutenção e suporte contínuo para quem precisa de acompanhamento a longo prazo.",
  },
  {
    id: 7,
    question: "Em quais regiões vocês atendem?",
    answer:
      "Atendemos empresas em todo o Brasil de forma remota. Para projetos que exigem presença física, atendemos principalmente na Grande São Paulo e podemos negociar deslocamento para outras regiões.",
  },
  {
    id: 8,
    question: "Como posso solicitar um orçamento?",
    answer:
      "Você pode solicitar um orçamento pelo formulário nesta página, pelo WhatsApp, telefone ou e-mail. Respondemos em até 24 horas úteis com uma proposta inicial.",
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "Ricardo Souza",
    role: "CEO & Fundador",
    bio: "15 anos de experiência em gestão empresarial e transformação digital. Ex-consultor McKinsey.",
    avatar: "RS",
  },
  {
    id: 2,
    name: "Juliana Martins",
    role: "Diretora de Projetos",
    bio: "PMP certificada com mais de 200 projetos entregues. Especialista em metodologias ágeis.",
    avatar: "JM",
  },
  {
    id: 3,
    name: "Felipe Castro",
    role: "Head de Marketing Digital",
    bio: "Especialista em growth hacking e performance digital com foco em ROI mensurável.",
    avatar: "FC",
  },
  {
    id: 4,
    name: "Camila Neves",
    role: "Lead Developer",
    bio: "Desenvolvedora full-stack com expertise em criar experiências digitais de alto impacto.",
    avatar: "CN",
  },
];
