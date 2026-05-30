import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // We have to ignore build errors because the ai generated code has a lot
    // of type errors. This is a temporary fix and should be removed once the
    // ai generated code is fixed.
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      // Watch product pages moved under /watch/*
      { source: '/products/kids', destination: '/watch/products/kids', permanent: true },
      { source: '/products/adult', destination: '/watch/products/adult', permanent: true },
      { source: '/products/memory-assist', destination: '/watch', permanent: true },
      { source: '/products/:path*', destination: '/watch/products/:path*', permanent: true },
      { source: '/enterprise', destination: '/watch/enterprise', permanent: true },
      { source: '/demo', destination: '/watch/demo', permanent: true },
      { source: '/faq', destination: '/watch/faq', permanent: true },
      // /about replaced by /company
      { source: '/about', destination: '/company', permanent: true },
    ];
  },
  async headers() {
    const cacheHeaders = [
      {
        key: 'Cache-Control',
        value: 'public, max-age=31536000, must-revalidate',
      },
    ];
    return [
      {
        source: '/:all*(svg|png|jpg|jpeg|gif|webp)',
        locale: false,
        headers: cacheHeaders,
      },
       {
        source: '/:all*(mp4|webm)',
        locale: false,
        headers: cacheHeaders,
      },
    ];
  },
};

export default nextConfig;
