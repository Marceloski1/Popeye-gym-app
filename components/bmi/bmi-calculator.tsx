"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type BMIResult = {
  bmi: number
  category: string
  color: string
  recommendation: string
}

export function BMICalculator() {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [result, setResult] = useState<BMIResult | null>(null)

  const calculateBMI = () => {
    const weightNum = Number.parseFloat(weight)
    const heightNum = Number.parseFloat(height) / 100 // Convert cm to meters

    if (!weightNum || !heightNum || weightNum <= 0 || heightNum <= 0) {
      return
    }

    const bmi = weightNum / (heightNum * heightNum)
    let category = ""
    let color = ""
    let recommendation = ""

    // WHO BMI Categories
    if (bmi < 18.5) {
      category = "Bajo Peso"
      color = "#3b82f6"
      recommendation =
        "Consulta con un nutricionista para desarrollar un plan de alimentación saludable que te ayude a alcanzar un peso adecuado."
    } else if (bmi >= 18.5 && bmi < 25) {
      category = "Peso Normal"
      color = "#22c55e"
      recommendation =
        "Mantén tu peso actual con una dieta balanceada y ejercicio regular. Continúa con tus buenos hábitos."
    } else if (bmi >= 25 && bmi < 30) {
      category = "Sobrepeso"
      color = "#f59e0b"
      recommendation =
        "Considera ajustar tu alimentación y aumentar tu actividad física. Nuestros entrenadores pueden ayudarte a crear un plan personalizado."
    } else {
      category = "Obesidad"
      color = "#ef4444"
      recommendation =
        "Es importante que consultes con profesionales de la salud. Después de ir al doctor en La Spinaca d' Popeye Gym podemos diseñar un programa de entrenamiento adaptado a tus necesidades."
    }

    setResult({
      bmi: Number.parseFloat(bmi.toFixed(1)),
      category,
      color,
      recommendation,
    })
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Calcula Tu IMC</h2>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="weight" className="text-base mb-2 block">
                    Peso (kg)
                  </Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="Ej: 70"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="text-lg"
                  />
                </div>

                <div>
                  <Label htmlFor="height" className="text-base mb-2 block">
                    Altura (cm)
                  </Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="Ej: 175"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="text-lg"
                  />
                </div>

                <Button
                  onClick={calculateBMI}
                  className="w-full bg-[#2d5016] hover:bg-[#5a8c3a] text-lg py-6"
                  size="lg"
                >
                  Calcular IMC
                </Button>
              </div>

              <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold text-sm text-foreground mb-2">Fórmula del IMC</h3>
                <p className="text-sm text-muted-foreground">IMC = Peso (kg) / Altura² (m²)</p>
              </div>
            </Card>

            {/* Result Display */}
            <div>
              {result ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="p-8 border-2" style={{ borderColor: result.color }}>
                    <div className="text-center mb-6">
                      <p className="text-sm text-muted-foreground mb-2">Tu IMC es</p>
                      <div className="text-6xl font-bold mb-2" style={{ color: result.color }}>
                        {result.bmi}
                      </div>
                      <div
                        className="inline-block px-4 py-2 rounded-full text-white font-semibold"
                        style={{ backgroundColor: result.color }}
                      >
                        {result.category}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold text-foreground mb-3">Recomendación:</h3>
                      <p className="text-muted-foreground leading-relaxed">{result.recommendation}</p>
                    </div>

                    <Button className="w-full bg-transparent" variant="outline" onClick={() => setResult(null)}>
                      Calcular de Nuevo
                    </Button>
                  </Card>
                </motion.div>
              ) : (
                <Card className="p-8 h-full flex items-center justify-center bg-muted/30">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏋️</div>
                    <p className="text-muted-foreground">Ingresa tus datos para calcular tu IMC</p>
                  </div>
                </Card>
              )}
            </div>
          </div>

          {/* BMI Categories Reference */}
          <Card className="p-8 mt-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Categorías de IMC según la OMS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg border-2 border-blue-500">
                <div className="font-bold text-blue-500 mb-1">Bajo Peso</div>
                <div className="text-sm text-muted-foreground">IMC {"<"} 18.5</div>
              </div>
              <div className="p-4 rounded-lg border-2 border-green-500">
                <div className="font-bold text-green-500 mb-1">Peso Normal</div>
                <div className="text-sm text-muted-foreground">IMC 18.5 - 24.9</div>
              </div>
              <div className="p-4 rounded-lg border-2 border-orange-500">
                <div className="font-bold text-orange-500 mb-1">Sobrepeso</div>
                <div className="text-sm text-muted-foreground">IMC 25 - 29.9</div>
              </div>
              <div className="p-4 rounded-lg border-2 border-red-500">
                <div className="font-bold text-red-500 mb-1">Obesidad</div>
                <div className="text-sm text-muted-foreground">IMC ≥ 30</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
