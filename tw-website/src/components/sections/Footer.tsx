import Link from 'next/link';
import { Watch } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <Watch className="h-5 w-5 text-primary" />
          <span className="font-semibold">Trusted Wearables</span>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Trusted Wearables Inc. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="#terms" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="#terms" className="text-sm hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
