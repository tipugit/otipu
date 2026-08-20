import { WHY_OTIPU } from "../../data/content";
import { Icon } from "../icons";
import { Reveal, SectionHeader } from "../ui";

export function WhyOtipu() {
  return (
    <section className="section-padding surface-lavender">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Why Otipu"
          title="More than developers. A technology partner."
          copy="The work is technical. The responsibility is commercial — software that the business can run, trust and extend."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WHY_OTIPU.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <article className="card-premium p-7 h-full">
                <div className="w-11 h-11 rounded-2xl bg-muted text-primary flex items-center justify-center mb-5">
                  <Icon name={item.icon} size={20} />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
