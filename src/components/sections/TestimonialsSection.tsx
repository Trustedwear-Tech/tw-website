"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { Quote } from 'lucide-react';
import Image from "next/image";

const testimonials = [
  {
    quote: "My daughter loves her watch, and I love that I can instantly see she's safe at the park. It’s given us both so much more confidence.",
    name: "Sarah M.",
    role: "Mother of 7-year old",
    avatar: "https://picsum.photos/seed/parent1/100/100"
  },
  {
    quote: "The safe zones feature is a game changer. I get a ping when he reaches tuition, so I don't have to keep checking my phone.",
    name: "David K.",
    role: "Father of 10-year old",
    avatar: "https://picsum.photos/seed/parent2/100/100"
  },
  {
    quote: "Finally, a device that feels like it’s built for parents. It’s not about spying; it’s about that quiet peace of mind during the day.",
    name: "Priya R.",
    role: "Working Mother",
    avatar: "https://picsum.photos/seed/parent3/100/100"
  },
  {
    quote: "As a working mom, being able to check in and see my son's face while he's at summer camp is the highlight of my afternoon.",
    name: "Ananya S.",
    role: "Software Engineer",
    avatar: "https://picsum.photos/seed/parent4/100/100"
  }
];

export function TestimonialsSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
    );

    return (
        <section id="testimonials" className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">Stories from Our Families</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Real peace of mind from parents who rely on TrustedWear every day.
                </p>
            </div>
            <div className="mt-12">
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full"
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent className="-ml-4">
                        {testimonials.map((t, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <Card className="h-full border-none bg-primary/5 shadow-none rounded-3xl">
                                    <CardContent className="p-8 space-y-6 flex flex-col justify-between h-full">
                                        <div className="space-y-4">
                                            <Quote className="w-10 h-10 text-primary/30" />
                                            <p className="text-lg italic leading-relaxed">"{t.quote}"</p>
                                        </div>
                                        <div className="flex items-center gap-4 border-t pt-6">
                                            <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-sm">
                                                <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-foreground">{t.name}</p>
                                                <p className="text-sm text-muted-foreground">{t.role}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
}
