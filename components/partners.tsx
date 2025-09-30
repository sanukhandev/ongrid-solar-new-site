"use client";

import { Handshake } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const partners = [
  { name: "Premier Energies", color: "text-blue-600" },
  { name: "Vikram Solar", color: "text-red-500" },
  { name: "Waaree", color: "text-green-600" },
  { name: "Rayzon Solar", color: "text-teal-600" },
  { name: "Goldi Solar", color: "text-blue-800" },
  { name: "Adani Solar", color: "text-blue-700" },
  { name: "Emmvee", color: "text-blue-600" },
  { name: "RenewSys", color: "text-blue-500" },
  { name: "ReNew", color: "text-green-500" },
  { name: "Saatvik", color: "text-orange-500" },
];

export function Partners() {
  const ref = useScrollAnimation();

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-orange-50 to-amber-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div ref={ref} className="text-center mb-12 animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full text-sm font-medium text-primary mb-6">
              <Handshake className="w-5 h-5" />
              Trusted Partners
            </div>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4">
              Partnered With
              <span className="text-primary"> Leading Solar Manufacturers</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We collaborate with India's top solar panel manufacturers to bring
              you premium quality products with industry-leading warranties and
              performance guarantees.
            </p>
          </div>

          {/* Scrolling marquee */}
          <div className="relative">
            <div className="flex overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                {partners.map((partner, index) => (
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
                {partners.map((partner, index) => (
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
            <div className="text-center p-4 glass-card rounded-lg">
              <div className="text-3xl font-bold text-primary mb-1">10+</div>
              <div className="text-sm text-gray-600">Trusted Partners</div>
            </div>
            <div className="text-center p-4 glass-card rounded-lg">
              <div className="text-3xl font-bold text-primary mb-1">25+</div>
              <div className="text-sm text-gray-600">
                Years Combined Experience
              </div>
            </div>
            <div className="text-center p-4 glass-card rounded-lg">
              <div className="text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-gray-600">Quality Assured</div>
            </div>
            <div className="text-center p-4 glass-card rounded-lg">
              <div className="text-3xl font-bold text-primary mb-1">₹78K</div>
              <div className="text-sm text-gray-600">Max Subsidy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
