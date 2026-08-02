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
  results: { eyebrow: string; title: string; description: string; items: string[] }
  process: { n: string; title: string; text: string }[]
  technologies: string[]
  faq: { q: string; a: string }[]
  ctaFinal: { title: string; description: string }
}

export const TRANSLATIONS: Record<Lang, Translation> = {
  pt: {
    brand: { name: 'KBYTE', subtitle: 'SOLUÇÕES DIGITAIS' },
    contact: { phone: '5592985194689', phoneDisplay: '(92) 98519-4689', cnpj: '53.827.073/0001-18', email: 'contato@kbyte.com.br' },
    meta: { title: 'KBYTE — Marketing Digital e Tráfego Pago em Manaus', description: 'Gestão de tráfego pago (Google Ads), Instagram e sites para pequenas e médias empresas de Manaus atraírem mais clientes. Fale com a KBYTE.' },
    social: { instagram: 'https://instagram.com', facebook: 'https://facebook.com', googleAds: 'https://ads.google.com' },
    waMessages: {
      nav: 'Olá! Vim pelo site da KBYTE e gostaria de saber mais.',
      heroCta: 'Olá! Vim pelo site da KBYTE e quero atrair mais clientes para o meu negócio.',
      heroDuvidas: 'Olá! Tenho dúvidas sobre os serviços da KBYTE.',
      orcamento: 'Olá! Quero solicitar um orçamento.',
      ctaFinal: 'Olá! Quero começar meu projeto com a KBYTE.',
      ctaDuvidas: 'Olá! Ainda tenho dúvidas antes de contratar.',
      footer: 'Olá, vim pelo site da KBYTE.',
    },
    nav: [
      { label: 'Serviços', href: '#servicos' },
      { label: 'Projetos', href: '#portfolio' },
      { label: 'Como fazemos', href: '#processo' },
      { label: 'Dúvidas', href: '#faq' },
    ],
    hero: {
      badge: 'Marketing digital e tráfego pago',
      title: 'Mais clientes para o seu negócio, todo mês.',
      description: 'Gestão de tráfego pago e marketing digital para pequenas e médias empresas de Manaus crescerem no Google e no Instagram.',
      stats: [
        { value: 'Marketing', label: 'Tráfego pago e redes' },
        { value: 'Sites', label: 'Profissionais e rápidos' },
        { value: '100%', label: 'Projetos entregues' },
        { value: 'Suporte', label: 'Acompanhamento total' },
      ],
      floating: [{ text: '12+ projetos entregues' }, { text: 'Clientes satisfeitos' }],
    },
    services: [
      { icon: 'rocket', title: 'Site Profissional + Google Ads', description: 'Criamos o site da sua empresa bonito, rápido e que aparece no Google. Cuidamos de tudo: design, texto, fotos e anúncios para atrair clientes.', price: 'a partir de R$ 1.800', cta: 'Quero um site' },
      { icon: 'camera', title: 'Gestão de Redes Sociais', description: 'Cuidamos do Instagram e Facebook da sua empresa. Criamos posts, respondemos clientes e fazemos anúncios. Sua marca sempre ativa e profissional.', price: 'a partir de R$ 900', cta: 'Quero gerenciar redes' },
      { icon: 'sparkles', title: 'Automação com Inteligência Artificial', description: 'Criamos robôs e sistemas que fazem tarefas sozinhos: atendem clientes no WhatsApp, organizam planilhas, enviam e-mails e muito mais. Você ganha tempo e dinheiro.', price: 'a partir de R$ 2.500', cta: 'Quero automatizar' },
      { icon: 'code', title: 'Sistema Personalizado', description: 'Tem uma ideia diferente? Criamos sistemas feitos sob medida para o seu negócio: painéis de controle, sistemas de vendas, agendamentos e o que mais você precisar.', price: 'sob consulta', cta: 'Falar com o time' },
    ],
    portfolio: [
      { title: 'AmazonAr Climatização', tag: 'Site', description: 'Site institucional para serviços de climatização com catálogo online e informações da empresa.', url: 'https://amazonar.com.br' },
      { title: 'Fisioterapia Domiciliar', tag: 'Landing Page', description: 'Landing page para agendamento de fisioterapia domiciliar em Manaus com formulário de contato.', url: 'https://fisioterapia-domiciliar-manaus.vercel.app' },
      { title: 'Portal de Vagas', tag: 'Sistema', description: 'Plataforma de vagas de emprego com painel administrativo e candidatura em 1 clique.', url: 'https://vagas-manaus.vercel.app' },
    ],
    results: {
      eyebrow: 'RESULTADOS',
      title: 'Como acompanhamos seu resultado',
      description: 'Toda campanha que rodamos vem com acompanhamento de verdade. Você recebe relatório semanal, quinzenal ou mensal — do jeito que preferir — com cliques, visitas, contatos e engajamento. Sem número mágico prometido: mostramos o que está funcionando e ajustamos o que não está.',
      items: ['Cliques', 'Visitas', 'Contatos', 'Engajamento'],
    },
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
      { q: 'Quanto tempo leva pra ver resultado com Google Ads e Instagram Ads?', a: 'Cada nicho responde de um jeito, mas a maioria dos clientes começa a ver cliques e contatos nas primeiras semanas de campanha no ar. Não existe fórmula mágica — o que garantimos é acompanhamento e ajuste constante, com relatório aberto pra você ver o que está funcionando.' },
      { q: 'Vocês garantem um número de clientes por mês?', a: 'Não trabalhamos com garantia de número fixo — ninguém sério garante isso em marketing digital. O que fazemos é configurar, acompanhar e otimizar suas campanhas continuamente.' },
    ],
    ctaFinal: {
      title: 'Pronto para levar seu negócio para a internet?',
      description: 'Conversa direta, sem enrolação. Orçamento rápido e entrega no prazo. Fale com a KBYTE agora mesmo.',
    },
  },

  en: {
    brand: { name: 'KBYTE', subtitle: 'DIGITAL SOLUTIONS' },
    contact: { phone: '5592985194689', phoneDisplay: '+55 (92) 98519-4689', cnpj: '53.827.073/0001-18', email: 'hello@kbyte.com' },
    meta: { title: 'KBYTE — Digital Marketing & Paid Traffic in Manaus', description: 'Paid traffic management (Google Ads), Instagram and websites for small and medium businesses in Manaus to attract more customers. Talk to KBYTE.' },
    social: { instagram: 'https://instagram.com', facebook: 'https://facebook.com', googleAds: 'https://ads.google.com' },
    waMessages: {
      nav: 'Hi! I came from KBYTE website and would like to know more.',
      heroCta: 'Hi! I came from KBYTE website and want to attract more customers for my business.',
      heroDuvidas: 'Hi! I have some questions about KBYTE services.',
      orcamento: 'Hi! I want to request a quote.',
      ctaFinal: 'Hi! I want to start my project with KBYTE.',
      ctaDuvidas: 'Hi! I still have questions before hiring.',
      footer: 'Hi, I came from KBYTE website.',
    },
    nav: [
      { label: 'Services', href: '#servicos' },
      { label: 'Projects', href: '#portfolio' },
      { label: 'How we work', href: '#processo' },
      { label: 'FAQ', href: '#faq' },
    ],
    hero: {
      badge: 'Digital marketing and paid traffic',
      title: 'More customers for your business, every month.',
      description: 'Paid traffic and digital marketing management for small and medium businesses in Manaus to grow on Google and Instagram.',
      stats: [
        { value: 'Marketing', label: 'Paid traffic & social' },
        { value: 'Sites', label: 'Professional & fast' },
        { value: '100%', label: 'Projects delivered' },
        { value: 'Support', label: 'Complete follow-up' },
      ],
      floating: [{ text: '12+ projects delivered' }, { text: 'Happy clients' }],
    },
    services: [
      { icon: 'rocket', title: 'Professional Website + Google Ads', description: 'We create a beautiful, fast website that appears on Google. We handle everything: design, text, photos and ads to attract customers.', price: 'from $350', cta: 'Get a website' },
      { icon: 'camera', title: 'Social Media Management', description: 'We manage your Instagram and Facebook. We create posts, answer customers and run ads. Your brand always active and professional.', price: 'from $180', cta: 'Manage my social' },
      { icon: 'sparkles', title: 'AI Automation', description: 'We create bots and systems that work by themselves: answer customers on WhatsApp, organize spreadsheets, send emails and much more. You save time and money.', price: 'from $500', cta: 'Automate now' },
      { icon: 'code', title: 'Custom System', description: 'Have a different idea? We build custom systems for your business: dashboards, sales systems, scheduling and whatever you need.', price: 'upon request', cta: 'Talk to us' },
    ],
    portfolio: [
      { title: 'AmazonAr Climatização', tag: 'Website', description: 'Institutional website for climatization services with online catalog and company info.', url: 'https://amazonar.com.br' },
      { title: 'Home Physiotherapy', tag: 'Landing Page', description: 'Landing page for home physiotherapy scheduling in Manaus with contact form.', url: 'https://fisioterapia-domiciliar-manaus.vercel.app' },
      { title: 'Job Portal', tag: 'System', description: 'Job board platform with admin panel and 1-click applications.', url: 'https://vagas-manaus.vercel.app' },
    ],
    results: {
      eyebrow: 'RESULTS',
      title: 'How we track your results',
      description: "Every campaign we run comes with real tracking. You get a weekly, biweekly or monthly report — whichever you prefer — with clicks, visits, contacts and engagement. No magic number promised: we show what's working and adjust what isn't.",
      items: ['Clicks', 'Visits', 'Contacts', 'Engagement'],
    },
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
      { q: 'How long does it take to see results with Google Ads and Instagram Ads?', a: "Each niche responds differently, but most clients start seeing clicks and contacts in the first weeks of the campaign going live. There's no magic formula — what we guarantee is constant tracking and adjustment, with an open report so you can see what's working." },
      { q: 'Do you guarantee a set number of clients per month?', a: "We don't work with a fixed-number guarantee — no serious agency promises that in digital marketing. What we do is set up, track and continuously optimize your campaigns." },
    ],
    ctaFinal: {
      title: 'Ready to take your business online?',
      description: 'Direct conversation, straightforward quote, on-time delivery. Talk to KBYTE now.',
    },
  },
}
