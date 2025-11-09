"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"

export function MapSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Visítanos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos ubicados en el corazón de Vedado, La Habana
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="p-6">
            <MapPin className="w-8 h-8 text-[#2d5016] mb-4" />
            <h3 className="font-bold text-lg mb-2">Dirección</h3>
            <p className="text-muted-foreground">
              Calle 23 #456, Vedado
              <br />
              La Habana, Cuba
            </p>
          </Card>

          <Card className="p-6">
            <Phone className="w-8 h-8 text-[#2d5016] mb-4" />
            <h3 className="font-bold text-lg mb-2">Teléfono</h3>
            <p className="text-muted-foreground">
              +53 5234-5678
              <br />
              +53 7834-1234
            </p>
          </Card>

          <Card className="p-6">
            <Clock className="w-8 h-8 text-[#2d5016] mb-4" />
            <h3 className="font-bold text-lg mb-2">Horario</h3>
            <p className="text-muted-foreground">
              Lunes a Viernes
              <br />
              6:30 AM - 8:00 PM
            </p>
          </Card>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full h-[450px] rounded-2xl overflow-hidden border border-border"
        >
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=-82.38891601562501%2C23.12463878289048%2C-82.36282348632814%2C23.14106282717871&layer=mapnik&marker=23.132852046985495%2C-82.37586975097656"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            title="Ubicación de Popeye Gym"
          />
        </motion.div>
        <div className="text-center mt-4">
          <a
            href="https://www.openstreetmap.org/?mlat=23.13285&mlon=-82.37587#map=16/23.13285/-82.37587"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2d5016] hover:text-[#5a8c3a] font-medium"
          >
            Ver mapa más grande
          </a>
        </div>
      </div>
    </section>
  )
}
