import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Home, DollarSign, Car, Sparkles, Package } from "lucide-react";
import { APPS, BF, DF } from "../data";
import { MagneticButton, Reveal } from "./ui";

const ICONS = { roomly: Home, tokitaki: DollarSign, dmv: Car, ai: Sparkles, future: Package };

function OrbitalHero() {
  const [active, setActive] = useState<string | null>(null);
  const radius = 148;

  return (
    <div className="relative w-full aspect-square max-w-[520px] mx-auto">
      {/* Pulse rings */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border border-primary/10"
          animate={{ scale: [1, 1.15 + i * 0.08], opacity: [0.4, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 1.2, ease: "easeOut" }}
        />
      ))}

      {/* Orbit path */}
      <div
        className="absolute inset-[12%] rounded-full border border-dashed border-border/60"
        style={{ boxShadow: "inset 0 0 60px rgba(37,99,235,0.06)" }}
      />

      {/* Center hub */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="w-28 h-28 sm:w-32 sm:h-32 rounded-[2rem] flex flex-col items-center justify-center text-white shadow-2xl"
          style={{
            background: "linear-gradient(145deg, #2563EB 0%, #7C3AED 60%, #FF6B4A 130%)",
            boxShadow: "0 24px 80px rgba(37,99,235,0.45), 0 0 0 1px rgba(255,255,255,0.1) inset",
          }}
        >
          <span className="text-3xl font-extrabold" style={{ fontFamily: DF }}>
            O
          </span>
          <span className="text-[10px] font-semibold tracking-widest uppercase opacity-80 mt-1">
            Core
          </span>
        </div>
      </motion.div>

      {/* Orbiting nodes */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        {APPS.map((app) => {
          const Icon = ICONS[app.id as keyof typeof ICONS];
          const rad = (app.angle * Math.PI) / 180;
          const x = 50 + (radius / 2.6) * Math.cos(rad);
          const y = 50 + (radius / 2.6) * Math.sin(rad);
          const isActive = active === app.id;

          return (
            <motion.div
              key={app.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
              animate={{ rotate: -360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              onMouseEnter={() => setActive(app.id)}
              onMouseLeave={() => setActive(null)}
            >
              <motion.button
                type="button"
                className="relative flex flex-col items-center gap-1.5 cursor-pointer"
                animate={{ scale: isActive ? 1.15 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center border transition-all duration-300"
                  style={{
                    background: isActive ? `${app.color}25` : "var(--card)",
                    borderColor: isActive ? `${app.color}60` : "var(--border)",
                    boxShadow: isActive
                      ? `0 16px 48px ${app.color}40, 0 0 0 1px ${app.color}30`
                      : "0 8px 24px rgba(0,0,0,0.08)",
                  }}
                >
                  <Icon size={22} style={{ color: app.color }} />
                </div>
                <span
                  className="text-[10px] font-bold whitespace-nowrap px-2 py-0.5 rounded-full"
                  style={{
                    background: isActive ? `${app.color}20` : "var(--muted)",
                    color: isActive ? app.color : "var(--muted-foreground)",
                    fontFamily: DF,
                  }}
                >
                  {app.name}
                </span>
              </motion.button>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Active detail card */}
      {active && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-30 glass rounded-2xl border border-border p-4 shadow-2xl"
        >
          {(() => {
            const app = APPS.find((a) => a.id === active)!;
            return (
              <>
                <p className="text-sm font-extrabold" style={{ fontFamily: DF, color: app.color }}>
                  {app.name}
                  <span className="ml-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                    {app.tag}
                  </span>
                </p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{app.desc}</p>
              </>
            );
          })()}
        </motion.div>
      )}
    </div>
  );
}

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {Array.from({ length: 24 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{
            left: `${(i * 17 + 7) % 100}%`,
            top: `${(i * 23 + 11) % 100}%`,
          }}
          animate={{
            y: [0, -30 - (i % 5) * 10, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + (i % 4),
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
      {/* Aurora mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/2 -right-1/4 w-[900px] h-[900px] rounded-full blur-[140px] opacity-20"
          style={{ background: "radial-gradient(circle, #2563EB, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], x: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -bottom-1/3 -left-1/4 w-[800px] h-[800px] rounded-full blur-[120px] opacity-15"
          style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)" }}
        />
        <motion.div
          animate={{ opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{ background: "#FF6B4A" }}
        />
        <div className="absolute inset-0 grid-bg opacity-40 dark:opacity-25" />
        <Particles />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <Reveal>
              <div
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border glass text-[11px] font-semibold text-muted-foreground mb-8 tracking-widest uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                otipu.com — crafting since 2024
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1
                className="text-[2.75rem] sm:text-6xl lg:text-[4.25rem] font-extrabold leading-[1.02] tracking-[-0.035em] mb-6"
                style={{ fontFamily: DF }}
              >
                Building digital
                <br />
                products{" "}
                <span className="text-gradient">people love.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p
                className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg"
                style={{ fontFamily: BF }}
              >
                Otipu creates practical software, intelligent tools, and beautifully designed
                experiences that simplify everyday life.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="flex flex-wrap gap-3">
                <MagneticButton href="#products">
                  Explore Products <ArrowRight size={15} />
                </MagneticButton>
                <MagneticButton href="#ecosystem" variant="outline">
                  View Ecosystem
                </MagneticButton>
              </div>
            </Reveal>

            <Reveal delay={0.36}>
              <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-border/60">
                {[
                  ["5+", "Products"],
                  ["4.2k+", "Users"],
                  ["98%", "Satisfaction"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <p className="text-2xl font-extrabold leading-none" style={{ fontFamily: DF }}>
                      {v}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="hidden sm:block">
            <OrbitalHero />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
