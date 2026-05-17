"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const kidsFaces = [
  { src: "/images/Kids Watch 1.png", alt: "Kids Watch Face 1", hint: "space watchface" },
  { src: "/images/Kids Watch 2.png", alt: "Kids Watch Face 2", hint: "dinosaur watchface" },
  { src: "/images/Kids Watch 3.png", alt: "Kids Watch Face 3", hint: "cat watchface" },
  { src: "/images/Kids Watch 4.png", alt: "Kids Watch Face 4", hint: "robot watchface" },
  { src: "/images/Kids Watch 5.png", alt: "Kids Watch Face 5", hint: "car watchface" },
  { src: "/images/Kids Watch 6.png", alt: "Kids Watch Face 6", hint: "unicorn watchface" },
  { src: "/images/Kids Watch 7.png", alt: "Kids Watch Face 7", hint: "bear watchface" },
  { src: "/images/Kids Watch 8.png", alt: "Kids Watch Face 8", hint: "playful watchface" },
];

const adultFaces = [
  { src: "/images/Adults Watch 1.png", alt: "Adult Watch Face 1", hint: "classic watchface" },
  { src: "/images/Adults Watch 2.png", alt: "Adult Watch Face 2", hint: "elegant watchface" },
  { src: "/images/Adults Watch 3.png", alt: "Adult Watch Face 3", hint: "modern watchface" },
  { src: "/images/Adults Watch 4.png", alt: "Adult Watch Face 4", hint: "digital watchface" },
  { src: "/images/Adults Watch 5.png", alt: "Adult Watch Face 5", hint: "minimalist watchface" },
  { src: "/images/Adults Watch 6.png", alt: "Adult Watch Face 6", hint: "chronograph watchface" },
  { src: "/images/Adults Watch 7.png", alt: "Adult Watch Face 7", hint: "sporty watchface" },
  { src: "/images/Adults Watch 8.png", alt: "Adult Watch Face 8", hint: "stylish watchface" },
];

export function WatchFacesSection() {
  const renderFaces = (faces: {src: string; alt: string; hint: string}[]) => (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
      {faces.map((face, index) => (
        <div key={index} className="relative group aspect-square cursor-pointer overflow-hidden rounded-full shadow-lg">
          <div className="absolute inset-0 bg-white rounded-full transition-transform duration-300 ease-in-out group-hover:scale-105" />
          <Image
              src={face.src}
              alt={face.alt}
              fill
              className="object-cover p-1 rounded-full transition-transform duration-300 ease-in-out group-hover:scale-105"
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 15vw"
              data-ai-hint={face.hint}
            />
        </div>
      ))}
    </div>
  );

  return (
    <section id="watch-faces" className="bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">Customize Your Style</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from a variety of watch faces to match your personality and mood.
          </p>
        </div>
        <Tabs defaultValue="kids" className="w-full max-w-5xl mx-auto mt-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="kids">For Kids</TabsTrigger>
            <TabsTrigger value="adults">For Adults</TabsTrigger>
          </TabsList>
          <TabsContent value="kids" className="mt-8">
            {renderFaces(kidsFaces)}
          </TabsContent>
          <TabsContent value="adults" className="mt-8">
            {renderFaces(adultFaces)}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
