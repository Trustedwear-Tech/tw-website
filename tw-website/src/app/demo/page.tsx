import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Orbit, Watch, BrainCircuit, CloudCog, Briefcase } from 'lucide-react';

const demos = [
  {
    icon: <Orbit className="w-10 h-10 text-primary" />,
    title: "360° Capture & Cloud Sync",
    description: "Our watch captures a 360-degree view around the user, sending video and crisp audio from dual microphones directly to the cloud. This ensures you have a complete picture for security and clear recordings for Memory Assist productivity.",
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
    description: "Explore the intuitive and feature-rich operating systems designed for both kids and adults. Experience the seamless navigation and user-friendly design of our custom Watch OS.",
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
    icon: <BrainCircuit className="w-10 h-10 text-primary" />,
    title: "AI Memory Assist",
    description: "Interact with a live demo of Memory Assist. See how it captures your conversations and notes, then get AI-powered summaries, key takeaways, and structured information on demand.",
    content: (
        <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
            <Image
                src="https://placehold.co/1280x720.png"
                alt="Memory Assist Demo"
                fill
                className="object-cover"
                data-ai-hint="ai assistant chat"
                sizes="(max-width: 768px) 90vw, 45vw"
            />
        </div>
    )
  },
  {
    icon: <CloudCog className="w-10 h-10 text-primary" />,
    title: "Cloud Surveillance & Monitoring",
    description: "See how easy it is to access live video surveillance from anywhere. Our secure cloud platform lets you monitor feeds in real-time from your mobile app or the web.",
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
    title: "Corporate Dashboard & Workforce Management",
    description: "Empower managers to monitor employee audio/video for quality assurance, conduct post-incident analysis, and increase transparency. Includes features like GPS-based automated attendance and location tracking.",
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
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12">
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
      </main>
      <Footer />
    </div>
  );
}
