import { useRef, type MouseEvent, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "../lib/cn";

export { Logo, BrandMark } from "./BrandLogo";

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
    primary:
      "text-accent-foreground bg-accent shadow-[0_14px_32px_-14px_rgba(31,224,166,0.55)] hover:brightness-[1.04]",
    outline:
      "border border-border/80 bg-white/80 text-foreground hover:border-primary/35 hover:bg-white shadow-sm",
    ghost: "border border-white/20 text-white hover:bg-white/10",
    light: "bg-white text-navy hover:bg-white/95 shadow-lg",
  };

  const cls = cn(
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold font-body transition-[transform,filter,background-color,border-color,box-shadow] duration-200 min-h-[48px] w-full sm:w-auto",
    styles[variant],
    className
  );

  if (to) {
    return (
      <Link ref={ref as never} to={to} onMouseMove={onMove} onMouseLeave={onLeave} className={cls}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a ref={ref as never} href={href} onMouseMove={onMove} onMouseLeave={onLeave} className={cls}>
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
  y = 28,
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
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
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
    <div
      className={cn(
        "mb-10 sm:mb-12",
        align === "center" ? "mx-auto text-center max-w-xl" : "max-w-xl"
      )}
    >
      <p
        className={cn(
          "inline-flex items-center gap-2 font-mono-label text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] mb-4",
          light ? "text-white/55" : "text-primary"
        )}
      >
        <span
          className={cn("h-1 w-1 rounded-full", light ? "bg-white/50" : "bg-primary")}
          aria-hidden
        />
        {eyebrow}
      </p>
      <h2
        className={cn(
          "text-[1.65rem] sm:text-[2.15rem] lg:text-[2.4rem] font-extrabold font-display tracking-tight leading-[1.18]",
          light ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {copy && (
        <p
          className={cn(
            "mt-4 font-body text-[0.95rem] sm:text-base leading-[1.7]",
            light ? "text-white/65" : "text-muted-foreground",
            align === "center" && "mx-auto"
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
    <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-14 overflow-hidden">
      <div className="container-wide relative">
        <p className="inline-flex items-center gap-2 font-mono-label text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-4">
          <span className="h-1 w-1 rounded-full bg-primary" aria-hidden />
          {eyebrow}
        </p>
        <h1 className="text-[1.9rem] sm:text-4xl lg:text-[2.85rem] font-extrabold font-display tracking-tight leading-[1.15] max-w-2xl">
          {title}
        </h1>
        <p className="mt-5 text-muted-foreground font-body text-[0.95rem] sm:text-base leading-[1.7] max-w-xl">
          {copy}
        </p>
      </div>
    </section>
  );
}

export function EmptyState({ title, body }: { title: string; body: string }) {
  return (
    <div className="card-premium px-8 py-14 text-center">
      <p className="font-display text-xl font-bold mb-2">{title}</p>
      <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-md mx-auto">{body}</p>
    </div>
  );
}
