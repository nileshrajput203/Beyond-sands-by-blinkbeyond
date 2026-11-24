import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/footer/Footer";
import {
  UtensilsCrossed,
  Clock,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Leaf,
  HeartHandshake,
  HelpCircle,
  MapPin,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { RESORT_FACTS } from "@/lib/resortFacts";

export const metadata: Metadata = {
  title: "100% Pure Veg & Jain Food Resort Near Mumbai & Palghar | Beyond Sands",
  description:
    "Beyond Sands is Palghar's premier 100% Pure Vegetarian & strict Jain dining resort in Kelva Beach (Pin 401401). Strictly zero meat, zero eggs, and zero alcohol on premises. Separate Jain (no onion, no garlic) and Swaminarayan kitchen protocols.",
  keywords: [
    "100% pure veg resort near mumbai",
    "jain food resort palghar",
    "pure veg resort kelva beach",
    "jain resort kelwa beach",
    "swaminarayan food resort mumbai",
    "pure veg resort near virar vasai thane",
    "resort with jain food near shitladevi temple",
  ],
  alternates: {
    canonical: "https://www.beyondsands.in/pure-veg-jain-dining",
  },
  openGraph: {
    title: "100% Pure Veg & Jain Food Resort Near Mumbai & Palghar | Beyond Sands",
    description:
      "Strictly zero meat, eggs, or alcohol on premises. Separate Jain (no onion/garlic) kitchen. Breakfast, lunch, and dinner buffets in Kelva Beach, Palghar.",
    url: "https://www.beyondsands.in/pure-veg-jain-dining",
    images: [{ url: "/assets/faq/faq-2-pure-veg-dining.png" }],
    siteName: "Beyond Sands Pure Veg Resort",
  },
  twitter: {
    card: "summary_large_image",
    title: "100% Pure Veg & Jain Food Resort Near Mumbai & Palghar | Beyond Sands",
    description:
      "100% Pure Veg & Jain culinary sanctuary in Kelva Beach. Zero meat, eggs, or alcohol. Separate Jain preparation.",
    images: ["/assets/faq/faq-2-pure-veg-dining.png"],
  },
};

const MEAL_TABLE = [
  {
    meal: "Breakfast Buffet",
    timings: "08:30 AM – 10:30 AM",
    standardMenu: "Steamed Idli, Coconut Chutney, Hot Sambar, Coastal Poha, Upma, Fresh Fruits, Tea & Filter Coffee",
    jainMenu: "Jain Poha (no potato), Plain Steamed Idli, Jain Chutney (no raw garlic), Jain Upma, Fresh Fruits, Herbal Tea",
  },
  {
    meal: "Lunch Thali / Buffet",
    timings: "01:00 PM – 02:30 PM",
    standardMenu: "Paneer Butter Masala, Seasonal Vegetable, Gujarati Sweet Dal, Kadhi, Steamed Basmati Rice, Phulkas, Farsan & Gulab Jamun",
    jainMenu: "Jain Paneer Subzi (tomato-melon seed gravy, no onion/garlic), Jain Moong, Jain Gujarati Dal, Phulkas, Basmati Rice, Jain Farsan & Shrikhand",
  },
  {
    meal: "Evening Hi-Tea",
    timings: "04:30 PM – 05:30 PM",
    standardMenu: "Crispy Kanda/Mix Veg Pakodas, Masala Biscuits, and freshly brewed coastal Masala Chai / Coffee",
    jainMenu: "Raw Banana Crispy Bhajiyas / Methi Gota (no onion/potato), Jain Khakhra, and hot Masala Chai / Milk",
  },
  {
    meal: "Dinner Buffet",
    timings: "08:30 PM – 10:00 PM",
    standardMenu: "Special Coastal Veg Curry, Dal Tadka, Jeera Rice, Hot Butter Rotis, Roasted Papad, Pickles & Warm Halwa",
    jainMenu: "Jain Kofta Curry (banana/paneer based), Jain Moong Dal, Steamed Rice, Ghee Phulkas, Roasted Papad & Dry Fruit Kheer",
  },
];

const DINING_FAQS = [
  {
    q: "Is Beyond Sands strictly 100% Pure Vegetarian?",
    a: "Yes, completely. Beyond Sands Pure Veg Resort operates under strict sacred principles: strictly zero non-vegetarian food, zero eggs, and zero alcohol are permitted anywhere on the resort premises or brought in by guests.",
  },
  {
    q: "How is strict Jain food prepared at the resort?",
    a: "We have dedicated separate cooking utensils, chopping boards, and storage specifically for our Jain and Swaminarayan culinary preparations. Dishes are made completely free from onion, garlic, potatoes, carrots, radish, and all underground root vegetables.",
  },
  {
    q: "Can non-staying guests visit for breakfast, lunch, or dinner?",
    a: "Yes! Walk-in dining guests and day visitors to Shri Shitladevi Temple are welcome to dine in our AC dining hall or lawn terrace with advance reservation (+91 99238 95055).",
  },
  {
    q: "Do you cater for destination weddings and corporate groups?",
    a: "Yes. Our master chefs prepare lavish multi-course Gujarati, Marwari, Kathiyawadi, Punjabi, and Konkani pure-vegetarian banquet spreads for up to 250 guests on our 15,000 sq ft celebration lawns.",
  },
];

export default function PureVegJainDiningPage() {
  const diningJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beyondsands.in" },
          { "@type": "ListItem", "position": 2, "name": "Pure Veg & Jain Dining", "item": "https://www.beyondsands.in/pure-veg-jain-dining" }
        ]
      },
      {
        "@type": "Restaurant",
        "name": "Beyond Sands Pure Veg & Jain Restaurant",
        "image": "https://www.beyondsands.in/assets/faq/faq-2-pure-veg-dining.png",
        "telephone": "+91 99238 95055",
        "url": "https://www.beyondsands.in/pure-veg-jain-dining",
        "priceRange": "₹₹",
        "servesCuisine": ["Indian", "Vegetarian", "Jain", "Gujarati", "Maharashtrian"],
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
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "08:30",
            "closes": "22:00"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": DINING_FAQS.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(diningJsonLd) }}
      />

      <div className="min-h-[100dvh] bg-transparent text-charcoal pt-28 sm:pt-36 pb-20 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-champagne-gold mb-8">
            <Link href="/" className="hover:text-deep-navy transition-colors">Home</Link>
            <span>/</span>
            <span className="text-charcoal/60">Pure Veg &amp; Jain Dining</span>
          </nav>

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8 hairline-b border-charcoal/15 pb-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne-gold/15 border border-champagne-gold/30 text-champagne-gold font-sans text-xs font-semibold tracking-wider uppercase mb-4">
                <Leaf size={13} />
                <span>Zero Meat · Zero Eggs · Zero Alcohol on Premises</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-deep-navy tracking-tight leading-[1.1]">
                100% PURE VEG &amp; JAIN DINING SANCTUARY
              </h1>
              <p className="font-sans text-base sm:text-lg text-charcoal/75 font-light mt-4 leading-relaxed">
                Experience authentic vegetarian coastal hospitality in Kelva Beach, Palghar. Located directly opposite the sacred Shri Shitladevi Temple, Beyond Sands upholds uncompromising culinary purity with dedicated kitchens for Jain and Swaminarayan families just 2 hours from Mumbai.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 font-sans text-xs">
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/70 border border-charcoal/10 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-champagne-gold shrink-0" />
                <span className="font-medium text-deep-navy">Strictly Pure Veg &amp; Alcohol Free</span>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/70 border border-charcoal/10 shadow-xs">
                <Sparkles className="w-4 h-4 text-champagne-gold shrink-0" />
                <span className="font-medium text-deep-navy">Separate Jain &amp; Swaminarayan Prep</span>
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
              <span>Quick Facts · 100% Pure Veg and Jain Food Resort Near Mumbai &amp; Palghar</span>
            </div>
            <p className="font-sans text-sm sm:text-base text-deep-navy/90 leading-relaxed font-normal">
              Beyond Sands Pure Veg Resort operates a strictly <strong>100% pure vegetarian kitchen</strong> in Kelva Beach, Palghar (Pin 401401), with <strong>zero meat, zero eggs, and zero alcohol</strong> permitted on premises. Dedicated separate cooking utensils are maintained for <strong>strict Jain and Swaminarayan meals</strong> (no onion, no garlic, no root vegetables). Serving Gujarati thalis, Maharashtrian specialties, and North Indian feasts opposite Shri Shitladevi Temple, just a <strong>2-minute walk (290 meters)</strong> from Kelva Beach and <strong>2 hours from Mumbai</strong>.
            </p>
          </div>

          {/* Section 3.2: Semantic HTML Data Table: Meal Timings & Menus */}
          <div className="mb-16">
            <div className="mb-4">
              <h2 className="font-display text-2xl sm:text-3xl text-deep-navy font-normal">
                Daily Meal Schedule &amp; Pure Veg / Jain Menu Comparison
              </h2>
              <p className="font-sans text-xs sm:text-sm text-charcoal/70">
                Freshly prepared daily using premium cold-pressed oils, farm-fresh produce, and sacred traditional recipes.
              </p>
            </div>
            
            <div className="overflow-x-auto rounded-2xl border border-charcoal/15 shadow-xs bg-white/90">
              <table className="w-full text-left font-sans text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-deep-navy text-warm-ivory border-b border-deep-navy/20">
                    <th scope="col" className="p-3 sm:p-4 font-medium uppercase tracking-wider text-[11px] whitespace-nowrap">Meal Session</th>
                    <th scope="col" className="p-3 sm:p-4 font-medium uppercase tracking-wider text-[11px] whitespace-nowrap">Service Timings</th>
                    <th scope="col" className="p-3 sm:p-4 font-medium uppercase tracking-wider text-[11px]">Standard Pure Veg Menu</th>
                    <th scope="col" className="p-3 sm:p-4 font-medium uppercase tracking-wider text-[11px]">Strict Jain (No Onion/Garlic) Menu</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal/10 text-charcoal/90">
                  {MEAL_TABLE.map((item, idx) => (
                    <tr key={idx} className="hover:bg-champagne-gold/5 transition-colors">
                      <td className="p-3 sm:p-4 font-semibold text-deep-navy whitespace-nowrap">{item.meal}</td>
                      <td className="p-3 sm:p-4 whitespace-nowrap text-xs text-charcoal/70 font-medium">{item.timings}</td>
                      <td className="p-3 sm:p-4 text-xs text-charcoal/85 leading-relaxed">{item.standardMenu}</td>
                      <td className="p-3 sm:p-4 text-xs text-[#1E5E8A] leading-relaxed font-medium bg-champagne-gold/5">{item.jainMenu}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Dietary Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-2xl bg-white border border-charcoal/10 shadow-xs space-y-3">
              <ShieldCheck className="w-8 h-8 text-champagne-gold" />
              <h3 className="font-display text-xl text-deep-navy">Zero Contamination</h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                No non-veg, eggs, or liquor ever enter our kitchen or premises. Pure sattvic energy for peace of mind.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-charcoal/10 shadow-xs space-y-3">
              <Sparkles className="w-8 h-8 text-champagne-gold" />
              <h3 className="font-display text-xl text-deep-navy">Dedicated Jain Protocols</h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                Separate vessels and ladles for Jain cooking. Zero onions, garlic, potatoes, or underground tubers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-charcoal/10 shadow-xs space-y-3">
              <HeartHandshake className="w-8 h-8 text-champagne-gold" />
              <h3 className="font-display text-xl text-deep-navy">Heartfelt Coastal Hospitality</h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                Unlimited buffet hospitality served with love, featuring authentic Gujarati farsan, sweets, and Konkani spices.
              </p>
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
                Pure Veg &amp; Jain Dining Inquiries
              </h2>
            </div>

            <div className="space-y-4">
              {DINING_FAQS.map((faq, idx) => (
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
