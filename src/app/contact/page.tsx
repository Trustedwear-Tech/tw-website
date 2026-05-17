import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Trusted Wearables',
  description: 'Get in touch with Trusted Wearables. Find our contact email and phone number for support and inquiries.',
};

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl font-headline">
              Contact Us
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              We'd love to hear from you. Reach out to us with any questions or inquiries.
            </p>
          </div>

          <div className="max-w-md mx-auto mt-12 space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-muted">
                <Mail className="w-6 h-6 text-primary" />
                <a href="mailto:contact@trustedweartech.com" className="text-lg hover:text-primary transition-colors">
                  contact@trustedweartech.com
                </a>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-muted">
                <Phone className="w-6 h-6 text-primary" />
                <a href="tel:+918496977722" className="text-lg hover:text-primary transition-colors">
                  +91-8496977722
                </a>
              </div>
               <div className="flex items-center gap-4 p-4 rounded-lg bg-muted">
                <MapPin className="w-6 h-6 text-primary" />
                <p className="text-lg">India</p>
              </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
