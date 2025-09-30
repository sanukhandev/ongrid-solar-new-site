"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Sun, Zap } from "lucide-react";
import content from "@/data/content.json";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function FAQ() {
  const ref = useScrollAnimation();

  // Split FAQ items into two columns
  const midPoint = Math.ceil(content.faq.items.length / 2);
  const leftColumnItems = content.faq.items.slice(0, midPoint);
  const rightColumnItems = content.faq.items.slice(midPoint);

  return (
    <section
      id="faq"
      className="py-20 md:py-32 bg-gradient-to-b from-background to-accent/10"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div ref={ref} className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full text-sm font-medium text-primary mb-6 animate-fade-in">
              <HelpCircle className="w-4 h-4" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="font-highlight font-bold text-3xl md:text-4xl lg:text-5xl mb-4 animate-fade-in-up stagger-1">
              {content.faq.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up stagger-2">
              Everything you need to know about solar energy, installations, and
              our services. Can't find what you're looking for? Contact our
              expert team.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 animate-on-scroll animate-fade-in-up stagger-3">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-6">
                <Sun className="w-5 h-5 text-primary" />
                <h3 className="font-highlight font-semibold text-lg">
                  Solar Basics & Benefits
                </h3>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                {leftColumnItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`left-item-${index}`}
                    className="glass-card border border-primary/20 rounded-xl px-6 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-5 h-5 text-primary" />
                <h3 className="font-highlight font-semibold text-lg">
                  Installation & Financing
                </h3>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                {rightColumnItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`right-item-${index}`}
                    className="glass-card border border-primary/20 rounded-xl px-6 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-on-scroll animate-fade-in-up stagger-4">
            <div className="glass-card p-8 rounded-2xl border border-primary/20 max-w-2xl mx-auto">
              <h3 className="font-highlight font-bold text-xl mb-4">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our solar experts are here to help you make the best decision
                for your home and energy needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Schedule Free Consultation
                </button>
                <button className="btn-secondary">Download Solar Guide</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
