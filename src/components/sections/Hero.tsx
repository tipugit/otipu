import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { HERO_CAPABILITIES, HERO_WORDS } from "../../data/site";
import { MagneticButton, Reveal } from "../ui";
import { HeroVisual } from "../visuals/HeroVisual";
import { SoftAurora, ParticleField } from "../effects";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
      <SoftAurora intensity="strong" />
      <ParticleField />

      <div className="relative z-10 container-wide py-12 lg:py-16 w-full">
        <div className="grid lg:grid-cols-[1fr_0.92fr] gap-12 lg:gap-10 items-center">
          <div className="max-w-xl">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/60 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-mono-label font-bold uppercase tracking-[0.18em] text-primary mb-6 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Software Development & Digital Solutions
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <Headline />
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 mb-8 text-muted-foreground font-body text-[0.98rem] sm:text-base leading-[1.75]">
                Otipu is a full-service technology partner helping businesses design, build,
                modernize and scale powerful digital products, internal systems, enterprise software
                and digital experiences.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="flex flex-col sm:flex-row gap-3">
                <MagneticButton to="/contact" magnetic>
                  Start a Project <ArrowRight size={15} />
                </MagneticButton>
                <MagneticButton to="/services" variant="outline">
                  Explore Our Services
                </MagneticButton>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <ul className="mt-9 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {HERO_CAPABILITIES.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-border/70 bg-white/55 backdrop-blur-sm px-3 py-2.5 text-[12px] font-semibold text-foreground/75"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:justify-self-end w-full">
            <HeroVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Headline() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % HERO_WORDS.length), 2400);
    return () => window.clearInterval(id);
  }, [reduced]);

  const word = HERO_WORDS[index];

  return (
    <h1 className="text-[2.1rem] min-[400px]:text-[2.45rem] sm:text-[3rem] lg:text-[3.15rem] font-extrabold font-display tracking-tight leading-[1.12]">
      We build{" "}
      <span className="relative inline-block min-w-[11ch] align-bottom">
        {reduced ? (
          <span className="text-gradient">software</span>
        ) : (
          <AnimatePresence mode="wait">
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -14, filter: "blur(8px)" }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="text-gradient absolute left-0 top-0 whitespace-nowrap"
            >
              {word.toLowerCase()}
            </motion.span>
          </AnimatePresence>
        )}
        <span className="invisible" aria-hidden>
          infrastructure
        </span>
      </span>
      <span className="block mt-1">that move businesses</span>
      <span className="block">forward.</span>
    </h1>
  );
}
