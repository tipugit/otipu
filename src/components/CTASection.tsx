import { ArrowRight } from "lucide-react";
import { Reveal } from "./ui";

export function CTASection() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-wide">
        <Reveal>
          <div className="rounded-2xl bg-primary px-8 py-12 sm:px-12 sm:py-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
              Ready to work together?
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Explore our products or reach out to discuss your next project.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-white text-primary hover:bg-white/95 transition-colors"
              >
                View products <ArrowRight size={16} />
              </a>
              <a
                href="mailto:hello@otipu.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white border border-white/30 hover:bg-white/10 transition-colors"
              >
                hello@otipu.com
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
