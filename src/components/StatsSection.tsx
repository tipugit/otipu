import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { STATS, DF } from "../data";
import { Reveal, SectionLabel } from "./ui";

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  const display =
    value >= 1000 ? `${(count / 1000).toFixed(count >= value ? 0 : 1)}k` : count.toString();

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent, color-mix(in srgb, var(--primary) 4%, transparent), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <SectionLabel>By The Numbers</SectionLabel>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ fontFamily: DF }}>
              Built for impact.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative group"
            >
              <div className="relative rounded-[1.75rem] border border-border bg-card p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0%, rgba(37,99,235,0.08), transparent 70%)",
                  }}
                />
                <p
                  className="relative text-4xl sm:text-5xl font-extrabold text-gradient-warm leading-none"
                  style={{ fontFamily: DF }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
                </p>
                <p className="relative text-sm text-muted-foreground mt-3 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
