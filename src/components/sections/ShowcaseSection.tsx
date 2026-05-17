import Image from 'next/image';
import Link from 'next/link';

const showcases = [
  {
    title: "For Your Family",
    description: "Peace of mind for parents and security for adults, all in one stylish package.",
    products: [
      {
        image: "/images/girl-png.png",
        hint: "kid smartwatch",
        href: "/products/kids",
      },
      {
        image: "/images/women-trans.png",
        hint: "adult smartwatch",
        href: "/products/adult",
      },
    ]
  },
  {
    title: "For Professionals",
    description: "Ensure your safety and accountability in the workplace.",
    products: [
      {
        image: "/images/corporate.png",
        hint: "corporate smartwatch",
        href: "/products/adult",
      },
      {
        image: "/images/cor-female-tran.png",
        hint: "professional female smartwatch",
        href: "/products/adult",
      },
    ]
  }
];

export function ShowcaseSection() {
  return (
    <section className="container mx-auto px-4 md:px-6 my-16 md:my-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12">
        {showcases.map((showcase, index) => (
          <div key={index} className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              {showcase.products.map((product, pIndex) => (
                <Link href={product.href} key={pIndex} className="group block">
                  <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 ease-in-out group-hover:scale-105">
                    <Image
                      src={product.image}
                      alt={product.hint}
                      fill
                      className="object-contain"
                      data-ai-hint={product.hint}
                      sizes="(max-width: 768px) 40vw, (max-width: 1024px) 20vw, 22vw"
                    />
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="bg-card border border-primary/30 rounded-xl shadow-xl p-6 w-full text-center flex-grow flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold font-headline text-primary">
                  {showcase.title}
                </h2>
                <p className="mt-3 text-base text-muted-foreground">
                  {showcase.description}
                </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
