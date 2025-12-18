import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/modern-gym-interior-with-people-training-intensely.jpg" alt="Gym background" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-balance">
            TRANSFORMA TU
            <span className="block text-primary">CUERPO Y MENTE</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Alcanza tus metas fitness con el mejor equipamiento, entrenadores certificados y una comunidad motivadora
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 group"
            >
              Únete Hoy
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-bold text-lg px-8 py-6 bg-transparent"
            >
              Ver Planes
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-foreground rounded-full" />
        </div>
      </div>
    </section>
  )
}
