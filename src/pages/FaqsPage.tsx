import { FAQS } from "../data/content";
import { Cta } from "../components/sections/Cta";
import { PageHero, Reveal } from "../components/ui";
import { useSEO } from "../lib/hooks";

export function FaqsPage() {
  useSEO({
    title: "FAQs — Otipu",
    description: "If your question is not here, write to us. We would rather a direct conversation than a long FAQ.",
  });

  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Straightforward answers."
        copy="If your question is not here, write to us. We would rather a direct conversation than a long FAQ."
      />
      <section className="pb-16">
        <div className="container-wide max-w-3xl space-y-3">
          {FAQS.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.04}>
              <details className="card-premium group p-6">
                <summary className="font-display font-bold text-lg cursor-pointer list-none flex items-center justify-between gap-4">
                  {item.q}
                  <span className="text-primary text-xl leading-none group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-muted-foreground font-body leading-relaxed">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
      <Cta />
    </>
  );
}
