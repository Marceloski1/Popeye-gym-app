"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#2d5016] via-[#3d6820] to-[#5a8c3a] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Comienza Tu Transformación Hoy</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Únete a la familia en Popeye Gym. <span className="font-bold"
            >Helping ugly people have sex since 2011</span> 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact">
              <Button size="lg" className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-8 py-6 text-lg">
                Contacta con Nosotros
              </Button>
            </Link>
            <Link href="/bmi">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#2d5016] px-8 py-6 text-lg bg-transparent"
              >
                Calcula Tu IMC
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
