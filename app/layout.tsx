import type { Metadata, Viewport } from "next";
import { Baloo_2 } from "next/font/google";
import { GeistSans } from "geist/font/sans";

import { Providers } from "@/components/providers";
import { site } from "@/lib/site";
import { siteUrl } from "@/lib/utils";

import "./globals.css";

/**
 * Baloo 2 — display redondeada tipo "bubble"/comic, muy legible en títulos.
 * Detona el tema del logo sin sacrificar lectura. Self-hosted por next/font
 * (sin round-trip en runtime). Geist Sans es el cuerpo de texto.
 */
const displayFont = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display-comic",
  display: "swap",
});

/**
 * Metadata global (ES por defecto — mercado primario). Cada página localizada
 * sobreescribe título/descr/alternates. Keywords orientadas a búsqueda local.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.brand} — Clases de inglés en Chihuahua`,
    template: `%s · ${site.brand}`,
  },
  description:
    "Clases de inglés en Chihuahua con Zaida Armenta, maestra certificada. Clases particulares, para niños, conversación y preparación de exámenes. Presencial u online.",
  applicationName: site.brand,
  authors: [{ name: site.teacher.name }],
  creator: site.teacher.name,
  publisher: site.brand,
  keywords: [
    "clases de inglés Chihuahua",
    "maestra de inglés Chihuahua",
    "inglés particular Chihuahua",
    "aprender inglés Chihuahua",
    "clases de inglés online",
    "inglés para niños Chihuahua",
    "preparación TOEFL Chihuahua",
    "profesor de inglés Chihuahua",
    "English classes Chihuahua",
  ],
  category: "education",
  openGraph: {
    type: "website",
    siteName: site.brand,
    locale: "es_MX",
    alternateLocale: "en_US",
    url: siteUrl,
    title: `${site.brand} — Clases de inglés en Chihuahua`,
    description:
      "Aprende inglés con confianza. Clases personalizadas con una maestra certificada, presencial u online.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand} — Clases de inglés en Chihuahua`,
    description:
      "Aprende inglés con confianza. Clases personalizadas, presencial u online.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#120f23",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html
    lang="es"
    className={`${GeistSans.variable} ${displayFont.variable}`}
    suppressHydrationWarning
  >
    <body className="min-h-dvh font-sans antialiased">
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
