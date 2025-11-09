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
import { useTrainers } from "@/hooks/use-trainers"
import type { Trainer } from "@/lib/types"
import { Plus, Edit, Trash2, X } from "lucide-react"
import Image from "next/image"

export function TrainersManager() {
  const { trainers, mutate } = useTrainers()
  const [isAdding, setIsAdding] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState<Partial<Trainer>>({
    name: "",
    role: "",
    bio: "",
    image: "",
    certifications: [],
    experience: "",
    specialties: [],
  })
  const [certInput, setCertInput] = useState("")
  const [specialtyInput, setSpecialtyInput] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (editingId) {
      // Edit existing trainer
      console.log("[v0] Editing trainer:", editingId, formData)
      // In real app, call API to update
      await mutate()
    } else {
      // Add new trainer
      console.log("[v0] Adding new trainer:", formData)
      // In real app, call API to create
      await mutate()
    }

    resetForm()
  }

  const handleDelete = async (id: string) => {
    if (confirm("¿Estás seguro de que quieres eliminar este entrenador?")) {
      console.log("[v0] Deleting trainer:", id)
      // In real app, call API to delete
      await mutate()
    }
  }

  const handleEdit = (trainer: Trainer) => {
    setEditingId(trainer.id)
    setFormData(trainer)
    setIsAdding(true)
  }

  const resetForm = () => {
    setIsAdding(false)
    setEditingId(null)
    setFormData({
      name: "",
      role: "",
      bio: "",
      image: "",
      certifications: [],
      experience: "",
      specialties: [],
    })
    setCertInput("")
    setSpecialtyInput("")
  }

  const addCertification = () => {
    if (certInput.trim()) {
      setFormData({
        ...formData,
        certifications: [...(formData.certifications || []), certInput.trim()],
      })
      setCertInput("")
    }
  }

  const removeCertification = (cert: string) => {
    setFormData({
      ...formData,
      certifications: formData.certifications?.filter((c) => c !== cert) || [],
    })
  }

  const addSpecialty = () => {
    if (specialtyInput.trim()) {
      setFormData({
        ...formData,
        specialties: [...(formData.specialties || []), specialtyInput.trim()],
      })
      setSpecialtyInput("")
    }
  }

  const removeSpecialty = (specialty: string) => {
    setFormData({
      ...formData,
      specialties: formData.specialties?.filter((s) => s !== specialty) || [],
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-foreground">Gestión de Entrenadores</h2>
        <Button onClick={() => setIsAdding(!isAdding)} className="bg-[#2d5016] hover:bg-[#5a8c3a]">
          {isAdding ? (
            <>
              <X className="w-4 h-4 mr-2" />
              Cancelar
            </>
          ) : (
            <>
              <Plus className="w-4 h-4 mr-2" />
              Agregar Entrenador
            </>
          )}
        </Button>
      </div>

      {isAdding && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">{editingId ? "Editar Entrenador" : "Nuevo Entrenador"}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nombre Completo</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="role">Cargo</Label>
                  <Input
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="bio">Biografía</Label>
                <Textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  rows={3}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="image">URL de Imagen</Label>
                  <Input
                    id="image"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="/placeholder.svg"
                  />
                </div>
                <div>
                  <Label htmlFor="experience">Experiencia</Label>
                  <Input
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    placeholder="Ej: 10 años"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="certifications">Certificaciones</Label>
                <div className="flex gap-2 mb-2">
                  <Input
                    id="certifications"
                    value={certInput}
                    onChange={(e) => setCertInput(e.target.value)}
                    placeholder="Agregar certificación"
                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addCertification())}
                  />
                  <Button type="button" onClick={addCertification} variant="outline">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.certifications?.map((cert) => (
                    <Badge key={cert} variant="secondary" className="gap-1">
                      {cert}
                      <X className="w-3 h-3 cursor-pointer" onClick={() => removeCertification(cert)} />
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="specialties">Especialidades</Label>
                <div className="flex gap-2 mb-2">
                  <Input
                    id="specialties"
                    value={specialtyInput}
                    onChange={(e) => setSpecialtyInput(e.target.value)}
                    placeholder="Agregar especialidad"
                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addSpecialty())}
                  />
                  <Button type="button" onClick={addSpecialty} variant="outline">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.specialties?.map((specialty) => (
                    <Badge key={specialty} className="bg-[#2d5016] gap-1">
                      {specialty}
                      <X className="w-3 h-3 cursor-pointer" onClick={() => removeSpecialty(specialty)} />
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Button type="submit" className="bg-[#2d5016] hover:bg-[#5a8c3a]">
                  {editingId ? "Guardar Cambios" : "Agregar Entrenador"}
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
        {trainers.map((trainer) => (
          <Card key={trainer.id} className="overflow-hidden">
            <div className="relative h-48">
              <Image src={trainer.image || "/placeholder.svg"} alt={trainer.name} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-foreground mb-1">{trainer.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{trainer.role}</p>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{trainer.bio}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {trainer.specialties.slice(0, 3).map((specialty) => (
                  <Badge key={specialty} variant="secondary" className="text-xs">
                    {specialty}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => handleEdit(trainer)} className="flex-1">
                  <Edit className="w-4 h-4 mr-1" />
                  Editar
                </Button>
                <Button size="sm" variant="destructive" onClick={() => handleDelete(trainer.id)}>
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
