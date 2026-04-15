"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Wifi, Coffee, Car, Monitor, ArrowRight } from "lucide-react"

interface FacilitiesPageProps {
  onBack: () => void
  onNavigate: (page: string) => void
}

export function FacilitiesPage({ onBack, onNavigate }: FacilitiesPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full h-80 bg-gradient-to-b from-slate-300 to-slate-200">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 h-full flex flex-col justify-center">
          <Button variant="ghost" className="mb-6 w-fit text-white hover:bg-white/20" onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Our Facilities</h1>
          <p className="mt-4 max-w-2xl text-xl text-white/90">
            State-of-the-art venues for conferences, meetings, and events.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900">Meeting Spaces</h2>
          <p className="mt-2 text-slate-600">Our flexible facilities accommodate events from intimate meetings to large conferences.</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              { name: "Main Conference Room", capacity: "100 people", features: ["Theater-style seating", "AV equipment", "Video conferencing"] },
              { name: "Board Room", capacity: "20 people", features: ["Executive table", "Video wall", "Teleconferencing"] },
              { name: "Meeting Rooms", capacity: "10-15 people each", features: ["Multiple rooms", "Whiteboards", "Display screens"] },
              { name: "Outdoor Terrace", capacity: "75 people", features: ["Ocean views", "Reception setup", "Catering area"] },
            ].map((space) => (
              <Card key={space.name} className="border border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-900">{space.name}</CardTitle>
                  <CardDescription className="text-slate-600">{space.capacity}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {space.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="h-1 w-1 rounded-full bg-slate-400" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900">Amenities</h2>
          <p className="mt-2 text-slate-600">All our spaces are equipped with modern amenities to support your event.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Wifi, name: "High-Speed WiFi" },
              { icon: Coffee, name: "Catering Available" },
              { icon: Car, name: "Parking" },
              { icon: Monitor, name: "AV Equipment" },
            ].map(({ icon: Icon, name }) => (
              <Card key={name} className="border border-slate-200 shadow-sm">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
                    <Icon className="h-6 w-6 text-slate-600" />
                  </div>
                  <p className="text-sm font-medium text-slate-900">{name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <Button onClick={() => onNavigate("contact")} className="w-full">
            Inquire About Availability
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
