"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2d5016] via-[#3d6820] to-[#5a8c3a] text-white">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold mb-4">404</h1>
          <div className="text-6xl mb-6">💪</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Página No Encontrada</h2>
          <p className="text-xl text-white/80 mb-8 max-w-md mx-auto">
            Parece que esta página no existe. Como Popeye con sus espinacas, sigamos adelante con fuerza.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg" className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white">
              <Home className="w-5 h-5 mr-2" />
              Volver al Inicio
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.history.back()}
            className="border-white text-white hover:bg-white hover:text-[#2d5016]"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Página Anterior
          </Button>
        </div>
      </div>
    </div>
  )
}
