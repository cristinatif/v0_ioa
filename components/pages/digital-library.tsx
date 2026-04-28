"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Search, FileText, Headphones, Newspaper, FileSpreadsheet, ExternalLink, Filter } from "lucide-react"

interface DigitalLibraryProps {
  onBack: () => void
}

type ResourceType = "all" | "reports" | "whitepapers" | "podcasts" | "newsletters"

export function DigitalLibrary({ onBack }: DigitalLibraryProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState<ResourceType>("all")
  const [selectedYear, setSelectedYear] = useState<string>("all")

  const resources = [
    {
      id: 1,
      title: "Mexico's Energy Transformation Faces Urgent Execution Test",
      type: "reports",
      program: "Energy",
      date: "2026-01-27",
      description: "An analysis of Mexico's energy policy challenges and opportunities.",
    },
    {
      id: 2,
      title: "Water Literacy in the Americas: A Comprehensive Study",
      type: "whitepapers",
      program: "Environment",
      date: "2025-11-15",
      description: "Exploring water management strategies across the hemisphere.",
    },
    {
      id: 3,
      title: "Energy Unwrapped! Podcast - Episode 45",
      type: "podcasts",
      program: "Energy",
      date: "2026-01-05",
      description: "Chris Sladen discusses recent developments in energy markets.",
    },
    {
      id: 4,
      title: "IOA Quarterly Newsletter - Q4 2025",
      type: "newsletters",
      program: "General",
      date: "2025-12-20",
      description: "A summary of IOA activities and achievements in Q4 2025.",
    },
    {
      id: 5,
      title: "CaliBaja Nearshoring: Economic Opportunities",
      type: "reports",
      program: "Economic",
      date: "2025-10-10",
      description: "Analyzing the economic potential of nearshoring in the CaliBaja region.",
    },
    {
      id: 6,
      title: "Sustainable Shipping in Latin America",
      type: "whitepapers",
      program: "Environment",
      date: "2025-09-05",
      description: "Promoting decarbonized maritime transport in the region.",
    },
    {
      id: 7,
      title: "Energy Panorama 2025 Report",
      type: "reports",
      program: "Energy",
      date: "2025-08-20",
      description: "Annual overview of energy trends across the Americas.",
    },
    {
      id: 8,
      title: "Critical Minerals Supply Chain Analysis",
      type: "whitepapers",
      program: "Economic",
      date: "2024-12-15",
      description: "Examining critical mineral dependencies and opportunities.",
    },
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "reports":
        return FileText
      case "whitepapers":
        return FileSpreadsheet
      case "podcasts":
        return Headphones
      case "newsletters":
        return Newspaper
      default:
        return FileText
    }
  }

  const filteredResources = resources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = selectedType === "all" || resource.type === selectedType
    const resourceYear = new Date(resource.date).getFullYear().toString()
    const matchesYear = selectedYear === "all" || resourceYear === selectedYear
    return matchesSearch && matchesType && matchesYear
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Button variant="ghost" className="mb-6" onClick={onBack}>
            Back to Home
          </Button>
          
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Digital Library</h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Access our comprehensive collection of reports, whitepapers, podcasts, and newsletters from 2024 to present.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Search */}
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search resources..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Filter:</span>
              </div>
              
              <Tabs value={selectedType} onValueChange={(v) => setSelectedType(v as ResourceType)}>
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="reports">Reports</TabsTrigger>
                  <TabsTrigger value="whitepapers">Whitepapers</TabsTrigger>
                  <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
                  <TabsTrigger value="newsletters">Newsletters</TabsTrigger>
                </TabsList>
              </Tabs>

              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-[120px]">
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
                        {resource.type}
                      </span>
                    </div>
                    <span className="rounded-full bg-muted px-2 py-0.5 text-xs">
                      {resource.program}
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
