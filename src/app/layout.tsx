import type {Metadata} from 'next';
import '@/app/globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Inter, Space_Grotesk } from 'next/font/google';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://trustedweartech.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Trustedwear Tech — AI & Electronics Products and Consulting',
    template: '%s | Trustedwear Tech',
  },
  description:
    'Trustedwear Tech Private Limited (CIN U29299BR2022PTC060732) is a deep-tech products and consulting firm in AI and electronics system design & manufacturing (ESDM). We build Citra AI — a sovereign agentic AI platform — and the Trustedwear security smartwatch, designed and built fully in-house with a custom OS, firmware, UI, and PCB design, and deliver AI, embedded systems, and advanced software engineering for government and enterprise.',
  openGraph: {
    title: 'Trustedwear Tech — AI & Electronics Products and Consulting',
    description:
      'Products and consulting in AI and electronics (ESDM). Maker of Citra AI (live) and the Trustedwear security smartwatch, designed and built fully in-house (2027). Incubated at IIT Patna; backed by Startup India, Government of Bihar, and MeitY.',
    url: siteUrl,
    siteName: 'Trustedwear Tech',
    images: [
      {
        url: '/images/trusted-wear-logo.png',
        width: 100,
        height: 40,
        alt: 'Trustedwear Tech Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trustedwear Tech — AI & Electronics Products and Consulting',
    description:
      'Products and consulting in AI and electronics (ESDM). Maker of Citra AI (live) and the Trustedwear security smartwatch, built fully in-house (2027).',
    images: ['/images/trusted-wear-logo.png'],
  },
  verification: {
    google: 'Rxjkhd1Y0I23hJ1JyLgID_wPm6vWV5wpxl-ANF0OTr0',
  },
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
