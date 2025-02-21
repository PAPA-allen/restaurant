"use client"

import { useEffect, useState } from "react"
import { UtensilsCrossed ,ChefHat } from "lucide-react" // Importing fork and knife icons from lucide

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 600)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
      <div className="flex gap-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex flex-col items-center"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <UtensilsCrossed 
              className="h-10 w-10 text-primary animate-bounce"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
            <ChefHat
              className="h-10 w-10 text-primary animate-bounce"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
