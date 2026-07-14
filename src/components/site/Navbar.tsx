import { useEffect, useState } from "react";
import { MessageCircle, Globe } from "lucide-react";
import { waLink } from "@/lib/site-config";
import { useLang } from "@/lib/LanguageContext";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[68px] transition-all duration-300 ${
        scrolled
          ? "border-b border-black/5 bg-white/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {t.nav.map((n: { label: string; href: string }) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-[var(--foreground)]/60 transition-colors hover:text-[var(--neon)]"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              onBlur={() => setTimeout(() => setOpen(false), 150)}
              className="flex items-center gap-1.5 rounded-full border border-black/10 px-3 py-1.5 text-xs font-medium text-[var(--foreground)]/60 transition-colors hover:border-[var(--neon)] hover:text-[var(--neon)]"
            >
              <Globe size={13} />
              {lang === "pt" ? "PT" : "EN"}
            </button>
            {open && (
              <div className="absolute right-0 top-full mt-1 w-24 overflow-hidden rounded-xl border border-black/10 bg-white shadow-xl">
                {(["pt", "en"] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setOpen(false) }}
                    className={`flex w-full items-center justify-center px-3 py-2 text-xs font-medium transition-colors hover:bg-black/5 ${
                      lang === l ? "text-[var(--neon)]" : "text-[var(--foreground)]/60"
                    }`}
                  >
                    {l === "pt" ? "Português" : "English"}
                  </button>
                ))}
              </div>
            )}
          </div>
          <a
            href={waLink(t.waMessages.nav)}
            target="_blank"
            rel="noreferrer"
            className="btn-neon text-sm"
          >
            <MessageCircle size={16} strokeWidth={2.5} />
            <span className="hidden sm:inline">{lang === "pt" ? "Falar no WhatsApp" : "WhatsApp"}</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
