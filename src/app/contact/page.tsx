import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Building2, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Trustedwear Tech for Citra AI demos, AI & electronics (ESDM) consulting engagements, government procurement, partnership, or general inquiries. Headquartered at Saguna More Circle, Patna, Bihar.",
};

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block bg-primary/10 p-4 rounded-full mb-6">
              <Building2 className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl font-headline">
              Contact Trustedwear Tech
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              For Citra AI demos, AI &amp; electronics (ESDM) consulting engagements,
              government and enterprise procurement, partnership proposals, or general
              inquiries — please reach out below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {/* Office */}
            <Card className="card-glow bg-card">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-headline font-semibold">Registered Office</h2>
                </div>
                <address className="not-italic text-base leading-relaxed text-muted-foreground">
                  Trustedwear Tech Private Limited
                  <br />
                  6th Floor, Desk V-126
                  <br />
                  Drowsy Monks Co-Working, DS Business Park
                  <br />
                  Saguna More Circle
                  <br />
                  Patna, Bihar, India
                </address>
              </CardContent>
            </Card>

            {/* Reach */}
            <Card className="card-glow bg-card">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-headline font-semibold">Talk to us</h2>
                </div>
                <ul className="space-y-3 text-base">
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary shrink-0" />
                    <a
                      href="mailto:contact@trustedweartech.com"
                      className="hover:text-primary transition-colors"
                    >
                      contact@trustedweartech.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0" />
                    <a
                      href="tel:+918496977722"
                      className="hover:text-primary transition-colors"
                    >
                      +91-8496977722
                    </a>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground pt-2 border-t">
                  For Citra AI product sales and live demos, visit{" "}
                  <a
                    href="https://citra-ai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold underline-offset-4 hover:underline"
                  >
                    citra-ai.com
                  </a>
                  . For AI, electronics, or software engineering engagements, see our{" "}
                  <a
                    href="/services"
                    className="text-primary font-semibold underline-offset-4 hover:underline"
                  >
                    services
                  </a>
                  .
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Procurement note */}
          <Card className="mt-6 border border-primary/20 shadow-md bg-primary/5">
            <CardContent className="p-6 flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-primary mt-1 shrink-0" />
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Government &amp; Enterprise procurement
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For tender submissions, vendor onboarding, or KYB verification, we can
                  share signed copies of the Certificate of Incorporation (CIN
                  U29299BR2022PTC060732), GST registration (GSTIN 10AAJCT7985K1ZS), PAN,
                  MSME Udyam, bank details, and authorised signatory IDs on request. Email
                  <a
                    href="mailto:contact@trustedweartech.com"
                    className="text-primary font-semibold underline-offset-4 hover:underline mx-1"
                  >
                    contact@trustedweartech.com
                  </a>
                  to start.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
