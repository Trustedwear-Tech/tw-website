import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, Users, Briefcase, BrainCircuit } from "lucide-react";

const userGroups = [
  {
    icon: <Baby className="w-10 h-10 text-primary" />,
    title: "For Parents & Kids",
    description: "Give your kids independence while ensuring their safety. Perfect for playdates and outdoor adventures. Watch them play remotely without even distrubing them. ",
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "For Working women",
    description: "Feel the liberty and confidence you always wanted for yourself. TW Watch silently captures audio, video, and GPS location using integrated micro-cameras and sensors, ensuring you’re never truly alone. Just press the SOS button — and your trusted contacts instantly receive a live stream and location for immediate rescue.",
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-primary" />,
    title: "For Productivity",
    description: "Stay on top of all your information with Memory Assist. Perfect for students and professionals to easily recall details and gain AI-based insights from lectures and meetings.",
  },
  {
    icon: <Briefcase className="w-10 h-10 text-primary" />,
    title: "For Corporates",
    description: "Enhance employee safety and improve Quality of Service and Transparency of work  for teams in the field. A smart investment in your workforce.",
  }
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="container mx-auto px-4 md:px-6">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">Who Can Benefit?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Trusted Wearables is designed to provide safety and connection for a wide range of users.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {userGroups.map((group, index) => (
          <Card key={index} className="text-center shadow-lg flex flex-col">
            <CardHeader className="items-center">
              <div className="p-4 bg-primary/10 rounded-full">
                {group.icon}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardTitle className="font-headline mb-2">{group.title}</CardTitle>
              <p className="text-muted-foreground">{group.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}