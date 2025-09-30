"use client"

import content from "@/data/content.json"
import { Shield, Zap, Users, Monitor } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const iconMap = {
  shield: Shield,
  zap: Zap,
  users: Users,
  monitor: Monitor,
}

export function Benefits() {
  const ref = useScrollAnimation()

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.benefits.items.map((benefit, index) => {
            const Icon = iconMap[benefit.icon as keyof typeof iconMap]
            return (
              <div
                key={index}
                className="text-center space-y-4 animate-on-scroll animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex w-16 h-16 items-center justify-center rounded-full bg-accent">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-highlight font-bold text-lg">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
