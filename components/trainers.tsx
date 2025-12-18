import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const trainers = [
  {
    name: "Carlos Mendoza",
    specialty: "Entrenamiento de Fuerza",
    experience: "10 años de experiencia",
    certifications: "NSCA-CPT, CrossFit L2",
    image: "/male-fitness-trainer-with-muscles.jpg",
  },
  {
    name: "María González",
    specialty: "Yoga & Pilates",
    experience: "8 años de experiencia",
    certifications: "RYT-500, Pilates Instructor",
    image: "/female-yoga-instructor.png",
  },
  {
    name: "Roberto Silva",
    specialty: "CrossFit & HIIT",
    experience: "12 años de experiencia",
    certifications: "CrossFit L3, NASM-PES",
    image: "/male-crossfit-coach.jpg",
  },
  {
    name: "Ana Martínez",
    specialty: "Nutrición Deportiva",
    experience: "7 años de experiencia",
    certifications: "Nutrióloga Certificada, ISSN",
    image: "/female-nutritionist.png",
  },
]

export function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
            NUESTROS <span className="text-primary">ENTRENADORES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Profesionales certificados dedicados a ayudarte a alcanzar tus metas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {trainers.map((trainer) => (
            <Card
              key={trainer.name}
              className="bg-card border-border hover:border-primary transition-all duration-300 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={trainer.image || "/placeholder.svg"}
                  alt={trainer.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">{trainer.name}</CardTitle>
                <CardDescription className="text-primary font-semibold">{trainer.specialty}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">{trainer.experience}</p>
                <p className="text-xs text-muted-foreground">{trainer.certifications}</p>
                <Button
                  variant="outline"
                  className="w-full mt-4 border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
                >
                  Agendar Cita
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
