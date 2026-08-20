import { ArrowRight } from "lucide-react";
import { MagneticButton, Reveal } from "../ui";
import { BrandMark } from "../BrandLogo";
import { GradientOrb } from "../effects";

export function Cta() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] bg-navy px-6 py-14 sm:px-12 sm:py-16 text-center">
            <GradientOrb className="-top-16 right-6 w-64 h-64 opacity-40" color="#6b5cff" />
            <GradientOrb className="-bottom-20 left-4 w-72 h-72 opacity-25" color="#38c6ff" delay={1.5} />
            <div
              className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#8b7cff] to-transparent"
              aria-hidden
            />
            <div className="relative z-10 mx-auto max-w-xl">
              <div className="mx-auto mb-6 w-16 h-16 sm:w-20 sm:h-20">
                <BrandMark size="lg" animated className="w-full h-full" />
              </div>
              <h2 className="font-display text-[1.75rem] sm:text-3xl lg:text-[2.5rem] font-extrabold text-white tracking-tight leading-tight">
                Have something ambitious in mind?
              </h2>
              <p className="mt-4 text-white/60 font-body text-[0.95rem] sm:text-base leading-[1.7]">
                Whether you need custom software, an ERP platform, a mobile app, automation, cloud
                infrastructure or a complete digital growth strategy, Otipu can help turn the idea
                into a scalable solution.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
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
