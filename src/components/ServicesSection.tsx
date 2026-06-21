import { Brain, Chrome, Code2, Globe, Settings, Smartphone } from "lucide-react";
import { SERVICES } from "../data";
import { Reveal, SectionLabel } from "./ui";

const ICONS = {
  ai: Brain,
  web: Globe,
  mobile: Smartphone,
  auto: Settings,
  ext: Chrome,
  custom: Code2,
};

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-wide">
        <div className="max-w-2xl mb-14">
          <Reveal>
            <SectionLabel>Services</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              What we build
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Full-stack product development — from concept to launch, with a focus on quality
              and maintainability.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.id as keyof typeof ICONS];
            return (
              <Reveal key={s.id} delay={i * 0.04}>
                <div className="rounded-xl border border-border bg-white p-6 h-full hover:border-primary/25 hover:shadow-sm transition-all duration-200">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{s.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
