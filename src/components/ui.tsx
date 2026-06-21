import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "motion/react";

export function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

export function useMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: globalThis.MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return pos;
}

export function CursorGlow() {
  const pos = useMousePosition();
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 hidden lg:block"
      style={{
        background: `radial-gradient(500px circle at ${pos.x}px ${pos.y}px, rgba(59,130,246,0.07), transparent 40%)`,
      }}
      aria-hidden
    />
  );
}

export function MagneticButton({
  children,
  href = "#",
  variant = "primary",
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.15}px, ${(e.clientY - r.top - r.height / 2) * 0.15}px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const styles = {
    primary:
      "relative text-white overflow-hidden shadow-lg shadow-blue-500/25",
    outline: "border border-border bg-card/60 text-foreground hover:bg-muted/50",
    ghost: "border border-white/20 text-white hover:bg-white/10",
  };

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold font-body transition-transform duration-200 w-full sm:w-auto min-h-[48px] ${styles[variant]}`}
      style={
        variant === "primary"
          ? { background: "linear-gradient(135deg, #3B82F6, #8B5CF6, #F472B6)" }
          : undefined
      }
    >
      {variant === "primary" && (
        <motion.span
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)",
            skewX: "-12deg",
          }}
          animate={{ x: ["-160%", "160%"] }}
          transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 2 }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </a>
  );
}

export function AnimatedHeadline() {
  const words = [
    { word: "Creating", className: "text-foreground" },
    { word: "Meaningful", className: "text-gradient animate-gradient-shift" },
    { word: "Digital", className: "text-gradient animate-gradient-shift" },
    { word: "Solutions", className: "text-gradient animate-gradient-shift" },
    { word: "for", className: "text-foreground" },
    { word: "Everyday", className: "text-gradient-gold animate-gradient-shift" },
    { word: "Life", className: "text-gradient-gold animate-gradient-shift" },
  ];

  const [useMotion, setUseMotion] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    setUseMotion(!reduced && !mobile);
  }, []);

  const headingClass =
    "text-[1.75rem] min-[400px]:text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold font-display leading-[1.18] tracking-tight";

  if (!useMotion) {
    return (
      <h1 className={headingClass}>
        {words.map((w, i) => (
          <span
            key={w.word}
            className={`hero-word inline-block mr-[0.28em] last:mr-0 ${w.className}`}
            style={{ animationDelay: `${0.04 + i * 0.045}s` }}
          >
            {w.word}
          </span>
        ))}
      </h1>
    );
  }

  return (
    <h1 className={headingClass}>
      {words.map((w, i) => (
        <span key={w.word} className="inline-block overflow-hidden mr-[0.28em] last:mr-0">
          <motion.span
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: 0.04 + i * 0.055,
              ease: [0.23, 1, 0.32, 1],
            }}
            className={`inline-block ${w.className}`}
          >
            {w.word}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono-label text-[11px] font-bold uppercase tracking-[0.2em] text-primary/80 mb-3">
      {children}
    </p>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  y = 28,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.23, 1, 0.32, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function TiltCard({
  children,
  className = "",
  glowColor = "#3B82F6",
}: {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [glow, setGlow] = useState({ x: 50, y: 50 });
  const [canTilt, setCanTilt] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (min-width: 768px)");
    setCanTilt(mq.matches);
    const fn = () => setCanTilt(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  const onMove = (e: MouseEvent) => {
    if (!canTilt || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setTilt({ x: (py - 0.5) * 18, y: -(px - 0.5) * 18 });
    setGlow({ x: px * 100, y: py * 100 });
  };

  return (
    <div style={{ perspective: "900px" }} className={className}>
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setTilt({ x: 0, y: 0 });
          setHovered(false);
        }}
        style={{
          transform: canTilt ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` : undefined,
          transition: hovered ? "transform 0.1s ease" : "transform 0.5s cubic-bezier(0.23,1,0.32,1)",
          transformStyle: "preserve-3d",
          boxShadow: hovered && canTilt
            ? `0 24px 60px ${glowColor}30, 0 0 0 1px ${glowColor}40`
            : "0 8px 32px rgba(0,0,0,0.12)",
        }}
        className="relative rounded-2xl border border-border bg-card overflow-hidden h-full"
      >
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, ${glowColor}20, transparent 65%)`,
          }}
        />
        <div style={{ transform: "translateZ(30px)" }}>{children}</div>
      </div>
    </div>
  );
}
