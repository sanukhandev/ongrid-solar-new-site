"use client"

import { Button } from "@/components/ui/button"
import content from "@/data/content.json"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Products() {
  const ref = useScrollAnimation()

  return (
    <section id="products" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium text-primary mb-6 animate-fade-in">
            ⚡ Our Products
          </div>
          <h2 className="font-highlight font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-balance animate-fade-in-up stagger-1">
            {content.products.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed animate-fade-in-up stagger-2">
            {content.products.subtitle}
          </p>
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {content.products.items.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-on-scroll animate-scale-in border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square bg-muted overflow-hidden">
                <img
                  src={`/solar-panel-module-.jpg?height=400&width=400&query=solar panel module ${product.name}`}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-highlight font-bold text-xl mb-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.subtitle}</p>
                </div>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors bg-transparent"
                >
                  Check Availability
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* See all button */}
        <div className="text-center animate-on-scroll animate-fade-in">
          <Button size="lg" className="bg-primary hover:bg-primary-hover">
            {content.products.cta}
          </Button>
        </div>
      </div>
    </section>
  )
}
