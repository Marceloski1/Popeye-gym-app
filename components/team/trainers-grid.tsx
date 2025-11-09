"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useTrainers } from "@/hooks/use-trainers"
import { Award, Clock } from "lucide-react"

export function TrainersGrid() {
  const { trainers, isLoading } = useTrainers()

  if (isLoading) {
    return (
      <section className="py-20 bg-background">
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={trainer.image || "/placeholder.svg"}
                    alt={trainer.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{trainer.name}</h3>
                    <p className="text-white/90">{trainer.role}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">{trainer.bio}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-[#2d5016]" />
                      <span className="text-muted-foreground">{trainer.experience} de experiencia</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <Award className="w-4 h-4 text-[#2d5016] mt-0.5" />
                      <div className="flex flex-wrap gap-1">
                        {trainer.certifications.map((cert) => (
                          <Badge key={cert} variant="secondary" className="text-xs">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Especialidades:</h4>
                    <div className="flex flex-wrap gap-2">
                      {trainer.specialties.map((specialty) => (
                        <Badge key={specialty} className="bg-[#2d5016] hover:bg-[#5a8c3a]">
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
