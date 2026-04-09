"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { mockTestimonials } from "@/lib/mock-data"
import Image from "next/image"

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#5a8c3a]/10 px-4 py-2 rounded-full text-[#5a8c3a] text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            <span>Testimonios Reales</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ textWrap: "balance" }}>
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Historias reales de transformación y éxito en Popeye Gym
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mockTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
                <div className="p-8 flex-1 flex flex-col">
                  {/* Image - Centered Portrait */}
                  <div className="relative w-40 h-62 mx-auto mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-[#2d5016]/10 to-[#5a8c3a]/10 group-hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Quote Icon */}
                  <div className="flex justify-center mb-4">
                    <Quote className="w-8 h-8 text-[#5a8c3a]/20" aria-hidden="true" />
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-4" role="img" aria-label={`${testimonial.rating} de 5 estrellas`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'fill-[#ff6b35] text-[#ff6b35]' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-muted-foreground leading-relaxed mb-6 text-center italic flex-1">
                    "{testimonial.content}"
                  </p>

                  {/* Author Info */}
                  <div className="text-center pt-4 border-t border-border">
                    <h4 className="font-bold text-foreground text-lg mb-1">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
