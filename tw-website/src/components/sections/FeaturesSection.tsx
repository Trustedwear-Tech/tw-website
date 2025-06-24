import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const features = [
  {
    id: "cloud-storage",
    title: "Cloud Storage",
    fullTitle: "Secure Cloud Recording",
    description: "Your audio and video recordings from smartwatch are automatically and securely stored in the cloud, accessible anytime for your security.",
    image: "/images/cloud_storage.png",
    hint: "cloud storage security"
  },
  {
    id: "live-stream",
    title: "Live View",
    fullTitle: "Live Audio & Video Streaming",
    description: "Check in on your loved ones in real-time. Discreetly stream live audio and video from the watch directly to your app.",
    image: "/images/live_view.png",
    hint: "live video stream"
  },
  {
    id: "smart-sos",
    title: "Smart SOS",
    fullTitle: "Intelligent SOS Alerts",
    description: "A dedicated SOS button instantly sends an alert with live location, audio, and video to emergency contacts.",
    image: "/images/corporate_watch.webp",
    hint: "smartwatch sos button"
  },
  {
    id: "memory-assist",
    title: "Memory Assist",
    fullTitle: "AI-Powered Memory Assist",
    description: "Record conversations or lectures and let our AI create summaries, key takeaways, and structured notes to boost your productivity.",
    image: "/images/memory_assit.png",
    hint: "ai assistant notes"
  },
  {
    id: "security",
    title: "Privacy",
    fullTitle: "Advanced Security & Privacy",
    description: "Your data is protected with end-to-end encryption, and you possess its encryption key , no one can access this data except you and your security partner",
    image: "/images/women-trans.png",
    hint: "data security lock"
  },
  {
    id: "corporate",
    title: "For Corporate",
    fullTitle: "Corporate & Workforce Solutions",
    description: "Enhance lone worker safety, monitor their Quality of Service in the field, and get post incident insight to create transparency in organization.",
    image: "/images/men-watch-green.png",
    hint: "business team"
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="container mx-auto px-4 md:px-6">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">Packed with Powerful Features</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Trusted Wearables is more than just a watch. It's a guardian on your wrist.
        </p>
      </div>
      <Tabs defaultValue={features[0].id} className="w-full mt-12">
        <TabsList className="flex flex-wrap h-auto justify-center">
          {features.map((feature) => (
            <TabsTrigger key={feature.id} value={feature.id} className="flex-1 min-w-[120px]">
              {feature.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {features.map((feature) => (
          <TabsContent key={feature.id} value={feature.id} className="mt-8 bg-primary/5 p-6 rounded-lg">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-4 text-center md:text-left">
                <h3 className="text-2xl font-semibold font-headline">{feature.fullTitle}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.fullTitle}
                  fill
                  className="object-contain"
                  data-ai-hint={feature.hint}
                  sizes="(max-width: 768px) 90vw, 40vw"
                />
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
