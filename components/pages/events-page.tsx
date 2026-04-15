"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react"

interface EventsPageProps {
  onBack: () => void
}

export function EventsPage({ onBack }: EventsPageProps) {
  const upcomingEvents = [
    {
      id: 1,
      title: "Madrid Energy Conference 2026",
      date: "June 15-17, 2026",
      location: "Madrid, Spain",
      type: "Flagship",
      description: "Where Europe and The Americas meet for Energy Dialogue. Join leaders from both continents for critical discussions on energy transition.",
      attendees: 500,
    },
    {
      id: 2,
      title: "La Jolla Energy Conference 2026",
      date: "October 22-24, 2026",
      location: "La Jolla, California",
      type: "Flagship",
      description: "35 years at the center of the energy debate. Our premier annual event bringing together industry leaders, policymakers, and experts.",
      attendees: 400,
    },
    {
      id: 3,
      title: "North American Forum",
      date: "September 10-11, 2026",
      location: "San Diego, California",
      type: "Forum",
      description: "Advancing cooperation and competitiveness across the North American region.",
      attendees: 200,
    },
    {
      id: 4,
      title: "CaliBaja Leadership Summit",
      date: "August 5-6, 2026",
      location: "Tijuana, Mexico",
      type: "Summit",
      description: "Exploring nearshoring opportunities and cross-border economic development.",
      attendees: 150,
    },
    {
      id: 5,
      title: "Future Energy Leaders Program",
      date: "July 12-19, 2026",
      location: "La Jolla, California",
      type: "Program",
      description: "Intensive leadership development for emerging energy sector professionals.",
      attendees: 40,
    },
    {
      id: 6,
      title: "Water Literacy Workshop",
      date: "August 20, 2026",
      location: "Virtual",
      type: "Workshop",
      description: "Understanding water challenges and solutions across the Americas.",
      attendees: 100,
    },
  ]

  const pastEvents = [
    {
      id: 1,
      title: "La Jolla Energy Conference 2025",
      date: "October 2025",
      location: "La Jolla, California",
      type: "Flagship",
    },
    {
      id: 2,
      title: "Sustainable Shipping Summit 2025",
      date: "September 2025",
      location: "Panama City, Panama",
      type: "Summit",
    },
    {
      id: 3,
      title: "Critical Minerals Forum 2025",
      date: "May 2025",
      location: "Denver, Colorado",
      type: "Forum",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Full-Width Hero with Overlay */}
      <div className="relative w-full h-80 bg-gradient-to-b from-slate-300 to-slate-200">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 h-full flex flex-col justify-center">
          <Button variant="ghost" className="mb-6 w-fit text-white hover:bg-white/20" onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Events & Conferences</h1>
          <p className="mt-4 max-w-2xl text-xl text-white/90">
            Join IOA for leading conversations on energy, environment, and economic competitiveness across the Americas.
          </p>
        </div>
      </div>

      {/* Events Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Tabs defaultValue="upcoming">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="mt-8">
            <div className="grid gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden transition-all hover:shadow-md border border-slate-200 shadow-sm">
                  <div className="flex flex-col lg:flex-row">
                    <div className="flex items-center justify-center bg-slate-100 p-8 lg:w-48">
                      <div className="text-center">
                        <Calendar className="mx-auto h-8 w-8 text-slate-600" />
                        <p className="mt-2 text-sm font-medium text-slate-800">{event.date.split(",")[0]}</p>
                      </div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-700">
                          {event.type}
                        </span>
                      </div>
                      <CardTitle className="mt-3 text-xl text-slate-900">{event.title}</CardTitle>
                      <CardDescription className="mt-2 text-slate-600">{event.description}</CardDescription>
                      <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {event.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {event.attendees}+ expected
                        </span>
                      </div>
                      <div className="mt-6 flex gap-3">
                        <Button>
                          Register Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline">Learn More</Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past" className="mt-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event) => (
                <Card key={event.id} className="transition-all hover:shadow-md">
                  <CardHeader>
                    <span className="inline-flex w-fit rounded-full bg-muted px-2 py-1 text-xs font-medium">
                      {event.type}
                    </span>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </span>
                    </div>
                    <Button variant="link" className="mt-4 h-auto p-0">
                      View Recap <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* CTA Section */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Stay Updated</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Subscribe to our newsletter to receive updates about upcoming events and exclusive invitations.
            </p>
            <Button className="mt-6">Subscribe to Newsletter</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
