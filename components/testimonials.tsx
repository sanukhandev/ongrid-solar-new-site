"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import content from "@/data/content.json";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  review: string;
  systemSize: string;
  savings: string;
}

type ContentType = {
  testimonials: {
    title: string;
    subtitle: string;
    reviews: Testimonial[];
  };
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-300 dark:text-gray-600"
          }`}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const data = content as unknown as ContentType;
  const testimonials = data.testimonials.reviews;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slider
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
          <h2 className="font-lato font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white leading-tight">
            {data.testimonials.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            {data.testimonials.subtitle}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Display */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border border-white/20 dark:border-gray-700/20 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
                    <div className="flex flex-col items-center text-center space-y-6">
                      {/* Quote Icon */}
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                        <Quote className="w-6 h-6 text-white" />
                      </div>

                      {/* Rating */}
                      <StarRating rating={testimonial.rating} />

                      {/* Review */}
                      <blockquote className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
                        "{testimonial.review}"
                      </blockquote>

                      {/* Customer Info */}
                      <div className="space-y-2">
                        <h4 className="font-lato font-bold text-lg sm:text-xl text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.location}
                        </p>
                      </div>

                      {/* System Details */}
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-center">
                        <div className="backdrop-blur-sm bg-orange-100/50 dark:bg-orange-900/20 rounded-lg px-4 py-3 border border-orange-200 dark:border-orange-800">
                          <p className="text-xs sm:text-sm font-medium text-orange-600 dark:text-orange-400">
                            System Size
                          </p>
                          <p className="text-lg sm:text-xl font-bold text-orange-700 dark:text-orange-300">
                            {testimonial.systemSize}
                          </p>
                        </div>
                        <div className="backdrop-blur-sm bg-green-100/50 dark:bg-green-900/20 rounded-lg px-4 py-3 border border-green-200 dark:border-green-800">
                          <p className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400">
                            Monthly Savings
                          </p>
                          <p className="text-lg sm:text-xl font-bold text-green-700 dark:text-green-300">
                            {testimonial.savings}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-white/20 dark:border-gray-700/20 hover:bg-white dark:hover:bg-gray-800 shadow-lg z-10"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-white/20 dark:border-gray-700/20 hover:bg-white dark:hover:bg-gray-800 shadow-lg z-10"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-orange-500 w-8"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            {isAutoPlaying ? "⏸ Pause auto-play" : "▶ Resume auto-play"}
          </button>
        </div>
      </div>
    </section>
  );
}