'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CheckCircle2, Download } from 'lucide-react'

interface DownloadModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DownloadModal({ open, onOpenChange }: DownloadModalProps) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [company, setCompany] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const resetState = () => {
    setFullName('')
    setEmail('')
    setJobTitle('')
    setCompany('')
    setCity('')
    setCountry('')
    setSubmitted(false)
    setError('')
  }

  const handleOpenChange = (next: boolean) => {
    if (!next) resetState()
    onOpenChange(next)
  }

  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!fullName.trim()) {
      setError('Please enter your full name.')
      return
    }
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.')
      return
    }
    if (!jobTitle.trim()) {
      setError('Please enter your job title.')
      return
    }
    if (!company.trim()) {
      setError('Please enter your company.')
      return
    }
    if (!city.trim()) {
      setError('Please enter your city.')
      return
    }
    if (!country.trim()) {
      setError('Please enter your country.')
      return
    }
    setError('')
    // TODO: connect the actual PDF download and/or data submission here.
    // For now we just simulate a successful submission.
    setSubmitted(true)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle>Download the report</DialogTitle>
              <DialogDescription>
                To download the report, please subscribe here.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div className="space-y-2">
                <Label htmlFor="dl-fullname">Full name</Label>
                <Input
                  id="dl-fullname"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your full name"
                  autoComplete="name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dl-email">Email address</Label>
                <Input
                  id="dl-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dl-jobtitle">Job title</Label>
                <Input
                  id="dl-jobtitle"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="Your job title"
                  autoComplete="organization-title"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dl-company">Company</Label>
                <Input
                  id="dl-company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Your company"
                  autoComplete="organization"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dl-city">City</Label>
                  <Input
                    id="dl-city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Your city"
                    autoComplete="address-level2"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dl-country">Country</Label>
                  <Input
                    id="dl-country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Your country"
                    autoComplete="country-name"
                  />
                </div>
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center text-center py-4">
            <CheckCircle2 className="h-12 w-12 text-green-600 mb-4" />
            <DialogTitle className="mb-2">Thank you, {fullName.split(' ')[0]}!</DialogTitle>
            <DialogDescription>
              We've recorded your details. The report download will be available soon.
            </DialogDescription>
            <Button className="mt-6 w-full" onClick={() => handleOpenChange(false)}>
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
