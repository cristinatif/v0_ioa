"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Heart, Gift, Users, Globe, Check } from "lucide-react"

interface DonatePageProps {
  onBack: () => void
}

export function DonatePage({ onBack }: DonatePageProps) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100)
  const [customAmount, setCustomAmount] = useState("")

  const amounts = [50, 100, 250, 500, 1000, 2500]

  const impactAreas = [
    {
      icon: Users,
      title: "Future Leaders",
      description: "Support emerging professionals through our leadership development programs.",
    },
    {
      icon: Globe,
      title: "Research & Policy",
      description: "Fund critical research on energy, environment, and economic development.",
    },
    {
      icon: Gift,
      title: "Events & Convening",
      description: "Enable high-impact conferences and forums that shape regional dialogue.",
    },
  ]

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setSelectedAmount(null)
  }

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
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Support Our Mission</h1>
          <p className="mt-4 max-w-2xl text-xl text-white/90">
            Your contribution helps advance cooperation and policy innovation across the Americas.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Donation Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Make a Donation</CardTitle>
                <CardDescription>
                  Choose an amount or enter a custom donation.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Amount Selection */}
                <div>
                  <label className="text-sm font-medium">Select Amount</label>
                  <div className="mt-3 grid grid-cols-3 gap-3">
                    {amounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => handleAmountSelect(amount)}
                        className={`rounded-lg border p-4 text-center transition-all ${
                          selectedAmount === amount
                            ? "border-foreground bg-foreground text-background"
                            : "border-border hover:border-foreground"
                        }`}
                      >
                        <span className="text-lg font-semibold">${amount}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount */}
                <div>
                  <label htmlFor="customAmount" className="text-sm font-medium">
                    Or Enter Custom Amount
                  </label>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-lg font-medium">$</span>
                    <Input
                      id="customAmount"
                      type="number"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => handleCustomAmountChange(e.target.value)}
                      className="max-w-[200px]"
                    />
                  </div>
                </div>

                {/* Donation Type */}
                <div>
                  <label className="text-sm font-medium">Donation Type</label>
                  <div className="mt-3 flex gap-4">
                    <label className="flex cursor-pointer items-center gap-2">
                      <input type="radio" name="type" defaultChecked className="h-4 w-4" />
                      <span className="text-sm">One-time</span>
                    </label>
                    <label className="flex cursor-pointer items-center gap-2">
                      <input type="radio" name="type" className="h-4 w-4" />
                      <span className="text-sm">Monthly</span>
                    </label>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="space-y-4 border-t border-border pt-6">
                  <h3 className="font-medium">Your Information</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="donorFirstName" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input id="donorFirstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="donorLastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="donorLastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="donorEmail" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="donorEmail" type="email" placeholder="john@example.com" />
                  </div>
                </div>

                <Button size="lg" className="w-full">
                  Donate ${selectedAmount || customAmount || "0"}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  The Institute of the Americas is a 501(c)(3) nonprofit organization. Your donation is tax-deductible to the extent allowed by law.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Impact Areas */}
          <div>
            <h2 className="text-2xl font-bold">Your Impact</h2>
            <p className="mt-2 text-muted-foreground">
              Your generous contribution supports critical initiatives across the Americas.
            </p>

            <div className="mt-8 space-y-4">
              {impactAreas.map((area, index) => (
                <Card key={index}>
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                      <area.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{area.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{area.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Why Give */}
            <div className="mt-8 rounded-lg border border-border bg-muted/30 p-6">
              <h3 className="font-semibold">Why Give to IOA?</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 text-foreground" />
                  <span className="text-muted-foreground">
                    Over 40 years of impact across the Americas
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 text-foreground" />
                  <span className="text-muted-foreground">
                    Trusted partner of governments, businesses, and academia
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 text-foreground" />
                  <span className="text-muted-foreground">
                    100% of donations support programs and research
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 text-foreground" />
                  <span className="text-muted-foreground">
                    Tax-deductible contribution to a 501(c)(3) organization
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact for Major Gifts */}
            <div className="mt-8 rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold">Major Gifts & Planned Giving</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                For donations of $10,000 or more, or to discuss planned giving options, please contact our development team.
              </p>
              <Button variant="outline" className="mt-4">
                Contact Development Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
