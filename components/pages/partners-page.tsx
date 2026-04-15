"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Handshake, Network, BookOpen, Users, Building2, Compass, Globe, Lightbulb, Megaphone, Database, UserCircle, ExternalLink } from "lucide-react"

interface PartnersPageProps {
  onBack: () => void
  onNavigate?: (page: string) => void
}

const institutionalPartners = [
  { name: "UC San Diego", description: "Host institution and primary academic partner", category: "Academic" },
  { name: "School of Global Strategy (GPS)", description: "UCSD graduate school collaboration", category: "Academic" },
  { name: "Center for U.S-Mexican Studies (USMEX)", description: "Joint research and policy programs", category: "Academic" },
  { name: "Jacobs School of Engineering", description: "Innovation and technology partnership", category: "Academic" },
  { name: "Scripps Institution of Oceanography", description: "Environmental and marine research collaboration", category: "Academic" },
  { name: "UC Television (UC-TV)", description: "Media and outreach partner, UC San Diego Extension", category: "Media" },
  { name: "UNAM", description: "Mexico's leading university partner", category: "Academic" },
  { name: "Universidad de Chile", description: "South American academic partner", category: "Academic" },
  { name: "IDB", description: "Inter-American Development Bank — Development finance partner", category: "Multilateral" },
  { name: "World Bank Group", description: "Global development policy collaboration", category: "Multilateral" },
]

const collaborativePartners = [
  { name: "Sempra Energy", description: "Energy sector collaborative programs", category: "Corporate" },
  { name: "Chevron", description: "Energy policy and conference sponsor", category: "Corporate" },
  { name: "Shell", description: "Energy transition dialogue partner", category: "Corporate" },
  { name: "BP", description: "Sustainability and energy research collaboration", category: "Corporate" },
  { name: "Citi", description: "Financial services and economic policy partner", category: "Corporate" },
  { name: "Bancomext", description: "Mexican development finance institution", category: "Government" },
  { name: "U.S. State Department", description: "Policy dialogue and diplomatic engagement", category: "Government" },
  { name: "Government of Mexico", description: "Bilateral policy collaboration", category: "Government" },
  { name: "Government of Canada", description: "North American Forum partner", category: "Government" },
  { name: "CaliBaja Binational Region", description: "Cross-border economic initiative partner", category: "Government" },
  { name: "WWF", description: "Environmental conservation initiatives", category: "Nonprofit" },
  { name: "NRDC", description: "Natural Resources Defense Council — Climate policy", category: "Nonprofit" },
]

const steeringCommittee = [
  { name: "Steering Committee Member 1", role: "Energy Sector Executive", org: "Organization Name" },
  { name: "Steering Committee Member 2", role: "Policy Advisor", org: "Organization Name" },
  { name: "Steering Committee Member 3", role: "Industry Strategist", org: "Organization Name" },
  { name: "Steering Committee Member 4", role: "Senior Energy Analyst", org: "Organization Name" },
]

const partnerBenefits = [
  { icon: Network, title: "Networking Opportunities", description: "Access to exclusive conferences, events, and roundtable discussions with leaders across the hemisphere." },
  { icon: Megaphone, title: "Organizational Promotion", description: "Visibility through social media, newsletters, website, and virtual/in-person events reaching thousands." },
  { icon: Database, title: "Research & Data Access", description: "Priority access to the Institute's research, reports, data, and digital library resources." },
  { icon: Lightbulb, title: "Expert Insights", description: "Direct access to sector-specific experts with unique knowledge on the ever-changing landscape of the Americas." },
]

export function PartnersPage({ onBack, onNavigate }: PartnersPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full h-[420px] bg-gradient-to-br from-slate-800 via-slate-700 to-blue-900">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 h-full flex flex-col justify-center">
          <Button variant="ghost" className="mb-4 w-fit text-white hover:bg-white/20" onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Our Partners</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Building bridges across the Americas — linking business leaders, policymakers, and civic leaders to share ideas and facilitate opportunities.
          </p>
          <div className="mt-6 flex gap-3">
            <Button 
              className="bg-white text-slate-900 hover:bg-white/90"
              onClick={() => onNavigate?.("contact")}
            >
              <Handshake className="mr-2 h-4 w-4" />
              Become a Partner
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <BookOpen className="mr-2 h-4 w-4" />
              View Annual Report
            </Button>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">[Section 01]</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Who We Are</h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            The Institute of the Americas is an independent, inter-American institution devoted to encouraging economic and social reform in the Americas, enhancing private sector collaboration and communication, and strengthening political and economic relations between Latin America, the Caribbean, the United States and Canada.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-500">
            We are committed to building bridges across the Americas — linking business leaders, policymakers, and civic leaders to share ideas and facilitate opportunities. We help understand and catalyze innovation with a focus on energy, the environment & climate change, and regional economic competitiveness on a hemispheric basis.
          </p>
        </div>
      </section>

      {/* Benefits of Partnering */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">[Section 02]</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Benefits of Partnering with
              <span className="block text-blue-700 mt-1">Institute of the Americas</span>
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {partnerBenefits.map((benefit) => (
              <Card key={benefit.title} className="border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
                    <benefit.icon className="h-7 w-7 text-blue-700" />
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="text-base font-semibold">{benefit.title}</CardTitle>
                  <CardDescription className="mt-2 text-sm">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button 
              size="lg"
              className="bg-blue-700 hover:bg-blue-800 text-white"
              onClick={() => onNavigate?.("contact")}
            >
              <Handshake className="mr-2 h-4 w-4" />
              Partner With Us
            </Button>
          </div>
        </div>
      </section>

      {/* UC San Diego Affiliation */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">[Section 03]</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">UC San Diego Affiliation</h2>
        </div>
        <div className="mx-auto max-w-3xl text-center mb-8">
          <p className="text-lg text-slate-600">
            Located on the UC San Diego campus, the Institute maintains a close association with various schools and research centers on campus including:
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {[
            { name: "Graduate School of Global Strategy (GPS)", icon: Compass },
            { name: "Center for U.S-Mexican Studies (USMEX)", icon: Globe },
            { name: "Jacobs School of Engineering", icon: Lightbulb },
            { name: "Scripps Institution of Oceanography", icon: Building2 },
            { name: "UC Television (UC-TV)", icon: Megaphone },
          ].map((unit) => (
            <Card key={unit.name} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="flex items-center gap-3 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                  <unit.icon className="h-5 w-5 text-slate-600" />
                </div>
                <span className="text-sm font-medium text-slate-900">{unit.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Our Supporters */}
      <section className="bg-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-4">[Section 04]</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Supporters</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
              Individuals, corporations, foundations, and government agencies committed to making a demonstrated impact in the Americas through the Institute's programs and initiatives.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            {[
              { icon: Users, label: "Individuals", description: "Thought leaders and civic supporters" },
              { icon: Building2, label: "Corporations", description: "Private sector partners and sponsors" },
              { icon: BookOpen, label: "Foundations & Government", description: "Institutional and public sector funders" },
            ].map((supporter) => (
              <div key={supporter.label} className="text-center p-6 rounded-lg bg-white/10">
                <supporter.icon className="mx-auto h-8 w-8 text-white/80" />
                <h3 className="mt-3 text-lg font-semibold">{supporter.label}</h3>
                <p className="mt-1 text-sm text-white/60">{supporter.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steering Committee */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">[Section 05]</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Energy Steering Committee</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            The Institute's Energy Steering Committee provides strategic guidance, direction, and financial support to further the Institute's Energy program.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
          {steeringCommittee.map((member, index) => (
            <Card key={index} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                  <UserCircle className="h-10 w-10 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="text-base">{member.name}</CardTitle>
                <CardDescription className="mt-1">{member.role}</CardDescription>
                <p className="mt-2 text-xs text-muted-foreground">{member.org}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" className="border-slate-300">
            <ExternalLink className="mr-2 h-4 w-4" />
            View Full Steering Committee
          </Button>
        </div>
      </section>

      {/* Partners Tabs */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">[Section 06]</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Partner Network</h2>
          </div>
          <Tabs defaultValue="institutional" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-slate-100">
              <TabsTrigger value="institutional" className="data-[state=active]:bg-white">Institutional Partners</TabsTrigger>
              <TabsTrigger value="collaborative" className="data-[state=active]:bg-white">Collaborative Partners</TabsTrigger>
            </TabsList>

            <TabsContent value="institutional" className="mt-8">
              <div className="mx-auto max-w-2xl text-center mb-8">
                <Badge variant="secondary" className="mb-3">Formal Cooperation Agreements</Badge>
                <p className="text-sm text-slate-600">
                  Institutional Partners include those institutions for which IOA has formalized cooperation agreements to jointly undertake programmatic work aligned with our shared goals and objectives.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {institutionalPartners.map((partner) => (
                  <Card key={partner.name} className="border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="w-full h-32 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                      <div className="text-center">
                        <Building2 className="mx-auto h-8 w-8 text-slate-400" />
                        <p className="mt-2 text-xs font-medium text-slate-500">Logo Placeholder</p>
                      </div>
                    </div>
                    <CardHeader className="pb-1">
                      <CardTitle className="text-base text-slate-900">{partner.name}</CardTitle>
                      <Badge variant="outline" className="mt-1 text-xs">{partner.category}</Badge>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm text-slate-600">{partner.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="collaborative" className="mt-8">
              <div className="mx-auto max-w-2xl text-center mb-8">
                <Badge variant="secondary" className="mb-3">Joint Programs & Activities</Badge>
                <p className="text-sm text-slate-600">
                  Collaborative Partners include those organizations for which IOA undertakes joint programs and/or activities but without a formal cooperation agreement.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {collaborativePartners.map((partner) => (
                  <Card key={partner.name} className="border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="w-full h-32 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                      <div className="text-center">
                        <Handshake className="mx-auto h-8 w-8 text-slate-400" />
                        <p className="mt-2 text-xs font-medium text-slate-500">Logo Placeholder</p>
                      </div>
                    </div>
                    <CardHeader className="pb-1">
                      <CardTitle className="text-base text-slate-900">{partner.name}</CardTitle>
                      <Badge variant="outline" className="mt-1 text-xs">{partner.category}</Badge>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm text-slate-600">{partner.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/placeholder-pattern.svg')] opacity-5" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-4">[Section 07]</p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Join Our Network</h2>
            <p className="mt-4 text-lg text-white/80">
              Whether you're a corporation, academic institution, government agency, or foundation — partnering with the Institute of the Americas means joining a network of changemakers shaping the future of the hemisphere.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-blue-800 hover:bg-white/90 font-semibold"
                onClick={() => onNavigate?.("contact")}
              >
                <Handshake className="mr-2 h-5 w-5" />
                Become a Partner
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => onNavigate?.("donate")}
              >
                Support Our Mission
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}