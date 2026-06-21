import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Check } from "lucide-react";
import { MagneticButton, Reveal, SectionLabel } from "./ui";

const FEATURES = [
  "Smart expense splitting across roommates",
  "Shared task boards and chore tracking",
  "Automated bill reminders",
  "Beautiful dashboard for daily use",
];

export function RoomlyShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const rotate = useTransform(scrollYProgress, [0, 1], [6, -4]);

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 0% 50%, rgba(59,130,246,0.08) 0%, transparent 60%)",
      }}
    >
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <Reveal>
              <SectionLabel>Flagship Product</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight mb-4">
                Meet{" "}
                <span style={{ color: "#3B82F6" }}>Roomly</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
                Our most-loved product. Roomly turns chaotic roommate life into a calm,
                organized experience.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <ul className="space-y-3 mb-8">
                {FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm font-body">
                    <Check size={16} className="text-[#3B82F6] mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.2}>
              <MagneticButton href="#">Try Roomly free</MagneticButton>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <motion.div style={{ y, rotateZ: rotate }} className="relative">
              <div
                className="rounded-3xl border border-border overflow-hidden shadow-2xl"
                style={{
                  background: "var(--card)",
                  boxShadow: "0 40px 80px rgba(59,130,246,0.2)",
                }}
              >
                <div className="px-4 py-3 border-b border-border flex items-center gap-2 bg-muted/30">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-xs font-mono-label text-muted-foreground">
                    roomly.otipu.app
                  </span>
                </div>
                <div className="p-6">
                  <div
                    className="rounded-2xl p-5 mb-5"
                    style={{ background: "linear-gradient(135deg, #3B82F6, #8B5CF6)" }}
                  >
                    <p className="text-white/70 text-xs font-body">Monthly balance</p>
                    <p className="text-white text-3xl font-bold font-display mt-1">$847.50</p>
                    <p className="text-white/60 text-xs font-body mt-1">Split across 3 roommates</p>
                  </div>
                  {[
                    ["Rent", "$1,800", "Split 3 ways"],
                    ["Utilities", "$94", "Alex paid"],
                    ["Groceries", "$67", "You owe $22"],
                  ].map(([label, amount, note]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between py-3 border-b border-border/60 last:border-0"
                    >
                      <div>
                        <p className="text-sm font-semibold font-body">{label}</p>
                        <p className="text-xs text-muted-foreground">{note}</p>
                      </div>
                      <p className="text-sm font-bold" style={{ color: "#3B82F6" }}>
                        {amount}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -left-4 top-1/4 glass rounded-xl border border-border px-4 py-3 shadow-xl"
              >
                <p className="text-2xl font-bold font-display text-gradient-blue">2,400+</p>
                <p className="text-[10px] text-muted-foreground font-body">households</p>
              </motion.div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
