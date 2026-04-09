"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useTrainers } from "@/hooks/use-trainers"
import { Award, Clock, Star } from "lucide-react"

export function TrainersGrid() {
  const { trainers, isLoading } = useTrainers()

  if (isLoading) {
    return (
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-6 animate-pulse">
                <div className="w-full h-64 bg-muted rounded-lg mb-4" />
                <div className="h-6 bg-muted rounded mb-2" />
                <div className="h-4 bg-muted rounded w-2/3" />
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#5a8c3a]/10 px-4 py-2 rounded-full text-[#5a8c3a] text-sm font-medium mb-6">
            <Star className="w-4 h-4" aria-hidden="true" />
            <span>Profesionales Certificados</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ textWrap: "balance" }}>
            Conoce a Nuestros Entrenadores
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Expertos dedicados a guiarte en cada paso de tu transformación
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={trainer.image || "/placeholder.svg"}
                    alt={trainer.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{trainer.name}</h3>
                    <p className="text-white/90 font-medium">{trainer.role}</p>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 leading-relaxed">{trainer.bio}</p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#5a8c3a]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-[#5a8c3a]" aria-hidden="true" />
                      </div>
                      <span className="text-muted-foreground text-sm">{trainer.experience} de experiencia</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#5a8c3a]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Award className="w-5 h-5 text-[#5a8c3a]" aria-hidden="true" />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {trainer.certifications.map((cert) => (
                          <Badge key={cert} variant="secondary" className="text-xs">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Especialidades:</h4>
                    <div className="flex flex-wrap gap-2">
                      {trainer.specialties.map((specialty) => (
                        <Badge key={specialty} className="bg-[#2d5016] hover:bg-[#5a8c3a] text-white">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
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
