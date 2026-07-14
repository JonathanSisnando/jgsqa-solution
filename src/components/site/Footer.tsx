import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site-config";
import { useLang } from "@/lib/LanguageContext";
import { Logo } from "./Logo";

export function Footer() {
  const { t, lang } = useLang();

  const navLabels = t.nav as { label: string; href: string }[];
  const services = t.services as { title: string }[];
  const portfolio = t.portfolio as { title: string }[];

  return (
    <footer className="border-t border-black/5 bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-[var(--foreground)]/60">
              {lang === "pt"
                ? "Criamos sites, automatizamos tarefas e gerenciamos redes sociais para sua empresa crescer sem complicação."
                : "We create websites, automate tasks and manage social media for your business to grow without hassle."}
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-[var(--foreground)]">{lang === "pt" ? "Serviços" : "Services"}</h4>
            <ul className="space-y-2 text-sm text-[var(--foreground)]/60">
              {services.map((s) => (
                <li key={s.title}>
                  <a href="#servicos" className="hover:text-[var(--neon)]">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-[var(--foreground)]">{lang === "pt" ? "Projetos" : "Projects"}</h4>
            <ul className="space-y-2 text-sm text-[var(--foreground)]/60">
              {portfolio.map((p) => (
                <li key={p.title}>
                  <a href="#portfolio" className="hover:text-[var(--neon)]">
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-[var(--foreground)]">{lang === "pt" ? "Contato" : "Contact"}</h4>
            <ul className="space-y-2 text-sm text-[var(--foreground)]/60">
              <li>WhatsApp: {t.contact.phoneDisplay}</li>
              <li>CNPJ: {t.contact.cnpj}</li>
              <li>
                <a
                  href={waLink((t.waMessages as Record<string,string>).footer)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--neon)] hover:underline"
                >
                  <MessageCircle size={14} /> {lang === "pt" ? "Falar no WhatsApp" : "Chat on WhatsApp"}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-black/5 pt-6 text-xs text-[var(--foreground)]/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} JGSQA. {lang === "pt" ? "Todos os direitos reservados." : "All rights reserved."}</p>
          <a href="/privacidade" className="hover:text-[var(--neon)]">
            {lang === "pt" ? "Política de Privacidade" : "Privacy Policy"}
          </a>
        </div>
      </div>
    </footer>
  );
}
