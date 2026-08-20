import { useRef, type MouseEvent, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "../lib/cn";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className={cn(
          "rounded-full flex items-center justify-center text-white font-display font-bold shadow-[0_8px_24px_rgba(109,94,246,0.35)]",
          compact ? "w-8 h-8 text-[13px]" : "w-9 h-9 text-sm"
        )}
        style={{ background: "linear-gradient(135deg, #6d5ef6, #4f7cff)" }}
        aria-hidden
      >
        o
      </span>
      <span className={cn("font-display font-extrabold tracking-tight", compact ? "text-base" : "text-lg")}>
        otipu
      </span>
    </span>
  );
}

export function MagneticButton({
  children,
  href,
  to,
  variant = "primary",
  className,
  magnetic = false,
  type,
  onClick,
}: {
  children: ReactNode;
  href?: string;
  to?: string;
  variant?: "primary" | "outline" | "ghost" | "light";
  className?: string;
  magnetic?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const reduced = useReducedMotion();

  const onMove = (e: MouseEvent) => {
    if (!magnetic || reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.12}px, ${(e.clientY - r.top - r.height / 2) * 0.12}px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const styles = {
    primary: "text-white bg-brand shadow-[0_12px_28px_-10px_rgba(109,94,246,0.55)] hover:brightness-[1.04]",
    outline: "border border-border bg-white/70 text-foreground hover:border-primary/30 hover:bg-muted/60",
    ghost: "border border-white/20 text-white hover:bg-white/10",
    light: "bg-white text-navy hover:bg-white/95 shadow-lg",
  };

  const cls = cn(
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold font-body transition-[transform,filter,background-color,border-color] duration-200 min-h-[48px] w-full sm:w-auto",
    styles[variant],
    className
  );

  if (to) {
    return (
      <Link
        ref={ref as never}
        to={to}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={cls}
      >
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        ref={ref as never}
        href={href}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={cls}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as never}
      type={type ?? "button"}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cls}
    >
      {children}
    </button>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  y = 24,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  copy,
  align = "center",
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  copy?: ReactNode;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl mb-10 sm:mb-14", align === "center" ? "mx-auto text-center" : "")}>
      <p
        className={cn(
          "font-mono-label text-[11px] font-bold uppercase tracking-[0.22em] mb-3",
          light ? "text-white/50" : "text-primary"
        )}
      >
        {eyebrow}
      </p>
      {align === "center" && (
        <span className={cn("mx-auto mb-5 block h-0.5 w-10 rounded-full", light ? "bg-white/30" : "bg-primary")} />
      )}
      <h2
        className={cn(
          "text-[1.75rem] sm:text-4xl lg:text-[2.65rem] font-extrabold font-display tracking-tight leading-[1.15]",
          light ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {copy && (
        <p
          className={cn(
            "mt-4 font-body text-base sm:text-lg leading-relaxed",
            light ? "text-white/70" : "text-muted-foreground"
          )}
        >
          {copy}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: ReactNode;
  copy: ReactNode;
}) {
  return (
    <section className="relative pt-28 sm:pt-32 pb-14 sm:pb-16 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 0%, rgba(109,94,246,0.12), transparent 60%)",
        }}
        aria-hidden
      />
      <div className="container-wide relative">
        <p className="font-mono-label text-[11px] font-bold uppercase tracking-[0.22em] text-primary mb-4">
          {eyebrow}
        </p>
        <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold font-display tracking-tight leading-[1.12] max-w-4xl">
          {title}
        </h1>
        <p className="mt-5 text-muted-foreground font-body text-base sm:text-lg leading-relaxed max-w-2xl">
          {copy}
        </p>
      </div>
    </section>
  );
}

export function EmptyState({ title, body }: { title: string; body: string }) {
  return (
    <div className="card-premium px-8 py-16 text-center">
      <p className="font-display text-xl font-bold mb-2">{title}</p>
      <p className="text-muted-foreground font-body max-w-md mx-auto">{body}</p>
    </div>
  );
}
