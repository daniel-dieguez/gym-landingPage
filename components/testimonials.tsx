import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Laura Ramírez",
    role: "Miembro desde 2023",
    content:
      "PowerFit cambió mi vida completamente. Bajé 15 kilos y gané mucha confianza. Los entrenadores son increíbles y siempre están motivándote.",
    rating: 5,
  },
  {
    name: "Miguel Torres",
    role: "Miembro desde 2022",
    content:
      "El mejor gimnasio en el que he estado. Las instalaciones son de primera y las clases de CrossFit son brutales. Totalmente recomendado.",
    rating: 5,
  },
  {
    name: "Sofia Hernández",
    role: "Miembro desde 2024",
    content:
      "Me encanta la variedad de clases y el ambiente familiar. Todos son muy amables y el equipo está siempre en perfecto estado.",
    rating: 5,
  },
  {
    name: "Diego Morales",
    role: "Miembro desde 2021",
    content:
      "Llevo 3 años entrenando aquí y no cambiaría este gym por nada. Los resultados hablan por sí solos. ¡Gracias PowerFit!",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
            LO QUE DICEN <span className="text-primary">NUESTROS CLIENTES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Historias reales de transformación y éxito
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed mb-6 text-pretty">"{testimonial.content}"</p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
