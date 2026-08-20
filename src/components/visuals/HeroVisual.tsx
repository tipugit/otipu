import { useRef, type MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { HERO_TAGS } from "../../data/site";
import { useDesktopHover } from "../../lib/hooks";

const TAGS = [
  { tag: HERO_TAGS[0], top: "6%", left: "8%", depth: 0.22 },
  { tag: HERO_TAGS[1], top: "14%", right: "2%", depth: 0.34 },
  { tag: HERO_TAGS[2], top: "38%", left: "-4%", depth: 0.28 },
  { tag: HERO_TAGS[3], top: "46%", right: "-2%", depth: 0.4 },
  { tag: HERO_TAGS[4], bottom: "28%", left: "2%", depth: 0.3 },
  { tag: HERO_TAGS[5], bottom: "18%", right: "6%", depth: 0.36 },
  { tag: HERO_TAGS[6], bottom: "4%", left: "22%", depth: 0.24 },
  { tag: HERO_TAGS[7], bottom: "2%", right: "18%", depth: 0.32 },
] as const;

export function HeroVisual() {
  const wrap = useRef<HTMLDivElement>(null);
  const desktop = useDesktopHover();
  const reduced = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 });
  const rotateX = useTransform(sy, [-40, 40], [8, -8]);
  const rotateY = useTransform(sx, [-40, 40], [-8, 8]);
  const glowX = useTransform(sx, (v) => `${50 + v * 0.35}%`);
  const glowY = useTransform(sy, (v) => `${46 + v * 0.3}%`);
  const ring1x = useTransform(sx, (v) => v * 0.15);
  const ring1y = useTransform(sy, (v) => v * 0.12);
  const ring2x = useTransform(sx, (v) => v * 0.22);
  const ring2y = useTransform(sy, (v) => v * 0.18);

  const onMove = (e: MouseEvent) => {
    if (!desktop || reduced || !wrap.current) return;
    const r = wrap.current.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 48);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 48);
  };

  return (
    <div
      ref={wrap}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative mx-auto w-full max-w-[540px] aspect-square"
    >
      <motion.div
        className="absolute w-[70%] h-[70%] rounded-full blur-3xl opacity-70"
        style={{
          left: glowX,
          top: glowY,
          x: "-50%",
          y: "-50%",
          background:
            "radial-gradient(circle, rgba(109,94,246,0.45), rgba(79,124,255,0.18), transparent 70%)",
        }}
        aria-hidden
      />

      <motion.div
        className="absolute inset-[8%] rounded-full border border-primary/15"
        animate={reduced ? undefined : { rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        style={{ x: ring1x, y: ring1y }}
        aria-hidden
      />
      <motion.div
        className="absolute inset-[18%] rounded-full border border-accent/20"
        animate={reduced ? undefined : { rotate: -360 }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        style={{ x: ring2x, y: ring2y }}
        aria-hidden
      />

      <motion.div
        className="absolute inset-[22%] flex items-center justify-center"
        style={{ rotateX, rotateY, transformPerspective: 900 }}
      >
        <BrandObject reduced={!!reduced} />
      </motion.div>

      {TAGS.map((item) => (
        <FloatingTag key={item.tag} item={item} sx={sx} sy={sy} />
      ))}
    </div>
  );
}

function FloatingTag({
  item,
  sx,
  sy,
}: {
  item: (typeof TAGS)[number];
  sx: MotionValue<number>;
  sy: MotionValue<number>;
}) {
  const x = useTransform(sx, (v) => v * item.depth);
  const y = useTransform(sy, (v) => v * item.depth);
  const pos = {
    top: "top" in item ? item.top : undefined,
    right: "right" in item ? item.right : undefined,
    bottom: "bottom" in item ? item.bottom : undefined,
    left: "left" in item ? item.left : undefined,
  };

  return (
    <motion.span
      className="absolute z-10 hidden sm:inline-flex items-center rounded-full border border-border bg-white/80 backdrop-blur-md px-3 py-1.5 text-[11px] font-semibold font-body text-foreground/80 shadow-sm"
      style={{ ...pos, x, y }}
    >
      {item.tag}
    </motion.span>
  );
}

function BrandObject({ reduced }: { reduced: boolean }) {
  return (
    <motion.div
      className="relative w-full h-full"
      animate={reduced ? undefined : { rotate: [0, 8, 0, -6, 0], y: [0, -10, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_30px_50px_rgba(79,70,229,0.28)]" aria-hidden>
        <defs>
          <linearGradient id="ribbon" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8b7cff" />
            <stop offset="45%" stopColor="#6d5ef6" />
            <stop offset="100%" stopColor="#3d6dff" />
          </linearGradient>
          <linearGradient id="ribbonInner" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c4b8ff" />
            <stop offset="100%" stopColor="#4f7cff" />
          </linearGradient>
          <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>
        <ellipse cx="200" cy="214" rx="92" ry="22" fill="rgba(79,70,229,0.18)" filter="url(#soft)" />
        <path
          d="M110 210 C 110 132, 290 132, 290 210 C 290 278, 150 300, 150 230 C 150 178, 250 170, 250 220 C 250 268, 170 268, 170 220"
          fill="none"
          stroke="url(#ribbon)"
          strokeWidth="36"
          strokeLinecap="round"
        />
        <path
          d="M110 210 C 110 132, 290 132, 290 210 C 290 278, 150 300, 150 230 C 150 178, 250 170, 250 220 C 250 268, 170 268, 170 220"
          fill="none"
          stroke="url(#ribbonInner)"
          strokeWidth="14"
          strokeLinecap="round"
          opacity="0.85"
        />
      </svg>
    </motion.div>
  );
}
