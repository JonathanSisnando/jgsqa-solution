import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Code2,
  MessageCircle,
  Rocket,
  Sparkles,
  Camera,
  CheckCircle2,
  Bot,
  Globe,
  Smartphone,
  BarChart3,
} from "lucide-react";
import { waLink } from "@/lib/site-config";
import { useLang, LangProvider } from "@/lib/LanguageContext";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ParticleNetwork } from "@/components/site/ParticleNetwork";
import { Reveal } from "@/components/site/Reveal";
import { Typewriter } from "@/components/site/Typewriter";

export const Route = createFileRoute("/")({
  component: () => <LangProvider><Index /></LangProvider>,
  head: () => {
    return {
      meta: [
        { title: "JGSQA — Sites, Automação e Redes Sociais" },
        { name: "description", content: "A JGSQA cria sites, automatiza tarefas e gerencia redes sociais para sua empresa crescer. Fale conosco." },
        { property: "og:title", content: "JGSQA — Sites, Automação e Redes Sociais" },
        { property: "og:description", content: "A JGSQA cria sites, automatiza tarefas e gerencia redes sociais para sua empresa crescer." },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
});

const serviceIcon: Record<string, typeof Sparkles> = {
  sparkles: Sparkles,
  rocket: Rocket,
  camera: Camera,
  code: Code2,
};

const serviceIllustrations: Record<string, React.ReactNode> = {
  sparkles: (
    <div className="flex items-center justify-center gap-3 text-[var(--accent-blue)]">
      <Bot size={28} />
      <Smartphone size={28} />
      <BarChart3 size={28} />
    </div>
  ),
  rocket: (
    <div className="flex items-center justify-center gap-3 text-[var(--accent-purple)]">
      <Globe size={28} />
      <BarChart3 size={28} />
      <Smartphone size={28} />
    </div>
  ),
  camera: (
    <div className="flex items-center justify-center gap-3 text-[var(--neon)]">
      <Camera size={28} />
      <MessageCircle size={28} />
      <BarChart3 size={28} />
    </div>
  ),
  code: (
    <div className="flex items-center justify-center gap-3 text-[var(--accent-blue)]">
      <Code2 size={28} />
      <Globe size={28} />
      <Smartphone size={28} />
    </div>
  ),
};

function Index() {
  const { t } = useLang();
  useEffect(() => {
    document.title = t.meta.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t.meta.description);
  }, [t]);
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Technologies />
        <FAQ />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  const { t, lang } = useLang();
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-[68px] hero-gradient"
    >
      <ParticleNetwork />

      <div className="relative z-20 mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-5 py-16 md:px-8 lg:grid-cols-2 lg:items-center">
        <div className="pointer-events-none">
          <div className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-[var(--neon)]/30 bg-[var(--neon-soft)] px-3 py-1 text-xs font-medium text-[var(--neon)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon)]" />
            {t.hero.badge}
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl">
            {t.hero.title.split(" ").map((w, i) =>
              /IA|AI|automação|Automation|inteligência|Intelligence/.test(w) ? (
                <span key={i} className="text-[var(--neon)]">
                  {w}{" "}
                </span>
              ) : (
                <span key={i}>{w} </span>
              ),
            )}
          </h1>
          <Typewriter
            text={t.hero.description}
            className="pointer-events-auto mt-6 max-w-xl text-base text-[var(--foreground)]/70 sm:text-lg"
          />
          <div className="pointer-events-auto mt-8 flex flex-wrap gap-3">
            <a
              href={waLink(t.waMessages.heroCta)}
              target="_blank"
              rel="noreferrer"
              className="btn-neon"
            >
              <MessageCircle size={18} strokeWidth={2.5} />
              {lang === "pt" ? "Quero um orçamento" : "Get a quote"}
            </a>
            <a href="#servicos" className="btn-ghost">
              {lang === "pt" ? "Ver serviços" : "View services"} <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="pointer-events-none relative">
          <div className="grid grid-cols-2 gap-4">
            {t.hero.stats.map((s: { value: string; label: string }) => (
              <div
                key={s.label}
                className="pointer-events-auto card-surface card-hover card-top-bar p-5"
              >
                <div className="font-display text-3xl font-bold text-[var(--neon)]">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-[var(--foreground)]/60">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="pointer-events-auto glass float-badge absolute -left-4 -top-6 rounded-full px-4 py-2 text-xs font-medium text-[var(--foreground)] shadow-lg">
            ✨ {t.hero.floating[0].text}
          </div>
          <div
            className="pointer-events-auto glass float-badge absolute -bottom-6 -right-2 rounded-full px-4 py-2 text-xs font-medium text-[var(--foreground)] shadow-lg"
            style={{ animationDelay: "1.5s" }}
          >
            ⭐ {t.hero.floating[1].text}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <div className="text-xs font-semibold tracking-[0.3em] text-[var(--neon)]">
        {eyebrow}
      </div>
      <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[var(--foreground)]/60">{description}</p>
      )}
    </Reveal>
  );
}

function Services() {
  const { t, lang } = useLang();
  return (
    <section id="servicos" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="SERVIÇOS"
          title={lang === "pt" ? "O que a JGSQA faz por você" : "What JGSQA does for you"}
          description={lang === "pt" ? "Tudo que sua empresa precisa para crescer na internet — de um jeito simples e sem complicação." : "Everything your business needs to grow online — simple and hassle-free."}
        />
        <div className="grid gap-6 md:grid-cols-4 sm:grid-cols-2">
          {t.services.map((s: typeof t.services[0], i: number) => {
            const Icon = serviceIcon[s.icon] || Sparkles;
            const illustration = serviceIllustrations[s.icon];
            return (
              <Reveal key={s.title} delay={i * 100}>
                <div className="card-surface card-hover card-top-bar group flex h-full flex-col p-7">
                  <div className="mb-4 flex h-16 items-center justify-center rounded-xl bg-[var(--neon-soft)]">
                    {illustration}
                  </div>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--neon-soft)] text-[var(--neon)] transition-transform duration-300 group-hover:scale-115">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-[var(--foreground)]/60">{s.description}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="inline-flex rounded-full bg-[var(--neon-soft)] px-3 py-1 text-xs font-semibold text-[var(--neon)]">
                      {s.price}
                    </span>
                  </div>
                  <a
                    href={waLink((t.waMessages as Record<string,string>).orcamento + " Interesse: " + s.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-neon mt-6 justify-center"
                  >
                    {s.cta} <ArrowRight size={16} />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const SCREENSHOT_API = "https://api.microlink.io";

function PortfolioCard({ title, tag, description, url, index }: {
  title: string; tag: string; description: string; url: string; index: number
}) {
  const { lang } = useLang();
  const [screenshot, setScreenshot] = useState("");
  const [loadedImg, setLoadedImg] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(`${SCREENSHOT_API}/?url=${encodeURIComponent(url)}&screenshot=true&meta=false`)
      .then((r) => r.json())
      .then((d) => { if (!cancelled && d?.data?.screenshot?.url) setScreenshot(d.data.screenshot.url); })
      .catch(() => {});
    return () => { cancelled = true; };
  }, [url]);

  const hostname = url.replace(/^https?:\/\//, "").replace(/\/.*$/, "");

  return (
    <Reveal delay={index * 100}>
      <a href={url} target="_blank" rel="noreferrer" className="group block h-full">
        <div className="card-surface card-hover card-top-bar flex h-full flex-col overflow-hidden p-0">
          <div className="relative aspect-video w-full overflow-hidden bg-[var(--surface-2)]">
            {screenshot && (
              <img
                src={screenshot}
                alt={title}
                onLoad={() => setLoadedImg(true)}
                className={`absolute inset-0 h-full w-full object-cover object-top transition-all duration-500 group-hover:scale-105 ${loadedImg ? "opacity-100" : "opacity-0"}`}
              />
            )}
            <div className="flex h-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[var(--surface-2)] to-[var(--surface)] px-4">
              <span className="rounded-full bg-[var(--neon)]/10 px-3 py-1 font-mono text-[10px] font-medium tracking-wide text-[var(--neon)]">
                {hostname}
              </span>
              <Globe size={24} className="text-[var(--foreground)]/15" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-[var(--neon)]/90 px-3 py-1.5 text-[11px] font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <ArrowRight size={13} /> {lang === "pt" ? "Acessar" : "Visit"}
            </div>
          </div>
          <div className="flex flex-1 flex-col p-6 pt-5">
            <div className="mb-3 inline-flex self-start rounded-full border border-[var(--foreground)]/10 px-3 py-1 text-[10px] font-semibold tracking-widest text-[var(--foreground)]/60">
              {tag}
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="mt-2 flex-1 text-sm text-[var(--foreground)]/60">{description}</p>
            <div className="mt-5 flex items-center gap-2 text-sm text-[var(--neon)]">
              <CheckCircle2 size={16} /> {lang === "pt" ? "Entregue e ativo" : "Delivered and live"}
            </div>
          </div>
        </div>
      </a>
    </Reveal>
  );
}

function Portfolio() {
  const { t, lang } = useLang();
  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="PROJETOS"
          title={lang === "pt" ? "Projetos entregues, no ar e funcionando" : "Projects delivered, live and running"}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {t.portfolio.map((p: typeof t.portfolio[0], i: number) => (
            <PortfolioCard key={p.title} title={p.title} tag={p.tag} description={p.description} url={p.url} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const { t, lang } = useLang();
  return (
    <section id="processo" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="COMO FUNCIONA"
          title={lang === "pt" ? "Da conversa ao resultado em 4 passos" : "From chat to result in 4 steps"}
        />
        <div className="relative grid gap-8 md:grid-cols-4">
          <div
            className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px md:block"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(15,151,61,0.4), transparent)",
            }}
          />
          {t.process.map((p: typeof t.process[0], i: number) => (
            <Reveal key={p.n} delay={i * 100} className="relative text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-[var(--neon)] to-emerald-600 font-display text-lg font-bold text-white shadow-[0_0_30px_rgba(15,151,61,0.3)] transition-transform duration-300 hover:scale-110">
                {p.n}
              </div>
              <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
              <p className="mt-1 text-sm text-[var(--foreground)]/60">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Technologies() {
  const { t, lang } = useLang();
  return (
    <section id="tecnologias" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="TECNOLOGIAS"
          title={lang === "pt" ? "Ferramentas modernas para resultados de verdade" : "Modern tools for real results"}
        />
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3">
            {t.technologies.map((tech: string) => (
              <span
                key={tech}
                className="card-surface cursor-default rounded-full px-5 py-2.5 text-sm font-medium text-[var(--foreground)]/70 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--neon)] hover:text-[var(--neon)] hover:shadow-[0_10px_30px_-10px_rgba(15,151,61,0.3)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { t, lang } = useLang();
  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <SectionHeading eyebrow="DÚVIDAS" title={lang === "pt" ? "Perguntas frequentes" : "Frequently asked questions"} />
        <div className="space-y-3">
          {t.faq.map((item: typeof t.faq[0], i: number) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 60}>
                <div
                  className={`card-surface overflow-hidden transition-colors ${
                    isOpen ? "border-[var(--neon)]/50" : ""
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-semibold ${
                        isOpen ? "text-[var(--neon)]" : "text-[var(--foreground)]"
                      }`}
                    >
                      {item.q}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[var(--neon)]" : "text-[var(--foreground)]/50"
                      }`}
                    />
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-[var(--foreground)]/70">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CtaFinal() {
  const { t, lang } = useLang();
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl border border-[var(--neon)]/25 p-10 text-center md:p-16"
            style={{
              background:
                "radial-gradient(600px 300px at 20% 20%, rgba(15,151,61,0.12), transparent 60%), radial-gradient(600px 300px at 80% 80%, rgba(37,99,235,0.08), transparent 60%), linear-gradient(135deg, #e8f5e9, #ffffff)",
            }}
          >
            <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
            <h2 className="relative font-display text-3xl font-bold sm:text-4xl md:text-5xl">
              {t.ctaFinal.title}
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-[var(--foreground)]/70">
              {t.ctaFinal.description}
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={waLink((t.waMessages as Record<string,string>).ctaFinal)}
                target="_blank"
                rel="noreferrer"
                className="btn-neon"
              >
                <MessageCircle size={18} strokeWidth={2.5} />
                {lang === "pt" ? "Começar meu projeto" : "Start my project"}
              </a>
              <a
                href={waLink((t.waMessages as Record<string,string>).ctaDuvidas)}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                {lang === "pt" ? "Tenho dúvidas" : "I have questions"}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
