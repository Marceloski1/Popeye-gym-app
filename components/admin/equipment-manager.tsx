"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { useEquipment } from "@/hooks/use-equipment"
import type { Equipment } from "@/lib/types"
import { Plus, Edit, Trash2, X } from "lucide-react"
import Image from "next/image"

export function EquipmentManager() {
  const { equipment, mutate } = useEquipment()
  const [isAdding, setIsAdding] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState<Partial<Equipment>>({
    name: "",
    category: "",
    description: "",
    image: "",
    exerciseType: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (editingId) {
      // Edit existing equipment
      console.log("[v0] Editing equipment:", editingId, formData)
      // In real app, call API to update
      await mutate()
    } else {
      // Add new equipment
      console.log("[v0] Adding new equipment:", formData)
      // In real app, call API to create
      await mutate()
    }

    resetForm()
  }

  const handleDelete = async (id: string) => {
    if (confirm("¿Estás seguro de que quieres eliminar este equipo?")) {
      console.log("[v0] Deleting equipment:", id)
      // In real app, call API to delete
      await mutate()
    }
  }

  const handleEdit = (equip: Equipment) => {
    setEditingId(equip.id)
    setFormData(equip)
    setIsAdding(true)
  }

  const resetForm = () => {
    setIsAdding(false)
    setEditingId(null)
    setFormData({
      name: "",
      category: "",
      description: "",
      image: "",
      exerciseType: "",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-foreground">Gestión de Equipamiento</h2>
        <Button onClick={() => setIsAdding(!isAdding)} className="bg-[#2d5016] hover:bg-[#5a8c3a]">
          {isAdding ? (
            <>
              <X className="w-4 h-4 mr-2" />
              Cancelar
            </>
          ) : (
            <>
              <Plus className="w-4 h-4 mr-2" />
              Agregar Equipo
            </>
          )}
        </Button>
      </div>

      {isAdding && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">{editingId ? "Editar Equipo" : "Nuevo Equipo"}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nombre del Equipo</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="category">Categoría</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="Ej: Pesas, Cardio"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="exerciseType">Tipo de Ejercicio</Label>
                <Input
                  id="exerciseType"
                  value={formData.exerciseType}
                  onChange={(e) => setFormData({ ...formData, exerciseType: e.target.value })}
                  placeholder="Ej: Fuerza - Pecho"
                  required
                />
              </div>

              <div>
                <Label htmlFor="description">Descripción</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  required
                />
              </div>

              <div>
                <Label htmlFor="image">URL de Imagen</Label>
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="/placeholder.svg"
                />
              </div>

              <div className="flex gap-2">
                <Button type="submit" className="bg-[#2d5016] hover:bg-[#5a8c3a]">
                  {editingId ? "Guardar Cambios" : "Agregar Equipo"}
                </Button>
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancelar
                </Button>
              </div>
            </form>
          </Card>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipment.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div className="relative h-48">
              <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              <Badge className="absolute top-4 right-4 bg-[#2d5016]">{item.category}</Badge>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-foreground mb-1">{item.name}</h3>
              <Badge variant="secondary" className="mb-3 text-xs">
                {item.exerciseType}
              </Badge>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.description}</p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => handleEdit(item)} className="flex-1">
                  <Edit className="w-4 h-4 mr-1" />
                  Editar
                </Button>
                <Button size="sm" variant="destructive" onClick={() => handleDelete(item.id)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
