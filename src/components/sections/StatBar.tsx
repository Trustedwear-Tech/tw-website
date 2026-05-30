import { cn } from "@/lib/utils";

export interface Stat {
  value: string;
  label: string;
}

/** Row of headline stats with the brand gradient on the numbers. */
export function StatBar({
  stats,
  className,
}: {
  stats: Stat[];
  className?: string;
}) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/40 sm:grid-cols-4",
        className
      )}
    >
      {stats.map((s) => (
        <div key={s.label} className="bg-card px-6 py-8 text-center">
          <dt className="text-gradient font-headline text-3xl font-bold md:text-4xl">
            {s.value}
          </dt>
          <dd className="mt-2 text-sm text-muted-foreground">{s.label}</dd>
        </div>
      ))}
    </dl>
  );
}
