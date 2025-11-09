import type { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { MissionVision } from "@/components/about/mission-vision"
import { HistorySection } from "@/components/about/history-section"
import { MapSection } from "@/components/about/map-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Sobre Nosotros | La Spinaca d' Popeye GYM",
  description: "Conoce la historia, misión y visión de Popeye Gym, el tercer mejor gimnasio de La Habana.",
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutHero />
      <HistorySection />
      <MissionVision />
      <MapSection />
      <Footer />
    </div>
  )
}
