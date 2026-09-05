import { GROWTH_SERVICES, SERVICES } from "../data/services";
import { PageHero, SectionHeader } from "../components/ui";
import { ServiceCard } from "../components/sections/Services";
import { Cta } from "../components/sections/Cta";
import { useSEO } from "../lib/hooks";

const DESCRIPTION =
  "From custom software and ERP platforms to cloud, security, design and digital growth — the capabilities required to take a system from idea to production, then keep it moving.";

export function ServicesPage() {
  useSEO({ title: "Services — Otipu", description: DESCRIPTION });

  return (
    <>
      <PageHero eyebrow="Services" title="End-to-end software development and digital solutions." copy={DESCRIPTION} />
      <section className="pb-8">
        <div className="container-wide">
          <SectionHeader align="left" eyebrow="Software" title="Build and modernize the product." />
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
              <ServiceCard key={s.slug} service={s} compact />
            ))}
          </div>
        </div>
      </section>
      <section id="growth" className="section-padding surface-lavender scroll-mt-24">
        <div className="container-wide">
          <SectionHeader
            align="left"
            eyebrow="Digital growth"
            title="Position, promote and grow what you build."
          />
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {GROWTH_SERVICES.map((s) => (
              <ServiceCard key={s.slug} service={s} compact />
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
