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
  {
    name: "K Pixel",
    desc: "K em estilo pixel art 8-bit",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect width="32" height="32" rx="6" fill="${BG}"/>
      <rect x="16" y="16" width="2" height="2" fill="${NEON}"/>
      <rect x="18" y="16" width="2" height="2" fill="${NEON}"/>
      <rect x="14" y="18" width="2" height="2" fill="${NEON}"/>
      <rect x="18" y="18" width="2" height="2" fill="${NEON}"/>
      <rect x="12" y="20" width="2" height="2" fill="${NEON}"/>
      <rect x="14" y="20" width="2" height="2" fill="${NEON}"/>
      <rect x="18" y="20" width="2" height="2" fill="${NEON}"/>
      <rect x="10" y="22" width="2" height="2" fill="${NEON}"/>
      <rect x="12" y="22" width="2" height="2" fill="${NEON}"/>
      <rect x="18" y="22" width="2" height="2" fill="${NEON}"/>
      <rect x="10" y="24" width="2" height="2" fill="${NEON}"/>
      <rect x="18" y="24" width="2" height="2" fill="${NEON}"/>
    </svg>`,
  },
  {
    name: "K Gradient",
    desc: "K com gradiente neon-azul",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <defs>
        <linearGradient id="kg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${NEON}"/>
          <stop offset="100%" stop-color="#2563eb"/>
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="6" fill="${BG}"/>
      <text x="16" y="23" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="22" fill="url(#kg)">K</text>
    </svg>`,
  },
  {
    name: "K Outline",
    desc: "K apenas contorno fino",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect width="32" height="32" rx="6" fill="transparent"/>
      <text x="16" y="23" text-anchor="middle" font-family="Arial,sans-serif" font-weight="400" font-size="22" fill="none" stroke="${NEON}" stroke-width="1.5">K</text>
    </svg>`,
  },
  {
    name: "$ K",
    desc: "K como prompt de terminal",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect width="32" height="32" rx="6" fill="${BG}"/>
      <text x="8" y="23" font-family="monospace" font-weight="700" font-size="14" fill="${NEON}">$ K</text>
      <rect x="6" y="9" width="2" height="14" rx="0.5" fill="${NEON}" opacity="0.5">
        <animate attributeName="opacity" values="0;1;0" dur="0.8s" repeatCount="indefinite"/>
      </rect>
    </svg>`,
  },
  {
    name: "K Hex",
    desc: "K em hexágono neon",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <polygon points="16,2 28,8 28,24 16,30 4,24 4,8" fill="${BG}" stroke="${NEON}" stroke-width="1.5"/>
      <text x="16" y="22" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="16" fill="${NEON}">K</text>
    </svg>`,
  },
  {
    name: "K Circuit",
    desc: "K com traços de circuito",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect width="32" height="32" rx="6" fill="${BG}"/>
      <text x="16" y="23" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="20" fill="${NEON}">K</text>
      <circle cx="26" cy="6" r="1.5" fill="${NEON}" opacity="0.6"/>
      <circle cx="6" cy="26" r="1.5" fill="${NEON}" opacity="0.6"/>
      <line x1="24.5" y1="7.5" x2="18" y2="12" stroke="${NEON}" stroke-width="0.6" opacity="0.3"/>
      <line x1="7.5" y1="24.5" x2="14" y2="18" stroke="${NEON}" stroke-width="0.6" opacity="0.3"/>
    </svg>`,
  },
  {
    name: "K Bracket",
    desc: "[K] com colchetes",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect width="32" height="32" rx="6" fill="${BG}"/>
      <text x="16" y="23" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="18" fill="${NEON}">[K]</text>
    </svg>`,
  },
  {
    name: "K Glow",
    desc: "K com brilho neon difuso",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width="32" height="32" rx="6" fill="${BG}"/>
      <text x="16" y="23" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="22" fill="${NEON}" filter="url(#glow)">K</text>
    </svg>`,
  },
  {
    name: "K Diamond",
    desc: "K em losango verde",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <polygon points="16,2 28,16 16,30 4,16" fill="${NEON}"/>
      <text x="16" y="21" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="16" fill="${BG}">K</text>
    </svg>`,
  },
  {
    name: "K Corner",
    desc: "K minimalista no canto",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect width="32" height="32" rx="6" fill="${BG}"/>
      <text x="6" y="12" font-family="Arial,sans-serif" font-weight="700" font-size="11" fill="${NEON}">K</text>
      <rect x="0" y="0" width="4" height="4" rx="0.5" fill="${NEON}" opacity="0.6"/>
      <rect x="28" y="0" width="4" height="4" rx="0.5" fill="${NEON}" opacity="0.6"/>
      <rect x="0" y="28" width="4" height="4" rx="0.5" fill="${NEON}" opacity="0.6"/>
      <rect x="28" y="28" width="4" height="4" rx="0.5" fill="${NEON}" opacity="0.6"/>
    </svg>`,
  },
  {
    name: "K Speed",
    desc: "K com traços de movimento",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect width="32" height="32" rx="6" fill="${BG}"/>
      <text x="16" y="23" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="20" fill="${NEON}">K</text>
      <line x1="24" y1="6" x2="28" y2="6" stroke="${NEON}" stroke-width="0.8" opacity="0.5"/>
      <line x1="22" y1="9" x2="28" y2="9" stroke="${NEON}" stroke-width="0.8" opacity="0.3"/>
      <line x1="20" y1="12" x2="26" y2="12" stroke="${NEON}" stroke-width="0.8" opacity="0.2"/>
    </svg>`,
  },
  {
    name: "K Shield",
    desc: "K em escudo verde",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path d="M16 2 L28 8 L28 18 Q28 26 16 30 Q4 26 4 18 L4 8 Z" fill="${BG}" stroke="${NEON}" stroke-width="1.5"/>
      <text x="16" y="22" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="16" fill="${NEON}">K</text>
    </svg>`,
  },
  {
    name: "K Morse",
    desc: "K em código morse",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect width="32" height="32" rx="6" fill="${BG}"/>
      <rect x="10" y="8" width="12" height="3" rx="1" fill="${NEON}"/>
      <rect x="10" y="14" width="4" height="3" rx="1" fill="${NEON}"/>
      <rect x="10" y="20" width="12" height="3" rx="1" fill="${NEON}"/>
      <text x="16" y="31" text-anchor="middle" font-family="Arial,sans-serif" font-size="5" fill="${NEON}" opacity="0.4">K</text>
    </svg>`,
  },
  {
    name: "K Mono",
    desc: "K em fonte monoespaçada bold",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect width="32" height="32" rx="6" fill="${BG}"/>
      <text x="16" y="23" text-anchor="middle" font-family="Courier,monospace" font-weight="900" font-size="22" fill="${NEON}">K</text>
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
