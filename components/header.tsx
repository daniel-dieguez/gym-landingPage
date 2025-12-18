"use client"

import { Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Dumbbell className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">POWERFIT</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("memberships")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Membresías
            </button>
            <button
              onClick={() => scrollToSection("classes")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Clases
            </button>
            <button
              onClick={() => scrollToSection("trainers")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Entrenadores
            </button>
            <button
              onClick={() => scrollToSection("schedule")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Horarios
            </button>
          </nav>

          <Button
            onClick={() => scrollToSection("registration")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
          >
            Únete Ahora
          </Button>
        </div>
      </div>
    </header>
  )
}
