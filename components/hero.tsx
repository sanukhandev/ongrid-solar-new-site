"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sun } from "lucide-react";
import content from "@/data/content.json";

type ContentType = {
  site: { name: string; tagline: string };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
    highlights: string[];
  };
};

export function Hero() {
  const data = content as unknown as ContentType;
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-blue-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Background gradient with animation */}
      <div className="absolute inset-0 bg-gradient-orange-subtle animate-gradient" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-float"></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-orange-300 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          {/* Left content */}
          <div className="space-y-8 hero-content">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-yellow-100 dark:from-orange-900/30 dark:to-yellow-900/30 rounded-full text-sm font-medium text-orange-700 dark:text-orange-300 glass-card animate-fade-in">
              <Sun className="w-4 h-4" />
              {data.site.tagline}
            </div>

            <h1 className="font-lato font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-balance animate-fade-in-up stagger-1 text-gray-900 dark:text-white">
              {data.hero.title}
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-pretty animate-fade-in-up stagger-2">
              {data.hero.subtitle}
            </p>

            {/* Highlighted features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-fade-in-up stagger-3">
              {data.hero.highlights.map((highlight: string, index: number) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 text-sm font-medium ${
                    highlight.includes("MNRE") || highlight.includes("78,000")
                      ? "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 px-3 py-2 rounded-lg border-l-4 border-orange-500"
                      : "text-green-700 dark:text-green-400"
                  }`}
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  {highlight}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg group glass-card"
              >
                {data.hero.cta}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-300 text-orange-700 hover:bg-orange-50 dark:border-orange-700 dark:text-orange-300 dark:hover:bg-orange-900/20"
              >
                {data.hero.secondaryCta}
              </Button>
            </div>
          </div>

          {/* Right content - Solar panel grid */}
          <div className="relative animate-fade-in stagger-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg animate-scale-in stagger-1 hover-lift relative">
                  <img
                    src="/modern-solar-panels-on-residential-roof-blue-sky.jpg"
                    alt="Solar panels installation"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg animate-scale-in stagger-3 hover-lift relative">
                  <img
                    src="/close-up-solar-panel-cells-reflecting-sunlight.jpg"
                    alt="Solar panel detail"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg animate-scale-in stagger-2 hover-lift relative">
                  <img
                    src="/solar-panel-array-sunset-golden-hour.jpg"
                    alt="Solar array at sunset"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg animate-scale-in stagger-4 hover-lift relative">
                  <img
                    src="/modern-home-with-solar-panels-green-landscape.jpg"
                    alt="Solar powered home"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            {/* Floating stats card with glassmorphism */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass-orange rounded-xl p-6 w-64 animate-fade-in-up stagger-5 hover-lift">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-orange rounded-lg flex items-center justify-center animate-glow">
                  <span className="text-white font-bold text-xl">25+</span>
                </div>
                <div>
                  <p className="font-semibold text-orange-800">
                    Years Warranty
                  </p>
                  <p className="text-sm text-orange-600">Premium Quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
