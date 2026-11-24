import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScroll";
import { SkySystem } from "@/components/sky/SkySystem";
import { Header } from "@/components/header/Header";
import { WhatsAppFab } from "@/components/hero/WhatsAppFab";
import { InstagramFab } from "@/components/hero/InstagramFab";
import { BackToTop } from "@/components/ui/BackToTop";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { WaterPreloader } from "@/components/ui/WaterPreloader";
import { QuickEnquiryModal, QuickEnquiryFloatingTrigger } from "@/components/ui/QuickEnquiryModal";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beyond Sands Pure Veg Resort | Best Resort in Kelva Beach, Palghar",
  description:
    "Official website of Beyond Sands Pure Veg Resort, Kelva Beach, Palghar (Pin 401401). 100% Pure Veg & Jain dining, 2-minute walk (290m) to beach, opposite Shri Shitladevi Temple, 40x25ft swimming pool with lifeguard, and family AC rooms 2 hours from Mumbai.",
  authors: [{ name: "Beyond Sands Pure Veg Resort" }],
  metadataBase: new URL("https://www.beyondsands.in"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "best resort in palghar",
    "kelva beach resort",
    "kelwa resort",
    "kelve resort",
    "Beyond Sands Pure Veg Resort",
    "pure veg resort palghar",
    "jain resort near mumbai",
    "kelva beach resort with swimming pool",
    "one day picnic resort palghar",
    "resort near shitladevi temple kelva",
    "family resort in palghar near mumbai",
    "ac dormitory in kelve",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/brand/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Beyond Sands Pure Veg Resort | Best Resort in Kelva Beach, Palghar",
    description:
      "100% Pure Veg & Jain resort in Kelva Beach, Palghar (Pin 401401). Opposite Shri Shitladevi Temple, 2-min walk (290m) to Kelva Beach, 40x25ft pool with lifeguard, and family AC rooms.",
    url: "https://www.beyondsands.in",
    siteName: "Beyond Sands Pure Veg Resort",
    images: [
      {
        url: "/assets/hero/hero-desktop-poster.jpg",
        width: 1600,
        height: 1200,
        alt: "Beyond Sands Pure Veg Resort Kelva Beach Palghar",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond Sands Pure Veg Resort | Best Resort in Kelva Beach, Palghar",
    description:
      "100% Pure Veg & Jain resort in Kelva Beach, Palghar (Pin 401401). 2-min walk (290m) to beach, opposite Shri Shitladevi Temple, 40x25ft pool, and family AC rooms.",
    images: ["/assets/hero/hero-desktop-poster.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Resort", "LodgingBusiness"],
  "name": "Beyond Sands Pure Veg Resort",
  "alternateName": [
    "Beyond Sands Resort",
    "Beyond Sands Kelva",
    "Beyond Sands Palghar",
    "Beyond Sands Pure Veg Resort Kelwa Beach"
  ],
  "url": "https://www.beyondsands.in/",
  "telephone": "+91 99238 95055",
  "email": "beyondsandsresort@gmail.com",
  "priceRange": "₹4,500 - ₹6,500",
  "servesCuisine": ["Indian", "Vegetarian", "Jain", "Gujarati", "Maharashtrian"],
  "image": [
    "https://www.beyondsands.in/assets/hero/hero-desktop-poster.jpg",
    "https://www.beyondsands.in/assets/rooms/garden-view-main.jpg",
    "https://www.beyondsands.in/assets/location/location-drone-shitlamata.jpg"
  ],
  "description": "Beyond Sands Pure Veg Resort is a premier 100% Pure Vegetarian & Jain coastal retreat in Kelva Beach (Kelwa), Palghar (Pin: 401401). Situated opposite Shri Shitladevi Temple and a 2-minute walk (290 meters) from Kelva Beach, offering a 40x25ft swimming pool with lifeguard, rain dance, AC family rooms, and group dormitories 2 hours from Mumbai.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Survey No. 1000, 1709, 1710, Shitladevi Road, Opposite Shri Shitladevi Temple, Near Kelva Beach",
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
  "areaServed": [
    "Kelva Beach",
    "Kelwa Beach",
    "Kelve",
    "Palghar",
    "Mumbai",
    "Thane",
    "Vasai",
    "Virar"
  ],
  "sameAs": [
    "https://www.instagram.com/beyondsands/",
    "https://en.wikipedia.org/wiki/Kelwa_Beach"
  ],
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "100% Pure Vegetarian Kitchen", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Strict Jain Food (No Onion/Garlic)", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "40x25ft Swimming Pool with Lifeguard", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Rain Dance Arena", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "15,000 sq ft Wedding Lawn", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Free Private Parking", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "290m Walk to Kelva Beach", "value": true }
  ],
  "checkinTime": "13:00",
  "checkoutTime": "11:00",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.2",
    "reviewCount": "40"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased relative min-h-[100dvh] text-charcoal bg-transparent selection:bg-champagne-gold selection:text-deep-navy">
        <WaterPreloader />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <SmoothScrollProvider>
          <ScrollProgressBar />
          <SkySystem />
          <Header />
          <main id="main-content" role="main" className="relative z-10 w-full max-w-full overflow-x-clip md:overflow-visible">
            {children}
          </main>
          <div className="noise-overlay hidden md:block" aria-hidden="true" />

          {/* Floating WhatsApp Concierge on Right, Instagram on Left & Back to Top */}
          <InstagramFab />
          <WhatsAppFab />
          <QuickEnquiryFloatingTrigger />
          <BackToTop />
          <QuickEnquiryModal />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
