import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function AppPreviewSection() {
  return (
    <section className="bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative aspect-video lg:aspect-square max-w-lg mx-auto">
             <Image
                src="https://picsum.photos/seed/app-dashboard/800/1000"
                alt="TrustedWear Parent App Dashboard"
                fill
                className="object-contain drop-shadow-2xl"
                data-ai-hint="parent mobile app"
             />
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">The Parent Dashboard</h2>
              <p className="text-lg text-muted-foreground">
                Your entire family's safety at your fingertips. Our intuitive app puts you in control, giving you connection without intrusion.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                    { title: "Live Location", desc: "Real-time GPS tracking" },
                    { title: "Safe Zones", desc: "Arrival & departure alerts" },
                    { title: "Instant View", desc: "One-tap camera access" },
                    { title: "Battery Status", desc: "Stay charged, stay connected" },
                    { title: "Whitelist Only", desc: "You control the contacts" },
                    { title: "SOS Alerts", desc: "Emergency priority notifications" }
                ].map((feature, i) => (
                    <div key={i} className="flex gap-3">
                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                        <div>
                            <h4 className="font-bold text-foreground">{feature.title}</h4>
                            <p className="text-sm text-muted-foreground">{feature.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
