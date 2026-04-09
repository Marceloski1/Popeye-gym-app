"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Zap } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#2d5016] via-[#3d6820] to-[#5a8c3a] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-8">
            <Zap className="w-4 h-4 text-[#ff6b35]" />
            <span>Transforma Tu Vida Hoy</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ textWrap: "balance" }}>
            Comienza Tu Transformación
          </h2>
          
          <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Únete a la familia Popeye Gym y descubre el mejor gimnasio de La Habana para alcanzar tus metas fitness
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact" className="inline-flex items-center gap-2">
              <Button size="lg" className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                Únete Ahora
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/bmi">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#2d5016] px-8 py-6 text-lg font-semibold bg-transparent transition-all duration-300"
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
