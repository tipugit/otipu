import { INDUSTRIES } from "../../data/content";
import { Icon } from "../icons";
import { Reveal, SectionHeader } from "../ui";

export function Industries({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="industries" className="section-padding surface-lavender overflow-hidden">
      {!hideHeader && (
        <div className="container-wide">
          <SectionHeader
            eyebrow="Industries"
            title="Software for the way different businesses operate."
            copy="We work with organizations across sectors. The domain changes; the need for well-structured systems does not."
          />
        </div>
      )}
      <div className="container-wide">
        <Reveal>
          <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory lg:grid lg:grid-cols-4 xl:grid-cols-5 lg:overflow-visible">
            {INDUSTRIES.map((item) => (
              <article
                key={item.slug}
                className="snap-start flex-shrink-0 w-[220px] lg:w-auto card-premium p-5 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-muted text-primary flex items-center justify-center mb-4">
                  <Icon name={item.icon} size={18} />
                </div>
                <h3 className="font-display font-semibold">{item.title}</h3>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
