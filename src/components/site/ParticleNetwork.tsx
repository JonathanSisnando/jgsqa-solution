import { useEffect, useRef } from "react";

type Social = { kind: "instagram" | "facebook" | "google" | "ia"; url?: string };
const SOCIALS: Social[] = [
  { kind: "instagram", url: "https://instagram.com" },
  { kind: "facebook", url: "https://facebook.com" },
  { kind: "google", url: "https://ads.google.com" },
  { kind: "ia" },
];

interface P {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  social?: Social;
  img?: HTMLImageElement;
}

const NEON = "#0f973d";

function svgDataUrl(svg: string) {
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

const ICONS: Record<Social["kind"], string> = {
  instagram: svgDataUrl(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${NEON}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="${NEON}"/></svg>`,
  ),
  facebook: svgDataUrl(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${NEON}"><path d="M22 12a10 10 0 1 0-11.6 9.87v-6.99H7.9V12h2.5V9.8c0-2.47 1.47-3.83 3.72-3.83 1.08 0 2.2.19 2.2.19v2.42h-1.24c-1.22 0-1.6.76-1.6 1.54V12h2.72l-.44 2.88h-2.28v6.99A10 10 0 0 0 22 12z"/></svg>`,
  ),
  google: svgDataUrl(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#FBBC04" d="M8.4 2.6c.83-1.44 2.67-1.93 4.1-1.1 1.44.83 1.93 2.67 1.1 4.1L6.6 15.9c-.83 1.44-2.67 1.93-4.1 1.1-1.44-.83-1.93-2.67-1.1-4.1L8.4 2.6z"/><path fill="#4285F4" d="M15.6 8.1c-.83-1.44-.34-3.27 1.1-4.1 1.44-.83 3.27-.34 4.1 1.1l4 6.93c.83 1.44.34 3.27-1.1 4.1-1.44.83-3.27.34-4.1-1.1L15.6 8.1z" transform="translate(-1.3 0)"/><circle fill="#34A853" cx="5.05" cy="19.05" r="3.2"/></svg>`,
  ),
  ia: svgDataUrl(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${NEON}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="6" width="16" height="12" rx="3"/><circle cx="9" cy="12" r="1.2" fill="${NEON}"/><circle cx="15" cy="12" r="1.2" fill="${NEON}"/><path d="M12 2v4M8 18v3M16 18v3"/></svg>`,
  ),
};

export function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    const mouse = { x: -9999, y: -9999, active: false };

    const particles: P[] = [];

    function resize() {
      const parent = canvas!.parentElement!;
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function spawn() {
      particles.length = 0;
      const count = Math.max(60, Math.floor((width * height) / 18000));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: 1.4 + Math.random() * 1.6,
        });
      }
      // Add socials
      SOCIALS.forEach((s) => {
        const img = new Image();
        img.src = ICONS[s.kind];
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: 16,
          social: s,
          img,
        });
      });
    }

    function step() {
      ctx!.clearRect(0, 0, width, height);

      // update
      for (const p of particles) {
        // mouse repulsion — particles push away from cursor
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d = Math.hypot(dx, dy);
          const R = 140;
          if (d < R && d > 0.01) {
            const force = ((R - d) / R) * 0.9;
            p.vx += (dx / d) * force;
            p.vy += (dy / d) * force;
          }
        }
        // gentle velocity damping so particles don't run away
        p.vx *= 0.96;
        p.vy *= 0.96;
        // keep a minimum drift so they never fully stop
        const speed = Math.hypot(p.vx, p.vy);
        const minSpeed = p.social ? 0.25 : 0.15;
        if (speed < minSpeed) {
          const ang = Math.random() * Math.PI * 2;
          p.vx += Math.cos(ang) * 0.05;
          p.vy += Math.sin(ang) * 0.05;
        }
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < p.r) { p.x = p.r; p.vx *= -1; }
        if (p.x > width - p.r) { p.x = width - p.r; p.vx *= -1; }
        if (p.y < p.r) { p.y = p.r; p.vy *= -1; }
        if (p.y > height - p.r) { p.y = height - p.r; p.vy *= -1; }
      }

      // connections — normal to normal
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          if (a.social && b.social) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 130) {
            const alpha = (1 - d / 130) * 0.35;
            ctx!.strokeStyle = `rgba(15,151,61,${alpha})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      // connections — social to social (stronger, always visible)
      const socials = particles.filter(p => p.social);
      for (let i = 0; i < socials.length; i++) {
        for (let j = i + 1; j < socials.length; j++) {
          const a = socials[i];
          const b = socials[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 200) {
            const alpha = (1 - d / 200) * 0.5;
            ctx!.strokeStyle = `rgba(15,151,61,${alpha})`;
            ctx!.lineWidth = 1.2;
            ctx!.setLineDash([4, 4]);
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
            ctx!.setLineDash([]);
          }
        }
      }

      // mouse links — normal particles only
      if (mouse.active) {
        for (const a of particles) {
          if (a.social) continue;
          const dx = a.x - mouse.x;
          const dy = a.y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < 160) {
            const alpha = (1 - d / 160) * 0.6;
            ctx!.strokeStyle = `rgba(15,151,61,${alpha})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(mouse.x, mouse.y);
            ctx!.stroke();
          }
        }
      }

      // draw dots
      for (const p of particles) {
        if (p.social) {
          if (p.img && p.img.complete) {
            ctx!.save();
            ctx!.shadowColor = NEON;
            ctx!.shadowBlur = 12;
            ctx!.drawImage(p.img, p.x - p.r, p.y - p.r, p.r * 2, p.r * 2);
            ctx!.restore();
          }
        } else {
          ctx!.fillStyle = NEON;
          ctx!.shadowColor = NEON;
          ctx!.shadowBlur = 8;
          ctx!.beginPath();
          ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx!.fill();
          ctx!.shadowBlur = 0;
        }
      }
      raf = requestAnimationFrame(step);
    }

    function hitSocial(x: number, y: number) {
      for (const p of particles) {
        if (!p.social) continue;
        if (Math.hypot(p.x - x, p.y - y) <= p.r + 4) return p;
      }
      return null;
    }

    function onMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
      const hit = hitSocial(mouse.x, mouse.y);
      canvas!.style.cursor = hit ? "pointer" : "default";
    }
    function onLeave() {
      mouse.active = false;
      mouse.x = mouse.y = -9999;
      canvas!.style.cursor = "default";
    }
    function onClick(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      const hit = hitSocial(e.clientX - rect.left, e.clientY - rect.top);
      if (hit?.social?.url) window.open(hit.social.url, "_blank", "noopener");
    }
    function onResize() {
      resize();
      spawn();
    }

    resize();
    spawn();
    step();

    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);
    canvas.addEventListener("click", onClick);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      canvas.removeEventListener("click", onClick);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-auto absolute inset-0 z-10"
      aria-hidden="true"
    />
  );
}
