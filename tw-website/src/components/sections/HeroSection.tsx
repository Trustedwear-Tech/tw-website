"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import React from "react";

const slides = [
  {
    title: (
      <span className="bg-gradient-to-r from-primary to-ring bg-clip-text text-transparent">
        Wearable Intelligence for Safety and Productivity.
      </span>
    ),
    description: (
      <>
        🛡 Security That Never Sleeps. Meet the TW Watch — Your Always-On Bodyguard
        <br />
        🧠 Memory Assist AI- Boost Productivity with Effortless Recall and AI-Driven Insights
      </>
    ),
    image: "/images/women-trans.png",
    hint: "smart watch"
  },
  {
    title: "Solution for Human Security",
    description: "People can wear  our smartwatch which discreetly integrates multiple micro camera and streams real-time footage along with GPS location to the cloud, where it remains accessible for up to 30 days. This is accessible live to monitor and care your loves ones and also during emergency to rescue and to catch the criminal behind it.",
    image: "/images/kids-boy-trans.png",
    hint: "Adult watch"
  },
  {
    title: "Memory Assist AI for productivity",
    description: "Instantly retrieve anything you’ve heard, or noted—lectures, meetings, documents, phone numbers, IDs, or personal notes—through a simple, chat-based interface." +
    "Get quick summaries, key takeaways, topic explanations, or structured notes on demand based on information uploaded to it." +
    "Export notes to Evernote, OneNote, MS Word, or store them securely within the Memory Assist platform." +
    "Record voice, upload photos, documents, and type notes directly via mobile, or laptop—anytime, anywhere." +
    "Automatically syncs across all devices, ensuring your data is always up to date and accessible in real-time.",
    image: "/images/kids-smart-watch2.webp",
    hint: "Memory assit watch"
  },
  {
    title: "Corporate watch for workforce monitoring and productivity",
    description: "Our innovative corporate watch, featuring a built-in camera, microphone, and GPS ensures seamless real-time monitoring by securely capturing and uploading audio, video, and location data to the cloud.",
    image: "/images/corporate_watch.webp",
    hint: "Corporate watch"
  }
];

export function HeroSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="home" className="w-full bg-primary/5 pt-16">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
                <div className="space-y-6 text-center md:text-left">
                  <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl font-headline">
                    {slide.title}
                  </h1>
                  <p className="text-lg text-muted-foreground md:text-xl">
                    {slide.description}
                  </p>
                  <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                    <Button size="lg" asChild>
                      <a href="#products">Explore Products</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#features">Learn More</a>
                    </Button>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className={`relative w-full ${index === 3 ? 'max-w-lg' : 'max-w-[450px]'} aspect-square`}>
                    <Image
                      src={slide.image}
                      alt="Trusted Wearables Watch"
                      fill
                      className="object-contain rounded-lg shadow-2xl"
                      data-ai-hint={slide.hint}
                      priority={index === 0}
                      sizes={index === 3 ? "(max-width: 768px) 90vw, 512px" : "(max-width: 768px) 90vw, 450px"}
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-x-0 bottom-12 md:bottom-16">
            <div className="container mx-auto flex justify-center md:justify-start space-x-3">
                {Array.from({ length: count }).map((_, index) => (
                    <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                        current === index ? 'w-9 bg-primary' : 'w-3 bg-muted hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
}
