"use client";

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Features } from "@/components/features";
import { Services } from "@/components/services";
import { Partners } from "@/components/partners";
import { FAQ } from "@/components/faq";
import { Testimonials } from "@/components/testimonials";
import { Blog } from "@/components/blog";
import { Gallery } from "@/components/gallery";
import { Contact } from "@/components/contact";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { StructuredData } from "@/components/structured-data";
import { TopAnnouncement } from "@/components/top-announcement";
import { jsonLdSchema, breadcrumbSchema } from "@/lib/seo";
import { useLanguage } from "@/contexts/language-context";
import {
  HeroSkeleton,
  AboutSkeleton,
  FeaturesSkeleton,
  ServicesSkeleton,
  PartnersSkeleton,
  FAQSkeleton,
  TestimonialsSkeleton,
  BlogSkeleton,
  GallerySkeleton,
  ContactSkeleton,
  CTASkeleton,
  FooterSkeleton,
} from "@/components/skeletons";

export default function Home() {
  const { isLoading } = useLanguage();

  return (
    <>
      <StructuredData data={jsonLdSchema} />
      <StructuredData data={breadcrumbSchema} />
      <TopAnnouncement />
      <main className="min-h-screen">
        <ScrollProgress />
        <Header />
        {isLoading ? (
          <>
            <HeroSkeleton />
            <AboutSkeleton />
            <FeaturesSkeleton />
            <ServicesSkeleton />
            <PartnersSkeleton />
            <FAQSkeleton />
            <TestimonialsSkeleton />
            <BlogSkeleton />
            <GallerySkeleton />
            <ContactSkeleton />
            <CTASkeleton />
            <FooterSkeleton />
          </>
        ) : (
          <>
            <Hero />
            <About />
            <Features />
            <Services />
            <Partners />
            <FAQ />
            <Testimonials />
            <Blog />
            <Gallery />
            <Contact />
            <CTA />
            <Footer />
          </>
        )}
      </main>
    </>
  );
}
