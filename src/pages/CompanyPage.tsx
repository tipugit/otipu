import { MagneticButton, PageHero, Reveal } from "../components/ui";
import { WhyOtipu } from "../components/sections/WhyOtipu";
import { Cta } from "../components/sections/Cta";
import { useDocumentTitle } from "../lib/hooks";
import { ArrowRight } from "lucide-react";

const POINTS = [
  {
    title: "A complete technology partner",
    body: "Otipu exists to design, build and evolve software for organizations that need more than a brochure site. We work across products, internal systems, infrastructure and digital growth.",
  },
  {
    title: "Serious systems, not just screens",
    body: "The work covers business applications, ERP platforms, integrations, data, security and the operational details that make software last after launch.",
  },
  {
    title: "Delivery you can follow",
    body: "Projects are planned, designed, engineered and validated with clear communication. Clients should understand what is being built and why the sequence looks the way it does.",
  },
];

export function CompanyPage() {
  useDocumentTitle("Company — Otipu");

  return (
    <>
      <PageHero
        eyebrow="Company"
        title="A software firm built to handle real business systems."
        copy="Otipu is a full-service technology partner. We help businesses, startups, organizations and enterprises design, build, modernize and scale digital products and the systems behind them."
      />
      <section className="pb-16 sm:pb-24">
        <div className="container-wide grid lg:grid-cols-3 gap-4">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <article className="card-premium p-8 h-full">
                <h2 className="font-display text-xl font-bold mb-3">{p.title}</h2>
                <p className="text-muted-foreground font-body leading-relaxed">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="container-wide mt-10">
          <MagneticButton to="/contact" magnetic>
            Start a Project <ArrowRight size={15} />
          </MagneticButton>
        </Reveal>
      </section>
      <WhyOtipu />
      <Cta />
    </>
  );
}
