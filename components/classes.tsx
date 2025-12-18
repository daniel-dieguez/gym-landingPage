import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const schedule = [
  {
    day: "Lunes",
    classes: [
      { name: "CrossFit", time: "06:00 - 07:00" },
      { name: "Yoga", time: "09:00 - 10:00" },
      { name: "Spinning", time: "18:00 - 19:00" },
      { name: "Zumba", time: "19:30 - 20:30" },
    ],
  },
  {
    day: "Martes",
    classes: [
      { name: "HIIT", time: "06:00 - 07:00" },
      { name: "Pilates", time: "10:00 - 11:00" },
      { name: "Boxing", time: "18:00 - 19:00" },
      { name: "Funcional", time: "19:30 - 20:30" },
    ],
  },
  {
    day: "Miércoles",
    classes: [
      { name: "CrossFit", time: "06:00 - 07:00" },
      { name: "Yoga", time: "09:00 - 10:00" },
      { name: "Spinning", time: "18:00 - 19:00" },
      { name: "Zumba", time: "19:30 - 20:30" },
    ],
  },
  {
    day: "Jueves",
    classes: [
      { name: "HIIT", time: "06:00 - 07:00" },
      { name: "Pilates", time: "10:00 - 11:00" },
      { name: "Boxing", time: "18:00 - 19:00" },
      { name: "Funcional", time: "19:30 - 20:30" },
    ],
  },
  {
    day: "Viernes",
    classes: [
      { name: "CrossFit", time: "06:00 - 07:00" },
      { name: "Yoga", time: "09:00 - 10:00" },
      { name: "Spinning", time: "18:00 - 19:00" },
      { name: "Dance Fit", time: "19:30 - 20:30" },
    ],
  },
  {
    day: "Sábado",
    classes: [
      { name: "Boot Camp", time: "08:00 - 09:00" },
      { name: "Yoga", time: "10:00 - 11:00" },
      { name: "Spinning", time: "11:30 - 12:30" },
    ],
  },
  {
    day: "Domingo",
    classes: [
      { name: "Yoga", time: "09:00 - 10:00" },
      { name: "Stretching", time: "10:30 - 11:30" },
    ],
  },
]

export function Classes() {
  return (
    <section id="classes" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
            CLASES DE LA <span className="text-primary">SEMANA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Variedad de clases grupales dirigidas por instructores certificados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {schedule.map((day) => (
            <Card key={day.day} className="bg-card border-border hover:border-primary transition-colors">
              <CardHeader className="bg-secondary/50">
                <CardTitle className="text-xl font-bold text-center">{day.day}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                {day.classes.map((classItem, idx) => (
                  <div key={idx} className="border-l-2 border-primary pl-4 py-2">
                    <div className="font-bold text-foreground">{classItem.name}</div>
                    <div className="text-sm text-muted-foreground">{classItem.time}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
