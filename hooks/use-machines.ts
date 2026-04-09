"use client"

import useSWR from "swr"
import type { MaquinaGym } from "@/lib/types"
import machinesData from "@/lib/machines.json"

const fetcher = async (): Promise<MaquinaGym[]> => {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return machinesData as MaquinaGym[]
}

export function useMachines() {
  const { data, error, isLoading, mutate } = useSWR<MaquinaGym[]>("/api/machines", fetcher)

  return {
    machines: data || [],
    isLoading,
    isError: error,
    mutate,
  }
}
