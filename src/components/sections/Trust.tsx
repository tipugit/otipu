import { Check } from "lucide-react";
import { TRUST_BADGES } from "../../data/site";
import { Reveal } from "../ui";

export function Trust() {
  return (
    <section className="relative py-12 sm:py-14 border-y border-border/60">
      <div className="absolute inset-0 surface-lavender opacity-80" aria-hidden />
      <div className="container-wide relative">
        <Reveal>
          <p className="text-center font-display text-lg sm:text-xl font-semibold tracking-tight max-w-lg mx-auto leading-snug">
            Built for ambitious businesses that expect more from technology.
          </p>
        </Reveal>
        <div className="mt-8 flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
          {TRUST_BADGES.map((badge, i) => (
            <Reveal key={badge} delay={i * 0.04}>
              <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white/80 backdrop-blur-sm px-3.5 py-2 text-[12.5px] font-medium font-body text-foreground/80 shadow-sm">
                <Check size={13} className="text-primary shrink-0" />
                {badge}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
