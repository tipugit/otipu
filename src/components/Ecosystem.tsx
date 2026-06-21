import { useState } from "react";
import { motion } from "motion/react";
import { APPS, DF } from "../data";
import { Reveal, SectionLabel } from "./ui";

export function EcosystemSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  const nodes = APPS.map((app, i) => {
    const angle = (i / APPS.length) * 360 - 90;
    const rad = (angle * Math.PI) / 180;
    const r = 38;
    return {
      ...app,
      cx: 50 + r * Math.cos(rad),
      cy: 50 + r * Math.sin(rad),
    };
  });

  return (
    <section
      id="ecosystem"
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, color-mix(in srgb, var(--primary) 8%, transparent), transparent 65%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <Reveal>
            <SectionLabel>Product Ecosystem</SectionLabel>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ fontFamily: DF }}>
              Everything connects to{" "}
              <span className="text-gradient-warm">Otipu Core.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground mt-4">
              Hover any node to see how our products orbit a shared vision of practical software.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative max-w-3xl mx-auto aspect-square sm:aspect-[4/3]">
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full"
              aria-hidden
            >
              {nodes.map((node) => (
                <motion.line
                  key={`line-${node.id}`}
                  x1="50"
                  y1="50"
                  x2={node.cx}
                  y2={node.cy}
                  stroke={hovered === node.id ? node.color : "var(--border)"}
                  strokeWidth={hovered === node.id ? 0.4 : 0.15}
                  strokeDasharray={hovered === node.id ? "0" : "1 1"}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              ))}
              <motion.circle
                cx="50"
                cy="50"
                r="8"
                fill="url(#coreGrad)"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
              />
              <defs>
                <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
              </defs>
            </svg>

            {/* Center label */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
              <p className="text-lg sm:text-xl font-extrabold text-gradient-warm" style={{ fontFamily: DF }}>
                Otipu
              </p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Core</p>
            </div>

            {/* Nodes */}
            {nodes.map((node, i) => (
              <motion.button
                key={node.id}
                type="button"
                className="absolute -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: `${node.cx}%`, top: `${node.cy}%` }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08, type: "spring" }}
                onMouseEnter={() => setHovered(node.id)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{ scale: 1.12 }}
              >
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border flex flex-col items-center justify-center transition-all duration-300"
                  style={{
                    background: hovered === node.id ? `${node.color}20` : "var(--card)",
                    borderColor: hovered === node.id ? `${node.color}50` : "var(--border)",
                    boxShadow:
                      hovered === node.id
                        ? `0 12px 40px ${node.color}35`
                        : "0 4px 16px rgba(0,0,0,0.06)",
                  }}
                >
                  <span
                    className="text-xs sm:text-sm font-extrabold"
                    style={{ fontFamily: DF, color: node.color }}
                  >
                    {node.name}
                  </span>
                  <span className="text-[9px] text-muted-foreground mt-0.5">{node.tag}</span>
                </div>
              </motion.button>
            ))}

            {/* Hover detail */}
            {hovered && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm glass rounded-2xl border border-border p-5 text-center shadow-xl"
              >
                {(() => {
                  const app = APPS.find((a) => a.id === hovered)!;
                  return (
                    <>
                      <p className="font-extrabold" style={{ fontFamily: DF, color: app.color }}>
                        {app.name}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">{app.desc}</p>
                    </>
                  );
                })()}
              </motion.div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
