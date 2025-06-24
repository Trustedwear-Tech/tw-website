import { Button } from "@/components/ui/button";

export function PurchaseSection() {
  return (
    <section id="buy" className="container mx-auto px-4 md:px-6 text-center">
      <div className="bg-primary text-primary-foreground rounded-lg p-12 shadow-xl bg-gradient-to-r from-primary to-accent">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">
          Ready for Peace of Mind?
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
          Get your Trusted Wearables watch today and enjoy a new level of safety and connection for your loved ones.
        </p>
        <div className="mt-8">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6 transform hover:scale-105 transition-transform duration-300">
            Buy Now - From $129
          </Button>
        </div>
      </div>
    </section>
  );
}
