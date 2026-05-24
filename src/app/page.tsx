import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { AppPreviewSection } from "@/components/sections/AppPreviewSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { WatchFacesSection } from "@/components/sections/WatchFacesSection";
import { PurchaseSection } from "@/components/sections/PurchaseSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <UseCasesSection />
        <HowItWorksSection />
        <FeaturesSection />
        <AppPreviewSection />
        <TestimonialsSection />
        <WatchFacesSection />
        <SecuritySection />
        <ProductsSection />
        <PurchaseSection />
      </main>
      <Footer />
    </div>
  );
}
