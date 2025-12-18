import { Hero } from "@/components/hero"
import { Memberships } from "@/components/memberships"
import { Classes } from "@/components/classes"
import { TrainingAreas } from "@/components/training-areas"
import { Schedule } from "@/components/schedule"
import { Registration } from "@/components/registration"
import { Trainers } from "@/components/trainers"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function GymLandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Memberships />
      <Classes />
      <TrainingAreas />
      <Schedule />
      <Registration />
      <Trainers />
      <Testimonials />
      <Footer />
    </div>
  )
}
