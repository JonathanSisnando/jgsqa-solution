import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/favicon-options")({
  component: FaviconOptions,
});

const NEON = "#00D26A";
const BG = "#111";
const WHITE = "#fff";

const options = [
  {
    name: "K简约",
    desc: "Letra K sólida no estilo tech",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect width="32" height="32" rx="6" fill="${BG}"/>
      <text x="16" y="23" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="20" fill="${NEON}">K</text>
    </svg>`,
  },
  {
    name: "K角标",
    desc: "K com detalhe neon no canto (como o logo atual)",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect width="32" height="32" rx="6" fill="${BG}"/>
      <rect x="24" y="2" width="6" height="6" rx="1" fill="${NEON}" opacity="0.8"/>
      <text x="16" y="23" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="20" fill="${NEON}">K</text>
    </svg>`,
  },
  {
    name: "<K/> Tag",
    desc: "K com brackets de código",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect width="32" height="32" rx="6" fill="${BG}"/>
      <text x="16" y="22" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="14" fill="${NEON}">&lt;K/&gt;</text>
    </svg>`,
  },
  {
    name: "K Byte",
    desc: "K com cursor piscando (estilo terminal)",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect width="32" height="32" rx="6" fill="${BG}"/>
      <text x="14" y="23" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="20" fill="${NEON}">K</text>
      <rect x="22" y="10" width="2" height="12" rx="0.5" fill="${NEON}" opacity="0.9">
        <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite"/>
      </rect>
    </svg>`,
  },
  {
    name: "Rede K",
    desc: "K estilizado com nós de rede (similar ao atual)",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect width="32" height="32" rx="6" fill="${BG}"/>
      <line x1="8" y1="8" x2="24" y2="10" stroke="${NEON}" stroke-width="0.8" opacity="0.4"/>
      <line x1="8" y1="8" x2="16" y2="22" stroke="${NEON}" stroke-width="0.8" opacity="0.4"/>
      <line x1="24" y1="10" x2="16" y2="22" stroke="${NEON}" stroke-width="0.8" opacity="0.4"/>
      <text x="16" y="21" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="12" fill="${NEON}">K</text>
      <circle cx="8" cy="8" r="1.8" fill="${NEON}"/>
      <circle cx="24" cy="10" r="1.8" fill="${NEON}"/>
      <circle cx="16" cy="22" r="2.2" fill="${NEON}"/>
    </svg>`,
  },
  {
    name: "KB",
    desc: "Iniciais KB em neon",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect width="32" height="32" rx="6" fill="${BG}"/>
      <text x="16" y="23" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="18" fill="${NEON}">KB</text>
    </svg>`,
  },
  {
    name: "K圆角",
    desc: "K em fundo verde arredondado",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect width="32" height="32" rx="16" fill="${NEON}"/>
      <text x="16" y="23" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="20" fill="${BG}">K</text>
    </svg>`,
  },
  {
    name: "K绶带",
    desc: "K com faixa neon horizontal",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect width="32" height="32" rx="6" fill="${BG}"/>
      <rect x="4" y="14" width="24" height="4" rx="1" fill="${NEON}" opacity="0.3"/>
      <text x="16" y="23" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="20" fill="${NEON}">K</text>
    </svg>`,
  },
];

function FaviconOptions() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white p-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#00D26A] mb-2">&lt; KBYTE /&gt;</h1>
          <p className="text-gray-400">Escolha o favicon que mais combina com a marca</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {options.map((opt) => (
            <div
              key={opt.name}
              className="group relative rounded-xl border border-white/10 bg-[#12121a] p-6 text-center transition-all duration-300 hover:border-[#00D26A]/50 hover:shadow-[0_0_30px_-10px_#00D26A]"
            >
              <div className="mx-auto mb-4 h-16 w-16">
                <img
                  src={`data:image/svg+xml,${encodeURIComponent(opt.svg)}`}
                  alt={opt.name}
                  className="h-full w-full"
                />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">{opt.name}</h3>
              <p className="text-xs text-gray-500 mb-4">{opt.desc}</p>
              <button
                onClick={() => {
                  const blob = new Blob([opt.svg], { type: "image/svg+xml" });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = "favicon.svg";
                  a.click();
                  URL.revokeObjectURL(url);
                }}
                className="inline-flex items-center gap-1.5 rounded-md bg-[#00D26A]/10 px-3 py-1.5 text-xs font-medium text-[#00D26A] transition-colors hover:bg-[#00D26A]/20"
              >
                Baixar SVG
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-white/10 bg-[#12121a] p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Preview no navegador</h2>
          <p className="text-sm text-gray-400 mb-4">
            O favicon atual aparece na aba do navegador. Escolha um acima, baixe e substitua o arquivo <code className="text-[#00D26A]">public/favicon.svg</code>.
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            {options.map((opt) => (
              <div key={opt.name} className="flex flex-col items-center gap-2">
                <div className="h-8 w-8 rounded border border-white/10 overflow-hidden flex items-center justify-center bg-[#111]">
                  <img
                    src={`data:image/svg+xml,${encodeURIComponent(opt.svg)}`}
                    alt={opt.name}
                    className="h-6 w-6"
                  />
                </div>
                <span className="text-[10px] text-gray-500">{opt.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
