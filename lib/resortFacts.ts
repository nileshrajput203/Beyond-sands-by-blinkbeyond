/**
 * Beyond Sands Pure Veg Resort — Canonical Entity & Fact Registry
 * Single Source of Truth for Technical SEO, AEO, and GEO.
 */

export const RESORT_FACTS = {
  // Brand & Entity
  brandName: "Beyond Sands Pure Veg Resort",
  legalName: "Beyond Sands Pure Veg Resort",
  alternateNames: [
    "Beyond Sands Resort",
    "Beyond Sands Kelva",
    "Beyond Sands Palghar",
    "Beyond Sands Pure Veg Resort Kelwa Beach",
  ],
  tagline: "100% Pure Veg & Jain Coastal Sanctuary in Kelva Beach, Palghar",

  // Physical Location & NAP
  address: {
    street: "Survey No. 1000, 1709, 1710, Shitladevi Road, Opposite Shri Shitladevi Temple, Near Kelva Beach",
    locality: "Kelva",
    district: "Palghar",
    region: "Maharashtra",
    postalCode: "401401",
    country: "IN",
    countryName: "India",
    formatted:
      "Survey No. 1000, 1709, 1710, Shitladevi Road, Opposite Shri Shitladevi Temple, Near Kelva Beach, Kelva, Palghar, Maharashtra 401401",
    shortFormatted: "Opposite Shri Shitladevi Temple, Kelva Beach Road, Kelva, Palghar 401401",
  },
  geo: {
    latitude: 19.612193,
    longitude: 72.729605,
  },

  // Contact & Concierge
  phone: "+91 99238 95055",
  phoneRaw: "+919923895055",
  whatsapp: "+91 99238 95055",
  whatsappUrl: "https://wa.me/919923895055",
  email: "beyondsandsresort@gmail.com",
  websiteUrl: "https://www.beyondsands.in",

  // Distances & Transit Times
  beachDistance: "2-minute walk (290 meters)",
  beachDistanceMeters: 290,
  templeDistance: "Directly opposite (30 seconds walk)",
  travelTimeMumbai: "2 hours from Mumbai (1.5 to 2 hours from Mumbai, Thane, Vasai & Virar)",
  travelTimeShort: "2 hours from Mumbai",
  nearestRailwayStation: "Kelve Road Railway Station (10 mins / 4.8 km)",
  palgharStationDistance: "Palghar Railway Station (20 mins / 12 km)",
  kelveFortDistance: "Kelve Fort (Pankot Fort) — 5 mins / 1.8 km",
  kelveDamDistance: "Kelve Dam — 7 mins / 3.2 km",

  // Operational Timings
  checkInTime: "01:00 PM",
  checkOutTime: "11:00 AM",
  checkIn24h: "13:00",
  checkOut24h: "11:00",

  // Verified Reviews & Social Proof
  rating: {
    value: "4.2",
    ratingValueNumber: 4.2,
    reviewCount: "40+",
    reviewCountNumber: 40,
    displayText: "4.2★ (40+ Verified Google Reviews)",
    badgeText: "4.2★ Google Rating (40+ Reviews)",
  },

  // Pricing Architecture
  pricing: {
    currency: "INR",
    priceRange: "₹4,500 - ₹6,500",
    minPrice: 4500,
    maxPrice: 6500,
    oneDayPicnicPricePerPerson: 2200,
    oneDayPicnicPriceFormatted: "₹2,200/person",
    oneDayPicnicTiming: "10:00 AM – 5:00 PM",
  },

  // Amenities & Features
  pool: {
    dimensions: "40ft x 25ft",
    features: "Swimming Pool with Dedicated Lifeguard & Rain Dance Arena",
  },
  lawn: {
    size: "15,000+ sq ft",
    name: "Celebration Lawn",
    capacity: "Up to 250 Guests",
  },
  dormitory: {
    name: "AC Group Dormitory",
    capacity: "6–15 Guests",
    minGuests: 6,
    maxGuests: 15,
  },
  diningEthos: {
    pureVeg: "100% Pure Vegetarian Kitchen (Zero Meat, Zero Eggs, Zero Alcohol on premises)",
    jainFood: "Dedicated Jain & Swaminarayan kitchen protocols (No Onion, No Garlic, No Root Vegetables)",
    cuisines: ["Indian", "Vegetarian", "Jain", "Gujarati", "Maharashtrian"],
  },

  // Citations, Semantic Aliases & Areas Served
  areasServed: [
    "Kelva Beach",
    "Kelwa Beach",
    "Kelve",
    "Palghar",
    "Mumbai",
    "Thane",
    "Vasai",
    "Virar",
    "Gujarat (Vapi, Surat)",
  ],
  socialUrls: {
    instagram: "https://www.instagram.com/beyondsands/",
    wikipediaKelva: "https://en.wikipedia.org/wiki/Kelwa_Beach",
  },
};
