import { useState } from "react";
import { motion } from "motion/react";
import { Brain, Globe, Smartphone, Settings, Chrome, Code2 } from "lucide-react";
import { SERVICES, DF } from "../data";
import { MagneticButton, Reveal, SectionLabel } from "./ui";

const ICONS = {
  ai: Brain,
  web: Globe,
  mobile: Smartphone,
  auto: Settings,
  ext: Chrome,
  custom: Code2,
};

export function ServicesSection() {
  const [active, setActive] = useState<(typeof SERVICES)[number]["id"]>(SERVICES[0].id);
  const current = SERVICES.find((s) => s.id === active)!;
  const Icon = ICONS[current.id as keyof typeof ICONS];

  return (
    <section
      id="services"
      className="relative py-28 lg:py-36 overflow-hidden transition-colors duration-700"
      style={{
        background: `radial-gradient(ellipse at 30% 50%, ${current.color}08 0%, transparent 60%)`,
      }}
    >
      <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <SectionLabel>What We Build</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h2
                className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.08] mb-5"
                style={{ fontFamily: DF }}
              >
                Every kind of{" "}
                <span className="text-gradient-warm">digital product.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-md">
                From AI-powered platforms to browser extensions — handcrafted, never templated.
                Hover a service to explore.
              </p>
            </Reveal>

            {/* Active service detail */}
            <Reveal delay={0.14}>
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-start gap-4 p-6 rounded-[1.75rem] border border-border bg-card/80 backdrop-blur mb-8"
                style={{ boxShadow: `0 16px 48px ${current.color}15` }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${current.color}18` }}
                >
                  <Icon size={26} style={{ color: current.color }} />
                </div>
                <div>
                  <p className="text-xl font-extrabold" style={{ fontFamily: DF, color: current.color }}>
                    {current.label}
                  </p>
                  <p className="text-muted-foreground mt-1">{current.desc}</p>
                </div>
              </motion.div>
            </Reveal>

            <Reveal delay={0.2}>
              <MagneticButton href="#contact">Start a Project</MagneticButton>
            </Reveal>
          </div>

          {/* Interactive service grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {SERVICES.map((s, i) => {
              const SI = ICONS[s.id as keyof typeof ICONS];
              const isActive = active === s.id;
              return (
                <motion.button
                  key={s.id}
                  type="button"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, type: "spring", stiffness: 200 }}
                  onMouseEnter={() => setActive(s.id)}
                  onFocus={() => setActive(s.id)}
                  className="relative flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl border text-left transition-all duration-300 cursor-pointer"
                  style={{
                    background: isActive ? `${s.color}12` : "var(--card)",
                    borderColor: isActive ? `${s.color}40` : "var(--border)",
                    boxShadow: isActive ? `0 12px 40px ${s.color}20` : "0 2px 12px rgba(0,0,0,0.04)",
                    transform: isActive ? "scale(1.04)" : "scale(1)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                    style={{ background: `${s.color}${isActive ? "25" : "15"}` }}
                  >
                    <SI size={22} style={{ color: s.color }} />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-center leading-tight" style={{ fontFamily: DF }}>
                    {s.label}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
