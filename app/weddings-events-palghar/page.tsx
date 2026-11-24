import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/footer/Footer";
import {
  PartyPopper,
  Users,
  Maximize,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Heart,
  HelpCircle,
  MapPin,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { RESORT_FACTS } from "@/lib/resortFacts";

export const metadata: Metadata = {
  title: "Pure Veg Beach Wedding Venue in Palghar & Kelva (200-250 Guests) | Beyond Sands",
  description:
    "Host your dream 100% Pure Veg beach destination wedding at Beyond Sands Pure Veg Resort, Kelva Beach, Palghar (Pin 401401). 15,000+ sq ft Celebration Lawn, AC banquet hall, 200-250 guest capacity, opposite Shri Shitladevi Temple, full resort buyout options.",
  keywords: [
    "pure veg beach wedding venue in palghar",
    "wedding venue kelva beach 200 guests",
    "destination wedding resort kelwa beach",
    "jain wedding resort near mumbai",
    "beach resort buyout palghar for wedding",
    "wedding lawn in palghar with rooms",
    "sangeet and wedding venue opposite shitladevi temple",
  ],
  alternates: {
    canonical: "https://www.beyondsands.in/weddings-events-palghar",
  },
  openGraph: {
    title: "Pure Veg Beach Wedding Venue in Palghar & Kelva (200-250 Guests) | Beyond Sands",
    description:
      "15,000+ sq ft Celebration Lawn, AC banquet hall, up to 250 guests, 100% pure veg & Jain catering, 290m from Kelva Beach opposite Shri Shitladevi Temple.",
    url: "https://www.beyondsands.in/weddings-events-palghar",
    images: [{ url: "/assets/faq/faq-5-weddings-lawns.webp" }],
    siteName: "Beyond Sands Pure Veg Resort",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pure Veg Beach Wedding Venue in Palghar & Kelva (200-250 Guests) | Beyond Sands",
    description:
      "15,000+ sq ft lawns, AC banquet, up to 250 guests, 100% pure veg & Jain catering 2 hours from Mumbai.",
    images: ["/assets/faq/faq-5-weddings-lawns.webp"],
  },
};

const VENUE_SPECS_TABLE = [
  {
    parameter: "Celebration Lawn Area",
    specification: "15,000+ sq ft manicured natural grass lawns with coconut canopy perimeter",
    capacity: "Up to 250 Guests (Floating / Seated)",
  },
  {
    parameter: "AC Banquet Hall",
    specification: "Enclosed, climate-controlled indoor hall with audio-visual & stage provisions",
    capacity: "100–120 Guests (Indoor)",
  },
  {
    parameter: "Full Resort Buyout Option",
    specification: "Complete private exclusivity of all suites, lawns, pool & dining spaces",
    capacity: "Exclusive for your wedding party",
  },
  {
    parameter: "Culinary & Catering Protocol",
    specification: "Strictly 100% Pure Vegetarian, dedicated Jain & Gujarati wedding banquets",
    capacity: "Custom multi-course menu",
  },
  {
    parameter: "Temple Proximity",
    specification: "Directly opposite ancient Shri Shitladevi Temple for sacred wedding blessings",
    capacity: "30-second walk across road",
  },
  {
    parameter: "Guest Room Accommodations",
    specification: "AC Garden-View, Pool-View suites & multi-bed family group dormitories on-site",
    capacity: "Comfortable overnight stay for 60+ guests",
  },
  {
    parameter: "Beach Proximity",
    specification: "2-minute peaceful walk (290 meters) for romantic coastal pre-wedding photoshoots",
    capacity: "Kelva Beach Shoreline",
  },
];

const WEDDING_FAQS = [
  {
    q: "What is the guest capacity for weddings at Beyond Sands Resort Palghar?",
    a: "Our 15,000+ sq ft Celebration Lawn comfortably accommodates gatherings of 200 to 250 guests for wedding ceremonies, receptions, and sangeet evenings. Our indoor AC banquet hall accommodates 100 to 120 guests.",
  },
  {
    q: "Can we book the entire resort exclusively for our wedding (buyout)?",
    a: "Yes! We offer full resort buyouts where your family and guests enjoy 100% private access to all guest rooms, the 40x25ft pool, rain dance arena, banquet hall, and celebration lawns with complete privacy.",
  },
  {
    q: "Is non-vegetarian food or alcohol allowed during wedding celebrations?",
    a: "No. Beyond Sands strictly maintains its sanctity as a 100% pure-vegetarian and alcohol-free sanctuary. We specialize in authentic Gujarati, Marwari, Kathiyawadi, Jain, and coastal Maharashtrian wedding feasts.",
  },
  {
    q: "Is the resort suitable for pre-wedding shoots and sacred ceremonies?",
    a: "Extremely. Being directly opposite the ancient Shri Shitladevi Temple allows couples to take divine blessings, while the 2-minute walk (290m) to Kelva Beach and our palm-fringed gardens provide majestic golden-hour backdrops.",
  },
  {
    q: "How far is the venue for guests traveling from Mumbai and Gujarat?",
    a: "Beyond Sands is approximately 2 hours from Mumbai and Thane via NH-48 Western Express Highway (85 km from Dahisar Toll Plaza) and 10 minutes from Kelve Road Railway Station (Western Railway).",
  },
];

export default function WeddingsEventsPalgharPage() {
  const whatsappUrl =
    "https://wa.me/919923895055?text=" +
    encodeURIComponent(
      "Hi Beyond Sands! I'm planning a wedding / family celebration in Palghar for 200-250 guests. Please share lawn availability, packages, and buyout rates."
    );

  const weddingJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beyondsands.in" },
          { "@type": "ListItem", "position": 2, "name": "Weddings & Events Palghar", "item": "https://www.beyondsands.in/weddings-events-palghar" }
        ]
      },
      {
        "@type": "EventVenue",
        "name": "Beyond Sands Celebration Lawn & Wedding Venue",
        "image": "https://www.beyondsands.in/assets/faq/faq-5-weddings-lawns.webp",
        "telephone": "+91 99238 95055",
        "url": "https://www.beyondsands.in/weddings-events-palghar",
        "maximumAttendeeCapacity": 250,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Survey No. 1000, Shitladevi Road, Opposite Shri Shitladevi Temple, Near Kelva Beach",
          "addressLocality": "Kelva, Palghar",
          "addressRegion": "Maharashtra",
          "postalCode": "401401",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 19.612193,
          "longitude": 72.729605
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": WEDDING_FAQS.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(weddingJsonLd) }}
      />

      <div className="min-h-[100dvh] bg-transparent text-charcoal pt-28 sm:pt-36 pb-20 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-champagne-gold mb-8">
            <Link href="/" className="hover:text-deep-navy transition-colors">Home</Link>
            <span>/</span>
            <span className="text-charcoal/60">Weddings &amp; Events Palghar</span>
          </nav>

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8 hairline-b border-charcoal/15 pb-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne-gold/15 border border-champagne-gold/30 text-champagne-gold font-sans text-xs font-semibold tracking-wider uppercase mb-4">
                <Heart size={13} />
                <span>15,000+ sq ft Celebration Lawn · 200–250 Guests</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-deep-navy tracking-tight leading-[1.1]">
                PURE VEG BEACH WEDDING VENUE IN PALGHAR &amp; KELVA
              </h1>
              <p className="font-sans text-base sm:text-lg text-charcoal/75 font-light mt-4 leading-relaxed">
                Celebrate your sacred union in an idyllic beachfront sanctuary. Beyond Sands combines lush manicured lawns, air-conditioned banquet facilities, authentic 100% pure vegetarian and Jain catering, and serene temple proximity in Kelva Beach, Palghar.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 font-sans text-xs">
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/70 border border-charcoal/10 shadow-xs">
                <Maximize className="w-4 h-4 text-champagne-gold shrink-0" />
                <span className="font-medium text-deep-navy">15,000+ sq ft Celebration Lawn</span>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/70 border border-charcoal/10 shadow-xs">
                <Users className="w-4 h-4 text-champagne-gold shrink-0" />
                <span className="font-medium text-deep-navy">200–250 Guest Capacity</span>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/70 border border-charcoal/10 shadow-xs">
                <MapPin className="w-4 h-4 text-champagne-gold shrink-0" />
                <span className="font-medium text-deep-navy">Opposite Shri Shitladevi Temple</span>
              </div>
            </div>
          </div>

          {/* Section 3.1: Answer-First Quick Facts Box */}
          <div className="mb-12 p-5 sm:p-7 rounded-2xl bg-[#F4EDE0] border border-[#D8C7A8] shadow-sm">
            <div className="flex items-center gap-2 text-deep-navy font-sans text-xs uppercase tracking-widest font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-champagne-gold animate-pulse" />
              <span>Quick Facts · Pure Veg Beach Wedding Venue in Palghar / Kelva for 200–250 Guests</span>
            </div>
            <p className="font-sans text-sm sm:text-base text-deep-navy/90 leading-relaxed font-normal">
              Beyond Sands Pure Veg Resort provides a premier beachfront destination wedding venue in Kelva Beach, Palghar (Pin 401401), designed for <strong>200 to 250 guests</strong>. The property features a <strong>15,000+ sq ft Celebration Lawn</strong>, climate-controlled AC banquet hall, and <strong>100% pure vegetarian &amp; strict Jain/Sattvic catering</strong> (zero meat, eggs, or alcohol). Located directly opposite Shri Shitladevi Temple and a <strong>2-minute walk (290 meters)</strong> from Kelva Beach, full resort buyout packages with luxury guest room accommodations are available just <strong>2 hours from Mumbai</strong>.
            </p>
          </div>

          {/* Section 3.2: Semantic HTML Data Table: Venue Specifications */}
          <div className="mb-16">
            <div className="mb-4">
              <h2 className="font-display text-2xl sm:text-3xl text-deep-navy font-normal">
                Wedding &amp; Event Venue Specifications
              </h2>
              <p className="font-sans text-xs sm:text-sm text-charcoal/70">
                Architectural dimensions, guest capacities, and sacred protocols for memorable coastal wedding ceremonies.
              </p>
            </div>
            
            <div className="overflow-x-auto rounded-2xl border border-charcoal/15 shadow-xs bg-white/90">
              <table className="w-full text-left font-sans text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-deep-navy text-warm-ivory border-b border-deep-navy/20">
                    <th scope="col" className="p-3 sm:p-4 font-medium uppercase tracking-wider text-[11px] whitespace-nowrap">Venue Feature</th>
                    <th scope="col" className="p-3 sm:p-4 font-medium uppercase tracking-wider text-[11px]">Architectural Specifications</th>
                    <th scope="col" className="p-3 sm:p-4 font-medium uppercase tracking-wider text-[11px] whitespace-nowrap">Capacity / Provision</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal/10 text-charcoal/90">
                  {VENUE_SPECS_TABLE.map((row, idx) => (
                    <tr key={idx} className="hover:bg-champagne-gold/5 transition-colors">
                      <td className="p-3 sm:p-4 font-semibold text-deep-navy whitespace-nowrap">{row.parameter}</td>
                      <td className="p-3 sm:p-4 text-xs text-charcoal/85 leading-relaxed">{row.specification}</td>
                      <td className="p-3 sm:p-4 font-medium text-[#1E5E8A] text-xs whitespace-nowrap">{row.capacity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Wedding Event Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-2xl bg-white border border-charcoal/10 shadow-xs space-y-3">
              <PartyPopper className="w-8 h-8 text-champagne-gold" />
              <h3 className="font-display text-xl text-deep-navy">Mandap &amp; Sangeet Lawns</h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                15,000+ sq ft natural grass lawn framed by tall coconut palms, ideal for outdoor mandap stages, mehendi, and starry receptions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-charcoal/10 shadow-xs space-y-3">
              <Sparkles className="w-8 h-8 text-champagne-gold" />
              <h3 className="font-display text-xl text-deep-navy">Sacred Temple Aarti</h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                Being located directly opposite the ancient Shri Shitladevi Temple provides divine blessings and spiritual calm for families.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-charcoal/10 shadow-xs space-y-3">
              <ShieldCheck className="w-8 h-8 text-champagne-gold" />
              <h3 className="font-display text-xl text-deep-navy">Pure Sattvic Feast</h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                Lavish Gujarati, Marwari, Kathiyawadi, and strict Jain wedding buffets crafted by specialized vegetarian master halwais.
              </p>
            </div>
          </div>

          {/* WhatsApp Direct CTA */}
          <div className="mb-16 bg-deep-navy text-warm-ivory rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-champagne-gold/30 shadow-lg">
            <div className="space-y-2 text-center md:text-left">
              <span className="font-sans text-xs uppercase tracking-widest text-champagne-gold font-semibold">
                Destination Wedding Concierge
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-warm-ivory">
                Check Wedding Dates &amp; Resort Buyout Tariffs
              </h3>
              <p className="font-sans text-xs sm:text-sm text-warm-ivory/70 max-w-xl">
                Connect directly with our event manager to schedule a property walkthrough and receive custom pure veg catering quotes.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-8 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-sans text-xs uppercase tracking-wider font-semibold flex items-center gap-2.5 transition-all shadow-md hover:scale-105 shrink-0 cursor-pointer"
            >
              <WhatsAppIcon size={18} />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>

          {/* Section 3.3: In-DOM Plain-HTML FAQ Block */}
          <div className="mb-16 bg-[#F8F6F1] p-6 sm:p-10 rounded-3xl border border-charcoal/15">
            <div className="max-w-2xl mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-champagne-gold/20 text-deep-navy font-sans text-xs font-semibold uppercase tracking-wider mb-2">
                <HelpCircle size={13} />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-deep-navy font-normal">
                Wedding &amp; Event Planning Guidance
              </h2>
            </div>

            <div className="space-y-4">
              {WEDDING_FAQS.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-white p-5 sm:p-6 rounded-2xl border border-charcoal/10 transition-all duration-200 open:shadow-xs"
                >
                  <summary className="font-display text-lg sm:text-xl font-medium text-deep-navy cursor-pointer list-none flex items-center justify-between gap-4">
                    <span>{faq.q}</span>
                    <span className="text-champagne-gold font-sans text-lg font-light group-open:rotate-45 transition-transform duration-200">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 font-sans text-xs sm:text-sm text-charcoal/80 leading-relaxed font-light border-t border-charcoal/10 pt-3">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
