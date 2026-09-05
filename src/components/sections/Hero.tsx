import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { HERO_TRUST, HERO_WORDS } from "../../data/site";
import { MagneticButton, Reveal } from "../ui";
import { HeroVisual } from "../visuals/HeroVisual";
import { CurveDivider } from "../effects";
import { Icon } from "../icons";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center bg-navy pt-24 pb-20 sm:pb-24 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-[2%] -translate-y-1/2 h-[60vw] w-[60vw] max-h-[620px] max-w-[620px] rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(31,224,166,0.24) 0%, rgba(34,211,238,0.12) 45%, transparent 72%)",
        }}
      />

      <div className="relative z-10 container-wide py-8 w-full">
        <div className="grid lg:grid-cols-[1fr_0.92fr] gap-12 lg:gap-10 items-center">
          <div className="max-w-xl">
            <Reveal>
              <p className="inline-flex items-center gap-2.5 text-[11px] font-mono-label font-bold uppercase tracking-[0.22em] text-white/50 mb-6">
                Technology
                <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
                Creativity
                <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
                Real Impact
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <Headline />
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 mb-8 text-white/60 font-body text-[0.98rem] sm:text-base leading-[1.75]">
                Otipu designs and builds custom software, ERP systems, mobile apps, websites and
                digital solutions that help businesses work smarter, grow faster and make a
                meaningful impact.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="flex flex-col sm:flex-row gap-3">
                <MagneticButton to="/contact" magnetic>
                  Start a Project <ArrowRight size={15} />
                </MagneticButton>
                <MagneticButton to="/services" variant="ghost">
                  Explore Services
                </MagneticButton>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
                {HERO_TRUST.map((item) => (
                  <li
                    key={item.label}
                    className="inline-flex items-center gap-2 text-[13px] font-semibold text-white/70"
                  >
                    <Icon name={item.icon} size={16} className="text-accent shrink-0" />
                    {item.label}
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

      <CurveDivider fill="var(--background)" />
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
    <h1 className="text-[2.1rem] min-[400px]:text-[2.45rem] sm:text-[3rem] lg:text-[3.15rem] font-extrabold font-display tracking-tight leading-[1.12] text-white">
      We build{" "}
      <span className="relative inline-block min-w-[11ch] align-bottom">
        {reduced ? (
          <span className="text-accent">software</span>
        ) : (
          <AnimatePresence mode="wait">
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -14, filter: "blur(8px)" }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="text-accent absolute left-0 top-0 whitespace-nowrap"
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
