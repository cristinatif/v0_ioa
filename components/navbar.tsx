"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Wind, Droplets, Globe, ChevronDown } from "lucide-react"

interface NavbarProps {
  onNavigate: (page: string) => void
  currentPage: string
}

export function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)

  const navItems = [
    { label: "About Us", page: "about" },
    { label: "Partners", page: "partners" },
    { label: "Events", page: "events" },
    { label: "Library", page: "library" },
    { label: "Facilities", page: "facilities" },
    { label: "Podcast", page: "podcast" },
  ]

  const programs = [
    { 
      label: "Energy Program", 
      page: "energy", 
      icon: Wind, 
      description: "Shaping public policy on energy development",
      subPrograms: [
        { label: "Future Energy Leaders", id: "future-energy-leaders" },
        { label: "Energy Ambassadors", id: "energy-ambassadors" },
        { label: "La Jolla Conference", id: "la-jolla-conference" },
        { label: "Madrid Conference", id: "madrid-conference" },
      ]
    },
    { 
      label: "Environment Program", 
      page: "environment", 
      icon: Droplets, 
      description: "Catalyzing sustainability leadership",
      subPrograms: [
        { label: "Water Literacy", id: "water-literacy" },
        { label: "Marine Conservation", id: "marine-conservation" },
        { label: "Sustainable Shipping", id: "sustainable-shipping" },
        { label: "Sustainability Dispatch", id: "sustainability-dispatch" },
      ]
    },
    { 
      label: "Economic Competitiveness", 
      page: "economic", 
      icon: Globe, 
      description: "Promoting regional economic growth",
      subPrograms: [
        { label: "CaliBaja Nearshoring", id: "calibaja-nearshoring" },
        { label: "Leadership Academy", id: "leadership-academy" },
        { label: "Critical Minerals", id: "critical-minerals" },
        { label: "North American Forum", id: "north-american-forum" },
      ]
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button 
          onClick={() => onNavigate("home")}
          className="flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-foreground">
            <span className="text-xs font-bold">IOA</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold leading-tight">Institute of</p>
            <p className="text-sm font-semibold leading-tight">the Americas</p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:gap-6">
          {/* Regular Nav Items */}
          {navItems.slice(0, 2).map((item) => (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className={`text-sm font-medium transition-colors hover:text-foreground/80 ${
                currentPage === item.page ? "text-foreground font-semibold" : "text-foreground/60"
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* Programs Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60 group-hover:text-foreground">
              Programs
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute left-0 top-full hidden pt-2 group-hover:block">
              <div className="rounded-lg border border-border bg-background shadow-lg">
                <div className="grid w-[700px] gap-4 p-4 md:grid-cols-3">
                  {programs.map((program) => (
                    <div key={program.page} className="space-y-3">
                      <button
                        onClick={() => onNavigate(program.page)}
                        className="flex w-full select-none items-start gap-3 rounded-md p-2 transition-colors hover:bg-accent/50"
                      >
                        <program.icon className="mt-0.5 h-5 w-5 text-foreground flex-shrink-0" />
                        <div className="text-left">
                          <div className="text-sm font-semibold text-foreground">{program.label}</div>
                          <p className="text-xs text-foreground/60 line-clamp-2">
                            {program.description}
                          </p>
                        </div>
                      </button>
                      <ul className="space-y-1 border-l border-border/50 pl-3 ml-4">
                        {program.subPrograms.map((sub) => (
                          <li key={sub.id}>
                            <button
                              onClick={() => onNavigate(`sub-program-${sub.id}`)}
                              className="text-xs text-foreground/60 hover:text-foreground hover:font-medium transition-colors"
                            >
                              {sub.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Remaining Nav Items */}
          {navItems.slice(2).map((item) => (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className={`text-sm font-medium transition-colors hover:text-foreground/80 ${
                currentPage === item.page ? "text-foreground font-semibold" : "text-foreground/60"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            className="hidden sm:inline-flex"
            onClick={() => onNavigate("contact")}
          >
            Contact Us
          </Button>
          <Button 
            variant="default" 
            className="hidden sm:inline-flex"
            onClick={() => onNavigate("donate")}
          >
            Donate
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <nav className="flex flex-col gap-2">
              {navItems.slice(0, 2).map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page)
                    setMobileMenuOpen(false)
                  }}
                  className={`rounded-md px-3 py-2 text-left text-sm font-medium transition-colors hover:bg-accent ${
                    currentPage === item.page ? "bg-accent" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile Programs Accordion */}
              <div>
                <button
                  onClick={() => setProgramsOpen(!programsOpen)}
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium transition-colors hover:bg-accent"
                >
                  Programs
                  <ChevronDown className={`h-4 w-4 transition-transform ${programsOpen ? "rotate-180" : ""}`} />
                </button>
                {programsOpen && (
                  <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-border pl-3">
                    {programs.map((program) => (
                      <button
                        key={program.page}
                        onClick={() => {
                          onNavigate(program.page)
                          setMobileMenuOpen(false)
                        }}
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-accent"
                      >
                        <program.icon className="h-4 w-4 text-muted-foreground" />
                        {program.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {navItems.slice(2).map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page)
                    setMobileMenuOpen(false)
                  }}
                  className={`rounded-md px-3 py-2 text-left text-sm font-medium transition-colors hover:bg-accent ${
                    currentPage === item.page ? "bg-accent" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
                <Button 
                  variant="ghost" 
                  className="justify-start"
                  onClick={() => {
                    onNavigate("contact")
                    setMobileMenuOpen(false)
                  }}
                >
                  Contact Us
                </Button>
                <Button 
                  variant="default"
                  onClick={() => {
                    onNavigate("donate")
                    setMobileMenuOpen(false)
                  }}
                >
                  Donate
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
