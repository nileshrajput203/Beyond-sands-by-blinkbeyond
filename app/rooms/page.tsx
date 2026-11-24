import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer/Footer";
import {
  Bed,
  Users,
  Maximize,
  Tv,
  Wifi,
  Wind,
  Bath,
  Coffee,
  CheckCircle2,
  Eye,
  MapPin,
  Utensils,
  ShieldCheck,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { RESORT_FACTS } from "@/lib/resortFacts";

export const metadata: Metadata = {
  title: "AC Pool View Rooms & Group Dormitory Prices in Kelva Beach | Beyond Sands",
  description:
    "Official room rates for Beyond Sands Pure Veg Resort in Kelva Beach (Kelwa), Palghar (Pin 401401). AC Pool-View rooms from ₹3,999, Couple rooms from ₹3,299, and 6–15 guest dormitories from ₹6,500. 100% Pure Veg, 40x25ft pool with lifeguard, 2-min walk (290m) to beach.",
  keywords: [
    "AC pool view rooms Kelva Beach",
    "group dormitory prices in Kelva Beach",
    "kelva beach resort rooms price",
    "pure veg resort palghar rooms",
    "kelwe beach family room rates",
    "dormitory in kelve beach",
    "resort near shitladevi temple kelva rooms",
    "best resort in palghar rooms",
  ],
  alternates: {
    canonical: "https://www.beyondsands.in/rooms",
  },
  openGraph: {
    title: "AC Pool View Rooms & Group Dormitory Prices in Kelva Beach | Beyond Sands",
    description:
      "Explore 5 room categories with transparent pricing, 40x25ft pool with lifeguard, 100% pure veg dining, opposite Shri Shitladevi Temple, 2-minute walk (290m) to Kelva Beach.",
    url: "https://www.beyondsands.in/rooms",
    images: [{ url: "/assets/rooms/pool-view-main.jpg" }],
    siteName: "Beyond Sands Pure Veg Resort",
  },
  twitter: {
    card: "summary_large_image",
    title: "AC Pool View Rooms & Group Dormitory Prices in Kelva Beach | Beyond Sands",
    description:
      "Explore 5 room categories with transparent pricing, 40x25ft pool with lifeguard, 100% pure veg dining, 2-minute walk (290m) to Kelva Beach.",
    images: ["/assets/rooms/pool-view-main.jpg"],
  },
};

const ROOMS_COMPARISON = [
  {
    type: "Garden-View AC Family Room",
    size: "380 sq ft",
    bed: "1 King Size Bed",
    guests: "2–4 Guests",
    feature: "Private garden verandah facing lush coconut groves",
    price: "₹3,499",
  },
  {
    type: "Pool-View AC Deluxe Room",
    size: "380 sq ft",
    bed: "California King + Sofa Bed",
    guests: "2–4 Guests",
    feature: "Direct balcony overlooking 40x25ft swimming pool deck",
    price: "₹3,999",
  },
  {
    type: "Couple Room",
    size: "280 sq ft",
    bed: "Bespoke King Bed",
    guests: "2 Adults",
    feature: "Acoustic sound-proofing & intimate palm canopy views",
    price: "₹3,299",
  },
  {
    type: "AC Group Dormitory",
    size: "650 sq ft",
    bed: "Multiple Premium Beds",
    guests: "6–15 Guests",
    feature: "Communal lounge, dual inverter ACs & multi-bath setup",
    price: "₹6,500",
  },
  {
    type: "Garden-View AC Family Suite",
    size: "480 sq ft",
    bed: "King Bed + Twin Beds",
    guests: "4–6 Guests",
    feature: "Dual sleeping zones with direct walkout lawn verandah",
    price: "₹6,000",
  },
];

const ROOMS_DATA = [
  {
    id: "garden-view",
    name: "Garden-View AC Family Room (2–4 Guests)",
    tagline: "Waking up to tropical coconut canopies & coastal morning dew",
    badge: "Most Popular",
    price: "₹3,499",
    period: "per night (Sun–Thu)",
    weekendPrice: "₹4,499 / night (Fri–Sat)",
    capacity: "2–4 Guests",
    size: "380 sq. ft.",
    bed: "King Size Plush Mattress",
    view: "Manicured Coconut Groves & Garden Courtyard",
    image: "/assets/rooms/garden-view-main.jpg",
    features: [
      "Private breezy garden verandah with artisanal teak seating",
      "Daikin Whisper-Quiet Split AC & Ceiling Fan",
      "43\" Smart HD LED TV with streaming access",
      "Designer en-suite bathroom with 24/7 hot solar shower",
      "Complimentary high-speed fiber Wi-Fi",
      "Wholesome 100% pure vegetarian coastal breakfast included",
    ],
    whatsappMsg: "Hi! I would like to book the Garden-View AC Family Room at Beyond Sands Palghar.",
  },
  {
    id: "pool-view",
    name: "Pool-View AC Deluxe Room (2–4 Guests)",
    tagline: "Azure pool reflections & twilight golden hour breezes",
    badge: "Premier Choice",
    price: "₹3,999",
    period: "per night (Sun–Thu)",
    weekendPrice: "₹5,199 / night (Fri–Sat)",
    capacity: "2–4 Guests",
    size: "380 sq. ft.",
    bed: "California King + Convertible Sofa Bed",
    view: "40x25ft Swimming Pool Deck & Blue Hour Terrace",
    image: "/assets/rooms/pool-view-main.jpg",
    features: [
      "Direct private balcony overlooking the shimmering pool",
      "Plush sofa-bed lounge corner for reading and afternoon tea",
      "Premium Daikin Climate Control Inverter AC",
      "Tea & artisanal coffee maker with daily replenishments",
      "En-suite luxury bath with premium toiletries & fluffy linens",
      "Direct 10-step access to the pool deck and sun loungers",
    ],
    whatsappMsg: "Hi! I would like to book the Pool-View AC Deluxe Room at Beyond Sands Palghar.",
  },
  {
    id: "couple-room",
    name: "Couple Room in Kelva Beach (2 Adults)",
    tagline: "Warm ambient moods, private sanctuary & romantic quietude",
    badge: "Romantic Getaway",
    price: "₹3,299",
    period: "per night (Sun–Thu)",
    weekendPrice: "₹4,199 / night (Fri–Sat)",
    capacity: "2 Adults",
    size: "280 sq. ft.",
    bed: "Bespoke King Bed with Luxury Linens",
    view: "Secluded Palm Canopy & Starry Night Sky",
    image: "/assets/rooms/couple-room-main.webp",
    features: [
      "Intimate warm lighting with dimmable amber mood lamps",
      "Private sunlit balcony with pool and palm canopy views",
      "Silent Split Air Conditioning & rapid cooling",
      "Complimentary celebration floral welcome setup on request",
      "Sound-dampened acoustic doors for undisturbed tranquility",
      "Pure veg candlelit dinner setup available on lawn",
    ],
    whatsappMsg: "Hi! I would like to book the Couple Room Romantic Retreat at Beyond Sands Palghar.",
  },
  {
    id: "family-dorm",
    name: "AC Group Dormitory in Kelva Beach (6–15 Guests)",
    tagline: "Spacious multi-bed haven designed for cherished reunions & group stays",
    badge: "Best for Groups & Families",
    price: "₹6,500",
    period: "base package for group",
    weekendPrice: "₹7,999 / night (Fri–Sat)",
    capacity: "6 to 15 Guests",
    size: "650 sq. ft.",
    bed: "Multiple Premium Beds with Plush Mattresses",
    view: "Open Coconut Groves & Celebration Lawn Horizon",
    image: "/assets/rooms/family-dorm-main.jpg",
    features: [
      "Ultra-spacious multi-bed floor plan accommodating 6–15 guests comfortably",
      "Multiple dual-split inverter ACs for rapid room-wide cooling",
      "Individual luggage storage racks & dressing vanity mirrors",
      "Perfect for extended families, pilgrim groups & wedding guests",
      "Direct proximity to pure vegetarian dining hall & banquet",
      "Per-person meal packages available with all 4 meals included",
    ],
    whatsappMsg: "Hi! I would like to book the AC Group Dormitory (6–15 Guests) at Beyond Sands Palghar.",
  },
  {
    id: "garden-view-family",
    name: "Garden-View AC Family Suite (4–6 Guests)",
    tagline: "Serene garden sanctuary with king & twin beds for family retreats",
    badge: "Family Suite",
    price: "₹6,000",
    period: "per night (Sun–Thu)",
    weekendPrice: "₹7,499 / night (Fri–Sat)",
    capacity: "4 to 6 Guests",
    size: "480 sq. ft.",
    bed: "King Bed + Twin Beds",
    view: "Lush Emerald Garden & Palm Canopies",
    image: "/assets/rooms/garden-view-thumb3.jpg",
    features: [
      "Expansive family layout featuring bespoke King and Twin bedding",
      "Direct walk-out verandah facing coconut groves and manicured lawns",
      "Whisper-quiet Daikin Split AC & modern ceiling fans",
      "Spacious designer bathroom with 24/7 hot solar shower",
      "High-speed fiber Wi-Fi & Smart TV entertainment",
      "Complimentary wholesome pure veg coastal breakfast included",
    ],
    whatsappMsg: "Hi! I would like to book the Garden-View AC Family Suite at Beyond Sands Palghar.",
  },
];

const ROOM_FAQS = [
  {
    q: "What are the check-in and check-out timings for rooms?",
    a: "Check-in begins at 01:00 PM and check-out is by 11:00 AM. Early check-in or late check-out can be requested in advance via our WhatsApp front desk and is subject to availability.",
  },
  {
    q: "How many guests can stay in the AC Group Dormitory?",
    a: "Our AC Group Dormitory accommodates 6 to 15 guests comfortably, featuring multiple plush beds, dual inverter air conditioners, individual storage, and proximity to dining halls. It is ideal for family reunions, temple pilgrims, and group outings.",
  },
  {
    q: "Is breakfast included in the room tariff?",
    a: "Yes! All room reservations include a complimentary wholesome 100% pure vegetarian breakfast buffet with Jain options (poha, idli-sambhar, puri bhaji, fresh fruits, and hot tea/coffee). Full meal packages (Lunch, Hi-Tea, Dinner) are also available.",
  },
  {
    q: "How far are the rooms from Kelva Beach and Shitla Devi Temple?",
    a: "Beyond Sands is located directly opposite Shri Shitladevi Temple (30 seconds walk) and just a 2-minute walk (290 meters) through scenic casuarina trails to the Kelva Beach shoreline.",
  },
  {
    q: "Can we request strict Jain food without onion and garlic during our stay?",
    a: "Absolutely. We are a strictly 100% pure vegetarian resort with dedicated separate preparation for Jain and Swaminarayan guests (zero onion, garlic, or underground roots). Please mention your preference upon booking.",
  },
];

export default function RoomsPage() {
  const roomsJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beyondsands.in" },
          { "@type": "ListItem", "position": 2, "name": "Rooms & Suites", "item": "https://www.beyondsands.in/rooms" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": ROOM_FAQS.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      },
      ...ROOMS_DATA.map((room) => ({
        "@type": "HotelRoom",
        "name": room.name,
        "description": room.tagline,
        "occupancy": {
          "@type": "QuantitativeValue",
          "maxValue": room.id === "family-dorm" ? 15 : room.id === "couple-room" ? 2 : 4
        },
        "bed": {
          "@type": "BedDetails",
          "typeOfBed": room.bed
        },
        "floorSize": {
          "@type": "QuantitativeValue",
          "value": parseInt(room.size),
          "unitCode": "FTK"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": room.price.replace(/[^0-9]/g, ""),
          "availability": "https://schema.org/InStock",
          "url": "https://www.beyondsands.in/rooms"
        }
      }))
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(roomsJsonLd) }}
      />

      <div className="min-h-[100dvh] bg-transparent text-charcoal pt-28 sm:pt-36 pb-20 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-champagne-gold mb-8">
            <Link href="/" className="hover:text-deep-navy transition-colors">Home</Link>
            <span>/</span>
            <span className="text-charcoal/60">Rooms &amp; Suites Tariff</span>
          </nav>

          {/* Hero Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8 hairline-b border-charcoal/15 pb-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne-gold/15 border border-champagne-gold/30 text-champagne-gold font-sans text-xs font-semibold tracking-wider uppercase mb-4">
                <Sparkles size={13} />
                <span>Kelva Beach · 100% Pure Veg Sanctuary</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-deep-navy tracking-tight leading-[1.1]">
                AC ROOMS &amp; GROUP DORMITORIES
              </h1>
              <p className="font-sans text-base sm:text-lg text-charcoal/75 font-light mt-4 leading-relaxed">
                Step inside Palghar's finest seaside accommodations. Located <strong>directly opposite Shri Shitladevi Temple</strong> and a gentle <strong>2-minute walk (290 meters) from Kelva Beach</strong>, every room features split AC, plush bedding, and 100% pure vegetarian &amp; Jain hospitality.
              </p>
            </div>

            {/* Quick USP Badges */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 font-sans text-xs">
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/70 border border-charcoal/10 shadow-xs">
                <MapPin className="w-4 h-4 text-champagne-gold shrink-0" />
                <span className="font-medium text-deep-navy">2-Min Walk (290m) to Kelva Beach</span>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/70 border border-charcoal/10 shadow-xs">
                <Utensils className="w-4 h-4 text-champagne-gold shrink-0" />
                <span className="font-medium text-deep-navy">100% Pure Veg &amp; Strict Jain Kitchen</span>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/70 border border-charcoal/10 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-champagne-gold shrink-0" />
                <span className="font-medium text-deep-navy">40x25ft Pool with Dedicated Lifeguard</span>
              </div>
            </div>
          </div>

          {/* Section 3.1: Answer-First Quick Facts Box */}
          <div className="mb-12 p-5 sm:p-7 rounded-2xl bg-[#F4EDE0] border border-[#D8C7A8] shadow-sm">
            <div className="flex items-center gap-2 text-deep-navy font-sans text-xs uppercase tracking-widest font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-champagne-gold animate-pulse" />
              <span>Quick Facts · AC Pool-View Rooms &amp; Dormitory Prices in Kelva Beach</span>
            </div>
            <p className="font-sans text-sm sm:text-base text-deep-navy/90 leading-relaxed font-normal">
              Beyond Sands Pure Veg Resort offers 5 air-conditioned room categories in Kelva Beach (Kelwa), Palghar, starting from <strong>₹3,299 to ₹6,500/night</strong>. Located opposite Shri Shitladevi Temple and a <strong>2-minute walk (290 meters)</strong> from Kelva Beach, all stays include 100% pure vegetarian/Jain breakfast, access to our <strong>40x25ft swimming pool with lifeguard</strong> and rain dance arena. Check-in is at <strong>01:00 PM</strong> and check-out is at <strong>11:00 AM</strong>.
            </p>
          </div>

          {/* Section 3.2: Semantic HTML Comparison Data Table */}
          <div className="mb-16">
            <div className="mb-4">
              <h2 className="font-display text-2xl sm:text-3xl text-deep-navy font-normal">
                Room Tariff &amp; Specifications Comparison
              </h2>
              <p className="font-sans text-xs sm:text-sm text-charcoal/70">
                Transparent comparison of all room types, capacities, key features, and starting tariffs in Indian Rupees (INR).
              </p>
            </div>
            
            <div className="overflow-x-auto rounded-2xl border border-charcoal/15 shadow-xs bg-white/90">
              <table className="w-full text-left font-sans text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-deep-navy text-warm-ivory border-b border-deep-navy/20">
                    <th scope="col" className="p-3 sm:p-4 font-medium uppercase tracking-wider text-[11px]">Room Type</th>
                    <th scope="col" className="p-3 sm:p-4 font-medium uppercase tracking-wider text-[11px]">Size</th>
                    <th scope="col" className="p-3 sm:p-4 font-medium uppercase tracking-wider text-[11px]">Bed Setup</th>
                    <th scope="col" className="p-3 sm:p-4 font-medium uppercase tracking-wider text-[11px]">Max Guests</th>
                    <th scope="col" className="p-3 sm:p-4 font-medium uppercase tracking-wider text-[11px]">Key Feature</th>
                    <th scope="col" className="p-3 sm:p-4 font-medium uppercase tracking-wider text-[11px] text-right">Starting Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal/10 text-charcoal/90">
                  {ROOMS_COMPARISON.map((r, i) => (
                    <tr key={i} className="hover:bg-champagne-gold/5 transition-colors">
                      <td className="p-3 sm:p-4 font-medium text-deep-navy">{r.type}</td>
                      <td className="p-3 sm:p-4 whitespace-nowrap">{r.size}</td>
                      <td className="p-3 sm:p-4">{r.bed}</td>
                      <td className="p-3 sm:p-4 whitespace-nowrap font-medium text-[#1E5E8A]">{r.guests}</td>
                      <td className="p-3 sm:p-4 text-xs text-charcoal/70">{r.feature}</td>
                      <td className="p-3 sm:p-4 text-right font-display text-base sm:text-lg font-semibold text-deep-navy whitespace-nowrap">
                        {r.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Detailed Room Cards Grid */}
          <div className="space-y-16 sm:space-y-24 mb-20">
            {ROOMS_DATA.map((room, idx) => (
              <article
                key={room.id}
                id={room.id}
                className="group relative bg-white/85 rounded-3xl border border-charcoal/15 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all duration-500 hover:shadow-[0_16px_40px_rgb(0,0,0,0.08)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  
                  {/* Left Column: Image */}
                  <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[440px] lg:min-h-[500px] overflow-hidden bg-neutral-200">
                    <Image
                      src={room.image}
                      alt={`${room.name} at Beyond Sands Pure Veg Resort Kelva Beach Palghar`}
                      fill
                      priority={idx < 2}
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-10">
                      <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-deep-navy/90 backdrop-blur-md text-champagne-gold font-sans text-[11px] sm:text-xs font-semibold tracking-wider uppercase border border-champagne-gold/30 shadow-md">
                        {room.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-white text-[11px] sm:text-xs backdrop-blur-md bg-black/60 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-white/20">
                      <span className="truncate">Opposite Shri Shitladevi Temple · 290m to Beach</span>
                      <span className="text-champagne-gold font-semibold shrink-0">100% Pure Veg</span>
                    </div>
                  </div>

                  {/* Right Column: Specs & CTA */}
                  <div className="lg:col-span-5 p-5 sm:p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <span className="font-sans text-xs uppercase tracking-[0.16em] text-champagne-gold font-medium block mb-2">
                        Sanctuary #{idx + 1}
                      </span>
                      <h2 className="font-display text-2xl sm:text-3xl font-medium text-deep-navy leading-tight">
                        {room.name}
                      </h2>
                      <p className="font-sans text-xs sm:text-sm text-charcoal/70 font-light mt-1.5 italic">
                        "{room.tagline}"
                      </p>

                      <div className="grid grid-cols-2 gap-2.5 my-5 py-3.5 hairline-t hairline-b border-charcoal/10 font-sans text-xs text-charcoal/80">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-champagne-gold shrink-0" />
                          <span className="font-medium">{room.capacity}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Maximize className="w-4 h-4 text-champagne-gold shrink-0" />
                          <span>{room.size}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Bed className="w-4 h-4 text-champagne-gold shrink-0" />
                          <span className="truncate">{room.bed}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4 text-champagne-gold shrink-0" />
                          <span className="truncate">{room.view}</span>
                        </div>
                      </div>

                      <div className="space-y-1.5 mb-5">
                        <p className="font-sans text-[11px] uppercase tracking-wider text-deep-navy font-semibold mb-1">
                          Room Inclusions:
                        </p>
                        {room.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-charcoal/85 font-light">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#159b4d] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 hairline-t border-charcoal/15">
                      <div className="flex items-baseline justify-between mb-3">
                        <div>
                          <div className="flex items-baseline gap-1.5">
                            <span className="font-display text-3xl font-semibold text-deep-navy">{room.price}</span>
                            <span className="font-sans text-xs text-charcoal/60">{room.period}</span>
                          </div>
                          <span className="font-sans text-[11px] text-charcoal/50 block mt-0.5">
                            Weekend rate: {room.weekendPrice}
                          </span>
                        </div>
                      </div>

                      <a
                        href={`https://wa.me/919923895055?text=${encodeURIComponent(room.whatsappMsg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-sans text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all shadow-sm hover:scale-[1.02] cursor-pointer"
                      >
                        <WhatsAppIcon size={16} />
                        <span>Book on WhatsApp Concierge</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Section 3.3: Plain-HTML In-DOM FAQ Block */}
          <div className="mb-16 bg-[#F8F6F1] p-6 sm:p-10 rounded-3xl border border-charcoal/15">
            <div className="max-w-2xl mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-champagne-gold/20 text-deep-navy font-sans text-xs font-semibold uppercase tracking-wider mb-2">
                <HelpCircle size={13} />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-deep-navy font-normal">
                Rooms &amp; Reservation Guidance
              </h2>
            </div>

            <div className="space-y-4">
              {ROOM_FAQS.map((faq, idx) => (
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
