import type { Trainer, Equipment, Testimonial, NutritionMyth } from "./types"

export const mockTrainers: Trainer[] = [
  {
    id: "1",
    name: "Carlos Rodríguez",
    role: "Entrenador Principal",
    bio: "Especialista en musculación y nutrición deportiva con más de 10 años de experiencia.",
    image: "/muscular-male-trainer-in-gym.jpg",
    certifications: ["NSCA-CPT", "Nutrición Deportiva", "CrossFit Level 2"],
    experience: "10 años",
    specialties: ["Musculación", "Nutrición", "Fuerza"],
  },
  {
    id: "2",
    name: "María González",
    role: "Instructora de Cardio",
    bio: "Experta en entrenamiento cardiovascular y clases grupales de alta intensidad.",
    image: "/smiling-fitness-instructor.png",
    certifications: ["ACE-CPT", "Zumba Instructor", "Spinning"],
    experience: "7 años",
    specialties: ["Cardio", "HIIT", "Clases Grupales"],
  },
  {
    id: "3",
    name: "Jorge Fernández",
    role: "Entrenador Personal",
    bio: "Especializado en transformaciones corporales y entrenamiento funcional.",
    image: "/athletic-male-trainer.png",
    certifications: ["ISSA-CPT", "TRX Instructor", "Kettlebell"],
    experience: "8 años",
    specialties: ["Funcional", "Pérdida de peso", "Resistencia"],
  },
]

export const mockEquipment: Equipment[] = [
  {
    id: "1",
    name: "Press de Banca Olímpico",
    category: "Pesas",
    description: "Press de banca profesional para desarrollo pectoral y fuerza superior.",
    image: "/olympic-bench-press-equipment.jpg",
    exerciseType: "Fuerza - Pecho",
  },
  {
    id: "2",
    name: "Cinta de Correr Profesional",
    category: "Cardio",
    description: "Cinta motorizada de alta gama con pantalla táctil y programas personalizados.",
    image: "/professional-treadmill-gym-equipment.jpg",
    exerciseType: "Cardio",
  },
  {
    id: "3",
    name: "Rack de Sentadillas",
    category: "Pesas",
    description: "Rack ajustable de seguridad para sentadillas y ejercicios compuestos.",
    image: "/squat-rack-power-cage-gym.jpg",
    exerciseType: "Fuerza - Piernas",
  },
  {
    id: "4",
    name: "Bicicleta Estática Spinning",
    category: "Cardio",
    description: "Bicicleta de spinning con resistencia magnética y monitor de frecuencia cardíaca.",
    image: "/spinning-bike-stationary-bicycle.jpg",
    exerciseType: "Cardio",
  },
  {
    id: "5",
    name: "Mancuernas Ajustables",
    category: "Pesas",
    description: "Set completo de mancuernas de 5kg a 50kg para todo tipo de ejercicios.",
    image: "/adjustable-dumbbells-set-gym.jpg",
    exerciseType: "Fuerza - General",
  },
  {
    id: "6",
    name: "Máquina de Remo",
    category: "Cardio",
    description: "Remo de agua con resistencia ajustable para entrenamiento completo del cuerpo.",
    image: "/rowing-machine-gym-cardio.jpg",
    exerciseType: "Cardio - Cuerpo completo",
  },
]

export const mockTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ana María López",
    role: "Miembro desde 2023",
    content:
      "El Popeye transformó mi vida. Los entrenadores son increíbles y las instalaciones de primera clase.",
    image: "/happy-woman-fitness-client.jpg",
    rating: 5,
  },
  {
    id: "2",
    name: "XXXXXXX",
    role: "Miembro desde 20XXXXXX",
    content:
      "El mejor gimnasio de La Habana sin duda con muy buen Ambiente motivador y entrenadores que te tienen paciencia, Totalmente recomendado.",
    image: "/satisfied-male-gym-member.jpg",
    rating: 5,
  },
  {
    id: "3",
    name: "XXXXXXXX",
    role: "Miembro desde 20XXXXXX",
    content:
      "xxxxxxxxxxxx",
    image: "/young-woman-gym-beginner-happy.jpg",
    rating: 4,
  },
]

export const mockNutritionMyths: NutritionMyth[] = [
  {
    id: "1",
    myth: "Las proteínas dañan los riñones",
    truth: "Las proteínas NO dañan los riñones en personas sanas",
    explanation:
      "En personas con función renal normal, consumir proteína en cantidades adecuadas (incluso elevadas para atletas) no causa daño renal. Solo quienes tienen problemas renales preexistentes deben limitar su consumo.",
    isMyth: true,
  },
  {
    id: "2",
    myth: "Comer después de las 8 PM engorda más",
    truth: "La hora de la comida NO determina el aumento de peso",
    explanation:
      "Lo que importa es el balance calórico total del día, no la hora a la que comes. Puedes comer de noche si se ajusta a tus necesidades calóricas diarias.",
    isMyth: true,
  },
  {
    id: "3",
    myth: "Beber agua ayuda a perder peso",
    truth: "El agua SÍ puede ayudar en la pérdida de peso",
    explanation:
      "Beber agua antes de las comidas puede reducir el apetito, aumenta el metabolismo temporalmente y ayuda a la quema de calorías. Además, muchas veces confundimos sed con hambre.",
    isMyth: false,
  },
  {
    id: "4",
    myth: "Los carbohidratos son enemigos del fitness",
    truth: "Los carbohidratos son ESENCIALES para el rendimiento",
    explanation:
      "Los carbohidratos son la principal fuente de energía para entrenamientos intensos. Eliminarlos puede reducir tu rendimiento y recuperación muscular.",
    isMyth: true,
  },
]
