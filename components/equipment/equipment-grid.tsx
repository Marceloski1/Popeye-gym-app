"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEquipment } from "@/hooks/use-equipment"
import { X } from "lucide-react"

export function EquipmentGrid() {
  const { equipment, isLoading } = useEquipment()
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos")
  const [selectedEquipment, setSelectedEquipment] = useState<any>(null)

  const categories = ["Todos", ...Array.from(new Set(equipment.map((e) => e.category)))]

  const filteredEquipment =
    selectedCategory === "Todos" ? equipment : equipment.filter((e) => e.category === selectedCategory)

  if (isLoading) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="p-6 animate-pulse">
                <div className="w-full h-64 bg-muted rounded-lg mb-4" />
                <div className="h-6 bg-muted rounded mb-2" />
                <div className="h-4 bg-muted rounded w-2/3" />
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
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

          {/* Equipment Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEquipment.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer"
                  onClick={() => setSelectedEquipment(item)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 right-4 bg-[#2d5016]">{item.category}</Badge>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.name}</h3>
                    <Badge variant="secondary" className="mb-3">
                      {item.exerciseType}
                    </Badge>
                    <p className="text-muted-foreground line-clamp-2 leading-relaxed">{item.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Modal */}
      {selectedEquipment && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedEquipment(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-background rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-96">
              <Image
                src={selectedEquipment.image || "/placeholder.svg"}
                alt={selectedEquipment.name}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedEquipment(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-[#2d5016]">{selectedEquipment.category}</Badge>
                <Badge variant="secondary">{selectedEquipment.exerciseType}</Badge>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">{selectedEquipment.name}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{selectedEquipment.description}</p>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}
