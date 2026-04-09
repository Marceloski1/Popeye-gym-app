"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useMachines } from "@/hooks/use-machines"
import type { MaquinaGym, GrupoMuscular } from "@/lib/types"
import { 
  Dumbbell, 
  Zap, 
  Target, 
  TrendingUp, 
  ChevronRight,
  Armchair,
  Footprints,
  User,
  Flame,
  Waves,
  Activity,
  Bone,
  Heart,
  BrainCircuit,
  Sparkles,
  CircleDot
} from "lucide-react"

const muscleGroupIcons: Record<string, any> = {
  "Pecho": Heart,
  "Espalda": User,
  "Piernas": Footprints,
  "Cuádriceps": Dumbbell,
  "Femorales": Bone,
  "Glúteos": TrendingUp,
  "Aductores": Waves,
  "Pantorrillas": CircleDot,
  "Hombros": Flame,
  "Bíceps": Activity,
  "Tríceps": Zap,
  "Core": BrainCircuit,
  "Full body": Sparkles,
}

function EquipmentModal({ machine, onClose }: { machine: MaquinaGym; onClose: () => void }) {
  const Icon = muscleGroupIcons[machine.grupo_muscular_principal] || Dumbbell

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-background rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-auto border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-br from-[#2d5016] to-[#5a8c3a] p-8 text-white rounded-t-2xl">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Icon className="w-5 h-5" />
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-0">
                  {machine.grupo_muscular_principal}
                </Badge>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">{machine.nombre}</h2>
            </div>
            <Button
              onClick={onClose}
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 shrink-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
              </svg>
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">Descripción</h3>
            <p className="text-muted-foreground leading-relaxed">{machine.descripcion}</p>
          </div>

          {/* Purpose */}
          <div className="bg-muted/50 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
              <Target className="w-5 h-5 text-[#5a8c3a]" />
              ¿Para qué sirve?
            </h3>
            <p className="text-muted-foreground leading-relaxed">{machine.para_que_sirve}</p>
          </div>

          {/* Benefits */}
          <div className="bg-[#2d5016]/5 p-6 rounded-xl border border-[#5a8c3a]/20">
            <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#5a8c3a]" />
              Beneficios
            </h3>
            <p className="text-muted-foreground leading-relaxed">{machine.beneficios}</p>
          </div>

          {/* Muscles */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-3">Músculos trabajados</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Principal</p>
                <Badge className="bg-[#5a8c3a] text-white">{machine.que_musculo_desarrolla}</Badge>
              </div>
              {machine.musculos_secundarios.length > 0 && (
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Secundarios</p>
                  <div className="flex flex-wrap gap-2">
                    {machine.musculos_secundarios.map((muscle) => (
                      <Badge key={muscle} variant="secondary">
                        {muscle}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Exercises */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <Dumbbell className="w-5 h-5 text-[#5a8c3a]" />
              Ejercicios posibles
            </h3>
            <div className="flex flex-wrap gap-2">
              {machine.ejercicios_posibles.map((exercise) => (
                <Badge key={exercise} variant="outline" className="border-[#5a8c3a] text-[#5a8c3a]">
                  {exercise}
                </Badge>
              ))}
            </div>
          </div>

          {/* Variations */}
          {machine.variaciones.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#ff6b35]" />
                Variaciones
              </h3>
              <div className="flex flex-wrap gap-2">
                {machine.variaciones.map((variation) => (
                  <Badge key={variation} className="bg-[#ff6b35]/10 text-[#ff6b35] hover:bg-[#ff6b35]/20">
                    {variation}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export function EquipmentGrid() {
  const { machines, isLoading } = useMachines()
  const [selectedGroup, setSelectedGroup] = useState<string>("Todos")
  const [selectedMachine, setSelectedMachine] = useState<MaquinaGym | null>(null)

  const muscleGroups = ["Todos", ...Array.from(new Set(machines.map((m) => m.grupo_muscular_principal)))]

  const filteredMachines =
    selectedGroup === "Todos" ? machines : machines.filter((m) => m.grupo_muscular_principal === selectedGroup)

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
            {muscleGroups.map((group) => {
              const Icon = muscleGroupIcons[group as GrupoMuscular] || Dumbbell
              return (
                <Button
                  key={group}
                  onClick={() => setSelectedGroup(group)}
                  variant={selectedGroup === group ? "default" : "outline"}
                  className={`gap-2 ${selectedGroup === group ? "bg-[#2d5016] hover:bg-[#5a8c3a]" : ""}`}
                >
                  <Icon className="w-4 h-4" />
                  {group}
                </Button>
              )
            })}
          </div>

          {/* Machines Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMachines.map((machine, index) => {
              const Icon = muscleGroupIcons[machine.grupo_muscular_principal] || Dumbbell
              return (
                <motion.div
                  key={machine.nombre}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer border-border hover:border-[#5a8c3a]/50 h-full flex flex-col"
                    onClick={() => setSelectedMachine(machine)}
                  >
                    {/* Card Header with Icon */}
                    <div className="relative h-48 bg-gradient-to-br from-[#2d5016]/10 to-[#5a8c3a]/10 flex items-center justify-center group-hover:from-[#2d5016]/20 group-hover:to-[#5a8c3a]/20 transition-colors">
                      <div className="w-24 h-24 bg-[#2d5016] rounded-2xl flex items-center justify-center group-hover:bg-[#5a8c3a] transition-colors shadow-lg">
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                      <Badge className="absolute top-4 right-4 bg-[#2d5016] hover:bg-[#2d5016]">
                        {machine.grupo_muscular_principal}
                      </Badge>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#5a8c3a] transition-colors">
                        {machine.nombre}
                      </h3>
                      <p className="text-muted-foreground line-clamp-2 leading-relaxed mb-4 flex-1">
                        {machine.descripcion}
                      </p>
                      
                      {/* Muscle Target */}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4 border-t border-border">
                        <Target className="w-4 h-4 text-[#5a8c3a]" />
                        <span className="font-medium">{machine.que_musculo_desarrolla}</span>
                        <ChevronRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Equipment Modal */}
      <AnimatePresence>
        {selectedMachine && <EquipmentModal machine={selectedMachine} onClose={() => setSelectedMachine(null)} />}
      </AnimatePresence>
    </>
  )
}
