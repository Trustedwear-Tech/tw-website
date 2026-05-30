import Link from "next/link";
import { Building2, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="section-darker text-muted-foreground border-t border-border/60">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand + company */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              <span className="font-bold text-foreground">Trustedwear Tech</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              AI &amp; electronics products and consulting. Makers of Citra AI and the
              Trustedwear security smartwatch — designed and built fully in-house.
            </p>
            <p className="text-xs leading-relaxed">
              Trustedwear Tech Private Limited
              <br />
              CIN: U29299BR2022PTC060732
              <br />
              GSTIN: 10AAJCT7985K1ZS
            </p>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <p className="font-semibold text-foreground">Products</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://citra-ai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-primary transition-colors"
                >
                  Citra AI
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <Link href="/watch" className="hover:text-primary transition-colors">
                  Trustedwear Watch (2027)
                </Link>
              </li>
              <li>
                <Link href="/watch/products/kids" className="hover:text-primary transition-colors">
                  Trustedwear Kids
                </Link>
              </li>
              <li>
                <Link href="/watch/products/adult" className="hover:text-primary transition-colors">
                  Trustedwear Guardian
                </Link>
              </li>
              <li>
                <Link href="/watch/enterprise" className="hover:text-primary transition-colors">
                  Watch for Enterprise
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <p className="font-semibold text-foreground">Services</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#ai" className="hover:text-primary transition-colors">
                  AI engineering
                </Link>
              </li>
              <li>
                <Link href="/services#electronics" className="hover:text-primary transition-colors">
                  Electronics &amp; embedded (ESDM)
                </Link>
              </li>
              <li>
                <Link href="/services#software" className="hover:text-primary transition-colors">
                  Software engineering
                </Link>
              </li>
              <li>
                <Link href="/company" className="hover:text-primary transition-colors">
                  Company
                </Link>
              </li>
              <li>
                <Link href="/watch/faq" className="hover:text-primary transition-colors">
                  Watch FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="font-semibold text-foreground">Reach us</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>
                  6th Floor, Desk V-126
                  <br />
                  Drowsy Monks Co-Working, DS Business Park
                  <br />
                  Saguna More Circle, Patna, Bihar, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:contact@trustedweartech.com" className="hover:text-primary transition-colors">
                  contact@trustedweartech.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:+918496977722" className="hover:text-primary transition-colors">
                  +91-8496977722
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} Trustedwear Tech Private Limited. All rights reserved.
          </p>
          <p className="text-xs">
            Incubated at IIT Patna · Supported by Startup India, Government of Bihar, and MeitY.
          </p>
        </div>
      </div>
    </footer>
  );
}
