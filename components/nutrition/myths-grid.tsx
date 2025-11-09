"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { mockNutritionMyths } from "@/lib/mock-data"
import { X, Check } from "lucide-react"

export function MythsGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Educación Nutricional</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Información verificada para tomar mejores decisiones sobre tu salud
            </p>
          </motion.div>

          <div className="space-y-6">
            {mockNutritionMyths.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div
                    className={`p-6 ${item.isMyth ? "bg-red-50 dark:bg-red-950/20" : "bg-green-50 dark:bg-green-950/20"}`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                          item.isMyth ? "bg-red-500" : "bg-green-500"
                        }`}
                      >
                        {item.isMyth ? <X className="w-6 h-6 text-white" /> : <Check className="w-6 h-6 text-white" />}
                      </div>
                      <div className="flex-1">
                        <Badge
                          className={`mb-3 ${
                            item.isMyth ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
                          }`}
                        >
                          {item.isMyth ? "MITO" : "VERDAD"}
                        </Badge>
                        <h3 className="text-xl font-bold text-foreground mb-2">{item.myth}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-[#2d5016] mb-2">La Verdad:</h4>
                      <p className="text-foreground font-medium">{item.truth}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Explicación:</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.explanation}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <Card className="p-8 bg-[#2d5016] text-white text-center">
              <h3 className="text-2xl font-bold mb-4">¿Tienes Dudas sobre Nutrición?</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Nuestros entrenadores certificados pueden ayudarte a crear un plan nutricional personalizado
              </p>
              <a
                href="#contact"
                className="inline-block bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contáctanos
              </a>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
