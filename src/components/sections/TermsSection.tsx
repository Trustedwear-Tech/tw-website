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
              This is a legal agreement between you and Trusted Wearables Inc. governing your use of our products.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-headline text-lg">Privacy Policy</AccordionTrigger>
            <AccordionContent className="text-base">
              Our Privacy Policy explains how we collect and protect your data. We don't sell your information.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-headline text-lg">Warranty & Returns</AccordionTrigger>
            <AccordionContent className="text-base">
              Our watches have a one-year limited warranty. You can return products within 30 days for a full refund.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
