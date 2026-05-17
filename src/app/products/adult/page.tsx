"use client";

import * as React from "react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Siren, ShieldCheck, Eye, Watch, Smartphone, HeartPulse } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { VideoPlayer } from "@/components/VideoPlayer";

const features = [
  {
    icon: <Camera className="w-10 h-10 text-primary" />,
    title: "Instant Live SOS",
    description: "One touch activates a live safety stream. Your trusted contacts receive your GPS location and real-time visual feed instantly.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Private Safety History",
    description: "Recordings are end-to-end encrypted. You own your safety data, stored securely for 30 days of peace of mind.",
  },
  {
    icon: <Eye className="w-10 h-10 text-primary" />,
    title: "Situational Awareness",
    description: "Seven micro-cameras offer a parent-controlled or user-activated view for total visibility in high-risk moments.",
  },
  {
    icon: <HeartPulse className="w-10 h-10 text-primary" />,
    title: "Health & Wellbeing",
    description: "Track your vitals and activity with integrated health monitoring and AI-powered wellness reports.",
  },
  {
    icon: <Watch className="w-10 h-10 text-primary" />,
    title: "Sophisticated Design",
    description: "A professional-grade watch that blends seamlessly with your personal and professional style.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-primary" />,
    title: "Standalone Safety",
    description: "With built-in LTE, your safety companion works independently from your phone, anywhere in the world.",
  }
];

const adultVideos = [
    "https://firebasestorage.googleapis.com/v0/b/trustedwear-website/o/girl-strolling1.mp4?alt=media&token=bedaa852-aad2-44e0-bb7c-97f6244bc674",
    "https://firebasestorage.googleapis.com/v0/b/trustedwear-website/o/girl-strolling-2.mp4?alt=media&token=193868f2-5c3c-4015-b1fe-40ebb48decb4"
];

const watchModels = [
    { src: "/images/women-trans.png", alt: "Guardian Classic", hint: "classic guardian" },
    { src: "/images/corporate.png", alt: "Guardian Pro", hint: "pro guardian" },
    { src: "/images/cor-female-tran.png", alt: "Guardian Elite", hint: "elite guardian" }
];

export default function AdultWatchPage() {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: false })
    );

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="bg-primary/5 py-20">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-4 md:px-6">
                <div className="space-y-8 text-center lg:text-left">
                    <h1 className="text-4xl font-bold tracking-tight md:text-6xl font-headline leading-tight">
                        TrustedWear Guardian: <br/><span className="text-primary">Your Always-On Bodyguard</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Sophisticated personal security for women, commuters, and high-stakes professionals. Because peace of mind should be as elegant as it is powerful.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Button size="lg" className="h-14 px-10 text-lg" asChild>
                            <Link href="/#buy">Pre-order Guardian</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-10 text-lg" asChild>
                            <Link href="/demo">Watch Live SOS Demo</Link>
                        </Button>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Carousel
                        plugins={[plugin.current]}
                        className="w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden"
                        opts={{ loop: true }}
                    >
                        <CarouselContent>
                            {adultVideos.map((videoSrc, index) => (
                                <CarouselItem key={index}>
                                    <VideoPlayer
                                        videoSrc={videoSrc}
                                        className="w-full aspect-square"
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>

        <section id="product-features" className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">Guardian Features</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Advanced security tools hidden inside a timeless professional design.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <Card key={index} className="border-none bg-muted/20 shadow-none rounded-2xl p-6 text-center">
                        <CardHeader className="items-center pb-4">
                            <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                                {feature.icon}
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <CardTitle className="font-headline text-2xl">{feature.title}</CardTitle>
                            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>

        <section id="our-designs" className="bg-primary/5 py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">The Guardian Collection</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Personal security that fits your lifestyle.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {watchModels.map((model, index) => (
                        <div key={index} className="bg-background relative w-full aspect-square rounded-3xl overflow-hidden shadow-xl p-8 border border-primary/5">
                            <Image
                                src={model.src}
                                alt={model.alt}
                                fill
                                className="object-contain p-8"
                                data-ai-hint={model.hint}
                            />
                            <div className="absolute bottom-4 left-0 right-0 text-center font-bold text-lg font-headline">
                                {model.alt}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
