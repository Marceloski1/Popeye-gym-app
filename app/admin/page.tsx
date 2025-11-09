import type { Metadata } from "next"
import { AdminDashboard } from "@/components/admin/admin-dashboard"

export const metadata: Metadata = {
  title: "Panel de Administración | Popeye Gym",
  description: "Panel de administración para gestionar entrenadores y equipamiento del gimnasio.",
}

export default function AdminPage() {
  return <AdminDashboard />
}
