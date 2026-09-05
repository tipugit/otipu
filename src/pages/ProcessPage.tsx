import { PROCESS_STEPS } from "../data/content";
import { Process } from "../components/sections/Process";
import { Cta } from "../components/sections/Cta";
import { PageHero, Reveal } from "../components/ui";
import { useSEO } from "../lib/hooks";

const DESCRIPTION =
  "Every engagement is different in scope. The discipline stays the same: understand, plan, design, engineer, validate, launch, then keep improving.";

export function ProcessPage() {
  useSEO({ title: "Process — Otipu", description: DESCRIPTION });

  return (
    <>
      <PageHero
        eyebrow="Process"
        title="A path from the problem to a system in production."
        copy={DESCRIPTION}
      />
      <Process hideHeader />
      <section className="pb-16">
        <div className="container-wide grid md:grid-cols-2 gap-4">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.id} delay={i * 0.04}>
              <article className="card-premium p-7">
                <p className="text-[11px] font-mono-label uppercase tracking-widest text-primary mb-2">
                  0{i + 1}
                </p>
                <h2 className="font-display text-xl font-bold mb-2">{step.title}</h2>
                <p className="text-muted-foreground font-body leading-relaxed">{step.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <Cta />
    </>
  );
}
