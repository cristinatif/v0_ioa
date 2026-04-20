'use client'

import { useState } from 'react'
import { ChevronDown, MapPin, Clock, Mail, Phone, X, Download, Users, UserCircle, Menu, Network, BookOpen, Handshake } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface Speaker {
  id: string
  name: string
  title: string
  company: string
  bio: string
}

interface Sponsor {
  id: string
  name: string
  tier: 'gold' | 'silver'
}

interface SteeringCommitteeMember {
  id: string
  name: string
}

interface Partner {
  id: string
  name: string
}

interface AgendaItem {
  time: string
  title: string
  speaker?: string
  description?: string
  format?: string
  questions?: string[]
  speakers?: Array<{ name: string; title: string; bio?: string }>
}

interface AgendaSpeaker {
  name: string
  title: string
  bio?: string
}

function AgendaSpeakerModal({ speaker, isOpen, onClose }: { speaker: Speaker | AgendaSpeaker | null; isOpen: boolean; onClose: () => void }) {
  if (!isOpen || !speaker) return null

  const name = (speaker as Speaker).name || (speaker as AgendaSpeaker).name
  const title = (speaker as Speaker).title || (speaker as AgendaSpeaker).title
  const company = (speaker as Speaker).company || undefined
  const bio = (speaker as Speaker).bio || (speaker as AgendaSpeaker).bio

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex gap-6">
            <div className="w-32 h-32 rounded-lg object-cover flex-shrink-0 bg-gray-300 flex items-center justify-center">
              <Users className="w-12 h-12 text-gray-400" />
            </div>
            <div>
              <p className="text-lg font-semibold text-blue-600 mb-4">{title}{company ? `, ${company}` : ''}</p>
              <p className="text-gray-700 leading-relaxed">{bio || "Learn more about this speaker's background and expertise."}</p>
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

export function ConferencePage({ onGoHome }: { onGoHome: () => void }) {
  const [activeTab, setActiveTab] = useState('day1')
  const [visibleSpeakers, setVisibleSpeakers] = useState(12)
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null)
  const [showSpeakerModal, setShowSpeakerModal] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeNavLink, setActiveNavLink] = useState('agenda')
  const [showAgendaModal, setShowAgendaModal] = useState(false)
  const [expandedAgendaItem, setExpandedAgendaItem] = useState<string | null>(null)

  const speakers: Speaker[] = [
    { id: '1', name: 'Dr. Jane Smith', title: 'Energy Director', company: 'Energy Corp', bio: 'Leading expert in renewable energy policy with 20+ years of experience.' },
    { id: '2', name: 'John Rodriguez', title: 'Climate Policy Director', company: 'Green Future', bio: 'Specializes in climate adaptation and mitigation strategies.' },
    { id: '3', name: 'Maria Garcia', title: 'Sustainable Development Lead', company: 'Clean Power Inc', bio: 'Expert in sustainable energy infrastructure development.' },
    { id: '4', name: 'Dr. Michael Chen', title: 'Research Director', company: 'Solar Systems', bio: 'Pioneer in clean energy innovation and technology assessment.' },
    { id: '5', name: 'Sarah Williams', title: 'Policy Analyst', company: 'Wind Solutions', bio: 'Focuses on energy policy and regulatory frameworks.' },
    { id: '6', name: 'Carlos Mendez', title: 'Infrastructure Expert', company: 'Tech Energy', bio: 'Specializes in energy infrastructure planning and development.' },
    { id: '7', name: 'Dr. Emma Johnson', title: 'Climate Scientist', company: 'Energy Corp', bio: 'Leading researcher in climate impacts and energy transitions.' },
    { id: '8', name: 'David Kumar', title: 'Finance Director', company: 'Green Future', bio: 'Expert in green energy financing and investment strategies.' },
    { id: '9', name: 'Lisa Anderson', title: 'Technology Officer', company: 'Clean Power Inc', bio: 'Leads innovation in renewable energy technologies.' },
    { id: '10', name: 'Roberto Flores', title: 'Environmental Director', company: 'Solar Systems', bio: 'Focuses on environmental impact assessment and mitigation.' },
    { id: '11', name: 'Dr. Patricia Lee', title: 'Academic Lead', company: 'Wind Solutions', bio: 'University researcher specializing in energy systems.' },
    { id: '12', name: 'Miguel Santos', title: 'Community Engagement', company: 'Tech Energy', bio: 'Works on community energy initiatives and education.' },
    { id: '13', name: 'Dr. Anna Mueller', title: 'Energy Efficiency Expert', company: 'Energy Corp', bio: 'Specializes in building efficiency and conservation.' },
    { id: '14', name: 'James Wilson', title: 'Grid Operations', company: 'Green Future', bio: 'Expert in smart grid technology and operations.' },
    { id: '15', name: 'Sofia Romero', title: 'Solar Energy Lead', company: 'Clean Power Inc', bio: 'Pioneering solar energy innovation and implementation.' },
    { id: '16', name: 'Dr. Thomas Brown', title: 'Wind Energy Expert', company: 'Solar Systems', bio: 'Leading researcher in wind power technology.' },
  ]

  const sponsors: Sponsor[] = [
    { id: '1', name: 'Energy Corp', tier: 'gold' },
    { id: '2', name: 'Green Future', tier: 'gold' },
    { id: '3', name: 'Clean Power Inc', tier: 'gold' },
    { id: '4', name: 'Solar Systems', tier: 'silver' },
    { id: '5', name: 'Wind Solutions', tier: 'silver' },
    { id: '6', name: 'Tech Energy', tier: 'silver' },
  ]

  const steeringCommittee: SteeringCommitteeMember[] = [
    { id: '1', name: 'Atlantic Energy' },
    { id: '2', name: 'Pacific Resources' },
    { id: '3', name: 'Continental Group' },
    { id: '4', name: 'Meridian Corp' },
  ]

  const partners: Partner[] = [
    { id: '1', name: 'Global Insight' },
    { id: '2', name: 'Regional Alliance' },
    { id: '3', name: 'Summit Partners' },
    { id: '4', name: 'Horizon Ventures' },
    { id: '5', name: 'Nexus Strategies' },
    { id: '6', name: 'Vanguard Group' },
  ]

  const talentSpeakers: Speaker[] = [
    { id: 't1', name: 'Ana Torres', title: 'Graduate Researcher, Energy Policy', company: 'UC San Diego School of Global Policy and Strategy', bio: 'Focuses on renewable energy policy frameworks in Latin America.' },
    { id: 't2', name: 'James Park', title: 'Graduate Researcher, Climate Economics', company: 'UC San Diego School of Global Policy and Strategy', bio: 'Studies economic impacts of climate adaptation strategies.' },
    { id: 't3', name: 'Sofia Reyes', title: 'Graduate Researcher, Energy Transition', company: 'UC San Diego School of Global Policy and Strategy', bio: 'Researches energy transition pathways for emerging economies.' },
    { id: 't4', name: 'Daniel Kim', title: 'Graduate Researcher, Sustainability', company: 'UC San Diego School of Global Policy and Strategy', bio: 'Analyzes sustainable development models in the Caribbean.' },
  ]

  const agenda: Record<string, AgendaItem[]> = {
    day1: [
      { time: '8:00 AM', title: 'Registration & Breakfast', description: 'Welcome and coffee service' },
      { 
        time: '9:00 AM', 
        title: 'Opening Keynote: The Future of Energy Policy in North America', 
        speaker: 'Dr. Jane Smith',
        format: 'Keynote Speech',
        speakers: [{ name: 'Dr. Jane Smith', title: 'Energy Director' }],
        questions: [
          'Policy evolution in renewable energy',
          'Cross-border energy initiatives',
          'Investment opportunities ahead'
        ]
      },
      { time: '10:30 AM', title: 'Coffee Break' },
      { 
        time: '10:45 AM', 
        title: 'Panel Discussion: Energy Infrastructure', 
        format: 'Panel Poll/Q&A',
        speakers: [
          { name: 'Derek Wong', title: 'Vice President, Government Relations' },
          { name: 'Beth Ann Viola', title: 'Senior Policy Advisor' },
          { name: 'Jimena Blanco', title: 'Senior Research Director' }
        ],
        questions: [
          'Challenges in infrastructure development',
          'Grid modernization strategies',
          'Public-private partnerships',
          'Regional cooperation models'
        ]
      },
      { time: '12:00 PM', title: 'Lunch' },
      { time: '1:00 PM', title: 'Breakout Sessions', description: 'Choose from 4 concurrent sessions' },
      { time: '3:00 PM', title: 'Networking Reception' },
    ],
    day2: [
      { time: '8:30 AM', title: 'Breakfast & Networking' },
      { 
        time: '9:30 AM', 
        title: 'Innovation Showcase: Latest Developments in Renewable Energy',
        format: 'Presentation',
        speakers: [{ name: 'Dr. Michael Chen', title: 'Research Director' }],
        questions: [
          'Emerging technologies in renewables',
          'Cost competitiveness analysis',
          'Scalability of solutions'
        ]
      },
      { 
        time: '11:00 AM', 
        title: 'Workshop: Policy Development',
        format: 'Interactive Workshop',
        speakers: [{ name: 'John Rodriguez', title: 'Climate Policy Director' }],
        questions: [
          'Framework design for energy policies',
          'Stakeholder engagement',
          'Implementation strategies'
        ]
      },
      { time: '12:30 PM', title: 'Lunch' },
      { 
        time: '1:30 PM', 
        title: 'Regional Perspectives Panel', 
        format: 'Panel Discussion',
        speakers: [
          { name: 'Maria Garcia', title: 'Sustainable Development Lead' },
          { name: 'Carlos Mendez', title: 'Infrastructure Expert' }
        ],
        questions: [
          'Regional energy challenges',
          'Country-specific solutions',
          'Cross-border opportunities'
        ]
      },
      { 
        time: '3:00 PM', 
        title: 'Closing Keynote: Technology and Policy - Creating Synergy', 
        format: 'Keynote Speech',
        speakers: [{ name: 'Dr. Michael Chen', title: 'Research Director' }],
        questions: [
          'Future of energy sector',
          'Technology-policy alignment',
          'Investment directions'
        ]
      },
      { time: '4:30 PM', title: 'Closing Reception' },
    ],
  }

  const scrollToSection = (sectionId: string) => {
    setActiveNavLink(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Conference Header - Main Nav */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <button 
            onClick={onGoHome}
            className="flex items-center gap-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-900">
              <span className="text-xs font-bold text-gray-900">IOA</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold leading-tight text-gray-900">Institute of</p>
              <p className="text-sm font-semibold leading-tight text-gray-900">the Americas</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-6">
            {['agenda', 'speakers', 'sponsors', 'accommodation', 'airline', 'contact'].map((link) => (
              <button
                key={link}
                onClick={() => {
                  if (link !== 'accommodation') {
                    scrollToSection(link)
                  }
                }}
                className={`text-sm font-medium transition-colors ${
                  activeNavLink === link
                    ? 'text-gray-900 font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.toUpperCase()}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button 
              className="bg-gray-900 text-gray-100 hover:bg-gray-800 font-semibold text-sm uppercase tracking-wide"
            >
              REGISTER NOW
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-gray-200 bg-white lg:hidden">
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
              <nav className="flex flex-col gap-2">
                {['agenda', 'speakers', 'sponsors', 'accommodation', 'airline', 'contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      if (link !== 'accommodation') {
                        scrollToSection(link)
                      }
                      setMobileMenuOpen(false)
                    }}
                    className={`rounded-md px-3 py-2 text-left text-sm font-medium transition-colors hover:bg-gray-100 ${
                      activeNavLink === link ? 'bg-gray-100 text-gray-900' : 'text-gray-600'
                    }`}
                  >
                    {link.toUpperCase()}
                  </button>
                ))}
                <div className="mt-4 border-t border-gray-200 pt-4">
                  <Button 
                    className="w-full bg-gray-900 text-gray-100 hover:bg-gray-800 font-semibold uppercase tracking-wide"
                  >
                    REGISTER NOW
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="relative w-full h-96 bg-gradient-to-b from-gray-400 to-gray-300">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 h-full flex flex-col justify-center">
          <button 
            onClick={onGoHome}
            className="mb-6 w-fit inline-flex items-center text-white hover:text-white/80 transition-colors"
          >
            ← Back
          </button>
          <h1 className="text-5xl font-bold tracking-tight text-white mb-4">La Jolla Energy Conference</h1>
          <div className="text-xl text-white/90 max-w-2xl space-y-2">
            <p>October 13-15, 2026</p>
            <p>La Jolla, California</p>
            <p className="text-lg font-semibold">35 YEARS AT THE CENTER OF THE ENERGY DEBATE</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Conference History */}
        <section className="mb-20">
          <div className="space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              Launched at a moment of profound change across the hemisphere—marked by privatization, globalization, and regional integration—the La Jolla Energy Conference was created to foster investment and high-level dialogue.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Over the past 35 years, it has become a premier forum for candid, senior-level engagement on energy policy and investment across Latin America and the Caribbean, benefiting from a unique setting that encourages meaningful exchange and lasting connections.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              This XXXV edition of the conference will both celebrate our history and reflect on the sweeping transformations that have reshaped the global energy sector since our founding.
            </p>
          </div>
          <div className="mt-8">
            <Button className="bg-gray-900 text-white hover:bg-gray-800 uppercase tracking-wide">
              HIGHLIGHTS OF LA JOLLA CONFERENCE 2025
            </Button>
          </div>
        </section>

        {/* Why Attend */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Why Attend</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Network', desc: 'Connect with leading energy experts and policymakers', icon: Network },
              { title: 'Learn', desc: 'Explore cutting-edge research and best practices', icon: BookOpen },
              { title: 'Collaborate', desc: 'Identify partnership opportunities across sectors', icon: Handshake },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <div className="h-12 w-12 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Agenda */}
        <section id="agenda" className="mb-20 scroll-mt-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">2026 Agenda</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            This year, we look forward to many interesting discussions around the energy industry's main trends, challenges and opportunities.
          </p>

          {/* Agenda Image Placeholder */}
          <div className="w-full bg-gray-300 h-80 rounded-lg border border-gray-400 mb-12 flex items-center justify-center">
            <p className="text-gray-600 text-lg font-medium">Conference Schedule Visualization</p>
          </div>

          {/* Key Topics */}
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Topics at La Jolla Energy Conference:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start gap-3">
                <span className="text-gray-900 font-bold">•</span>
                <span className="text-gray-700">Geopolitics Great Game 2025: China, the US and Latin America</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-900 font-bold">•</span>
                <span className="text-gray-700">Back to the Future and the Strategic Importance of Energy Security</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-900 font-bold">•</span>
                <span className="text-gray-700">The Pace of the Non-Linear Energy Transition</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-900 font-bold">•</span>
                <span className="text-gray-700">Grid Reliability: Understanding Power System Collapses and Blackouts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-900 font-bold">•</span>
                <span className="text-gray-700">What can we expect from COP30 in Brazil</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-900 font-bold">•</span>
                <span className="text-gray-700">Artificial Intelligence: Game Changer or Too Soon to Tell</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-900 font-bold">•</span>
                <span className="text-gray-700">Natural Gas and LNG – Transition or Evolution</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-900 font-bold">•</span>
                <span className="text-gray-700">Mining, Critical Minerals and Industrialization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-900 font-bold">•</span>
                <span className="text-gray-700">Women in Energy and Workforce Development</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button className="bg-gray-900 text-white hover:bg-gray-800">
              Download Agenda
            </Button>
            <Button 
              variant="outline" 
              className="text-gray-900"
              onClick={() => setShowAgendaModal(true)}
            >
              See Agenda
            </Button>
          </div>
        </section>

        {/* Speakers */}
        <section id="speakers" className="mb-20 scroll-mt-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Speakers 2026</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {speakers.slice(0, visibleSpeakers).map((speaker) => (
              <button
                key={speaker.id}
                onClick={() => {
                  setSelectedSpeaker(speaker)
                  setShowSpeakerModal(true)
                }}
                className="text-left transition-transform hover:scale-105"
              >
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                      <UserCircle className="h-10 w-10 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-base">{speaker.name}</CardTitle>
                    <CardDescription className="mt-1">{speaker.company}</CardDescription>
                  </CardContent>
                </Card>
              </button>
            ))}
          </div>

          {visibleSpeakers < speakers.length && (
            <div className="mt-12 flex justify-center">
              <Button
                variant="outline"
                onClick={() => setVisibleSpeakers(v => v + 12)}
              >
                Load More Speakers
              </Button>
            </div>
          )}
        </section>

        {/* La Jolla's Got Talent */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">La Jolla&apos;s Got Talent</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl">
            At the Institute of the Americas, we believe in the talent and contributions coming from the next generation of energy leaders. This October, we will have UC San Diego School of Global Policy and Strategy graduate students formally participating as part of our agenda and discussions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {talentSpeakers.map((speaker) => (
              <button
                key={speaker.id}
                onClick={() => {
                  setSelectedSpeaker(speaker)
                  setShowSpeakerModal(true)
                }}
                className="text-left transition-transform hover:scale-105"
              >
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                      <UserCircle className="h-10 w-10 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-base">{speaker.name}</CardTitle>
                    <CardDescription className="mt-1">{speaker.company}</CardDescription>
                  </CardContent>
                </Card>
              </button>
            ))}
          </div>
        </section>

        {/* Sponsors */}
        <section id="sponsors" className="mb-20 scroll-mt-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Sponsors</h2>
          
          {/* Gold Sponsors */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-gray-400 uppercase tracking-wider mb-8">Gold</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sponsors.filter(s => s.tier === 'gold').map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="bg-gray-50 h-32 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors group"
                >
                  <p className="text-gray-500 font-semibold group-hover:text-gray-800 transition-colors">{sponsor.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Silver Sponsors */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-gray-400 uppercase tracking-wider mb-8">Silver</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sponsors.filter(s => s.tier === 'silver').map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="bg-gray-50 h-24 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors group"
                >
                  <p className="text-gray-500 font-semibold group-hover:text-gray-800 transition-colors text-sm">{sponsor.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Steering Committee */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-gray-400 uppercase tracking-wider mb-8">Steering Committee</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {steeringCommittee.map((member) => (
                <div
                  key={member.id}
                  className="bg-gray-50 h-20 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors group"
                >
                  <p className="text-gray-500 font-semibold group-hover:text-gray-800 transition-colors text-sm">{member.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Partners */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-gray-400 uppercase tracking-wider mb-8">Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="bg-gray-50 h-20 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors group"
                >
                  <p className="text-gray-500 font-semibold group-hover:text-gray-800 transition-colors text-sm">{partner.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Become a Sponsor Banner */}
          <div className="bg-gray-100 rounded-xl p-8 md:p-12 border border-gray-200">
            <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">Support Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Become a Sponsor</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl">
              Be a key part of the event that helps build Latin America and the Caribbean&apos;s energy future. Our team will work with you to strategically leverage your sponsorship benefits to meet your objectives.
            </p>
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Button className="bg-gray-900 text-gray-100 hover:bg-gray-800 font-semibold text-base px-8 py-3 uppercase tracking-wide">
                SEE SPONSORSHIP PACKAGES
              </Button>
              <Button variant="outline" className="border-gray-400 text-gray-700 hover:bg-gray-200 hover:text-gray-900 font-semibold text-base px-8 py-3 uppercase tracking-wide">
                CONTACT US
              </Button>
            </div>
          </div>
        </section>

        {/* Airline Discount */}
        <section id="airline" className="mb-20 scroll-mt-24">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-200 to-gray-100 p-8 md:p-12 border border-gray-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/30 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/20 rounded-full translate-y-1/2 -translate-x-1/4"></div>
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 bg-gray-400/30 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.2L9 12l-2 3H4l-1 1 3 2 2 1 1-1v-3l3-2 4.2 4.2c.2.4.7.5 1.2.3l.5-.3c.4-.2.6-.6.5-1.1z"/>
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Airline Partner</h2>
              </div>
              <p className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed">
                We have partnered with a major airline to offer exclusive discounted fares for all La Jolla Energy Conference attendees traveling to San Diego.
              </p>
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <Button className="bg-gray-900 text-gray-100 hover:bg-gray-800 font-semibold text-base px-8 py-3 uppercase tracking-wide">
                  GET YOUR DISCOUNT CODE
                </Button>
                <Button variant="outline" className="border-gray-400 text-gray-700 hover:bg-gray-200 hover:text-gray-900 font-semibold text-base px-8 py-3 uppercase tracking-wide">
                  VIEW FLIGHT OPTIONS
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-20 scroll-mt-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Contact Information</h2>
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-12">
            <h3 className="font-bold text-gray-900 mb-6">Conference Organizers</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gray-700 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:conference@iamericas.org" className="text-gray-600 hover:text-gray-900">
                    conference@iamericas.org
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-700 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600">+1 (858) 453-2541</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Speaker Modal */}
      <AgendaSpeakerModal 
        speaker={selectedSpeaker} 
        isOpen={showSpeakerModal}
        onClose={() => {
          setShowSpeakerModal(false)
          setSelectedSpeaker(null)
        }}
      />

      {/* Agenda Modal */}
      {showAgendaModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Conference Agenda</h2>
              <button
                onClick={() => setShowAgendaModal(false)}
                className="text-gray-600 hover:text-gray-900 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="p-6">
              {/* Day Tabs */}
              <div className="flex gap-4 mb-8 border-b border-gray-200">
                {['day1', 'day2'].map((day) => (
                  <button
                    key={day}
                    onClick={() => setActiveTab(day)}
                    className={`pb-4 px-4 font-semibold border-b-2 transition-colors ${
                      activeTab === day
                        ? 'border-gray-900 text-gray-900'
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {day === 'day1' ? 'Day 1' : 'Day 2'}
                  </button>
                ))}
              </div>

              {/* Agenda Items */}
              <div className="space-y-4">
                {agenda[activeTab].map((item, idx) => {
                  const itemKey = `${activeTab}-${idx}`
                  const isExpanded = expandedAgendaItem === itemKey
                  const hasDetails = item.format || item.speakers || item.questions
                  
                  return (
                    <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                      {/* Item Header */}
                      <button
                        onClick={() => hasDetails ? setExpandedAgendaItem(isExpanded ? null : itemKey) : null}
                        className="w-full text-left p-4 hover:bg-gray-50 transition-colors flex justify-between items-start gap-4"
                      >
                        <div className="flex-grow">
                          <div className="flex items-start gap-3 mb-2">
                            <span className="font-semibold text-gray-900 w-24">{item.time}</span>
                            <h3 className="font-bold text-gray-900">{item.title}</h3>
                          </div>
                          {item.description && <p className="text-sm text-gray-600 ml-28">{item.description}</p>}
                        </div>
                        {hasDetails && (
                          <ChevronDown 
                            className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                          />
                        )}
                      </button>

                      {/* Expanded Details */}
                      {hasDetails && isExpanded && (
                        <div className="bg-gray-50 border-t border-gray-200 p-6 space-y-6">
                          {item.format && (
                            <div>
                              <p className="text-sm font-semibold text-gray-600 mb-2">FORMAT</p>
                              <button className="inline-block bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
                                {item.format}
                              </button>
                            </div>
                          )}

                          {item.questions && item.questions.length > 0 && (
                            <div>
                              <p className="text-sm font-semibold text-gray-600 mb-3">KEY DISCUSSION POINTS</p>
                              <ul className="space-y-2">
                                {item.questions.map((q, qIdx) => (
                                  <li key={qIdx} className="flex items-start gap-3 text-gray-700">
                                    <span className="font-bold text-gray-900">•</span>
                                    <span>{q}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {item.speakers && item.speakers.length > 0 && (
                            <div>
                              <p className="text-sm font-semibold text-gray-600 mb-4">SPEAKERS</p>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {item.speakers.map((speaker, sIdx) => (
                                  <div
                                    key={sIdx}
                                    className="p-4 bg-white border border-gray-200 rounded-lg"
                                  >
                                    <div className="w-16 h-16 bg-gray-300 rounded-lg mb-3 flex items-center justify-center">
                                      <span className="text-gray-500">Photo</span>
                                    </div>
                                    <p className="font-semibold text-gray-900 text-sm">{speaker.name}</p>
                                    <p className="text-xs text-gray-600 mt-1">{speaker.title}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
