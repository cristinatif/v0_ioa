"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Users, Target, BookOpen, Award, Globe, X, Download, UserCircle } from "lucide-react"

interface AboutPageProps {
  onBack: () => void
}

interface TeamMember {
  name: string
  role: string
  org?: string
  bio?: string
  expertise?: string
}

interface BioModalProps {
  member: TeamMember | null
  isOpen: boolean
  onClose: () => void
}

function BioModal({ member, isOpen, onClose }: BioModalProps) {
  if (!isOpen || !member) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">{member.name}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex gap-6">
            <div className="w-32 h-32 rounded-lg object-cover flex-shrink-0 bg-gray-300 flex items-center justify-center">
              <Users className="w-12 h-12 text-gray-400" />
            </div>
            <div>
              <p className="text-lg font-semibold text-blue-600 mb-2">{member.role}</p>
              {member.org && <p className="text-sm text-gray-600 mb-4">{member.org}</p>}
              {member.expertise && <p className="text-sm text-gray-600 mb-4">{member.expertise}</p>}
              <p className="text-gray-700 leading-relaxed">{member.bio || "Learn more about this team member's background and expertise."}</p>
            </div>
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            <Download className="w-4 h-4 mr-2" />
            Download Bio (PDF)
          </Button>
        </div>
      </div>
    </div>
  )
}

export function AboutPage({ onBack }: AboutPageProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  const boardMembers: TeamMember[] = [
    { name: "Board Member 1", role: "Chairman", org: "Organization Name" },
    { name: "Board Member 2", role: "Vice Chair", org: "Organization Name" },
    { name: "Board Member 3", role: "Treasurer", org: "Organization Name" },
    { name: "Board Member 4", role: "Secretary", org: "Organization Name" },
  ]

  const teamMembers: TeamMember[] = [
    { name: "Staff Member 1", role: "President & CEO", bio: "Leads IOA's strategic initiatives across energy, environment, and economic competitiveness." },
    { name: "Staff Member 2", role: "Vice President, Energy", bio: "Oversees clean energy transitions and develops future energy leaders." },
    { name: "Staff Member 3", role: "Vice President, Environment", bio: "Directs initiatives focused on water resilience and marine conservation." },
    { name: "Staff Member 4", role: "Director, Economic Programs", bio: "Leads economic competitiveness and trade policy initiatives." },
  ]

  const advisoryCouncil: TeamMember[] = [
    { name: "Advisor 1", role: "Energy Policy Expert", expertise: "Energy Policy" },
    { name: "Advisor 2", role: "Environmental Specialist", expertise: "Environmental Law" },
    { name: "Advisor 3", role: "Trade Economist", expertise: "Trade Relations" },
    { name: "Advisor 4", role: "Climate Scientist", expertise: "Climate Science" },
  ]

  const nonResidentFellows: TeamMember[] = [
    { name: "Non-Resident Fellow 1", role: "Energy Policy Expert", org: "Organization Name" },
    { name: "Non-Resident Fellow 2", role: "Environmental Specialist", org: "Organization Name" },
    { name: "Non-Resident Fellow 3", role: "Trade Economist", org: "Organization Name" },
    { name: "Non-Resident Fellow 4", role: "Climate Scientist", org: "Organization Name" },
    { name: "Non-Resident Fellow 5", role: "Infrastructure Analyst", org: "Organization Name" },
    { name: "Non-Resident Fellow 6", role: "Digital Policy Advisor", org: "Organization Name" },
  ]

  const diplomaticFellows: TeamMember[] = [
    { name: "Diplomatic Fellow 1", role: "Former Ambassador to Mexico", org: "Organization Name" },
    { name: "Diplomatic Fellow 2", role: "Former Deputy Secretary", org: "Organization Name" },
    { name: "Diplomatic Fellow 3", role: "Former Trade Representative", org: "Organization Name" },
    { name: "Diplomatic Fellow 4", role: "Former Consul General", org: "Organization Name" },
    { name: "Diplomatic Fellow 5", role: "Former Foreign Minister", org: "Organization Name" },
    { name: "Diplomatic Fellow 6", role: "Former Diplomatic Envoy", org: "Organization Name" },
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
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">About Us</h1>
          <p className="mt-4 max-w-2xl text-xl text-white/90">
            Over 40 years of promoting sound public policy and fostering hemispheric cooperation.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6" />
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="mt-4 text-muted-foreground">
              The Institute of the Americas is dedicated to promoting sound public policy and fostering cooperation between public and private sector stakeholders across the hemisphere. Our diverse programs emphasize innovation and technological advancement as the key to building 21st-century economies in the Americas.
            </p>
            <p className="mt-4 text-muted-foreground">
              Based on the campus of the University of California, San Diego, we serve as a bridge connecting government, business, academic, and civil society leaders throughout the Western Hemisphere.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-muted/30 p-6">
              <Award className="h-8 w-8 text-foreground" />
              <h3 className="mt-4 font-semibold">40+ Years</h3>
              <p className="mt-1 text-sm text-muted-foreground">Of regional impact</p>
            </div>
            <div className="rounded-lg border border-border bg-muted/30 p-6">
              <Globe className="h-8 w-8 text-foreground" />
              <h3 className="mt-4 font-semibold">35 Countries</h3>
              <p className="mt-1 text-sm text-muted-foreground">Engaged across the Americas</p>
            </div>
            <div className="rounded-lg border border-border bg-muted/30 p-6">
              <Users className="h-8 w-8 text-foreground" />
              <h3 className="mt-4 font-semibold">1000+ Leaders</h3>
              <p className="mt-1 text-sm text-muted-foreground">Trained and mentored</p>
            </div>
            <div className="rounded-lg border border-border bg-muted/30 p-6">
              <BookOpen className="h-8 w-8 text-foreground" />
              <h3 className="mt-4 font-semibold">500+ Reports</h3>
              <p className="mt-1 text-sm text-muted-foreground">Published and distributed</p>
            </div>
          </div>
        </div>
      </section>

      {/* People Section */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Users className="h-6 w-6" />
            <h2 className="text-2xl font-bold">Our People</h2>
          </div>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Our board members, advisory council members, experts and staff collectively represent a diverse range of backgrounds and geographic locales across the Americas.
          </p>

          <Tabs defaultValue="board" className="mt-8">
            <TabsList className="flex-wrap">
              <TabsTrigger value="board">Our Board</TabsTrigger>
              <TabsTrigger value="team">Our Team</TabsTrigger>
              <TabsTrigger value="advisory">Advisory Council</TabsTrigger>
              <TabsTrigger value="non-resident-fellows">Non-Resident Fellows</TabsTrigger>
              <TabsTrigger value="diplomatic-fellows">Diplomatic Fellows</TabsTrigger>
            </TabsList>

            <TabsContent value="board" className="mt-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {boardMembers.map((member, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedMember(member)}
                    className="text-left transition-transform hover:scale-105"
                  >
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                          <UserCircle className="h-10 w-10 text-muted-foreground" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardTitle className="text-base">{member.name}</CardTitle>
                        <CardDescription className="mt-1">{member.role}</CardDescription>
                        {member.org && <p className="mt-2 text-xs text-muted-foreground">{member.org}</p>}
                      </CardContent>
                    </Card>
                  </button>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="team" className="mt-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {teamMembers.map((member, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedMember(member)}
                    className="text-left transition-transform hover:scale-105"
                  >
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                          <UserCircle className="h-10 w-10 text-muted-foreground" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardTitle className="text-base">{member.name}</CardTitle>
                        <CardDescription className="mt-1">{member.role}</CardDescription>
                        {member.org && <p className="mt-2 text-xs text-muted-foreground">{member.org}</p>}
                      </CardContent>
                    </Card>
                  </button>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="advisory" className="mt-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {advisoryCouncil.map((advisor, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedMember(advisor)}
                    className="text-left transition-transform hover:scale-105"
                  >
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                          <UserCircle className="h-10 w-10 text-muted-foreground" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardTitle className="text-base">{advisor.name}</CardTitle>
                        <CardDescription className="mt-1">{advisor.role}</CardDescription>
                        {advisor.org && <p className="mt-2 text-xs text-muted-foreground">{advisor.org}</p>}
                      </CardContent>
                    </Card>
                  </button>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="non-resident-fellows" className="mt-6">
              <p className="text-sm text-muted-foreground mb-6">
                Distinguished experts who contribute their knowledge and expertise to IOA programs.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {nonResidentFellows.map((fellow, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedMember(fellow)}
                    className="text-left transition-transform hover:scale-105"
                  >
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                          <UserCircle className="h-10 w-10 text-muted-foreground" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardTitle className="text-base">{fellow.name}</CardTitle>
                        <CardDescription className="mt-1">{fellow.role}</CardDescription>
                        {fellow.org && <p className="mt-2 text-xs text-muted-foreground">{fellow.org}</p>}
                      </CardContent>
                    </Card>
                  </button>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="diplomatic-fellows" className="mt-6">
              <p className="text-sm text-muted-foreground mb-6">
                Former diplomats and government officials who bring invaluable policy experience.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {diplomaticFellows.map((fellow, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedMember(fellow)}
                    className="text-left transition-transform hover:scale-105"
                  >
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                          <UserCircle className="h-10 w-10 text-muted-foreground" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardTitle className="text-base">{fellow.name}</CardTitle>
                        <CardDescription className="mt-1">{fellow.role}</CardDescription>
                        {fellow.org && <p className="mt-2 text-xs text-muted-foreground">{fellow.org}</p>}
                      </CardContent>
                    </Card>
                  </button>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Fact Sheet & Annual Report */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle>Fact Sheet</CardTitle>
              <CardDescription>
                Quick facts about the Institute of the Americas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li><strong>Founded:</strong> 1983</li>
                <li><strong>Location:</strong> UC San Diego Campus, La Jolla, California</li>
                <li><strong>Mission:</strong> Promoting sound public policy across the Americas</li>
                <li><strong>Programs:</strong> Energy, Environment, Economic Competitiveness</li>
              </ul>
              <Button variant="outline" className="mt-6">
                Download Fact Sheet (PDF)
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle>Annual Report 2025</CardTitle>
              <CardDescription>
                Working toward a sustainable future for the Americas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our annual report highlights the Institute&apos;s achievements, impact, and vision for the future. Explore our programs, partnerships, and the difference we&apos;re making across the hemisphere.
              </p>
              <Button variant="outline" className="mt-6">
                Read Annual Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <BioModal
        member={selectedMember}
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </div>
  )
}
