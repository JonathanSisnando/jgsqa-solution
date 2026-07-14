export function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#home"
      className="group relative inline-flex flex-col leading-none"
      aria-label="JGSQA — voltar ao topo"
    >
      <span className="absolute -top-0.5 -right-1 h-2 w-2 rotate-45 bg-[var(--neon)] shadow-[0_0_8px_var(--neon)]" />
      <span className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">
        <span className="opacity-70">&lt;</span> JGSQA{" "}
        <span className="opacity-70">&gt;</span>
        <span className="blink-cursor ml-0.5 text-[var(--neon)]">|</span>
      </span>
      <span className="mt-0.5 text-[10px] font-medium tracking-[0.3em] text-[var(--foreground)]/50">
        SOLUÇÕES DIGITAIS
      </span>
    </a>
  );
}
