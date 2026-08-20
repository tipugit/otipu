import { ArrowRight } from "lucide-react";
import { MagneticButton, Reveal } from "../ui";
import { GradientOrb } from "../effects";

export function Cta() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-16 sm:px-14 sm:py-20 text-center">
            <GradientOrb className="-top-16 right-10 w-64 h-64 opacity-40" color="#6d5ef6" />
            <GradientOrb className="-bottom-20 left-8 w-72 h-72 opacity-30" color="#4f7cff" delay={1.5} />
            <div
              className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#8b7cff] to-transparent"
              aria-hidden
            />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Have something ambitious in mind?
              </h2>
              <p className="mt-5 text-white/65 font-body text-base sm:text-lg leading-relaxed">
                Whether you need custom software, an ERP platform, a mobile app, automation, cloud
                infrastructure or a complete digital growth strategy, Otipu can help turn the idea
                into a scalable solution.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
                <MagneticButton to="/contact" variant="light" magnetic>
                  Start a Conversation <ArrowRight size={15} />
                </MagneticButton>
                <MagneticButton to="/services" variant="ghost">
                  Explore Our Capabilities
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
