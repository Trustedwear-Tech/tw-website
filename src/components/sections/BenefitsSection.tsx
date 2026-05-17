import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, Users, Briefcase } from "lucide-react";

const userGroups = [
  {
    icon: <Baby className="w-10 h-10 text-primary" />,
    title: "For Parents & Kids",
    description: "Ensure your child's safety when they're at the bus stop or on playdates with live location and discreet remote viewing.",
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "For Working women",
    description: "Walk or commute with confidence. Silently record your surroundings or press the SOS button for an instant live-stream alert with your GPS location.",
  },
  {
    icon: <Briefcase className="w-10 h-10 text-primary" />,
    title: "For Professionals",
    description: "Ensure personal safety and accountability in professional environments with discreet recording and emergency features.",
  },
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
