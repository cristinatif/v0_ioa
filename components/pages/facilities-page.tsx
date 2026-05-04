"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowLeft,
  ArrowRight,
  Wifi,
  Coffee,
  Car,
  Monitor,
  Search,
  Phone,
  ClipboardCheck,
  Mail,
  MapPin,
  Users,
  Building2,
  FileText,
  ExternalLink,
  ChevronRight,
  Check,
  CircleDollarSign,
  Video,
  Mic,
  Globe,
} from "lucide-react"

interface FacilitiesPageProps {
  onBack: () => void
  onNavigate: (page: string) => void
}

const facilities = [
  {
    name: "Friend Plaza",
    sqFt: "10,725",
    dimensions: "87' × 123'",
    description:
      "The expansive Spanish-style plaza with central fountain, overlooking the Pacific Ocean. A warm, inviting location for lunches, dinners, and receptions.",
    capacity: "200 banquet · 250 reception",
    priceGeneral: "$1,460",
    priceUCSD: "$730",
    highlights: [
      "Spanish-style plaza with central fountain",
      "Overlooking the Pacific Ocean",
      "Outdoor dining and reception space",
    ],
    imageGradient: "from-slate-400 to-slate-300",
  },
  {
    name: "Deutz Conference Room",
    sqFt: "1,166",
    dimensions: "44' × 25' × 11'H",
    description:
      "Ideal for intimate gatherings or business meetings. Includes an interpretation booth and a small functional kitchen with a separate entrance.",
    capacity: "Up to 40 guests",
    priceGeneral: "$690",
    priceUCSD: "$350",
    highlights: [
      "Interpretation booth included",
      "Small kitchen: refrigerator, microwave, sink",
      "Podium with built-in wireless HDMI & microphone connections",
    ],
    imageGradient: "from-gray-400 to-gray-300",
  },
  {
    name: "Hojel Hall of the Americas Auditorium",
    sqFt: "2,618",
    dimensions: "",
    description:
      "Formal auditorium seating graced with flags of the nations of the Americas. A perfect location for lectures, films, musical performances, and seminars.",
    capacity: "Theater seating",
    priceGeneral: "$1,650",
    priceUCSD: "$830",
    highlights: [
      "Formal auditorium with flags of the Americas",
      "HD projector with HDMI connectivity & large screen",
      "Wireless microphone for presenter",
    ],
    imageGradient: "from-zinc-400 to-zinc-300",
  },
  {
    name: "Malamud Room – Weaver Conference Center",
    sqFt: "2,680",
    dimensions: "47' × 53' × 12'H",
    description:
      "Suitable for small and large groups. Features a small breezeway for registration, coffee breaks, or receptions. Recently upgraded with a state-of-the-art audio-visual system.",
    capacity: "150 theater · 120 classroom · 40 U-shape · 50 hollow square",
    priceGeneral: "$1,340",
    priceUCSD: "$620",
    highlights: [
      "Interpretation booth included",
      "Built-in HD cameras for livestreams & Zoom",
      "State-of-the-art AV: HD projector, surround sound",
    ],
    imageGradient: "from-stone-400 to-stone-300",
  },
  {
    name: "Arango Foyer",
    sqFt: "1,332",
    dimensions: "",
    description:
      "Full of natural light and tile flooring. Suitable for event registration, receptions, art exhibits, small-group lunches, and dinners.",
    capacity: "Reception-style layout",
    priceGeneral: "$400",
    priceUCSD: "$200",
    highlights: [
      "Natural light and tile flooring",
      "Ideal for receptions and art exhibits",
      "Located in the Copley Conference Center",
    ],
    imageGradient: "from-neutral-400 to-neutral-300",
  },
]

const amenities = [
  {
    icon: Monitor,
    title: "Audio-Visual Equipment",
    description: "HD projectors, large projection screens, surround sound systems, and built-in cameras for livestreaming and Zoom meetings.",
  },
  {
    icon: Mic,
    title: "Interpretation Booths",
    description: "Simultaneous interpretation booths available in the Deutz Conference Room and Malamud Room.",
  },
  {
    icon: Coffee,
    title: "Kitchen Facilities",
    description: "Functional kitchens suitable for professional caterers, with separate entrances and full appliances.",
  },
  {
    icon: Wifi,
    title: "Wired & Wireless Internet",
    description: "Both wireless and wired internet connectivity available throughout all rooms.",
  },
  {
    icon: Video,
    title: "Livestreaming & Webinars",
    description: "Built-in high-definition cameras for livestreams, webinars, and Zoom meetings in the Malamud Room.",
  },
  {
    icon: Globe,
    title: "Professional Catering",
    description: "Institute facilities are equipped with a kitchen suitable for professional caterers for any event size.",
  },
]

const howItWorksSteps = [
  {
    step: 1,
    icon: Search,
    title: "Choose",
    description: "Choose one of our facilities that best suits your needs",
  },
  {
    step: 2,
    icon: Phone,
    title: "Confirm",
    description: "Confirm the availability by contacting us",
  },
  {
    step: 3,
    icon: ClipboardCheck,
    title: "Reserve",
    description: "Complete the reservation form",
  },
]

export function FacilitiesPage({ onBack, onNavigate }: FacilitiesPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO ===== */}
      <div className="relative w-full h-80 bg-gradient-to-b from-slate-300 to-slate-200">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 h-full flex flex-col justify-center">
          <Button variant="ghost" className="mb-6 w-fit text-white hover:bg-white/20" onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
            <span>HOME</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white">FACILITIES</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Find Your Perfect Meeting Space
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-white/90">
            The Copley International Conference Center at the Institute of the Americas offers versatile venues for your next event, workshop, or reception — on the UC San Diego campus in La Jolla.
          </p>
        </div>
      </div>

      {/* ===== HOW IT WORKS ===== */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
          Simple Process
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-12">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {howItWorksSteps.map((item, idx) => (
            <div key={item.step} className="relative flex flex-col items-center text-center">
              {/* Connector line (between steps on desktop) */}
              {idx < 2 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-slate-200" />
              )}

              {/* Step number + icon */}
              <div className="relative z-10 mb-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 border-2 border-slate-200">
                  <item.icon className="h-8 w-8 text-slate-600" />
                </div>
                <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-bold">
                  {item.step}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 max-w-xs">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            Start by exploring our facilities below ↓
          </p>
        </div>
      </section>

      {/* ===== DISCOVER OUR FACILITIES ===== */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
            Copley International Conference Center
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
            Discover Our Facilities
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mb-6">
            The Institute regularly rents out five spaces. The Hojel Hall of the Americas Auditorium, Deutz Conference Room, and Arango Foyer are located in the Copley International Conference Center. Institute facilities are equipped with a kitchen suitable for professional caterers as well as booths for simultaneous interpretation.
          </p>

          {/* Quick Facts as inline badges */}
          <div className="flex flex-wrap gap-3 mb-12">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg border border-slate-200 text-sm">
              <MapPin className="h-4 w-4 text-slate-500" />
              <span className="text-slate-700 font-medium">La Jolla, UCSD Campus</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg border border-slate-200 text-sm">
              <Users className="h-4 w-4 text-slate-500" />
              <span className="text-slate-700 font-medium">30–250 guests</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg border border-slate-200 text-sm">
              <CircleDollarSign className="h-4 w-4 text-slate-500" />
              <span className="text-slate-700 font-medium">50% off UCSD rates</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg border border-slate-200 text-sm">
              <Building2 className="h-4 w-4 text-slate-500" />
              <span className="text-slate-700 font-medium">5 distinct spaces</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility) => (
              <Card
                key={facility.name}
                className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
              >
                {/* Image placeholder */}
                <div
                  className={`h-48 bg-gradient-to-b ${facility.imageGradient} flex items-center justify-center`}
                >
                  <Building2 className="h-16 w-16 text-white/60" />
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-slate-900">{facility.name}</CardTitle>
                  <div className="flex items-center gap-3 text-slate-500 text-sm">
                    <span>{facility.sqFt} sq ft</span>
                    {facility.dimensions && (
                      <>
                        <span className="text-slate-300">·</span>
                        <span>{facility.dimensions}</span>
                      </>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed">{facility.description}</p>

                  {/* Capacity */}
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-slate-400" />
                    <span className="text-slate-700 font-medium">{facility.capacity}</span>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1.5">
                    {facility.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check className="h-3.5 w-3.5 text-slate-400 mt-0.5" />
                        {highlight}
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                    <CircleDollarSign className="h-4 w-4 text-slate-500" />
                    <div className="flex items-baseline gap-3">
                      <span className="text-sm font-semibold text-slate-900">
                        {facility.priceGeneral}
                      </span>
                      <span className="text-xs text-slate-500">General</span>
                      <span className="text-slate-300">·</span>
                      <span className="text-sm font-semibold text-slate-900">
                        {facility.priceUCSD}
                      </span>
                      <span className="text-xs text-slate-500">UCSD</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    variant="outline"
                    className="w-full mt-2 text-slate-900 border-slate-200 hover:bg-slate-50"
                    onClick={() => onNavigate("contact")}
                  >
                    Check Availability
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT'S INCLUDED (FULL-WIDTH) ===== */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
          Included with Your Booking
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">What&apos;s Included</h2>
        <p className="text-slate-600 max-w-3xl mb-10">
          Our facilities come equipped with professional-grade amenities to ensure your event runs smoothly.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {amenities.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <div className="h-11 w-11 bg-slate-200 rounded-lg flex items-center justify-center mb-3">
                <Icon className="h-5 w-5 text-slate-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1.5">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== IMPORTANT DETAILS ===== */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
          Before You Book
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">Important Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Parking Notice */}
          <Card className="bg-slate-50 border-slate-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Car className="h-5 w-5 text-yellow-700" />
                </div>
                <CardTitle className="text-lg text-slate-900">Parking Notice</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-slate-600 space-y-3">
              <p>
                Parking on campus requires either a UCSD-issued parking permit or a short-term permit that can be purchased at self-service machines located in the front and back (right-hand side) of the Pangea parking structure (street-level) and roof level at the corner of Pangea Drive and Scholars Drive.
              </p>
              <p>
                Note that the parking booths are always unmanned.
              </p>
            </CardContent>
          </Card>

          {/* Rental Policy */}
          <Card className="bg-slate-50 border-slate-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-slate-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-slate-600" />
                </div>
                <CardTitle className="text-lg text-slate-900">Rental Policy</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-slate-600 space-y-3">
              <p>
                Before booking, please review our rental policy which covers cancellation terms, payment schedules, damage liability, and other important conditions.
              </p>
              <Button
                variant="outline"
                className="mt-2 text-slate-900 border-slate-200 hover:bg-slate-50"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Review Rental Policy
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===== READY TO RESERVE CTA ===== */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="bg-gray-100 rounded-xl p-8 md:p-12 border border-gray-200">
          <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">
            Next Step
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Reserve Your Space?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl">
            Contact our team to confirm availability and complete your reservation. We&apos;re here to help you find the right space and make the process seamless.
          </p>

          <div className="inline-flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              className="bg-gray-900 text-gray-100 hover:bg-gray-800 font-semibold text-base px-8 py-3 uppercase tracking-wide"
              onClick={() => onNavigate("contact")}
            >
              Contact Us
            </Button>
            <Button
              variant="outline"
              className="border-gray-400 text-gray-700 hover:bg-gray-200 hover:text-gray-900 font-semibold text-base px-8 py-3 uppercase tracking-wide"
            >
              View Rental Policy
            </Button>
          </div>

          {/* Contact info inline */}
          <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gray-500" />
              <a href="mailto:info@iamericas.org" className="hover:text-gray-900 transition-colors">
                info@iamericas.org
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gray-500" />
              <span>+1 (858) 453-5560</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span>10111 North Torrey Pines Rd, La Jolla, CA 92037</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}