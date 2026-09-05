import { SITE } from "../data/site";
import { Cta } from "../components/sections/Cta";
import { MagneticButton, PageHero, Reveal } from "../components/ui";
import { useSEO } from "../lib/hooks";
import { ArrowRight } from "lucide-react";

const DESCRIPTION =
  "There are no open roles listed right now. If you are an experienced engineer, designer or operator and believe you would be a strong fit, we still want to hear from you.";

export function CareersPage() {
  useSEO({ title: "Careers — Otipu", description: DESCRIPTION });

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build software that organizations actually run on."
        copy={DESCRIPTION}
      />
      <section className="pb-16">
        <div className="container-wide grid lg:grid-cols-2 gap-4">
          <Reveal>
            <article className="card-premium p-8">
              <h2 className="font-display text-xl font-bold mb-3">How to reach us</h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                Send a short note and a link to work you are proud of. There is no application portal and no invented openings to apply to.
              </p>
              <MagneticButton href={`mailto:${SITE.email}?subject=Careers`} magnetic>
                Email {SITE.email} <ArrowRight size={15} />
              </MagneticButton>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="card-premium p-8">
              <h2 className="font-display text-xl font-bold mb-3">What we look for</h2>
              <ul className="space-y-3 text-muted-foreground font-body">
                <li>Clear thinking about business systems, not just interfaces.</li>
                <li>Care for maintainable code, data and delivery.</li>
                <li>Comfort working across product, engineering and communication.</li>
              </ul>
            </article>
          </Reveal>
        </div>
      </section>
      <Cta />
    </>
  );
}
