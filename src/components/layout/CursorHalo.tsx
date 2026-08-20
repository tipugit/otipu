import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useDesktopHover } from "../../lib/hooks";

export function CursorHalo() {
  const desktop = useDesktopHover();
  const [label, setLabel] = useState<string | null>(null);
  const pos = useRef({ x: 0, y: 0 });
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!desktop) return;

    let frame = 0;
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!frame) {
        frame = requestAnimationFrame(() => {
          if (el.current) {
            el.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
          }
          frame = 0;
        });
      }
      const target = (e.target as HTMLElement | null)?.closest("[data-cursor]");
      setLabel(target ? target.getAttribute("data-cursor") : null);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [desktop]);

  if (!desktop) return null;

  return (
    <div
      ref={el}
      className="pointer-events-none fixed top-0 left-0 z-[60] -translate-x-1/2 -translate-y-1/2 mix-blend-multiply"
      aria-hidden
    >
      <div
        className="w-10 h-10 rounded-full transition-transform duration-200"
        style={{
          background: "radial-gradient(circle, rgba(109,94,246,0.28), rgba(79,124,255,0.08) 60%, transparent 70%)",
          transform: label ? "scale(1.7)" : "scale(1)",
        }}
      />
      <AnimatePresence>
        {label && (
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="absolute left-1/2 top-full mt-1 -translate-x-1/2 rounded-full bg-navy px-2.5 py-1 text-[10px] font-semibold tracking-wide text-white"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
