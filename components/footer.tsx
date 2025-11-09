"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">💪</div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#5a8c3a]">La Spinaca d' Popeye</span>
                <span className="text-xs text-muted-foreground">GYM</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Transformando vidas desde hace más de 10 años. El mejor gimnasio para convertirse en un tanke.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#5a8c3a] transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-[#5a8c3a] transition-colors">
                  Nuestro Equipo
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
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-[#5a8c3a] mt-0.5" />
                <div>
                  <p className="text-gray-400">+53 5254-1695</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-[#5a8c3a] mt-0.5" />
                <p className="text-gray-400">_____</p>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#5a8c3a] mt-0.5" />
                <p className="text-gray-400">Calle Central Bajos, Vedado, La Habana, Cuba</p>
              </li>
            </ul>
          </div>

          {/* Schedule */}
          <div>
            <h3 className="font-bold text-lg mb-4">Horarios</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Lunes - Viernes</span>
                <span className="text-[#5a8c3a]">6:30 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado - Domingo</span>
                <span className="text-gray-500">Cerrado</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#5a8c3a] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
  href="https://www.instagram.com/laspinacadepopeye/"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#5a8c3a] transition-colors"
  onClick={(e) => {
    // Solo en dispositivos móviles
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      e.preventDefault();
      // Intentar abrir app
      window.location.href = 'instagram://user?username=laspinacadepopeye';
      // Fallback después de 500ms
      setTimeout(() => {
        window.location.href = 'https://www.instagram.com/laspinacadepopeye/';
      }, 300);
    }
  }}
>
  <Instagram className="w-5 h-5" />
</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
