export type Lang = 'pt' | 'en'

export interface Translation {
  brand: { name: string; subtitle: string }
  contact: { phone: string; phoneDisplay: string; cnpj: string; email: string }
  meta: { title: string; description: string }
  social: { instagram: string; facebook: string; googleAds: string }
  waMessages: Record<string, string>
  nav: { label: string; href: string }[]
  hero: {
    badge: string; title: string; description: string
    stats: { value: string; label: string }[]
    floating: { text: string }[]
  }
  services: { icon: string; title: string; description: string; price: string; cta: string }[]
  portfolio: { title: string; tag: string; description: string; url: string }[]
  process: { n: string; title: string; text: string }[]
  technologies: string[]
  faq: { q: string; a: string }[]
  ctaFinal: { title: string; description: string }
}

export const TRANSLATIONS: Record<Lang, Translation> = {
  pt: {
    brand: { name: 'JGSQA', subtitle: 'SOLUÇÕES DIGITAIS' },
    contact: { phone: '5592985194689', phoneDisplay: '(92) 98519-4689', cnpj: '53.827.073/0001-18', email: 'contato@jgsqa.com.br' },
    meta: { title: 'JGSQA — Sites, Automação e Redes Sociais', description: 'A JGSQA cria sites, automatiza tarefas e gerencia redes sociais para sua empresa crescer. Fale conosco.' },
    social: { instagram: 'https://instagram.com', facebook: 'https://facebook.com', googleAds: 'https://ads.google.com' },
    waMessages: {
      nav: 'Olá! Vim pelo site da JGSQA e gostaria de saber mais.',
      heroCta: 'Olá! Quero um orçamento com a JGSQA.',
      heroDuvidas: 'Olá! Tenho dúvidas sobre os serviços da JGSQA.',
      orcamento: 'Olá! Quero solicitar um orçamento.',
      ctaFinal: 'Olá! Quero começar meu projeto com a JGSQA.',
      ctaDuvidas: 'Olá! Ainda tenho dúvidas antes de contratar.',
      footer: 'Olá, vim pelo site da JGSQA.',
    },
    nav: [
      { label: 'Serviços', href: '#servicos' },
      { label: 'Projetos', href: '#portfolio' },
      { label: 'Como fazemos', href: '#processo' },
      { label: 'Dúvidas', href: '#faq' },
    ],
    hero: {
      badge: 'Criamos soluções digitais para o seu negócio.',
      title: 'Sites, automação e redes sociais para sua empresa crescer.',
      description: 'A JGSQA ajuda empresas como a sua a ter presença na internet. Criamos sites bonitos, automatizamos tarefas repetitivas e cuidamos das suas redes sociais. Tudo feito com qualidade e sem complicação.',
      stats: [
        { value: 'Sites', label: 'Profissionais e rápidos' },
        { value: 'Redes', label: 'Gestão completa' },
        { value: '100%', label: 'Projetos entregues' },
        { value: 'Suporte', label: 'Acompanhamento total' },
      ],
      floating: [{ text: '12+ projetos entregues' }, { text: 'Clientes satisfeitos' }],
    },
    services: [
      { icon: 'sparkles', title: 'Automação com Inteligência Artificial', description: 'Criamos robôs e sistemas que fazem tarefas sozinhos: atendem clientes no WhatsApp, organizam planilhas, enviam e-mails e muito mais. Você ganha tempo e dinheiro.', price: 'a partir de R$ 2.500', cta: 'Quero automatizar' },
      { icon: 'rocket', title: 'Site Profissional + Google Ads', description: 'Criamos o site da sua empresa bonito, rápido e que aparece no Google. Cuidamos de tudo: design, texto, fotos e anúncios para atrair clientes.', price: 'a partir de R$ 1.800', cta: 'Quero um site' },
      { icon: 'camera', title: 'Gestão de Redes Sociais', description: 'Cuidamos do Instagram e Facebook da sua empresa. Criamos posts, respondemos clientes e fazemos anúncios. Sua marca sempre ativa e profissional.', price: 'a partir de R$ 900', cta: 'Quero gerenciar redes' },
      { icon: 'code', title: 'Sistema Personalizado', description: 'Tem uma ideia diferente? Criamos sistemas feitos sob medida para o seu negócio: painéis de controle, sistemas de vendas, agendamentos e o que mais você precisar.', price: 'sob consulta', cta: 'Falar com o time' },
    ],
    portfolio: [
      { title: 'Amazonar Comércio', tag: 'Site', description: 'Site institucional para comércio de produtos amazônicos com catálogo online e informações da empresa.', url: 'https://amazonar.com.br' },
      { title: 'Fisioterapia Domiciliar', tag: 'Landing Page', description: 'Landing page para agendamento de fisioterapia domiciliar em Manaus com formulário de contato.', url: 'https://fisioterapia-domiciliar-manaus.vercel.app' },
      { title: 'Portal de Vagas', tag: 'Sistema', description: 'Plataforma de vagas de emprego com painel administrativo e candidatura em 1 clique.', url: 'https://vagas-manaus.vercel.app' },
    ],
    process: [
      { n: '01', title: 'Conversa', text: 'Entendemos seu negócio, o que precisa e o que sonha.' },
      { n: '02', title: 'Proposta', text: 'Mostramos o que vamos fazer, o prazo e o preço.' },
      { n: '03', title: 'Criação', text: 'Desenvolvemos com entregas semanais e você acompanha tudo.' },
      { n: '04', title: 'Pronto & Suporte', text: 'Publicamos, treinamos sua equipe e damos suporte.' },
    ],
    technologies: ['React', 'Node.js', 'Python', 'PHP', 'TypeScript', 'Docker', 'PostgreSQL', 'MySQL', 'Google Ads', 'WhatsApp', 'Inteligência Artificial', 'Git'],
    faq: [
      { q: 'Quanto tempo demora para ficar pronto?', a: 'Sites ficam prontos em 7 a 14 dias. Sistemas mais complexos podem levar de 4 a 12 semanas. Entregamos por partes, você não fica esperando tudo pronto para ver o resultado.' },
      { q: 'Vocês têm contrato e nota fiscal?', a: 'Sim. Somos uma empresa registrada (CNPJ 53.827.073/0001-18). Fazemos contrato, emitimos nota fiscal e aceitamos pagamento parcelado.' },
      { q: 'Como funciona a automação com inteligência artificial?', a: 'Analisamos o que você faz repetitivamente, criamos um robô digital que faz isso pra você e integramos com WhatsApp, e-mail e outros sistemas que você já usa.' },
      { q: 'Vocês dão manutenção depois que o site fica pronto?', a: 'Sim. Oferecemos planos mensais de manutenção e suporte. Ou você pode contratar só quando precisar.' },
      { q: 'Quais formas de pagamento vocês aceitam?', a: 'Aceitamos PIX, boleto, cartão de crédito parcelado e transferência. Projetos maiores podem ser divididos em etapas.' },
    ],
    ctaFinal: {
      title: 'Pronto para levar seu negócio para a internet?',
      description: 'Conversa direta, sem enrolação. Orçamento rápido e entrega no prazo. Fale com a JGSQA agora mesmo.',
    },
  },

  en: {
    brand: { name: 'JGSQA', subtitle: 'DIGITAL SOLUTIONS' },
    contact: { phone: '5592985194689', phoneDisplay: '+55 (92) 98519-4689', cnpj: '53.827.073/0001-18', email: 'hello@jgsqa.com' },
    meta: { title: 'JGSQA — Websites, Automation & Social Media', description: 'JGSQA builds websites, automates tasks and manages social media for your business. Talk to us.' },
    social: { instagram: 'https://instagram.com', facebook: 'https://facebook.com', googleAds: 'https://ads.google.com' },
    waMessages: {
      nav: 'Hi! I came from JGSQA website and would like to know more.',
      heroCta: 'Hi! I want a quote from JGSQA.',
      heroDuvidas: 'Hi! I have some questions about JGSQA services.',
      orcamento: 'Hi! I want to request a quote.',
      ctaFinal: 'Hi! I want to start my project with JGSQA.',
      ctaDuvidas: 'Hi! I still have questions before hiring.',
      footer: 'Hi, I came from JGSQA website.',
    },
    nav: [
      { label: 'Services', href: '#servicos' },
      { label: 'Projects', href: '#portfolio' },
      { label: 'How we work', href: '#processo' },
      { label: 'FAQ', href: '#faq' },
    ],
    hero: {
      badge: 'We create digital solutions for your business.',
      title: 'Websites, automation & social media to grow your business.',
      description: 'JGSQA helps businesses like yours to have an online presence. We build beautiful websites, automate repetitive tasks, and manage your social media. All done with quality and no hassle.',
      stats: [
        { value: 'Sites', label: 'Professional & fast' },
        { value: 'Social', label: 'Full management' },
        { value: '100%', label: 'Projects delivered' },
        { value: 'Support', label: 'Complete follow-up' },
      ],
      floating: [{ text: '12+ projects delivered' }, { text: 'Happy clients' }],
    },
    services: [
      { icon: 'sparkles', title: 'AI Automation', description: 'We create bots and systems that work by themselves: answer customers on WhatsApp, organize spreadsheets, send emails and much more. You save time and money.', price: 'from $500', cta: 'Automate now' },
      { icon: 'rocket', title: 'Professional Website + Google Ads', description: 'We create a beautiful, fast website that appears on Google. We handle everything: design, text, photos and ads to attract customers.', price: 'from $350', cta: 'Get a website' },
      { icon: 'camera', title: 'Social Media Management', description: 'We manage your Instagram and Facebook. We create posts, answer customers and run ads. Your brand always active and professional.', price: 'from $180', cta: 'Manage my social' },
      { icon: 'code', title: 'Custom System', description: 'Have a different idea? We build custom systems for your business: dashboards, sales systems, scheduling and whatever you need.', price: 'upon request', cta: 'Talk to us' },
    ],
    portfolio: [
      { title: 'Amazonar Store', tag: 'Website', description: 'Institutional website for Amazonian products commerce with online catalog and company info.', url: 'https://amazonar.com.br' },
      { title: 'Home Physiotherapy', tag: 'Landing Page', description: 'Landing page for home physiotherapy scheduling in Manaus with contact form.', url: 'https://fisioterapia-domiciliar-manaus.vercel.app' },
      { title: 'Job Portal', tag: 'System', description: 'Job board platform with admin panel and 1-click applications.', url: 'https://vagas-manaus.vercel.app' },
    ],
    process: [
      { n: '01', title: 'Chat', text: 'We understand your business, needs and goals.' },
      { n: '02', title: 'Proposal', text: 'We show what we will do, the timeline and price.' },
      { n: '03', title: 'Creation', text: 'We develop with weekly deliveries and you follow along.' },
      { n: '04', title: 'Live & Support', text: 'We launch, train your team and provide support.' },
    ],
    technologies: ['React', 'Node.js', 'Python', 'PHP', 'TypeScript', 'Docker', 'PostgreSQL', 'MySQL', 'Google Ads', 'WhatsApp', 'Artificial Intelligence', 'Git'],
    faq: [
      { q: 'How long does it take to finish?', a: 'Websites are ready in 7 to 14 days. More complex systems can take 4 to 12 weeks. We deliver in parts so you see results along the way.' },
      { q: 'Do you have contracts and invoices?', a: 'Yes. We are a registered company (CNPJ 53.827.073/0001-18). We sign contracts, issue invoices and accept installment payments.' },
      { q: 'How does AI automation work?', a: 'We analyze what you do repeatedly, create a digital robot that does it for you and integrate with WhatsApp, email and other systems you already use.' },
      { q: 'Do you provide maintenance after the website is ready?', a: 'Yes. We offer monthly maintenance and support plans. Or you can hire only when needed.' },
      { q: 'What payment methods do you accept?', a: 'We accept PIX, bank slip, credit card installments and wire transfer. Larger projects can be split by milestone.' },
    ],
    ctaFinal: {
      title: 'Ready to take your business online?',
      description: 'Direct conversation, straightforward quote, on-time delivery. Talk to JGSQA now.',
    },
  },
}
