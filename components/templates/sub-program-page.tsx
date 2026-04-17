'use client'

import { Download, Droplet, TrendingUp, Leaf, Handshake, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ResourceCardProps {
  title: string
  type: string
  language?: string
}

function ResourceCard({ title, type, language }: ResourceCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">
          {type}
          {language && ` • ${language}`}
        </span>
        <Button size="sm" variant="outline" className="gap-1">
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">Download</span>
        </Button>
      </div>
    </div>
  )
}

interface SubProgramPageProps {
  programName: string
  subtitle: string
  overviewSections?: string[]
  overview?: string
  alignmentTitle: string
  alignmentContent: string[]
  alignmentDescription?: string
  resources: Array<{ title: string; type: string; language?: string }>
  partners: { primary: string[]; supporters: string[] }
  contactName: string
  contactTitle: string
  onClose: () => void
}

const alignmentIcons = [
  Leaf,
  TrendingUp,
  Droplet,
  Handshake,
  BookOpen
]

export function SubProgramPage({
  programName,
  subtitle,
  overviewSections,
  overview,
  alignmentTitle,
  alignmentContent,
  alignmentDescription,
  resources,
  partners,
  contactName,
  contactTitle,
  onClose,
}: SubProgramPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Overlay */}
      <div className="relative w-full h-80 bg-gradient-to-b from-slate-300 to-slate-200">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 h-full flex flex-col justify-center">
          <button 
            onClick={onClose}
            className="mb-6 w-fit inline-flex items-center text-white hover:text-white/80 transition-colors"
          >
            ← Back
          </button>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{programName}</h1>
          <p className="mt-4 max-w-2xl text-xl text-white/90">{subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Project Overview - Dynamic Sections */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Project Overview</h2>
          <div className="space-y-4">
            {overviewSections ? (
              overviewSections.map((section, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <span className="text-blue-600 font-bold mt-1 flex-shrink-0">•</span>
                  <p className="text-slate-700 leading-relaxed flex-grow">{section}</p>
                </div>
              ))
            ) : (
              <p className="text-slate-700 leading-relaxed">{overview}</p>
            )}
          </div>
        </section>

        {/* Alignment with Program - Enhanced with Icons */}
        <section className="mb-16 bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg p-8 border border-blue-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">{alignmentTitle}</h2>
          {alignmentDescription && (
            <p className="text-slate-700 mb-8 leading-relaxed">{alignmentDescription}</p>
          )}
          <div className="grid grid-cols-5 gap-4">
            {alignmentContent.map((item, index) => {
              const IconComponent = alignmentIcons[index % alignmentIcons.length]
              return (
                <div key={index} className="flex flex-col items-center gap-3 bg-white p-4 rounded-lg border border-blue-100 hover:shadow-md transition-shadow text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">{item}</span>
                </div>
              )
            })}
          </div>
        </section>

        {/* Resources & Publications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Publications & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <ResourceCard key={index} {...resource} />
            ))}
          </div>
        </section>

        {/* Partners */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Partners & Support</h2>
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">In Partnership With</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-100 p-6 rounded-lg border border-slate-200">
              {partners.primary.map((partner, index) => (
                <div key={index} className="bg-white p-6 rounded flex items-center justify-center min-h-28 border border-slate-200 hover:shadow-md transition-shadow">
                  <p className="text-center text-sm font-semibold text-slate-600">{partner}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Made Possible By</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-lg border border-slate-200">
              {partners.supporters.map((supporter, index) => (
                <div key={index} className="bg-white p-6 rounded flex items-center justify-center min-h-28 border border-slate-200 hover:shadow-md transition-shadow">
                  <p className="text-center text-sm font-semibold text-slate-600">{supporter}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Contact</h2>
          <div className="mb-6">
            <p className="font-semibold text-gray-900 text-lg">{contactName}</p>
            <p className="text-blue-600 font-medium">{contactTitle}</p>
            <p className="text-gray-700 text-sm mt-2">Institute of the Americas</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">Send Message</Button>
        </section>
      </div>
    </div>
  )
}
