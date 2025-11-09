# Guía de Despliegue - Popeye Gym Website

## Despliegue en Cloudflare Pages (Configuración Actual)

### Requisitos
- Node.js 20.x o superior
- Cuenta de Cloudflare con Pages habilitado

### Pasos para desplegar:

1. **Conectar repositorio a Cloudflare Pages**
   - Ve a tu dashboard de Cloudflare
   - Selecciona "Workers & Pages" > "Create application" > "Pages" > "Connect to Git"
   - Conecta tu repositorio de GitHub/GitLab

2. **Configuración de Build**
   \`\`\`
   Framework preset: Next.js
   Build command: npm run build
   Build output directory: .next
   Node version: 20
   \`\`\`

3. **Variables de Entorno (Opcional)**
   - No se requieren variables de entorno para la funcionalidad básica
   - Si agregas integraciones de base de datos, añádelas en Settings > Environment Variables

4. **Desplegar**
   - Haz push a tu rama principal
   - Cloudflare automáticamente detectará los cambios y desplegará

### Características Optimizadas para Cloudflare:
- Imágenes sin optimización (unoptimized: true) - compatible con Cloudflare CDN
- React Compiler habilitado para mejor rendimiento
- Edge Runtime compatible
- Build estático y server-side rendering híbrido

---

## Despliegue en Vercel (Alternativa)

### Cambios necesarios para Vercel:

1. **Modificar next.config.mjs**
   - Puedes mantener la configuración actual o simplificarla
   - Opcional: Cambiar `images.unoptimized` a `false` para aprovechar Image Optimization de Vercel

2. **Pasos para desplegar:**
   - Instala Vercel CLI: `npm i -g vercel`
   - Ejecuta: `vercel`
   - Sigue las instrucciones en pantalla

3. **Desde la UI de Vercel:**
   - Importa el proyecto desde Git
   - Vercel detectará Next.js automáticamente
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

### Ventajas de Vercel sobre Cloudflare:
- Image Optimization automática (si cambias `unoptimized: false`)
- Analytics integrado
- Edge Functions sin límites de tiempo
- Mejor integración con Next.js 16 features

---

## Notas Importantes

### Diferencias entre Cloudflare y Vercel:

| Feature | Cloudflare Pages | Vercel |
|---------|------------------|--------|
| Image Optimization | CDN básico | Advanced (Next/Image) |
| Edge Runtime | Workers (30s límite gratis) | Edge Functions (ilimitado) |
| Build Time | Generoso | Generoso |
| Analytics | Requiere Worker | Incluido |
| Caching | CDN global | CDN + ISR |

### Datos Mock
El proyecto actualmente usa datos mock (lib/mock-data.ts) para:
- Entrenadores
- Equipamiento
- Testimonios
- Mitos nutricionales

Para producción, considera integrar:
- Supabase o Neon para base de datos
- CMS como Contentful o Sanity
- API endpoints propios

---

## Troubleshooting

### Error: Module not found
- Ejecuta `npm install` antes de desplegar localmente
- Verifica que todas las dependencias estén en package.json

### Build falla en Cloudflare
- Verifica que Node version sea 20 en configuración
- Revisa los logs de build en Cloudflare dashboard

### Imágenes no cargan
- Las imágenes en /public deben estar commiteadas en Git
- Verifica que las rutas sean correctas (/imagen.jpg no ./imagen.jpg)

---

## Comandos Útiles

\`\`\`bash
# Desarrollo local
npm run dev

# Build de producción local
npm run build
npm run start

# Linter
npm run lint
\`\`\`

---

## Contacto y Soporte

Para soporte del gimnasio Popeye:
- Email: info@popeyegym.cu
- Teléfono: +53 7 123 4567
- Dirección: Calle 23 #456, La Habana, Cuba
