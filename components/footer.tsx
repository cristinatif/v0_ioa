"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Twitter, Linkedin, Youtube, Facebook, Instagram, Mail } from "lucide-react"

interface FooterProps {
  onNavigate: (page: string) => void
}

export function Footer({ onNavigate }: FooterProps) {
  const footerLinks = {
    programs: [
      { label: "Energy Program", page: "energy" },
      { label: "Environment Program", page: "environment" },
      { label: "Economic Competitiveness", page: "economic" },
    ],
    about: [
      { label: "Our Mission", page: "about" },
      { label: "Our Board", page: "about" },
      { label: "Our Team", page: "about" },
      { label: "Annual Report", page: "about" },
    ],
    resources: [
      { label: "Digital Library", page: "library" },
      { label: "Events", page: "events" },
      { label: "Podcast", page: "podcast" },
      { label: "Facilities", page: "facilities" },
    ],
  }

  const socialLinks = [
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" },
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
  ]

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-foreground">
                <span className="text-xs font-bold">IOA</span>
              </div>
              <div>
                <p className="text-sm font-semibold leading-tight">Institute of</p>
                <p className="text-sm font-semibold leading-tight">the Americas</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              For over 40 years, the Institute of the Americas has promoted sound public policy and fostered cooperation between public and private sector stakeholders across the hemisphere.
            </p>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <p className="text-sm font-medium">Subscribe to our newsletter</p>
              <div className="mt-2 flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="max-w-[240px]"
                />
                <Button variant="default" size="icon">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Programs Links */}
          <div>
            <h3 className="text-sm font-semibold">Programs</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-sm font-semibold">About</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Institute of the Americas. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Privacy Policy
            </button>
            <button className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
