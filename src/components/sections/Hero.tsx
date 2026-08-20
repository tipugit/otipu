import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { HERO_CAPABILITIES, HERO_WORDS } from "../../data/site";
import { MagneticButton } from "../ui";
import { HeroVisual } from "../visuals/HeroVisual";
import { AnimatedGrid, GradientMesh, ParticleField } from "../effects";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
      <GradientMesh />
      <AnimatedGrid />
      <ParticleField />

      <div className="relative z-10 container-wide py-10 lg:py-16 w-full">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-8 items-center">
          <div>
            <p className="font-mono-label text-[11px] font-bold uppercase tracking-[0.22em] text-primary mb-5">
              Software Development & Digital Solutions
            </p>
            <Headline />
            <p className="mt-5 mb-8 text-muted-foreground font-body text-base sm:text-lg leading-relaxed max-w-xl">
              Otipu is a full-service technology partner helping businesses design, build, modernize
              and scale powerful digital products, internal systems, enterprise software and digital
              experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <MagneticButton to="/contact" magnetic>
                Start a Project <ArrowRight size={15} />
              </MagneticButton>
              <MagneticButton to="/services" variant="outline">
                Explore Our Services
              </MagneticButton>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-[13px] font-medium text-muted-foreground">
              {HERO_CAPABILITIES.map((item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary/70" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <HeroVisual />
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
    <h1 className="text-[2.05rem] min-[400px]:text-[2.4rem] sm:text-5xl lg:text-[3.35rem] font-extrabold font-display tracking-tight leading-[1.12]">
      We build{" "}
      <span className="relative inline-block min-w-[11ch] align-bottom">
        {reduced ? (
          <span className="text-gradient">software</span>
        ) : (
          <AnimatePresence mode="wait">
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
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
      <span className="block">that move businesses</span>
      <span className="block">forward.</span>
    </h1>
  );
}
