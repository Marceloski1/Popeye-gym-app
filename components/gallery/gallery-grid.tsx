"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    id: "1",
    url: "/images-gym/gym-1.jpeg",
    category: "Instalaciones",
    title: "Nuestras Instalaciones",
    description: "Espacio amplio y moderno para tu entrenamiento",
  },
  {
    id: "2",
    url: "/images-gym/gym-2.jpeg",
    category: "Instalaciones",
    title: "Nuestras Instalaciones",
    description: "Equipamiento de primera calidad",
  },
  {
    id: "3",
    url: "/images-gym/gym-3.jpeg",
    category: "Instalaciones",
    title: "Nuestras Instalaciones",
    description: "Área de entrenamiento especializada",
  },
  {
    id: "4",
    url: "/images-gym/gym-4.jpeg",
    category: "Instalaciones",
    title: "Nuestras Instalaciones",
    description: "Zona de máquinas y pesos",
  },
  {
    id: "5",
    url: "/images-gym/gym-5.jpeg",
    category: "Instalaciones",
    title: "Nuestras Instalaciones",
    description: "Espacio diseñado para tu comodidad",
  },
  {
    id: "6",
    url: "/images-gym/gym-6.jpeg",
    category: "Instalaciones",
    title: "Nuestras Instalaciones",
    description: "Ambiente profesional y motivador",
  },
  {
    id: "7",
    url: "/images-gym/gym-7.jpeg",
    category: "Instalaciones",
    title: "Nuestras Instalaciones",
    description: "Equipos de última generación",
  },
  {
    id: "8",
    url: "/images-gym/gym-8.jpeg",
    category: "Instalaciones",
    title: "Nuestras Instalaciones",
    description: "Instalaciones amplias y ventiladas",
  },
  {
    id: "9",
    url: "/images-gym/gym-9.jpeg",
    category: "Instalaciones",
    title: "Nuestras Instalaciones",
    description: "Todo lo que necesitas para entrenar",
  },
  {
    id: "10",
    url: "/images-gym/gym-10.jpeg",
    category: "Instalaciones",
    title: "Nuestras Instalaciones",
    description: "Tu gimnasio de confianza",
  },
  {
    id: "11",
    url: "/images-gym/gym-11.jpeg",
    category: "Instalaciones",
    title: "Nuestras Instalaciones",
    description: "Equipamiento profesional",
  },
  {
    id: "12",
    url: "/images-gym/gym-12.jpeg",
    category: "Instalaciones",
    title: "Nuestras Instalaciones",
    description: "Espacio de entrenamiento integral",
  },
  {
    id: "13",
    url: "/images-gym/gym-13.jpeg",
    category: "Instalaciones",
    title: "Nuestras Instalaciones",
    description: "Instalaciones de primer nivel",
  },
  {
    id: "14",
    url: "/images-gym/gym-14.jpeg",
    category: "Instalaciones",
    title: "Nuestras Instalaciones",
    description: "Gimnasio completamente equipado",
  },
  {
    id: "15",
    url: "/images-gym/gym-15.jpeg",
    category: "Instalaciones",
    title: "Nuestras Instalaciones",
    description: "La mejor experiencia de entrenamiento",
  },
  {
    id: "16",
    url: "/images-gym/gym-16.jpeg",
    category: "Instalaciones",
    title: "Nuestras Instalaciones",
    description: "Tu segundo hogar para entrenar",
  },
  {
    id: "17",
    url: "/images-gym/gym-17.jpeg",
    category: "Instalaciones",
    title: "Nuestras Instalaciones",
    description: "Popeye Gym - Donde comienza tu transformación",
  },
  {
    id: "17",
    url: "/images-gym/gym-18.jpeg",
    category: "Instalaciones",
    title: "Nuestras Instalaciones",
    description:"Tu gimnasio de confianza",
  },
]

export function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const handlePrevious = () => {
    if (selectedImage === null) return
    const newIndex = selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1
    setSelectedImage(newIndex)
  }

  const handleNext = () => {
    if (selectedImage === null) return
    const newIndex = selectedImage < galleryImages.length - 1 ? selectedImage + 1 : 0
    setSelectedImage(newIndex)
  }

  return (
    <>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.url || "/placeholder.svg"}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                    <p className="text-sm text-white/80">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                handlePrevious()
              }}
              className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
              className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-6xl h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedImage].url || "/placeholder.svg"}
                alt={galleryImages[selectedImage].title}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{galleryImages[selectedImage].title}</h3>
                <p className="text-white/80">{galleryImages[selectedImage].description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
