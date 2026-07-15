const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const doc = new PDFDocument({
  size: "A4",
  margins: { top: 50, bottom: 50, left: 50, right: 50 },
  info: {
    Title: "Gestão de Redes Sociais com IA — KBYTE",
    Author: "KBYTE Tech Solutions",
    Subject: "Proposta de Serviços",
  },
});

const outputPath = path.resolve(__dirname, "../public/proposta-redes-sociais.pdf");
doc.pipe(fs.createWriteStream(outputPath));

const PAGE_W = doc.page.width;
const PAGE_H = doc.page.height;
const MARGIN = 50;
const CONTENT_W = PAGE_W - MARGIN * 2;

const NEON = "#22F27A";
const BG = "#0a0a0f";
const SURFACE = "#12121a";
const SURFACE_2 = "#1e1e2a";
const TEXT = "#eaffea";
const TEXT_MUTED = "#889888";
const WHITE = "#ffffff";

const fontDir = path.resolve(__dirname, "fonts");
doc.registerFont("Regular", path.join(fontDir, "ARIAL.TTF"));
doc.registerFont("Bold", path.join(fontDir, "ARIALBD.TTF"));
doc.registerFont("Italic", path.join(fontDir, "ARIALI.TTF"));

function rect(x, y, w, h, color) {
  doc.save().rect(x, y, w, h).fill(color).restore();
}

// Cover Page
doc.addPage({ size: "A4" });
rect(0, 0, PAGE_W, PAGE_H, BG);

for (let i = 0; i < 200; i++) {
  const y = PAGE_H / 2 - 100 + i;
  const alpha = 0.1 * (1 - Math.abs(i - 100) / 100);
  doc.save().rect(0, y, PAGE_W, 1).fill(`rgba(34,242,122,${alpha})`).restore();
}

doc.save().rect(PAGE_W / 2 - 70, 140, 140, 3).fill(NEON).restore();

doc.fontSize(60).font("Bold").fillColor(NEON);
doc.text("KBYTE", PAGE_W / 2, 160, { align: "center" });

doc.fontSize(11).font("Regular").fillColor(TEXT_MUTED);
doc.text("TECH SOLUTIONS", PAGE_W / 2, 220, { align: "center" });

doc.fontSize(34).font("Bold").fillColor(WHITE);
doc.text("Gestão de Redes Sociais", PAGE_W / 2, 310, { align: "center" });
doc.fontSize(34).font("Bold").fillColor(NEON);
doc.text("com Inteligência Artificial", PAGE_W / 2, 355, { align: "center" });

doc.fontSize(13).font("Regular").fillColor(TEXT_MUTED);
doc.text("Sua presença digital funcionando sozinha — enquanto você cuida do que importa.", PAGE_W / 2, 420, { align: "center" });

doc.save().rect(PAGE_W / 2 - 70, 480, 140, 3).fill(NEON).restore();

doc.fontSize(10).font("Regular").fillColor(TEXT_MUTED);
doc.text("KBYTE Tech Solutions  •  CNPJ 53.827.073/0001-18", PAGE_W / 2, 520, { align: "center" });
doc.text("contato@kbyte.com.br  •  (92) 98519-4689", PAGE_W / 2, 538, { align: "center" });
doc.text("kbyte.com.br", PAGE_W / 2, 556, { align: "center" });

// Page 2: O que eu faço
doc.addPage({ size: "A4" });
rect(0, 0, PAGE_W, PAGE_H, BG);

doc.fontSize(24).font("Bold").fillColor(NEON);
doc.text("O que eu faço", MARGIN, 60);
rect(MARGIN, 90, CONTENT_W, 2, NEON);

const services = [
  ["Instagram e Facebook sempre ativos", "Posts e stories publicados com regularidade, sem depender de você lembrar de postar."],
  ["Conteúdo com IA", "Legendas e temas pensados pro seu público, sempre com a identidade visual da sua marca."],
  ["Site conectado ao WhatsApp", "Quem visita seu site consegue falar com você em um clique."],
  ["Anúncios pagos", "Google Ads e impulsionamento no Instagram/Facebook configurados e otimizados."],
  ["Atendimento automático no WhatsApp com IA", "Assistente que responde as primeiras mensagens 24h por dia."],
  ["Relatório periódico", "Todo mês você recebe um resumo simples: alcance, cliques e contatos."],
];

let yOff = 120;
for (const [title, desc] of services) {
  doc.rect(MARGIN, yOff, 4, 55).fill(NEON);
  doc.fontSize(12).font("Bold").fillColor(WHITE);
  doc.text(title, MARGIN + 18, yOff + 8);
  doc.fontSize(9.5).font("Regular").fillColor(TEXT_MUTED);
  doc.text(desc, MARGIN + 18, yOff + 30, { width: CONTENT_W - 30 });
  yOff += 65;
}

// Page 3: Como funciona
doc.addPage({ size: "A4" });
rect(0, 0, PAGE_W, PAGE_H, BG);

doc.fontSize(24).font("Bold").fillColor(NEON);
doc.text("Como funciona, na prática", MARGIN, 60);
rect(MARGIN, 90, CONTENT_W, 2, NEON);

const steps = [
  ["Planejamento", "Defino os temas da semana com base no seu negócio e datas importantes"],
  ["Criação", "A IA ajuda a escrever a legenda e montar a arte, sempre com sua marca"],
  ["Publicação", "Posts agendados nos melhores horários, sem falha"],
  ["Interação", "Respondo comentários e mensagens que chegam"],
  ["Relatório", "Você recebe os números em linguagem simples, sem termo técnico"],
];

yOff = 110;
const cardW = (CONTENT_W - 15) / 2;
for (let i = 0; i < steps.length; i++) {
  const [title, desc] = steps[i];
  const col = i % 2;
  const row = Math.floor(i / 2);
  const x = MARGIN + col * (cardW + 15);
  const yy = yOff + row * 85;

  rect(x, yy, cardW, 75, SURFACE);
  doc.fontSize(20).font("Bold").fillColor(NEON);
  doc.text(`0${i + 1}`, x + 12, yy + 8);
  doc.fontSize(12).font("Bold").fillColor(WHITE);
  doc.text(title, x + 12, yy + 34);
  doc.fontSize(9).font("Regular").fillColor(TEXT_MUTED);
  doc.text(desc, x + 12, yy + 54, { width: cardW - 24 });
}

// Page 4: Ferramentas
doc.addPage({ size: "A4" });
rect(0, 0, PAGE_W, PAGE_H, BG);

doc.fontSize(24).font("Bold").fillColor(NEON);
doc.text("Ferramentas por trás do serviço", MARGIN, 60);
rect(MARGIN, 90, CONTENT_W, 2, NEON);

const tools = [
  ["mLabs / Predis.ai", "Geração de conteúdo com IA e agendamento automático de posts"],
  ["Claude (Anthropic)", "IA que escreve as legendas e mantém o tom de voz da marca"],
  ["Canva", "Criação das artes com a identidade visual da sua marca"],
  ["Google Analytics", "Acompanhamento de visitas no site"],
  ["Meta Business Suite", "Métricas oficiais do Instagram e Facebook + impulsionamento"],
  ["Google Ads", "Criação e otimização das campanhas de anúncio"],
  ["BotConversa", "Automação de atendimento no WhatsApp com IA"],
];

yOff = 115;
for (let i = 0; i < tools.length; i++) {
  const [tool, desc] = tools[i];
  const yy = yOff + i * 36;
  rect(MARGIN, yy, CONTENT_W, 30, i % 2 === 0 ? SURFACE : SURFACE_2);
  doc.fontSize(10).font("Bold").fillColor(WHITE);
  doc.text(tool, MARGIN + 15, yy + 8);
  doc.fontSize(9).font("Regular").fillColor(TEXT_MUTED);
  doc.text(desc, MARGIN + 145, yy + 8, { width: CONTENT_W - 160 });
}

// Page 5: WhatsApp IA
doc.addPage({ size: "A4" });
rect(0, 0, PAGE_W, PAGE_H, BG);

doc.fontSize(24).font("Bold").fillColor(NEON);
doc.text("Automação de WhatsApp com IA", MARGIN, 60);
rect(MARGIN, 90, CONTENT_W, 2, NEON);

doc.fontSize(12).font("Bold").fillColor(WHITE);
doc.text("O que a automação pode fazer:", MARGIN, 115);

const waFeatures = [
  "Responder dúvidas frequentes 24h por dia — horário, endereço, preços",
  "Qualificar quem entra em contato — entende o que a pessoa procura e coleta nome/telefone",
  "Agendar horários automaticamente — direto na agenda, sem ida e volta de mensagem",
  "Enviar lembretes — tipo 'sua consulta é amanhã às 14h', reduzindo falta",
  "Encaminhar pra um atendente humano quando o assunto for complexo",
];

yOff = 140;
for (let i = 0; i < waFeatures.length; i++) {
  rect(MARGIN, yOff, CONTENT_W, 42, i % 2 === 0 ? SURFACE : SURFACE_2);
  doc.fontSize(9).font("Bold").fillColor(NEON);
  doc.text(`${i + 1}`, MARGIN + 15, yOff + 14);
  doc.fontSize(9).font("Regular").fillColor(TEXT);
  doc.text(waFeatures[i], MARGIN + 35, yOff + 14, { width: CONTENT_W - 50 });
  yOff += 48;
}

doc.fontSize(12).font("Bold").fillColor(WHITE);
doc.text("Níveis de automação:", MARGIN, yOff + 12);
yOff += 32;

const levels = [
  ["Básico (grátis)", "Respostas automáticas simples, direto no WhatsApp Business", "Meta Business AI"],
  ["Completo", "IA entende linguagem natural, qualifica lead, agenda horário", "BotConversa"],
];

for (let i = 0; i < levels.length; i++) {
  const [level, desc, tool] = levels[i];
  rect(MARGIN, yOff, CONTENT_W, 36, i % 2 === 0 ? SURFACE : SURFACE_2);
  doc.fontSize(9).font("Bold").fillColor(WHITE);
  doc.text(level, MARGIN + 12, yOff + 11);
  doc.fontSize(8).font("Regular").fillColor(TEXT_MUTED);
  doc.text(desc, MARGIN + 130, yOff + 11, { width: CONTENT_W - 250 });
  doc.fontSize(8).font("Bold").fillColor(NEON);
  doc.text(tool, MARGIN + CONTENT_W - 100, yOff + 11, { width: 88, align: "right" });
  yOff += 42;
}

doc.fontSize(8).font("Italic").fillColor(TEXT_MUTED);
doc.text("* Custo da ferramenta (R$ 50 a R$ 250/mês) é separado da taxa de configuração.", MARGIN, yOff + 8, { width: CONTENT_W });

// Page 6: Pacotes
doc.addPage({ size: "A4" });
rect(0, 0, PAGE_W, PAGE_H, BG);

doc.fontSize(24).font("Bold").fillColor(NEON);
doc.text("Pacotes", MARGIN, 60);
rect(MARGIN, 90, CONTENT_W, 2, NEON);

doc.fontSize(9).font("Regular").fillColor(TEXT_MUTED);
doc.text("Tabela comparativa — valores mensais (taxa de gestão)", MARGIN, 105, { width: CONTENT_W });

const C1 = MARGIN;
const C2 = MARGIN + CONTENT_W / 2;
const col1 = CONTENT_W / 2 - 10;
const col2 = CONTENT_W / 2 - 10;

yOff = 130;
rect(MARGIN, yOff, CONTENT_W, 28, NEON);
doc.fontSize(9).font("Bold").fillColor(BG);
doc.text("", C1 + 10, yOff + 8);
doc.text("Básico", C2 + 5, yOff + 8, { width: col1 - 10, align: "center" });
doc.text("Completo", C2 + col1 + 5, yOff + 8, { width: col2 - 10, align: "center" });

const planRows = [
  ["Posts por semana", "3", "5"],
  ["Stories", "—", "Sim"],
  ["Relatório", "Mensal", "Quinzenal"],
  ["Resposta a comentários", "—", "Sim"],
  ["Gestão de anúncios (Google/Instagram)", "+ R$ 297/mês", "Incluso"],
  ["Automação WhatsApp IA", "+ R$ 397 setup + R$ 197/mês", "+ R$ 397 setup + R$ 197/mês"],
];

yOff += 32;
for (let i = 0; i < planRows.length; i++) {
  const [feature, basic, complete] = planRows[i];
  rect(MARGIN, yOff, CONTENT_W, 26, i % 2 === 0 ? SURFACE : SURFACE_2);
  doc.fontSize(9).font("Regular").fillColor(WHITE);
  doc.text(feature, C1 + 15, yOff + 7, { width: C2 - C1 - 20 });
  doc.fontSize(9).font("Regular").fillColor(TEXT_MUTED);
  doc.text(basic, C2 + 5, yOff + 7, { width: col1 - 10, align: "center" });
  doc.text(complete, C2 + col1 + 5, yOff + 7, { width: col2 - 10, align: "center" });
  yOff += 28;
}

yOff += 6;
rect(MARGIN, yOff, CONTENT_W, 38, "#1a2e1a");
doc.fontSize(16).font("Bold").fillColor(NEON);
doc.text("R$ 997", C2 + 10, yOff + 8, { width: col1 - 20, align: "center" });
doc.text("R$ 1.497", C2 + col1 + 10, yOff + 8, { width: col2 - 20, align: "center" });
doc.fontSize(8).font("Regular").fillColor(TEXT_MUTED);
doc.text("/mês", C2 + 10, yOff + 26, { width: col1 - 20, align: "center" });
doc.text("/mês", C2 + col1 + 10, yOff + 26, { width: col2 - 20, align: "center" });

yOff += 55;
doc.fontSize(8).font("Italic").fillColor(TEXT_MUTED);
doc.text("* Verba de anúncios (R$ 300 a R$ 500/mês) é paga separadamente pelo cliente.", MARGIN, yOff, { width: CONTENT_W });

// Footer
rect(0, PAGE_H - 80, PAGE_W, 80, SURFACE);
doc.fontSize(11).font("Bold").fillColor(NEON);
doc.text("KBYTE Tech Solutions", MARGIN, PAGE_H - 62);
doc.fontSize(9).font("Regular").fillColor(TEXT_MUTED);
doc.text("contato@kbyte.com.br  •  (92) 98519-4689  •  kbyte.com.br", MARGIN, PAGE_H - 42);
doc.text("CNPJ 53.827.073/0001-18", MARGIN, PAGE_H - 26);

doc.end();

console.log("PDF gerado: " + outputPath);
