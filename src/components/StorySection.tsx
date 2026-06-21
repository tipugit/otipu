import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Check, ExternalLink } from "lucide-react";
import { APPS, BF, DF } from "../data";
import { Reveal, SectionLabel } from "./ui";

export function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "100%", "100%"]);

  return (
    <section id="story" ref={containerRef} className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-px"
          style={{ background: "linear-gradient(90deg, transparent, var(--border), transparent)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <Reveal>
            <SectionLabel>Our Story</SectionLabel>
          </Reveal>
          <Reveal delay={0.06}>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]"
              style={{ fontFamily: DF }}
            >
              One vision.{" "}
              <span className="text-gradient-warm">Multiple solutions.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-muted-foreground mt-5 text-lg" style={{ fontFamily: BF }}>
              Scroll through our ecosystem — each product born from a real problem worth solving.
            </p>
          </Reveal>

          {/* Progress line */}
          <div className="relative h-0.5 bg-border rounded-full mt-10 max-w-md mx-auto overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                width: lineWidth,
                background: "linear-gradient(90deg, #2563EB, #7C3AED, #FF6B4A)",
              }}
            />
          </div>
        </div>

        <div className="space-y-32 lg:space-y-40">
          {APPS.filter((a) => a.id !== "future").map((app, i) => {
            const isEven = i % 2 === 0;
            return (
              <Reveal key={app.id} delay={0.05}>
                <div
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    isEven ? "" : "lg:[direction:rtl] lg:*:[direction:ltr]"
                  }`}
                >
                  {/* Visual mockup */}
                  <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    className="relative"
                  >
                    <div
                      className="relative rounded-[2rem] border border-border overflow-hidden aspect-[4/3]"
                      style={{
                        background: `linear-gradient(145deg, ${app.color}12, var(--card))`,
                        boxShadow: `0 32px 80px ${app.color}18, 0 0 0 1px var(--border)`,
                      }}
                    >
                      <div
                        className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-40"
                        style={{ background: app.color, transform: "translate(30%, -30%)" }}
                      />
                      <div className="absolute inset-6 sm:inset-8 flex flex-col">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-3 h-3 rounded-full bg-red-400/80" />
                          <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                          <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                          <span
                            className="ml-3 text-[10px] font-mono text-muted-foreground"
                            style={{ fontFamily: "'JetBrains Mono', monospace" }}
                          >
                            {app.name.toLowerCase()}.otipu.app
                          </span>
                        </div>
                        <div className="flex-1 rounded-2xl border border-border/60 bg-card/80 backdrop-blur p-5 sm:p-6">
                          <div className="flex items-center justify-between mb-6">
                            <div>
                              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                                Dashboard
                              </p>
                              <p className="text-lg font-extrabold mt-0.5" style={{ fontFamily: DF }}>
                                {app.name}
                              </p>
                            </div>
                            <span
                              className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                              style={{ background: `${app.color}18`, color: app.color }}
                            >
                              {app.tag}
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-3 mb-5">
                            {[65, 42, 88].map((h, j) => (
                              <div
                                key={j}
                                className="rounded-xl bg-muted/60 flex items-end p-2"
                                style={{ height: `${h}px` }}
                              >
                                <div
                                  className="w-full rounded-md"
                                  style={{
                                    height: `${30 + j * 15}%`,
                                    background: `linear-gradient(180deg, ${app.color}80, ${app.color}30)`,
                                  }}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="space-y-2">
                            {app.features.map((f) => (
                              <div
                                key={f}
                                className="flex items-center gap-2 text-xs text-muted-foreground"
                              >
                                <div
                                  className="w-1.5 h-1.5 rounded-full"
                                  style={{ background: app.color }}
                                />
                                {f}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl glass border border-border text-xs font-bold shadow-lg"
                      style={{ color: app.color, fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {app.stat}
                    </div>
                  </motion.div>

                  {/* Copy */}
                  <div>
                    <p
                      className="text-[11px] font-bold tracking-[0.2em] uppercase mb-3"
                      style={{ color: app.color, fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      0{i + 1} — {app.tagline}
                    </p>
                    <h3
                      className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
                      style={{ fontFamily: DF }}
                    >
                      {app.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6" style={{ fontFamily: BF }}>
                      {app.desc}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {app.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-sm">
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ background: `${app.color}20` }}
                          >
                            <Check size={11} style={{ color: app.color }} />
                          </div>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
                        style={{ background: app.color }}
                      >
                        {app.live ? "Open App" : "Join Waitlist"} <ExternalLink size={12} />
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold text-muted-foreground border border-border hover:text-foreground hover:border-primary/30 transition-all"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
