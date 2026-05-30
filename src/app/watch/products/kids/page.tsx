"use client";

import * as React from "react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { WatchComingSoonBanner } from "@/components/sections/WatchComingSoonBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, MapPin, Siren, Map, Shield, Smile, Gamepad2, Phone, Bot, MessageSquare, Signal, Bluetooth, Smartphone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { VideoPlayer } from "@/components/VideoPlayer";
import Image from "next/image";

const features = [
  {
    icon: <Camera className="w-10 h-10 text-primary" />,
    title: "Instant Parent View",
    description: "Get a full view of your child's surroundings when needed. Seven discreet micro-cameras provide a seamless visual feed directly to your phone for peace of mind.",
  },
  {
    icon: <MapPin className="w-10 h-10 text-primary" />,
    title: "Real-Time Location",
    description: "Know exactly where they are. Follow their journey with live GPS updates and detailed location history.",
  },
  {
    icon: <Siren className="w-10 h-10 text-primary" />,
    title: "Emergency Reach",
    description: "A dedicated SOS button lets your child quickly reach you. Instantly receive their location and a live safety stream.",
  },
  {
    icon: <Map className="w-10 h-10 text-primary" />,
    title: "Smart Safe Zones",
    description: "Create geofenced safe areas like school or the park. Get instant notifications when they arrive or depart.",
  },
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: "Safe Contact Whitelist",
    description: "Manage their contact list through your app. They can only receive calls and messages from people you approve.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-primary" />,
    title: "Independence Mode",
    description: "Disable games and distractions remotely during school hours, keeping the focus on learning while staying safe.",
  },
  {
    icon: <Smile className="w-10 h-10 text-primary" />,
    title: "Fun Customization",
    description: "Let them express themselves with kid-friendly watch faces and comfortable, durable straps.",
  },
  {
    icon: <Phone className="w-10 h-10 text-primary" />,
    title: "Crystal Clear Voice",
    description: "High-quality two-way voice calling ensures you can always hear their voice clearly.",
  }
];

const uiDemos = [
    {
        label: "AI Learning Buddy",
        videoSrc: "https://firebasestorage.googleapis.com/v0/b/trustedwear-website/o/Kids%20Chat%20Video%20(1).mp4?alt=media&token=9130427e-6f29-4c84-bf1d-f617030eb625"
    },
    {
        label: "Fun Safe Games",
        videoSrc: "https://firebasestorage.googleapis.com/v0/b/trustedwear-website/o/Kids%20Game%20Video.mp4?alt=media&token=02fca25b-2062-4e45-924f-5540ae4e6086"
    },
    {
        label: "Kids Watchfaces",
        videoSrc: "https://firebasestorage.googleapis.com/v0/b/trustedwear-website/o/Kids%20Watch%20Faces%20Video.mp4?alt=media&token=2d77066e-d973-48ca-ad18-e84fcf666600"
    }
];

export default function KidsWatchPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <WatchComingSoonBanner />
      <main className="flex-grow">
        <section className="grid-bg relative overflow-hidden border-b border-border/60 pt-24 pb-20">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/10 to-background" />
            <div className="container relative mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-4 md:px-6">
                <div className="space-y-8 text-center lg:text-left">
                    <span className="eyebrow">Trustedwear Kids</span>
                    <h1 className="text-4xl font-bold tracking-tight md:text-6xl font-headline leading-tight">
                        Safe. Smart. <span className="text-gradient">Connected.</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Give your child the freedom to explore while you enjoy absolute peace of mind.
                        Designed and built fully in-house on a custom kids OS — the only wearable that
                        keeps you visually connected.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Button size="lg" className="h-14 px-10 text-lg" asChild>
                            <Link href="/watch#notify">Notify me at launch</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-10 text-lg" asChild>
                            <Link href="#product-features">Explore Features</Link>
                        </Button>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <VideoPlayer
                        videoSrc="https://firebasestorage.googleapis.com/v0/b/trustedwear-website/o/fbb253267bde47e98892484b6d5a60be.mp4?alt=media&token=667a8580-0c30-4f2b-8568-bb02ae35ac10"
                        className="w-full max-w-sm aspect-square rounded-3xl shadow-2xl overflow-hidden"
                    />
                </div>
            </div>
        </section>

        <section id="product-features" className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">Built for a Parent's Peace of Mind</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Everything you need to stay connected to your child's daily world.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <Card key={index} className="card-glow text-center bg-card rounded-2xl p-4 flex flex-col">
                        <CardHeader className="items-center pb-4">
                            <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                                {feature.icon}
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-2">
                            <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
        
        <section className="section-darker">
            <div className="container mx-auto px-4 md:px-6 text-center space-y-16">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">Learning & Engagement</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      More than a safety device — a friend that grows with them.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                    {uiDemos.map((demo, index) => (
                        <div key={index} className="card-glow bg-card rounded-3xl p-6 w-full max-w-[340px] flex flex-col">
                            <VideoPlayer
                                videoSrc={demo.videoSrc}
                                className="w-full aspect-square rounded-2xl overflow-hidden"
                                showControls={false}
                            />
                            <p className="text-center mt-6 font-bold text-xl font-headline">{demo.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="our-designs" className="py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">Designed for Kids</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Comfortable, durable, and ready for adventure.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    <div className="device-backplate relative aspect-square overflow-hidden p-8">
                        <Image
                            src="/images/boy-blue1.png"
                            alt="Kids Watch Sky Blue"
                            fill
                            className="object-contain p-8"
                            data-ai-hint="blue kids watch"
                        />
                    </div>
                    <div className="device-backplate relative aspect-square overflow-hidden p-8">
                        <Image
                            src="/images/girl-png.png"
                            alt="Kids Watch Petal Pink"
                            fill
                            className="object-contain p-8"
                            data-ai-hint="pink kids watch"
                        />
                    </div>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
