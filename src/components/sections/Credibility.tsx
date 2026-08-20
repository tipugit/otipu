import { DISCIPLINE } from "../../data/content";
import { ArchitectureVisual } from "../visuals/ProductVisuals";
import { Reveal, SectionHeader } from "../ui";

export function Credibility() {
  return (
    <section className="section-padding surface-lavender">
      <div className="container-wide">
        <SectionHeader
          eyebrow="How we build"
          title="Built with the discipline complex software requires."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-16">
          {DISCIPLINE.map((item, i) => (
            <Reveal key={item} delay={i * 0.03}>
              <div className="rounded-2xl border border-border bg-white px-4 py-4 text-sm font-medium font-body">
                {item}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <ArchitectureVisual />
        </Reveal>
      </div>
    </section>
  );
}
