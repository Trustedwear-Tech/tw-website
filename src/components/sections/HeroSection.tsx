"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export function HeroSection() {
  return (
    <section id="home" className="grid-bg relative w-full overflow-hidden border-b border-border/60 pt-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/10 via-background/40 to-background" />
      <div className="container relative mx-auto grid grid-cols-1 items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <div className="space-y-8 text-center md:text-left animate-in fade-in slide-in-from-left duration-700">
          <div className="eyebrow">
            Security wearable · Designed &amp; built in-house
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl font-headline leading-[1.1]">
            Safety for <span className="text-gradient">women and kids</span>, designed and built in-house.
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl max-w-xl leading-relaxed">
            The Trustedwear Watch is a security wearable we engineered fully in-house — our
            own electronics, firmware, custom OS, and UI — with a 7-camera array and
            one-touch live SOS that keep the people you love connected, visible, and protected.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <Button size="lg" className="h-14 px-8 text-lg" asChild>
              <Link href="/watch/products/kids">Explore Kids Wear</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg" asChild>
              <Link href="/watch/demo">Watch Live Demo</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center animate-in fade-in slide-in-from-right duration-1000">
          <div className="glow-radial device-backplate w-full max-w-[520px] p-10">
            <div className="relative aspect-square w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hero.svg?v=4"
                alt="Child wearing a Trustedwear smart safety watch with live location"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
