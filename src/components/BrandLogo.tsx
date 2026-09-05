import { motion, useReducedMotion } from "motion/react";
import { cn } from "../lib/cn";

type LogoSize = "sm" | "md" | "lg" | "hero";

const SIZES: Record<LogoSize, string> = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-16 h-16 sm:w-20 sm:h-20",
  hero: "w-[min(100%,420px)] aspect-square",
};

export function BrandMark({
  size = "md",
  animated = false,
  className,
}: {
  size?: LogoSize;
  animated?: boolean;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const motionOn = animated && !reduced;

  return (
    <span className={cn("relative inline-flex items-center justify-center", SIZES[size], className)}>
      {motionOn && size === "hero" && (
        <span
          className="absolute inset-[8%] rounded-full blur-3xl animate-logo-glow"
          style={{
            background:
              "radial-gradient(circle, rgba(31,224,166,0.5) 0%, rgba(34,211,238,0.3) 45%, transparent 70%)",
          }}
          aria-hidden
        />
      )}
      <motion.img
        src="/logo.png"
        alt=""
        width={1024}
        height={1024}
        draggable={false}
        className={cn(
          "relative z-10 w-full h-full object-contain select-none drop-shadow-[0_20px_40px_rgba(4,120,87,0.3)]",
          motionOn && size === "hero" && "animate-logo-float"
        )}
        animate={
          motionOn && size !== "hero"
            ? { rotate: [0, 8, 0, -6, 0], y: [0, -2, 0] }
            : undefined
        }
        transition={
          motionOn && size !== "hero"
            ? { duration: 10, repeat: Infinity, ease: "easeInOut" }
            : undefined
        }
      />
    </span>
  );
}

export function Logo({
  compact = false,
  animated = true,
  tone = "dark",
}: {
  compact?: boolean;
  animated?: boolean;
  tone?: "dark" | "light";
}) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <BrandMark size={compact ? "sm" : "md"} animated={animated} />
      <span
        className={cn(
          "font-display font-extrabold tracking-tight",
          compact ? "text-base" : "text-lg",
          tone === "light" ? "text-white" : "text-foreground"
        )}
      >
        otipu
      </span>
    </span>
  );
}
