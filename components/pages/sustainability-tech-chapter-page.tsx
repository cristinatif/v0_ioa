'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Download, HelpCircle, CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react'
import {
  reportData,
  chapterRoute,
  type ReportChapter,
} from '@/lib/sustainability-tech-report'
import { ChapterNav } from '@/components/sustainability-tech/chapter-nav'
import { DownloadModal } from '@/components/sustainability-tech/download-modal'

interface SustainabilityTechChapterPageProps {
  chapter: ReportChapter
  onNavigate: (page: string) => void
  /** Back to the report's main page. */
  onBackToReport: () => void
}

export function SustainabilityTechChapterPage({
  chapter,
  onNavigate,
  onBackToReport,
}: SustainabilityTechChapterPageProps) {
  const [downloadOpen, setDownloadOpen] = useState(false)

  const index = reportData.chapters.findIndex((c) => c.slug === chapter.slug)
  const prev = index > 0 ? reportData.chapters[index - 1] : undefined
  const next = index < reportData.chapters.length - 1 ? reportData.chapters[index + 1] : undefined

  return (
    <div className="min-h-screen bg-white">
      {/* Hero del capítulo */}
      <div className="relative w-full h-72 bg-gradient-to-b from-slate-300 to-slate-200">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 h-full flex flex-col justify-center">
          <button
            onClick={onBackToReport}
            className="mb-6 w-fit inline-flex items-center text-white hover:text-white/80 transition-colors"
          >
            ← Back to report
          </button>
          <p className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-2">
            Chapter {chapter.number}
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl max-w-4xl">
            {chapter.title}
          </h1>
        </div>
      </div>

      {/* Content + Sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Post (contenido del capítulo) */}
          <article className="lg:col-span-2 space-y-12">
            {/* Summary */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Summary</h2>
              <p className="text-slate-700 leading-relaxed text-lg">{chapter.summary}</p>
              <div className="mt-6">
                <Button onClick={() => setDownloadOpen(true)}>
                  <Download className="mr-2 h-4 w-4" />
                  Download this chapter
                </Button>
              </div>
            </section>

            {/* Chapter topics */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What you will find in the report</h2>
              <ul className="space-y-3">
                {chapter.topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{topic}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Chapter key questions */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Key questions</h2>
              <div className="space-y-4">
                {chapter.keyQuestions.map((question, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5"
                  >
                    <HelpCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700 font-medium">{question}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Navegación anterior / siguiente */}
            <nav className="flex items-stretch justify-between gap-4 border-t border-slate-200 pt-8">
              {prev ? (
                <button
                  onClick={() => onNavigate(chapterRoute(prev.slug))}
                  className="group flex flex-1 items-center gap-3 rounded-lg border border-slate-200 p-4 text-left transition-colors hover:bg-slate-50"
                >
                  <ArrowLeft className="h-5 w-5 flex-shrink-0 text-slate-400 group-hover:text-slate-700" />
                  <span>
                    <span className="block text-xs text-slate-400">Previous chapter</span>
                    <span className="block text-sm font-medium text-slate-800">{prev.title}</span>
                  </span>
                </button>
              ) : (
                <span className="flex-1" />
              )}
              {next ? (
                <button
                  onClick={() => onNavigate(chapterRoute(next.slug))}
                  className="group flex flex-1 items-center justify-end gap-3 rounded-lg border border-slate-200 p-4 text-right transition-colors hover:bg-slate-50"
                >
                  <span>
                    <span className="block text-xs text-slate-400">Next chapter</span>
                    <span className="block text-sm font-medium text-slate-800">{next.title}</span>
                  </span>
                  <ArrowRight className="h-5 w-5 flex-shrink-0 text-slate-400 group-hover:text-slate-700" />
                </button>
              ) : (
                <span className="flex-1" />
              )}
            </nav>
          </article>

          {/* Sidebar: navegación de capítulos */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <ChapterNav onNavigate={onNavigate} activeSlug={chapter.slug} />
            </div>
          </aside>
        </div>
      </div>

      <DownloadModal open={downloadOpen} onOpenChange={setDownloadOpen} />
    </div>
  )
}
