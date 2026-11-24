import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/footer/Footer";
import {
  Navigation,
  Train,
  Car,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  Compass,
  HelpCircle,
  Church,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { RESORT_FACTS } from "@/lib/resortFacts";

export const metadata: Metadata = {
  title: "How to Reach Kelva Beach from Mumbai by Train & Car | Location Guide",
  description:
    "Complete travel guide: how to reach Kelva Beach (Kelwa) from Mumbai, Thane, Vasai, and Virar by Western Railway train or NH-48 car drive (2 hours). Distance guide to Shri Shitladevi Temple, Kelve Fort, Kelve Dam, and Beyond Sands Pure Veg Resort.",
  keywords: [
    "how to reach kelva beach from mumbai by train",
    "how to reach kelva beach by car",
    "places near sheetla devi temple kelva",
    "mumbai to kelwa beach distance travel time",
    "kelve road railway station to kelva beach auto fare",
    "driving directions to kelva beach nh 48",
    "beyond sands resort kelva location map",
  ],
  alternates: {
    canonical: "https://www.beyondsands.in/kelva-beach-location-guide",
  },
  openGraph: {
    title: "How to Reach Kelva Beach from Mumbai by Train & Car | Location Guide",
    description:
      "Step-by-step driving and train directions to Kelva Beach, Palghar. Complete landmark distance table for Shri Shitladevi Temple, Kelve Fort, and Kelve Dam.",
    url: "https://www.beyondsands.in/kelva-beach-location-guide",
    images: [{ url: "/assets/location/location-drone-shitlamata.jpg" }],
    siteName: "Beyond Sands Pure Veg Resort",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Reach Kelva Beach from Mumbai by Train & Car | Location Guide",
    description:
      "2 hours from Mumbai via NH-48 or Western Railway local train to Kelve Road. Complete travel & landmark guide.",
    images: ["/assets/location/location-drone-shitlamata.jpg"],
  },
};

const LANDMARKS_TABLE = [
  {
    landmark: "Shri Shitladevi Temple, Kelve",
    distance: "Directly Opposite (30 sec walk)",
    travelTime: "Walk across Shitladevi Road",
    significance: "Ancient revered coastal temple attracting thousands of pilgrims for morning & evening aarti",
  },
  {
    landmark: "Kelva Beach (Kelwa Beach) Shoreline",
    distance: "2-minute walk (290 meters)",
    travelTime: "2 mins stroll through casuarina groves",
    significance: "Wide 8km golden sand shoreline with casuarina trees, gentle waves, and camel rides",
  },
  {
    landmark: "Kelve Fort (Pankot Fort)",
    distance: "1.8 km",
    travelTime: "5 mins drive / 15 mins beach walk",
    significance: "16th-century historic Portuguese sea-fort built into the shoreline with panoramic Arabian Sea views",
  },
  {
    landmark: "Kelve Dam & Dandakhadi Estuary",
    distance: "3.2 km",
    travelTime: "7 mins drive",
    significance: "Scenic freshwater reservoir surrounded by forest hills; popular photography & sunset spot",
  },
  {
    landmark: "Kelve Road Railway Station (Western Railway)",
    distance: "4.8 km",
    travelTime: "10 mins auto / car ride",
    significance: "Nearest railhead with direct suburban local trains connecting to Virar, Borivali, and Mumbai",
  },
  {
    landmark: "Palghar Railway Junction Station",
    distance: "12 km",
    travelTime: "20 mins drive",
    significance: "District headquarters with express & superfast train halts connecting Gujarat, Delhi, and Mumbai",
  },
];

const TRAVEL_FAQS = [
  {
    q: "How to reach Kelva Beach from Mumbai by train?",
    a: "Take any Western Railway Dahanu-bound suburban local train from Churchgate, Dadar, Andheri, Borivali, or Virar and alight directly at Kelve Road Railway Station (approx. 1 hour 15 mins from Borivali). From Kelve Road station, shared or private auto-rickshaws are available 24/7 directly to Beyond Sands Resort (opposite Sheetla Devi Temple) for a 10-minute ride (~₹120–₹150 private).",
  },
  {
    q: "How to reach Kelva Beach from Mumbai by car or bike?",
    a: "Drive along NH-48 (Western Express Highway) passing Dahisar Toll, Ghodbunder, and Vasai-Virar towards Manor. At Mastan Naka / Manor junction, take the left exit onto Manor-Palghar Road towards Palghar town, then follow the Shitladevi Temple road to Kelva Beach. Total travel time is approximately 1.5 to 2 hours (85 km from Dahisar Toll).",
  },
  {
    q: "What are the top attractions near Sheetla Devi Temple in Kelva?",
    a: "Top attractions within 5–10 minutes include the serene Kelva Beach shoreline (290 meters away), historic 16th-century Kelve Fort (Pankot), Kelve Dam reservoir (3.2 km), lush Casuarina (Suru) forest walking trails, and fresh tender coconut plantations.",
  },
  {
    q: "Is there safe private parking for cars and tourist buses at Beyond Sands?",
    a: "Yes! Beyond Sands Pure Veg Resort provides free private on-site parking with 24/7 CCTV surveillance and security guards, accommodating up to 40 private cars and large tourist buses.",
  },
  {
    q: "How far is Beyond Sands Resort from the Kelva Beach sand?",
    a: "Beyond Sands is just a 2-minute walk (290 meters) from the Kelva Beach shoreline. You simply walk past the tranquil casuarina grove directly onto the beach.",
  },
];

export default function KelvaBeachLocationGuidePage() {
  const guideJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beyondsands.in" },
          { "@type": "ListItem", "position": 2, "name": "Kelva Beach Location Guide", "item": "https://www.beyondsands.in/kelva-beach-location-guide" }
        ]
      },
      {
        "@type": "Place",
        "name": "Kelva Beach, Palghar",
        "alternateName": "Kelwa Beach",
        "description": "Popular pristine beach destination in Palghar district, Maharashtra, known for Shri Shitladevi Temple, Kelve Fort, and peaceful coconut groves.",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 19.612193,
          "longitude": 72.729605
        },
        "sameAs": "https://en.wikipedia.org/wiki/Kelwa_Beach"
      },
      {
        "@type": "FAQPage",
        "mainEntity": TRAVEL_FAQS.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guideJsonLd) }}
      />

      <div className="min-h-[100dvh] bg-transparent text-charcoal pt-28 sm:pt-36 pb-20 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-champagne-gold mb-8">
            <Link href="/" className="hover:text-deep-navy transition-colors">Home</Link>
            <span>/</span>
            <span className="text-charcoal/60">Kelva Beach Location &amp; Travel Guide</span>
          </nav>

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8 hairline-b border-charcoal/15 pb-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne-gold/15 border border-champagne-gold/30 text-champagne-gold font-sans text-xs font-semibold tracking-wider uppercase mb-4">
                <Compass size={13} />
                <span>2 Hours from Mumbai · Western Railway &amp; NH-48</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-deep-navy tracking-tight leading-[1.1]">
                HOW TO REACH KELVA BEACH &amp; LOCATION GUIDE
              </h1>
              <p className="font-sans text-base sm:text-lg text-charcoal/75 font-light mt-4 leading-relaxed">
                Plan your seamless journey to Kelva Beach (Kelwa), Palghar. Whether traveling by Western Railway local train or self-driving via the Western Express Highway, find complete route steps, landmark distances, and nearby sights around Shri Shitladevi Temple.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 font-sans text-xs">
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/70 border border-charcoal/10 shadow-xs">
                <Train className="w-4 h-4 text-champagne-gold shrink-0" />
                <span className="font-medium text-deep-navy">10 Mins from Kelve Road Station</span>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/70 border border-charcoal/10 shadow-xs">
                <Car className="w-4 h-4 text-champagne-gold shrink-0" />
                <span className="font-medium text-deep-navy">85 km from Dahisar Toll (NH-48)</span>
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
              <span>Quick Facts · Reaching Kelva Beach &amp; Places Near Sheetla Devi Temple</span>
            </div>
            <p className="font-sans text-sm sm:text-base text-deep-navy/90 leading-relaxed font-normal">
              Kelva Beach (Kelwa), Palghar (Pin 401401) is located <strong>2 hours from Mumbai</strong> (85 km via NH-48) and <strong>10 minutes (4.8 km)</strong> from Kelve Road Railway Station on Western Railway suburban local lines. Beyond Sands Pure Veg Resort sits <strong>directly opposite Shri Shitladevi Temple</strong> and just a <strong>2-minute walk (290 meters)</strong> from Kelva Beach sand, with Kelve Fort 5 minutes away and Kelve Dam 7 minutes away.
            </p>
          </div>

          {/* Section 3.2: Semantic HTML Data Table: Landmark Distances */}
          <div className="mb-16">
            <div className="mb-4">
              <h2 className="font-display text-2xl sm:text-3xl text-deep-navy font-normal">
                Key Landmark Distances &amp; Travel Times
              </h2>
              <p className="font-sans text-xs sm:text-sm text-charcoal/70">
                Verified travel times from Beyond Sands Pure Veg Resort to major transit points and historic tourist attractions.
              </p>
            </div>
            
            <div className="overflow-x-auto rounded-2xl border border-charcoal/15 shadow-xs bg-white/90">
              <table className="w-full text-left font-sans text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-deep-navy text-warm-ivory border-b border-deep-navy/20">
                    <th scope="col" className="p-3 sm:p-4 font-medium uppercase tracking-wider text-[11px]">Landmark</th>
                    <th scope="col" className="p-3 sm:p-4 font-medium uppercase tracking-wider text-[11px] whitespace-nowrap">Distance</th>
                    <th scope="col" className="p-3 sm:p-4 font-medium uppercase tracking-wider text-[11px] whitespace-nowrap">Transit Mode &amp; Time</th>
                    <th scope="col" className="p-3 sm:p-4 font-medium uppercase tracking-wider text-[11px]">Highlights &amp; Significance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal/10 text-charcoal/90">
                  {LANDMARKS_TABLE.map((row, idx) => (
                    <tr key={idx} className="hover:bg-champagne-gold/5 transition-colors">
                      <td className="p-3 sm:p-4 font-semibold text-deep-navy">{row.landmark}</td>
                      <td className="p-3 sm:p-4 font-medium text-[#1E5E8A] whitespace-nowrap">{row.distance}</td>
                      <td className="p-3 sm:p-4 text-xs whitespace-nowrap text-charcoal/75">{row.travelTime}</td>
                      <td className="p-3 sm:p-4 text-xs text-charcoal/75 leading-relaxed">{row.significance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Step-by-Step Travel Modes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* By Train */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-charcoal/10 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-champagne-gold/20 text-deep-navy flex items-center justify-center">
                  <Train size={20} />
                </div>
                <h3 className="font-display text-2xl text-deep-navy">By Western Railway Local Train</h3>
              </div>
              <ol className="space-y-3 font-sans text-xs sm:text-sm text-charcoal/80 list-decimal pl-4 leading-relaxed font-light">
                <li>
                  <strong>Board Dahanu Local Train:</strong> From Churchgate, Dadar, Andheri, Borivali, or Virar on the Western Railway suburban line.
                </li>
                <li>
                  <strong>Alight at Kelve Road Station:</strong> Direct halt at Kelve Road station (approx. 70 mins from Borivali / 25 mins from Virar).
                </li>
                <li>
                  <strong>10-Min Auto to Resort:</strong> Take a shared or private auto-rickshaw (~₹120–₹150) directly to Beyond Sands Resort, located opposite Shri Shitladevi Temple.
                </li>
              </ol>
            </div>

            {/* By Car */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-charcoal/10 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-champagne-gold/20 text-deep-navy flex items-center justify-center">
                  <Car size={20} />
                </div>
                <h3 className="font-display text-2xl text-deep-navy">By Car via NH-48 (Highway)</h3>
              </div>
              <ol className="space-y-3 font-sans text-xs sm:text-sm text-charcoal/80 list-decimal pl-4 leading-relaxed font-light">
                <li>
                  <strong>Start from Mumbai / Thane:</strong> Drive via Western Express Highway past Dahisar Toll onto NH-48 towards Manor.
                </li>
                <li>
                  <strong>Take Manor Exit:</strong> At Mastan Naka / Manor junction, turn left onto Manor-Palghar Road heading towards Palghar town.
                </li>
                <li>
                  <strong>Reach Shitladevi Temple:</strong> From Palghar town, follow the scenic coastal coconut tree route directly to Shri Shitladevi Temple in Kelva (85 km, ~2 hours).
                </li>
              </ol>
            </div>
          </div>

          {/* Section 3.3: In-DOM Plain-HTML FAQ Block */}
          <div className="mb-16 bg-[#F8F6F1] p-6 sm:p-10 rounded-3xl border border-charcoal/15">
            <div className="max-w-2xl mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-champagne-gold/20 text-deep-navy font-sans text-xs font-semibold uppercase tracking-wider mb-2">
                <HelpCircle size={13} />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-deep-navy font-normal">
                Kelva Beach Travel &amp; Accessibility Guidance
              </h2>
            </div>

            <div className="space-y-4">
              {TRAVEL_FAQS.map((faq, idx) => (
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
