"use client";

import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";

const products = [
  {
    title: "Kids Watch",
    description: "A smart companion built for your child’s safety and growth. It features real-time video monitoring, GPS tracking, AI-powered chat, smart geofencing, SOS alerts, and seamless LTE connectivity—all wrapped in a vibrant, durable design for everyday adventures.",
    image: "/images/girl-png.png",
    hint: "Kid watch"
  },
  {
    title: "Adult Watch",
    description: "Empower your daily life with our AI-powered security smartwatch. Equipped with discreet cameras, SOS alerts, and cloud streaming, it protects against crimes like assault or abduction—while also delivering productivity tools like Memory Assist for effortless recall and note-taking.",
    image: "/images/women-trans.png",
    hint: "adult smart watch"
  },
  {
    title: "Memory Assist Watch",
    description: "Your productivity booster on the wrist—perfect for students and professionals. Capture lectures, meetings, or notes, and let AI generate summaries, explanations, and structured documents. Sync across devices and stay organized effortlessly with Memory Assist AI.",
    image: "/images/men-watch-green.png",
    hint: "productivity smart watch"
  },
  {
    title: "Corporate Watch",
    description: "Revolutionize field operations with real-time audio-video surveillance, automated attendance, and GPS tracking. Ideal for workforce monitoring, theft prevention, and compliance audits—this secure corporate watch boosts productivity and accountability like never before.",
    image: "/images/smart-watch2.png",
    hint: "Corporate smart watch"
  }
];


export function ProductsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="products" className="container mx-auto px-4 md:px-6 py-8">
      <div className="text-center space-y-3 mb-8">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl font-headline">Our Watch Models</h2>
        <p className="text-base text-muted-foreground max-w-xl mx-auto">
          We have a Trusted Wearables watch for everyone. Find the perfect fit for your family or business needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product, index) => (
          <Card
            key={index}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`bg-card overflow-hidden shadow-lg transition-all duration-300 ease-in-out ${
              hoveredCard === index ? 'scale-105 ring-2 ring-primary' : ''
            } cursor-pointer`}
          >
            <CardContent className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center h-full">
              <div className="space-y-2">
                <CardTitle className="font-headline text-xl">{product.title}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </div>
              <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain"
                    data-ai-hint={product.hint}
                  />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
