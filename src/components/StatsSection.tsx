import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { STATS } from "../data";
import { Reveal, SectionLabel } from "./ui";

function Counter({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1500;
    const steps = 40;
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

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 lg:py-20 border-y border-border bg-muted/30">
      <div className="container-wide">
        <Reveal className="text-center mb-10">
          <SectionLabel>At a glance</SectionLabel>
        </Reveal>
        <div className="grid grid-cols-3 gap-6 lg:gap-12 max-w-3xl mx-auto">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.05} className="text-center">
              <p className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
                <Counter value={stat.value} suffix={stat.suffix} active={inView} />
              </p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
