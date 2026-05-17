import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase, ShieldCheck, Truck, Users, MapPin, Database } from "lucide-react";
import Image from "next/image";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Solutions - TrustedWear',
  description: 'Workforce safety, logistics monitoring, and corporate security solutions powered by TrustedWear wearable technology.',
};

const solutions = [
  {
    icon: <Truck className="w-10 h-10 text-primary" />,
    title: "Logistics & Fleet Safety",
    description: "Real-time location and situational awareness for drivers and delivery personnel.",
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Workforce Monitoring",
    description: "Replace expensive bodycams with discreet, secure wearables for on-field staff accountability.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Corporate Security",
    description: "End-to-end encrypted incident recording for private security and high-risk environments.",
  },
  {
    icon: <MapPin className="w-10 h-10 text-primary" />,
    title: "GPS Attendance",
    description: "Automated geofenced attendance and location tracking for distributed teams.",
  },
  {
    icon: <Database className="w-10 h-10 text-primary" />,
    title: "Audit-Ready Logs",
    description: "Secure, tamper-proof audit trails for compliance and post-incident analysis.",
  },
  {
    icon: <Briefcase className="w-10 h-10 text-primary" />,
    title: "Executive Protection",
    description: "Personal security tools tailored for traveling executives and VIPs.",
  }
];

export default function EnterprisePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="bg-primary/5 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6">Enterprise Security Redefined</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Scaleable wearable surveillance for workforce safety, accountability, and logistics. Move beyond traditional bodycams with TrustedWear's integrated cloud ecosystem.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold font-headline">Built for Professional Performance</h2>
                    <p className="text-lg text-muted-foreground">
                        Our corporate dashboard provides centralized control over large-scale deployments, allowing managers to monitor safety feeds, review incident logs, and manage permissions with ease.
                    </p>
                    <ul className="space-y-3">
                        {["Secure Cloud Infrastructure", "API Integration", "Custom Permissions", "Detailed Reporting"].map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-primary" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src="https://picsum.photos/seed/enterprise-ui/1280/720"
                        alt="Enterprise Dashboard"
                        fill
                        className="object-cover"
                        data-ai-hint="enterprise dashboard"
                    />
                </div>
            </div>
        </section>

        <section className="bg-muted py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-headline">Enterprise Use Cases</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((sol, i) => (
                        <Card key={i} className="border-none shadow-md">
                            <CardHeader>
                                <div className="mb-4">{sol.icon}</div>
                                <CardTitle className="font-headline">{sol.title}</CardTitle>
                                <CardDescription className="text-base">{sol.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
