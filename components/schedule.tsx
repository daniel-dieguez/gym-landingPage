import { Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const hours = [
  { day: "Lunes - Viernes", hours: "05:00 - 23:00", special: "Clases desde las 06:00" },
  { day: "Sábado", hours: "07:00 - 21:00", special: "Clases desde las 08:00" },
  { day: "Domingo", hours: "08:00 - 20:00", special: "Clases desde las 09:00" },
  { day: "Festivos", hours: "08:00 - 18:00", special: "Horario especial" },
]

export function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
            HORARIOS <span className="text-primary">GENERALES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Abierto cuando tú lo necesitas, adaptándonos a tu rutina
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {hours.map((schedule) => (
            <Card key={schedule.day} className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{schedule.day}</h3>
                    <p className="text-2xl font-bold text-primary mb-1">{schedule.hours}</p>
                    <p className="text-sm text-muted-foreground">{schedule.special}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-primary/10 border-primary">
            <CardContent className="pt-6">
              <p className="text-lg font-semibold text-foreground">Acceso 24/7 disponible para miembros Premium</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
