"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, ExternalLink } from "lucide-react"

interface NewsSectionProps {
  onNavigate?: (page: string) => void
}

export function NewsSection({ onNavigate }: NewsSectionProps) {
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
  ]

  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">In the News</h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Stay updated on the latest analysis, commentary, and news from the Institute of the Americas and our partners.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {newsItems.map((item) => (
            <Card key={item.id} className="group border-slate-200 transition-all hover:shadow-lg overflow-hidden flex flex-col">
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
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-slate-300 text-slate-900 hover:bg-slate-100">
            View All News
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
