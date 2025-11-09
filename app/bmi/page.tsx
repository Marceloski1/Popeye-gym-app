import type { Metadata } from "next"
import { BMIHero } from "@/components/bmi/bmi-hero"
import { BMICalculator } from "@/components/bmi/bmi-calculator"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Calculadora IMC | Popeye Gym",
  description: "Calcula tu Índice de Masa Corporal (IMC) y descubre tu estado de salud según estándares de la OMS.",
}

export default function BMIPage() {
  return (
    <div className="pt-20">
      <BMIHero />
      <BMICalculator />
      <Footer />
    </div>
  )
}
