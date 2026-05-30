import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Eyebrow } from "@/components/sections/Eyebrow";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import {
  BrainCircuit,
  CircuitBoard,
  Code2,
  ArrowRight,
  Database,
  ShieldCheck,
  MonitorSmartphone,
  Factory,
  KeyRound,
  Cloud,
  GitBranch,
  Gauge,
  Compass,
  Hammer,
  Settings,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI & Electronics Consulting + Software Engineering",
  description:
    "Trustedwear Tech delivers consulting and engineering across artificial intelligence, electronics system design & manufacturing (ESDM) and embedded systems, and advanced software engineering — the same teams that build Citra AI and the Trustedwear smartwatch.",
};

const aiCapabilities = [
  {
    icon: <BrainCircuit className="h-6 w-6 text-primary" />,
    title: "Agentic platforms",
    desc: "Design and deploy Smart Apps, AI workflows, and autonomous agents on Citra — built in days, governed end-to-end.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    title: "Sovereign LLM deployment",
    desc: "Open-source models running on your GPUs, your VPC, or fully air-gapped. No vendor lock-in, no data egress.",
  },
  {
    icon: <Database className="h-6 w-6 text-primary" />,
    title: "Data & RAG engineering",
    desc: "Make ERP, CRM, documents, and APIs AI-reachable with zero copy, zero ETL — retrieval, evaluation, and guardrails included.",
  },
  {
    icon: <Layers className="h-6 w-6 text-primary" />,
    title: "Governance & audit",
    desc: "Per-tenant governance, decision records, and audit trails so regulated teams can trust every AI action.",
  },
];

const semiCapabilities = [
  {
    icon: <CircuitBoard className="h-6 w-6 text-cyan" />,
    title: "PCB & electronics design",
    desc: "Multi-layer board design, sensor and module integration, and power electronics for compact, low-power devices.",
  },
  {
    icon: <MonitorSmartphone className="h-6 w-6 text-cyan" />,
    title: "Custom OS & UI",
    desc: "Full in-house embedded operating systems and on-device user interfaces, tuned for responsiveness on constrained hardware.",
  },
  {
    icon: <KeyRound className="h-6 w-6 text-cyan" />,
    title: "Firmware & security",
    desc: "Real-time firmware and drivers with on-device end-to-end encryption built in — not bolted on after.",
  },
  {
    icon: <Factory className="h-6 w-6 text-cyan" />,
    title: "ESDM & wearable products",
    desc: "End-to-end electronics system design and manufacturing — from prototype to production. Proven on our own smartwatch, built fully in-house.",
  },
];

const softwareCapabilities = [
  {
    icon: <Code2 className="h-6 w-6 text-primary" />,
    title: "Full-stack product builds",
    desc: "Ship production web, mobile, and backend systems with modern, maintainable architectures.",
  },
  {
    icon: <Cloud className="h-6 w-6 text-primary" />,
    title: "Cloud & platform engineering",
    desc: "Infrastructure-as-code, containers, and secure deployment — on-prem, private cloud, or hybrid.",
  },
  {
    icon: <Gauge className="h-6 w-6 text-primary" />,
    title: "Reliability engineering",
    desc: "Observability, performance, and resilience for mission-critical systems that cannot go down.",
  },
];

const engagementSteps = [
  {
    icon: <Compass className="h-7 w-7 text-primary" />,
    phase: "Discover",
    desc: "We map the problem, the constraints, and the success criteria — and prove feasibility fast.",
  },
  {
    icon: <Hammer className="h-7 w-7 text-cyan" />,
    phase: "Build",
    desc: "Our product teams design and engineer the solution, shipping in tight, demonstrable increments.",
  },
  {
    icon: <Settings className="h-7 w-7 text-primary" />,
    phase: "Operate",
    desc: "We run, monitor, and harden it in production — or hand over a team that owns it confidently.",
  },
];

function CapabilityGrid({
  capabilities,
}: {
  capabilities: { icon: React.ReactNode; title: string; desc: string }[];
}) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
      {capabilities.map((c) => (
        <Card key={c.title} className="card-glow bg-card">
          <CardHeader>
            <div className="mb-3 inline-block w-fit rounded-xl bg-secondary p-3">{c.icon}</div>
            <CardTitle className="font-headline text-lg">{c.title}</CardTitle>
            <CardDescription className="pt-2 text-base leading-relaxed">{c.desc}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="grid-bg relative overflow-hidden border-b border-border/60 pt-24">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/10 to-background" />
          <div className="container relative mx-auto max-w-4xl px-4 text-center md:px-6">
            <Eyebrow>Consulting &amp; engineering</Eyebrow>
            <h1 className="mt-6 font-headline text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              AI &amp; Electronics consulting,{" "}
              <span className="text-gradient">advanced software engineering.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              The same teams that build Citra AI and the Trustedwear watch deliver them for
              you. We bring product discipline — not slideware — to your hardest AI,
              electronics, and software problems.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="h-14 px-8 text-lg" asChild>
                <Link href="/contact">
                  Start a conversation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* AI practice */}
        <section id="ai" className="container mx-auto scroll-mt-20 px-4 md:px-6">
          <SectionHeading
            align="left"
            eyebrow="Practice 01 · Artificial Intelligence"
            title="Sovereign, agentic AI that ships"
            subtitle="From first prototype to governed production — powered by our own platform, Citra."
          />
          <CapabilityGrid capabilities={aiCapabilities} />
        </section>

        {/* Electronics & embedded (ESDM) practice */}
        <section id="electronics" className="section-darker scroll-mt-20">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              align="left"
              eyebrow="Practice 02 · Electronics & Embedded (ESDM)"
              title="Designed and built in-house"
              subtitle="PCB, firmware, OS, and UI — engineered and manufactured as one system. Proven on the Trustedwear watch, built fully in-house."
            />
            <CapabilityGrid capabilities={semiCapabilities} />
          </div>
        </section>

        {/* Software engineering */}
        <section id="software" className="container mx-auto scroll-mt-20 px-4 md:px-6">
          <SectionHeading
            align="left"
            eyebrow="Practice 03 · Software Engineering"
            title="Advanced software, built to last"
            subtitle="Full-stack, cloud-native, and reliable — the engineering backbone behind everything we deliver."
          />
          <CapabilityGrid capabilities={softwareCapabilities} />
        </section>

        {/* Engagement model */}
        <section className="section-darker">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              eyebrow="How we engage"
              title="Discover → Build → Operate"
              subtitle="Fixed-scope delivery or an embedded engineering team — whichever fits how you work."
            />
            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
              {engagementSteps.map((s, i) => (
                <Card key={s.phase} className="card-glow relative bg-card">
                  <CardHeader>
                    <div className="mb-3 flex items-center justify-between">
                      <div className="inline-block w-fit rounded-xl bg-secondary p-3">{s.icon}</div>
                      <span className="font-headline text-4xl font-bold text-border">
                        0{i + 1}
                      </span>
                    </div>
                    <CardTitle className="font-headline text-xl">{s.phase}</CardTitle>
                    <CardDescription className="pt-2 text-base leading-relaxed">{s.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <GitBranch className="h-4 w-4 text-primary" />
              Flexible models: fixed-scope projects, embedded teams, or product-led delivery on Citra.
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="grid-bg relative overflow-hidden border-t border-border/60">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/10 to-background" />
          <div className="container relative mx-auto max-w-3xl px-4 text-center md:px-6">
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-5xl">
              Tell us what you&apos;re building.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We&apos;ll bring the AI, the electronics, and the software engineering to make it real.
            </p>
            <div className="mt-8">
              <Button size="lg" className="h-14 px-8 text-lg" asChild>
                <Link href="/contact">
                  Talk to our engineers <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
