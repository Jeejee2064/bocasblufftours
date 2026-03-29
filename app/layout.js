import { Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

// ─────────────────────────────────────────────────────────────────────────────
// METADATA — Root layout (/) — English default
// ─────────────────────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://bocasblufftours.com"),

  title: {
    default:  "Bocas del Toro Tours | Jungle & Beach Excursions – Native Ngöbe Guide",
    template: "%s | Bocas Bluff Tours",
  },
  description:
    "Guided tours in Bocas del Toro, Isla Colón, Panama. Jungle & Playa Bluff beach excursions with Luis, a native Ngöbe guide. Small groups. Book on WhatsApp.",
  keywords: [
    "bocas del toro tours",
    "bocas del toro guided tour",
    "isla colon tours panama",
    "jungle tour bocas del toro",
    "playa bluff tour",
    "bocas del toro nature tour",
    "native guide bocas del toro",
    "sloth tour bocas del toro",
    "wildlife tour bocas del toro",
    "bocas bluff tours",
    "bocas del toro excursion",
    "things to do bocas del toro",
  ],

  // ── Canonical & hreflang ──────────────────────────────────────────────────
  alternates: {
    canonical: "https://bocasblufftours.com",
    languages: {
      "en":        "https://bocasblufftours.com",
      "es":        "https://bocasblufftours.com/es",
      "x-default": "https://bocasblufftours.com",
    },
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type:            "website",
    url:             "https://bocasblufftours.com",
    siteName:        "Bocas Bluff Tours",
    locale:          "en_US",
    alternateLocale: ["es_PA"],
    title:           "Bocas del Toro Tours | Jungle & Beach Excursions with a Native Guide",
    description:
      "Guided tours in Bocas del Toro, Isla Colón, Panama. Jungle & Playa Bluff beach excursions with Luis, a native Ngöbe guide. Small groups only.",
    images: [
      {
        url:    "/og-image.jpg",
        width:  1200,
        height: 630,
        alt:    "Bocas del Toro Tours – Jungle & Playa Bluff beach excursions with native Ngöbe guide Luis, Isla Colón, Panama",
      },
    ],
  },

  // ── Twitter / X Card ──────────────────────────────────────────────────────
  twitter: {
    card:        "summary_large_image",
    title:       "Bocas del Toro Tours | Jungle & Beach Excursions",
    description: "Guided tours in Bocas del Toro with Luis, a native Ngöbe guide from Playa Bluff. Small groups. Book on WhatsApp.",
    images:      ["/og-image.jpg"],
  },

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet":       -1,
    },
  },

  // ── Icons ─────────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico",   sizes: "any"              },
      { url: "/icon-16.png",   type: "image/png", sizes: "16x16"   },
      { url: "/icon-32.png",   type: "image/png", sizes: "32x32"   },
      { url: "/icon-192.png",  type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png",  type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },

  manifest: "/site.webmanifest",
  category: "travel",
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD — LocalBusiness + TouristAttraction structured data (EN)
// ─────────────────────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TouristInformationCenter"],
      "@id":   "https://bocasblufftours.com/#business",
      name:    "Bocas Bluff Tours",
      url:     "https://bocasblufftours.com",
      logo:    "https://bocasblufftours.com/icon-512.png",
      image:   "https://bocasblufftours.com/og-image.jpg",
      description:
        "Guided nature tours in Bocas del Toro, Isla Colón, Panama. Jungle and beach excursions along Playa Bluff with Luis, a native Ngöbe guide.",
      telephone: "+50765330998",
      address: {
        "@type":         "PostalAddress",
        streetAddress:   "Playa Bluff",
        addressLocality: "Isla Colón",
        addressRegion:   "Bocas del Toro",
        addressCountry:  "PA",
      },
      geo: {
        "@type":    "GeoCoordinates",
        latitude:    9.4167,
        longitude:  -82.2833,
      },
      openingHoursSpecification: {
        "@type":    "OpeningHoursSpecification",
        dayOfWeek:  ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens:      "06:00",
        closes:     "18:00",
      },
      priceRange:         "$$",
      currenciesAccepted: "USD",
      paymentAccepted:    "Cash, WhatsApp payment",
      areaServed: {
        "@type": "Place",
        name:    "Bocas del Toro, Panama",
      },
      contactPoint: {
        "@type":           "ContactPoint",
        telephone:         "+50765330998",
        contactType:       "reservations",
        availableLanguage: ["English", "Spanish"],
      },
      sameAs: ["https://wa.me/50765330998"],
    },
    {
      "@type":       "TouristAttraction",
      "@id":         "https://bocasblufftours.com/#attraction",
      name:          "Playa Bluff Nature Tours – Bocas del Toro",
      description:   "Guided jungle and beach tours in Bocas del Toro with a native Ngöbe guide. Small groups, wildlife spotting, indigenous cultural knowledge.",
      url:           "https://bocasblufftours.com",
      touristType:   ["Nature lovers", "Wildlife enthusiasts", "Ecotourists", "Families"],
      availableLanguage: ["English", "Spanish"],
      address: {
        "@type":         "PostalAddress",
        addressLocality: "Isla Colón",
        addressRegion:   "Bocas del Toro",
        addressCountry:  "PA",
      },
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Layout
// ─────────────────────────────────────────────────────────────────────────────
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${caveat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}