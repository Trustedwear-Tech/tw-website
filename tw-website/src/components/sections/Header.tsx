"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "/#products", label: "Products" },
  { href: "/#features", label: "Features" },
  { href: "/demo", label: "Demo" },
  { href: "/#buy", label: "Buy Now" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLinksContent = () => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => setIsSheetOpen(false)}
          className="transition-colors hover:text-primary text-lg md:text-sm"
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'border-b bg-background/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
      <Link href="/" className="flex items-center gap-2 font-bold text-xl">
        <Image src="/images/trusted-wear-logo.png" alt="Trusted Wearables" width={100} height={40} />
        <span>Trusted Wearables</span>
      </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <NavLinksContent />
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/#buy">
              Order Now
            </Link>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 font-medium mt-10 p-4">
                 <Link href="/" onClick={() => setIsSheetOpen(false)} className="flex items-center gap-2 font-bold text-xl mb-4">
                    <Image src="/images/trusted-wear-logo.png" alt="Trusted Wearables" width={100} height={40} />
                    <span>Trusted Wearables</span>
                  </Link>
                <NavLinksContent />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
