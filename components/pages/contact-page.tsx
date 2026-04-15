"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Mail, Phone, MapPin, Clock } from "lucide-react"

interface ContactPageProps {
  onBack: () => void
}

export function ContactPage({ onBack }: ContactPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Full-Width Hero with Overlay */}
      <div className="relative w-full h-80 bg-gradient-to-b from-slate-300 to-slate-200">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 h-full flex flex-col justify-center">
          <Button variant="ghost" className="mb-6 w-fit text-white hover:bg-white/20" onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-xl text-white/90">
            Reach out to learn more about our programs and initiatives.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold">Send us a Message</h2>
            <p className="mt-2 text-muted-foreground">
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>

            <form className="mt-8 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="organization" className="text-sm font-medium">
                  Organization
                </label>
                <Input id="organization" placeholder="Your company or institution" />
              </div>

              <div className="space-y-2">
                <label htmlFor="topic" className="text-sm font-medium">
                  Topic
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="programs">Programs Information</SelectItem>
                    <SelectItem value="events">Events & Conferences</SelectItem>
                    <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                    <SelectItem value="facilities">Facility Rental</SelectItem>
                    <SelectItem value="media">Media Inquiry</SelectItem>
                    <SelectItem value="donation">Donation Information</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="How can we help you?" 
                  rows={5}
                />
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <p className="mt-2 text-muted-foreground">
              Reach out to us directly through any of these channels.
            </p>

            <div className="mt-8 space-y-6">
              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Institute of the Americas<br />
                      10111 N Torrey Pines Road<br />
                      La Jolla, CA 92037
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      +1 (858) 453-5560
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      info@iamericas.org
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Office Hours</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Monday - Friday: 9:00 AM - 5:00 PM (PST)<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
