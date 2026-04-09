"use client"

import { motion } from "framer-motion"
import { Dumbbell, Users, Trophy, Heart, Zap } from "lucide-react"

const features = [
  {
    icon: Dumbbell,
    title: "Equipamiento de Calidad",
    description: "Equipos olímpicos profesionales para todos los niveles y objetivos",
  },
  {
    icon: Users,
    title: "Entrenadores Expertos",
    description: "Profesionales certificados con experiencia comprobada en transformación física",
  },
  {
    icon: Trophy,
    title: "Resultados Reales",
    description: "Programas personalizados basados en tus metas y condición física",
  },
  {
    icon: Heart,
    title: "Comunidad Activa",
    description: "Ambiente motivador con personas que comparten tu compromiso con el fitness",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-[#5a8c3a]/10 px-4 py-2 rounded-full text-[#5a8c3a] text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Nuestras Ventajas</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ textWrap: "balance" }}>
            Por Qué Elegir Popeye Gym
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Todo lo que necesitas para comenzar tu transformación física en un solo lugar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-card to-card/50 p-8 rounded-2xl border border-border hover:border-[#5a8c3a]/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#5a8c3a]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2d5016] to-[#5a8c3a] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
