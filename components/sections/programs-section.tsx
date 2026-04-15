"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wind, Sun, Droplets, Globe, Handshake, ArrowRight } from "lucide-react"

interface ProgramsSectionProps {
  onNavigate: (page: string) => void
}

export function ProgramsSection({ onNavigate }: ProgramsSectionProps) {
  const programs = [
    {
      id: "energy",
      title: "Energy Program",
      description: "Shaping public policy and informing the public on matters related to energy development across the Americas.",
      icons: [Wind, Sun],
      initiatives: [
        { name: "Future Energy Leaders", id: "future-energy-leaders" },
        { name: "Energy Ambassadors", id: "energy-ambassadors" },
        { name: "La Jolla Conference", id: "la-jolla-conference" },
        { name: "Madrid Conference", id: "madrid-conference" },
      ],
      color: "bg-slate-100",
    },
    {
      id: "environment",
      title: "Environment Program",
      description: "Catalyzing expanded sustainability leadership and climate action among the private sector.",
      icons: [Droplets],
      initiatives: [
        { name: "Water Literacy", id: "water-literacy" },
        { name: "Marine Conservation", id: "marine-conservation" },
        { name: "Sustainable Shipping", id: "sustainable-shipping" },
        { name: "Sustainability Dispatch", id: "sustainability-dispatch" },
      ],
      color: "bg-white",
    },
    {
      id: "economic",
      title: "Economic Competitiveness",
      description: "Promoting regional economic competitiveness across North America through strategic partnerships.",
      icons: [Globe, Handshake],
      initiatives: [
        { name: "CaliBaja Nearshoring", id: "calibaja-nearshoring" },
        { name: "Leadership Academy", id: "leadership-academy" },
        { name: "Critical Minerals", id: "critical-minerals" },
        { name: "North American Forum", id: "north-american-forum" },
      ],
      color: "bg-slate-100",
    },
  ]

  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Programs</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Our diverse programs emphasize innovation and technological advancement as the key to building 21st-century economies in the Americas.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {programs.map((program) => (
            <Card 
              key={program.id} 
              className={`transition-all hover:shadow-lg border border-slate-200 ${program.color === 'bg-slate-100' ? 'bg-slate-100' : 'bg-white'}`}
            >
              <CardHeader>
                <div className="flex items-center gap-2">
                  {program.icons.map((Icon, index) => (
                    <div key={index} className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white">
                      <Icon className="h-5 w-5 text-slate-700" />
                    </div>
                  ))}
                </div>
                <CardTitle className="mt-4 text-xl text-slate-900">{program.title}</CardTitle>
                <CardDescription className="text-sm text-slate-600">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-600">
                    Key Initiatives
                  </p>
                  <ul className="space-y-1">
                    {program.initiatives.map((initiative, index) => (
                      <li key={index} className="flex items-center text-sm text-slate-600">
                        <span className="mr-2 h-1 w-1 rounded-full bg-slate-400" />
                        {initiative.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-slate-300 hover:bg-slate-200 text-slate-900"
                  onClick={() => onNavigate(program.id)}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
