import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function TermsSection() {
  return (
    <section id="terms" className="bg-primary/5">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">Terms and Conditions</h2>
          <p className="text-lg text-muted-foreground">
            Please review our terms of service and privacy policy.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full mt-12">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-headline text-lg">Service Agreement</AccordionTrigger>
            <AccordionContent className="text-base">
              This Service Agreement ("Agreement") is a legal agreement between you and Trusted Wearables Inc. ("Company," "we," "us," or "our") governing your use of the Trusted Wearables watch, its associated software, and services (collectively, the "Service"). By using the Service, you agree to be bound by the terms of this Agreement.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-headline text-lg">Privacy Policy</AccordionTrigger>
            <AccordionContent className="text-base">
              Our Privacy Policy explains how we collect, use, and protect your personal information. We are committed to protecting your privacy and security. We collect data such as location, health metrics, and contact information solely to provide and improve the Service. We do not sell your data to third parties. All data is encrypted in transit and at rest.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-headline text-lg">Warranty & Returns</AccordionTrigger>
            <AccordionContent className="text-base">
              Trusted Wearables watches come with a one-year limited warranty covering manufacturing defects. If you are not satisfied with your purchase, you may return it within 30 days for a full refund, provided it is in its original condition. Please see our full warranty and return policy on our website for more details.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
