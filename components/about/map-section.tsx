"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"

export function MapSection() {
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
            <MapPin className="w-4 h-4" aria-hidden="true" />
            <span>Encuéntranos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ textWrap: "balance" }}>
            Visítanos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Estamos ubicados en el Vedado, La Habana
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-[#2d5016] to-[#5a8c3a] rounded-xl flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-foreground">Dirección</h3>
            <p className="text-muted-foreground">
              Boyeros Central entre Túlipan y Conill
              <br />
              Vedado, La Habana, Cuba
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-[#2d5016] to-[#5a8c3a] rounded-xl flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-foreground">Teléfono</h3>
            <a href="tel:+5352541695" className="text-[#5a8c3a] hover:underline font-medium">
              +53 5254-1695
            </a>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-[#2d5016] to-[#5a8c3a] rounded-xl flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-foreground">Horario</h3>
            <p className="text-muted-foreground">
              Lunes a Viernes
              <br />
            </p>
             <div className="flex flex-col">
 <              span className="text-[#5a8c3a] ">6:30 AM – 1:00 PM</span>
                <span className="text-[#5a8c3a]">3:30 PM – 9:00 PM</span>
                </div>
          </Card>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full h-[450px] rounded-2xl overflow-hidden border border-border shadow-lg max-w-5xl mx-auto"
        >
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=-82.392404%2C23.111075%2C-82.386404%2C23.117075&layer=mapnik&marker=23.114075%2C-82.389404"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            title="Ubicación de La Spinaca d' Popeye Gym en el mapa"
          />
        </motion.div>

        <p className="text-center mt-4 text-sm text-muted-foreground">
          <a
            href="https://www.openstreetmap.org/?mlat=23.114075&mlon=-82.389404#map=18/23.114075/-82.389404"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5a8c3a] hover:text-[#2d5016] font-medium underline-offset-4 hover:underline"
          >
            Ver mapa más grande
          </a>
        </p>
      </div>
    </section>
  )
}
