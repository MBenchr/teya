import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { siteCopy, siteOrigin } from "./site-content";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: siteCopy.title,
  description: siteCopy.description,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/brand/logo-mark.png",
    apple: "/brand/logo-mark.png",
  },
  openGraph: {
    title: siteCopy.title,
    description: siteCopy.description,
    url: siteOrigin,
    siteName: siteCopy.shortTitle,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: `${siteOrigin}/images/hero-arch-hand.png`,
        width: 1080,
        height: 1920,
        alt: "TEYA Beauty - hero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteCopy.title,
    description: siteCopy.description,
    images: [`${siteOrigin}/images/hero-arch-hand.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>{children}</body>
    </html>
  );
}
