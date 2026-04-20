"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { ProgramsSection } from "@/components/sections/programs-section"
import { FeaturedSection } from "@/components/sections/featured-section"
import { PeopleSection } from "@/components/sections/people-section"
import { NewsSection } from "@/components/sections/news-section"
import { ProgramTemplate } from "@/components/templates/program-template"
import { SubProgramPage } from "@/components/templates/sub-program-page"
import { DigitalLibrary } from "@/components/pages/digital-library"
import { AboutPage } from "@/components/pages/about-page"
import { PartnersPage } from "@/components/pages/partners-page"
import { EventsPage } from "@/components/pages/events-page"
import { FacilitiesPage } from "@/components/pages/facilities-page"
import { PodcastPage } from "@/components/pages/podcast-page"
import { ContactPage } from "@/components/pages/contact-page"
import { DonatePage } from "@/components/pages/donate-page"
import { ConferencePage } from "@/components/pages/conference-page"
import { Wind, Droplets, Globe, Handshake, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type Page = 
  | "home" 
  | "about" 
  | "about-board"
  | "about-team"
  | "about-advisory"
  | "about-non-resident-fellows"
  | "about-diplomatic-fellows"
  | "partners" 
  | "events" 
  | "library" 
  | "facilities" 
  | "podcast" 
  | "contact" 
  | "donate"
  | "energy"
  | "environment"
  | "economic"
  | "sub-program-water-literacy"
  | "sub-program-future-energy-leaders"
  | "sub-program-marine-conservation"
  | "sub-program-calibaja-nearshoring"
  | "sub-program-la-jolla-conference"

// Program Data
const programData = {
  energy: {
    title: "Energy Program",
    subtitle: "IOA Programs",
    description: "The Institute's Energy Program is committed to shaping public policy and informing the public on matters related to energy development across the Americas. We convene industry leaders, policymakers, and experts to address critical energy challenges and opportunities.",
    icon: Wind,
    subPrograms: [
      { title: "Future Energy Leaders", description: "An intensive leadership development program for emerging energy sector professionals.", id: "future-energy-leaders" },
      { title: "Energy Ambassadors", description: "A network of young professionals promoting energy dialogue across the Americas.", id: "energy-ambassadors" },
      { title: "La Jolla Energy Conference", description: "Our flagship annual event bringing together global energy leaders.", id: "la-jolla-conference" },
      { title: "Madrid Energy Conference", description: "Where Europe and The Americas meet for Energy Dialogue.", id: "madrid-conference" },
      { title: "Energy Panorama", description: "Annual comprehensive report on energy trends across the hemisphere.", id: "energy-panorama" },
    ],
    resources: [
      { title: "Mexico's Energy Transformation Report", type: "Report", date: "2026-01-27" },
      { title: "US-Mexico Energy Relationship Analysis", type: "Whitepaper", date: "2025-12-19" },
      { title: "La Jolla Conference Proceedings 2025", type: "Report", date: "2025-11-15" },
      { title: "Energy Unwrapped! Podcast Collection", type: "Podcast", date: "2026-01-05" },
    ],
  },
  environment: {
    title: "Environment Program",
    subtitle: "IOA Programs",
    description: "The Institute is committed to catalyzing expanded sustainability leadership and climate action among the private sector to tackle climate change, minimize environmental degradation, and promote sustainable development across the Americas.",
    icon: Droplets,
    subPrograms: [
      { title: "Water Literacy Initiative", description: "Promoting understanding of water challenges and solutions across the hemisphere.", id: "water-literacy" },
      { title: "Marine Conservation", description: "Protecting ocean ecosystems and promoting sustainable fisheries.", id: "marine-conservation" },
      { title: "Sustainable Shipping", description: "Promoting decarbonized maritime transport and green ports in Latin America.", id: "sustainable-shipping" },
      { title: "Sustainability Dispatch", description: "Regular updates on sustainability trends and best practices.", id: "sustainability-dispatch" },
    ],
    resources: [
      { title: "Water Literacy in the Americas", type: "Whitepaper", date: "2025-11-15" },
      { title: "Sustainable Shipping Report", type: "Report", date: "2025-09-05" },
      { title: "Marine Conservation Strategy", type: "Policy Brief", date: "2025-07-20" },
      { title: "Sustainability Dispatch - Q4 2025", type: "Newsletter", date: "2025-12-15" },
    ],
  },
  economic: {
    title: "Economic Competitiveness",
    subtitle: "IOA Programs",
    description: "In an effort to promote regional economic competitiveness across North America, the Institute of the Americas has partnered with government, industry, and academic leaders to advance trade, investment, and economic cooperation.",
    icon: Globe,
    subPrograms: [
      { title: "CaliBaja Nearshoring Initiative", description: "Exploring nearshoring opportunities in the California-Baja California region.", id: "calibaja-nearshoring" },
      { title: "CaliBaja North American Leadership Academy", description: "Developing the next generation of cross-border business leaders.", id: "leadership-academy" },
      { title: "Critical Minerals Program", description: "Examining supply chains and opportunities in critical minerals.", id: "critical-minerals" },
      { title: "North American Forum", description: "Advancing cooperation and competitiveness across North America.", id: "north-american-forum" },
    ],
    resources: [
      { title: "CaliBaja Nearshoring Economic Analysis", type: "Report", date: "2025-10-10" },
      { title: "Critical Minerals Supply Chain Study", type: "Whitepaper", date: "2024-12-15" },
      { title: "North American Competitiveness Index", type: "Report", date: "2025-06-01" },
      { title: "Cross-Border Trade Policy Brief", type: "Policy Brief", date: "2025-08-15" },
    ],
  },
}

// Partners Section for Home Page
function PartnersPreviewSection({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <section className="border-t border-border bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">[Section 06]</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Partners</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            The Institute partners with diverse public, private, non-profit and academic organizations throughout the Americas to further our organizational mission.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-background border border-border">
              <Globe className="h-8 w-8" />
            </div>
            <h3 className="mt-4 font-semibold">UC San Diego Affiliation</h3>
            <p className="mt-2 text-sm text-muted-foreground">Our primary academic partner and host institution</p>
          </div>
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-background border border-border">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="mt-4 font-semibold">Our Supporters</h3>
            <p className="mt-2 text-sm text-muted-foreground">Organizations supporting our mission</p>
          </div>
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-background border border-border">
              <Handshake className="h-8 w-8" />
            </div>
            <h3 className="mt-4 font-semibold">Steering Committee</h3>
            <p className="mt-2 text-sm text-muted-foreground">Leaders guiding our strategic direction</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button variant="outline" onClick={() => onNavigate("partners")}>
            View All Partners
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

// Facilities Banner
function FacilitiesBannerSection({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">[Section 05]</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Discover Our World-Class Facilities
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Located on the UC San Diego campus in La Jolla, the Institute offers state-of-the-art facilities for events, conferences, and collaborative work. From intimate meetings to large-scale forums, our spaces are designed to facilitate meaningful dialogue across the Americas.
            </p>
            <Button 
              size="lg" 
              className="mt-8"
              onClick={() => onNavigate("facilities")}
            >
              Explore Our Facilities
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="bg-slate-200 h-64 rounded-lg flex items-center justify-center">
            <p className="text-slate-600">Facilities Image Placeholder</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Support CTA Section
function SupportSection({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <section className="bg-foreground text-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest opacity-60 mb-4">[Section 07]</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Support Our Mission</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
          Join us in building a more prosperous and sustainable future for the Americas. Your support makes a difference.
        </p>
        <Button 
          size="lg" 
          variant="secondary" 
          className="mt-8"
          onClick={() => onNavigate("donate")}
        >
          Donate Now
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}

// Home Page Component
function HomePage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <>
      <HeroSection onNavigate={onNavigate} />
      <PeopleSection onNavigate={onNavigate} />
      <ProgramsSection onNavigate={onNavigate} />
      <FeaturedSection onNavigate={onNavigate} />
      <NewsSection onNavigate={onNavigate} />
      <FacilitiesBannerSection onNavigate={onNavigate} />
      <PartnersPreviewSection onNavigate={onNavigate} />
      <SupportSection onNavigate={onNavigate} />
    </>
  )
}

export default function IOAWebsite() {
  const [currentPage, setCurrentPage] = useState<Page>("home")

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page)
    if (!page.startsWith("about-")) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleBack = () => {
    handleNavigate("home")
  }

  // Render Sub-Program Pages
  if (currentPage === "sub-program-water-literacy") {
    return (
      <div className="min-h-screen bg-background font-sans">
        <Navbar onNavigate={handleNavigate} currentPage="library" />
        <main>
          <SubProgramPage
            programName="Tijuana River Watershed Water Security Program"
            subtitle="Advancing binational water resilience through regulatory innovation, technology assessment, and policy engagement in Baja California."
            overviewSections={[
              "The Tijuana River Watershed Water Security Program is a binational initiative led by the Institute of the Americas in partnership with Centro Mexicano de Derecho Ambiental.",
              "Tijuana, Tecate, and Playas de Rosarito face increasing water stress driven by climate change, rapid growth, industrial demand, and heavy reliance on the Colorado River. Despite mounting scarcity, most municipal wastewater is not recaptured, and potable water re-use remains restricted under current Mexican regulations.",
              "This initiative supports informed policy design grounded in international best practices and regional collaboration. San Diego County once faced similar dependency challenges and has since diversified its water portfolio through advanced recycling programs.",
              "By evaluating legal frameworks and technological advances from jurisdictions including California, Chile, Brazil, Peru and other parts of Mexico, this program creates a structured pathway for evidence-based decision-making in Baja California."
            ]}
            alignmentTitle="Alignment with the Environment Program"
            alignmentContent={[
              "Strengthening climate adaptation strategies",
              "Supporting science-based public policy",
              "Promoting resilient infrastructure solutions",
              "Deepening binational cooperation",
              "Expanding access to credible, policy-relevant information"
            ]}
            alignmentDescription="Water resilience is foundational to regional economic stability, ecosystem protection, and long-term climate preparedness in the Cali–Baja region. This initiative advances our collective goals by:"
            resources={[
              { title: "Comparative Regulatory Analysis", type: "Environment", date: "February 4th, 2026", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit porttitor elit, laoreet malesuada augue. Quisque eros elit, efficitur a." },
              { title: "Water Re-use Technology Assessment", type: "Environment", date: "February 4th, 2026", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit porttitor elit, laoreet malesuada augue. Quisque eros elit, efficitur a." },
              { title: "Baja California Regulatory Roadmap", type: "Environment", date: "February 4th, 2026", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit porttitor elit, laoreet malesuada augue. Quisque eros elit, efficitur a." },
              { title: "Forum Proceedings", type: "Environment", date: "February 4th, 2026", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit porttitor elit, laoreet malesuada augue. Quisque eros elit, efficitur a." },
              { title: "Media Coverage", type: "Environment", date: "February 4th, 2026", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit porttitor elit, laoreet malesuada augue. Quisque eros elit, efficitur a." },
            ]}
            partners={{
              primary: [
                "Centro Mexicano de Derecho Ambiental",
                "UNAM Instituto de Investigaciones Jurídicas",
                "Fundación La Puerta"
              ],
              supporters: [
                "San Diego Foundation, Binational Resilience Initiative (BRI)",
                "Rancho La Puerta & Fundación la Puerta",
                "The North American Development Bank (NADBank)",
                "U.S. EPA Border 2025 Program"
              ]
            }}
            contactName="Elizabeth Mosqueda"
            contactTitle="Environment Program Lead"
            onClose={handleBack}
          />
        </main>
        <Footer onNavigate={handleNavigate} />
      </div>
    )
  }

  if (currentPage === "sub-program-la-jolla-conference") {
    return (
      <div className="min-h-screen bg-background font-sans">
        <main>
          <ConferencePage />
        </main>
      </div>
    )
  }

  // Render Program Pages
  if (currentPage === "energy" || currentPage === "environment" || currentPage === "economic") {
    const data = programData[currentPage]
    return (
      <div className="min-h-screen bg-background font-sans">
        <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
        <main>
          <ProgramTemplate
            title={data.title}
            subtitle={data.subtitle}
            description={data.description}
            icon={data.icon}
            subPrograms={data.subPrograms}
            resources={data.resources}
            onBack={handleBack}
            onNavigate={handleNavigate}
          />
        </main>
        <Footer onNavigate={handleNavigate} />
      </div>
    )
  }

  // Render Other Pages
  const renderPage = () => {
    const aboutTabMap: Record<string, string> = {
      "about-board": "board",
      "about-team": "team",
      "about-advisory": "advisory",
      "about-non-resident-fellows": "non-resident-fellows",
      "about-diplomatic-fellows": "diplomatic-fellows",
    }

    if (currentPage.startsWith("about-")) {
      const tab = aboutTabMap[currentPage] || "board"
      return <AboutPage onBack={handleBack} defaultTab={tab} />
    }

    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />
      case "about":
        return <AboutPage onBack={handleBack} />
      case "partners":
        return <PartnersPage onBack={handleBack} onNavigate={handleNavigate} />
      case "events":
        return <EventsPage onBack={handleBack} />
      case "library":
        return <DigitalLibrary onBack={handleBack} />
      case "facilities":
        return <FacilitiesPage onBack={handleBack} onNavigate={handleNavigate} />
      case "podcast":
        return <PodcastPage onBack={handleBack} />
      case "contact":
        return <ContactPage onBack={handleBack} />
      case "donate":
        return <DonatePage onBack={handleBack} />
      default:
        return <HomePage onNavigate={handleNavigate} />
    }
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  )
}
