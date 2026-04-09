export interface Trainer {
  id: string
  name: string
  role: string
  bio: string
  image: string
  certifications: string[]
  experience: string
  specialties: string[]
}

export interface Equipment {
  id: string
  name: string
  category: string
  description: string
  image: string
  exerciseType: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  image: string
  rating: number
}

export interface NutritionMyth {
  id: string
  myth: string
  truth: string
  explanation: string
  isMyth: boolean
}


export type GrupoMuscular =
  | "Pecho"
  | "Espalda"
  | "Piernas"
  | "Cuádriceps"
  | "Femorales"
  | "Glúteos"
  | "Aductores"
  | "Pantorrillas"
  | "Hombros"
  | "Bíceps"
  | "Tríceps"
  | "Core"
  | "Full body";

export interface MaquinaGym {
  nombre: string;
  grupo_muscular_principal: GrupoMuscular;
  musculos_secundarios: string[];
  descripcion: string;
  para_que_sirve: string;
  beneficios: string;
  que_musculo_desarrolla: string;
  ejercicios_posibles: string[];
  variaciones: string[];
  imagen?: string;
}