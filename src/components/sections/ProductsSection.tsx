"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "TrustedWear Kids",
    description: "The ultimate safety companion for children. Features live parent-controlled view, safe zones, and whitelist calling.",
    image: "/images/girl-png.png",
    hint: "kids wearable",
    href: "/watch/products/kids",
    primary: true
  },
  {
    title: "TrustedWear Guardian",
    description: "Elegant and powerful security for women, commuters, and professionals. Features emergency SOS and secure recording.",
    image: "/images/women-trans.png",
    hint: "guardian wearable",
    href: "/watch/products/adult",
    primary: false
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="container mx-auto px-4 md:px-6">
      <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto">
        <span className="eyebrow">The collection</span>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">A guardian for everyone you love</h2>
        <p className="text-lg text-muted-foreground">
          Purpose-built editions for children and for women on the move — same in-house hardware, same security.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {products.map((product, index) => (
          <Card
            key={index}
            className={`card-glow flex flex-col overflow-hidden bg-card ${product.primary ? 'ring-1 ring-primary/40' : ''}`}
          >
            <div className="device-backplate aspect-square relative rounded-none p-8">
                 <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-8"
                    data-ai-hint={product.hint}
                />
            </div>
            <CardHeader className="flex-grow space-y-4 p-8">
                <div className="space-y-2 text-center md:text-left">
                    <CardTitle className="text-3xl font-headline">{product.title}</CardTitle>
                    <CardDescription className="text-lg">{product.description}</CardDescription>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button asChild size="lg" className="flex-1" variant={product.primary ? "default" : "outline"}>
                        <Link href={product.href}>View Details</Link>
                    </Button>
                    <Button asChild size="lg" className="flex-1" variant={product.primary ? "secondary" : "ghost"}>
                        <Link href="/watch#notify">Notify me at launch</Link>
                    </Button>
                </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
