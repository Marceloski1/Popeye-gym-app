import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "La Spinaca de Popeye - Mejor Gimnasio en La Habana 2025",
  description:
    "El gimnasio La Spinaca de Popeye ofrece las mejores instalaciones y entrenadores en La Habana. Horario de 6:30 AM a 8 PM de lunes a viernes.",
  keywords: "gimnasio, La Habana, fitness, entrenamiento, La Spinaca de Popeye, Popeye Gyn , La Spinaca de Popeye Gym",
  openGraph: {
    title: "La Spinaca de Popeye- Tercer Mejor Gimnasio en La Habana",
    description: "El mejor gimnasio para alcanzar tus metas fitness y ser un tanke",
    type: "website",
  },
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
