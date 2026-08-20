import { GROWTH_SERVICES } from "../../data/services";
import { Reveal, SectionHeader } from "../ui";
import { ServiceCard } from "./Services";

export function Growth() {
  return (
    <section id="growth" className="section-padding surface-lavender relative overflow-hidden">
      <div className="container-wide relative">
        <SectionHeader
          eyebrow="Digital growth & marketing"
          title="Built to grow, not just to launch."
          copy="We help businesses not only build digital products, but also position, promote and grow them — with marketing connected to the software."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
