import { GROWTH_SERVICES } from "../../data/services";
import { Reveal, SectionHeader } from "../ui";
import { ServiceCard } from "./Services";

export function Growth() {
  return (
    <section id="growth" className="section-padding surface-lavender">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Digital growth & marketing"
          title="Built to grow, not just to launch."
          copy="We help businesses not only build digital products, but also position, promote and grow them — with marketing connected to the software, not sitting beside it."
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {GROWTH_SERVICES.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.04}>
              <ServiceCard service={service} compact />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
