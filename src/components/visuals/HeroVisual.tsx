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
import { BrandMark } from "../BrandLogo";

const TAGS = [
  { tag: HERO_TAGS[0], top: "4%", left: "0%", depth: 0.2 },
  { tag: HERO_TAGS[1], top: "12%", right: "0%", depth: 0.32 },
  { tag: HERO_TAGS[2], top: "36%", left: "-6%", depth: 0.26 },
  { tag: HERO_TAGS[3], top: "42%", right: "-4%", depth: 0.38 },
  { tag: HERO_TAGS[4], bottom: "30%", left: "-2%", depth: 0.28 },
  { tag: HERO_TAGS[5], bottom: "22%", right: "0%", depth: 0.34 },
  { tag: HERO_TAGS[6], bottom: "6%", left: "18%", depth: 0.22 },
  { tag: HERO_TAGS[7], bottom: "4%", right: "14%", depth: 0.3 },
] as const;

export function HeroVisual() {
  const wrap = useRef<HTMLDivElement>(null);
  const desktop = useDesktopHover();
  const reduced = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 18, mass: 0.55 });
  const sy = useSpring(my, { stiffness: 55, damping: 18, mass: 0.55 });
  const rotateX = useTransform(sy, [-36, 36], [7, -7]);
  const rotateY = useTransform(sx, [-36, 36], [-7, 7]);
  const ring1x = useTransform(sx, (v) => v * 0.12);
  const ring1y = useTransform(sy, (v) => v * 0.1);
  const ring2x = useTransform(sx, (v) => v * 0.2);
  const ring2y = useTransform(sy, (v) => v * 0.16);

  const onMove = (e: MouseEvent) => {
    if (!desktop || reduced || !wrap.current) return;
    const r = wrap.current.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 40);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 40);
  };

  return (
    <div
      ref={wrap}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative mx-auto w-full max-w-[460px] aspect-square"
    >
      <div
        className="absolute inset-[12%] rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(31,224,166,0.35), rgba(34,211,238,0.22), transparent 70%)",
        }}
        aria-hidden
      />

      <motion.div
        className="absolute inset-[6%] rounded-full border border-white/10"
        animate={reduced ? undefined : { rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        style={{ x: ring1x, y: ring1y }}
        aria-hidden
      />
      <motion.div
        className="absolute inset-[16%] rounded-full border border-accent/20"
        animate={reduced ? undefined : { rotate: -360 }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        style={{ x: ring2x, y: ring2y }}
        aria-hidden
      />
      <div
        className="absolute left-1/2 top-[84%] -translate-x-1/2 h-[16%] w-[56%] rounded-full blur-2xl opacity-70"
        style={{ background: "radial-gradient(ellipse, rgba(0,0,0,0.55) 0%, transparent 72%)" }}
        aria-hidden
      />

      <motion.div
        className="absolute inset-[10%] flex items-center justify-center"
        style={{ rotateX, rotateY, transformPerspective: 900 }}
      >
        <BrandMark size="hero" animated className="w-full h-full" />
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
      className="absolute z-10 hidden sm:inline-flex items-center rounded-full border border-white/80 bg-white/90 backdrop-blur-md px-3 py-1.5 text-[11px] font-semibold font-body text-foreground/80 shadow-[0_8px_24px_-12px_rgba(4,19,15,0.45)]"
      style={{ ...pos, x, y }}
    >
      {item.tag}
    </motion.span>
  );
}
