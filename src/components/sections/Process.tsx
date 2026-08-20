import { useRef } from "react";
import { motion, useInView, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { PROCESS_STEPS } from "../../data/content";
import { Reveal, SectionHeader } from "../ui";
import { cn } from "../../lib/cn";

export function Process({ hideHeader = false }: { hideHeader?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.6"],
  });
  const line = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 80,
    damping: 24,
  });

  return (
    <section id="process" className="section-padding">
      <div className="container-wide">
        {!hideHeader && (
          <SectionHeader
            eyebrow="Our process"
            title="A disciplined process. Clear communication. Better software."
            copy="Delivery stays understandable: what we are building, why it is sequenced this way, and what happens next."
          />
        )}
        <div ref={ref} className="relative">
          <div className="hidden lg:block absolute top-[52px] left-8 right-8 h-px bg-border" />
          <motion.div
            className="hidden lg:block absolute top-[52px] left-8 h-px bg-brand origin-left"
            style={{
              scaleX: reduced ? 1 : line,
              width: "calc(100% - 4rem)",
            }}
          />
          <ol className="grid md:grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-3">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.id} delay={i * 0.05} className="relative">
                <li className="flex lg:flex-col gap-4">
                  <div
                    className={cn(
                      "relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-display text-sm font-bold flex-shrink-0 border transition-colors duration-500",
                      inView
                        ? "bg-brand text-white border-transparent"
                        : "bg-white text-muted-foreground border-border"
                    )}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      {step.summary}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
