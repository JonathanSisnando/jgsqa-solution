import { useEffect, useState } from "react";

export function Typewriter({ text, className = "" }: { text: string; className?: string }) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    let cancelled = false;
    function tick() {
      if (cancelled) return;
      i++;
      setOut(text.slice(0, i));
      if (i < text.length) {
        const delay = 25 + Math.random() * 30;
        setTimeout(tick, delay);
      }
    }
    tick();
    return () => {
      cancelled = true;
    };
  }, [text]);
  return (
    <p className={className}>
      {out}
      <span className="blink-cursor ml-0.5 text-[var(--neon)]">|</span>
    </p>
  );
}
