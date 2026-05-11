"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, UserCircle, Newspaper, Download, ChevronLeft, ChevronRight, Wind, TrendingUp, Handshake, BookOpen, Leaf } from "lucide-react"

interface FutureEnergyLeadersPageProps {
  onBack: () => void
}

interface Leader {
  name: string
  role: string
  institution: string
}

const leaders: Leader[] = [
  { name: "Andrea Velazquez Acevedo", role: "Production Associate | ARITZIA", institution: "Master of International Affairs – GPS, UC San Diego" },
  { name: "Angela Solanilla", role: "Economics and Public Policy Consultant", institution: "Master of Public Policy & Environmental Policy – GPS, UC San Diego" },
  { name: "Anne Charles", role: "Research Project Manager II – Hematologic Curation Systems and Services, Dana-Farber Cancer Institute", institution: "Master of International Affairs – GPS, UC San Diego" },
  { name: "Camila Agustina Mercure", role: "Scholar – CEARE", institution: "Master on Interdisciplinary Energy Studies at CEARE, University of Buenos Aires" },
  { name: "Emily Cary", role: "Policy Analyst", institution: "Master of International Relations & Affairs, University of San Diego" },
  { name: "Ernesto A. Castañeda", role: "Energy Policy Researcher", institution: "Master of International Affairs – GPS, UC San Diego" },
  { name: "Guillermo David García", role: "Legal & Business Analyst", institution: "Dual Graduate Program: Law and Business, Adolfo Ibáñez University, Chile" },
  { name: "Helen Martina Bucarey Segovia", role: "Legal & Business Analyst", institution: "Dual Graduate Program: Law and Business, Adolfo Ibáñez University, Chile" },
  { name: "Jocelyn Huitron-Gutiérrez", role: "Energy Policy Analyst", institution: "Master of International Affairs – GPS, UC San Diego" },
  { name: "Jorge Felipe Alves Dietrich", role: "Energy Researcher", institution: "Master of International Affairs – GPS, UC San Diego" },
  { name: "Juan Ignacio Carranza", role: "Scholar – CEARE", institution: "Master on Interdisciplinary Energy Studies at CEARE, University of Buenos Aires" },
  { name: "Katrina Haidari", role: "Public Policy Analyst", institution: "Master of Public Policy – GPS, UC San Diego" },
  { name: "María José Sánchez Parra", role: "Legal & Business Analyst", institution: "Dual Graduate Program: Law and Business, Adolfo Ibáñez University, Chile" },
  { name: "Mateo Micucci", role: "International Affairs Analyst", institution: "Master of International Affairs – GPS, UC San Diego" },
  { name: "Mateo Miller", role: "International Relations Analyst", institution: "Master of Arts in International Relations, University of San Diego" },
  { name: "Matthew Burditt", role: "Energy Policy Analyst", institution: "Master of International Affairs – GPS, UC San Diego" },
  { name: "McKenna Maxwell", role: "Environmental Policy Analyst", institution: "Master of Public Policy & Environmental Policy – GPS, UC San Diego" },
  { name: "Mikaela Engell", role: "Executive Coordinator, SEDE – UAI Business School", institution: "Business; Master's in Marketing – Adolfo Ibáñez University, Chile" },
  { name: "Paula Jaramillo", role: "International Affairs Analyst", institution: "Master of International Affairs – GPS, UC San Diego" },
  { name: "Paul Youngblood", role: "Public Policy Analyst", institution: "Master of Public Policy – GPS, UC San Diego" },
  { name: "Pedro Antonio Torres Aránguiz", role: "Legal & Business Analyst", institution: "Dual Graduate Program: Law and Business, Adolfo Ibáñez University, Chile" },
  { name: "Roberto Hernández", role: "Energy Policy Analyst", institution: "Master of International Affairs – GPS, UC San Diego" },
  { name: "Tamara Handfas", role: "Environmental Lawyer", institution: "Master of International Affairs – GPS, UC San Diego" },
  { name: "William Lozano Arciniega", role: "Head of Political & Economic Affairs, Consulate General of Mexico in Atlanta", institution: "Master of International Affairs & Environmental Governance – GPS, UC San Diego" },
  { name: "Yuxuan Wu", role: "International Affairs & Economics Analyst", institution: "Master of International Affairs & Economics – GPS, UC San Diego" },
]

const resources = [
  { title: "SDG Goals Infographic", type: "Research", date: "December 2023", description: "Quantitative comparative analysis and assessment of key national oil companies in Latin America regarding sustainable development and energy transition." },
  { title: "Madrid Energy Conference Summary Report", type: "Report", date: "2025", description: "Conference proceedings and key findings from the Madrid Energy Conference, produced by Future Energy Leaders rapporteurs." },
  { title: "National Oil Companies Performance Analysis", type: "Analysis", date: "2023", description: "A comparative assessment of NOC performance in Latin America with regards to sustainable development and energy transition goals." },
  { title: "La Jolla Conference Proceedings", type: "Report", date: "2025", description: "Summary report from the annual La Jolla Energy Conference featuring insights from Future Energy Leaders participants." },
  { title: "Policy Brief: Energy Transition in the Americas", type: "Policy Brief", date: "2025", description: "Analysis of energy policy shifts and transition strategies across the Western Hemisphere." },
]

const alignmentIcons = [Wind, TrendingUp, Handshake, BookOpen, Leaf]

export function FutureEnergyLeadersPage({ onBack }: FutureEnergyLeadersPageProps) {
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
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Future Energy Leaders</h1>
          <p className="mt-4 max-w-2xl text-xl text-white/90">
            Nurturing the next generation of trailblazers in the energy sector
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Project Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">About the Initiative</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The Institute of the Americas, strategically located on the University of California San Diego (UCSD) campus, has launched a landmark initiative — &ldquo;Future Energy Leaders.&rdquo;
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With the philanthropic support of former energy executive at Solar Turbines, Johan Gerretsen, and Theodore Gildred III, IOA&apos;s board member and son of the Institute&apos;s founder, we have cultivated a dynamic and meaningful connection with the next generation of trailblazers in the energy sector.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                UCSD graduate students have participated as rapporteurs at the Madrid Energy Conference, producing the conference summary report and interacting with energy officials and executives from across the globe. They were also instrumental in developing a project focused on the role of key national oil companies in Latin America regarding sustainable development and energy transition.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ted Gildred III&apos;s contribution established scholarships for two graduate students at CEARE (Center for the Study of Energy Regulatory Activities) at the University of Buenos Aires, fostering academic excellence and enhancing the foundation for future energy leaders. These scholars receive financial support and participate in unique research projects at the forefront of innovative energy solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Meet the Leaders */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-3">Meet the Future Energy Leaders</h2>
          <p className="text-muted-foreground mb-8">
            Our program has supported graduate students from UC San Diego, University of Buenos Aires, University of San Diego, and Adolfo Ibáñez University in Chile.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((leader, index) => (
              <Card key={index} className="text-left">
                <CardHeader className="pb-2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                    <UserCircle className="h-10 w-10 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-base">{leader.name}</CardTitle>
                  <CardDescription className="mt-1">{leader.role}</CardDescription>
                  <p className="mt-2 text-xs text-muted-foreground">{leader.institution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Alignment with Energy Program */}
        <section className="mb-16 bg-muted/30 rounded-lg p-8 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-3">Alignment with the Energy Program</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Future Energy Leaders advances our Energy Program goals by:
          </p>
          <div className="grid grid-cols-5 gap-4">
            {[
              "Developing emerging talent",
              "Strengthening cross-border dialogue",
              "Producing actionable research",
              "Building professional networks",
              "Informing energy policy"
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