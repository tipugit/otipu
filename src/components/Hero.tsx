import { ArrowRight, Car, DollarSign, Home, Sparkles } from "lucide-react";
import { APPS } from "../data";
import { AnimatedHeadline, MagneticButton } from "./ui";

const ICONS = { roomly: Home, tokitaki: DollarSign, dmv: Car, ai: Sparkles };

function MobileAppStrip() {
  return (
    <div className="mobile-scroll-x lg:hidden mt-7">
      {APPS.map((app) => {
        const Icon = ICONS[app.id as keyof typeof ICONS];
        return (
          <a
            key={app.id}
            href="#products"
            className="flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-card min-w-[158px] touch-target card-accent"
            style={{ "--accent-color": app.color } as Record<string, string>}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: `${app.color}18` }}
            >
              <Icon size={18} style={{ color: app.color }} />
            </div>
            <div className="min-w-0 pl-1">
              <p className="text-sm font-bold font-display truncate">{app.name}</p>
              <p className="text-[10px] text-muted-foreground font-body truncate">{app.tagline}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export function HeroSection({ showFx }: { showFx: boolean }) {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-14 sm:pt-16 overflow-hidden">
      {/* Lightweight CSS background — always visible */}
      <div className="absolute inset-0 pointer-events-none mesh-light" aria-hidden />
      <div className="absolute inset-0 pointer-events-none grid-bg opacity-20 hide-mobile-fx" aria-hidden />

      {/* Heavy animated blobs — desktop only, deferred */}
      {showFx && (
        <div className="absolute inset-0 pointer-events-none hide-mobile-fx" aria-hidden>
          <div
            className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full blur-[120px] opacity-20 animate-pulse"
            style={{ background: "#4f46e5" }}
          />
          <div
            className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full blur-[120px] opacity-15 animate-pulse"
            style={{ background: "#ec4899", animationDelay: "1s" }}
          />
        </div>
      )}

      <div className="relative z-10 container-wide py-8 sm:py-14 lg:py-20 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border glass text-[10px] sm:text-[11px] font-mono-label text-muted-foreground mb-5 sm:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            otipu.com · est. 2024
          </div>

          <AnimatedHeadline />

          <p className="text-base sm:text-lg text-muted-foreground font-body leading-relaxed mt-4 sm:mt-5 mb-6 sm:mb-7 max-w-xl">
            Otipu builds practical software — from roommate management to AI productivity tools
            that simplify everyday life.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <MagneticButton href="#products">
              Explore products <ArrowRight size={15} />
            </MagneticButton>
            <MagneticButton href="#services" variant="outline">
              Our services
            </MagneticButton>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:flex sm:gap-8 mt-7 sm:mt-9 pt-6 sm:pt-7 border-t border-border/60">
            {STATS_PREVIEW.map(([v, l]) => (
              <div key={l}>
                <p className="text-xl sm:text-2xl font-extrabold font-display text-gradient-blue">{v}</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground font-body mt-0.5">{l}</p>
              </div>
            ))}
          </div>

          <MobileAppStrip />
        </div>
      </div>
    </section>
  );
}

const STATS_PREVIEW = [
  ["5+", "Products"],
  ["4.2k+", "Users"],
  ["98%", "Happy"],
];
