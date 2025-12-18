"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    membership: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <section id="registration" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
            REGÍSTRATE <span className="text-primary">EN LÍNEA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Completa el formulario y comienza tu transformación hoy mismo
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-card border-border">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-foreground">Únete a PowerFit</CardTitle>
            <CardDescription className="text-muted-foreground">
              Llena tus datos y nos pondremos en contacto contigo en menos de 24 horas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Nombre Completo
                </Label>
                <Input
                  id="name"
                  placeholder="Juan Pérez"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-border text-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Correo Electrónico
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="juan@ejemplo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background border-border text-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">
                  Teléfono
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+502 58564601"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-background border-border text-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="membership" className="text-foreground">
                  Selecciona tu Membresía
                </Label>
                <Select
                  value={formData.membership}
                  onValueChange={(value) => setFormData({ ...formData, membership: value })}
                >
                  <SelectTrigger className="bg-background border-border text-foreground">
                    <SelectValue placeholder="Elige un plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Plan Básico - $29/mes</SelectItem>
                    <SelectItem value="intermediate">Plan Intermedio - $49/mes</SelectItem>
                    <SelectItem value="premium">Plan Premium - $79/mes</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6"
              >
                Registrarme Ahora
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
