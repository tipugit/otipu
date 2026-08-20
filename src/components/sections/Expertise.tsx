import { useState } from "react";
import { EXPERTISE } from "../../data/content";
import { cn } from "../../lib/cn";
import { Reveal, SectionHeader } from "../ui";
import { GradientOrb } from "../effects";

export function Expertise({ hideHeader = false }: { hideHeader?: boolean }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="expertise" className="section-padding relative overflow-hidden bg-navy text-white">
      <GradientOrb className="top-0 right-10 w-72 h-72 opacity-25" color="#4f7cff" />
      <div className="container-wide relative">
        {!hideHeader && (
          <SectionHeader
            light
            eyebrow="Expertise"
            title="Deep expertise across modern technology."
            copy="Categories we work in, with the tools behind each one available on demand — not a logo wall."
          />
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {EXPERTISE.map((cat, i) => {
            const expanded = open === cat.id;
            return (
              <Reveal key={cat.id} delay={i * 0.03}>
                <button
                  type="button"
                  onClick={() => setOpen(expanded ? null : cat.id)}
                  onMouseEnter={() => setOpen(cat.id)}
                  aria-expanded={expanded}
                  className={cn(
                    "w-full text-left rounded-2xl border p-5 transition-colors",
                    expanded
                      ? "border-white/25 bg-white/10"
                      : "border-white/10 bg-white/5 hover:border-white/20"
                  )}
                >
                  <p className="font-display font-bold mb-1">{cat.title}</p>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows,opacity] duration-300",
                      expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 lg:group-hover:opacity-100"
                    )}
                  >
                    <div className="overflow-hidden">
                      <ul className="pt-3 space-y-1">
                        {cat.items.map((item) => (
                          <li key={item} className="text-sm text-white/65 font-body">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {!expanded && (
                    <p className="text-xs text-white/40 mt-2 font-body">View technologies</p>
                  )}
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
