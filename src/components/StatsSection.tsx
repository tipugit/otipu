import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { STATS } from "../data";
import { Reveal, SectionLabel } from "./ui";

function Counter({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const steps = 50;
    const step = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, value]);

  const display =
    value >= 1000
      ? `${(Math.min(count, value) / 1000).toFixed(count >= value ? 1 : 0)}k`
      : count;

  return (
    <>
      {display}
      {suffix}
    </>
  );
}

const COLORS = ["#3B82F6", "#8B5CF6", "#F472B6"];

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-16 lg:py-20 border-y border-border relative overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, rgba(59,130,246,0.05), rgba(139,92,246,0.05), rgba(244,114,182,0.05))",
      }}
    >
      <div className="container-wide">
        <Reveal className="text-center mb-10">
          <SectionLabel>Impact</SectionLabel>
        </Reveal>
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="text-center">
              <p
                className="text-4xl sm:text-5xl font-bold font-display tracking-tight"
                style={{ color: COLORS[i] }}
              >
                <Counter value={stat.value} suffix={stat.suffix} active={inView} />
              </p>
              <p className="text-sm text-muted-foreground font-body mt-2">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
