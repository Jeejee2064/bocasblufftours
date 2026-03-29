import { Playfair_Display, Caveat } from "next/font/google";

import "../globals.css";

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
// METADATA — Root layout (/es) — Spanish
// ─────────────────────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://bocasblufftours.com"),

  title: {
    default: "Tours en Bocas del Toro | Excursiones Selva y Playa – Guía Ngöbe Nativo",
    template: "%s | Bocas Bluff Tours",
  },
  description:
    "Tours guiados en Bocas del Toro, Isla Colón, Panamá. Excursiones de selva y playa Playa Bluff con Luis, guía nativo Ngöbe. Grupos pequeños. Reserva por WhatsApp.",
  keywords: [
    "tours bocas del toro",
    "tour guiado bocas del toro",
    "tours isla colon panama",
    "tour selva bocas del toro",
    "tour playa bluff",
    "tour naturaleza bocas del toro",
    "guia nativo bocas del toro",
    "tour perezosos bocas del toro",
    "tour vida silvestre bocas del toro",
    "bocas bluff tours",
    "excursion bocas del toro",
    "que hacer bocas del toro",
  ],

  alternates: {
    canonical: "https://bocasblufftours.com/es",
    languages: {
      "es":        "https://bocasblufftours.com/es",
      "en":        "https://bocasblufftours.com",
      "x-default": "https://bocasblufftours.com",
    },
  },

  openGraph: {
    type:            "website",
    url:             "https://bocasblufftours.com/es",
    siteName:        "Bocas Bluff Tours",
    locale:          "es_PA",
    alternateLocale: ["en_US"],
    title:           "Tours en Bocas del Toro | Excursiones Selva y Playa con Guía Nativo",
    description:
      "Tours guiados en Bocas del Toro, Isla Colón, Panamá. Excursiones de selva y playa Playa Bluff con Luis, guía nativo Ngöbe. Solo grupos pequeños.",
    images: [
      {
        url:    "/og-image.jpg",
        width:  1200,
        height: 630,
        alt:    "Tours en Bocas del Toro – Excursiones de selva y playa Playa Bluff con guía nativo Ngöbe Luis, Isla Colón, Panamá",
      },
    ],
  },

  twitter: {
    card:        "summary_large_image",
    title:       "Tours en Bocas del Toro | Excursiones Selva y Playa",
    description: "Tours guiados en Bocas del Toro con Luis, guía nativo Ngöbe de Playa Bluff. Grupos pequeños. Reserva por WhatsApp.",
    images:      ["/og-image.jpg"],
  },

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
// JSON-LD — LocalBusiness + TouristAttraction structured data (ES)
// ─────────────────────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TouristInformationCenter"],
      "@id":   "https://bocasblufftours.com/es/#business",
      name:    "Bocas Bluff Tours",
      url:     "https://bocasblufftours.com/es",
      logo:    "https://bocasblufftours.com/icon-512.png",
      image:   "https://bocasblufftours.com/og-image.jpg",
      description:
        "Tours de naturaleza guiados en Bocas del Toro, Isla Colón, Panamá. Excursiones de selva y playa en Playa Bluff con Luis, guía nativo Ngöbe.",
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
      paymentAccepted:    "Efectivo, Pago por WhatsApp",
      areaServed: {
        "@type": "Place",
        name:    "Bocas del Toro, Panamá",
      },
      contactPoint: {
        "@type":           "ContactPoint",
        telephone:         "+50765330998",
        contactType:       "reservations",
        availableLanguage: ["Spanish", "English"],
      },
      sameAs: ["https://wa.me/50765330998"],
    },
    {
      "@type":       "TouristAttraction",
      "@id":         "https://bocasblufftours.com/es/#attraction",
      name:          "Tours de Naturaleza Playa Bluff – Bocas del Toro",
      description:   "Tours guiados de selva y playa en Bocas del Toro con guía nativo Ngöbe. Grupos pequeños, avistamiento de fauna, conocimiento cultural indígena.",
      url:           "https://bocasblufftours.com/es",
      touristType:   ["Amantes de la naturaleza", "Entusiastas de la vida silvestre", "Ecoturistas", "Familias"],
      availableLanguage: ["Spanish", "English"],
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
    <html 
      lang="es" 
      className={`${playfair.variable} ${caveat.variable}`}
      suppressHydrationWarning
    >
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