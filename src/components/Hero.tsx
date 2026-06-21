import { ArrowRight } from "lucide-react";
import { APPS } from "../data";
import { Button, Reveal } from "./ui";

export function HeroSection() {
  return (
    <section id="home" className="section-padding pt-32 lg:pt-40 bg-white">
      <div className="container-wide">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-sm font-medium text-primary mb-4">Software studio · Est. 2024</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
              Practical software for everyday life.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Otipu designs and builds focused digital products — from shared living tools to
              personal finance and AI-powered workflows.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-3">
              <Button href="#products">
                View products <ArrowRight size={16} />
              </Button>
              <Button href="#services" variant="outline">
                Our services
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-16 lg:mt-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {APPS.map((app) => (
              <div
                key={app.id}
                className="rounded-xl border border-border bg-white p-5 hover:border-primary/30 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: app.color }}
                  />
                  <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">
                    {app.tag}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1">{app.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{app.tagline}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
