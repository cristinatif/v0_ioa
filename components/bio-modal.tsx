'use client'

import { useState } from 'react'
import { X, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface BioModalProps {
  member: {
    name: string
    position: string
    photo: string
    bio: string
  } | null
  isOpen: boolean
  onClose: () => void
}

export function BioModal({ member, isOpen, onClose }: BioModalProps) {
  if (!isOpen || !member) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">{member.name}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex gap-6">
            <img
              src={member.photo}
              alt={member.name}
              className="w-32 h-32 rounded-lg object-cover flex-shrink-0"
            />
            <div>
              <p className="text-lg font-semibold text-blue-600 mb-4">{member.position}</p>
              <p className="text-gray-700 leading-relaxed">{member.bio}</p>
            </div>
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            <Download className="w-4 h-4 mr-2" />
            Download Bio (PDF)
          </Button>
        </div>
      </div>
    </div>
  )
}
