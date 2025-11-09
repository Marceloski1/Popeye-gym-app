"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function HistorySection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">Nuestra Historia</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Fundado en 2015, Popeye Gym nació de una visión clara: crear un espacio donde cada persona, sin importar
                su nivel de condición física, pudiera alcanzar su máximo potencial.
              </p>
              <p>
                Inspirados en la fortaleza y determinación del icónico marinero Popeye, creamos un gimnasio que combina
                equipamiento de vanguardia con un ambiente motivador y familiar. Nuestro lema "Fuerte como Popeye" no es
                solo una frase, es un compromiso con cada miembro.
              </p>
              <p>
                A lo largo de los años, hemos crecido hasta convertirnos en uno de los gimnasios más reconocidos de La
                Habana, alcanzando el tercer puesto en el ranking 2025. Pero más allá de los premios, nuestro mayor
                orgullo son las historias de transformación de nuestros miembros.
              </p>
              <p>
                Hoy contamos con más de 500 miembros activos, 15 entrenadores certificados y las mejores instalaciones
                de la ciudad. Y esto es solo el comienzo.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-2xl overflow-hidden"
          >
            <Image src="/modern-gym-interior.png" alt="Interior del gimnasio Popeye" fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
