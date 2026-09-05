import { ArrowRight } from "lucide-react";
import { MagneticButton, Reveal, SectionHeader } from "../ui";
import { ErpSectionVisual } from "../visuals/ProductVisuals";

export function FeaturedErp() {
  return (
    <section className="section-padding relative overflow-hidden bg-navy text-white">
      <div className="container-wide relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeader
              align="left"
              light
              eyebrow="Custom ERP"
              title="Custom ERP systems built around your business."
              copy="Your business should not have to adapt to rigid software. We design ERP and management platforms around your workflows, departments, approvals, reporting requirements and growth plans."
            />
            <Reveal>
              <MagneticButton to="/contact" variant="light" magnetic>
                Discuss Your ERP Project <ArrowRight size={15} />
              </MagneticButton>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <ErpSectionVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
