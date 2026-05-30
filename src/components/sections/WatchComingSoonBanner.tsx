import Link from "next/link";
import { Watch } from "lucide-react";

export function WatchComingSoonBanner() {
  return (
    <div className="w-full bg-primary/10 border-b border-primary/20">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 px-4 py-3 text-center text-sm md:text-base">
        <span className="inline-flex items-center gap-2 font-semibold text-primary">
          <Watch className="h-4 w-4" />
          Trustedwear Watch — Launching 2027
        </span>
        <span className="text-muted-foreground">
          The watch is in active R&amp;D and not yet on sale.
        </span>
        <Link
          href="/watch#notify"
          className="font-semibold text-primary underline-offset-4 hover:underline"
        >
          Notify me at launch →
        </Link>
      </div>
    </div>
  );
}
