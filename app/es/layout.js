export const metadata = {
  metadataBase: new URL("https://www.bocasblufftours.com"),

  title: {
    default: "WildBluff | Tours de Naturaleza · Bocas del Toro, Panamá",
    template: "%s | WildBluff",
  },
  description:
    "Tours guiados por selva y playa con Luis, guía nativo Ngöbe de Playa Bluff, Bocas del Toro. Descubre perezosos, monos aulladores, ranas venenosas y fauna tropical en un tour de grupo pequeño en Panamá.",

  keywords: [
    "tours Bocas del Toro",
    "tours Playa Bluff",
    "tour naturaleza Panamá",
    "tour selva Panamá",
    "guía Ngöbe",
    "tour fauna Bocas del Toro",
    "tour perezosos Panamá",
    "ecoturismo Panamá",
    "guía Playa Bluff",
    "tour grupo pequeño",
  ],

  authors: [{ name: "Luis", url: "https://www.bocasblufftours.com/es" }],
  creator: "WildBluff",

  openGraph: {
    type: "website",
    locale: "es_PA",
    alternateLocale: "en_US",
    url: "https://www.bocasblufftours.com/es",
    siteName: "WildBluff",
    title: "WildBluff | Tours de Naturaleza · Bocas del Toro, Panamá",
    description:
      "Tours de selva y playa en grupo pequeño con Luis, guía nativo Ngöbe de Playa Bluff, Bocas del Toro, Panamá. Perezosos, monos, aves exóticas y mucho más.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WildBluff tours de naturaleza — Playa Bluff, Bocas del Toro, Panamá",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WildBluff | Tours de Naturaleza · Bocas del Toro, Panamá",
    description:
      "Tours de selva y playa en grupo pequeño con Luis, guía nativo Ngöbe de Playa Bluff, Bocas del Toro, Panamá.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://www.bocasblufftours.com/es",
    languages: {
      "en":        "https://www.bocasblufftours.com",
      "es":        "https://www.bocasblufftours.com/es",
      "x-default": "https://www.bocasblufftours.com",
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function EsLayout({ children }) {
  return children;
}