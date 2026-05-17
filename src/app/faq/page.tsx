
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - Trusted Wearables',
  description: 'Find answers to common questions about Trusted Wearables products, features, privacy, and services.',
};

const faqs = [
    {
        question: "Does pressing the SOS button only send live audio, video, and location?",
        answer: "It sends both live data and provides access to the last 30 days of recorded data. This allows law enforcement agencies or your family to identify any criminals involved.",
    },
    {
        question: "How is the 360-degree view of the user's surroundings presented in the app?",
        answer: "Each of the 7 cameras captures a specific field of view. In combination, they maximize the view of the user's surroundings. You can see this combined view in the app by selecting the 'all cameras' option.",
    },
    {
        question: "As a parent, can I view my child's face remotely while they are playing?",
        answer: "Yes, you can usually view your child's face. The cameras are positioned to focus on the child's face, so the 7-camera system not only captures the surroundings but also keeps an eye on your child.",
    },
    {
        question: "What does the video, audio, and location stream look like?",
        answer: "We plan to add an interactive demo to our website soon so you can see the camera feed and location presentation in the app. To maximize battery life and stay within data limits, we stream at 1 to 2 frames per second in VGA or QVGA resolution. This is sufficient for security and monitoring purposes.",
    },
    {
        question: "What about my privacy?",
        answer: "Your privacy is our top priority. With the adult watch, your data is end-to-end encrypted, and you own the key. Not even our company can access it. Data is only accessible to your trusted contacts when you press the SOS button. In a missing person scenario, your trusted contacts can request temporary access from the company, which is only granted after a strict verification process to prevent misuse. In all cases, only you and your designated contacts can see your data; you will be notified via SMS if an emergency access request is made.",
    },
];

export default function FaqPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-primary/10 p-4 rounded-full mb-6">
                <HelpCircle className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl font-headline">
              Frequently Asked Questions
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Find answers to common questions about our products and services.
            </p>
          </div>
        
          <div className="max-w-3xl mx-auto mt-12">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger className="font-headline text-lg text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
