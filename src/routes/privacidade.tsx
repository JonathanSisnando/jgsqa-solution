import { createFileRoute } from "@tanstack/react-router";
import { useLang, LangProvider } from "@/lib/LanguageContext";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — KBYTE" },
      { name: "description", content: "Política de Privacidade da KBYTE Tech Solutions." },
    ],
    links: [{ rel: "canonical", href: "/privacidade" }],
  }),
  component: () => <LangProvider><Privacidade /></LangProvider>,
});

function Privacidade() {
  const { t, lang } = useLang();
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 pt-[128px] pb-24 md:px-8">
        <div className="text-xs font-semibold tracking-[0.3em] text-[var(--neon)]">
          {lang === "pt" ? "LEGAL" : "LEGAL"}
        </div>
        <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
          {lang === "pt" ? "Política de Privacidade" : "Privacy Policy"}
        </h1>
        <p className="mt-4 text-sm text-[var(--foreground)]/50">
          {lang === "pt" ? "Última atualização:" : "Last updated:"} {new Date().toLocaleDateString(lang === "pt" ? "pt-BR" : "en-US")}
        </p>

        <div className="mt-10 space-y-8 text-[var(--foreground)]/75">
          <section>
            <h2 className="mb-3 text-xl font-bold text-[var(--foreground)]">
              {lang === "pt" ? "1. Quem somos" : "1. Who we are"}
            </h2>
            <p>
              {lang === "pt"
                ? `A KBYTE Tech Solutions (CNPJ ${t.contact.cnpj}) é responsável pelo tratamento dos dados pessoais coletados neste site, em conformidade com a LGPD (Lei nº 13.709/2018).`
                : `KBYTE Tech Solutions (CNPJ ${t.contact.cnpj}) is responsible for the processing of personal data collected on this website, in compliance with Brazilian data protection law (LGPD).`}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-[var(--foreground)]">
              {lang === "pt" ? "2. Dados que coletamos" : "2. Data we collect"}
            </h2>
            <p>
              {lang === "pt"
                ? "Coletamos apenas os dados necessários para contato e prestação de serviços: nome, e-mail, telefone e mensagens enviadas via WhatsApp ou formulários."
                : "We only collect data necessary for contact and service delivery: name, email, phone and messages sent via WhatsApp or forms."}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-[var(--foreground)]">
              {lang === "pt" ? "3. Como usamos" : "3. How we use it"}
            </h2>
            <p>
              {lang === "pt"
                ? "Utilizamos seus dados para responder solicitações, enviar propostas, executar contratos e cumprir obrigações legais. Não vendemos dados a terceiros."
                : "We use your data to respond to requests, send proposals, execute contracts and fulfill legal obligations. We do not sell data to third parties."}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-[var(--foreground)]">
              {lang === "pt" ? "4. Seus direitos" : "4. Your rights"}
            </h2>
            <p>
              {lang === "pt"
                ? `Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento pelo WhatsApp ${t.contact.phoneDisplay}.`
                : `You can request access, correction or deletion of your data at any time via WhatsApp ${t.contact.phoneDisplay}.`}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-[var(--foreground)]">
              {lang === "pt" ? "5. Contato" : "5. Contact"}
            </h2>
            <p>
              {lang === "pt" ? "Dúvidas sobre esta política? Fale conosco no WhatsApp " : "Questions about this policy? Contact us on WhatsApp "}
              <a
                className="text-[var(--neon)] hover:underline"
                href={`https://wa.me/${t.contact.phone}`}
                target="_blank"
                rel="noreferrer"
              >
                {t.contact.phoneDisplay}
              </a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
