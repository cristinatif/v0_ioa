'use client'

import { useState } from 'react'
import { ChevronDown, MapPin, Clock, Mail, Phone, X, Download, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Speaker {
  id: string
  name: string
  title: string
  bio: string
}

interface Sponsor {
  id: string
  name: string
  tier: 'platinum' | 'supporting'
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

function AgendaSpeakerModal({ speaker, isOpen, onClose }: { speaker: AgendaSpeaker | null; isOpen: boolean; onClose: () => void }) {
  if (!isOpen || !speaker) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">{speaker.name}</h2>
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
              <p className="text-lg font-semibold text-blue-600 mb-4">{speaker.title}</p>
              <p className="text-gray-700 leading-relaxed">{speaker.bio || "Learn more about this speaker's background and expertise."}</p>
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

export function ConferencePage({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState('day1')
  const [visibleSpeakers, setVisibleSpeakers] = useState(12)
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null)
  const [activeNavLink, setActiveNavLink] = useState('agenda')
  const [showAgendaModal, setShowAgendaModal] = useState(false)
  const [expandedAgendaItem, setExpandedAgendaItem] = useState<string | null>(null)
  const [selectedAgendaSpeaker, setSelectedAgendaSpeaker] = useState<AgendaSpeaker | null>(null)
  const [showAgendaSpeakerModal, setShowAgendaSpeakerModal] = useState(false)

  const speakers: Speaker[] = [
    { id: '1', name: 'Dr. Jane Smith', title: 'Energy Director', bio: 'Leading expert in renewable energy policy with 20+ years of experience.' },
    { id: '2', name: 'John Rodriguez', title: 'Climate Policy Director', bio: 'Specializes in climate adaptation and mitigation strategies.' },
    { id: '3', name: 'Maria Garcia', title: 'Sustainable Development Lead', bio: 'Expert in sustainable energy infrastructure development.' },
    { id: '4', name: 'Dr. Michael Chen', title: 'Research Director', bio: 'Pioneer in clean energy innovation and technology assessment.' },
    { id: '5', name: 'Sarah Williams', title: 'Policy Analyst', bio: 'Focuses on energy policy and regulatory frameworks.' },
    { id: '6', name: 'Carlos Mendez', title: 'Infrastructure Expert', bio: 'Specializes in energy infrastructure planning and development.' },
    { id: '7', name: 'Dr. Emma Johnson', title: 'Climate Scientist', bio: 'Leading researcher in climate impacts and energy transitions.' },
    { id: '8', name: 'David Kumar', title: 'Finance Director', bio: 'Expert in green energy financing and investment strategies.' },
    { id: '9', name: 'Lisa Anderson', title: 'Technology Officer', bio: 'Leads innovation in renewable energy technologies.' },
    { id: '10', name: 'Roberto Flores', title: 'Environmental Director', bio: 'Focuses on environmental impact assessment and mitigation.' },
    { id: '11', name: 'Dr. Patricia Lee', title: 'Academic Lead', bio: 'University researcher specializing in energy systems.' },
    { id: '12', name: 'Miguel Santos', title: 'Community Engagement', bio: 'Works on community energy initiatives and education.' },
    { id: '13', name: 'Dr. Anna Mueller', title: 'Energy Efficiency Expert', bio: 'Specializes in building efficiency and conservation.' },
    { id: '14', name: 'James Wilson', title: 'Grid Operations', bio: 'Expert in smart grid technology and operations.' },
    { id: '15', name: 'Sofia Romero', title: 'Solar Energy Lead', bio: 'Pioneering solar energy innovation and implementation.' },
    { id: '16', name: 'Dr. Thomas Brown', title: 'Wind Energy Expert', bio: 'Leading researcher in wind power technology.' },
  ]

  const sponsors: Sponsor[] = [
    { id: '1', name: 'Energy Corp', tier: 'platinum' },
    { id: '2', name: 'Green Future', tier: 'platinum' },
    { id: '3', name: 'Clean Power Inc', tier: 'platinum' },
    { id: '4', name: 'Solar Systems', tier: 'supporting' },
    { id: '5', name: 'Wind Solutions', tier: 'supporting' },
    { id: '6', name: 'Tech Energy', tier: 'supporting' },
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
      {/* Hero Section */}
      <div className="relative w-full h-96 bg-gradient-to-b from-gray-400 to-gray-300">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 h-full flex flex-col justify-center">
          <button 
            onClick={onClose}
            className="mb-6 w-fit inline-flex items-center text-white hover:text-white/80 transition-colors"
          >
            ← Back
          </button>
          <h1 className="text-5xl font-bold tracking-tight text-white mb-4">La Jolla Energy Conference</h1>
          <div className="text-xl text-white/90 max-w-2xl mb-8 space-y-2">
            <p>October 13-15, 2026</p>
            <p>La Jolla, California</p>
            <p className="text-lg font-semibold">35 YEARS AT THE CENTER OF THE ENERGY DEBATE</p>
          </div>
          <Button className="w-fit bg-white text-gray-900 hover:bg-gray-100 font-semibold">Register Now</Button>
        </div>
      </div>

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-8 overflow-x-auto">
            {['agenda', 'speakers', 'sponsors', 'logistics', 'contact'].map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className={`py-4 px-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeNavLink === link
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.toUpperCase()}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Conference History */}
        <section className="mb-20">
          <div className="space-y-6 max-w-3xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              Launched at a moment of profound change across the hemisphere—marked by privatization, globalization, and regional integration—the La Jolla Energy Conference was created to foster investment and high-level dialogue.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Over the past 35 years, it has become a premier forum for candid, senior-level engagement on energy policy and investment across Latin America and the Caribbean, benefiting from a unique setting that encourages meaningful exchange and lasting connections.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This XXXV edition of the conference will both celebrate our history and reflect on the sweeping transformations that have reshaped the global energy sector since our founding.
            </p>
          </div>
          <div className="mt-8">
            <Button className="bg-gray-900 text-white hover:bg-gray-800">
              Highlights of La Jolla Conference 2025
            </Button>
          </div>
        </section>

        {/* Why Attend */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Why Attend</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Network', desc: 'Connect with leading energy experts and policymakers' },
              { title: 'Learn', desc: 'Explore cutting-edge research and best practices' },
              { title: 'Collaborate', desc: 'Identify partnership opportunities across sectors' },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 p-8 rounded-lg border border-gray-200">
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

          {/* Agenda Image Placeholder */}
          <div className="w-full bg-gray-300 h-80 rounded-lg border border-gray-400 mb-12 flex items-center justify-center">
            <p className="text-gray-600 text-lg font-medium">Conference Schedule Visualization</p>
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
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Conference Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {speakers.slice(0, visibleSpeakers).map((speaker) => (
              <button
                key={speaker.id}
                onClick={() => setSelectedSpeaker(speaker)}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow text-left"
              >
                <div className="w-full aspect-square bg-gray-300 rounded mb-4"></div>
                <h3 className="font-bold text-gray-900 mb-1">{speaker.name}</h3>
                <p className="text-sm text-gray-600">{speaker.title}</p>
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

        {/* Sponsors */}
        <section id="sponsors" className="mb-20 scroll-mt-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Conference Sponsors</h2>
          
          {/* Platinum Sponsors */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Platinum Sponsors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sponsors.filter(s => s.tier === 'platinum').map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="bg-gray-100 h-32 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors group"
                >
                  <p className="text-gray-700 font-semibold group-hover:text-gray-900 transition-colors">{sponsor.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Supporting Sponsors */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Supporting Sponsors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sponsors.filter(s => s.tier === 'supporting').map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="bg-gray-100 h-24 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors group"
                >
                  <p className="text-gray-700 font-semibold group-hover:text-gray-900 transition-colors text-sm">{sponsor.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Logistics */}
        <section id="logistics" className="mb-20 scroll-mt-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Conference Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-gray-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600">Institute of the Americas<br />La Jolla, San Diego, California</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <Clock className="w-6 h-6 text-gray-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Dates</h3>
                  <p className="text-gray-600">June 15-16, 2026</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Accommodation</h3>
              <p className="text-gray-600 mb-4">Special hotel rates available at nearby properties. Contact the organizers for details.</p>
              <Button variant="outline" size="sm">View Hotel Options</Button>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Travel</h3>
              <p className="text-gray-600 mb-4">San Diego International Airport (SAN) is conveniently located 30 minutes from the venue.</p>
              <Button variant="outline" size="sm">Airline Information</Button>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-20 scroll-mt-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Contact Information</h2>
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
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

              <div>
                <h3 className="font-bold text-gray-900 mb-6">Quick Links</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">Register for the Conference</Button>
                  <Button variant="outline" className="w-full justify-start">Download Information Packet</Button>
                  <Button variant="outline" className="w-full justify-start">Request Media Credentials</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Agenda Speaker Modal */}
      <AgendaSpeakerModal 
        speaker={selectedAgendaSpeaker} 
        isOpen={showAgendaSpeakerModal}
        onClose={() => {
          setShowAgendaSpeakerModal(false)
          setSelectedAgendaSpeaker(null)
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
                                  <button
                                    key={sIdx}
                                    onClick={() => {
                                      setSelectedAgendaSpeaker(speaker)
                                      setShowAgendaSpeakerModal(true)
                                    }}
                                    className="text-left p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                                  >
                                    <div className="w-16 h-16 bg-gray-300 rounded-lg mb-3 flex items-center justify-center">
                                      <span className="text-gray-500">Photo</span>
                                    </div>
                                    <p className="font-semibold text-gray-900 text-sm">{speaker.name}</p>
                                    <p className="text-xs text-gray-600 mt-1">{speaker.title}</p>
                                  </button>
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
