import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Car, DollarSign, Home, Sparkles } from "lucide-react";
import { APPS } from "../data";
import { MagneticButton, Reveal } from "./ui";

const ICONS = { roomly: Home, tokitaki: DollarSign, dmv: Car, ai: Sparkles };

function OrbitalVisual() {
  const [active, setActive] = useState<string | null>(null);
  const radius = 42;

  return (
    <div className="relative w-full aspect-square max-w-[480px] mx-auto">
      {[1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-[8%] rounded-full border border-primary/15"
          animate={{ scale: [1, 1.08 + i * 0.04], opacity: [0.5, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: i * 1.2, ease: "easeOut" }}
        />
      ))}

      <div className="absolute inset-[18%] rounded-full border border-dashed border-border/50" />

      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl flex flex-col items-center justify-center text-white"
          style={{
            background: "linear-gradient(145deg, #3B82F6, #8B5CF6 50%, #F472B6)",
            boxShadow: "0 20px 60px rgba(59,130,246,0.45)",
          }}
        >
          <span className="text-3xl font-bold font-display">O</span>
          <span className="text-[9px] font-mono-label uppercase tracking-widest opacity-70 mt-1">
            Core
          </span>
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {APPS.map((app) => {
          const Icon = ICONS[app.id as keyof typeof ICONS];
          const rad = (app.angle * Math.PI) / 180;
          const x = 50 + radius * Math.cos(rad);
          const y = 50 + radius * Math.sin(rad);
          const isActive = active === app.id;

          return (
            <motion.div
              key={app.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <motion.button
                type="button"
                onMouseEnter={() => setActive(app.id)}
                onMouseLeave={() => setActive(null)}
                animate={{ scale: isActive ? 1.2 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col items-center gap-1.5 cursor-pointer"
              >
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center border transition-all duration-300"
                  style={{
                    background: isActive ? `${app.color}25` : "var(--card)",
                    borderColor: isActive ? `${app.color}60` : "var(--border)",
                    boxShadow: isActive ? `0 12px 40px ${app.color}40` : "0 4px 16px rgba(0,0,0,0.1)",
                  }}
                >
                  <Icon size={22} style={{ color: app.color }} />
                </div>
                <span
                  className="text-[10px] font-bold font-display px-2 py-0.5 rounded-full"
                  style={{
                    background: isActive ? `${app.color}20` : "var(--muted)",
                    color: isActive ? app.color : "var(--muted-foreground)",
                  }}
                >
                  {app.name}
                </span>
              </motion.button>
            </motion.div>
          );
        })}
      </motion.div>

      {active && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[88%] glass rounded-xl border border-border p-4 z-30 shadow-xl"
        >
          {(() => {
            const app = APPS.find((a) => a.id === active)!;
            return (
              <>
                <p className="text-sm font-bold font-display" style={{ color: app.color }}>
                  {app.name}
                </p>
                <p className="text-xs text-muted-foreground font-body mt-1">{app.desc}</p>
              </>
            );
          })()}
        </motion.div>
      )}
    </div>
  );
}

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${(i * 19 + 5) % 100}%`,
            top: `${(i * 27 + 9) % 100}%`,
            background: ["#3B82F6", "#8B5CF6", "#06B6D4", "#F472B6"][i % 4],
            opacity: 0.4,
          }}
          animate={{ y: [0, -25, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.22, 0.15] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full blur-[120px]"
          style={{ background: "#3B82F6" }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{ background: "#8B5CF6" }}
        />
        <motion.div
          animate={{ opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ background: "#F472B6" }}
        />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <FloatingParticles />
      </div>

      <div className="relative z-10 container-wide py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border glass text-[11px] font-mono-label text-muted-foreground mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                otipu.com · est. 2024
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold font-display leading-[1.05] tracking-tight mb-6">
                We build apps{" "}
                <span className="text-gradient">people love.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8 max-w-lg">
                Otipu creates colorful, practical software — from roommate management to AI
                productivity tools that simplify everyday life.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-3">
                <MagneticButton href="#products">
                  Explore products <ArrowRight size={15} />
                </MagneticButton>
                <MagneticButton href="#services" variant="outline">
                  Our services
                </MagneticButton>
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="flex gap-8 mt-10 pt-8 border-t border-border/60">
                {STATS_PREVIEW.map(([v, l]) => (
                  <div key={l}>
                    <p className="text-2xl font-bold font-display text-gradient-blue">{v}</p>
                    <p className="text-xs text-muted-foreground font-body mt-0.5">{l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="hidden sm:block">
            <div style={{ perspective: "1000px" }}>
              <motion.div
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: [-4, 4, -4], rotateX: [2, -2, 2] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              >
                <OrbitalVisual />
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const STATS_PREVIEW = [
  ["5+", "Products"],
  ["4.2k+", "Users"],
  ["98%", "Happy"],
];
