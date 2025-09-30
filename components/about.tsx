"use client";

import content from "@/data/content.json";
import { CheckCircle, Award, Clock, TrendingUp } from "lucide-react";

type ContentType = {
  about: {
    title: string;
    subtitle: string;
    description: string;
    mission: string;
    stats: { value: string; label: string }[];
    whyTrust: string[];
  };
};

export function About() {
  const data = content as unknown as ContentType;

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-orange-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-lato font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white">
                {data.about.title}
              </h2>
              <p className="text-xl text-orange-600 dark:text-orange-400 font-medium">
                {data.about.subtitle}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {data.about.description}
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border border-orange-200 dark:border-orange-800">
              <h3 className="font-lato font-bold text-lg text-gray-900 dark:text-white mb-3">
                Our Mission
              </h3>
              <p className="text-gray-700 dark:text-gray-300 italic">
                "{data.about.mission}"
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-lato font-bold text-xl text-gray-900 dark:text-white">
                Why People Trust Us:
              </h3>
              <div className="space-y-3">
                {data.about.whyTrust.map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {data.about.stats.map((stat: any, index: number) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800">
                <Award className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
                <div className="text-sm font-medium text-blue-900 dark:text-blue-300">
                  Certified Engineers
                </div>
              </div>
              <div className="glass-card p-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800">
                <Clock className="w-8 h-8 text-green-600 dark:text-green-400 mb-2" />
                <div className="text-sm font-medium text-green-900 dark:text-green-300">
                  Fast Installation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
