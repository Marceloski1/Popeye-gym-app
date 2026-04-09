"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { mockNutritionMyths } from "@/lib/mock-data"
import { X, Check, Lightbulb } from "lucide-react"

export function MythsGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-[#5a8c3a]/10 px-4 py-2 rounded-full text-[#5a8c3a] text-sm font-medium mb-6">
              <Lightbulb className="w-4 h-4" aria-hidden="true" />
              <span>Aprende y Mejora</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ textWrap: "balance" }}>
              Mitos vs Verdades Nutricionales
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Información verificada para tomar mejores decisiones sobre tu salud y alimentación
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockNutritionMyths.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div
                    className={`p-6 ${item.isMyth ? "bg-red-50 dark:bg-red-950/20" : "bg-green-50 dark:bg-green-950/20"}`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                          item.isMyth ? "bg-red-500" : "bg-green-500"
                        }`}
                      >
                        {item.isMyth ? (
                          <X className="w-6 h-6 text-white" aria-hidden="true" />
                        ) : (
                          <Check className="w-6 h-6 text-white" aria-hidden="true" />
                        )}
                      </div>
                      <div className="flex-1">
                        <Badge
                          className={`mb-3 text-xs font-semibold ${
                            item.isMyth ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
                          }`}
                        >
                          {item.isMyth ? "MITO" : "VERDAD"}
                        </Badge>
                        <h3 className="text-xl font-bold text-foreground">{item.myth}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-[#5a8c3a] mb-2 uppercase tracking-wide">La Verdad:</h4>
                      <p className="text-foreground font-medium leading-relaxed">{item.truth}</p>
                    </div>

                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">Explicación:</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.explanation}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
