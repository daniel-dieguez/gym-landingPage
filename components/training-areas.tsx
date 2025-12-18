import { Dumbbell, Heart, Zap, Users, Flame, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const areas = [
  {
    icon: Dumbbell,
    title: "Zona de Pesas",
    description:
      "Equipamiento completo de pesas libres, mancuernas y máquinas de última generación para entrenamiento de fuerza.",
  },
  {
    icon: Heart,
    title: "Área Cardio",
    description: "Caminadoras, elípticas, bicicletas y remos con pantallas interactivas y programas personalizados.",
  },
  {
    icon: Zap,
    title: "Zona Funcional",
    description: "Espacio amplio con kettlebells, TRX, battle ropes y todo lo necesario para entrenamiento funcional.",
  },
  {
    icon: Flame,
    title: "Box de CrossFit",
    description: "Área dedicada con racks, barras olímpicas, bumper plates y espacio para WODs intensos.",
  },
  {
    icon: Users,
    title: "Salón de Clases",
    description: "Estudio espacioso con sistema de sonido profesional para clases grupales de alta energía.",
  },
  {
    icon: Sparkles,
    title: "Área de Estiramiento",
    description: "Zona tranquila con colchonetas, foam rollers y accesorios para recuperación y flexibilidad.",
  },
]

export function TrainingAreas() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
            ÁREAS DE <span className="text-primary">ENTRENAMIENTO</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Instalaciones de primer nivel diseñadas para maximizar tus resultados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {areas.map((area) => {
            const Icon = area.icon
            return (
              <Card
                key={area.title}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
