import { motion, useReducedMotion } from "motion/react";

export function AnimatedGrid({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none opacity-[0.35] hide-mobile-fx ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(rgba(109,94,246,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(109,94,246,0.07) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
      }}
      aria-hidden
    />
  );
}

export function GradientOrb({
  className,
  color = "#6d5ef6",
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
        stroke="rgba(109,94,246,0.12)"
        strokeWidth="1.2"
        initial={reduced ? false : { pathLength: 0, opacity: 0 }}
        whileInView={reduced ? undefined : { pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.2, ease: "easeInOut" }}
      />
      <motion.path
        d="M-20 320 C 260 420, 480 220, 780 340 S 1180 420, 1500 280"
        fill="none"
        stroke="rgba(79,124,255,0.1)"
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
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        background:
          "radial-gradient(ellipse 50% 40% at 15% 20%, rgba(109,94,246,0.14), transparent), radial-gradient(ellipse 45% 35% at 90% 10%, rgba(79,124,255,0.12), transparent)",
      }}
      aria-hidden
    />
  );
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
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          style={{ left: `${x}%`, top: `${y}%` }}
          animate={reduced ? undefined : { opacity: [0.2, 0.8, 0.2], y: [0, -8, 0] }}
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
        background: `radial-gradient(420px circle at ${x}px ${y}px, rgba(109,94,246,0.1), transparent 45%)`,
      }}
      aria-hidden
    />
  );
}
