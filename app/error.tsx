"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Home } from "lucide-react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("[v0] Error occurred:", error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2d5016] via-[#3d6820] to-[#5a8c3a] text-white">
      <div className="text-center px-4">
        <div className="mb-8">
          <AlertTriangle className="w-24 h-24 mx-auto mb-6 text-[#ff6b35]" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Algo Salió Mal</h1>
          <p className="text-xl text-white/80 mb-8 max-w-md mx-auto">
            Ocurrió un error inesperado. No te preocupes, estamos trabajando para solucionarlo.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={reset} className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white">
            Intentar de Nuevo
          </Button>
          <Link href="/">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#2d5016] bg-transparent"
            >
              <Home className="w-5 h-5 mr-2" />
              Volver al Inicio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
