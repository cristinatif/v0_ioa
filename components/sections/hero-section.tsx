"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

interface HeroSectionProps {
  onNavigate: (page: string) => void
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Full-Width Hero with Overlay */}
      <div className="relative w-full h-96 bg-gradient-to-b from-slate-300 to-slate-200">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 h-full flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
            [Hero Section]
          </p>
          <p className="text-sm font-medium uppercase tracking-wider text-white/80">
            For over 40 years
          </p>
          <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building Bridges Across the Americas
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            The Institute of the Americas promotes sound public policy and fosters cooperation between public and private sector stakeholders across the hemisphere, emphasizing innovation and technological advancement.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" onClick={() => onNavigate("about")}>
              Learn About Our Mission
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => onNavigate("events")}>
              <Play className="mr-2 h-4 w-4" />
              Upcoming Events
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Cards */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">The Pulse of the Americas</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">Key moments and insights driving our work across the Americas.</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <p className="text-sm font-medium text-slate-600">Featured Event</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">La Jolla Energy Conference 2026</h3>
            <p className="mt-2 text-sm text-slate-600">35 years at the center of the energy debate.</p>
            <Button variant="link" className="mt-4 h-auto p-0 text-blue-600 hover:text-blue-800" onClick={() => onNavigate("sub-program-la-jolla-conference")}>
              Learn more <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <p className="text-sm font-medium text-slate-600">Latest Report</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">2025 Annual Report</h3>
            <p className="mt-2 text-sm text-slate-600">Working toward a sustainable future for the Americas.</p>
            <Button variant="link" className="mt-4 h-auto p-0 text-blue-600 hover:text-blue-800" onClick={() => onNavigate("library")}>
              Read here <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <p className="text-sm font-medium text-slate-600">Global Event</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">Madrid Energy Conference 2026</h3>
            <p className="mt-2 text-sm text-slate-600">Where Europe and The Americas meet for Energy Dialogue.</p>
            <Button variant="link" className="mt-4 h-auto p-0 text-blue-600 hover:text-blue-800" onClick={() => onNavigate("events")}>
              Register now <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
