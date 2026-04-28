"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Play, Headphones, Clock, Calendar, ExternalLink } from "lucide-react"

interface PodcastPageProps {
  onBack: () => void
}

export function PodcastPage({ onBack }: PodcastPageProps) {
  const episodes = [
    {
      id: 1,
      title: "Energy Unwrapped! - Mexico's Energy Crossroads",
      host: "Chris Sladen",
      date: "January 5, 2026",
      duration: "42 min",
      description: "Exploring the challenges and opportunities facing Mexico's energy sector under new leadership.",
    },
    {
      id: 2,
      title: "Energy Unwrapped! - Critical Minerals Outlook",
      host: "Chris Sladen",
      date: "December 9, 2025",
      duration: "38 min",
      description: "Understanding the critical minerals supply chain and its implications for the Americas.",
    },
    {
      id: 3,
      title: "Energy Unwrapped! - La Jolla Conference Recap",
      host: "Chris Sladen",
      date: "October 29, 2025",
      duration: "55 min",
      description: "Key takeaways from the 2025 La Jolla Energy Conference.",
    },
    {
      id: 4,
      title: "Energy Unwrapped! - Sustainable Shipping",
      host: "Chris Sladen",
      date: "September 15, 2025",
      duration: "45 min",
      description: "How Latin American ports are leading the way in maritime decarbonization.",
    },
    {
      id: 5,
      title: "Energy Unwrapped! - Nearshoring Opportunities",
      host: "Chris Sladen",
      date: "August 20, 2025",
      duration: "40 min",
      description: "The CaliBaja region and the future of North American manufacturing.",
    },
    {
      id: 6,
      title: "Energy Unwrapped! - Water Security in the Americas",
      host: "Chris Sladen",
      date: "July 8, 2025",
      duration: "48 min",
      description: "Addressing water scarcity and management challenges across the hemisphere.",
    },
  ]

  const platforms = [
    { name: "Apple Podcasts", icon: "🎧" },
    { name: "Spotify", icon: "🎵" },
    { name: "Google Podcasts", icon: "🔊" },
    { name: "Amazon Music", icon: "📻" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Full-Width Hero with Overlay */}
      <div className="relative w-full h-80 bg-gradient-to-b from-slate-300 to-slate-200">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 h-full flex flex-col justify-center">
          <Button variant="ghost" className="mb-6 w-fit text-white hover:bg-white/20" onClick={onBack}>
            Back to Home
          </Button>
          <div className="flex items-center gap-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-white/20 border border-white/30">
              <Headphones className="h-10 w-10 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-white/80">
                IOA Podcast
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Energy Unwrapped!</h1>
              <p className="mt-2 text-lg text-white/90">Hosted by Chris Sladen</p>
            </div>
          </div>
        </div>
      </div>

      {/* Listen On */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm font-medium text-muted-foreground">Listen on:</span>
            {platforms.map((platform) => (
              <Button key={platform.name} variant="outline" size="sm" className="gap-2">
                {platform.icon} {platform.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Episodes */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold">Latest Episodes</h2>
        <div className="mt-8 grid gap-4">
          {episodes.map((episode) => (
            <Card key={episode.id} className="group transition-all hover:shadow-md">
              <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
                <button className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-border bg-muted transition-colors group-hover:bg-foreground group-hover:text-background">
                  <Play className="h-6 w-6" />
                </button>
                <div className="flex-1">
                  <CardTitle className="text-lg">{episode.title}</CardTitle>
                  <CardDescription className="mt-1">{episode.description}</CardDescription>
                  <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {episode.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {episode.duration}
                    </span>
                    <span>Host: {episode.host}</span>
                  </div>
                </div>
                <Button variant="outline" className="flex-shrink-0">
                  Listen Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline">Load More Episodes</Button>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Never Miss an Episode</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Subscribe to our podcast and get notified when new episodes are released.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {platforms.map((platform) => (
                <Button key={platform.name} variant="outline">
                  {platform.icon} {platform.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
