import type { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Política de Privacidad | Popeye Gym",
  description: "Conoce cómo Popeye Gym protege y gestiona tu información personal.",
}

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Política de Privacidad</h1>
            <p className="text-muted-foreground mb-8">Última actualización: Enero 2025</p>

            <Card className="p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Información que Recopilamos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  En Popeye Gym recopilamos información personal como nombre, dirección de correo electrónico, número de
                  teléfono y datos relacionados con tu membresía cuando te registras en nuestros servicios.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Uso de la Información</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Utilizamos tu información para proporcionarte servicios del gimnasio, comunicarnos contigo sobre tu
                  membresía, enviarte actualizaciones sobre nuestros programas y mejorar nuestros servicios.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Protección de Datos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal
                  contra acceso no autorizado, pérdida o alteración.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Compartir Información</h2>
                <p className="text-muted-foreground leading-relaxed">
                  No vendemos ni compartimos tu información personal con terceros, excepto cuando sea necesario para
                  proporcionar nuestros servicios o cuando la ley lo requiera.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Tus Derechos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Tienes derecho a acceder, corregir o eliminar tu información personal en cualquier momento. Contacta
                  con nosotros para ejercer estos derechos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Contacto</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Si tienes preguntas sobre esta política de privacidad, contáctanos en info@popeyegym.cu
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
