"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Handshake, Network, BookOpen, Users, Compass, Globe, Lightbulb, Megaphone, Database, UserCircle, ExternalLink } from "lucide-react"

interface PartnersPageProps {
  onBack: () => void
  onNavigate?: (page: string) => void
}

const institutionalPartners = [
  "UC San Diego",
  "School of Global Strategy (GPS)",
  "Center for U.S-Mexican Studies",
  "Jacobs School of Engineering",
  "Scripps Institution of Oceanography",
  "UC Television (UC-TV)",
  "UNAM",
  "Universidad de Chile",
  "IDB",
  "World Bank Group",
]

const collaborativePartners = [
  "Sempra Energy",
  "Chevron",
  "Shell",
  "BP",
  "Citi",
  "Bancomext",
  "U.S. State Department",
  "Government of Mexico",
  "Government of Canada",
  "CaliBaja Binational Region",
  "WWF",
  "NRDC",
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
      <div className="relative w-full h-[420px] bg-neutral-500">
        <div className="absolute inset-0 bg-neutral-600/30" />
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
              className="bg-white text-neutral-700 hover:bg-neutral-100"
              onClick={() => onNavigate?.("contact")}
            >
              <Handshake className="mr-2 h-4 w-4" />
              Become a Partner
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20 hover:text-white">
              <BookOpen className="mr-2 h-4 w-4" />
              View Annual Report
            </Button>
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">[Section 01]</p>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">Who We Are</h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            The Institute of the Americas is an independent, inter-American institution devoted to encouraging economic and social reform in the Americas, enhancing private sector collaboration and communication, and strengthening political and economic relations between Latin America, the Caribbean, the United States and Canada.
          </p>
          <p className="mt-4 text-base leading-relaxed text-neutral-500">
            We are committed to building bridges across the Americas — linking business leaders, policymakers, and civic leaders to share ideas and facilitate opportunities. We help understand and catalyze innovation with a focus on energy, the environment & climate change, and regional economic competitiveness on a hemispheric basis.
          </p>
        </div>
      </section>

      {/* Benefits of Partnering */}
      <section className="bg-neutral-50 border-y border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">[Section 02]</p>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">Benefits of Partnering with Institute of the Americas</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {partnerBenefits.map((benefit) => (
              <Card key={benefit.title} className="border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-neutral-100">
                    <benefit.icon className="h-7 w-7 text-neutral-600" />
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
              className="bg-neutral-600 hover:bg-neutral-700 text-white"
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
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">[Section 03]</p>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">UC San Diego Affiliation</h2>
        </div>
        <div className="mx-auto max-w-3xl text-center mb-8">
          <p className="text-lg text-neutral-600">
            Located on the UC San Diego campus, the Institute maintains a close association with various schools and research centers on campus including:
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {[
            { name: "Graduate School of Global Strategy (GPS)", icon: Compass },
            { name: "Center for U.S-Mexican Studies (USMEX)", icon: Globe },
            { name: "Jacobs School of Engineering", icon: Lightbulb },
            { name: "Scripps Institution of Oceanography", icon: Users },
            { name: "UC Television (UC-TV)", icon: Megaphone },
          ].map((unit) => (
            <Card key={unit.name} className="border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="flex items-center gap-3 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100">
                  <unit.icon className="h-5 w-5 text-neutral-500" />
                </div>
                <span className="text-sm font-medium text-neutral-900">{unit.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Our Supporters */}
      <section className="bg-neutral-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-4">[Section 04]</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Supporters</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
              Individuals, corporations, foundations, and government agencies committed to making a demonstrated impact in the Americas through the Institute's programs and initiatives.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            {[
              { icon: Users, label: "Individuals", description: "Thought leaders and civic supporters" },
              { icon: BookOpen, label: "Corporations", description: "Private sector partners and sponsors" },
              { icon: Globe, label: "Foundations & Government", description: "Institutional and public sector funders" },
            ].map((supporter) => (
              <div key={supporter.label} className="text-center p-6 rounded-lg bg-white/10">
                <supporter.icon className="mx-auto h-8 w-8 text-white/70" />
                <h3 className="mt-3 text-lg font-semibold">{supporter.label}</h3>
                <p className="mt-1 text-sm text-white/50">{supporter.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steering Committee */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">[Section 05]</p>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">Energy Steering Committee</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600">
            The Institute's Energy Steering Committee provides strategic guidance, direction, and financial support to further the Institute's Energy program.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
          {steeringCommittee.map((member, index) => (
            <Card key={index} className="border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100">
                  <UserCircle className="h-10 w-10 text-neutral-400" />
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="text-base">{member.name}</CardTitle>
                <CardDescription className="mt-1">{member.role}</CardDescription>
                <p className="mt-2 text-xs text-neutral-500">{member.org}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" className="border-neutral-300">
            <ExternalLink className="mr-2 h-4 w-4" />
            View Full Steering Committee
          </Button>
        </div>
      </section>

      {/* Partner Network — Simple Logo Grid */}
      <section className="bg-neutral-50 border-y border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">[Section 06]</p>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">Our Partner Network</h2>
          </div>

          {/* Institutional Partners */}
          <div className="mb-10">
            <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-500 text-center mb-8">Institutional Partners</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {institutionalPartners.map((name) => (
                <div 
                  key={name}
                  className="flex items-center justify-center h-20 rounded-lg bg-white border border-neutral-200 hover:border-neutral-300 hover:shadow-sm transition-all"
                >
                  <span className="text-xs font-medium text-neutral-400">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Collaborative Partners */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-500 text-center mb-8">Collaborative Partners</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {collaborativePartners.map((name) => (
                <div 
                  key={name}
                  className="flex items-center justify-center h-20 rounded-lg bg-white border border-neutral-200 hover:border-neutral-300 hover:shadow-sm transition-all"
                >
                  <span className="text-xs font-medium text-neutral-400">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="bg-neutral-500 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-4">[Section 07]</p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Join Our Network</h2>
            <p className="mt-4 text-lg text-white/70">
              Whether you're a corporation, academic institution, government agency, or foundation — partnering with the Institute of the Americas means joining a network of changemakers shaping the future of the hemisphere.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-neutral-700 hover:bg-neutral-100 font-semibold"
                onClick={() => onNavigate?.("contact")}
              >
                <Handshake className="mr-2 h-5 w-5" />
                Become a Partner
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20 hover:text-white"
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