"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Search, FileText, Headphones, Newspaper, FileSpreadsheet, ExternalLink } from "lucide-react"

interface DigitalLibraryProps {
  onBack: () => void
}

type ResourceType = "all" | "newsletters" | "past-events" | "press-releases" | "publications" | "podcast"
type ProgramType = "all" | "energy" | "environment" | "economic-competitiveness"

export function DigitalLibrary({ onBack }: DigitalLibraryProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState<ResourceType>("all")
  const [selectedProgram, setSelectedProgram] = useState<ProgramType>("all")
  const [selectedYear, setSelectedYear] = useState<string>("all")

  const resources = [
    {
      id: 1,
      title: "Mexico's Energy Transformation Faces Urgent Execution Test",
      type: "publications",
      program: "energy",
      date: "2026-01-27",
      description: "An analysis of Mexico's energy policy challenges and opportunities.",
    },
    {
      id: 2,
      title: "Water Literacy in the Americas: A Comprehensive Study",
      type: "publications",
      program: "environment",
      date: "2025-11-15",
      description: "Exploring water management strategies across the hemisphere.",
    },
    {
      id: 3,
      title: "Energy Unwrapped! Podcast - Episode 45",
      type: "podcast",
      program: "energy",
      date: "2026-01-05",
      description: "Chris Sladen discusses recent developments in energy markets.",
    },
    {
      id: 4,
      title: "IOA Quarterly Newsletter - Q4 2025",
      type: "newsletters",
      program: "all",
      date: "2025-12-20",
      description: "A summary of IOA activities and achievements in Q4 2025.",
    },
    {
      id: 5,
      title: "CaliBaja Nearshoring: Economic Opportunities",
      type: "publications",
      program: "economic-competitiveness",
      date: "2025-10-10",
      description: "Analyzing the economic potential of nearshoring in the CaliBaja region.",
    },
    {
      id: 6,
      title: "Sustainable Shipping in Latin America",
      type: "publications",
      program: "environment",
      date: "2025-09-05",
      description: "Promoting decarbonized maritime transport in the region.",
    },
    {
      id: 7,
      title: "Energy Panorama 2025 Report",
      type: "publications",
      program: "energy",
      date: "2025-08-20",
      description: "Annual overview of energy trends across the Americas.",
    },
    {
      id: 8,
      title: "Critical Minerals Supply Chain Analysis",
      type: "publications",
      program: "economic-competitiveness",
      date: "2024-12-15",
      description: "Examining critical mineral dependencies and opportunities.",
    },
    {
      id: 9,
      title: "La Jolla Energy Conference 2025 Recap",
      type: "past-events",
      program: "energy",
      date: "2025-10-25",
      description: "Highlights and key takeaways from our flagship energy conference.",
    },
    {
      id: 10,
      title: "IOA Statement on Regional Energy Cooperation",
      type: "press-releases",
      program: "energy",
      date: "2025-07-15",
      description: "Official press release on cross-border energy policy developments.",
    },
    {
      id: 11,
      title: "IOA Quarterly Newsletter - Q3 2025",
      type: "newsletters",
      program: "all",
      date: "2025-09-20",
      description: "A summary of IOA activities and achievements in Q3 2025.",
    },
    {
      id: 12,
      title: "Ocean Conservation Policy Brief",
      type: "publications",
      program: "environment",
      date: "2025-06-01",
      description: "Policy recommendations for marine biodiversity protection.",
    },
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "publications":
        return FileText
      case "past-events":
        return FileSpreadsheet
      case "podcast":
        return Headphones
      case "newsletters":
        return Newspaper
      case "press-releases":
        return ExternalLink
      default:
        return FileText
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "publications":
        return "Publication"
      case "past-events":
        return "Past Event"
      case "podcast":
        return "Podcast"
      case "newsletters":
        return "Newsletter"
      case "press-releases":
        return "Press Release"
      default:
        return type
    }
  }

  const getProgramLabel = (program: string) => {
    switch (program) {
      case "energy":
        return "Energy"
      case "environment":
        return "Environment"
      case "economic-competitiveness":
        return "Economic Competitiveness"
      default:
        return "General"
    }
  }

  const filteredResources = resources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = selectedType === "all" || resource.type === selectedType
    const matchesProgram = selectedProgram === "all" || resource.program === selectedProgram
    const resourceYear = new Date(resource.date).getFullYear().toString()
    const matchesYear = selectedYear === "all" || resourceYear === selectedYear
    return matchesSearch && matchesType && matchesProgram && matchesYear
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Button variant="ghost" className="mb-6" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Home
          </Button>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Digital Library</h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Access our comprehensive collection of reports, whitepapers, podcasts, and newsletters from 2024 to present.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 space-y-4">
          {/* Row 1: Search + Year */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search resources..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                <SelectItem value="2026">2026</SelectItem>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Row 2: Program + Content type */}
          <div className="flex items-center gap-6 flex-wrap">
            <Tabs value={selectedProgram} onValueChange={(v) => setSelectedProgram(v as ProgramType)}>
              <TabsList>
                <TabsTrigger value="all">All Programs</TabsTrigger>
                <TabsTrigger value="energy">Energy</TabsTrigger>
                <TabsTrigger value="environment">Environment</TabsTrigger>
                <TabsTrigger value="economic-competitiveness">Economic Competitiveness</TabsTrigger>
              </TabsList>
            </Tabs>
            <Tabs value={selectedType} onValueChange={(v) => setSelectedType(v as ResourceType)}>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="newsletters">Newsletters</TabsTrigger>
                <TabsTrigger value="past-events">Past Events</TabsTrigger>
                <TabsTrigger value="press-releases">Press Releases</TabsTrigger>
                <TabsTrigger value="publications">Publications</TabsTrigger>
                <TabsTrigger value="podcast">Podcast</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {filteredResources.length} of {resources.length} resources
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredResources.map((resource) => {
            const Icon = getTypeIcon(resource.type)
            return (
              <Card key={resource.id} className="group cursor-pointer transition-all hover:shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs font-medium uppercase text-muted-foreground">
                        {getTypeLabel(resource.type)}
                      </span>
                    </div>
                    <span className="rounded-full bg-muted px-2 py-0.5 text-xs">
                      {getProgramLabel(resource.program)}
                    </span>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-muted-foreground">
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-2">
                    {resource.description}
                  </CardDescription>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">{resource.date}</p>
                    <Button variant="ghost" size="sm" className="h-8 gap-1">
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {filteredResources.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-lg font-medium">No resources found</p>
            <p className="mt-2 text-muted-foreground">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}

        {/* Archive Link */}
        <div className="mt-12">
          <div className="rounded-lg border-2 border-gray-800 bg-gray-900 text-white p-6">
            <h3 className="text-lg font-bold">Access Digital Library Archive</h3>
            <p className="mt-2 text-gray-100">
              Browse publications, reports, whitepapers, and webinars from 2023 and earlier (2023 to past).
            </p>
            <Button className="mt-4 bg-white text-gray-900 hover:bg-gray-100 font-semibold">
              Open Archive Subdomain
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}