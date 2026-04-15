'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface PeopleSectionProps {
  onNavigate?: (page: string) => void
}

export function PeopleSection({ onNavigate }: PeopleSectionProps = {}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet Our People</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            The Institute of the Americas brings together diverse experts and leaders from across the hemisphere to drive innovation and foster hemispheric cooperation.
          </p>
          <div className="mt-8">
            <Button 
              size="lg" 
              className="bg-white text-slate-900 hover:bg-slate-100"
              onClick={() => onNavigate?.('about')}
            >
              Explore Our Full Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
