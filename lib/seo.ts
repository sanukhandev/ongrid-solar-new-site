import { Metadata } from "next";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  jsonLd?: object;
}

export function generateSEOMetadata({
  title = "OnGrid Solar - Best Solar Company in Trivandrum | Solar Panel Installation",
  description = "Leading Solar Panel Installation in Trivandrum. Expert Rooftop Solar Systems, Commercial Solar Power Solutions, Solar Battery Storage & Hybrid Systems. MNRE registered. Get up to ₹78,000 subsidy.",
  keywords = [
    "Solar Panel Installation in Trivandrum",
    "Rooftop Solar Systems in Trivandrum",
    "Commercial Solar Power Solutions",
    "Solar Battery Storage",
    "Solar Hybrid System",
    "Solar Ongrid System in Trivandrum",
    "Best Solar Company in Trivandrum",
  ],
  canonicalUrl = "https://ongridsolarpowersolution.com",
  ogImage = "/og-image.jpg",
}: SEOProps): Metadata {
  return {
    title,
    description,
    keywords: keywords.join(", "),
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
      title,
      description,
      type: "website",
      locale: "en_IN",
      url: canonicalUrl,
      siteName: "OnGrid Solar",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "OnGrid Solar",
  description:
    "Leading Solar Panel Installation company in Trivandrum, Kerala. Expert Rooftop Solar Systems, Commercial Solar Power Solutions, Solar Battery Storage & Hybrid Systems.",
  url: "https://ongridsolarpowersolution.com",
  telephone: "7594949406",
  email: "ongridsolarpowersolution@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "TC 37/2604(6), SHINI TOWER, KODUNGANOOR PO",
    addressLocality: "Vattiyoorkavu",
    addressRegion: "Kerala",
    postalCode: "695013",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "8.5241",
    longitude: "76.9366",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Trivandrum",
    },
    {
      "@type": "State",
      name: "Kerala",
    },
  ],
  serviceType: [
    "Solar Panel Installation in Trivandrum",
    "Rooftop Solar Systems in Trivandrum",
    "Commercial Solar Power Solutions",
    "Solar Battery Storage",
    "Solar Hybrid System",
    "Solar Ongrid System in Trivandrum",
  ],
  priceRange: "₹₹₹",
  openingHours: "Mo-Sa 09:00-18:00",
  image: "https://ongridsolarpowersolution.com/og-image.jpg",
  sameAs: ["https://ongridsolarpowersolution.com"],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "MNRE Registered Vendor",
  },
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Solar Panel Installation in Trivandrum",
        description:
          "Professional solar panel installation services for residential and commercial properties in Trivandrum",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Rooftop Solar Systems in Trivandrum",
        description:
          "Complete rooftop solar system design and installation with government subsidy up to ₹78,000",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Commercial Solar Power Solutions",
        description:
          "Large-scale commercial solar power solutions for businesses and industries",
      },
    },
  ],
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://ongridsolarpowersolution.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://ongridsolarpowersolution.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Solar Panel Installation in Trivandrum",
      item: "https://ongridsolarpowersolution.com/services/solar-panel-installation-trivandrum",
    },
  ],
};
