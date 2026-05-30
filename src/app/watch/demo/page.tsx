import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { WatchComingSoonBanner } from "@/components/sections/WatchComingSoonBanner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Orbit, Watch, CloudCog, Briefcase } from 'lucide-react';
import { VideoSection } from "@/components/sections/VideoSection";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trustedwear Watch — Interactive Demos',
  description: 'Preview the core features of the Trustedwear smartwatch (launching 2027): 360° capture, Watch OS, cloud surveillance, corporate dashboard.',
};

const demos = [
  {
    icon: <Orbit className="w-10 h-10 text-primary" />,
    title: "360° Capture & Cloud Sync",
    description: "See how our 7 micro-cameras capture a full 360° view, streaming it securely to the cloud. This provides a complete picture for real-time rescue or post-incident identification of offenders.",
    content: (
        <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
            <Image
                src="https://placehold.co/1280x720.png"
                alt="360 Degree Video Capture Demo"
                fill
                className="object-cover"
                data-ai-hint="360 camera view"
                sizes="(max-width: 768px) 90vw, 45vw"
            />
        </div>
    )
  },
  {
    icon: <Watch className="w-10 h-10 text-primary" />,
    title: "Watch OS UI",
    description: "Experience our intuitive Watch OS for kids and adults. Enjoy seamless navigation and user-friendly design.",
    content: (
        <Tabs defaultValue="kids" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="kids">Kids OS</TabsTrigger>
                <TabsTrigger value="adults">Adults OS</TabsTrigger>
            </TabsList>
            <TabsContent value="kids" className="mt-4">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                    <Image
                        src="https://placehold.co/1280x720.png"
                        alt="Kids Watch OS UI"
                        fill
                        className="object-cover"
                        data-ai-hint="smartwatch ui kids"
                        sizes="(max-width: 768px) 90vw, 45vw"
                    />
                </div>
            </TabsContent>
            <TabsContent value="adults" className="mt-4">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                    <Image
                        src="https://placehold.co/1280x720.png"
                        alt="Adult Watch OS UI"
                        fill
                        className="object-cover"
                        data-ai-hint="smartwatch ui adult"
                        sizes="(max-width: 768px) 90vw, 45vw"
                    />
                </div>
            </TabsContent>
        </Tabs>
    )
  },
  {
    icon: <CloudCog className="w-10 h-10 text-primary" />,
    title: "Cloud Surveillance & Monitoring",
    description: "Access live video surveillance anywhere. Our secure cloud platform allows real-time monitoring from your mobile or web app.",
    content: (
        <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
            <Image
                src="https://placehold.co/1280x720.png"
                alt="Cloud Surveillance Demo"
                fill
                className="object-cover"
                data-ai-hint="security camera dashboard"
                sizes="(max-width: 768px) 90vw, 45vw"
            />
        </div>
    )
  },
  {
    icon: <Briefcase className="w-10 h-10 text-primary" />,
    title: "Corporate Dashboard for Post-Incident Analysis",
    description: "Review audio/video for quality assurance, analyze incidents, and boost transparency. Includes GPS attendance and location tracking.",
    content: (
        <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
            <Image
                src="https://placehold.co/1280x720.png"
                alt="Corporate Dashboard Demo"
                fill
                className="object-cover"
                data-ai-hint="corporate dashboard employee monitoring"
                sizes="(max-width: 768px) 90vw, 45vw"
            />
        </div>
    )
  }
];

export default function DemoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <WatchComingSoonBanner />
      <main className="flex-grow">
        <VideoSection
          id="video"
          title="See Trusted Wearables in Action"
          description="Watch our short video to discover how Trusted Wearables can bring you peace of mind."
          videoId="P46oM4eA_AE"
          thumbnailHint="smartwatch lifestyle"
          className="pb-0"
        />
        <section className="container mx-auto px-4 md:px-6 py-12">
            <div className="text-center space-y-4 mb-12">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl font-headline">
                Interactive Demos
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the core features of Trusted Wearables firsthand. Explore the interactive demos below to see how our technology works.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {demos.map((demo, index) => (
                    <Card key={index} className="shadow-lg flex flex-col">
                        <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                            <div className="p-1">{demo.icon}</div>
                            <div className="flex-grow">
                                <CardTitle className="font-headline text-2xl">{demo.title}</CardTitle>
                                <CardDescription className="mt-2 text-base">{demo.description}</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col justify-center">
                            {demo.content}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
