"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";

const productLinks = [
    { href: "/products/kids", label: "TrustedWear Kids" },
    { href: "/products/adult", label: "TrustedWear Guardian" },
];

const otherLinks = [
  { href: "/enterprise", label: "Enterprise" },
  { href: "/about", label: "About Us" },
  { href: "/demo", label: "Live Demo" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
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

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'border-b bg-background/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
      <Link href="/" className="flex items-center gap-2 font-bold text-xl">
        <Image src="/images/trusted-wear-logo.png" alt="TrustedWear" width={100} height={40} />
        <span className="hidden sm:inline">TrustedWear</span>
      </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 transition-colors hover:text-primary focus:outline-none data-[state=open]:text-primary">
              Wearables
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {productLinks.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                        <Link href={link.href}>{link.label}</Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {otherLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/#buy">
              Pre-order
            </Link>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader className="sr-only">
                <SheetTitle>Navigation Menu</SheetTitle>
                <SheetDescription>
                  Access website sections, products, and contact information.
                </SheetDescription>
              </SheetHeader>
              <nav className="grid gap-6 font-medium mt-10 p-4">
                 <Link href="/" onClick={() => setIsSheetOpen(false)} className="flex items-center gap-2 font-bold text-xl mb-4">
                    <Image src="/images/trusted-wear-logo.png" alt="TrustedWear" width={100} height={40} />
                    <span>TrustedWear</span>
                  </Link>
                <div>
                  <p className="text-lg font-semibold text-muted-foreground px-0 py-2 border-b mb-2">Wearables</p>
                  <div className="grid gap-4 pl-4">
                      {productLinks.map((link) => (
                          <Link
                              key={link.href}
                              href={link.href}
                              onClick={() => setIsSheetOpen(false)}
                              className="transition-colors hover:text-primary text-lg"
                          >
                              {link.label}
                          </Link>
                      ))}
                  </div>
                </div>
                {otherLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsSheetOpen(false)}
                    className="transition-colors hover:text-primary text-lg"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
