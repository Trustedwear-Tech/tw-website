import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function PurchaseSection() {
  return (
    <section id="notify" className="container mx-auto px-4 md:px-6 text-center">
      <div className="bg-primary text-primary-foreground rounded-lg p-12 shadow-xl bg-gradient-to-r from-primary to-accent">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">
          Be first to know at launch
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
          The Trustedwear smartwatch is launching in 2027. Leave your email and we will reach out as soon as pre-orders open.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 transform hover:scale-105 transition-transform duration-300">
            <a href="mailto:contact@trustedweartech.com?subject=Notify%20me%20at%20Trustedwear%20Watch%20launch">
              <Mail className="mr-2 h-5 w-5" />
              Email us to be notified
            </a>
          </Button>
        </div>
        <p className="mt-6 text-sm text-primary-foreground/70">
          For software solutions you can deploy today, see <a className="underline" href="https://citra-ai.com">Citra AI</a>.
        </p>
      </div>
    </section>
  );
}
