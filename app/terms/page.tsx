import type { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Términos y Condiciones | Popeye Gym",
  description: "Lee los términos y condiciones de uso de los servicios de Popeye Gym.",
}

export default function TermsPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Términos y Condiciones</h1>
            <p className="text-muted-foreground mb-8">Última actualización: Enero 2025</p>

            <Card className="p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceptación de Términos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Al registrarte y utilizar las instalaciones de Popeye Gym, aceptas cumplir con estos términos y
                  condiciones. Si no estás de acuerdo, no debes utilizar nuestros servicios.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Membresía</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  La membresía de Popeye Gym te otorga acceso a nuestras instalaciones durante el horario establecido
                  (6:30 AM - 8:00 PM de lunes a viernes). Las membresías son personales e intransferibles.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Los pagos de membresía deben realizarse según el plan elegido. El incumplimiento de pago puede
                  resultar en la suspensión de tu membresía.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Uso de Instalaciones</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Debes usar el equipamiento de manera responsable y seguir las instrucciones de seguridad. Cualquier
                  daño causado por mal uso será responsabilidad del miembro.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Salud y Seguridad</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Es tu responsabilidad asegurarte de estar en condiciones físicas adecuadas para realizar ejercicio.
                  Recomendamos consultar con un médico antes de comenzar cualquier programa de ejercicios.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Cancelación</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Puedes cancelar tu membresía con un aviso previo de 30 días. No se realizarán reembolsos por períodos
                  no utilizados.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Código de Conducta</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Esperamos que todos los miembros traten a otros con respeto. El comportamiento inapropiado, incluyendo
                  acoso o intimidación, puede resultar en la terminación inmediata de la membresía.
                </p>
              </section>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
