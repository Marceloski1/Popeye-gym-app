"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrainersManager } from "./trainers-manager"
import { EquipmentManager } from "./equipment-manager"
import { Users, Dumbbell, BarChart } from "lucide-react"
import { Card } from "@/components/ui/card"

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-muted/30 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Panel de Administración</h1>
            <p className="text-muted-foreground">Gestiona entrenadores y equipamiento del gimnasio</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <BarChart className="w-4 h-4" />
                Resumen
              </TabsTrigger>
              <TabsTrigger value="trainers" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Entrenadores
              </TabsTrigger>
              <TabsTrigger value="equipment" className="flex items-center gap-2">
                <Dumbbell className="w-4 h-4" />
                Equipamiento
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#2d5016] rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Entrenadores</p>
                      <p className="text-3xl font-bold text-foreground">3</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#5a8c3a] rounded-lg flex items-center justify-center">
                      <Dumbbell className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Equipos</p>
                      <p className="text-3xl font-bold text-foreground">6</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#ff6b35] rounded-lg flex items-center justify-center">
                      <BarChart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Miembros Activos</p>
                      <p className="text-3xl font-bold text-foreground">500+</p>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-8 mt-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Bienvenido al Panel de Administración</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Desde aquí puedes gestionar todos los aspectos del gimnasio. Usa las pestañas superiores para navegar
                  entre las diferentes secciones.
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li>• Entrenadores: Agregar, editar o eliminar entrenadores del equipo</li>
                  <li>• Equipamiento: Gestionar el inventario de máquinas y equipos</li>
                </ul>
              </Card>
            </TabsContent>

            <TabsContent value="trainers">
              <TrainersManager />
            </TabsContent>

            <TabsContent value="equipment">
              <EquipmentManager />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}
