import { Check } from "lucide-react";
import { Button, Reveal, SectionLabel } from "./ui";

const FEATURES = [
  "Smart expense splitting across roommates",
  "Shared task boards and chore tracking",
  "Automated bill reminders and notifications",
  "Clean dashboard designed for daily use",
];

export function RoomlyShowcase() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Reveal>
              <SectionLabel>Flagship product</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
                Roomly — shared living, simplified
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our most widely used product. Roomly helps roommates manage expenses, chores, and
                communication in one straightforward app.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="space-y-3 mb-8">
                {FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.2}>
              <Button href="#">Explore Roomly</Button>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-xl border border-border bg-muted/30 p-6 lg:p-8">
              <div className="rounded-lg border border-border bg-white overflow-hidden shadow-sm">
                <div className="px-4 py-3 border-b border-border flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-xs text-muted-foreground">roomly.otipu.app</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-muted-foreground mb-1">Monthly balance</p>
                  <p className="text-2xl font-semibold text-foreground mb-6">$847.50</p>
                  <div className="space-y-3">
                    {[
                      ["Rent", "$1,800", "Split 3 ways"],
                      ["Utilities", "$94", "Alex paid"],
                      ["Groceries", "$67", "You owe $22"],
                    ].map(([label, amount, note]) => (
                      <div
                        key={label}
                        className="flex items-center justify-between py-2 border-b border-border last:border-0"
                      >
                        <div>
                          <p className="text-sm font-medium">{label}</p>
                          <p className="text-xs text-muted-foreground">{note}</p>
                        </div>
                        <p className="text-sm font-medium text-foreground">{amount}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-center text-xs text-muted-foreground mt-4">
                Trusted by 2,400+ households
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
