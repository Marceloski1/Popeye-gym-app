"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Activity, RotateCcw, Scale } from "lucide-react"

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
    const heightNum = Number.parseFloat(height) / 100

    if (!weightNum || !heightNum || weightNum <= 0 || heightNum <= 0) {
      return
    }

    const bmi = weightNum / (heightNum * heightNum)
    let category = ""
    let color = ""
    let recommendation = ""

    if (bmi < 18.5) {
      category = "Bajo Peso"
      color = "#3b82f6"
      recommendation =
        "Consulta con un nutricionista para desarrollar un plan de alimentación saludable que te ayude a alcanzar un peso adecuado."
    } else if (bmi >= 18.5 && bmi < 25) {
      category = "Peso Normal"
      color = "#22c55e"
      recommendation =
        "¡Excelente! Mantén tu peso actual con una dieta balanceada y ejercicio regular. Continúa con tus buenos hábitos."
    } else if (bmi >= 25 && bmi < 30) {
      category = "Sobrepeso"
      color = "#f59e0b"
      recommendation =
        "Considera ajustar tu alimentación y aumentar tu actividad física. Nuestros entrenadores pueden ayudarte a crear un plan personalizado."
    } else {
      category = "Obesidad"
      color = "#ef4444"
      recommendation =
        "Es importante que consultes con profesionales de la salud. Después, en Popeye Gym podemos diseñar un programa de entrenamiento adaptado a tus necesidades."
    }

    setResult({
      bmi: Number.parseFloat(bmi.toFixed(1)),
      category,
      color,
      recommendation,
    })
  }

  const resetCalculator = () => {
    setResult(null)
    setWeight("")
    setHeight("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      calculateBMI()
    }
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-[#5a8c3a]/10 px-4 py-2 rounded-full text-[#5a8c3a] text-sm font-medium mb-6">
              <Activity className="w-4 h-4" aria-hidden="true" />
              <span>Herramienta Gratuita</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ textWrap: "balance" }}>
              Calcula Tu IMC
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ingresa tus datos y descubre tu Índice de Masa Corporal al instante
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <Card className="p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2d5016] to-[#5a8c3a] rounded-xl flex items-center justify-center">
                  <Scale className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Tus Datos</h3>
              </div>

              <div className="space-y-6" onKeyDown={handleKeyDown}>
                <div>
                  <Label htmlFor="weight" className="text-base mb-2 block font-medium">
                    Peso (kg)
                  </Label>
                  <Input
                    id="weight"
                    type="number"
                    inputMode="decimal"
                    placeholder="Ej: 70"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="text-lg"
                    autoComplete="off"
                  />
                </div>

                <div>
                  <Label htmlFor="height" className="text-base mb-2 block font-medium">
                    Altura (cm)
                  </Label>
                  <Input
                    id="height"
                    type="number"
                    inputMode="decimal"
                    placeholder="Ej: 175"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="text-lg"
                    autoComplete="off"
                  />
                </div>

                <Button
                  onClick={calculateBMI}
                  className="w-full bg-[#2d5016] hover:bg-[#5a8c3a] text-lg py-6 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                >
                  Calcular IMC
                </Button>
              </div>

              <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold text-sm text-foreground mb-2">Fórmula del IMC</h4>
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
                  <Card className="p-8 border-2 shadow-lg" style={{ borderColor: result.color }}>
                    <div className="text-center mb-6">
                      <p className="text-sm text-muted-foreground mb-2">Tu IMC es</p>
                      <div className="text-6xl font-bold mb-3" style={{ color: result.color }}>
                        {result.bmi}
                      </div>
                      <div
                        className="inline-block px-6 py-2 rounded-full text-white font-semibold text-lg"
                        style={{ backgroundColor: result.color }}
                      >
                        {result.category}
                      </div>
                    </div>

                    <div className="mb-6 p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Recomendación:</h4>
                      <p className="text-muted-foreground leading-relaxed">{result.recommendation}</p>
                    </div>

                    <Button 
                      className="w-full bg-transparent hover:bg-muted" 
                      variant="outline" 
                      onClick={resetCalculator}
                    >
                      <RotateCcw className="w-4 h-4 mr-2" aria-hidden="true" />
                      Calcular de Nuevo
                    </Button>
                  </Card>
                </motion.div>
              ) : (
                <Card className="p-8 h-full flex items-center justify-center bg-muted/30">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#2d5016]/10 to-[#5a8c3a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Activity className="w-10 h-10 text-[#5a8c3a]" aria-hidden="true" />
                    </div>
                    <p className="text-muted-foreground text-lg">Ingresa tus datos para calcular tu IMC</p>
                  </div>
                </Card>
              )}
            </div>
          </div>

          {/* BMI Categories Reference */}
          <Card className="p-8 mt-12 shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6" style={{ textWrap: "balance" }}>
              Categorías de IMC según la OMS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-xl border-2 border-blue-500 bg-blue-50/50">
                <div className="font-bold text-blue-600 mb-1">Bajo Peso</div>
                <div className="text-sm text-muted-foreground">IMC &lt; 18.5</div>
              </div>
              <div className="p-5 rounded-xl border-2 border-green-500 bg-green-50/50">
                <div className="font-bold text-green-600 mb-1">Peso Normal</div>
                <div className="text-sm text-muted-foreground">IMC 18.5 – 24.9</div>
              </div>
              <div className="p-5 rounded-xl border-2 border-orange-500 bg-orange-50/50">
                <div className="font-bold text-orange-600 mb-1">Sobrepeso</div>
                <div className="text-sm text-muted-foreground">IMC 25 – 29.9</div>
              </div>
              <div className="p-5 rounded-xl border-2 border-red-500 bg-red-50/50">
                <div className="font-bold text-red-600 mb-1">Obesidad</div>
                <div className="text-sm text-muted-foreground">IMC ≥ 30</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
