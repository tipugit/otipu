import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/Hero";
import { StorySection } from "./components/StorySection";
import { EcosystemSection } from "./components/Ecosystem";
import { RoomlyShowcase } from "./components/RoomlyShowcase";
import { StatsSection } from "./components/StatsSection";
import { ProductsSection } from "./components/ProductsSection";
import { ServicesSection } from "./components/ServicesSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { CursorGlow } from "./components/ui";
import { BF } from "./data";

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: BF }}>
      <CursorGlow />
      <Navbar dark={dark} toggle={() => setDark(!dark)} />
      <main>
        <HeroSection />
        <StorySection />
        <EcosystemSection />
        <RoomlyShowcase />
        <StatsSection />
        <ProductsSection />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
