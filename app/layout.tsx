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
  title:
    "OnGrid Solar - Best Solar Company in Trivandrum | Solar Panel Installation",
  description:
    "Leading Solar Panel Installation in Trivandrum. Expert Rooftop Solar Systems, Commercial Solar Power Solutions, Solar Battery Storage & Hybrid Systems. MNRE registered. Get up to ₹78,000 subsidy. Best Solar Company in Trivandrum.",
  keywords: [
    "Solar Panel Installation in Trivandrum",
    "Rooftop Solar Systems in Trivandrum",
    "Commercial Solar Power Solutions",
    "Solar Battery Storage",
    "Solar Hybrid System",
    "Solar Ongrid System in Trivandrum",
    "Best Solar Company in Trivandrum",
    "Solar Installation Trivandrum",
    "MNRE Solar Vendor Kerala",
    "Government Solar Subsidy",
    "PM Surya Ghar Muft Bijli Yojana",
    "Solar Energy Kerala",
    "Residential Solar Trivandrum",
    "Commercial Solar Kerala",
    "Solar Panels Trivandrum",
    "OnGrid Solar Trivandrum",
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
    title:
      "OnGrid Solar - Best Solar Company in Trivandrum | Solar Panel Installation",
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
    title: "OnGrid Solar - Best Solar Company in Trivandrum",
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
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <body className={`font-sans antialiased ${montserrat.className}`}>
        {children}
      </body>
    </html>
  );
}
