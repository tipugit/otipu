import { motion, useReducedMotion } from "motion/react";
import { cn } from "../lib/cn";

/** Soft, faded brand aurora that drifts slowly behind content. */
export function SoftAurora({
  className,
  intensity = "default",
}: {
  className?: string;
  intensity?: "subtle" | "default" | "strong";
}) {
  const reduced = useReducedMotion();
  const opacity =
    intensity === "subtle" ? "opacity-50" : intensity === "strong" ? "opacity-90" : "opacity-70";

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        opacity,
        className
      )}
      aria-hidden
    >
      <div
        className={cn(
          "aurora-blob -top-[12%] -left-[8%] h-[42vw] w-[42vw] max-h-[520px] max-w-[520px]",
          !reduced && "animate-aurora-a"
        )}
        style={{
          background: "radial-gradient(circle, rgba(56,198,255,0.35) 0%, transparent 68%)",
        }}
      />
      <div
        className={cn(
          "aurora-blob top-[8%] -right-[10%] h-[48vw] w-[48vw] max-h-[580px] max-w-[580px]",
          !reduced && "animate-aurora-b"
        )}
        style={{
          background: "radial-gradient(circle, rgba(107,92,255,0.32) 0%, transparent 70%)",
        }}
      />
      <div
        className={cn(
          "aurora-blob bottom-[-18%] left-[22%] h-[40vw] w-[40vw] max-h-[480px] max-w-[480px]",
          !reduced && "animate-aurora-c"
        )}
        style={{
          background: "radial-gradient(circle, rgba(155,108,255,0.22) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.35] hide-mobile-fx"
        style={{
          backgroundImage:
            "linear-gradient(rgba(107,92,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(107,92,255,0.045) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 65% 55% at 50% 35%, black, transparent)",
        }}
      />
    </div>
  );
}

export function AnimatedGrid({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none opacity-[0.3] hide-mobile-fx ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(rgba(107,92,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(107,92,255,0.06) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
      }}
      aria-hidden
    />
  );
}

export function GradientOrb({
  className,
  color = "#6b5cff",
  delay = 0,
}: {
  className?: string;
  color?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      className={`absolute rounded-full blur-3xl pointer-events-none ${className ?? ""}`}
      style={{ background: color }}
      animate={reduced ? undefined : { x: [0, 24, 0], y: [0, -18, 0] }}
      transition={{ duration: 14, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export function FloatingLines({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none hide-mobile-fx ${className}`}
      aria-hidden
    >
      <motion.path
        d="M-40 180 C 200 80, 420 280, 720 140 S 1100 60, 1400 200"
        fill="none"
        stroke="rgba(107,92,255,0.12)"
        strokeWidth="1.2"
        initial={reduced ? false : { pathLength: 0, opacity: 0 }}
        whileInView={reduced ? undefined : { pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.2, ease: "easeInOut" }}
      />
      <motion.path
        d="M-20 320 C 260 420, 480 220, 780 340 S 1180 420, 1500 280"
        fill="none"
        stroke="rgba(56,198,255,0.12)"
        strokeWidth="1.2"
        initial={reduced ? false : { pathLength: 0, opacity: 0 }}
        whileInView={reduced ? undefined : { pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.4, delay: 0.2, ease: "easeInOut" }}
      />
    </svg>
  );
}

export function GradientMesh({ className = "" }: { className?: string }) {
  return <SoftAurora className={className} intensity="default" />;
}

export function ParticleField() {
  const reduced = useReducedMotion();
  const dots = [
    [12, 18],
    [78, 22],
    [34, 70],
    [88, 64],
    [22, 44],
    [62, 12],
    [50, 82],
  ];

  return (
    <div className="absolute inset-0 pointer-events-none hide-mobile-fx" aria-hidden>
      {dots.map(([x, y], i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/35"
          style={{ left: `${x}%`, top: `${y}%` }}
          animate={reduced ? undefined : { opacity: [0.15, 0.7, 0.15], y: [0, -8, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
    </div>
  );
}

export function MouseGlow({ x, y }: { x: number; y: number }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 hide-mobile-fx"
      style={{
        background: `radial-gradient(420px circle at ${x}px ${y}px, rgba(107,92,255,0.1), transparent 45%)`,
      }}
      aria-hidden
    />
  );
}
