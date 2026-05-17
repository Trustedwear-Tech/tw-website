import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Info } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Trusted Wearables',
  description: 'Learn about Trusted Wearables, a deep-tech startup building a smartwatch with 7-camera real-time surveillance for safety and productivity.',
};

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-primary/10 p-4 rounded-full mb-6">
                <Info className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl font-headline">
              About Trusted Wearables
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              TrustedWear, a brand of Trustedwear Tech Private Limited, is a deep-tech wearable startup building the world's first smartwatch that combines 7-camera real-time surveillance for life-saving personal security. Whether it's protecting a woman walking home, or keeping a child safe, our smartwatch has you covered.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
