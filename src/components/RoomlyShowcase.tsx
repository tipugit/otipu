import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Check, Users, Receipt, Bell } from "lucide-react";
import { BF, DF } from "../data";
import { MagneticButton, Reveal, SectionLabel } from "./ui";

const FEATURES = [
  { icon: Receipt, label: "Smart Splitting", desc: "Split rent, utilities, and groceries fairly" },
  { icon: Users, label: "Roommate Hub", desc: "Tasks, messages, and shared calendars" },
  { icon: Bell, label: "Bill Reminders", desc: "Never miss a due date again" },
];

export function RoomlyShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rotate = useTransform(scrollYProgress, [0, 1], [8, -4]);

  return (
    <section ref={ref} className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #2563EB 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <SectionLabel>Flagship Product</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h2
                className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.05] mb-5"
                style={{ fontFamily: DF }}
              >
                Meet{" "}
                <span style={{ color: "#2563EB" }}>Roomly</span>
                <span className="text-muted-foreground font-semibold text-2xl sm:text-3xl block mt-2">
                  Shared living, finally solved.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8" style={{ fontFamily: BF }}>
                Our most-loved product. Roomly turns chaotic roommate life into a calm,
                organized experience — expenses, chores, and communication in one beautiful app.
              </p>
            </Reveal>

            <div className="space-y-4 mb-10">
              {FEATURES.map((f, i) => (
                <Reveal key={f.label} delay={0.14 + i * 0.06}>
                  <div className="flex items-start gap-4 p-4 rounded-2xl border border-border bg-card/50 hover:bg-card hover:shadow-lg transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#2563EB]/15">
                      <f.icon size={20} className="text-[#2563EB]" />
                    </div>
                    <div>
                      <p className="font-bold text-sm" style={{ fontFamily: DF }}>
                        {f.label}
                      </p>
                      <p className="text-sm text-muted-foreground mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <MagneticButton href="#">Try Roomly Free</MagneticButton>
            </Reveal>
          </div>

          {/* Device mockup with parallax */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div style={{ y, rotateZ: rotate }} className="relative w-full max-w-md">
              {/* Phone frame */}
              <div
                className="relative rounded-[2.5rem] border-[6px] border-foreground/10 overflow-hidden shadow-2xl"
                style={{
                  background: "var(--card)",
                  boxShadow: "0 48px 100px rgba(37,99,235,0.2), 0 0 0 1px var(--border)",
                }}
              >
                <div className="absolute top-0 inset-x-0 h-7 bg-foreground/5 flex items-center justify-center">
                  <div className="w-20 h-4 rounded-full bg-foreground/10" />
                </div>
                <div className="pt-10 pb-6 px-5">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-xs text-muted-foreground">Good morning</p>
                      <p className="text-xl font-extrabold" style={{ fontFamily: DF }}>
                        Roomly
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#2563EB]/20 flex items-center justify-center text-sm font-bold text-[#2563EB]">
                      A
                    </div>
                  </div>

                  <div
                    className="rounded-2xl p-4 mb-4"
                    style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }}
                  >
                    <p className="text-white/70 text-xs">This month&apos;s balance</p>
                    <p className="text-white text-2xl font-extrabold mt-1" style={{ fontFamily: DF }}>
                      $847.50
                    </p>
                    <p className="text-white/60 text-xs mt-1">Split across 3 roommates</p>
                  </div>

                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
                    Recent Activity
                  </p>
                  {[
                    { label: "Rent — March", amount: "-$1,800", who: "Split 3 ways" },
                    { label: "Electric bill", amount: "-$94", who: "Alex paid" },
                    { label: "Groceries", amount: "-$67", who: "You owe $22" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between py-3 border-b border-border/60 last:border-0"
                    >
                      <div>
                        <p className="text-sm font-semibold">{item.label}</p>
                        <p className="text-[11px] text-muted-foreground">{item.who}</p>
                      </div>
                      <p className="text-sm font-bold text-[#2563EB]">{item.amount}</p>
                    </div>
                  ))}

                  <div className="mt-4 flex gap-2">
                    {["Expenses", "Chores", "Chat"].map((tab, i) => (
                      <div
                        key={tab}
                        className={`flex-1 text-center py-2 rounded-xl text-[11px] font-bold ${
                          i === 0 ? "bg-[#2563EB] text-white" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {tab}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 top-1/4 glass rounded-2xl border border-border px-4 py-3 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Check size={14} className="text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold" style={{ fontFamily: DF }}>
                      Rent paid
                    </p>
                    <p className="text-[10px] text-muted-foreground">All roommates settled</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-4 bottom-1/4 glass rounded-2xl border border-border px-4 py-3 shadow-xl"
              >
                <p className="text-2xl font-extrabold text-[#2563EB]" style={{ fontFamily: DF }}>
                  2,400+
                </p>
                <p className="text-[10px] text-muted-foreground">households trust Roomly</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
