import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Check, ExternalLink, Package } from "lucide-react";
import { APPS, DF } from "../data";
import { Reveal, SectionLabel } from "./ui";

function ProductCard({ app, index }: { app: (typeof APPS)[number]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const onMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setTilt({ x: (py - 0.5) * 16, y: -(px - 0.5) * 16 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      style={{ perspective: "900px" }}
    >
      <div
        ref={cardRef}
        className="relative h-full rounded-[1.75rem] border border-border bg-card p-6 overflow-hidden cursor-pointer"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: hovered ? "transform 0.12s ease" : "transform 0.5s cubic-bezier(0.23,1,0.32,1)",
          transformStyle: "preserve-3d",
          boxShadow: hovered
            ? `0 24px 60px ${app.color}25, 0 0 0 1px ${app.color}30`
            : "0 8px 32px rgba(0,0,0,0.06)",
        }}
        onMouseMove={onMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setTilt({ x: 0, y: 0 });
          setHovered(false);
        }}
      >
        <div
          className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-30 pointer-events-none transition-opacity duration-300"
          style={{ background: app.color, opacity: hovered ? 0.5 : 0.25 }}
        />

        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
          style={{
            background: `linear-gradient(135deg, ${app.color}25, ${app.color}08)`,
            boxShadow: `0 8px 24px ${app.color}25`,
          }}
        >
          <div className="w-3 h-3 rounded-full" style={{ background: app.color }} />
        </div>

        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-extrabold" style={{ fontFamily: DF }}>
            {app.name}
          </h3>
          <span
            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
            style={{ background: `${app.color}15`, color: app.color }}
          >
            {app.tag}
          </span>
        </div>
        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide mb-3">
          {app.tagline}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{app.desc}</p>

        <ul className="space-y-1.5 mb-5">
          {app.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs">
              <div
                className="w-4 h-4 rounded-full flex items-center justify-center"
                style={{ background: `${app.color}18` }}
              >
                <Check size={9} style={{ color: app.color }} />
              </div>
              {f}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
          <span
            className="text-[10px] font-semibold"
            style={{ color: app.color, fontFamily: "'JetBrains Mono', monospace" }}
          >
            {app.stat}
          </span>
          <a
            href="#"
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-[11px] font-semibold text-white"
            style={{ background: app.color }}
          >
            Open <ExternalLink size={10} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function ProductsSection() {
  return (
    <section id="products" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 pointer-events-none bg-secondary" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <Reveal>
            <SectionLabel>Our Applications</SectionLabel>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ fontFamily: DF }}>
              The full lineup.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground mt-4">
              Hover for 3D depth. Each product crafted for real users solving real problems.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {APPS.map((app, i) => (
            <ProductCard key={app.id} app={app} index={i} />
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="flex justify-center mt-10">
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-border glass">
              <Package size={15} className="text-muted-foreground" />
              <span className="text-sm text-muted-foreground">More apps in the pipeline —</span>
              <a href="#" className="text-sm font-semibold text-primary hover:underline underline-offset-2">
                View roadmap
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
