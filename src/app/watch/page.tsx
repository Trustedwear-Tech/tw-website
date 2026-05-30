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
import { WatchComingSoonBanner } from "@/components/sections/WatchComingSoonBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trustedwear Watch — Security Wearable, Built In-House, 2027",
  description:
    "The Trustedwear Watch is a security wearable designed and built fully in-house — custom OS, firmware, UI, and PCB design — with a 7-camera array, live SOS, real-time location, and on-device end-to-end encryption for women, children, and professionals. In active R&D — launching 2027.",
};

export default function WatchHubPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <WatchComingSoonBanner />
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
