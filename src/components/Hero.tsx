import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Car, DollarSign, Home, Sparkles } from "lucide-react";
import { APPS } from "../data";
import { AnimatedHeadline, MagneticButton, Reveal } from "./ui";

const ICONS = { roomly: Home, tokitaki: DollarSign, dmv: Car, ai: Sparkles };

function MobileAppStrip() {
  return (
    <div className="mobile-scroll-x lg:hidden mt-8">
      {APPS.map((app, i) => {
        const Icon = ICONS[app.id as keyof typeof ICONS];
        return (
          <motion.a
            key={app.id}
            href="#products"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.08 }}
            className="flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-card min-w-[160px] touch-target"
            style={{ boxShadow: `0 4px 20px ${app.color}15` }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: `${app.color}20` }}
            >
              <Icon size={18} style={{ color: app.color }} />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold font-display truncate">{app.name}</p>
              <p className="text-[10px] text-muted-foreground font-body truncate">{app.tagline}</p>
            </div>
          </motion.a>
        );
      })}
    </div>
  );
}

function OrbitalVisual() {
  const [active, setActive] = useState<string | null>(null);
  const radius = 42;

  const setActiveApp = (id: string | null) => setActive(id);

  return (
    <div className="relative w-full aspect-square max-w-[300px] sm:max-w-[380px] lg:max-w-[480px] mx-auto">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-[8%] rounded-full border border-primary/15"
          animate={{ scale: [1, 1.06 + i * 0.03], opacity: [0.4, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: "easeOut" }}
        />
      ))}

      <div className="absolute inset-[18%] rounded-full border border-dashed border-border/50" />

      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-3xl flex flex-col items-center justify-center text-white"
          style={{
            background: "linear-gradient(145deg, #3B82F6, #8B5CF6 50%, #F472B6)",
            boxShadow: "0 20px 60px rgba(59,130,246,0.45)",
          }}
        >
          <span className="text-2xl sm:text-3xl font-extrabold font-display">O</span>
          <span className="text-[8px] sm:text-[9px] font-mono-label uppercase tracking-widest opacity-70 mt-0.5">
            Core
          </span>
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
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
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
              <motion.button
                type="button"
                onMouseEnter={() => setActiveApp(app.id)}
                onMouseLeave={() => setActiveApp(null)}
                onClick={() => setActiveApp(isActive ? null : app.id)}
                animate={{ scale: isActive ? 1.15 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col items-center gap-1 cursor-pointer touch-target"
              >
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center border transition-all duration-300"
                  style={{
                    background: isActive ? `${app.color}25` : "var(--card)",
                    borderColor: isActive ? `${app.color}60` : "var(--border)",
                    boxShadow: isActive ? `0 12px 40px ${app.color}40` : "0 4px 16px rgba(0,0,0,0.1)",
                  }}
                >
                  <Icon size={20} style={{ color: app.color }} />
                </div>
                <span
                  className="text-[9px] sm:text-[10px] font-bold font-display px-2 py-0.5 rounded-full"
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
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[92%] glass rounded-xl border border-border p-3 sm:p-4 z-30 shadow-xl"
        >
          {(() => {
            const app = APPS.find((a) => a.id === active)!;
            return (
              <>
                <p className="text-sm font-bold font-display" style={{ color: app.color }}>
                  {app.name}
                </p>
                <p className="text-xs text-muted-foreground font-body mt-0.5 leading-relaxed">{app.desc}</p>
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
      {Array.from({ length: 16 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${(i * 19 + 5) % 100}%`,
            top: `${(i * 27 + 9) % 100}%`,
            background: ["#3B82F6", "#8B5CF6", "#06B6D4", "#F472B6"][i % 4],
          }}
          animate={{ y: [0, -20, 0], opacity: [0.15, 0.5, 0.15], scale: [1, 1.4, 1] }}
          transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.12 }}
        />
      ))}
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute -top-32 -right-32 w-[min(700px,120vw)] h-[min(700px,120vw)] rounded-full blur-[100px]"
          style={{ background: "#3B82F6" }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.18, 0.1] }}
          transition={{ duration: 11, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-32 -left-32 w-[min(600px,100vw)] h-[min(600px,100vw)] rounded-full blur-[100px]"
          style={{ background: "#8B5CF6" }}
        />
        <motion.div
          animate={{ opacity: [0.06, 0.12, 0.06], scale: [1, 1.08, 1] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute top-1/4 right-0 w-[min(400px,80vw)] h-[min(400px,80vw)] rounded-full blur-[90px]"
          style={{ background: "#F472B6" }}
        />
        <div className="absolute inset-0 grid-bg opacity-25" />
        <FloatingParticles />
      </div>

      <div className="relative z-10 container-wide py-10 sm:py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <Reveal>
              <motion.div
                animate={{ boxShadow: ["0 0 0 0 rgba(16,185,129,0.4)", "0 0 0 8px rgba(16,185,129,0)", "0 0 0 0 rgba(16,185,129,0)"] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border glass text-[10px] sm:text-[11px] font-mono-label text-muted-foreground mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                otipu.com · est. 2024
              </motion.div>
            </Reveal>

            <Reveal delay={0.04}>
              <AnimatedHeadline />
            </Reveal>

            <Reveal delay={0.35}>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="text-base sm:text-lg text-muted-foreground font-body leading-relaxed mt-5 mb-7 max-w-lg"
              >
                Otipu builds practical software — from roommate management to AI productivity tools
                that simplify everyday life.
              </motion.p>
            </Reveal>

            <Reveal delay={0.42}>
              <div className="flex flex-col sm:flex-row gap-3">
                <MagneticButton href="#products">
                  Explore products <ArrowRight size={15} />
                </MagneticButton>
                <MagneticButton href="#services" variant="outline">
                  Our services
                </MagneticButton>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="grid grid-cols-3 gap-4 sm:flex sm:gap-8 mt-8 pt-7 border-t border-border/60">
                {STATS_PREVIEW.map(([v, l], i) => (
                  <motion.div
                    key={l}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65 + i * 0.08 }}
                  >
                    <p className="text-xl sm:text-2xl font-extrabold font-display text-gradient-blue">{v}</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground font-body mt-0.5">{l}</p>
                  </motion.div>
                ))}
              </div>
            </Reveal>

            <MobileAppStrip />
          </div>

          <Reveal delay={0.15} className="hidden lg:block">
            <div style={{ perspective: "1000px" }}>
              <motion.div
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: [-3, 3, -3], rotateX: [1.5, -1.5, 1.5] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
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
