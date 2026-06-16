'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Download, HelpCircle, CheckCircle2 } from 'lucide-react'
import { reportData } from '@/lib/sustainability-tech-report'
import { ChapterNav } from '@/components/sustainability-tech/chapter-nav'
import { DownloadModal } from '@/components/sustainability-tech/download-modal'

interface SustainabilityTechAssessmentPageProps {
  onClose: () => void
  onNavigate: (page: string) => void
}

export function SustainabilityTechAssessmentPage({
  onClose,
  onNavigate,
}: SustainabilityTechAssessmentPageProps) {
  const [downloadOpen, setDownloadOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full h-80 bg-gradient-to-b from-slate-300 to-slate-200">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 h-full flex flex-col justify-center">
          <button
            onClick={onClose}
            className="mb-6 w-fit inline-flex items-center text-white hover:text-white/80 transition-colors"
          >
            ← Back
          </button>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl max-w-4xl">
            {reportData.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">{reportData.subtitle}</p>
        </div>
      </div>

      {/* Content + Sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Summary */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Summary</h2>
              <p className="text-slate-700 leading-relaxed text-lg">{reportData.summary}</p>
              <div className="mt-8">
                <Button size="lg" onClick={() => setDownloadOpen(true)}>
                  <Download className="mr-2 h-5 w-5" />
                  Download full report
                </Button>
              </div>
            </section>

            {/* Topics */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">What you will find in the report</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {reportData.topics.map((topic, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{topic}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Key questions */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Key questions</h2>
              <div className="space-y-4">
                {reportData.keyQuestions.map((question, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5"
                  >
                    <HelpCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700 font-medium">{question}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Download CTA */}
            <section className="rounded-lg bg-slate-900 p-8 text-white">
              <h2 className="text-2xl font-bold mb-3">Access the full report</h2>
              <p className="text-slate-300 mb-6 max-w-2xl">
                Download the complete document with the detailed analysis of sustainability
                technologies and policy solutions for Latin America and the Caribbean.
              </p>
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100"
                onClick={() => setDownloadOpen(true)}
              >
                <Download className="mr-2 h-5 w-5" />
                Download full report
              </Button>
            </section>
          </div>

          {/* Sidebar: navegación de capítulos */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <ChapterNav onNavigate={onNavigate} />
            </div>
          </aside>
        </div>
      </div>

      <DownloadModal open={downloadOpen} onOpenChange={setDownloadOpen} />
    </div>
  )
}
