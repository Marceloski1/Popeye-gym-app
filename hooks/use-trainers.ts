"use client"

import useSWR from "swr"
import type { Trainer } from "@/lib/types"
import { mockTrainers } from "@/lib/mock-data"

// Simulated fetcher for SWR
const fetcher = async (): Promise<Trainer[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))
  return mockTrainers
}

export function useTrainers() {
  const { data, error, isLoading, mutate } = useSWR<Trainer[]>("/api/trainers", fetcher)

  return {
    trainers: data || [],
    isLoading,
    isError: error,
    mutate,
  }
}
