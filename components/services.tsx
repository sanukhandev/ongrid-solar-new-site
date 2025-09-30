"use client";

import content from "@/data/content.json";
import { Home, Building, Wrench, Battery, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type ContentType = {
  services: {
    title: string;
    subtitle: string;
    items: {
      id: string;
      title: string;
      description: string;
      icon: string;
      features: string[];
    }[];
  };
};

const iconMap = {
  home: Home,
  building: Building,
  wrench: Wrench,
  battery: Battery,
};

export function Services() {
  const data = content as unknown as ContentType;

  return (
    <section id="services" className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-lato font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white">
            {data.services.title}
          </h2>
          <p className="text-xl text-orange-600 dark:text-orange-400 font-medium">
            {data.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {data.services.items.map((service: any, index: number) => {
            const IconComponent =
              iconMap[service.icon as keyof typeof iconMap] || Home;

            return (
              <div
                key={service.id}
                className="glass-card group p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-lato font-bold text-xl text-gray-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map(
                    (feature: string, featureIndex: number) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </div>
                    )
                  )}
                </div>

                <Button
                  variant="outline"
                  className="w-full border-orange-300 text-orange-700 hover:bg-orange-50 dark:border-orange-700 dark:text-orange-300 dark:hover:bg-orange-900/20 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
          >
            Get Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
