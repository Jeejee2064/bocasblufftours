import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.bocasblufftours.com"),

  title: {
    default: "WildBluff | Jungle & Beach Nature Tours · Bocas del Toro, Panama",
    template: "%s | WildBluff",
  },
  description:
    "Guided jungle and beach tours with Luis, a native Ngöbe guide from Bluff Beach, Bocas del Toro. Discover sloths, howler monkeys, poison dart frogs, and tropical wildlife on a small-group tour in Panama.",

  keywords: [
    "Bocas del Toro tours",
    "Bluff Beach tours",
    "Panama nature tour",
    "jungle tour Panama",
    "Ngöbe guide",
    "wildlife tour Bocas del Toro",
    "sloth tour Panama",
    "eco tour Panama",
    "Bluff Beach guide",
    "small group nature tour",
  ],

  authors: [{ name: "Luis", url: "https://www.bocasblufftours.com" }],
  creator: "WildBluff",

  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "es_PA",
    url: "https://www.bocasblufftours.com",
    siteName: "WildBluff",
    title: "WildBluff | Jungle & Beach Nature Tours · Bocas del Toro, Panama",
    description:
      "Small-group jungle and beach tours with Luis, a native Ngöbe guide from Bluff Beach, Bocas del Toro, Panama. Sloths, monkeys, exotic birds and more.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WildBluff nature tours — Bluff Beach, Bocas del Toro, Panama",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WildBluff | Jungle & Beach Nature Tours · Bocas del Toro, Panama",
    description:
      "Small-group jungle and beach tours with Luis, a native Ngöbe guide from Bluff Beach, Bocas del Toro, Panama.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://www.bocasblufftours.com",
    languages: {
      "en":    "https://www.bocasblufftours.com",
      "es":    "https://www.bocasblufftours.com/es",
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

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}