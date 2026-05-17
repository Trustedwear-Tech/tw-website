import React from "react";
import { Smartphone, ShieldCheck, Heart } from "lucide-react";

const steps = [
    {
        icon: <ShieldCheck className="w-12 h-12 text-primary" />,
        title: "Wear with Confidence",
        description: "Your child wears the TrustedWear watch during their daily activities.",
    },
    {
        icon: <Smartphone className="w-12 h-12 text-primary" />,
        title: "Stay Connected",
        description: "Use the parent app for live location, safe zone alerts, and whitelist calling.",
    },
    {
        icon: <Heart className="w-12 h-12 text-primary" />,
        title: "Parent-Controlled View",
        description: "Instantly activate a live view in emergencies to quickly reach your child.",
    },
];

export function HowItWorksSection() {
    return (
        <section id="how-it-works" className="bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">Simple Safety for Daily Life</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Three simple steps to bridge the gap between independence and supervision.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-6">
                            <div className="bg-background rounded-3xl p-6 shadow-lg border border-primary/10">
                                {step.icon}
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-headline text-2xl font-bold">{step.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
