import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from "next/script"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "simple.sales",
  description:
    "Audit commercial gratuit en 48h pour dirigeants et directeurs commerciaux. 3 leviers concrets pour améliorer vos ventes. +50 entreprises accompagnées. Livré sous 48h.",
  icons: {
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={jetbrainsMono.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://simplesales.fr/#organization",
                  name: "Simple Sales",
                  url: "https://simplesales.fr",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://simplesales.fr/icon.png",
                  },
                  description:
                    "Expert français en formation et consulting commercial B2B. Accompagnement personnalisé pour PME et ETI : diagnostic commercial, optimisation processus de vente, formation équipes commerciales.",
                  foundingDate: "2020",
                  founder: {
                    "@type": "Person",
                    "@id": "https://simplesales.fr/#founder",
                  },
                  areaServed: {
                    "@type": "Country",
                    name: "France",
                  },
                  serviceType: [
                    "Consulting Commercial B2B",
                    "Formation Commerciale",
                    "Diagnostic Commercial",
                    "Optimisation Processus de Vente",
                  ],
                  sameAs: ["https://www.linkedin.com/in/edouard-tiem"],
                },
                {
                  "@type": "Person",
                  "@id": "https://simplesales.fr/#founder",
                  name: "Edouard Tiem",
                  jobTitle: "Fondateur et Consultant Commercial",
                  worksFor: {
                    "@type": "Organization",
                    "@id": "https://simplesales.fr/#organization",
                  },
                  description:
                    "Expert en transformation commerciale B2B avec 15+ ans d'expérience en direction commerciale. Spécialiste diagnostic commercial et optimisation des processus de vente.",
                  url: "https://simplesales.fr",
                  sameAs: ["https://www.linkedin.com/in/edouard-tiem"],
                  image: "https://simplesales.fr/images/edouard-tiem-photo.jpg",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://simplesales.fr/#website",
                  url: "https://simplesales.fr",
                  name: "Simple Sales",
                  description:
                    "Diagnostic commercial gratuit en 48h pour identifier les angles morts qui freinent votre croissance commerciale B2B.",
                  publisher: {
                    "@type": "Organization",
                    "@id": "https://simplesales.fr/#organization",
                  },
                  inLanguage: "fr-FR",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-mono">
        <Script
          src="https://app.lemlist.com/api/visitors/tracking?k=NPtst5jGEtlTfexZH1hwoKuHD8ekFDW3Qog%2BiV7SQww%3D&t=tea_2XDo294Wtks6F4K9e"
          strategy="afterInteractive"
        />
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics debug={process.env.NODE_ENV === "development"} />
      </body>
    </html>
  )
}
