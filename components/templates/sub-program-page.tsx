'use client'

import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ResourceCardProps {
  title: string
  type: string
  language?: string
}

function ResourceCard({ title, type, language }: ResourceCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
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
  overview: string
  alignmentTitle: string
  alignmentContent: string[]
  resources: Array<{ title: string; type: string; language?: string }>
  partners: { primary: string[]; supporters: string[] }
  contactName: string
  contactTitle: string
  onClose: () => void
}

export function SubProgramPage({
  programName,
  subtitle,
  overview,
  alignmentTitle,
  alignmentContent,
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
        {/* Project Overview - Two Column */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Project Overview</h2>
          <p className="text-slate-700 leading-relaxed">{overview}</p>
        </section>

        {/* Alignment with Program */}
        <section className="mb-12 bg-slate-50 rounded-lg p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">{alignmentTitle}</h2>
          <ul className="space-y-3">
            {alignmentContent.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-slate-700">
                <span className="text-slate-400 font-bold mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Resources & Publications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Publications & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <ResourceCard key={index} {...resource} />
            ))}
          </div>
        </section>

        {/* Partners */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Partners & Support</h2>
          <div className="mb-8">
            <h3 className="font-semibold text-slate-900 mb-4">In Partnership With</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 bg-slate-100 p-6 rounded-lg border border-slate-200">
              {partners.primary.map((partner, index) => (
                <div key={index} className="bg-white p-4 rounded flex items-center justify-center h-24 border border-slate-200">
                  <p className="text-center text-sm font-semibold text-slate-600">{partner}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Made Possible By</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 bg-slate-50 p-6 rounded-lg border border-slate-200">
              {partners.supporters.map((supporter, index) => (
                <div key={index} className="bg-white p-4 rounded flex items-center justify-center h-24 border border-slate-200">
                  <p className="text-center text-sm font-semibold text-slate-600">{supporter}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Project Contact</h2>
          <div className="mb-4">
            <p className="font-semibold text-gray-900">{contactName}</p>
            <p className="text-blue-600">{contactTitle}</p>
            <p className="text-gray-700 text-sm mt-1">Institute of the Americas</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">Send Message</Button>
        </section>
      </div>
    </div>
  )
}
