import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/Hero";
import { StatsSection } from "./components/StatsSection";
import { ProductsSection } from "./components/ProductsSection";
import { RoomlyShowcase } from "./components/RoomlyShowcase";
import { ServicesSection } from "./components/ServicesSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { CursorGlow } from "./components/ui";

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <CursorGlow />
      <Navbar dark={dark} toggle={() => setDark(!dark)} />
      <main>
        <HeroSection />
        <StatsSection />
        <ProductsSection />
        <RoomlyShowcase />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
