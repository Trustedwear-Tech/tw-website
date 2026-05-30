import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Eyebrow } from "@/components/sections/Eyebrow";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { StatBar } from "@/components/sections/StatBar";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {
  BrainCircuit,
  Watch,
  ArrowRight,
  ShieldCheck,
  Database,
  Layers,
  Building2,
  Landmark,
  Award,
  GraduationCap,
  Camera,
  CircuitBoard,
  KeyRound,
  MonitorSmartphone,
  Factory,
  Code2,
  Boxes,
  ExternalLink,
  Sparkles,
} from "lucide-react";

const practices = [
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "Artificial Intelligence",
    product: "Citra AI — a sovereign agentic AI platform, live in production.",
    consulting:
      "AI engineering: on-prem / air-gapped LLM deployment, RAG, agentic workflows, governance.",
  },
  {
    icon: <CircuitBoard className="h-8 w-8 text-cyan" />,
    title: "Electronics & Embedded Systems",
    product:
      "Trustedwear Watch — a security wearable we designed and built fully in-house.",
    consulting:
      "ESDM & embedded advisory: PCB and electronics design, custom OS, firmware, and UI.",
  },
];

const citraPillars = [
  {
    icon: <Database className="h-7 w-7 text-primary" />,
    title: "Data Layer",
    desc: "Every system your enterprise runs on — ERP, CRM, finance, documents, APIs — made AI-reachable with zero copy, zero ETL, zero egress.",
  },
  {
    icon: <BrainCircuit className="h-7 w-7 text-primary" />,
    title: "Knowledge Layer",
    desc: "Domain expertise as a first-class asset your AI can reason with: policies, SOPs, governance, audit-ready.",
  },
  {
    icon: <Layers className="h-7 w-7 text-primary" />,
    title: "Model Layer",
    desc: "Open-source LLMs running on your GPUs, your VPC, your air-gapped cluster. Sovereign by default — no vendor lock-in.",
  },
  {
    icon: <ShieldCheck className="h-7 w-7 text-primary" />,
    title: "Agentic Layer",
    desc: "Business teams turn ideas into running operations — Smart Apps, workflows, deep analytics — built in days, not consulting-years.",
  },
];

const semiPillars = [
  {
    icon: <CircuitBoard className="h-7 w-7 text-cyan" />,
    title: "PCB & Electronics Design",
    desc: "Multi-layer board and electronics design for a compact, low-power wearable — engineered and manufactured in-house (ESDM).",
  },
  {
    icon: <Camera className="h-7 w-7 text-cyan" />,
    title: "Sensor & Camera Array",
    desc: "A 7-camera array with GPS, audio, and motion sensing, integrated on our own board for 360° situational awareness.",
  },
  {
    icon: <MonitorSmartphone className="h-7 w-7 text-cyan" />,
    title: "Custom OS & UI",
    desc: "A full in-house operating system and on-device user interface — built for safety-critical responsiveness on the device.",
  },
  {
    icon: <KeyRound className="h-7 w-7 text-cyan" />,
    title: "Firmware & Encryption",
    desc: "Embedded firmware with on-device end-to-end encryption — the wearer owns the key. Privacy built into the software.",
  },
];

const services = [
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "AI Engineering & Deployment",
    desc: "Sovereign LLM and agentic systems delivered on your infrastructure — data engineering, RAG, evaluation, and governance, powered by Citra.",
  },
  {
    icon: <Factory className="h-8 w-8 text-cyan" />,
    title: "Electronics & Embedded (ESDM)",
    desc: "PCB and electronics design, custom OS, firmware and UI, and full wearable / IoT product engineering — designed and manufactured in-house.",
  },
  {
    icon: <Code2 className="h-8 w-8 text-primary" />,
    title: "Advanced Software Engineering",
    desc: "Full-stack product builds, cloud and platform engineering, and reliability for mission-critical systems.",
  },
];

const industries = [
  {
    icon: <Landmark className="h-7 w-7 text-primary" />,
    title: "Government",
    desc: "Sovereign, audit-ready deployments for ministries, PSUs, and public institutions.",
  },
  {
    icon: <Building2 className="h-7 w-7 text-primary" />,
    title: "Regulated Enterprise",
    desc: "Banking, energy, and infrastructure operators that need data to never leave their walls.",
  },
  {
    icon: <ShieldCheck className="h-7 w-7 text-primary" />,
    title: "Public Safety",
    desc: "Personal-security hardware and software designed for women, children, and frontline workers.",
  },
];

const ecosystem = [
  { label: "Incubated at", value: "IIT Patna", icon: <GraduationCap className="h-6 w-6 text-primary" /> },
  { label: "Recognised by", value: "Startup India (DPIIT)", icon: <Award className="h-6 w-6 text-primary" /> },
  { label: "Supported by", value: "Government of Bihar", icon: <Landmark className="h-6 w-6 text-primary" /> },
  { label: "Supported by", value: "MeitY, Govt. of India", icon: <Landmark className="h-6 w-6 text-primary" /> },
];

const leadership = [
  {
    name: "Rohit Kumar Chandan",
    role: "Founder & CEO",
    bio: "Microsoft alumnus. 20+ years building enterprise software across cloud, data, and AI.",
  },
  {
    name: "Navneet",
    role: "Director of Marketing",
    bio: "Drives go-to-market, channel partnerships, and government engagement.",
  },
  {
    name: "Navin Shekar",
    role: "Director of Quality Assurance",
    bio: "Owns product quality, reliability engineering, and compliance posture.",
  },
];

const stats = [
  { value: "AI + Electronics", label: "Two deep-tech practices" },
  { value: "Live", label: "Citra AI in production" },
  { value: "Safety wearable", label: "Built fully in-house" },
  { value: "2022", label: "Incorporated in India" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main>
        {/* =================== Hero =================== */}
        <section className="grid-bg relative w-full overflow-hidden border-b border-border/60 pt-24">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/10 via-background/40 to-background" />
          <div className="container relative mx-auto grid grid-cols-1 items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
            <div className="animate-in fade-in slide-in-from-left space-y-8 text-center duration-700 md:text-left">
              <Eyebrow>Advanced AI &amp; Electronics</Eyebrow>
              <h1 className="font-headline text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
                We build <span className="text-gradient">AI</span> and{" "}
                <span className="text-gradient">electronics</span>
                <span className="block text-foreground">— and the teams behind them.</span>
              </h1>
              <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground md:mx-0 md:text-xl">
                Trustedwear Tech is a products and consulting firm in artificial
                intelligence and electronics system design &amp; manufacturing (ESDM). We
                ship our own AI platform and our own in-house security wearable — and we
                engineer them for governments and enterprises that demand sovereignty,
                safety, and scale.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                <Button size="lg" className="h-14 px-8 text-lg" asChild>
                  <a href="https://citra-ai.com" target="_blank" rel="noopener noreferrer">
                    Explore Citra AI <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg" asChild>
                  <Link href="/watch">Explore the Watch</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Looking for an engineering partner?{" "}
                <Link href="/services" className="font-semibold text-primary hover:underline">
                  Talk to our engineers →
                </Link>
              </p>
            </div>
            <div className="animate-in fade-in slide-in-from-right flex items-center justify-center duration-1000">
              <div className="glow-radial device-backplate w-full max-w-[520px] p-10">
                <div className="relative aspect-square w-full">
                  <Image
                    src="/images/trusted-wear-logo.png"
                    alt="Trustedwear Tech"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stat bar */}
          <div className="container relative mx-auto px-4 pb-16 md:px-6">
            <StatBar stats={stats} />
          </div>
        </section>

        {/* =================== Trust bar =================== */}
        <section className="border-b border-border/60 !py-10">
          <div className="container mx-auto px-4 md:px-6">
            <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Built in India, with India
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
              {ecosystem.map((e) => (
                <div key={e.value} className="flex items-center gap-2 text-sm text-muted-foreground">
                  {e.icon}
                  <span className="font-medium text-foreground">{e.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================== Two practices =================== */}
        <section className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Two deep-tech practices.{" "}
                <span className="text-gradient">Products and consulting.</span>
              </>
            }
            subtitle="We don't just advise — we build and operate our own AI platform and our own in-house hardware. That product discipline is what we bring to every engagement."
          />
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            {practices.map((p) => (
              <Card key={p.title} className="card-glow flex flex-col bg-card p-8">
                <div className="mb-6 inline-flex w-fit rounded-2xl bg-secondary p-4">{p.icon}</div>
                <CardTitle className="font-headline text-2xl">{p.title}</CardTitle>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Boxes className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Product · </span>
                      {p.product}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Consulting · </span>
                      {p.consulting}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* =================== Products =================== */}
        <section id="products" className="section-darker">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              eyebrow="Our products"
              title="One company. Two flagship products."
              subtitle="Software for the institutions that run India. Hardware for the people who keep them safe."
            />
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Citra AI */}
              <Card className="card-glow flex flex-col overflow-hidden ring-1 ring-primary/40">
                <div className="flex items-center gap-4 border-b border-border bg-primary/10 p-8">
                  <div className="rounded-2xl bg-primary/15 p-4 text-primary">
                    <BrainCircuit className="h-10 w-10" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-primary">
                      Live · In Production
                    </div>
                    <CardTitle className="mt-1 font-headline text-2xl md:text-3xl">Citra AI</CardTitle>
                  </div>
                </div>
                <CardHeader className="flex-grow space-y-4 p-8">
                  <CardDescription className="text-base leading-relaxed md:text-lg">
                    An agentic AI platform that lets government and enterprise teams build
                    Smart Apps, run deep analytics on their own data, and compose AI
                    workflows — sovereign, audit-ready, and deployed on the customer&apos;s own
                    infrastructure.
                  </CardDescription>
                  <ul className="space-y-2 text-muted-foreground">
                    {[
                      "On-prem · private cloud · air-gapped sovereign deployment",
                      "Zero copy · zero ETL · zero egress",
                      "Per-tenant governance with full audit trail",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg" className="mt-4 w-full">
                    <a href="https://citra-ai.com" target="_blank" rel="noopener noreferrer">
                      Visit citra-ai.com <ExternalLink className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </CardHeader>
              </Card>

              {/* Trustedwear Watch */}
              <Card className="card-glow flex flex-col overflow-hidden ring-1 ring-cyan/30">
                <div className="flex items-center gap-4 border-b border-border bg-cyan/10 p-8">
                  <div className="rounded-2xl bg-cyan/15 p-4 text-cyan">
                    <Watch className="h-10 w-10" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-cyan">
                      Built in-house · Launching 2027
                    </div>
                    <CardTitle className="mt-1 font-headline text-2xl md:text-3xl">
                      Trustedwear Watch
                    </CardTitle>
                  </div>
                </div>
                <CardHeader className="flex-grow space-y-4 p-8">
                  <CardDescription className="text-base leading-relaxed md:text-lg">
                    A security smartwatch designed and built fully in-house — our own PCB,
                    firmware, OS, and UI — combining a 7-camera array with live SOS to
                    protect children, women on the move, commuters, and frontline
                    professionals.
                  </CardDescription>
                  <ul className="space-y-2 text-muted-foreground">
                    {[
                      "In-house PCB and electronics with a 7-camera, 360° sensor array",
                      "Full custom watch OS, firmware, and on-device UI",
                      "On-device end-to-end encryption — the wearer owns the key",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg" variant="outline" className="mt-4 w-full">
                    <Link href="/watch">
                      Learn about the watch <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* =================== Citra platform snapshot =================== */}
        <section className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Our AI product · Citra"
            title="Your agentic operating layer"
            subtitle="Citra adds an agentic layer above the enterprise systems you already run. Your ERP and CRM keep doing what they do; your teams work in Citra. Built across four layers — every one tenant-owned."
          />
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {citraPillars.map((p) => (
              <Card key={p.title} className="card-glow bg-card">
                <CardHeader>
                  <div className="mb-3 inline-block w-fit rounded-xl bg-primary/10 p-3">{p.icon}</div>
                  <CardTitle className="font-headline text-xl">{p.title}</CardTitle>
                  <CardDescription className="pt-2 text-base leading-relaxed">{p.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <a href="https://citra-ai.com" target="_blank" rel="noopener noreferrer">
                See Citra AI in action <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>

        {/* =================== ESDM / hardware snapshot =================== */}
        <section className="section-darker">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              eyebrow="Our hardware · Trustedwear Watch"
              title={
                <>
                  A safety wearable, <span className="text-gradient">designed and built in-house.</span>
                </>
              }
              subtitle="We design the electronics, the firmware, the operating system, and the user interface as one system — so a single press can stream where you are and what's happening to the people you trust."
            />
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {semiPillars.map((p) => (
                <Card key={p.title} className="card-glow bg-card">
                  <CardHeader>
                    <div className="mb-3 inline-block w-fit rounded-xl bg-cyan/10 p-3">{p.icon}</div>
                    <CardTitle className="font-headline text-xl">{p.title}</CardTitle>
                    <CardDescription className="pt-2 text-base leading-relaxed">{p.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild size="lg" variant="outline">
                <Link href="/watch">
                  Explore the watch <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* =================== Consulting & Engineering Services =================== */}
        <section className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Consulting & engineering"
            title="Engineering partners for your hardest problems"
            subtitle="The same teams that build our products deliver them for you — across AI, electronics and embedded (ESDM), and advanced software engineering."
          />
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((s) => (
              <Card key={s.title} className="card-glow flex flex-col bg-card p-8">
                <div className="mb-5 inline-flex w-fit rounded-2xl bg-secondary p-4">{s.icon}</div>
                <CardTitle className="font-headline text-xl">{s.title}</CardTitle>
                <CardDescription className="pt-3 text-base leading-relaxed">{s.desc}</CardDescription>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/services">
                Explore our services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* =================== Industries =================== */}
        <section className="section-darker">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading eyebrow="Who we serve" title="Built for high-stakes institutions" />
            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
              {industries.map((i) => (
                <Card key={i.title} className="card-glow bg-card">
                  <CardHeader>
                    <div className="mb-3 inline-block w-fit rounded-xl bg-primary/10 p-3">{i.icon}</div>
                    <CardTitle className="font-headline text-xl">{i.title}</CardTitle>
                    <CardDescription className="pt-2 text-base leading-relaxed">{i.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* =================== Leadership =================== */}
        <section className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Leadership"
            title="A founding team that ships"
            subtitle="Deep enterprise software, go-to-market, and quality engineering experience."
          />
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {leadership.map((p) => (
              <Card key={p.name} className="card-glow bg-card text-center">
                <CardHeader className="items-center">
                  <div className="mx-auto mb-3 rounded-full bg-primary/10 p-4">
                    <Building2 className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl">{p.name}</CardTitle>
                  <CardDescription className="pt-1 font-semibold text-primary">{p.role}</CardDescription>
                  <p className="pt-3 text-sm leading-relaxed text-muted-foreground">{p.bio}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/company">
                Read more about the company <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* =================== Corporate identity strip =================== */}
        <section className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-8 rounded-2xl border border-border/70 bg-card p-8 md:grid-cols-2 md:p-12">
            <div className="space-y-4">
              <Eyebrow>Government &amp; enterprise procurement</Eyebrow>
              <h2 className="font-headline text-2xl font-bold tracking-tight md:text-3xl">
                Bidding for a government contract?
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                Trustedwear Tech Private Limited is a registered Indian private limited
                company headquartered in Patna, Bihar. Our corporate identity, GST, and
                statutory details are listed here — a full procurement-ready company
                profile is available on request.
              </p>
              <Button asChild>
                <Link href="/contact">
                  Talk to our team <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <dl className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
              {[
                { dt: "Legal name", dd: "Trustedwear Tech Private Limited", mono: false },
                { dt: "CIN", dd: "U29299BR2022PTC060732", mono: true },
                { dt: "GSTIN", dd: "10AAJCT7985K1ZS", mono: true },
                { dt: "PAN", dd: "AAJCT7985K", mono: true },
                { dt: "Incorporated", dd: "23 November 2022", mono: false },
                { dt: "Registered office", dd: "Patna, Bihar, India", mono: false },
              ].map((row) => (
                <div key={row.dt}>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">{row.dt}</dt>
                  <dd className={row.mono ? "font-mono text-sm" : "font-semibold"}>{row.dd}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* =================== Final CTA =================== */}
        <section className="grid-bg relative overflow-hidden border-t border-border/60">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/10 to-background" />
          <div className="container relative mx-auto px-4 text-center md:px-6">
            <Eyebrow>Build with us</Eyebrow>
            <h2 className="mx-auto mt-4 max-w-3xl font-headline text-3xl font-bold tracking-tight md:text-5xl">
              Let&apos;s build the next generation of{" "}
              <span className="text-gradient">AI and electronics</span> together.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Whether you want our products, our engineers, or both — start the conversation.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="h-14 px-8 text-lg" asChild>
                <Link href="/contact">
                  Talk to our team <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg" asChild>
                <a href="https://citra-ai.com" target="_blank" rel="noopener noreferrer">
                  Explore Citra AI <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
