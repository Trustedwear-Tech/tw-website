"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const kidsFaces = [
  { src: "/images/kids-watchface1.png", alt: "Kids Watch Face 1", hint: "playful watchface" },
  { src: "/images/kids-watchface2.png", alt: "Kids Watch Face 2", hint: "colorful watchface" },
  { src: "/images/kids-watchface3.png", alt: "Kids Watch Face 3", hint: "animal watchface" },
  { src: "/images/kids-watchface4.png", alt: "Kids Watch Face 4", hint: "dinosaur watchface" },
];

const adultFaces = [
  { src: "/images/adult-watchface1.png", alt: "Adult Watch Face 1", hint: "classic watchface" },
  { src: "/images/adult-watchface3.png", alt: "Adult Watch Face 2", hint: "classic watchface" },
  { src: "/images/adult-watchface4.png", alt: "Adult Watch Face 3", hint: "classic watchface" },
  { src: "/images/adult-watchface5.png", alt: "Adult Watch Face 4", hint: "classic watchface" },
];

export function WatchFacesSection() {
  const renderFaces = (faces: typeof kidsFaces) => (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
      {faces.map((face, index) => (
        <div key={index} className="group relative aspect-square rounded-full overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-150 cursor-pointer">
          <Image
            src={face.src}
            alt={face.alt}
            fill
            className="object-cover scale-[1.65] group-hover:scale-[1.85] transition-transform duration-300"
            sizes="(max-width: 640px) 45vw, 22vw"
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
            Choose from a wide variety of watch faces to match your personality and mood.
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
