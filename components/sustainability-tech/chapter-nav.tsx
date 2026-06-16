'use client'

import { FileText } from 'lucide-react'
import { reportData, chapterRoute, REPORT_ROUTE } from '@/lib/sustainability-tech-report'

interface ChapterNavProps {
  onNavigate: (page: string) => void
  /** Slug of the active chapter, if any (to highlight it). */
  activeSlug?: string
}

export function ChapterNav({ onNavigate, activeSlug }: ChapterNavProps) {
  const isFullActive = !activeSlug
  return (
    <nav className="rounded-lg border border-slate-200 bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
        Report chapters
      </p>
      <ol className="space-y-1">
        <li>
          <button
            onClick={() => onNavigate(REPORT_ROUTE)}
            aria-current={isFullActive ? 'page' : undefined}
            className={`flex w-full items-center gap-3 rounded-md p-2 text-left transition-colors ${
              isFullActive ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <span
              className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${
                isFullActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
              }`}
            >
              <FileText className="h-3.5 w-3.5" />
            </span>
            <span className="text-sm font-semibold leading-snug">Full report</span>
          </button>
        </li>
        {reportData.chapters.map((chapter) => {
          const isActive = chapter.slug === activeSlug
          return (
            <li key={chapter.slug}>
              <button
                onClick={() => onNavigate(chapterRoute(chapter.slug))}
                aria-current={isActive ? 'page' : undefined}
                className={`flex w-full items-start gap-3 rounded-md p-2 text-left transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span
                  className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                    isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {chapter.number}
                </span>
                <span className="text-sm leading-snug">{chapter.title}</span>
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
