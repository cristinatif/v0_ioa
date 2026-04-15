"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, FileText, Calendar, MapPin } from "lucide-react"

interface FeaturedSectionProps {
  onNavigate: (page: string) => void
}

export function FeaturedSection({ onNavigate }: FeaturedSectionProps) {
  const publications = [
    {
      id: 1,
      title: "Mexico's Energy Transformation Faces Urgent Execution Test",
      type: "Report",
      date: "2026-01-27",
    },
    {
      id: 2,
      title: "Trump's hardline foreign policy clouds Mexico's USMCA review outlook",
      type: "Analysis",
      date: "2026-01-16",
    },
    {
      id: 3,
      title: "The US-Mexico energy relationship is at a USMCA crossroads",
      type: "Opinion",
      date: "2025-12-19",
    },
    {
      id: 4,
      title: "Descarbonización y competitividad: las claves del debate global",
      type: "Article",
      date: "2025-10-28",
    },
  ]

  const events = [
    {
      id: 1,
      title: "La Jolla Energy Conference 2026",
      date: "October 2026",
      location: "La Jolla, California",
      type: "Flagship",
    },
    {
      id: 2,
      title: "Madrid Energy Conference 2026",
      date: "June 2026",
      location: "Madrid, Spain",
      type: "International",
    },
    {
      id: 3,
      title: "North American Forum",
      date: "September 2026",
      location: "San Diego, California",
      type: "Forum",
    },
    {
      id: 4,
      title: "CaliBaja Leadership Summit",
      date: "August 2026",
      location: "Tijuana, Mexico",
      type: "Summit",
    },
  ]

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="publications" className="w-full">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Stay Informed</h2>
              <p className="mt-2 text-slate-600">
                Latest publications and upcoming events
              </p>
            </div>
            <TabsList className="bg-slate-100">
              <TabsTrigger value="publications" className="data-[state=active]:bg-white data-[state=active]:text-slate-900">Latest Publications</TabsTrigger>
              <TabsTrigger value="events" className="data-[state=active]:bg-white data-[state=active]:text-slate-900">Upcoming Events</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="publications" className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {publications.map((pub) => (
                <Card key={pub.id} className="group cursor-pointer transition-all hover:shadow-md border border-slate-200 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <FileText className="h-4 w-4" />
                      <span>{pub.type}</span>
                    </div>
                    <h3 className="mt-3 line-clamp-2 text-sm font-medium leading-snug text-slate-900 group-hover:text-slate-700">
                      {pub.title}
                    </h3>
                    <p className="mt-3 text-xs text-slate-500">{pub.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" className="border-slate-300 text-slate-900 hover:bg-slate-100" onClick={() => onNavigate("library")}>
                View All Publications
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="events" className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {events.map((event) => (
                <Card key={event.id} className="group cursor-pointer transition-all hover:shadow-md border border-slate-200 bg-white">
                  <CardContent className="p-6">
                    <span className="inline-flex items-center rounded-full bg-slate-200 px-2 py-1 text-xs font-medium text-slate-700">
                      {event.type}
                    </span>
                    <h3 className="mt-3 text-sm font-medium leading-snug text-slate-900 group-hover:text-slate-700">
                      {event.title}
                    </h3>
                    <div className="mt-4 space-y-1">
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <Calendar className="h-3 w-3" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <MapPin className="h-3 w-3" />
                        {event.location}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" onClick={() => onNavigate("events")}>
                View All Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
