"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, UserCircle, ChevronLeft, ChevronRight, Wind, TrendingUp, Handshake, BookOpen, Leaf, Quote, MapPin } from "lucide-react"

interface EnergyAmbassadorsPageProps {
  onBack: () => void
}

interface Ambassador {
  name: string
  role: string
  region: string
}

const ambassadors: Ambassador[] = [
  { name: "Ramón Gastelum Franco", role: "Community Leader & Environmental Advocate", region: "Baja California" },
  { name: "Luis Carlos Castro Vizcarra", role: "Comisionado, Instituto de Transparencia de Baja California", region: "Baja California" },
  { name: "Myriam Serra Castellanos", role: "Presidenta, Fundación Hélice, A.C.", region: "Baja California" },
  { name: "María Elena Vela Ojeda", role: "Director of Regional Development Programs", region: "Baja California" },
  { name: "Jorge Alberto Arroyo", role: "Academic Researcher, Energy Policy", region: "Baja California" },
  { name: "Patricia Mendoza Villanueva", role: "Public Administration & Sustainability", region: "Baja California" },
  { name: "Ricardo Valdez Delgado", role: "Environmental Policy Advisor", region: "Sonora" },
  { name: "Ana Cristina López Martínez", role: "Journalist & Energy Communication Specialist", region: "Sonora" },
  { name: "Carolina Reyes Montiel", role: "Federal Energy Sector Government Official", region: "Ciudad de México" },
]

const regions = ["Baja California", "Sonora", "Ciudad de México"]

const testimonials = [
  {
    name: "Ramón Gastelum Franco",
    quote: "Participar en el Programa Embajadores de Energía del Instituto de las Américas, cambió mi visión sobre el cambio climático y sus efectos negativos en el clima de nuestro planeta. También nos ilustró sobre las distintas formas de generación de energías limpias, con menores índices de contaminación, para su uso en los sectores público y privado. La importancia de este tema en nuestras vidas nos compromete a defender las opciones de generación de energías limpias en nuestros círculos de influencia.",
  },
  {
    name: "Luis Carlos Castro Vizcarra",
    role: "Comisionado, Instituto de Transparencia de Baja California",
    quote: "El programa me proporcionó una comprensión profunda del contexto energético global y de los aspectos clave para la transición hacia fuentes de energía más sostenibles. La formación en energía solar, vehículos eléctricos, gas natural y estrategias para combatir la pobreza energética ha sido invaluable. Además, el intercambio de conocimientos con otros líderes comunitarios, académicos, funcionarios públicos y periodistas amplió mi perspectiva y fortaleció mi compromiso con la promoción de soluciones energéticas innovadoras y equitativas.",
  },
  {
    name: "Myriam Serra Castellanos",
    role: "Presidenta, Fundación Hélice, A.C.",
    quote: "Agradezco infinitamente la invitación al Instituto de las Américas y a los expertos involucrados en el desarrollo de este programa, el cual me brindó las herramientas y contenidos respecto a la transición energética en México y en el mundo, coincidir con un grupo interdisciplinario de profesionistas y multiplicar lo aprendido para fortalecer y ampliar los programas de educación ambiental como parte de nuestro objeto social en Fundación Hélice AC es un compromiso que asumimos orgullosamente como Embajadores de Energía en Baja California.",
  },
]

const resources = [
  { title: "Energy Ambassadors Program Overview", type: "Program Brief", date: "2025", description: "Comprehensive overview of the Energy Ambassadors initiative, its objectives, methodology, and impact across Mexican border states." },
  { title: "Baja California Energy Landscape Report", type: "Report", date: "2024", description: "Analysis of the energy sector in Baja California, covering regulation, renewable energy potential, and cross-border dynamics." },
  { title: "Mexico City Workshop Proceedings", type: "Proceedings", date: "2025", description: "Summary of the Mexico City workshop including federal energy officials, congressional advisors, and NGO representatives." },
  { title: "Energy for Wellbeing – Energía para el Bienestar", type: "Policy Brief", date: "2025", description: "Policy brief on energy poverty and wellbeing strategies in Mexico's border communities." },
  { title: "AmCham Partnership Report", type: "Partnership", date: "2024", description: "Report on the alliance with the American Chamber of Commerce-Mexico addressing environmental, social, and regulatory dimensions." },
]

const alignmentIcons = [Wind, TrendingUp, Handshake, BookOpen, Leaf]

export function EnergyAmbassadorsPage({ onBack }: EnergyAmbassadorsPageProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, resources.length - 2))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, resources.length - 2)) % Math.max(1, resources.length - 2))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative w-full h-80 bg-gradient-to-b from-gray-300 to-gray-200">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 h-full flex flex-col justify-center">
          <Button variant="ghost" className="mb-6 w-fit text-white hover:bg-white/20" onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Energy Ambassadors</h1>
          <p className="mt-4 max-w-2xl text-xl text-white/90">
            Programa Embajadores de Energía — expanding energy understanding beyond the sector
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Program Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">About the Program</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The Energy Ambassadors program consists of a series of high-level dialogues and presentations directed at leaders and professionals from the Mexican border states of Baja California and Sonora who are not directly involved in the energy sector.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                To expand our vision, the Mexico City workshop includes federal energy sector government officials, congressional advisors, and NGOs. The program&apos;s objective is to deepen the relevance of energy and sustainability issues at both local and global levels, covering diverse topics such as climate change, energy markets and regulation, natural gas, and renewable energy.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Implemented since 2019, this program demonstrates the relevance of transboundary US–Mexico issues and the energy sector, as well as the importance of improving understanding by regional leaders.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In partnership with the American Chamber of Commerce-Mexico, the program considers environmental and social dimensions and reinforces understanding of the legal, regulatory, and investment climate for Mexico&apos;s electricity sector.
              </p>
            </div>
          </div>

          {/* Regional Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { region: "Baja California", count: 6 },
              { region: "Sonora", count: 2 },
              { region: "Ciudad de México", count: 1 },
            ].map((stat) => (
              <div key={stat.region} className="bg-muted/30 rounded-lg p-4 border border-border flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-white font-bold">
                  {stat.count}
                </div>
                <div>
                  <p className="font-semibold text-foreground">in {stat.region}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Meet the Ambassadors */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-3">Meet the Ambassadors</h2>
          <p className="text-muted-foreground mb-8">
            Leaders and professionals from Baja California, Sonora, and Mexico City expanding energy understanding in their communities.
          </p>
          {regions.map((region) => {
            const regionAmbassadors = ambassadors.filter((a) => a.region === region)
            if (regionAmbassadors.length === 0) return null
            return (
              <div key={region} className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold text-foreground">{region}</h3>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {regionAmbassadors.map((ambassador, index) => (
                    <Card key={index} className="text-left">
                      <CardHeader className="pb-2">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                          <UserCircle className="h-10 w-10 text-muted-foreground" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardTitle className="text-base">{ambassador.name}</CardTitle>
                        <CardDescription className="mt-1">{ambassador.role}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )
          })}
        </section>

        {/* Testimonials */}
        <section className="mb-16 bg-muted/30 rounded-lg p-8 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-8">Testimonials</h2>
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background rounded-lg p-6 border border-border">
                <Quote className="h-8 w-8 text-muted-foreground mb-4" />
                <p className="text-muted-foreground leading-relaxed italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                    <UserCircle className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    {testimonial.role && (
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Alignment with Energy Program */}
        <section className="mb-16 bg-muted/30 rounded-lg p-8 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-3">Alignment with the Energy Program</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Energy Ambassadors advances our Energy Program goals by:
          </p>
          <div className="grid grid-cols-5 gap-4">
            {[
              "Deepening regional energy literacy",
              "Strengthening US–Mexico dialogue",
              "Expanding beyond the energy sector",
              "Building cross-disciplinary networks",
              "Informing local policy decisions"
            ].map((item, index) => {
              const IconComponent = alignmentIcons[index % alignmentIcons.length]
              return (
                <div key={index} className="flex flex-col items-center gap-3 bg-background p-4 rounded-lg border border-border hover:shadow-md transition-shadow text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-muted">
                    <IconComponent className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <span className="text-muted-foreground text-sm font-medium">{item}</span>
                </div>
              )
            })}
          </div>
        </section>

        {/* Resources Carousel */}
        <section className="mb-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Publications & Resources</h2>
            <div className="flex items-center justify-center gap-6">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-background border border-border hover:bg-muted transition-colors flex-shrink-0"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </button>

              <div className="overflow-hidden flex-1">
                <div
                  className="flex gap-6 transition-transform duration-300"
                  style={{ transform: `translateX(-${currentSlide * (280 + 24)}px)` }}
                >
                  {resources.map((resource, index) => (
                    <div key={index} className="bg-background rounded-lg overflow-hidden flex-shrink-0 w-64 border border-border">
                      <div className="relative bg-gray-300 h-40 flex items-end justify-end p-3">
                        <span className="text-xs font-semibold bg-foreground/80 text-white px-2 py-1 rounded">
                          {resource.type}
                        </span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-foreground mb-2 text-sm">{resource.title}</h3>
                        <p className="text-muted-foreground text-xs mb-3">{resource.date}</p>
                        <p className="text-muted-foreground text-xs mb-4 line-clamp-3">{resource.description}</p>
                        <Button variant="default" size="sm" className="w-full">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-background border border-border hover:bg-muted transition-colors flex-shrink-0"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-foreground" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.max(1, resources.length - 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-foreground" : "bg-muted"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-muted/30 rounded-lg p-8 mb-8 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6">Project Contact</h2>
          <div className="mb-6">
            <p className="font-semibold text-foreground text-lg">Jeremy M. Martin</p>
            <p className="text-muted-foreground font-medium">Director, Energy Program</p>
            <p className="text-muted-foreground text-sm mt-2">Institute of the Americas</p>
          </div>
          <Button>Send Message</Button>
        </section>
      </div>
    </div>
  )
}