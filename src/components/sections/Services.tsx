import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SERVICES, type Service } from "../../data/services";
import { cn } from "../../lib/cn";
import { useDesktopHover } from "../../lib/hooks";
import { Icon } from "../icons";
import { Reveal, SectionHeader } from "../ui";

export function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="container-wide relative">
        <SectionHeader
          eyebrow="What we do"
          title="Everything you need to build, modernize and grow digitally."
          copy="From strategy and architecture to development, infrastructure, automation and digital growth — complete solutions under one roof."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.slug}
              delay={Math.min(i * 0.035, 0.2)}
              className={spanClass(service.size)}
            >
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function spanClass(size: Service["size"]) {
  if (size === "feature") return "sm:col-span-2 lg:col-span-2 lg:row-span-2";
  if (size === "large" || size === "wide") return "sm:col-span-2 lg:col-span-2";
  return "";
}

export function ServiceCard({ service, compact = false }: { service: Service; compact?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const desktop = useDesktopHover();
  const [glow, setGlow] = useState({ x: 50, y: 50 });
  const featured = service.size === "feature" && !compact;

  return (
    <Link
      ref={ref}
      to={`/services/${service.slug}`}
      data-cursor="Explore"
      onMouseMove={(e) => {
        if (!desktop || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        setGlow({
          x: ((e.clientX - r.left) / r.width) * 100,
          y: ((e.clientY - r.top) / r.height) * 100,
        });
      }}
      className={cn(
        "group card-premium relative overflow-hidden flex flex-col h-full p-6 sm:p-7 transition-[transform,box-shadow] duration-300",
        "hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(4,40,30,0.35)]",
        featured && "min-h-[300px] sm:min-h-[360px]",
        compact && "min-h-0"
      )}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(380px circle at ${glow.x}% ${glow.y}%, rgba(4,120,87,0.12), transparent 55%)`,
        }}
        aria-hidden
      />
      <div
        className="relative w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-primary/10 text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105"
        aria-hidden
      >
        <Icon name={service.icon} size={20} />
      </div>
      <h3 className="font-display text-[1.05rem] sm:text-lg font-bold tracking-tight mb-2 relative leading-snug">
        {service.title}
      </h3>
      <p className="text-[13.5px] text-muted-foreground font-body leading-[1.65] relative flex-1">
        {service.short}
      </p>
      {featured && (
        <ul className="mt-5 hidden sm:grid grid-cols-2 gap-x-3 gap-y-2 relative">
          {service.capabilities.slice(0, 8).map((c) => (
            <li
              key={c}
              className="text-[12px] text-muted-foreground/90 rounded-lg bg-muted/60 px-2.5 py-1.5"
            >
              {c}
            </li>
          ))}
        </ul>
      )}
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary relative">
        Learn More
        <ArrowUpRight
          size={15}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </Link>
  );
}
