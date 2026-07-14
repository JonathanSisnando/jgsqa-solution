export const CONFIG = {
  brand: {
    name: "JGSQA",
    subtitle: "SOLUÇÕES DIGITAIS",
  },
  contact: {
    phone: "5592985194689",
    phoneDisplay: "(92) 98519-4689",
    cnpj: "53.827.073/0001-18",
    email: "contato@jgsqa.com.br",
  },
  meta: {
    title: "JGSQA — Sites, Automação e Redes Sociais",
    description:
      "A JGSQA cria sites, automatiza tarefas e gerencia redes sociais para sua empresa crescer. Fale conosco no WhatsApp.",
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    googleAds: "https://ads.google.com",
  },
  waMessages: {
    nav: "Olá! Vim pelo site da JGSQA e gostaria de saber mais.",
    heroCta: "Olá! Quero um orçamento com a JGSQA.",
    heroDuvidas: "Olá! Tenho dúvidas sobre os serviços da JGSQA.",
    orcamento: "Olá! Quero solicitar um orçamento.",
    ctaFinal: "Olá! Quero começar meu projeto com a JGSQA.",
    ctaDuvidas: "Olá! Ainda tenho dúvidas antes de contratar.",
    footer: "Olá, vim pelo site da JGSQA.",
  },
  nav: [
    { label: "Serviços", href: "#servicos" },
    { label: "Projetos", href: "#portfolio" },
    { label: "Como fazemos", href: "#processo" },
    { label: "Dúvidas", href: "#faq" },
  ],
  hero: {
    badge: "Criamos soluções digitais para o seu negócio.",
    title: "Sites, automação e redes sociais para sua empresa crescer.",
    description:
      "A JGSQA ajuda empresas como a sua a ter presença na internet. Criamos sites bonitos, automatizamos tarefas repetitivas e cuidamos das suas redes sociais. Tudo feito com qualidade e sem complicação.",
    stats: [
      { value: "Sites", label: "Profissionais e rápidos" },
      { value: "Redes", label: "Gestão completa" },
      { value: "100%", label: "Projetos entregues" },
      { value: "Suporte", label: "Acompanhamento total" },
    ],
    floating: [
      { text: "12+ projetos entregues" },
      { text: "Clientes satisfeitos" },
    ],
  },
  services: [
    {
      icon: "sparkles",
      title: "Automação com Inteligência Artificial",
      description:
        "Criamos robôs e sistemas que fazem tarefas sozinhos: atendem clientes no WhatsApp, organizam planilhas, enviam e-mails e muito mais. Você ganha tempo e dinheiro.",
      price: "a partir de R$ 2.500",
      cta: "Quero automatizar",
    },
    {
      icon: "rocket",
      title: "Site Profissional + Google Ads",
      description:
        "Criamos o site da sua empresa bonito, rápido e que aparece no Google. Cuidamos de tudo: design, texto, fotos e anúncios para atrair clientes.",
      price: "a partir de R$ 1.800",
      cta: "Quero um site",
    },
    {
      icon: "camera",
      title: "Gestão de Redes Sociais",
      description:
        "Cuidamos do Instagram e Facebook da sua empresa. Criamos posts, respondemos clientes e fazemos anúncios. Sua marca sempre ativa e profissional.",
      price: "a partir de R$ 900",
      cta: "Quero gerenciar redes",
    },
    {
      icon: "code",
      title: "Sistema Personalizado",
      description:
        "Tem uma ideia diferente? Criamos sistemas feitos sob medida para o seu negócio: painéis de controle, sistemas de vendas, agendamentos e o que mais você precisar.",
      price: "sob consulta",
      cta: "Falar com o time",
    },
  ],
  portfolio: [
    {
      title: "Controle de Ponto Online",
      tag: "Sistema",
      description:
        "Sistema para registrar horário de funcionários com relatórios e localização.",
    },
    {
      title: "Landing Page Profissional",
      tag: "Site",
      description:
        "Site profissional para escritório de advocacia com anúncios no Google.",
    },
    {
      title: "Portal de Vagas",
      tag: "Sistema",
      description:
        "Site de vagas com painel administrativo e candidatura em 1 clique.",
    },
  ],
  process: [
    { n: "01", title: "Conversa", text: "Entendemos seu negócio, o que precisa e o que sonha." },
    { n: "02", title: "Proposta", text: "Mostramos o que vamos fazer, o prazo e o preço." },
    { n: "03", title: "Criação", text: "Desenvolvemos com entregas semanais e você acompanha tudo." },
    { n: "04", title: "Pronto & Suporte", text: "Publicamos, treinamos sua equipe e damos suporte." },
  ],
  technologies: [
    "React", "Node.js", "Python", "PHP", "TypeScript", "Docker",
    "PostgreSQL", "MySQL", "Google Ads", "WhatsApp", "Inteligência Artificial", "Git",
  ],
  faq: [
    {
      q: "Quanto tempo demora para ficar pronto?",
      a: "Sites ficam prontos em 7 a 14 dias. Sistemas mais complexos podem levar de 4 a 12 semanas. Entregamos por partes, você não fica esperando tudo pronto para ver o resultado.",
    },
    {
      q: "Vocês têm contrato e nota fiscal?",
      a: "Sim. Somos uma empresa registrada (CNPJ 53.827.073/0001-18). Fazemos contrato, emitimos nota fiscal e aceitamos pagamento parcelado.",
    },
    {
      q: "Como funciona a automação com inteligência artificial?",
      a: "Analisamos o que você faz repetitivamente, criamos um robô digital que faz isso pra você e integramos com WhatsApp, e-mail e outros sistemas que você já usa.",
    },
    {
      q: "Vocês dão manutenção depois que o site fica pronto?",
      a: "Sim. Oferecemos planos mensais de manutenção e suporte. Ou você pode contratar só quando precisar.",
    },
    {
      q: "Quais formas de pagamento vocês aceitam?",
      a: "Aceitamos PIX, boleto, cartão de crédito parcelado e transferência. Projetos maiores podem ser divididos em etapas.",
    },
  ],
  ctaFinal: {
    title: "Pronto para levar seu negócio para a internet?",
    description:
      "Conversa direta, sem enrolação. Orçamento rápido e entrega no prazo. Fale com a JGSQA agora mesmo.",
  },
} as const;

export function waLink(message: string) {
  return `https://wa.me/${CONFIG.contact.phone}?text=${encodeURIComponent(message)}`;
}
