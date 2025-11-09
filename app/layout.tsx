import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Popeye Gym - Tercer Mejor Gimnasio en La Habana 2025",
  description:
    "El gimnasio Popeye ofrece las mejores instalaciones y entrenadores certificados en La Habana. Horario de 6:30 AM a 8 PM de lunes a viernes.",
  keywords: "gimnasio, La Habana, fitness, entrenamiento, Popeye Gym",
  openGraph: {
    title: "Popeye Gym - Tercer Mejor Gimnasio en La Habana",
    description: "El mejor gimnasio para alcanzar tus metas fitness",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
