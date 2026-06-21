import { useState } from "react";
import { motion } from "motion/react";
import { Brain, Chrome, Code2, Globe, Settings, Smartphone } from "lucide-react";
import { SERVICES } from "../data";
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
      className="section-padding relative overflow-hidden transition-all duration-700"
      style={{
        background: `radial-gradient(ellipse at 70% 50%, ${current.color}10 0%, transparent 55%)`,
      }}
    >
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Reveal>
              <SectionLabel>What We Build</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight mb-5">
                Every kind of{" "}
                <span className="text-gradient">digital product.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
                Hover a service to explore. From AI to mobile — handcrafted, never templated.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
                className="flex items-start gap-4 p-6 rounded-2xl border border-border glass mb-8"
                style={{ boxShadow: `0 16px 48px ${current.color}15` }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${current.color}20` }}
                >
                  <Icon size={26} style={{ color: current.color }} />
                </div>
                <div>
                  <p className="text-xl font-bold font-display" style={{ color: current.color }}>
                    {current.label}
                  </p>
                  <p className="text-muted-foreground font-body mt-1">{current.desc}</p>
                </div>
              </motion.div>
            </Reveal>

            <Reveal delay={0.2}>
              <MagneticButton href="#contact">Start a project</MagneticButton>
            </Reveal>
          </div>

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
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="flex flex-col items-center gap-2.5 p-5 rounded-2xl border text-center cursor-pointer transition-colors duration-300"
                  style={{
                    background: isActive ? `${s.color}15` : "var(--card)",
                    borderColor: isActive ? `${s.color}50` : "var(--border)",
                    boxShadow: isActive ? `0 12px 36px ${s.color}25` : "none",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: `${s.color}20` }}
                  >
                    <SI size={20} style={{ color: s.color }} />
                  </div>
                  <span className="text-xs font-bold font-display leading-tight">{s.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
