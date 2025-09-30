"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import content from "@/data/content.json";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function CTA() {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-orange-500 via-orange-600 to-yellow-500 relative overflow-hidden animate-gradient">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/30 rounded-full blur-xl animate-float"></div>
      <div
        className="absolute bottom-20 right-20 w-32 h-32 bg-orange-300/20 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="container mx-auto px-4 relative">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 animate-on-scroll">
            <h2 className="font-highlight font-bold text-3xl md:text-4xl lg:text-5xl text-white text-balance animate-fade-in-up">
              {content.cta.title}
            </h2>
            <p className="text-lg text-white/90 leading-relaxed animate-fade-in-up stagger-1">
              {content.cta.subtitle}
            </p>
            <Button
              size="lg"
              className="glass bg-white/20 text-white border-white/30 hover:bg-white/30 group animate-fade-in-up stagger-2 hover-lift"
            >
              {content.cta.button}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right content - Image */}
          <div className="relative animate-fade-in stagger-3">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl hover-lift">
              <img
                src="/modern-solar-panel-installation-on-contemporary-ho.jpg"
                alt="Solar installation"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Decorative element with glassmorphism */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 glass-orange rounded-2xl -z-10 animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
