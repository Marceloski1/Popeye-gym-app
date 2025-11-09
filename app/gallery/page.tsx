import type { Metadata } from "next"
import { GalleryHero } from "@/components/gallery/gallery-hero"
import { GalleryGrid } from "@/components/gallery/gallery-grid"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Galería | Popeye Gym",
  description: "Explora nuestras instalaciones de clase mundial a través de nuestra galería de fotos.",
}

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <GalleryHero />
      <GalleryGrid />
      <Footer />
    </div>
  )
}
