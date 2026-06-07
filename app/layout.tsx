import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Noise from "../components/noise";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Shashwat Trivedi | Full Stack Engineer",
  description:
    "Full Stack Engineer building scalable products, clean APIs, and interfaces that hold up under real-world pressure.",
  icons: {
    icon: "/favicon.svg",
  },
  authors: [{ name: "Shashwat Trivedi" }],
  keywords: ["Shashwat Trivedi", "Full Stack Engineer", "Web Developer", "Software Engineer", "Portfolio"],
  openGraph: {
    title: "Shashwat Trivedi | Full Stack Engineer",
    description:
      "Full Stack Engineer building scalable products, clean APIs, and interfaces that hold up under real-world pressure.",
    type: "website",
    locale: "en_US",
    siteName: "Shashwat Trivedi Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Shashwat Trivedi | Full Stack Engineer Portfolio Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shashwat Trivedi | Full Stack Engineer",
    description:
      "Full Stack Engineer building scalable products, clean APIs, and interfaces that hold up under real-world pressure.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script id="silence-metamask" strategy="afterInteractive">
          {`
            window.addEventListener('unhandledrejection', function(event) {
              if (event.reason) {
                var message = typeof event.reason === 'string' ? event.reason : (event.reason.message || '');
                var stack = event.reason.stack || '';
                if (
                  message.indexOf('MetaMask') !== -1 ||
                  stack.indexOf('MetaMask') !== -1 ||
                  message.indexOf('nkbihfbeogaeaoehlefnkodbefgpgknn') !== -1
                ) {
                  event.preventDefault();
                  console.warn('Silenced MetaMask extension unhandled rejection:', message);
                }
              }
            });
          `}
        </Script>
        <Noise
          patternSize={120}
          patternScaleX={1.1}
          patternScaleY={1.1}
          patternRefreshInterval={5}
          patternAlpha={10}
        />
        {children}
      </body>
    </html>
  );
}

