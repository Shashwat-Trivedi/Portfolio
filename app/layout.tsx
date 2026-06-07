import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Noise from "../components/noise";

export const metadata: Metadata = {
  title: "Shashwat Trivedi | Full Stack Engineer",
  description:
    "Full Stack Engineer building scalable products, clean APIs, and interfaces that hold up under real-world pressure.",
  openGraph: {
    title: "Shashwat Trivedi | Full Stack Engineer",
    description:
      "Full Stack Engineer building scalable products, clean APIs, and interfaces that hold up under real-world pressure.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shashwat Trivedi | Full Stack Engineer",
    description:
      "Full Stack Engineer building scalable products, clean APIs, and interfaces that hold up under real-world pressure.",
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

