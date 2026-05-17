"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function HeroSection() {
  return (
    <section id="home" className="w-full bg-gradient-to-b from-primary/10 to-background pt-20">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <div className="space-y-8 text-center md:text-left animate-in fade-in slide-in-from-left duration-700">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
             Family Safety Wearables
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl font-headline leading-tight">
            Stay Connected to Your Child — <span className="text-primary">Anytime, Anywhere</span>
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl max-w-xl leading-relaxed">
            Peace of mind on your child’s wrist. Smart family safety companions designed for connection, visibility, and real-time awareness.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <Button size="lg" className="h-14 px-8 text-lg" asChild>
              <Link href="/products/kids">Explore Kids Wear</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg" asChild>
              <Link href="/demo">Watch Live Demo</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center animate-in fade-in slide-in-from-right duration-1000">
          <div className="relative w-full max-w-[550px] aspect-[4/5] md:aspect-square">
            <Image
              src="https://picsum.photos/seed/happy-child/1000/1000"
              alt="Happy child wearing TrustedWear"
              fill
              className="object-cover rounded-3xl shadow-2xl"
              data-ai-hint="happy child"
              priority
              sizes="(max-width: 768px) 90vw, 550px"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden lg:block">
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-bold">Live: Park Campus</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
