import type { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Política de Cookies | Popeye Gym",
  description: "Información sobre cómo Popeye Gym utiliza cookies en su sitio web.",
}

export default function CookiesPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Política de Cookies</h1>
            <p className="text-muted-foreground mb-8">Última actualización: Enero 2025</p>

            <Card className="p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">¿Qué son las Cookies?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro
                  sitio web. Nos ayudan a mejorar tu experiencia y recordar tus preferencias.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Tipos de Cookies que Utilizamos</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Cookies Necesarias</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Esenciales para el funcionamiento del sitio web. No se pueden desactivar.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Cookies de Rendimiento</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Cookies de Funcionalidad</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Permiten que el sitio web recuerde tus preferencias y elecciones.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Control de Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Puedes controlar y eliminar cookies a través de la configuración de tu navegador. Ten en cuenta que
                  eliminar cookies puede afectar la funcionalidad del sitio web.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Cookies de Terceros</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Utilizamos Google Analytics para analizar el uso de nuestro sitio web. Estas cookies son gestionadas
                  por terceros y están sujetas a sus propias políticas de privacidad.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contacto</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Si tienes preguntas sobre nuestra política de cookies, contáctanos en info@popeyegym.cu
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
