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
