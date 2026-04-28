"use client";

import { Handshake } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useContent } from "@/hooks/use-content";

type PartnerItem = { name: string; color: string };
type StatItem = { value: string; label: string };

type ContentType = {
  partners: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    items: PartnerItem[];
    stats: StatItem[];
  };
};

export function Partners() {
  const data = useContent() as unknown as ContentType;
  const ref = useScrollAnimation();
  const partners = data.partners.items;

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-orange-50 to-amber-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div ref={ref} className="text-center mb-12 animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full text-sm font-medium text-primary mb-6">
              <Handshake className="w-5 h-5" />
              {data.partners.badge}
            </div>
            <h2
              className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4"
              style={{
                background:
                  "linear-gradient(135deg, #ea580c 0%, #f97316 25%, #fb923c 50%, #fbbf24 75%, #f59e0b 100%)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                animation: "gradient-shift 4s ease-in-out infinite",
                fontWeight: 900,
                letterSpacing: "-0.025em",
                filter: "drop-shadow(0 2px 4px rgba(234, 88, 12, 0.1))",
                textShadow: "0 0 1px rgba(234, 88, 12, 0.2)",
              }}
            >
              {data.partners.titlePrefix}
              <span className="text-primary"> {data.partners.titleHighlight}</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {data.partners.description}
            </p>
          </div>

          {/* Scrolling marquee */}
          <div className="relative">
            <div className="flex overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                {partners.map((partner: { name: string; color: string }, index: number) => (
                  <div
                    key={index}
                    className="mx-8 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-orange-100 hover:bg-white hover:scale-105 transition-all duration-300"
                  >
                    <span
                      className={`text-xl md:text-2xl font-montserrat font-bold ${partner.color} tracking-wide`}
                    >
                      {partner.name}
                    </span>
                  </div>
                ))}
              </div>
              <div
                className="flex animate-marquee whitespace-nowrap"
                aria-hidden="true"
              >
                {partners.map((partner: { name: string; color: string }, index: number) => (
                  <div
                    key={`duplicate-${index}`}
                    className="mx-8 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-orange-100 hover:bg-white hover:scale-105 transition-all duration-300"
                  >
                    <span
                      className={`text-xl md:text-2xl font-montserrat font-bold ${partner.color} tracking-wide`}
                    >
                      {partner.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gradient fade effects */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-orange-50 to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-amber-50 to-transparent z-10"></div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {data.partners.stats.map((stat, index: number) => (
              <div key={index} className="text-center p-4 glass-card rounded-lg">
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
