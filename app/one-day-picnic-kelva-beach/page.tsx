import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/footer/Footer";
import {
  Clock,
  Users,
  UtensilsCrossed,
  Waves,
  Music,
  CheckCircle2,
  Calendar,
  Sparkles,
  ShieldCheck,
  MapPin,
  HelpCircle,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { RESORT_FACTS } from "@/lib/resortFacts";

export const metadata: Metadata = {
  title: "One Day Picnic Resort in Kelva Beach Price with Pool & Food | Beyond Sands",
  description:
    "Book the ₹2,200/person One Day Picnic package at Beyond Sands Pure Veg Resort, Kelva Beach (10:00 AM – 5:00 PM). Includes 40x25ft swimming pool with lifeguard, rain dance, Pure Veg & Jain breakfast, buffet lunch, hi-tea, and 2-min walk (290m) to beach.",
  keywords: [
    "one day picnic resort in kelva beach price",
    "kelva beach one day picnic with swimming pool",
    "one day picnic resort with rain dance pure veg food",
    "kelwa beach day picnic package",
    "palghar day picnic resort pure veg",
    "resort in kelva for one day picnic for family",
    "jain one day picnic resort near mumbai",
  ],
  alternates: {
    canonical: "https://www.beyondsands.in/one-day-picnic-kelva-beach",
  },
  openGraph: {
    title: "One Day Picnic Resort in Kelva Beach Price with Pool & Food | Beyond Sands",
    description:
      "All-inclusive ₹2,200/person package (10 AM - 5 PM) with 40x25ft pool with lifeguard, rain dance, 100% Pure Veg & Jain meals, opposite Shri Shitladevi Temple.",
    url: "https://www.beyondsands.in/one-day-picnic-kelva-beach",
    images: [{ url: "/assets/faq/faq-3-swimming-pool.jpg" }],
    siteName: "Beyond Sands Pure Veg Resort",
  },
  twitter: {
    card: "summary_large_image",
    title: "One Day Picnic Resort in Kelva Beach Price with Pool & Food | Beyond Sands",
    description:
      "₹2,200/person all-inclusive 10 AM – 5 PM day picnic in Kelva Beach with 40x25ft pool, rain dance, pure veg & Jain buffet.",
    images: ["/assets/faq/faq-3-swimming-pool.jpg"],
  },
};

const ITINERARY_TABLE = [
  {
    time: "10:00 AM – 10:15 AM",
    activity: "Arrival & Welcome Drink",
    details: "Fresh chilled Kokum Sherbet or Tender Coconut water amidst coconut palm canopies",
  },
  {
    time: "10:15 AM – 11:15 AM",
    activity: "Coastal Pure Veg Breakfast",
    details: "Hot steamed Idlis, Coconut Chutney, piping Sambar, Coastal Poha, Upma, Masala Chai & Coffee",
  },
  {
    time: "11:15 AM – 01:00 PM",
    activity: "Swimming Pool Session",
    details: "Access to 40x25ft filtered pool with dedicated lifeguard on duty & poolside sun deck",
  },
  {
    time: "01:00 PM – 02:30 PM",
    activity: "Grand Pure Veg & Jain Lunch Buffet",
    details: "2 Special Paneer/Veg Subzis, Gujarati Dal, Kadhi, Steamed Basmati Rice, Hot Rotis/Puri, Farsan, Sweet & Salads",
  },
  {
    time: "02:30 PM – 03:45 PM",
    activity: "Rain Dance Arena with Music",
    details: "Enclosed overhead mist rain shower dance floor with high-fidelity sound system",
  },
  {
    time: "03:45 PM – 04:30 PM",
    activity: "Garden Relaxation & Beach Stroll",
    details: "Relax on 15,000 sq ft lawns or take a 2-minute walk (290m) to Kelva Beach shoreline",
  },
  {
    time: "04:30 PM – 05:00 PM",
    activity: "Evening Hi-Tea & Farewell",
    details: "Crispy Pakodas/Bhajiyas, Coastal Snacks, and fresh cutting Masala Chai before departure",
  },
];

const PICNIC_FAQS = [
  {
    q: "What is the price of a One Day Picnic at Beyond Sands Kelva Beach?",
    a: "The One Day Picnic package is priced at ₹2,200 per person (all-inclusive). Children below 5 years are complimentary. The package includes welcome drinks, breakfast, lunch buffet, hi-tea snacks, full swimming pool access, and rain dance.",
  },
  {
    q: "What are the exact timings for the day picnic package?",
    a: "The day picnic package runs from 10:00 AM to 5:00 PM. Guests are welcome to arrive at 10:00 AM and enjoy all amenities until 5:00 PM.",
  },
  {
    q: "Are the swimming pool and rain dance included in the price?",
    a: "Yes! The package includes full access to our 40ft x 25ft swimming pool with certified lifeguard supervision and our lively rain dance arena with sound system.",
  },
  {
    q: "Do you serve strict Jain food during the One Day Picnic?",
    a: "Yes. We maintain a strictly 100% pure vegetarian kitchen with dedicated separate preparations for Jain guests (cooked without onion, garlic, or root vegetables). Please inform us during booking.",
  },
  {
    q: "Are changing rooms and lockers provided for day picnic guests?",
    a: "Yes, we provide clean, hygienic changing rooms and shower facilities for both ladies and gents, as well as safe luggage storage areas.",
  },
];

export default function OneDayPicnicKelvaBeachPage() {
  const whatsappUrl =
    "https://wa.me/919923895055?text=" +
    encodeURIComponent(
      "Hi Beyond Sands! I'm interested in booking the ₹2,200/person One-Day Picnic package at Kelva Beach. Please share availability."
    );

  const picnicJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beyondsands.in" },
          { "@type": "ListItem", "position": 2, "name": "One Day Picnic Kelva Beach", "item": "https://www.beyondsands.in/one-day-picnic-kelva-beach" }
        ]
      },
      {
        "@type": "Product",
        "name": "One Day Picnic Package — Beyond Sands Pure Veg Resort",
        "image": "https://www.beyondsands.in/assets/faq/faq-3-swimming-pool.jpg",
        "description": "Full day pure veg picnic package in Kelva Beach (10:00 AM – 5:00 PM) featuring 40x25ft swimming pool with lifeguard, rain dance, pure veg & Jain breakfast, lunch buffet, and evening hi-tea.",
        "brand": {
          "@type": "Brand",
          "name": "Beyond Sands Pure Veg Resort"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": "2200",
          "priceValidUntil": "2026-12-31",
          "availability": "https://schema.org/InStock",
          "url": "https://www.beyondsands.in/one-day-picnic-kelva-beach"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": PICNIC_FAQS.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(picnicJsonLd) }}
      />

      <div className="min-h-[100dvh] bg-transparent text-charcoal pt-28 sm:pt-36 pb-20 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-champagne-gold mb-8">
            <Link href="/" className="hover:text-deep-navy transition-colors">Home</Link>
            <span>/</span>
            <span className="text-charcoal/60">One Day Picnic Kelva Beach</span>
          </nav>

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8 hairline-b border-charcoal/15 pb-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne-gold/15 border border-champagne-gold/30 text-champagne-gold font-sans text-xs font-semibold tracking-wider uppercase mb-4">
                <Sparkles size={13} />
                <span>₹2,200/Person All-Inclusive Day Outing</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-deep-navy tracking-tight leading-[1.1]">
                ONE DAY PICNIC RESORT IN KELVA BEACH
              </h1>
              <p className="font-sans text-base sm:text-lg text-charcoal/75 font-light mt-4 leading-relaxed">
                Looking for the best one-day picnic resort in Kelva Beach (Kelwa), Palghar? Beyond Sands provides an all-inclusive 100% pure vegetarian and Jain retreat with a 40x25ft swimming pool with lifeguard, rain dance arena, lush lawns, and delicious Konkani &amp; Gujarati food just 2 hours from Mumbai.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 font-sans text-xs">
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/70 border border-charcoal/10 shadow-xs">
                <Clock className="w-4 h-4 text-champagne-gold shrink-0" />
                <span className="font-medium text-deep-navy">10:00 AM – 5:00 PM</span>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/70 border border-charcoal/10 shadow-xs">
                <Waves className="w-4 h-4 text-champagne-gold shrink-0" />
                <span className="font-medium text-deep-navy">40x25ft Pool with Lifeguard</span>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/70 border border-charcoal/10 shadow-xs">
                <MapPin className="w-4 h-4 text-champagne-gold shrink-0" />
                <span className="font-medium text-deep-navy">2-Min Walk (290m) to Kelva Beach</span>
              </div>
            </div>
          </div>

          {/* 3.1: Answer-First Quick Facts Box */}
          <div className="mb-12 p-5 sm:p-7 rounded-2xl bg-[#F4EDE0] border border-[#D8C7A8] shadow-sm">
            <div className="flex items-center gap-2 text-deep-navy font-sans text-xs uppercase tracking-widest font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-champagne-gold animate-pulse" />
              <span>Quick Facts · One Day Picnic Package in Kelva Beach</span>
            </div>
            <p className="font-sans text-sm sm:text-base text-deep-navy/90 leading-relaxed font-normal">
              Beyond Sands Pure Veg Resort offers an all-inclusive One Day Picnic in Kelva Beach for <strong>₹2,200 per person</strong> from <strong>10:00 AM to 5:00 PM</strong>. Located opposite Shri Shitladevi Temple (2-minute walk / 290m from Kelva Beach), the package includes a <strong>40x25ft swimming pool with lifeguard</strong>, rain dance with music, welcome drinks, breakfast, grand 100% pure vegetarian/Jain lunch buffet, and evening hi-tea. Changing rooms and private parking are provided on-site.
            </p>
          </div>

          {/* 3.2: Semantic HTML Data Table: Itinerary & Inclusions */}
          <div className="mb-16">
            <div className="mb-4">
              <h2 className="font-display text-2xl sm:text-3xl text-deep-navy font-normal">
                One-Day Picnic Schedule &amp; Activity Breakdown
              </h2>
              <p className="font-sans text-xs sm:text-sm text-charcoal/70">
                Detailed 10:00 AM – 5:00 PM sequence for family groups, corporate retreats, and school outings.
              </p>
            </div>
            
            <div className="overflow-x-auto rounded-2xl border border-charcoal/15 shadow-xs bg-white/90">
              <table className="w-full text-left font-sans text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-deep-navy text-warm-ivory border-b border-deep-navy/20">
                    <th scope="col" className="p-3 sm:p-4 font-medium uppercase tracking-wider text-[11px] whitespace-nowrap">Time Slot</th>
                    <th scope="col" className="p-3 sm:p-4 font-medium uppercase tracking-wider text-[11px]">Experience / Meal</th>
                    <th scope="col" className="p-3 sm:p-4 font-medium uppercase tracking-wider text-[11px]">Included Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal/10 text-charcoal/90">
                  {ITINERARY_TABLE.map((item, idx) => (
                    <tr key={idx} className="hover:bg-champagne-gold/5 transition-colors">
                      <td className="p-3 sm:p-4 font-semibold text-deep-navy whitespace-nowrap">{item.time}</td>
                      <td className="p-3 sm:p-4 font-medium text-[#1E5E8A]">{item.activity}</td>
                      <td className="p-3 sm:p-4 text-xs text-charcoal/75 leading-relaxed">{item.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-2xl bg-white border border-charcoal/10 shadow-xs space-y-3">
              <Waves className="w-8 h-8 text-champagne-gold" />
              <h3 className="font-display text-xl text-deep-navy">40x25ft Swimming Pool</h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                Crystal-clear, filtered pool with continuous lifeguard oversight and separate shallow splash section for kids.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-charcoal/10 shadow-xs space-y-3">
              <Music className="w-8 h-8 text-champagne-gold" />
              <h3 className="font-display text-xl text-deep-navy">Rain Dance with Sound System</h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                High-energy overhead mist showers with curated family and festive playlists to celebrate with your team or family.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-charcoal/10 shadow-xs space-y-3">
              <UtensilsCrossed className="w-8 h-8 text-champagne-gold" />
              <h3 className="font-display text-xl text-deep-navy">100% Pure Veg &amp; Jain Feast</h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                Unlimited lunch thali buffet with authentic Gujarati, Maharashtrian, and dedicated Jain (no onion, no garlic) curries.
              </p>
            </div>
          </div>

          {/* WhatsApp Direct CTA Banner */}
          <div className="mb-16 bg-deep-navy text-warm-ivory rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-champagne-gold/30 shadow-lg">
            <div className="space-y-2 text-center md:text-left">
              <span className="font-sans text-xs uppercase tracking-widest text-champagne-gold font-semibold">
                Instant Group Reservations
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-warm-ivory">
                Book Your ₹2,200 One-Day Picnic Package
              </h3>
              <p className="font-sans text-xs sm:text-sm text-warm-ivory/70 max-w-xl">
                Direct WhatsApp booking ensures guaranteed group discounts, custom Jain menu planning, and reserved poolside seating.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-8 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-sans text-xs uppercase tracking-wider font-semibold flex items-center gap-2.5 transition-all shadow-md hover:scale-105 shrink-0 cursor-pointer"
            >
              <WhatsAppIcon size={18} />
              <span>Book via WhatsApp Concierge</span>
            </a>
          </div>

          {/* 3.3: In-DOM Plain-HTML FAQ Block */}
          <div className="mb-16 bg-[#F8F6F1] p-6 sm:p-10 rounded-3xl border border-charcoal/15">
            <div className="max-w-2xl mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-champagne-gold/20 text-deep-navy font-sans text-xs font-semibold uppercase tracking-wider mb-2">
                <HelpCircle size={13} />
                <span>One-Day Picnic FAQ</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-deep-navy font-normal">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {PICNIC_FAQS.map((faq, idx) => (
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
