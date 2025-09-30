"use client";

import content from "@/data/conte          <p className="text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in-up stagger-2">
            {data.features.description}
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.features.items.map((feature: any, index: number) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || PiggyBank;
            return (
              <div
                key={feature.id}
                className="group glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-on-scroll animate-fade-in-up hover:scale-105 bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-lato font-bold text-xl mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}json";
import { Home, BadgeCheck, PiggyBank } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

type ContentType = {
  features: {
    title: string;
    subtitle: string;
    description: string;
    items: {
      id: string;
      title: string;
      description: string;
      icon: string;
    }[];
  };
};

const iconMap = {
  "piggy-bank": PiggyBank,
  "badge-check": BadgeCheck,
  "home": Home,
};

export function Features() {
  const ref = useScrollAnimation();
  const data = content as unknown as ContentType;

  return (
    <section
      id="features"
      className="py-20 md:py-32 bg-gradient-to-b from-orange-50/50 to-yellow-50/30 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll"
        >
          <h2 className="font-lato font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-balance animate-fade-in-up text-gray-800 dark:text-white">
            {data.features.title}
          </h2>
          <p className="font-lato text-xl md:text-2xl bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-6 animate-fade-in-up stagger-1">
            {data.features.subtitle}
          </p>
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in-up stagger-2">
            {content.features.description}
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.features.items.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div
                key={feature.id}
                className="group glass-orange rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-on-scroll animate-fade-in-up hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-orange rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform animate-glow">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-highlight font-bold text-xl mb-4 text-orange-800 dark:text-orange-200">
                  {feature.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
