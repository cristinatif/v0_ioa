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
} from "lucide-react"

interface FacilitiesPageProps {
  onBack: () => void
  onNavigate: (page: string) => void
}

const facilities = [
  {
    name: "Friend Plaza",
    capacity: "165 guests",
    description:
      "A spacious, light-filled room ideal for large conferences, keynote presentations, and formal receptions. The Friend Plaza offers flexible seating configurations and full AV capabilities.",
    priceGeneral: "$1,460",
    priceUCSD: "$730",
    highlights: ["Theater & banquet configurations", "Built-in AV system", "Adjacent reception space"],
    imageGradient: "from-slate-400 to-slate-300",
  },
  {
    name: "Deutz Conference Room",
    capacity: "30 guests",
    description:
      "An intimate, professional setting perfect for board meetings, strategy sessions, and executive briefings. Equipped with modern teleconferencing and display technology.",
    priceGeneral: "$690",
    priceUCSD: "$350",
    highlights: ["Executive board table", "Video conferencing", "Whiteboard walls"],
    imageGradient: "from-gray-400 to-gray-300",
  },
  {
    name: "Hojel Hall of the Americas Auditorium",
    capacity: "150 guests",
    description:
      "Our flagship auditorium offers a prestigious setting for major conferences, panel discussions, and high-profile presentations. Fixed theater seating with a raised stage and professional-grade AV.",
    priceGeneral: "$1,650",
    priceUCSD: "$830",
    highlights: ["Raised stage with podium", "Professional AV & lighting", "Translation booth available"],
    imageGradient: "from-zinc-400 to-zinc-300",
  },
  {
    name: "Malamud Room – Weaver Conference Center",
    capacity: "65 guests",
    description:
      "A versatile mid-size space suitable for workshops, seminars, and working group sessions. Flexible furniture arrangements accommodate a range of interactive formats.",
    priceGeneral: "$1,340",
    priceUCSD: "$620",
    highlights: ["Flexible seating options", "Breakout configurations", "Natural lighting"],
    imageGradient: "from-stone-400 to-stone-300",
  },
  {
    name: "Arango Foyer",
    capacity: "80 guests",
    description:
      "An elegant open foyer ideal for cocktail receptions, networking events, and exhibit displays. The Arango Foyer connects seamlessly to the Hojel Hall auditorium for combined events.",
    priceGeneral: "$400",
    priceUCSD: "$200",
    highlights: ["Open reception layout", "Adjacent to auditorium", "Catering-friendly space"],
    imageGradient: "from-neutral-400 to-neutral-300",
  },
]

const amenities = [
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Complimentary high-speed wireless internet throughout all spaces.",
  },
  {
    icon: Monitor,
    title: "AV Equipment",
    description: "Projectors, screens, microphones, and sound systems available in every room.",
  },
  {
    icon: Coffee,
    title: "Catering Options",
    description: "Full catering services available — from coffee service to formal dinner setups.",
  },
  {
    icon: Car,
    title: "Parking Access",
    description: "Convenient parking on the UC San Diego campus with permit information provided.",
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
          <p className="text-lg text-slate-600 max-w-3xl mb-12">
            Located on the campus of the University of California, San Diego, the Institute of the Americas rents out five spaces within the Copley International Conference Center to outside organizations and individuals for meetings, conferences, receptions, and other events. UCSD-affiliated organizations enjoy discounted rates.
          </p>

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
                  <CardDescription className="text-slate-500">
                    Capacity: {facility.capacity}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed">{facility.description}</p>

                  {/* Highlights */}
                  <div className="space-y-1.5">
                    {facility.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check className="h-3.5 w-3.5 text-slate-400" />
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

      {/* ===== AMENITIES & WHAT'S INCLUDED ===== */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* What's Included */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
              Included with Every Booking
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">What&apos;s Included</h2>
            <p className="text-slate-600 mb-8">
              All our spaces come equipped with essential amenities to ensure your event runs smoothly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {amenities.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-slate-50 p-6 rounded-lg border border-slate-200"
                >
                  <div className="h-12 w-12 bg-slate-200 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-slate-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
                  <p className="text-sm text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Facts */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
              At a Glance
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Quick Facts</h2>

            <div className="bg-slate-50 rounded-xl border border-slate-200 p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 bg-slate-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Location</p>
                  <p className="text-sm text-slate-600">
                    UC San Diego Campus, La Jolla, California
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 bg-slate-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Capacity Range</p>
                  <p className="text-sm text-slate-600">
                    30 to 165 guests across our five venues
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 bg-slate-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CircleDollarSign className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">UCSD Discount</p>
                  <p className="text-sm text-slate-600">
                    UCSD-affiliated organizations enjoy approximately 50% off standard rates
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 bg-slate-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">5 Distinct Spaces</p>
                  <p className="text-sm text-slate-600">
                    From intimate board rooms to a 150-seat auditorium
                  </p>
                </div>
              </div>
            </div>
          </div>
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
                The Institute of the Americas is located on the UC San Diego campus. Parking permits are required for all visitors and can be purchased at parking kiosks upon arrival.
              </p>
              <p>
                We recommend purchasing a day permit in advance for large groups. Parking availability may vary during the academic year.
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
              <a href="mailto:facilities@iamericas.org" className="hover:text-gray-900 transition-colors">
                facilities@iamericas.org
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gray-500" />
              <span>+1 (858) 453-2541</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span>UC San Diego Campus, La Jolla, CA</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}