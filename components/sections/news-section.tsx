"use client"

import { useState, useCallback, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

interface NewsSectionProps {
  onNavigate?: (page: string) => void
}

export function NewsSection({ onNavigate }: NewsSectionProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on("select", onSelect)
    api.on("reInit", onSelect)
    return () => {
      api?.off("select", onSelect)
    }
  }, [api, onSelect])

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (!api) return
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [api])

  const newsItems = [
    {
      id: 1,
      title: "Mexico's Energy Transformation Faces Urgent Execution Test",
      excerpt: "The Institute releases comprehensive analysis on Mexico's energy policy challenges and opportunities for the coming year.",
      date: "January 27, 2026",
      source: "Institute of the Americas",
      sourceLogo: "IOA"
    },
    {
      id: 2,
      title: "Trump's Hardline Foreign Policy Clouds Mexico's USMCA Review",
      excerpt: "Policy experts weigh in on the implications of recent diplomatic developments for hemispheric trade relations.",
      date: "January 16, 2026",
      source: "Financial Times",
      sourceLogo: "FT"
    },
    {
      id: 3,
      title: "The US-Mexico Energy Relationship is at a USMCA Crossroads",
      excerpt: "Critical examination of energy cooperation frameworks and their role in regional economic competitiveness.",
      date: "December 19, 2025",
      source: "The Economist",
      sourceLogo: "TE"
    },
    {
      id: 4,
      title: "Latin America's Renewable Energy Investment Hits Record High",
      excerpt: "New data reveals unprecedented capital flows into wind, solar, and green hydrogen projects across the region.",
      date: "December 5, 2025",
      source: "Bloomberg",
      sourceLogo: "BL"
    },
    {
      id: 5,
      title: "Argentina Opens New LNG Export Window to Asia",
      excerpt: "Vaca Muerta's rapid development enables Argentina to diversify its gas export markets beyond traditional neighbors.",
      date: "November 22, 2025",
      source: "Reuters",
      sourceLogo: "R"
    },
    {
      id: 6,
      title: "Caribbean Nations Unite on Regional Energy Resilience Plan",
      excerpt: "Island states collaborate on shared infrastructure and renewable targets to reduce fossil fuel dependency.",
      date: "November 10, 2025",
      source: "The Guardian",
      sourceLogo: "G"
    },
    {
      id: 7,
      title: "Colombia's Green Tax Reform Sparks Investment Debate",
      excerpt: "New carbon pricing legislation draws mixed reactions from industry leaders and environmental advocates.",
      date: "October 28, 2025",
      source: "El País",
      sourceLogo: "EP"
    },
    {
      id: 8,
      title: "Chile Emerges as Lithium Supply Chain Leader",
      excerpt: "Strategic nationalization model and partnerships position Chile at the center of the global battery metals trade.",
      date: "October 15, 2025",
      source: "Wall Street Journal",
      sourceLogo: "WSJ"
    },
    {
      id: 9,
      title: "Water Security Summit Convenes Western Hemisphere Leaders",
      excerpt: "The Institute hosts high-level dialogue on transboundary water governance and climate adaptation strategies.",
      date: "September 30, 2025",
      source: "Institute of the Americas",
      sourceLogo: "IOA"
    },
    {
      id: 10,
      title: "Brazil's Amazon Energy Grid Gets Modernization Boost",
      excerpt: "Federal program deploys hybrid solar-diesel systems to remote communities, reducing costs and emissions.",
      date: "September 18, 2025",
      source: "Folha de S.Paulo",
      sourceLogo: "FS"
    },
    {
      id: 11,
      title: "Peru Approves First Offshore Wind Farm Project",
      excerpt: "Landmark regulatory decision opens Pacific coastline to large-scale renewable energy development.",
      date: "September 5, 2025",
      source: "Mercurio",
      sourceLogo: "M"
    },
    {
      id: 12,
      title: "Central America's Geothermal Potential Draws New Investors",
      excerpt: "Volcanic resources across the isthmus attract clean energy capital as grid stability concerns grow.",
      date: "August 20, 2025",
      source: "NACLA",
      sourceLogo: "NC"
    },
  ]

  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">[Section 04]</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">In the News</h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">
              Stay updated on the latest analysis, commentary, and news from the Institute of the Americas and our partners.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => api?.scrollPrev()}
              disabled={!api?.canScrollPrev()}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-all hover:bg-slate-100 hover:border-slate-400 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-slate-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              disabled={!api?.canScrollNext()}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-all hover:bg-slate-100 hover:border-slate-400 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-slate-300"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {newsItems.map((item) => (
              <CarouselItem className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <Card key={item.id} className="group border-slate-200 transition-all hover:shadow-lg overflow-hidden flex flex-col h-full">
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-xs">
                        {item.sourceLogo}
                      </div>
                    </div>
                    <span className="text-xs text-slate-500 flex items-center justify-center gap-1 mb-3">
                      <Calendar className="h-3 w-3" />
                      {item.date}
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900 leading-snug group-hover:text-slate-700 transition-colors line-clamp-3 mb-3 text-center">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2 mb-4 flex-1">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                      <span className="text-xs text-slate-500">{item.source}</span>
                      <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dot indicators */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                index === current
                  ? "w-6 bg-slate-900"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}