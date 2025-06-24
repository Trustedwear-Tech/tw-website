import { Lock, Server, ShieldQuestion, Fingerprint } from "lucide-react";

const securityFeatures = [
    {
      icon: <Lock className="w-8 h-8 text-primary" />,
      title: "End-to-End Encryption",
      description: "All communication between the watch, our app, and servers is fully encrypted, ensuring your data is private.",
    },
    {
      icon: <Server className="w-8 h-8 text-primary" />,
      title: "Secure Cloud Storage",
      description: "Your data is stored on secure, GDPR-compliant servers with multiple layers of protection against unauthorized access.",
    },
    {
      icon: <Fingerprint className="w-8 h-8 text-primary" />,
      title: "Privacy First",
      description: "For 100% privacy, you and your security partner exclusively own the encryption keys to your data, ensuring only you can decrypt it. This is handled autonomously and hassle-free. Your data is yours, and we never sell it.",
    },
    {
      icon: <ShieldQuestion className="w-8 h-8 text-primary" />,
      title: "Whitelist Calling",
      description: "Only pre-approved contacts can call the watch, protecting users from spam and unwanted communication.",
    },
  ];

export function SecuritySection() {
    return (
        <section id="security" className="bg-primary/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">Your Privacy is Our Priority</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We've built Trusted Wearables from the ground up with robust security measures to protect your data and privacy.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 mt-12 max-w-4xl mx-auto">
                    {securityFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="p-3 bg-background rounded-full shadow">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold font-headline">{feature.title}</h3>
                                <p className="text-muted-foreground mt-1">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
