"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useCallback, useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

interface EventsPageProps {
  onBack: () => void
  onNavigate?: (page: string) => void
}

export function EventsPage({ onBack, onNavigate }: EventsPageProps) {
  const INITIAL_VISIBLE = 3

  const upcomingEvents = [
    {
      id: 1,
      title: "Madrid Energy Conference 2026",
      date: "June 15-17, 2026",
      location: "Madrid, Spain",
      type: "Flagship",
      description: "Where Europe and The Americas meet for Energy Dialogue. Join leaders from both continents for critical discussions on energy transition.",
      image: "/placeholder",
    },
    {
      id: 2,
      title: "La Jolla Energy Conference 2026",
      date: "October 22-24, 2026",
      location: "La Jolla, California",
      type: "Flagship",
      description: "35 years at the center of the energy debate. Our premier annual event bringing together industry leaders, policymakers, and experts.",
      image: "/placeholder",
    },
    {
      id: 3,
      title: "North American Forum",
      date: "September 10-11, 2026",
      location: "San Diego, California",
      type: "Forum",
      description: "Advancing cooperation and competitiveness across the North American region.",
      image: "/placeholder",
    },
    {
      id: 4,
      title: "Un Día por los Mares",
      date: "March 18-19, 2027",
      location: "Ensenada, Mexico",
      type: "Flagship",
      description: "A day dedicated to ocean conservation and sustainable maritime futures across the Americas.",
      image: "/placeholder",
    },
    {
      id: 5,
      title: "Critical Minerals Forum",
      date: "November 5-6, 2026",
      location: "Denver, Colorado",
      type: "Forum",
      description: "Exploring the strategic role of critical minerals in energy transition and supply chain resilience.",
      image: "/placeholder",
    },
    {
      id: 6,
      title: "Sustainable Shipping Summit",
      date: "August 20-21, 2026",
      location: "Panama City, Panama",
      type: "Summit",
      description: "Advancing decarbonized maritime transport and green port infrastructure in Latin America.",
      image: "/placeholder",
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

  const flagshipEvents = [
    {
      id: 1,
      title: "La Jolla Energy Conference",
      subtitle: "35 Years at the Center of the Energy Debate",
      description: "Our premier annual event brings together over 400 leaders from government, industry, academia, and civil society for three days of candid, off-the-record dialogue on the most pressing energy and sustainability challenges facing the Americas.",
      stats: [
        { label: "Years", value: "35+" },
        { label: "Attendees", value: "400+" },
        { label: "Countries", value: "25+" },
      ],
      image: "/placeholder",
      date: "October 22-24, 2026",
      location: "La Jolla, California",
    },
    {
      id: 2,
      title: "Madrid Energy Conference",
      subtitle: "Where Europe and The Americas Meet for Energy Dialogue",
      description: "A biennial flagship convening that bridges the transatlantic conversation on energy policy, investment, and technology. Government ministers, CEOs, and thought leaders from both continents gather to explore shared challenges—from LNG markets to climate finance.",
      stats: [
        { label: "Editions", value: "4" },
        { label: "Attendees", value: "500+" },
        { label: "Countries", value: "30+" },
      ],
      image: "/placeholder",
      date: "June 15-17, 2026",
      location: "Madrid, Spain",
    },
    {
      id: 3,
      title: "Un Día por los Mares",
      subtitle: "A Day Dedicated to Ocean Conservation and Sustainable Maritime Futures",
      description: "This flagship event convenes policymakers, scientists, industry leaders, and civil society to address the critical challenges facing our oceans—from marine biodiversity loss and overfishing to sustainable shipping and coastal resilience across the Americas.",
      stats: [
        { label: "Editions", value: "3" },
        { label: "Attendees", value: "300+" },
        { label: "Countries", value: "15+" },
      ],
      image: "/placeholder",
      date: "March 2027",
      location: "Ensenada, Mexico",
    },
  ]

  const galleryItems = [
    { image: "/placeholder", caption: "Madrid Energy Conference 2024 — Opening Plenary" },
    { image: "/placeholder", caption: "La Jolla Energy Conference — Networking Session" },
    { image: "/placeholder", caption: "North American Forum — Panel Discussion" },
    { image: "/placeholder", caption: "Future Energy Leaders — Workshop" },
    { image: "/placeholder", caption: "Sustainable Shipping Summit — Keynote" },
    { image: "/placeholder", caption: "La Jolla Conference — Outdoor Reception" },
  ]

  // Gallery carousel state
  const [galleryApi, setGalleryApi] = useState<CarouselApi>()
  const [galleryCurrent, setGalleryCurrent] = useState(0)
  const [galleryCount, setGalleryCount] = useState(0)
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE)

  const onGallerySelect = useCallback((api: CarouselApi) => {
    if (!api) return
    setGalleryCount(api.scrollSnapList().length)
    setGalleryCurrent(api.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!galleryApi) return
    onGallerySelect(galleryApi)
    galleryApi.on("select", onGallerySelect)
    galleryApi.on("reInit", onGallerySelect)
    return () => {
      galleryApi?.off("select", onGallerySelect)
    }
  }, [galleryApi, onGallerySelect])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full h-80 bg-gradient-to-b from-slate-300 to-slate-200">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 h-full flex flex-col justify-center">
          <Button variant="ghost" className="mb-6 w-fit text-white hover:bg-white/20" onClick={onBack}>
            <ChevronLeft className="h-4 w-4 mr-1" /> Back to Home
          </Button>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Join Us in Shaping Tomorrow&apos;s Conversations
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-white/90">
            Convening world leaders and innovators to address the most pressing challenges in energy, the environment, and economic development for a more resilient and prosperous Americas.
          </p>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Tabs defaultValue="upcoming">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="mt-8">
            <div className="grid gap-6">
              {upcomingEvents.slice(0, visibleCount).map((event) => (
                <Card key={event.id} className="overflow-hidden transition-all hover:shadow-md border border-slate-200 shadow-sm">
                  <div className="flex flex-col lg:flex-row">
                    {/* Event Image */}
                    <div className="lg:w-64 h-48 lg:h-auto overflow-hidden bg-slate-200 flex items-center justify-center">
                      {event.image !== "/placeholder" ? (
                        <img src={event.image} alt={event.title} className="h-full w-full object-cover" />
                      ) : (
                        <span className="text-slate-400 text-sm font-medium">Event Image</span>
                      )}
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
                      </div>
                      <div className="mt-6 flex gap-3">
                        <Button>
                          Register Now <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                        <Button variant="outline">Learn More</Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            {visibleCount < upcomingEvents.length && (
              <div className="mt-8 text-center">
                <Button
                  variant="outline"
                  onClick={() => setVisibleCount(upcomingEvents.length)}
                >
                  Load More Events
                </Button>
              </div>
            )}
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
                      View Recap
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Flagship Events Section */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Flagship Convenings</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-12">
            Our Signature Events
          </h2>

          <div className="grid gap-8 lg:grid-cols-3">
            {flagshipEvents.map((event) => (
              <div key={event.id} className="group rounded-2xl bg-white border border-slate-200 shadow-sm transition-all hover:shadow-lg hover:border-slate-300 overflow-hidden flex flex-col">
                {/* Image */}
                <div className="relative aspect-[4/3] bg-slate-200 flex items-center justify-center overflow-hidden">
                  {event.image !== "/placeholder" ? (
                    <img src={event.image} alt={event.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  ) : (
                    <span className="text-slate-400 text-sm font-medium">Event Image</span>
                  )}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        <Calendar className="h-3 w-3 inline mr-1" />
                        {event.date}
                      </span>
                      <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        <MapPin className="h-3 w-3 inline mr-1" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors">{event.title}</h3>
                  <p className="mt-2 text-base font-medium text-slate-500">{event.subtitle}</p>
                  <p className="mt-4 text-sm text-slate-600 leading-relaxed flex-1">{event.description}</p>
                  <div className="mt-6 flex gap-4">
                    {event.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="text-lg font-bold text-slate-900">{stat.value}</p>
                        <p className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="mt-6 w-full">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Gallery</p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Moments from Our Events
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-slate-600">
                A glimpse into the conversations, connections, and collaborations that define the Institute&apos;s convenings.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => galleryApi?.scrollPrev()}
                disabled={!galleryApi?.canScrollPrev()}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-all hover:bg-slate-100 hover:border-slate-400 disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => galleryApi?.scrollNext()}
                disabled={!galleryApi?.canScrollNext()}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-all hover:bg-slate-100 hover:border-slate-400 disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <Carousel
            setApi={setGalleryApi}
            opts={{ align: "start" }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {galleryItems.map((item, index) => (
                <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="group relative overflow-hidden rounded-xl aspect-[3/2] bg-slate-200 flex items-center justify-center">
                    {item.image !== "/placeholder" ? (
                      <img src={item.image} alt={item.caption} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    ) : (
                      <span className="text-slate-400 text-sm font-medium">Gallery Image</span>
                    )}
                    {item.image !== "/placeholder" && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 inset-x-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-sm text-white font-medium">{item.caption}</p>
                        </div>
                      </>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Gallery dot indicators */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: galleryCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => galleryApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === galleryCurrent
                    ? "w-6 bg-slate-900"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Connect. Learn. Impact.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Our events bring together diverse perspectives to address the most pressing challenges facing the Americas. Join a community of changemakers committed to building a better future through collaboration and innovation.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3 text-center">
            <div>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <span className="text-white/60 text-sm font-medium">Icon</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Network</h3>
              <p className="mt-2 text-white/70">Connect with leaders from across the Americas</p>
            </div>
            <div>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <span className="text-white/60 text-sm font-medium">Icon</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Learn</h3>
              <p className="mt-2 text-white/70">Gain insights from world-class experts</p>
            </div>
            <div>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <span className="text-white/60 text-sm font-medium">Icon</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Impact</h3>
              <p className="mt-2 text-white/70">Drive meaningful change in your community</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-slate-900"
              onClick={() => onNavigate?.("contact")}
            >
              Get in Touch <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}