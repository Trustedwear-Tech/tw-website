import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Building2,
  Landmark,
  Award,
  GraduationCap,
  ShieldCheck,
  ScrollText,
  Briefcase,
  BrainCircuit,
  Watch,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Trustedwear Tech Private Limited is a deep-tech products and consulting firm in AI and electronics system design & manufacturing (ESDM), incubated at IIT Patna. We build Citra AI and the Trustedwear security smartwatch — designed and built fully in-house — and deliver AI, electronics, and software engineering for government and enterprise.",
};

const leadership = [
  {
    name: "Rohit Kumar Chandan",
    role: "Founder & CEO",
    bio: "Microsoft alumnus with 20+ years building enterprise software across cloud, data, and AI. Leads product strategy, architecture, and government engagement at Trustedwear Tech.",
  },
  {
    name: "Navneet",
    role: "Director of Marketing",
    bio: "Drives go-to-market, channel partnerships, and government engagement for both Citra AI and the Trustedwear smartwatch program.",
  },
  {
    name: "Navin Shekar",
    role: "Director of Quality Assurance",
    bio: "Owns product quality, reliability engineering, and compliance posture across the company's software and hardware lines.",
  },
];

const ecosystem = [
  {
    icon: <GraduationCap className="w-7 h-7 text-primary" />,
    label: "Incubated at",
    value: "IIT Patna",
    note: "Deep-tech incubation, mentorship, and lab access from one of India's leading IITs.",
  },
  {
    icon: <Award className="w-7 h-7 text-primary" />,
    label: "Recognised by",
    value: "Startup India (DPIIT)",
    note: "Recognised innovative Indian startup under the Department for Promotion of Industry and Internal Trade.",
  },
  {
    icon: <Landmark className="w-7 h-7 text-primary" />,
    label: "Supported by",
    value: "Government of Bihar",
    note: "Backed by Bihar's startup ecosystem and a key partner for our state-government deployments.",
  },
  {
    icon: <Landmark className="w-7 h-7 text-primary" />,
    label: "Supported by",
    value: "MeitY, Govt. of India",
    note: "Aligned with the Ministry of Electronics and Information Technology's deep-tech and sovereign-AI priorities.",
  },
];

const products = [
  {
    icon: <BrainCircuit className="w-7 h-7 text-primary" />,
    title: "Citra AI",
    status: "Live · in production",
    desc: "Agentic AI platform for government and regulated enterprise. Deployed sovereign on customer infrastructure — on-prem, private cloud, or air-gapped. Visit citra-ai.com.",
    href: "https://citra-ai.com",
    external: true,
  },
  {
    icon: <Watch className="w-7 h-7 text-primary" />,
    title: "Trustedwear Watch",
    status: "Built in-house · launching 2027",
    desc: "A security smartwatch designed and built fully in-house — custom OS, firmware, UI, and PCB design — with a 7-camera array, live SOS, geofencing, and on-device end-to-end encryption. Built for children, women on the move, commuters, and high-stakes professionals.",
    href: "/watch",
    external: false,
  },
];

export default function CompanyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="grid-bg relative overflow-hidden border-b border-border/60 pt-24 pb-20">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/10 to-background" />
          <div className="container relative mx-auto px-4 md:px-6 max-w-4xl text-center">
            <div className="inline-block bg-primary/10 p-4 rounded-full mb-6">
              <Building2 className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl font-headline">
              Trustedwear Tech Private Limited
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              An Indian deep-tech <strong>products and consulting firm</strong> in artificial
              intelligence and electronics system design &amp; manufacturing (ESDM). We build{" "}
              <strong>Citra AI</strong>, our sovereign agentic AI platform, and the{" "}
              <strong>Trustedwear Watch</strong>, a security wearable designed and built fully
              in-house — and we engineer AI, electronics, and software for government and
              enterprise.
            </p>
            <p className="mt-4 text-base text-muted-foreground">
              Incorporated 23 November 2022 · Incubated at IIT Patna · Headquartered in
              Patna, Bihar.
            </p>
          </div>
        </section>

        {/* Two product lines */}
        <section className="container mx-auto px-4 md:px-6 py-20">
          <div className="text-center space-y-4 mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">
              What we build — and what we deliver
            </h2>
            <p className="text-lg text-muted-foreground">
              Two flagship products, two consulting practices. The product discipline that
              ships Citra AI and the Trustedwear watch is what we bring to every engagement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((p) => (
              <Card key={p.title} className="card-glow bg-card">
                <CardHeader className="space-y-3">
                  <div className="p-3 bg-primary/10 rounded-xl inline-block w-fit">
                    {p.icon}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">
                    {p.status}
                  </div>
                  <CardTitle className="text-2xl font-headline">{p.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {p.desc}
                  </CardDescription>
                  <Button asChild variant="outline" className="w-fit">
                    {p.external ? (
                      <a href={p.href} target="_blank" rel="noopener noreferrer">
                        Learn more →
                      </a>
                    ) : (
                      <Link href={p.href}>Learn more →</Link>
                    )}
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/services">Explore our consulting &amp; engineering services →</Link>
            </Button>
          </div>
        </section>

        {/* Leadership */}
        <section className="section-darker">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">
                Leadership
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A founding team with deep enterprise software, marketing, and quality
                engineering experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {leadership.map((p) => (
                <Card key={p.name} className="card-glow bg-card">
                  <CardHeader className="text-center">
                    <div className="mx-auto p-4 bg-primary/10 rounded-full mb-3">
                      <Briefcase className="w-10 h-10 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-xl">{p.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold pt-1">
                      {p.role}
                    </CardDescription>
                    <p className="text-muted-foreground text-sm leading-relaxed pt-3">
                      {p.bio}
                    </p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem */}
        <section className="container mx-auto px-4 md:px-6 py-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">
              Ecosystem &amp; affiliations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are built in India and recognised by the institutions and programs that
              power Indian deep-tech.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {ecosystem.map((e, i) => (
              <Card key={i} className="card-glow bg-card">
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-xl inline-block w-fit mb-2">
                    {e.icon}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {e.label}
                  </div>
                  <CardTitle className="text-lg font-headline">{e.value}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed pt-2">
                    {e.note}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Corporate identity (full diligence sheet) */}
        <section className="section-darker">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <div className="text-center space-y-4 mb-12">
              <div className="inline-block bg-primary/10 p-3 rounded-full">
                <ScrollText className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">
                Corporate identity
              </h2>
              <p className="text-base text-muted-foreground">
                For procurement, due-diligence, and statutory verification.
              </p>
            </div>

            <Card className="card-glow bg-card">
              <CardContent className="p-6 md:p-8">
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-sm">
                  <div>
                    <dt className="text-muted-foreground uppercase text-xs tracking-wider">
                      Legal name
                    </dt>
                    <dd className="font-semibold mt-1">
                      Trustedwear Tech Private Limited
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground uppercase text-xs tracking-wider">
                      Constitution
                    </dt>
                    <dd className="mt-1">Private Limited Company</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground uppercase text-xs tracking-wider">
                      CIN
                    </dt>
                    <dd className="font-mono mt-1">U29299BR2022PTC060732</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground uppercase text-xs tracking-wider">
                      Incorporated
                    </dt>
                    <dd className="mt-1">
                      23 November 2022
                      <br />
                      <span className="text-xs text-muted-foreground">
                        Ministry of Corporate Affairs, Govt. of India
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground uppercase text-xs tracking-wider">
                      PAN
                    </dt>
                    <dd className="font-mono mt-1">AAJCT7985K</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground uppercase text-xs tracking-wider">
                      TAN
                    </dt>
                    <dd className="font-mono mt-1">PTNT02089D</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground uppercase text-xs tracking-wider">
                      GSTIN
                    </dt>
                    <dd className="font-mono mt-1">10AAJCT7985K1ZS</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground uppercase text-xs tracking-wider">
                      GST issued
                    </dt>
                    <dd className="mt-1">04 June 2024</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-muted-foreground uppercase text-xs tracking-wider">
                      Registered office
                    </dt>
                    <dd className="mt-1">
                      6th Floor, Desk V-126
                      <br />
                      Drowsy Monks Co-Working, DS Business Park
                      <br />
                      Saguna More Circle, Patna, Bihar, India
                    </dd>
                  </div>
                </dl>

                <div className="mt-8 p-4 rounded-lg bg-muted/50 border border-muted text-sm flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    For tender submissions, vendor onboarding, or KYB verification, we can
                    share signed copies of the Certificate of Incorporation, GST
                    registration, PAN, MSME Udyam, bank details, and authorised
                    signatory IDs on request.{" "}
                    <Link href="/contact" className="text-primary font-semibold underline-offset-4 hover:underline">
                      Contact our team →
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
