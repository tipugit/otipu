import { lazy, Suspense, useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/Hero";
import { MarqueeBand } from "./components/MarqueeBand";

const StatsSection = lazy(() =>
  import("./components/StatsSection").then((m) => ({ default: m.StatsSection }))
);
const ProductsSection = lazy(() =>
  import("./components/ProductsSection").then((m) => ({ default: m.ProductsSection }))
);
const RoomlyShowcase = lazy(() =>
  import("./components/RoomlyShowcase").then((m) => ({ default: m.RoomlyShowcase }))
);
const ServicesSection = lazy(() =>
  import("./components/ServicesSection").then((m) => ({ default: m.ServicesSection }))
);
const CTASection = lazy(() =>
  import("./components/CTASection").then((m) => ({ default: m.CTASection }))
);
const Footer = lazy(() => import("./components/Footer").then((m) => ({ default: m.Footer })));
const CursorGlow = lazy(() =>
  import("./components/ui").then((m) => ({ default: m.CursorGlow }))
);

function SectionFallback({ tall = false }: { tall?: boolean }) {
  return (
    <div
      className={`container-wide ${tall ? "py-24" : "py-16"} animate-pulse`}
      aria-hidden
    >
      <div className="h-4 w-24 bg-muted rounded mb-4" />
      <div className="h-8 w-2/3 max-w-md bg-muted rounded mb-6" />
      <div className="h-4 w-full max-w-lg bg-muted/70 rounded" />
    </div>
  );
}

export default function App() {
  const [dark, setDark] = useState(false);
  const [showFx, setShowFx] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const run = () => setShowFx(true);
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(run, { timeout: 1200 });
    } else {
      setTimeout(run, 300);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-body mesh-light">
      {showFx && (
        <Suspense fallback={null}>
          <CursorGlow />
        </Suspense>
      )}
      <Navbar dark={dark} toggle={() => setDark(!dark)} />
      <main>
        <HeroSection showFx={showFx} />
        <MarqueeBand />
        <Suspense fallback={<SectionFallback />}>
          <StatsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback tall />}>
          <ProductsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback tall />}>
          <RoomlyShowcase />
        </Suspense>
        <Suspense fallback={<SectionFallback tall />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <CTASection />
        </Suspense>
      </main>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
}
