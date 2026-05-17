import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const cases = [
  {
    title: "Society Play Monitoring",
    description: "Child playing downstairs while parent checks safely from home.",
    image: "https://picsum.photos/seed/kids-play/800/600",
    hint: "child playing"
  },
  {
    title: "Mall & Travel Safety",
    description: "Instantly locate and view your child in crowded spaces.",
    image: "https://picsum.photos/seed/mall/800/600",
    hint: "crowded mall"
  },
  {
    title: "School Pickup",
    description: "Know when your child reaches safely or needs a quick check-in.",
    image: "https://picsum.photos/seed/school/800/600",
    hint: "school bus"
  },
  {
    title: "Tuition & Travel",
    description: "Real-time awareness during commutes and extra-curricular activities.",
    image: "https://picsum.photos/seed/travel/800/600",
    hint: "child walking"
  }
];

export function UseCasesSection() {
  return (
    <section className="container mx-auto px-4 md:px-6">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">Peace of Mind in Every Moment</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          TrustedWear provides real-life visibility for the situations that matter most.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cases.map((item, index) => (
          <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative aspect-[4/3]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                data-ai-hint={item.hint}
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-xl font-headline">{item.title}</CardTitle>
              <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
