import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Features } from "@/components/features";
import { Services } from "@/components/services";
import { Partners } from "@/components/partners";
import { FAQ } from "@/components/faq";
import { Blog } from "@/components/blog";
import { Contact } from "@/components/contact";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { StructuredData } from "@/components/structured-data";
import { jsonLdSchema, breadcrumbSchema } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <StructuredData data={jsonLdSchema} />
      <StructuredData data={breadcrumbSchema} />
      <main className="min-h-screen">
        <ScrollProgress />
        <Header />
        <Hero />
        <About />
        <Features />
        <Services />
        <Partners />
        <FAQ />
        <Blog />
        <Contact />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
