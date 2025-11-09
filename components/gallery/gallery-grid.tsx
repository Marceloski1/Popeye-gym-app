"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    id: "1",
    url: "/placeholder.svg?height=600&width=800&key=gym1",
    category: "Cardio",
    title: "Área de Cardio",
    description: "Zona equipada con las últimas cintas y bicicletas",
  },
  {
    id: "2",
    url: "/placeholder.svg?height=600&width=800&key=gym2",
    category: "Pesas",
    title: "Zona de Pesas Libres",
    description: "Área completa con mancuernas y barras olímpicas",
  },
  {
    id: "3",
    url: "/placeholder.svg?height=600&width=800&key=gym3",
    category: "Pesas",
    title: "Máquinas de Fuerza",
    description: "Equipamiento profesional para todos los grupos musculares",
  },
  {
    id: "4",
    url: "/placeholder.svg?height=600&width=800&key=gym4",
    category: "Clases Grupales",
    title: "Sala de Clases",
    description: "Espacio amplio para clases de spinning, yoga y más",
  },
  {
    id: "5",
    url: "/placeholder.svg?height=600&width=800&key=gym5",
    category: "Cardio",
    title: "Remos y Elípticas",
    description: "Variedad de equipos para entrenamiento cardiovascular",
  },
  {
    id: "6",
    url: "/placeholder.svg?height=600&width=800&key=gym6",
    category: "Pesas",
    title: "Área de Sentadillas",
    description: "Racks profesionales con plataformas de levantamiento",
  },
  {
    id: "7",
    url: "/placeholder.svg?height=600&width=800&key=gym7",
    category: "Clases Grupales",
    title: "Estudio de Spinning",
    description: "Bicicletas de última generación para clases intensas",
  },
  {
    id: "8",
    url: "/placeholder.svg?height=600&width=800&key=gym8",
    category: "Cardio",
    title: "Vista General Cardio",
    description: "Amplias instalaciones con ventilación de primera",
  },
  {
    id: "9",
    url: "/placeholder.svg?height=600&width=800&key=gym9",
    category: "Pesas",
    title: "Área de Entrenamiento",
    description: "Espacio diseñado para entrenamientos personalizados",
  },
]

export function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const categories = ["Todos", ...Array.from(new Set(galleryImages.map((img) => img.category)))]

  const filteredImages =
    selectedCategory === "Todos" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const handlePrevious = () => {
    if (selectedImage === null) return
    const currentIndex = galleryImages.findIndex((img) => img.id === galleryImages[selectedImage].id)
    const newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1
    setSelectedImage(newIndex)
  }

  const handleNext = () => {
    if (selectedImage === null) return
    const currentIndex = galleryImages.findIndex((img) => img.id === galleryImages[selectedImage].id)
    const newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0
    setSelectedImage(newIndex)
  }

  return (
    <>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category ? "bg-[#2d5016] hover:bg-[#5a8c3a]" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(galleryImages.findIndex((img) => img.id === image.id))}
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
