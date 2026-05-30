import { Lock, Heart, ShieldCheck, EyeOff } from "lucide-react";

const securityFeatures = [
    {
      icon: <Lock className="w-8 h-8 text-primary" />,
      title: "Family Data Privacy",
      description: "Your family's data stays private and secure with industry-leading encryption. We never sell your information.",
    },
    {
      icon: <EyeOff className="w-8 h-8 text-primary" />,
      title: "Private Live View",
      description: "Only you and your designated trusted contacts can access the live view. Complete privacy, always.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Whitelist Calling",
      description: "Only pre-approved contacts can call the watch, protecting your child from unwanted communication.",
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Audit Transparency",
      description: "Full logs of who accessed the stream and when, so you always have complete visibility.",
    },
  ];

export function SecuritySection() {
    return (
        <section id="security" className="section-darker">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto">
                    <span className="eyebrow">Security by design</span>
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">Privacy built into the firmware</h2>
                    <p className="text-lg text-muted-foreground">
                        Security isn&apos;t bolted on — it&apos;s engineered in. On-device
                        end-to-end encryption, built into our own firmware, means the wearer owns
                        the key, and every layer respects your family&apos;s privacy.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {securityFeatures.map((feature, index) => (
                        <div key={index} className="card-glow flex items-start gap-6 bg-card p-8 rounded-2xl">
                            <div className="shrink-0 p-3 bg-primary/5 rounded-xl">
                                {feature.icon}
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold font-headline">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
