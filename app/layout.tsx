import type React from "react";
import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OnGrid Solar - Best Solar Installation Company in Trivandrum",
  description:
    "Top solar company in Trivandrum offering rooftop & commercial solar, hybrid systems & battery storage. MNRE registered. Get up to ₹78,000 subsidy.",
  keywords: [
    "Solar Panel Installation in Trivandrum",
    "Rooftop Solar Systems in Trivandrum",
    "Solar Panels Trivandrum Price",
    "OnGrid Solar Trivandrum",
    "Hybrid Solar System in Trivandrum",
    "Residential Solar Trivandrum",
    "Commercial Solar Kerala",
    "Solar Installation Trivandrum",
    "Commercial Solar Power Solutions",
    "Solar Battery Storage and Inverters",
    "Solar Hybrid System Kerala",
    "Solar Ongrid System in Kerala",
    "Solar Offgrid System Trivandrum",
    "Solar Water Heater Kerala",
    "Best Solar Company in Trivandrum",
    "Top Solar EPC Company Kerala",
    "MNRE Approved Solar Vendor Kerala",
    "Trusted Solar Installer Kerala",
    "Government Solar Subsidy Kerala",
    "PM Surya Ghar Muft Bijli Yojana Kerala",
    "Solar Panel Subsidy in Trivandrum",
    "Kerala Solar Subsidy 2025",
    "Solar Energy Kerala",
    "Solar Power for Homes in Kerala",
    "Solar Energy Solutions Kerala",
    "Solar System Cost in Trivandrum",
  ].join(", "),
  authors: [{ name: "OnGrid Solar" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "OnGrid Solar - Best Solar Installation Company in Trivandrum",
    description:
      "Leading Solar Panel Installation in Trivandrum. Expert Rooftop Solar Systems, Commercial Solar Power Solutions. MNRE registered with government subsidies up to ₹78,000.",
    type: "website",
    locale: "en_IN",
    url: "https://ongridsolarpowersolution.com",
    siteName: "OnGrid Solar",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OnGrid Solar - Solar Panel Installation in Trivandrum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OnGrid Solar - Best Solar Installation Company in Trivandrum",
    description:
      "Expert Solar Panel Installation in Trivandrum. Rooftop Solar Systems, Commercial Solar Power Solutions. Get up to ₹78,000 government subsidy.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://ongridsolarpowersolution.com",
  },
  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Trivandrum, Kerala",
    "geo.position": "8.5241;76.9366",
    ICBM: "8.5241, 76.9366",
    "business:contact_data:street_address":
      "TC 37/2604(6), SHINI TOWER, KODUNGANOOR PO",
    "business:contact_data:locality": "Vattiyoorkavu",
    "business:contact_data:region": "Kerala",
    "business:contact_data:postal_code": "695013",
    "business:contact_data:country_name": "India",
    "business:contact_data:phone_number": "7594949406",
    "business:contact_data:email": "ongridsolarpowersolution@gmail.com",
    "msapplication-TileColor": "#faa633",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#faa633",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
      { url: "/apple-touch-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-touch-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-touch-icon-76x76.png", sizes: "76x76" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon.png",
      },
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#faa633",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <body
        className={`font-sans antialiased ${montserrat.className} overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
