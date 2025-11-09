import type { Metadata } from "next"
import { TeamHero } from "@/components/team/team-hero"
import { TrainersGrid } from "@/components/team/trainers-grid"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Nuestro Equipo | Popeye Gym",
  description: "Conoce a nuestros entrenadores certificados y profesionales dedicados a ayudarte a alcanzar tus metas.",
}

export default function TeamPage() {
  return (
    <div className="pt-20">
      <TeamHero />
      <TrainersGrid />
      <Footer />
    </div>
  )
}
