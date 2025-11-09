# Gimnasio Popeye - Sitio Web Oficial

![Popeye Gym Logo](public/muscular-male-trainer-in-gym.jpg)

**Tercer mejor gimnasio en La Habana 2025**

Sitio web oficial del Gimnasio La espinaca de Popeye, desarrollado con Next.js 16, React 19.2 (Se cambió a React 18.3 en el package json por problemas de despligue), Material UI y Framer Motion.

## Características

- **Homepage**: Hero impactante, secciones de características, estadísticas animadas, testimonios
- **Sobre Nosotros**: Historia del gimnasio, misión, visión, valores y ubicación con mapa interactivo
- **Equipo**: Presentación de entrenadores certificados con sus especialidades
- **Equipamiento**: Catálogo completo del equipo disponible con filtros por categoría
- **Galería**: Fotos de las instalaciones con lightbox interactivo
- **Calculadora IMC**: Herramienta para calcular índice de masa corporal con recomendaciones
- **Mitos Nutricionales**: Información verificada sobre nutrición y fitness
- **Panel Admin**: Gestión de entrenadores y equipamiento

## Tecnologías

- **Framework**: Next.js 16.0 con App Router
- **React**: 18.3 con Canary Features (useEffectEvent, Activity)
- **UI**: Material UI (componentes shadcn/ui) + Framer Motion (Se cambió a React 18.3 en el package json por problemas de despligue)
- **Estilos**: Tailwind CSS v4 con diseño mobile-first
- **TypeScript**: Type safety completo
- **Estado**: SWR para client-side data fetching y caching

## Requisitos

- Node.js 20.x o superior
- npm o yarn

## Instalación

\`\`\`bash
# Clonar el repositorio
git clone https://github.com/Marceloski1/Popeye-gym-app

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
\`\`\`

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.


## Estructura del Proyecto

\`\`\`
popeye-gym-website/
├── app/                    # Next.js App Router
│   ├── about/             # Página Sobre Nosotros
│   ├── admin/             # Panel de Administración
│   ├── bmi/               # Calculadora IMC
│   ├── equipment/         # Equipamiento
│   ├── gallery/           # Galería
│   ├── nutrition/         # Mitos Nutricionales
│   ├── team/              # Equipo de Entrenadores
│   ├── privacy/           # Política de Privacidad
│   ├── terms/             # Términos y Condiciones
│   └── cookies/           # Política de Cookies
├── components/            # Componentes React
│   ├── ui/               # Componentes shadcn/ui
│   ├── about/            # Componentes de About
│   ├── admin/            # Componentes de Admin
│   ├── bmi/              # Componentes de BMI
│   ├── equipment/        # Componentes de Equipment
│   ├── gallery/          # Componentes de Gallery
│   ├── nutrition/        # Componentes de Nutrition
│   └── team/             # Componentes de Team
├── hooks/                 # Custom React Hooks
├── lib/                   # Utilidades y tipos
│   ├── types.ts          # Definiciones TypeScript
│   ├── mock-data.ts      # Datos de ejemplo
│   └── utils.ts          # Funciones utilitarias
└── public/               # Assets estáticos

\`\`\`

## Personalización

### Colores
Los colores de la marca La espinaca de Popeye están definidos en `app/globals.css`:
- Verde corporativo primario: `#2D7A3E`
- Verde oscuro: `#1B4D2A`
- Naranja acento: `#FF6B35`

### Fuentes
- Headings: Inter (bold, extrabold)
- Body: Inter (regular, medium)

