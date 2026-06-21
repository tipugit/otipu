import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/Hero";
import { RoomlyShowcase } from "./components/RoomlyShowcase";
import { StatsSection } from "./components/StatsSection";
import { ProductsSection } from "./components/ProductsSection";
import { ServicesSection } from "./components/ServicesSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { FONT } from "./data";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: FONT }}>
      <Navbar />
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
