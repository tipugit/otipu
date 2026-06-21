import { useEffect, useState, useRef, type ReactNode, type MouseEvent } from "react";
import { motion } from "motion/react";
import { DF } from "../data";

export function useScrolled(threshold = 24) {
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

export function MagneticButton({
  children,
  href = "#",
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    ref.current.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  const base =
    "relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold overflow-hidden transition-transform duration-200 ease-out select-none";

  const variants = {
    primary: {
      className: `${base} text-white ${className}`,
      style: {
        background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 55%, #FF6B4A 120%)",
        boxShadow: "0 12px 40px rgba(37,99,235,0.35), 0 2px 8px rgba(0,0,0,0.12)",
        fontFamily: DF,
      },
    },
    outline: {
      className: `${base} text-foreground border border-border bg-card/60 hover:bg-muted/50 ${className}`,
      style: { fontFamily: DF },
    },
    ghost: {
      className: `${base} text-white/90 border border-white/20 hover:bg-white/10 ${className}`,
      style: { fontFamily: DF },
    },
  };

  const v = variants[variant];

  return (
    <a
      ref={ref}
      href={href}
      className={v.className}
      style={v.style}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {variant === "primary" && (
        <motion.span
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
            skewX: "-12deg",
          }}
          animate={{ x: ["-160%", "160%"] }}
          transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </a>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p
      className="text-[11px] font-bold tracking-[0.22em] uppercase text-primary/70 mb-3"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {children}
    </p>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CursorGlow() {
  const pos = useMousePosition();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    window.addEventListener("mouseenter", show);
    document.addEventListener("mouseleave", hide);
    return () => {
      window.removeEventListener("mouseenter", show);
      document.removeEventListener("mouseleave", hide);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] hidden lg:block transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(37,99,235,0.06), transparent 40%)`,
      }}
      aria-hidden
    />
  );
}
