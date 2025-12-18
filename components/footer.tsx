import { Dumbbell, Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">POWERFIT</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Tu destino para alcanzar tus metas fitness y transformar tu vida.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+</span>
              </div>+502 1234-5678
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@powerfit.com</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Av Reforma Zona 9</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Horarios</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Lun - Vie: 05:00 - 23:00</p>
              <p>Sábado: 07:00 - 21:00</p>
              <p>Domingo: 08:00 - 20:00</p>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Síguenos</h3>
            <div className="flex gap-3">
              <Button
                size="icon"
                variant="outline"
                className="border-foreground hover:bg-primary hover:border-primary bg-transparent"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-foreground hover:bg-primary hover:border-primary bg-transparent"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-foreground hover:bg-primary hover:border-primary bg-transparent"
              >
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold mt-4">
              WhatsApp
            </Button>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 PowerFit. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
