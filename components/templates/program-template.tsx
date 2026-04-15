"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, ChevronDown, FileText, Calendar, Users } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface SubProgram {
  title: string
  description: string
  id: string
}

interface Resource {
  title: string
  type: string
  date: string
}

interface ProgramTemplateProps {
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
  subPrograms: SubProgram[]
  resources: Resource[]
  onBack: () => void
  onNavigate: (page: string) => void
}

export function ProgramTemplate({
  title,
  subtitle,
  description,
  icon: Icon,
  subPrograms,
  resources,
  onBack,
  onNavigate,
}: ProgramTemplateProps) {
  const [showAllSubPrograms, setShowAllSubPrograms] = useState(false)
  const visibleSubPrograms = showAllSubPrograms ? subPrograms : subPrograms.slice(0, 3)

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
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/20">
              <Icon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
              <p className="mt-2 max-w-2xl text-xl text-white/90">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 bg-white">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
              <p className="mt-4 text-slate-700">
                {description} Our initiatives bring together stakeholders from across the hemisphere to address critical challenges and create opportunities for sustainable development.
              </p>
            </section>

            {/* Sub-Programs */}
            <section className="mt-12">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">Sub-Programs & Initiatives</h2>
                {subPrograms.length > 3 && (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setShowAllSubPrograms(!showAllSubPrograms)}
                    className="text-slate-600 hover:text-slate-900"
                  >
                    {showAllSubPrograms ? "Show Less" : "Show All"}
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${showAllSubPrograms ? "rotate-180" : ""}`} />
                  </Button>
                )}
              </div>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {visibleSubPrograms.map((subProgram, index) => (
                  <Card key={index} className="transition-all hover:shadow-md border border-slate-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-lg text-slate-900">{subProgram.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-600">{subProgram.description}</CardDescription>
                      <button 
                        onClick={() => onNavigate(`sub-program-${subProgram.id}`)}
                        className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1"
                      >
                        Learn more <ArrowRight className="h-3 w-3" />
                      </button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Stats */}
            <section className="mt-12">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg border border-slate-200 bg-slate-100 p-6 text-center">
                  <p className="text-3xl font-bold text-slate-900">40+</p>
                  <p className="mt-1 text-sm text-slate-600">Years of Impact</p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-100 p-6 text-center">
                  <p className="text-3xl font-bold text-slate-900">100+</p>
                  <p className="mt-1 text-sm text-slate-600">Events Hosted</p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-100 p-6 text-center">
                  <p className="text-3xl font-bold text-slate-900">35</p>
                  <p className="mt-1 text-sm text-slate-600">Countries Engaged</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-lg font-semibold text-slate-900">Related Resources</h3>
              <Tabs defaultValue="reports" className="mt-4">
                <TabsList className="w-full bg-slate-100">
                  <TabsTrigger value="reports" className="flex-1 data-[state=active]:bg-white">Reports</TabsTrigger>
                  <TabsTrigger value="events" className="flex-1 data-[state=active]:bg-white">Events</TabsTrigger>
                </TabsList>
                <TabsContent value="reports" className="mt-4">
                  <div className="space-y-3">
                    {resources.slice(0, 4).map((resource, index) => (
                      <div 
                        key={index} 
                        className="cursor-pointer rounded-lg border border-border p-4 transition-colors hover:bg-muted/50"
                      >
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <FileText className="h-3 w-3" />
                          {resource.type}
                        </div>
                        <p className="mt-2 text-sm font-medium">{resource.title}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{resource.date}</p>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="mt-4 w-full" onClick={() => onNavigate("library")}>
                    View All Resources
                  </Button>
                </TabsContent>
                <TabsContent value="events" className="mt-4">
                  <div className="space-y-3">
                    <div className="cursor-pointer rounded-lg border border-border p-4 transition-colors hover:bg-muted/50">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        Upcoming
                      </div>
                      <p className="mt-2 text-sm font-medium">La Jolla Energy Conference 2026</p>
                      <p className="mt-1 text-xs text-muted-foreground">October 2026</p>
                    </div>
                    <div className="cursor-pointer rounded-lg border border-border p-4 transition-colors hover:bg-muted/50">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Users className="h-3 w-3" />
                        Workshop
                      </div>
                      <p className="mt-2 text-sm font-medium">Future Energy Leaders Summit</p>
                      <p className="mt-1 text-xs text-muted-foreground">August 2026</p>
                    </div>
                  </div>
                  <Button variant="outline" className="mt-4 w-full" onClick={() => onNavigate("events")}>
                    View All Events
                  </Button>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
