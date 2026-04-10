"use client"

import Link from "next/link"
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl" aria-hidden="true">💪</div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#5a8c3a]">La Spinaca d' Popeye</span>
                <span className="text-xs text-muted-foreground tracking-wider">GYM</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Transformando vidas desde hace más de 10 años. El mejor gimnasio para convertirte en un tanque.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#5a8c3a] transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/equipment" className="text-gray-400 hover:text-[#5a8c3a] transition-colors">
                  Equipamiento
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-[#5a8c3a] transition-colors">
                  Galería
                </Link>
              </li>
              <li>
                <Link href="/nutrition" className="text-gray-400 hover:text-[#5a8c3a] transition-colors">
                  Nutrición
                </Link>
              </li>
              <li>
                <Link href="/bmi" className="text-gray-400 hover:text-[#5a8c3a] transition-colors">
                  Calculadora IMC
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#5a8c3a] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <a href="tel:+5352541695" className="text-gray-400 hover:text-[#5a8c3a] transition-colors">
                  +53 5254-1695
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#5a8c3a] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:caridasgomez@gmail.com" className="text-gray-400 hover:text-[#5a8c3a] transition-colors">
                  caridasgomez@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#5a8c3a] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="text-gray-400">
                  Boyeros entre Túlipan y Conill
                  <br />
                  Vedado, La Habana, Cuba
                </p>
              </li>
            </ul>
          </div>

          {/* Schedule */}
          <div>
            <h3 className="font-bold text-lg mb-4">Horarios</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between">
                <span>Lunes – Viernes</span>
                <div className="flex flex-col">
 <              span className="text-[#5a8c3a] ">6:30 AM – 1:00 PM</span>
                <span className="text-[#5a8c3a]">3:30 PM – 9:00 PM</span>
                </div>
               
              </li>
              <li className="flex justify-between">
                <span>Sábado – Domingo</span>
                <span className="text-gray-500">Cerrado</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-[#5a8c3a] transition-all duration-300 hover:scale-110"
                aria-label="Síguenos en Facebook"
              >
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/laspinacadepopeye/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-[#5a8c3a] transition-all duration-300 hover:scale-110"
                aria-label="Síguenos en Instagram"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} La Spinaca d' Popeye Gym. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
