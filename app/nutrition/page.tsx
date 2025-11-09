import type { Metadata } from "next"
import { NutritionHero } from "@/components/nutrition/nutrition-hero"
import { MythsGrid } from "@/components/nutrition/myths-grid"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Mitos Nutricionales | Popeye Gym",
  description:
    "Descubre la verdad sobre los mitos más comunes de nutrición y fitness con información respaldada por expertos.",
}

export default function NutritionPage() {
  return (
    <div className="pt-20">
      <NutritionHero />
      <MythsGrid />
      <Footer />
    </div>
  )
}
