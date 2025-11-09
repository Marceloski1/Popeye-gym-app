"use client"

import { motion } from "framer-motion"
import { Dumbbell, Users, Trophy, Heart, Calendar, Zap } from "lucide-react"

const features = [
  {
    icon: Dumbbell,
    title: "Equipamiento Premium",
    description: "Máquinas de última generación y pesas olímpicas para todos los niveles",
  },
  {
    icon: Users,
    title: "Entrenadores Certificados",
    description: "Profesionales con años de experiencia listos para ayudarte",
  },
  {
    icon: Trophy,
    title: "Resultados Garantizados",
    description: "Programas personalizados diseñados para alcanzar tus metas",
  },
  {
    icon: Heart,
    title: "Ambiente Motivador",
    description: "Comunidad de apoyo que te impulsa a dar lo mejor cada día",
  },
  {
    icon: Calendar,
    title: "Horarios Flexibles",
    description: "Abierto de 6:30 AM a 8 PM de lunes a viernes",
  },
  {
    icon: Zap,
    title: "Clases Grupales",
    description: "Variedad de clases de cardio, funcional y más",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Por Qué Elegir Popeye Gym</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos todo lo que necesitas para transformar tu vida
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-8 rounded-xl border border-border hover:border-[#5a8c3a] transition-colors group"
            >
              <div className="w-14 h-14 bg-[#2d5016] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#5a8c3a] transition-colors">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
