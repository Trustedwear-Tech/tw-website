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
import { VideoSection } from "@/components/sections/VideoSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <UseCasesSection />
        <HowItWorksSection />
        <VideoSection
          id="safety-video"
          title="Designed for Your Family's Connection"
          description="Watch how our commitment to family safety delivers real peace of mind, blending cutting-edge tech with child-friendly design."
          videoSrc="https://firebasestorage.googleapis.com/v0/b/trustedwear-website/o/TrustedWear_%20Embracing%20Safety.mp4?alt=media&token=33d96828-b9a3-48be-9a0e-777bff494b91"
        />
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
