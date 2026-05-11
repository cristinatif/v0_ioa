"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Newspaper, ExternalLink, Download, ChevronLeft, ChevronRight } from "lucide-react"

interface QuarterlyNewslettersPageProps {
  onBack: () => void
}

type Year = 2023 | 2024 | 2025 | 2026

interface QuarterItem {
  quarter: number
  title: string
  subtitle: string
  topics: string[]
  viewUrl: string
  downloadUrl: string
}

const newsletterData: Record<Year, QuarterItem[]> = {
  2026: [
    {
      quarter: 1,
      title: "Q1 2026",
      subtitle: "Energy & Climate Outlook",
      topics: ["Mexico Energy Reform", "CaliBaja Nearshoring", "Water Resilience", "La Jolla Conference Preview"],
      viewUrl: "https://iamericas.org/quarterly-newsletter-q1-2026/",
      downloadUrl: "https://iamericas.org/wp-content/uploads/2026/03/Institute-of-the-Americas-Enlace-Newsletter.pdf",
    },
  ],
  2025: [
    {
      quarter: 1,
      title: "Q1 2025",
      subtitle: "Energy Transitions",
      topics: ["La Jolla Conference Recap", "Mexico Energy Update", "Future Energy Leaders", "Renewable Investments"],
      viewUrl: "https://iamericas.org/quarterly-newsletter-q1-2025/",
      downloadUrl: "https://iamericas.org/enlace-newsletter-q1-2025/",
    },
    {
      quarter: 2,
      title: "Q2 2025",
      subtitle: "Trade & Competitiveness",
      topics: ["CaliBaja Initiative", "Trade Policy Briefs", "Leadership Academy", "Energy Ambassadors"],
      viewUrl: "https://iamericas.org/quarterly-newsletter-q2-2025/",
      downloadUrl: "https://iamericas.org/institute-of-the-americas-enlace-newsletter-q2-2025/",
    },
    {
      quarter: 3,
      title: "Q3 2025",
      subtitle: "Sustainable Futures",
      topics: ["Sustainable Shipping", "Critical Minerals", "Water Literacy", "North American Forum"],
      viewUrl: "https://iamericas.org/quarterly-newsletter-q3-2025/",
      downloadUrl: "https://iamericas.org/institute-of-the-americas-enlace-q3/",
    },
    {
      quarter: 4,
      title: "Q4 2025",
      subtitle: "Year in Review",
      topics: ["Annual Highlights", "Steering Committee Updates", "Program Impact Report", "2026 Outlook"],
      viewUrl: "https://iamericas.org/quarterly-newsletter-q4-2025/",
      downloadUrl: "https://iamericas.org/institute-of-the-americas-enlace-newsletter-q4-2025/",
    },
  ],
  2024: [
    {
      quarter: 1,
      title: "Q1 2024",
      subtitle: "Policy Shifts",
      topics: ["Energy Policy", "Environmental Regulation", "Regional Cooperation"],
      viewUrl: "https://iamericas.org/quarterly-newsletter-q1-2024/",
      downloadUrl: "#",
    },
    {
      quarter: 2,
      title: "Q2 2024",
      subtitle: "Cross-Border Dialogue",
      topics: ["Trade Agreements", "Digital Economy", "Infrastructure Investment"],
      viewUrl: "https://iamericas.org/quarterly-newsletter-q2-2024/",
      downloadUrl: "#",
    },
    {
      quarter: 3,
      title: "Q3 2024",
      subtitle: "Innovation & Sustainability",
      topics: ["Clean Energy Tech", "Water Innovation", "Climate Adaptation"],
      viewUrl: "https://iamericas.org/quarterly-newsletter-q3-2024/",
      downloadUrl: "#",
    },
    {
      quarter: 4,
      title: "Q4 2024",
      subtitle: "Looking Ahead",
      topics: ["2025 Preview", "Year Highlights", "Strategic Priorities"],
      viewUrl: "https://iamericas.org/quarterly-newsletter-q4-2024/",
      downloadUrl: "#",
    },
  ],
  2023: [
    {
      quarter: 1,
      title: "Q1 2023",
      subtitle: "Regional Challenges",
      topics: ["Energy Security", "Water Scarcity", "Economic Recovery"],
      viewUrl: "https://iamericas.org/quarterly-newsletter-q1-2023/",
      downloadUrl: "#",
    },
    {
      quarter: 2,
      title: "Q2 2023",
      subtitle: "Building Bridges",
      topics: ["Trade Partnerships", "Climate Commitments", "Community Engagement"],
      viewUrl: "https://iamericas.org/quarterly-newsletter-q2-2023/",
      downloadUrl: "#",
    },
    {
      quarter: 3,
      title: "Q3 2023",
      subtitle: "Green Transition",
      topics: ["Renewable Energy", "Carbon Markets", "Ocean Conservation"],
      viewUrl: "https://iamericas.org/quarterly-newsletter-q3-2023/",
      downloadUrl: "#",
    },
    {
      quarter: 4,
      title: "Q4 2023",
      subtitle: "Impact & Reflections",
      topics: ["Program Results", "Donor Impact", "2024 Strategic Plan"],
      viewUrl: "https://iamericas.org/quarterly-newsletter-q4-2023/",
      downloadUrl: "#",
    },
  ],
}

const years: Year[] = [2023, 2024, 2025, 2026]

export function QuarterlyNewslettersPage({ onBack }: QuarterlyNewslettersPageProps) {
  const [selectedYear, setSelectedYear] = useState<Year>(2026)
  const [hoveredQuarter, setHoveredQuarter] = useState<number | null>(null)
  const [selectedQuarter, setSelectedQuarter] = useState<number | null>(null)

  const quarters = newsletterData[selectedYear]
  const latestQuarter = quarters[quarters.length - 1]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative w-full h-64 bg-gradient-to-b from-gray-300 to-gray-200">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-10">
          <Button variant="ghost" className="mb-4 w-fit text-white hover:bg-white/20" onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/20 border border-white/30">
              <Newspaper className="h-8 w-8 text-white" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-white/70">Resources</p>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Quarterly Newsletter</h1>
              <p className="mt-1 text-base text-white/80">Browse our archive — read online or download the PDF</p>
            </div>
          </div>
        </div>
      </div>

      {/* Year Timeline */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-10">
        <div className="relative">
          {/* Timeline bar */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          <div className="flex justify-between items-center relative">
            {years.map((year) => {
              const isActive = selectedYear === year
              const quartersForYear = newsletterData[year]
              const isPartial = quartersForYear.length < 4
              return (
                <button
                  key={year}
                  onClick={() => {
                    setSelectedYear(year)
                    setSelectedQuarter(null)
                    setHoveredQuarter(null)
                  }}
                  className="flex flex-col items-center gap-2 group"
                >
                  {/* Timeline dot */}
                  <div
                    className={`h-10 w-10 rounded-full border-2 flex items-center justify-center transition-all z-10 ${
                      isActive
                        ? "bg-foreground border-foreground text-white scale-110 shadow-md"
                        : "bg-background border-border text-muted-foreground group-hover:border-foreground/50 group-hover:text-foreground/70"
                    }`}
                  >
                    <span className="text-xs font-bold">{year}</span>
                  </div>
                  {/* Label below */}
                  <span
                    className={`text-xs transition-colors ${
                      isActive ? "font-semibold text-foreground" : "text-muted-foreground group-hover:text-foreground/70"
                    }`}
                  >
                    {isPartial ? `${quartersForYear.length} of 4` : "Complete"}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Magazine Shelf */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-foreground">{selectedYear} Archive</h2>
            <p className="text-sm text-muted-foreground">Click a quarter to see options</p>
          </div>
          <div className="flex gap-1.5">
            {quarters.map((q) => (
              <button
                key={q.quarter}
                onClick={() => setSelectedQuarter(selectedQuarter === q.quarter ? null : q.quarter)}
                className={`h-8 w-8 rounded text-xs font-bold transition-all ${
                  selectedQuarter === q.quarter
                    ? "bg-foreground text-white"
                    : hoveredQuarter === q.quarter
                    ? "bg-foreground/20 text-foreground"
                    : "bg-muted text-muted-foreground hover:bg-foreground/10"
                }`}
                onMouseEnter={() => setHoveredQuarter(q.quarter)}
                onMouseLeave={() => setHoveredQuarter(null)}
              >
                Q{q.quarter}
              </button>
            ))}
          </div>
        </div>

        {/* Magazine Covers Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {quarters.map((item, idx) => {
            const isLatest = item.quarter === latestQuarter.quarter
            const isSelected = selectedQuarter === item.quarter
            const isHovered = hoveredQuarter === item.quarter

            return (
              <div
                key={item.quarter}
                className={`relative transition-all duration-300 cursor-pointer ${
                  isSelected ? "scale-[1.02] z-10" : isHovered ? "scale-[1.01]" : ""
                }`}
                onClick={() => setSelectedQuarter(isSelected ? null : item.quarter)}
                onMouseEnter={() => setHoveredQuarter(item.quarter)}
                onMouseLeave={() => setHoveredQuarter(null)}
              >
                {/* Magazine Cover Placeholder */}
                <div
                  className={`aspect-[3/4] rounded-lg overflow-hidden transition-all duration-300 ${
                    isSelected
                      ? "ring-2 ring-foreground shadow-lg"
                      : isHovered
                      ? "ring-1 ring-foreground/30 shadow-md"
                      : "shadow"
                  }`}
                >
                  <div className="h-full w-full bg-gradient-to-b from-gray-200 to-gray-300 flex flex-col items-center justify-center p-6">
                    {/* Placeholder magazine layout */}
                    <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                      <div className="h-8 w-3/4 bg-gray-400 rounded" /> {/* Title bar */}
                      <div className="h-1 w-1/2 bg-gray-400/50 rounded" /> {/* Divider */}
                      <Newspaper className="h-10 w-10 text-gray-400" />
                      <span className="text-lg font-bold text-gray-500">Q{item.quarter}</span>
                      <span className="text-xs text-gray-400">{item.subtitle}</span>
                      <div className="mt-3 w-full space-y-1.5">
                        <div className="h-1.5 w-full bg-gray-300 rounded" />
                        <div className="h-1.5 w-4/5 bg-gray-300 rounded" />
                        <div className="h-1.5 w-3/5 bg-gray-300 rounded" />
                      </div>
                    </div>
                    {/* Latest badge */}
                    {isLatest && (
                      <div className="absolute top-3 right-3 bg-foreground text-white text-xs font-bold px-2 py-0.5 rounded shadow-sm">
                        Latest
                      </div>
                    )}
                  </div>
                </div>

                {/* Quarter label below cover */}
                <div className="mt-3 text-center">
                  <p className={`text-sm font-semibold transition-colors ${isSelected ? "text-foreground" : "text-foreground/70"}`}>
                    {item.title}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                </div>

                {/* Expanded Action Panel */}
                {isSelected && (
                  <div className="mt-4 bg-muted/50 border border-border rounded-lg p-4 animate-in fade-in slide-in-from-top-2 duration-200">
                    {/* Topics preview */}
                    <div className="mb-3">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Inside this issue</p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.topics.map((topic) => (
                          <span
                            key={topic}
                            className="inline-flex items-center rounded-md bg-background px-2 py-0.5 text-xs text-muted-foreground border border-border"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Action buttons */}
                    <div className="flex gap-2">
                      <Button
                        asChild
                        variant="default"
                        size="sm"
                        className="flex-1 gap-1.5"
                      >
                        <a href={item.viewUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3.5 w-3.5" />
                          Read online
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1 gap-1.5"
                      >
                        <a href={item.downloadUrl} target="_blank" rel="noopener noreferrer">
                          <Download className="h-3.5 w-3.5" />
                          Download PDF
                        </a>
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Empty quarters notice */}
        {quarters.length < 4 && (
          <div className="mt-8 flex items-center justify-center gap-4 py-6 border border-border/50 rounded-lg bg-muted/10">
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((q) => {
                const exists = quarters.some((item) => item.quarter === q)
                return (
                  <div
                    key={q}
                    className={`h-12 w-12 rounded flex items-center justify-center text-sm font-bold ${
                      exists ? "bg-foreground text-white" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    Q{q}
                  </div>
                )
              })}
            </div>
            <p className="text-sm text-muted-foreground">
              Remaining quarters for {selectedYear} will be published throughout the year
            </p>
          </div>
        )}
      </section>

      {/* Subscribe CTA */}
      <section className="border-t bg-gray-800">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto text-center">
            <Newspaper className="mx-auto h-10 w-10 text-gray-400" />
            <h2 className="mt-3 text-xl font-bold text-white">Never miss an issue</h2>
            <p className="mt-2 text-sm text-gray-400">
              Quarterly updates on programs, events, and policy analysis — straight to your inbox.
            </p>
            <div className="mt-5 flex gap-0">
              <input
                type="email"
                placeholder="Your email"
                className="h-10 w-full rounded-l-md border-0 bg-white px-3 text-sm text-gray-900 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
              />
              <Button className="rounded-l-none h-10 bg-gray-600 hover:bg-gray-500 text-white font-semibold border-0">
                Subscribe
              </Button>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              <a href="https://iamericas.org/ioa-fact-sheet-2026/" target="_blank" rel="noopener noreferrer" className="text-gray-300 underline hover:text-gray-200">
                Fact Sheet
              </a>
              ·
              <a href="https://iamericas.org/wp-content/uploads/2021/07/ioa-privacy-policy.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-300 underline hover:text-gray-200">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}