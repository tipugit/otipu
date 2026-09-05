import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getService, ALL_SERVICES } from "../data/services";
import { Icon } from "../components/icons";
import { MagneticButton, PageHero } from "../components/ui";
import { Cta } from "../components/sections/Cta";
import { useSEO } from "../lib/hooks";
import { ServiceCard } from "../components/sections/Services";

export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = slug ? getService(slug) : undefined;

  useSEO({
    title: service ? `${service.title} — Otipu` : "Services — Otipu",
    description: service ? service.description : "Browse Otipu's software development and digital solution services.",
  });

  if (!service) return <Navigate to="/services" replace />;

  const related = ALL_SERVICES.filter((s) => s.group === service.group && s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow="Service" title={service.title} copy={service.description} />
      <section className="pb-16 sm:pb-24">
        <div className="container-wide grid lg:grid-cols-[1fr_280px] gap-10">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-muted text-primary flex items-center justify-center mb-8">
              <Icon name={service.icon} size={26} />
            </div>
            <h2 className="font-display text-2xl font-bold mb-6">What this includes</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {service.capabilities.map((c) => (
                <li key={c} className="rounded-2xl border border-border bg-white px-4 py-3.5 text-sm font-body">
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <MagneticButton to="/contact" magnetic>
                Start a Project <ArrowRight size={15} />
              </MagneticButton>
            </div>
          </div>
          <aside className="card-premium p-6 h-fit">
            <p className="font-display font-bold mb-3">Related</p>
            <ul className="space-y-2">
              {related.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-sm text-muted-foreground hover:text-primary">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
        {related.length > 0 && (
          <div className="container-wide mt-16 grid md:grid-cols-3 gap-4">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} compact />
            ))}
          </div>
        )}
      </section>
      <Cta />
    </>
  );
}
