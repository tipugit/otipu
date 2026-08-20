import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SOLUTIONS } from "../../data/content";
import { Icon } from "../icons";
import { Reveal, SectionHeader } from "../ui";

export function Solutions({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="solutions" className="section-padding">
      <div className="container-wide">
        {!hideHeader && (
          <SectionHeader
            eyebrow="Solutions"
            title="Solutions built around real business operations."
            copy="Services describe how we work. These are the kinds of systems we actually build — platforms shaped around the way an organization runs."
          />
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SOLUTIONS.map((item, i) => (
            <Reveal key={item.slug} delay={Math.min(i * 0.03, 0.16)}>
              <Link
                id={item.slug}
                to={`/solutions#${item.slug}`}
                className="group card-premium p-6 h-full flex flex-col hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300 scroll-mt-28"
              >
                <div className="w-10 h-10 rounded-xl bg-muted text-primary flex items-center justify-center mb-4">
                  <Icon name={item.icon} size={18} />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed flex-1">
                  {item.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Learn more
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
