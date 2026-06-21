import { ArrowUpRight, Check } from "lucide-react";
import { APPS } from "../data";
import { Reveal, SectionLabel, TiltCard } from "./ui";

export function ProductsSection() {
  return (
    <section id="products" className="section-padding relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15 pointer-events-none"
        style={{ background: "#8B5CF6" }}
      />

      <div className="container-wide relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Reveal>
            <SectionLabel>Our Products</SectionLabel>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight mb-4">
              Built for <span className="text-gradient">real life</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground font-body text-lg">
              Hover a card for 3D depth. Each product solves a problem worth solving.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {APPS.map((app, i) => (
            <Reveal key={app.id} delay={i * 0.08}>
              <TiltCard glowColor={app.color}>
                <div className="p-6 lg:p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${app.color}30, ${app.color}10)`,
                        boxShadow: `0 8px 24px ${app.color}25`,
                      }}
                    >
                      <div className="w-3 h-3 rounded-full" style={{ background: app.color }} />
                    </div>
                    <span
                      className="text-[10px] font-bold font-mono-label px-2.5 py-1 rounded-full"
                      style={{ background: `${app.color}18`, color: app.color }}
                    >
                      {app.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display mb-1">{app.name}</h3>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3 font-body">
                    {app.tagline}
                  </p>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed mb-5 flex-1">
                    {app.desc}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {app.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm font-body">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center"
                          style={{ background: `${app.color}20` }}
                        >
                          <Check size={9} style={{ color: app.color }} />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-[11px] font-mono-label text-muted-foreground">{app.stat}</span>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-sm font-semibold font-body hover:underline underline-offset-4"
                      style={{ color: app.color }}
                    >
                      {app.live ? "Open app" : "Join waitlist"}
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
