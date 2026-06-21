import { ArrowUpRight, Check } from "lucide-react";
import { APPS } from "../data";
import { Reveal, SectionLabel, TiltCard } from "./ui";

export function ProductsSection() {
  return (
    <section id="products" className="section-padding relative overflow-hidden bg-muted/30">
      <div className="container-wide relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <Reveal>
            <SectionLabel>Our Products</SectionLabel>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight mb-3 sm:mb-4">
              Built for <span className="text-gradient">real life</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground font-body text-base sm:text-lg px-2">
              Each product solves a real problem — tap a card to explore.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 auto-rows-fr">
          {APPS.map((app, i) => (
            <Reveal
              key={app.id}
              delay={i * 0.06}
              className={i === 0 ? "lg:col-span-2" : ""}
            >
              <TiltCard glowColor={app.color}>
                <div
                  className={`p-5 sm:p-6 lg:p-8 h-full flex flex-col card-accent ${i === 0 ? "lg:min-h-[320px]" : ""}`}
                  style={{ "--accent-color": app.color } as Record<string, string>}
                >
                  <div className="flex items-start justify-between mb-4 pl-2">
                    <div
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${app.color}28, ${app.color}10)`,
                        boxShadow: `0 6px 20px ${app.color}20`,
                      }}
                    >
                      <div className="w-3 h-3 rounded-full" style={{ background: app.color }} />
                    </div>
                    <span
                      className="text-[10px] font-bold font-mono-label px-2.5 py-1 rounded-full"
                      style={{ background: `${app.color}15`, color: app.color }}
                    >
                      {app.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold font-display mb-1 pl-2">{app.name}</h3>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 sm:mb-3 font-body pl-2">
                    {app.tagline}
                  </p>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4 sm:mb-5 flex-1 pl-2">
                    {app.desc}
                  </p>

                  <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5 pl-2">
                    {app.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm font-body">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: `${app.color}18` }}
                        >
                          <Check size={9} style={{ color: app.color }} />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-border pl-2">
                    <span className="text-[10px] sm:text-[11px] font-mono-label text-muted-foreground">
                      {app.stat}
                    </span>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-sm font-semibold font-body touch-target"
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
