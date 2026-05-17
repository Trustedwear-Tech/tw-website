import type {Metadata} from 'next';
import '@/app/globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Lora, Merriweather } from 'next/font/google';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://trustedwear.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Trusted Wearables - Smart, Safe, and Connected',
    template: '%s | Trusted Wearables',
  },
  description: 'The Trusted Wearables watch is designed for peace of mind. Keep your loved ones safe and connected, wherever they go.',
  openGraph: {
    title: 'Trusted Wearables - Smart, Safe, and Connected',
    description: 'The Trusted Wearables watch is designed for peace of mind. Keep your loved ones safe and connected, wherever they go.',
    url: siteUrl,
    siteName: 'Trusted Wearables',
    images: [
      {
        url: '/images/trusted-wear-logo.png',
        width: 100,
        height: 40,
        alt: 'Trusted Wearables Logo',
      },
    ],
    locale: 'en_US',
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
    title: 'Trusted Wearables - Smart, Safe, and Connected',
    description: 'The Trusted Wearables watch is designed for peace of mind. Keep your loved ones safe and connected, wherever they go.',
    images: ['/images/trusted-wear-logo.png'],
  },
};

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['400', '700'],
  display: 'swap',
});

const merriweather = Merriweather({
  subsets: ['latin'],
  variable: '--font-merriweather',
  weight: ['400', '700'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${merriweather.variable}`} suppressHydrationWarning>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
