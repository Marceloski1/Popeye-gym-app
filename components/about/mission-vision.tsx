"use client"

import { motion } from "framer-motion"
import { Target, Eye, Heart } from "lucide-react"
import { Card } from "@/components/ui/card"

const values = [
  {
    icon: Target,
    title: "Misión",
    description:
      "Proporcionar un espacio de entrenamiento de clase mundial donde cada persona pueda transformar su cuerpo y mente, acompañados por profesionales dedicados y equipamiento de vanguardia.",
  },
  {
    icon: Eye,
    title: "Visión",
    description:
      "Ser el gimnasio líder en La Habana, reconocido por nuestra excelencia en resultados, innovación en métodos de entrenamiento y compromiso inquebrantable con el bienestar de nuestra comunidad.",
  },
  {
    icon: Heart,
    title: "Valores",
    description:
      "Dedicación, respeto, comunidad, superación personal y compromiso con la salud. Creemos que el fitness es un viaje, no un destino, y estamos aquí para acompañarte en cada paso.",
  },
]

export function MissionVision() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nuestros Pilares</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Los valores que nos guían en cada entrenamiento
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-8 h-full hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#2d5016] rounded-full flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
