import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, MapPin, Siren, ShieldCheck } from "lucide-react";

const features = [
  {
    id: "live-view",
    title: "Instant View",
    fullTitle: "Instant Parent-Controlled Live View",
    description: "Get immediate visual confirmation. Our 7-camera system provides a parent-controlled live view of your child's surroundings during emergencies or check-ins.",
    image: "/features/live-view.svg",
    icon: <Camera className="w-6 h-6" />,
  },
  {
    id: "emergency",
    title: "Quick Reach",
    fullTitle: "Quickly Reach Your Child in Emergencies",
    description: "In an emergency, one tap connects you to a live audio and video stream alongside their exact GPS location, ensuring you have the full context to act fast.",
    image: "/features/emergency.svg",
    icon: <Siren className="w-6 h-6" />,
  },
  {
    id: "history",
    title: "Safety History",
    fullTitle: "Secure Family Safety History",
    description: "Access a secure, private history of your family's safety logs and location data, stored with the highest level of privacy for your peace of mind.",
    image: "/features/history.svg",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    id: "safe-zones",
    title: "Safe Zones",
    fullTitle: "Smart Safe Zone Awareness",
    description: "Define areas like school, home, or the park. Get instant notifications when your child arrives or leaves these safe zones.",
    image: "/features/safe-zones.svg",
    icon: <MapPin className="w-6 h-6" />,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="container mx-auto px-4 md:px-6">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">Parent-Approved Features</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Every tool is designed to provide visibility and connection without invading their privacy.
        </p>
      </div>
      <Tabs defaultValue={features[0].id} className="w-full">
        <TabsList className="flex flex-wrap h-auto justify-center bg-transparent gap-4 mb-12">
          {features.map((feature) => (
            <TabsTrigger
                key={feature.id}
                value={feature.id}
                className="flex items-center gap-2 px-6 py-3 rounded-full border bg-background data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary transition-all shadow-sm"
            >
              {feature.icon}
              <span className="font-bold">{feature.title}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        {features.map((feature) => (
          <TabsContent key={feature.id} value={feature.id} className="mt-0 focus-visible:outline-none">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-muted/30 p-8 md:p-12 rounded-[2rem] border border-primary/5">
              <div className="space-y-6 text-center lg:text-left">
                <h3 className="text-3xl font-bold font-headline leading-tight">{feature.fullTitle}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-primary/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={feature.image}
                  alt={feature.fullTitle}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
