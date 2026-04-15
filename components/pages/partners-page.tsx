"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"

interface PartnersPageProps {
  onBack: () => void
}

export function PartnersPage({ onBack }: PartnersPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full h-80 bg-gradient-to-b from-slate-300 to-slate-200">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 h-full flex flex-col justify-center">
          <Button variant="ghost" className="mb-6 w-fit text-white hover:bg-white/20" onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Partners & Collaborators</h1>
          <p className="mt-4 max-w-2xl text-xl text-white/90">
            Building bridges with leading organizations across the Americas.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Tabs defaultValue="academic" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-100">
            <TabsTrigger value="academic" className="data-[state=active]:bg-white">Academic</TabsTrigger>
            <TabsTrigger value="corporate" className="data-[state=active]:bg-white">Corporate</TabsTrigger>
            <TabsTrigger value="government" className="data-[state=active]:bg-white">Government</TabsTrigger>
            <TabsTrigger value="nonprofit" className="data-[state=active]:bg-white">Nonprofit</TabsTrigger>
          </TabsList>

          <TabsContent value="academic" className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "UC San Diego", description: "Primary academic partner and host institution" },
                { name: "Stanford University", description: "Research collaboration partner" },
                { name: "UNAM", description: "Mexico's leading university partner" },
                { name: "Universidad de Chile", description: "South American academic partner" },
              ].map((partner) => (
                <Card key={partner.name} className="border border-slate-200 shadow-sm overflow-hidden">
                  <div className="w-full h-40 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-sm font-medium text-slate-600">Logo</div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-900">{partner.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600">{partner.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="corporate" className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Energy Company 1", description: "Major energy sector sponsor" },
                { name: "Finance Corp", description: "Financial services partner" },
                { name: "Tech Solutions", description: "Technology and innovation partner" },
              ].map((partner) => (
                <Card key={partner.name} className="border border-slate-200 shadow-sm overflow-hidden">
                  <div className="w-full h-40 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-sm font-medium text-slate-600">Logo</div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-900">{partner.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600">{partner.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="government" className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "U.S. State Department", description: "Policy collaboration" },
                { name: "Mexican Embassy", description: "Diplomatic partner" },
                { name: "IDB", description: "Development finance partner" },
              ].map((partner) => (
                <Card key={partner.name} className="border border-slate-200 shadow-sm overflow-hidden">
                  <div className="w-full h-40 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-sm font-medium text-slate-600">Logo</div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-900">{partner.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600">{partner.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="nonprofit" className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Conservation NGO", description: "Environmental initiatives partner" },
                { name: "Trade Association", description: "Industry collaboration" },
                { name: "Think Tank", description: "Policy research partner" },
              ].map((partner) => (
                <Card key={partner.name} className="border border-slate-200 shadow-sm overflow-hidden">
                  <div className="w-full h-40 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-sm font-medium text-slate-600">Logo</div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-900">{partner.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600">{partner.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
