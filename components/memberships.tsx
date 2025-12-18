import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Plan Básico",
    price: "$29",
    period: "/mes",
    description: "Perfecto para comenzar tu viaje fitness",
    features: [
      "Acceso al gimnasio 24/7",
      "Área de pesas y cardio",
      "Vestuarios y duchas",
      "Wi-Fi gratuito",
      "App móvil de seguimiento",
    ],
    popular: false,
  },
  {
    name: "Plan Intermedio",
    price: "$49",
    period: "/mes",
    description: "La opción más popular para resultados serios",
    features: [
      "Todo lo del Plan Básico",
      "Clases grupales ilimitadas",
      "Zona funcional y CrossFit",
      "2 sesiones con entrenador personal",
      "Análisis corporal mensual",
      "Descuentos en productos",
    ],
    popular: true,
  },
  {
    name: "Plan Premium",
    price: "$79",
    period: "/mes",
    description: "Experiencia completa y personalizada",
    features: [
      "Todo lo del Plan Intermedio",
      "Entrenamiento personal ilimitado",
      "Plan nutricional personalizado",
      "Acceso a sauna y spa",
      "Clases privadas disponibles",
      "Estacionamiento VIP",
      "Toallas y amenidades premium",
    ],
    popular: false,
  },
]

export function Memberships() {
  return (
    <section id="memberships" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
            ELIGE TU <span className="text-primary">MEMBRESÍA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Planes diseñados para adaptarse a tus objetivos y estilo de vida
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${plan.popular ? "border-primary border-2 shadow-lg shadow-primary/20 scale-105" : "border-border"} bg-card hover:shadow-xl transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                  MÁS POPULAR
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-card-foreground">{feature}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter>
                <Button
                  className={`w-full font-bold ${plan.popular ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/80"}`}
                  size="lg"
                >
                  Elegir Plan
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
