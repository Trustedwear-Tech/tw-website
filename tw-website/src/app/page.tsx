import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { WatchFacesSection } from "@/components/sections/WatchFacesSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { PurchaseSection } from "@/components/sections/PurchaseSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { TermsSection } from "@/components/sections/TermsSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <WatchFacesSection />
        <FeaturesSection />
        <BenefitsSection />
        <SecuritySection />
        <PurchaseSection />
        <VideoSection />
        <TermsSection />
      </main>
      <Footer />
    </div>
  );
}
