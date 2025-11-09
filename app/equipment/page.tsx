import type { Metadata } from "next"
import { EquipmentHero } from "@/components/equipment/equipment-hero"
import { EquipmentGrid } from "@/components/equipment/equipment-grid"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Equipamiento | Popeye Gym",
  description: "Conoce nuestro equipamiento de última generación para entrenamiento de fuerza y cardio.",
}

export default function EquipmentPage() {
  return (
    <div className="pt-20">
      <EquipmentHero />
      <EquipmentGrid />
      <Footer />
    </div>
  )
}
