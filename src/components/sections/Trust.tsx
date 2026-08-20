import { Check } from "lucide-react";
import { TRUST_BADGES } from "../../data/site";
import { Reveal } from "../ui";

export function Trust() {
  return (
    <section className="surface-lavender border-y border-border py-12 sm:py-14">
      <div className="container-wide">
        <Reveal>
          <p className="text-center font-display text-lg sm:text-xl font-semibold tracking-tight max-w-2xl mx-auto">
            Built for ambitious businesses that expect more from technology.
          </p>
        </Reveal>
        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {TRUST_BADGES.map((badge, i) => (
            <Reveal key={badge} delay={i * 0.04}>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-2 text-[13px] font-medium font-body text-foreground/80">
                <Check size={14} className="text-primary" />
                {badge}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
