import { ArrowRight } from "lucide-react";
import { MagneticButton, Reveal, SectionHeader } from "../ui";
import { ErpSectionVisual } from "../visuals/ProductVisuals";
import { GradientOrb } from "../effects";

export function FeaturedErp() {
  return (
    <section className="section-padding relative overflow-hidden bg-navy text-white">
      <GradientOrb className="-top-24 -right-16 w-80 h-80 opacity-30" color="#6d5ef6" />
      <GradientOrb className="bottom-0 -left-20 w-72 h-72 opacity-20" color="#4f7cff" delay={2} />
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
