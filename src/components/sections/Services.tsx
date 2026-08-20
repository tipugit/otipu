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
    <section id="services" className="section-padding relative">
      <div className="container-wide">
        <SectionHeader
          eyebrow="What we do"
          title="Everything you need to build, modernize and grow digitally."
          copy="From strategy and architecture to development, infrastructure, automation and digital growth, Otipu brings the expertise needed to deliver complete solutions under one roof."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 auto-rows-fr">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.slug}
              delay={Math.min(i * 0.03, 0.18)}
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
  if (size === "feature") return "md:col-span-2 xl:col-span-2 xl:row-span-2";
  if (size === "large") return "md:col-span-2 xl:col-span-2";
  if (size === "wide") return "md:col-span-2 xl:col-span-2";
  return "";
}

export function ServiceCard({ service, compact = false }: { service: Service; compact?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const desktop = useDesktopHover();
  const [glow, setGlow] = useState({ x: 50, y: 50, on: false });
  const featured = service.size === "feature";

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
          on: true,
        });
      }}
      onMouseLeave={() => setGlow((g) => ({ ...g, on: false }))}
      className={cn(
        "group card-premium relative overflow-hidden flex flex-col h-full p-6 sm:p-7 transition-[border-color,transform,box-shadow] duration-300",
        "hover:border-primary/30 hover:-translate-y-0.5",
        featured && "min-h-[280px] sm:min-h-[340px]",
        compact && "min-h-0"
      )}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(420px circle at ${glow.x}% ${glow.y}%, rgba(109,94,246,0.12), transparent 55%)`,
        }}
        aria-hidden
      />
      <div
        className="w-11 h-11 rounded-2xl flex items-center justify-center bg-muted text-primary mb-5 transition-transform duration-300 group-hover:-translate-y-0.5"
        aria-hidden
      >
        <Icon name={service.icon} size={20} />
      </div>
      <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight mb-2 relative">
        {service.title}
      </h3>
      <p className="text-sm text-muted-foreground font-body leading-relaxed relative flex-1">
        {service.short}
      </p>
      {featured && (
        <ul className="mt-5 hidden sm:grid grid-cols-2 gap-x-4 gap-y-1.5 relative">
          {service.capabilities.slice(0, 8).map((c) => (
            <li key={c} className="text-[12px] text-muted-foreground/90">
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
