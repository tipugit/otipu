import { useState, type ReactNode } from "react";
import { motion } from "motion/react";
import { ERP_MODULES } from "../../data/content";
import { cn } from "../../lib/cn";

const MODULE_REGIONS: Record<string, string> = {
  Finance: "ledger",
  Sales: "pipeline",
  Purchasing: "pipeline",
  Inventory: "ops",
  CRM: "pipeline",
  HR: "people",
  Payroll: "people",
  Members: "people",
  Projects: "ops",
  Assets: "ops",
  Documents: "docs",
  Approvals: "docs",
  Reports: "chart",
  Analytics: "chart",
  Operations: "ops",
};

export function ErpVisual({ active }: { active: string | null }) {
  const region = active ? MODULE_REGIONS[active] ?? null : null;

  return (
    <div className="relative rounded-[1.75rem] border border-white/10 bg-white/5 p-4 sm:p-5 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[10px] font-mono-label uppercase tracking-widest text-white/40">Operations</p>
          <p className="text-sm font-display font-bold text-white">Business platform</p>
        </div>
        <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
      </div>

      <div className="grid grid-cols-12 gap-3">
        <Panel id="ledger" active={region} className="col-span-4 h-24">
          <Row w="70%" />
          <Row w="52%" />
          <Row w="84%" />
        </Panel>
        <Panel id="chart" active={region} className="col-span-8 h-24">
          <div className="flex items-end gap-1.5 h-full pt-2">
            {[40, 62, 48, 78, 55, 88, 70].map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-[#6d5ef6]/40 to-[#4f7cff]/80"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </Panel>
        <Panel id="pipeline" active={region} className="col-span-7 h-28">
          <div className="grid grid-cols-3 gap-2 h-full">
            {["New", "Active", "Closed"].map((l) => (
              <div key={l} className="rounded-xl bg-white/5 p-2">
                <p className="text-[10px] text-white/40 mb-2">{l}</p>
                <Row w="90%" />
                <Row w="70%" />
              </div>
            ))}
          </div>
        </Panel>
        <Panel id="people" active={region} className="col-span-5 h-28">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-2 mb-2 last:mb-0">
              <span className="w-6 h-6 rounded-full bg-white/10" />
              <Row w="70%" />
            </div>
          ))}
        </Panel>
        <Panel id="ops" active={region} className="col-span-6 h-20">
          <Row w="80%" />
          <Row w="60%" />
        </Panel>
        <Panel id="docs" active={region} className="col-span-6 h-20">
          <Row w="55%" />
          <Row w="75%" />
        </Panel>
      </div>
    </div>
  );
}

function Panel({
  id,
  active,
  className,
  children,
}: {
  id: string;
  active: string | null;
  className?: string;
  children: ReactNode;
}) {
  const on = !active || active === id;
  return (
    <div
      className={cn(
        "rounded-2xl border bg-white/[0.04] p-3 transition-all duration-300",
        on ? "border-white/15 opacity-100" : "border-white/5 opacity-40",
        active === id && "border-primary/50 shadow-[0_0_0_1px_rgba(109,94,246,0.25)]",
        className
      )}
    >
      {children}
    </div>
  );
}

function Row({ w }: { w: string }) {
  return <div className="h-1.5 rounded-full bg-white/10 mb-1.5 last:mb-0" style={{ width: w }} />;
}

export function ErpModuleChips({
  active,
  onChange,
}: {
  active: string | null;
  onChange: (value: string | null) => void;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-none">
      {ERP_MODULES.map((m) => (
        <button
          key={m}
          type="button"
          onMouseEnter={() => onChange(m)}
          onMouseLeave={() => onChange(null)}
          onFocus={() => onChange(m)}
          onBlur={() => onChange(null)}
          className={cn(
            "flex-shrink-0 rounded-full border px-3.5 py-2 text-xs font-semibold font-body transition-colors",
            active === m
              ? "border-primary bg-primary text-white"
              : "border-white/15 bg-white/5 text-white/80 hover:border-white/30"
          )}
        >
          {m}
        </button>
      ))}
    </div>
  );
}

export function ErpSectionVisual() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div>
      <ErpVisual active={active} />
      <div className="mt-5">
        <ErpModuleChips active={active} onChange={setActive} />
      </div>
    </div>
  );
}

export function ArchitectureVisual() {
  const [active, setActive] = useState<string | null>(null);

  const layers = [
    { id: "interface", title: "Interface", tone: "from-[#8b7cff] to-[#6d5ef6]" },
    { id: "application", title: "Application", tone: "from-[#7b74f6] to-[#5b6ef0]" },
    { id: "api", title: "API", tone: "from-[#6d5ef6] to-[#4f7cff]" },
    { id: "logic", title: "Business Logic", tone: "from-[#5d6ef0] to-[#3d7cff]" },
    { id: "database", title: "Database", tone: "from-[#4f7cff] to-[#3b82f6]" },
    { id: "infrastructure", title: "Infrastructure", tone: "from-[#3b82f6] to-[#2563eb]" },
    { id: "security", title: "Security", tone: "from-[#2563eb] to-[#1e3a8a]" },
    { id: "monitoring", title: "Monitoring", tone: "from-[#1e3a8a] to-[#0b1428]" },
  ];

  const current = layers.find((l) => l.id === active);

  return (
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      <div className="relative h-[360px] sm:h-[420px] flex items-center justify-center">
        {layers.map((layer, i) => {
          const highlighted = active === layer.id;
          const dimmed = active && !highlighted;
          return (
            <motion.button
              key={layer.id}
              type="button"
              onMouseEnter={() => setActive(layer.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(layer.id)}
              onBlur={() => setActive(null)}
              className={cn(
                "absolute left-1/2 w-[78%] max-w-sm h-14 rounded-2xl border border-white/10 bg-gradient-to-r shadow-lg text-left px-5 flex items-center justify-between text-white font-display font-semibold",
                layer.tone,
                dimmed && "opacity-35"
              )}
              style={{
                top: `${18 + i * 38}px`,
                left: `calc(50% + ${(i - 3.5) * 6}px)`,
                x: "-50%",
                zIndex: 20 - i,
              }}
              animate={{
                y: highlighted ? -6 : 0,
                scale: highlighted ? 1.03 : 1,
              }}
              transition={{ duration: 0.25 }}
            >
              <span>{layer.title}</span>
              <span className="text-[10px] font-mono-label uppercase tracking-widest text-white/60">
                0{i + 1}
              </span>
            </motion.button>
          );
        })}
      </div>
      <div>
        <p className="font-mono-label text-[11px] uppercase tracking-[0.2em] text-primary mb-3">Architecture</p>
        <h3 className="font-display text-2xl sm:text-3xl font-extrabold mb-3">
          {current ? current.title : "Every layer is considered."}
        </h3>
        <p className="text-muted-foreground font-body leading-relaxed">
          {current
            ? layersNote(current.id)
            : "Hover a layer to see how we think about a system — from the interface people touch to the infrastructure and monitoring underneath it."}
        </p>
      </div>
    </div>
  );
}

function layersNote(id: string) {
  const map: Record<string, string> = {
    interface: "The screens, flows and interactions people use.",
    application: "Client-side logic, state and product behavior.",
    api: "Contracts between systems, clients and services.",
    logic: "Rules, workflows and domain behavior.",
    database: "Structured data, integrity and reporting.",
    infrastructure: "Environments, deployment and scale.",
    security: "Identity, access and data protection.",
    monitoring: "Health, performance and operational visibility.",
  };
  return map[id];
}
