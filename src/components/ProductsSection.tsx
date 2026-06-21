import { ArrowUpRight, Check } from "lucide-react";
import { APPS } from "../data";
import { Button, Reveal, SectionLabel } from "./ui";

export function ProductsSection() {
  return (
    <section id="products" className="section-padding bg-muted/50 border-y border-border">
      <div className="container-wide">
        <div className="max-w-2xl mb-14">
          <Reveal>
            <SectionLabel>Products</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
              Tools built for real problems
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Each product is designed with clarity and purpose — no bloat, no noise.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {APPS.map((app, i) => (
            <Reveal key={app.id} delay={i * 0.05}>
              <article className="h-full rounded-xl border border-border bg-white p-6 lg:p-8 flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: app.color }}
                      />
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        {app.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{app.name}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{app.tagline}</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{app.desc}</p>

                <ul className="space-y-2 mb-6">
                  {app.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-foreground">
                      <Check size={14} className="text-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-5 border-t border-border">
                  <span className="text-xs font-medium text-muted-foreground">{app.stat}</span>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4"
                  >
                    {app.live ? "Learn more" : "Join waitlist"}
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <Button href="#contact" variant="outline">
            Request early access
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
