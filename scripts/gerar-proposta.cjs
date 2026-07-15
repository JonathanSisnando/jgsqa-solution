const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const doc = new PDFDocument({
  size: "A4",
  margins: { top: 55, bottom: 55, left: 60, right: 60 },
  info: {
    Title: "Proposta Comercial — Gestão de Redes Sociais com IA | KBYTE",
    Author: "KBYTE Tech Solutions",
    Subject: "Proposta Comercial",
  },
});

const outputPath = path.resolve(__dirname, "../public/proposta-comercial-kbyte.pdf");
doc.pipe(fs.createWriteStream(outputPath));

const PAGE_W = doc.page.width;
const PAGE_H = doc.page.height;
const ML = 60;
const MR = 60;
const CW = PAGE_W - ML - MR;

const G = "#00D26A";
const G_LIGHT = "#e6faf0";
const G_MED = "#b3f0cc";
const BG = "#ffffff";
const FG = "#1a1d23";
const FG_MUTED = "#6b7280";
const FG_LIGHT = "#9ca3af";
const W = "#ffffff";
const SURF = "#f9fafb";

const fontDir = path.resolve(__dirname, "fonts");
doc.registerFont("Reg", path.join(fontDir, "ARIAL.TTF"));
doc.registerFont("Bold", path.join(fontDir, "ARIALBD.TTF"));
doc.registerFont("Ita", path.join(fontDir, "ARIALI.TTF"));

// ─── helpers ───
function rect(x, y, w, h, c) {
  doc.save().rect(x, y, w, h).fill(c).restore();
}
function hr(y, c, w) {
  rect(ML, y, w || CW, 1, c || FG_MUTED);
}
function sectionTitle(text, y) {
  doc.fontSize(20).font("Bold").fillColor(FG);
  doc.text(text, ML, y);
  rect(ML, y + 30, 40, 3, G);
  return y + 48;
}
function dot(x, y) {
  doc.save().circle(x, y, 2.5).fill(G).restore();
}
function footer(pageNum) {
  const fy = PAGE_H - 40;
  rect(ML, fy, CW, 1, "#e5e7eb");
  doc.fontSize(7).font("Reg").fillColor(FG_LIGHT);
  doc.text("KBYTE Tech Solutions  •  CNPJ 53.827.073/0001-18  •  (92) 98519-4689", ML, fy + 8);
  doc.text(`${String(pageNum).padStart(2, "0")}`, ML + CW - 20, fy + 8, { align: "right" });
}

let pageNum = 0;

// ═══════════════════════════════════════════════
// PAGE 1 — CAPA
// ═══════════════════════════════════════════════
doc.addPage({ size: "A4" });
pageNum++;
rect(0, 0, PAGE_W, PAGE_H, BG);

// Top green bar
rect(0, 0, PAGE_W, 5, G);

// Decorative circle top-right
doc.save().circle(PAGE_W + 40, -40, 220).fill(G_LIGHT).restore();
doc.save().circle(PAGE_W - 60, -60, 100).fill(G).restore();

// Small decorative dots
for (let i = 0; i < 6; i++) {
  doc.save().circle(ML + 40 + i * 14, 110, 2).fill(G).restore();
}

doc.fontSize(8).font("Bold").fillColor(G);
doc.text("KBYTE TECH SOLUTIONS", ML, 100);

doc.fontSize(36).font("Bold").fillColor(FG);
doc.text("Gestão de Redes Sociais", ML, 170);
doc.text("com Inteligência Artificial", ML, 215);

doc.fontSize(14).font("Reg").fillColor(FG_MUTED);
doc.text("Sua presença digital funcionando sozinha —", ML, 290);
doc.text("enquanto você cuida do que importa.", ML, 312);

// Bottom green box
rect(ML, 400, CW, 100, G);
doc.fontSize(10).font("Bold").fillColor(W);
doc.text("PROPOSTA COMERCIAL", ML + 25, 420);
doc.fontSize(9).font("Reg").fillColor(W);
doc.text("Preparado exclusivamente para sua empresa", ML + 25, 442);
doc.text(`${new Date().toLocaleDateString("pt-BR")}`, ML + 25, 460);

// Company info at bottom
rect(ML, 550, CW, 75, SURF);
doc.fontSize(9).font("Bold").fillColor(FG);
doc.text("KBYTE Tech Solutions", ML + 20, 566);
doc.fontSize(8).font("Reg").fillColor(FG_MUTED);
doc.text("CNPJ 53.827.073/0001-18", ML + 20, 586);
doc.text("jonathansisnando.qa@gmail.com  •  (92) 98519-4689", ML + 20, 604);
doc.text("jgsqa-solutions.vercel.app", ML + 20, 618, { link: "https://jgsqa-solutions.vercel.app", underline: false });

// ═══════════════════════════════════════════════
// PAGE 2 — APRESENTAÇÃO
// ═══════════════════════════════════════════════
doc.addPage({ size: "A4" });
pageNum++;
rect(0, 0, PAGE_W, PAGE_H, BG);

let y = sectionTitle("Apresentação", 60);

doc.fontSize(11).font("Reg").fillColor(FG_MUTED);
const p1 = "Sua empresa merece ser vista. Em um mundo onde o primeiro contato com o cliente acontece cada vez mais pelo digital, ter uma presença forte e profissional nas redes sociais deixou de ser diferencial — é necessidade.";
doc.text(p1, ML, y, { width: CW, lineHeight: 1.7 });
y += doc.heightOfString(p1, { width: CW }) + 18;

const p2 = "A KBYTE Tech Solutions une tecnologia de ponta e inteligência artificial para cuidar de toda a sua presença digital. Fazemos isso com planejamento, conteúdo relevante e anúncios estratégicos — tudo medido e otimizado para gerar resultados reais.";
doc.text(p2, ML, y, { width: CW, lineHeight: 1.7 });
y += doc.heightOfString(p2, { width: CW }) + 18;

const p3 = "Enquanto a gente cuida do digital, você cuida do que realmente importa: seu negócio, seus clientes e sua família.";
doc.text(p3, ML, y, { width: CW, lineHeight: 1.7 });

// Highlight cards
y = Math.max(y + 40, 340);
const cardW = (CW - 24) / 3;
const cards = [
  ["Atrair Clientes", "Alcance as pessoas certas com conteúdo relevante e anúncios direcionados."],
  ["Fortalecer a Marca", "Construa autoridade e reconhecimento com uma presença digital consistente."],
  ["Economizar Tempo", "Deixe a gestão digital com a gente enquanto foca no seu negócio."],
];
for (let i = 0; i < cards.length; i++) {
  const cx = ML + i * (cardW + 12);
  rect(cx, y, cardW, 120, SURF);
  rect(cx, y, cardW, 3, G);
  doc.fontSize(11).font("Bold").fillColor(FG);
  doc.text(cards[i][0], cx + 15, y + 20, { width: cardW - 30 });
  doc.fontSize(8.5).font("Reg").fillColor(FG_MUTED);
  doc.text(cards[i][1], cx + 15, y + 48, { width: cardW - 30, lineHeight: 1.5 });
}

// Stats row
y += 155;
const stats = [
  ["12+", "Projetos entregues"],
  ["100%", "Satisfação"],
  ["24/7", "Suporte"],
];
const statW = (CW - 30) / 3;
for (let i = 0; i < stats.length; i++) {
  const sx = ML + i * (statW + 15);
  doc.fontSize(28).font("Bold").fillColor(G);
  doc.text(stats[i][0], sx, y, { width: statW, align: "center" });
  doc.fontSize(9).font("Reg").fillColor(FG_MUTED);
  doc.text(stats[i][1], sx, y + 36, { width: statW, align: "center" });
}

footer(pageNum);

// ═══════════════════════════════════════════════
// PAGE 3 — SERVIÇOS
// ═══════════════════════════════════════════════
doc.addPage({ size: "A4" });
pageNum++;
rect(0, 0, PAGE_W, PAGE_H, BG);

y = sectionTitle("Serviços Oferecidos", 60);

doc.fontSize(10).font("Reg").fillColor(FG_MUTED);
doc.text("Cuidamos de cada detalhe da sua presença digital, do planejamento à execução.", ML, y, { width: CW });
y += 30;

const servs = [
  ["Gestão de Instagram e Facebook", "Perfis sempre ativos com publicações regulares, stories, interação com seguidores e identidade visual consistente."],
  ["Criação de Conteúdo com IA", "Legendas estratégicas e pautas pensadas para engajar seu público, escritas com apoio de inteligência artificial."],
  ["Artes Personalizadas", "Design profissional com a identidade visual da sua marca — imagens, vídeos e stories que destacam seu negócio."],
  ["Agendamento de Publicações", "Posts programados nos melhores dias e horários para maximizar o alcance, sem depender de você."],
  ["Gestão de Anúncios (Google & Meta)", "Campanhas otimizadas de Google Ads e Instagram/Facebook Ads para atrair clientes além do seu público atual."],
  ["Site Integrado ao WhatsApp", "Seu site conectado diretamente ao WhatsApp para que visitantes entrem em contato com um clique."],
  ["Automação de Atendimento com IA", "Chatbot inteligente que responde dúvidas, qualifica leads e agenda horários 24 horas por dia."],
  ["Relatórios de Desempenho", "Relatórios mensais claros e objetivos mostrando alcance, engajamento, cliques e leads gerados."],
];

const colW = (CW - 18) / 2;
for (let i = 0; i < servs.length; i++) {
  const col = i % 2;
  const row = Math.floor(i / 2);
  const sx = ML + col * (colW + 18);
  const sy = y + row * 98;

  rect(sx, sy, colW, 85, SURF);
  rect(sx, sy, 3, 85, G);
  doc.fontSize(10).font("Bold").fillColor(FG);
  doc.text(servs[i][0], sx + 15, sy + 14, { width: colW - 30 });
  doc.fontSize(8).font("Reg").fillColor(FG_MUTED);
  doc.text(servs[i][1], sx + 15, sy + 38, { width: colW - 30, lineHeight: 1.5 });
}

footer(pageNum);

// ═══════════════════════════════════════════════
// PAGE 4 — COMO FUNCIONA
// ═══════════════════════════════════════════════
doc.addPage({ size: "A4" });
pageNum++;
rect(0, 0, PAGE_W, PAGE_H, BG);

y = sectionTitle("Como Funciona", 60);

doc.fontSize(10).font("Reg").fillColor(FG_MUTED);
doc.text("Um processo simples e transparente, do planejamento aos resultados.", ML, y, { width: CW });
y += 28;

const steps = [
  ["01", "Planejamento", "Entendemos seu negócio, público-alvo e objetivos. Definimos pautas, tom de voz e estratégia de conteúdo para o mês."],
  ["02", "Criação", "Produzimos artes, legendas e roteiros com apoio de IA, sempre alinhados à identidade visual da sua marca."],
  ["03", "Aprovação", "Você recebe o conteúdo para revisão e aprova. Ajustes são feitos rapidamente antes da publicação."],
  ["04", "Publicação", "Posts e stories são agendados e publicados nos melhores horários, com acompanhamento de desempenho em tempo real."],
  ["05", "Acompanhamento", "Analisamos métricas, ajustamos campanhas e enviamos um relatório claro com os resultados alcançados."],
];

for (let i = 0; i < steps.length; i++) {
  const [num, title, desc] = steps[i];
  const sy = y + i * 82;

  // Number circle
  doc.save().circle(ML + 20, sy + 30, 18).fill(G).restore();
  doc.fontSize(11).font("Bold").fillColor(W);
  doc.text(num, ML + 20, sy + 23, { align: "center", width: 0 });

  // Connecting line (except last)
  if (i < steps.length - 1) {
    rect(ML + 19, sy + 48, 2, 62, G_LIGHT);
  }

  doc.fontSize(12).font("Bold").fillColor(FG);
  doc.text(title, ML + 55, sy + 12);
  doc.fontSize(9).font("Reg").fillColor(FG_MUTED);
  doc.text(desc, ML + 55, sy + 34, { width: CW - 55, lineHeight: 1.5 });
}

footer(pageNum);

// ═══════════════════════════════════════════════
// PAGE 5 — FERRAMENTAS
// ═══════════════════════════════════════════════
doc.addPage({ size: "A4" });
pageNum++;
rect(0, 0, PAGE_W, PAGE_H, BG);

y = sectionTitle("Ferramentas Utilizadas", 60);

doc.fontSize(10).font("Reg").fillColor(FG_MUTED);
doc.text("Tecnologia de ponta para entregar resultados profissionais e mensuráveis.", ML, y, { width: CW });
y += 30;

const tools = [
  ["Canva", "Design profissional para criação de artes e stories com a identidade da sua marca."],
  ["Claude AI", "Inteligência artificial que escreve legendas, mantém o tom de voz e otimiza o conteúdo."],
  ["ChatGPT", "Apoio na geração de ideias, pautas e roteiros para vídeos e stories."],
  ["Google Analytics", "Monitoramento de tráfego do site e comportamento dos visitantes."],
  ["Meta Business Suite", "Gerenciamento oficial de Instagram e Facebook, métricas e impulsionamento."],
  ["Google Ads", "Criação e otimização de campanhas pagas para aparecer nas pesquisas do Google."],
  ["BotConversa", "Automação de atendimento no WhatsApp com IA, qualificação de leads e agendamentos."],
  ["Plataformas de Agendamento", "Ferramentas como mLabs e Predis.ai para programar e gerenciar publicações."],
];

const tcW = (CW - 18) / 2;
for (let i = 0; i < tools.length; i++) {
  const col = i % 2;
  const row = Math.floor(i / 2);
  const tx = ML + col * (tcW + 18);
  const ty = y + row * 75;

  rect(tx, ty, tcW, 62, SURF);
  rect(tx, ty, tcW, 3, G);
  doc.fontSize(10).font("Bold").fillColor(FG);
  doc.text(tools[i][0], tx + 15, ty + 14, { width: tcW - 30 });
  doc.fontSize(8).font("Reg").fillColor(FG_MUTED);
  doc.text(tools[i][1], tx + 15, ty + 34, { width: tcW - 30, lineHeight: 1.4 });
}

footer(pageNum);

// ═══════════════════════════════════════════════
// PAGE 6 — WHATSAPP IA
// ═══════════════════════════════════════════════
doc.addPage({ size: "A4" });
pageNum++;
rect(0, 0, PAGE_W, PAGE_H, BG);

y = sectionTitle("Automação de WhatsApp com IA", 60);

doc.fontSize(10).font("Reg").fillColor(FG_MUTED);
doc.text("Atenda seus clientes 24 horas por dia, 7 dias por semana, sem precisar contratar uma equipe de plantão.", ML, y, { width: CW });
y += 28;

// Green highlight box
rect(ML, y, CW, 96, G_LIGHT);
rect(ML, y, 3, 96, G);
doc.fontSize(24).font("Bold").fillColor(G);
doc.text("24h", ML + 20, y + 18);
doc.fontSize(9).font("Reg").fillColor(FG);
doc.text("de atendimento automático. Seus clientes sempre", ML + 75, y + 18, { width: CW - 90 });
doc.text("respondidos, mesmo de madrugada ou fim de semana.", ML + 75, y + 36, { width: CW - 90 });
doc.fontSize(8).font("Ita").fillColor(FG_MUTED);
doc.text("Disponível em ferramentas como BotConversa (a partir de R$ 50/mês)", ML + 75, y + 60, { width: CW - 90 });
y += 120;

const waFeatures = [
  ["Respostas Automáticas 24h", "Responda dúvidas frequentes sobre horários, preços e endereços automaticamente, mesmo fora do expediente."],
  ["Qualificação de Leads", "A IA identifica o que o cliente precisa, coleta nome e telefone, e classifica o lead antes de passar para você."],
  ["Agendamento de Atendimentos", "Clientes agendam horários diretamente pelo WhatsApp, sem ida e volta de mensagens."],
  ["Envio de Lembretes", "Mensagens automáticas lembrando o cliente do compromisso, reduzindo faltas e cancelamentos."],
  ["Transferência para Humano", "Quando o assunto é complexo, a conversa é transferida para você com todo o histórico — sem repetições."],
];

for (let i = 0; i < waFeatures.length; i++) {
  const [title, desc] = waFeatures[i];
  const sy = y + i * 64;

  dot(ML + 6, sy + 12);
  rect(ML, sy + 14, CW, 50, SURF);
  doc.fontSize(10).font("Bold").fillColor(FG);
  doc.text(title, ML + 20, sy + 16);
  doc.fontSize(8).font("Reg").fillColor(FG_MUTED);
  doc.text(desc, ML + 20, sy + 34, { width: CW - 40, lineHeight: 1.4 });
}

footer(pageNum);

// ═══════════════════════════════════════════════
// PAGE 7 — PLANOS
// ═══════════════════════════════════════════════
doc.addPage({ size: "A4" });
pageNum++;
rect(0, 0, PAGE_W, PAGE_H, BG);

y = sectionTitle("Planos", 60);

doc.fontSize(10).font("Reg").fillColor(FG_MUTED);
doc.text("Escolha o plano ideal para o seu negócio. Ambos incluem gestão completa e suporte dedicado.", ML, y, { width: CW });
y += 30;

const colP1 = ML;
const colP2 = ML + CW / 2 + 6;
const colPw = CW / 2 - 6;

// Plan card: Básico
rect(colP1, y, colPw, 40, G);
doc.fontSize(16).font("Bold").fillColor(W);
doc.text("Básico", colP1, y + 10, { width: colPw, align: "center" });
y += 55;

const basicItems = [
  ["3 posts por semana", true],
  ["Sem stories", false],
  ["Relatório mensal", true],
  ["Sem resposta a comentários", false],
  ["Gestão de anúncios", " + R$ 297/mês"],
  ["Automação WhatsApp", " + R$ 397 + R$ 197/mês"],
];

for (const [text, incl] of basicItems) {
  const icon = incl === true ? "✓" : incl === false ? "—" : incl;
  const color = incl === true ? G : FG_LIGHT;
  doc.fontSize(9).font(incl === true ? "Bold" : "Reg").fillColor(FG);
  doc.text(text, colP1 + 20, y, { width: colPw - 20 });
  doc.fontSize(9).font("Bold").fillColor(color);
  doc.text(typeof icon === "string" ? icon : "", colP1 + 5, y, { width: 15, align: "center" });
  y += 22;
}

y += 8;
rect(colP1, y, colPw, 32, SURF);
doc.fontSize(18).font("Bold").fillColor(G);
doc.text("R$ 997", colP1, y + 5, { width: colPw, align: "center" });
doc.fontSize(8).font("Reg").fillColor(FG_MUTED);
doc.text("/mês", colP1, y + 22, { width: colPw, align: "center" });

// Plan card: Completo
y2 = 145;
rect(colP2, y2, colPw, 40, G);
doc.fontSize(16).font("Bold").fillColor(W);
doc.text("Completo", colP2, y2 + 10, { width: colPw, align: "center" });
y2 += 55;

const completeItems = [
  ["5 posts por semana", true],
  ["Stories diários", true],
  ["Relatório quinzenal", true],
  ["Resposta a comentários", true],
  ["Gestão de anúncios", " incluso"],
  ["Automação WhatsApp", " + R$ 397 + R$ 197/mês"],
];

for (const [text, incl] of completeItems) {
  const icon = incl === true ? "✓" : incl === false ? "—" : incl;
  const color = incl === true ? G : FG_LIGHT;
  doc.fontSize(9).font(incl === true ? "Bold" : "Reg").fillColor(FG);
  doc.text(text, colP2 + 20, y2, { width: colPw - 20 });
  doc.fontSize(9).font("Bold").fillColor(color);
  doc.text(typeof icon === "string" ? icon : "", colP2 + 5, y2, { width: 15, align: "center" });
  y2 += 22;
}

y2 += 8;
rect(colP2, y2, colPw, 32, SURF);
doc.fontSize(18).font("Bold").fillColor(G);
doc.text("R$ 1.497", colP2, y2 + 5, { width: colPw, align: "center" });
doc.fontSize(8).font("Reg").fillColor(FG_MUTED);
doc.text("/mês", colP2, y2 + 22, { width: colPw, align: "center" });

// Note
doc.fontSize(8).font("Ita").fillColor(FG_MUTED);
doc.text("* Verba de anúncios (R$ 300 a R$ 500/mês) é paga separadamente pelo cliente direto na plataforma.", ML, 640, { width: CW });
doc.text("* Custo da ferramenta de automação WhatsApp (R$ 50 a R$ 250/mês) é separado da taxa de configuração.", ML, 654, { width: CW });

footer(pageNum);

// ═══════════════════════════════════════════════
// PAGE 8 — CHAMADA PARA AÇÃO
// ═══════════════════════════════════════════════
doc.addPage({ size: "A4" });
pageNum++;
rect(0, 0, PAGE_W, PAGE_H, BG);

// Decorative elements
rect(0, 0, PAGE_W, 5, G);
doc.save().circle(ML + CW / 2, 180, 180).fill(G_LIGHT).restore();
doc.save().circle(ML + CW / 2, 180, 120).fill(G).restore();

doc.fontSize(28).font("Bold").fillColor(W);
doc.text("Vamos começar?", ML + CW / 2, 120, { align: "center", width: 0 });

doc.fontSize(12).font("Reg").fillColor(W);
doc.text("Sua presença digital merece um cuidado profissional.", ML + CW / 2, 175, { align: "center", width: 0 });
doc.text("Entre em contato e descubra como podemos", ML + CW / 2, 195, { align: "center", width: 0 });
doc.text("transformar seu negócio.", ML + CW / 2, 215, { align: "center", width: 0 });

// Contact card
const cy = 300;
rect(ML, cy, CW, 170, BG);
rect(ML, cy, CW, 1, G);

doc.fontSize(10).font("Bold").fillColor(FG);
doc.text("Entre em contato", ML + 30, cy + 25);

doc.fontSize(9).font("Bold").fillColor(FG);
doc.text("KBYTE Tech Solutions", ML + 30, cy + 55);
doc.fontSize(9).font("Reg").fillColor(FG_MUTED);
doc.text("CNPJ 53.827.073/0001-18", ML + 30, cy + 72);
doc.text("", ML + 30, cy + 89);

doc.fontSize(9).font("Bold").fillColor(FG);
doc.text("WhatsApp:", ML + 30, cy + 106);
doc.fontSize(9).font("Reg").fillColor(FG_MUTED);
doc.text("(92) 98519-4689", ML + 90, cy + 106);

doc.fontSize(9).font("Bold").fillColor(FG);
doc.text("E-mail:", ML + 30, cy + 123);
doc.fontSize(9).font("Reg").fillColor(FG_MUTED);
doc.text("jonathansisnando.qa@gmail.com", ML + 90, cy + 123);

doc.fontSize(9).font("Bold").fillColor(FG);
doc.text("Site:", ML + 30, cy + 140);
doc.fontSize(9).font("Reg").fillColor(G);
doc.text("jgsqa-solutions.vercel.app", ML + 90, cy + 140, { link: "https://jgsqa-solutions.vercel.app" });

// Bottom CTA
const by = PAGE_H - 100;
rect(ML, by, CW, 50, G);
doc.fontSize(10).font("Bold").fillColor(W);
doc.text("Solicitar proposta personalizada →", ML + CW / 2, by + 16, { align: "center", width: 0 });
doc.fontSize(7).font("Reg").fillColor(W);
doc.text("Clique no link ou entre em contato pelo WhatsApp", ML + CW / 2, by + 34, { align: "center", width: 0 });

// ═══════════════════════════════════════════════
// FINALIZE
// ═══════════════════════════════════════════════
doc.end();

console.log("✅ Proposta comercial gerada: " + outputPath);
