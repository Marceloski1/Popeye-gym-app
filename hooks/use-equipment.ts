"use client"

import useSWR from "swr"
import type { Equipment } from "@/lib/types"
import { mockEquipment } from "@/lib/mock-data"

const fetcher = async (): Promise<Equipment[]> => {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return mockEquipment
}

export function useEquipment() {
  const { data, error, isLoading, mutate } = useSWR<Equipment[]>("/api/equipment", fetcher)

  return {
    equipment: data || [],
    isLoading,
    isError: error,
    mutate,
  }
}
