"use client"

import { motion } from "framer-motion"
import { Users } from "lucide-react"

export function TeamHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#2d5016] via-[#3d6820] to-[#5a8c3a] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm mb-6">
            <Users className="w-4 h-4 text-[#ff6b35]" />
            <span>Conoce Nuestro Equipo</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">Entrenadores Certificados</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Profesionales apasionados dedicados a tu transformación
          </p>
        </motion.div>
      </div>
    </section>
  )
}
